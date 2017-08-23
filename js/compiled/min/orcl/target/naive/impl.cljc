(ns orcl.target.naive.impl
  (:require [orcl.utils :as utils]
            [orcl.target.naive.vars :as vars]
            #?(:clj [orcl.target.naive.macro :as macro]))
  #?(:cljs (:require-macros [orcl.target.naive.macro :as macro])))

(defn pending-res [p]
  (case (:type p)
    (:wildcard :var :const) [::pending]
    (:list :tuple) (mapcat pending-res (:patterns p))
    :record (mapcat (comp pending-res second) (:pairs p))
    :cons (concat (pending-res (:head p)) (pending-res (:tail p)))
    :as (cons (:alias p) (pending-res (:pattern p)))))

(defn pattern-checker* [p]
  (case (:type p)
    (:wildcard :var) (constantly true)
    :const (fn [v] (= v (:value p)))
    (:list :tuple) (let [checkers (map pattern-checker* (:patterns p))]
                     (fn [v]
                       (and (sequential? v) (= (count v) (count checkers))
                            (every? (fn [[checker v]] (checker v)) (map vector checkers v)))))
    :record (let [checkers (map (comp pattern-checker* second) (:pairs p))]
              (fn [v]
                (and (map? v)
                     (every? (fn [[checker [k _]]] (checker (get v k ::not-found))) (map vector checkers (:pairs p))))))
    :cons (let [head (pattern-checker* (:head p))
                tail (pattern-checker* (:tail p))]
            (fn [v]
              (and (sequential? v)
                   (let [[x & xs] v]
                     (and (head x) (tail xs))))))
    :as (pattern-checker* (:pattern p))))

(defn pattern-checker [p]
  (let [f (pattern-checker* p)]
    (fn [v]
      (or (= ::pending v)
          (f v)))))

(defn pattern-extractor* [p]
  (case (:type p)
    :var (fn [v] [v])
    (:wildcard :const) (fn [v])
    (:list :tuple) (let [extractors (map pattern-extractor* (:patterns p))]
                     (fn [v]
                       (mapcat #(%1 %2) extractors v)))
    :record (let [extractors (map (comp pattern-extractor* second) (:pairs p))]
              (fn [v] (mapcat (fn [e [k _]] (e (get v k ::not-found))) extractors (:pairs p))))
    :cons (let [head (pattern-extractor* (:head p))
                tail (pattern-extractor* (:tail p))]
            (fn [[x & xs]]
              (concat (head x) (tail xs))))
    :as (let [e (pattern-extractor* (:pattern p))]
          (fn [v]
            (let [extracted (e v)]
              (cons v extracted))))))

(defn pattern-extractor [p]
  (let [pending (pending-res p)
        f       (pattern-extractor* p)]
    (fn [v]
      (if (= ::pending v)
        pending
        (f v)))))

(defn otherwise [left right]
  (if-let [v (seq (left))]
    v
    (right)))

(defn sequential [left right]
  (mapcat right left))

(defn prelude-pow [base pow]
  #?(:clj  (Math/pow base pow)
     :cljs (.pow js/Math base pow)))

(defn prelude-let
  ([] ::signal)
  ([x] x)
  ([x & xs] (vec (cons x xs))))

(defn prelude-plus [a b]
  (cond
    (string? a) (str a b)
    (map? a) (merge a b)
    :else (+ a b)))

(defn prelude-ift [x] (when x [::signal]))

(defn prelude-iff [x] (when-not x [::signal]))

(defn prelude-and [a b] (and a b))

(defn prelude-or [a b] (or a b))

(defn coeffect [definition]
  (macro/with-counter c
    (let [x (get-in vars/*state* [:realized c] ::not-found)]
      (if (= ::not-found x)
        (do
          (swap! (:coeffects vars/*state*) conj [c definition])
          ::pending)
        x))))

(defn internal-block [k]
  (let [v (get @(:internal vars/*state*) k ::not-found)]
    (if (= ::not-found v)
      (do
        (swap! (:internal vars/*state*) assoc k ::pending)
        ::pending)
      v)))

(defn internal-unblock [k v]
  (let [prev (get @(:internal vars/*state*) k)]
    (swap! (:internal vars/*state*) assoc k v)
    (when (= ::pending prev)
      (reset! (:rerun vars/*state*) true))))

(defn core-cell []
  (macro/with-counter c
    {"read"  (fn [] [(internal-block c)])
     "readD" (fn [] (let [v (get @(:internal vars/*state*) c ::not-found)]
                      (when-not (and (= ::not-found v) (= ::pending v))
                        v)))
     "write" (fn [v]
               (let [x (get @(:internal vars/*state*) c ::not-found)]
                 (if (or (= ::not-found x) (= ::pending x))
                   (do (internal-unblock c v)
                       [::signal])
                   nil)))}))

(defn text-println [x]
  (prn x)
  [::signal])