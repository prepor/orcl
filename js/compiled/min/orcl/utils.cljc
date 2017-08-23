(ns orcl.utils
  (:require [clojure.string :as str]
            [orcl.utils.hashify :as hashify]
            #?(:clj [orcl.utils.macro :as macro]))
  #?(:cljs (:require-macros [orcl.utils.macro :as macro])))



(defn sha
  [x]
  (cond
    (map? x) (if-let [sha (:sha x)] x (sha (sort-by first x)))
    (sequential? x) (sha (str/join "" (map sha x)))
    (string? x) (hashify/hashify x)
    (keyword? x) (sha (name x))
    (symbol? x) (sha (name x))
    :else (sha (str x))))

(defn with-sha [node]
  (assoc node :sha (sha node)))

(defn map-vals
  "Build map k -> (f v) for [k v] in map, preserving the initial type"
  [f m]
  (cond
    (sorted? m)
    (reduce-kv (fn [out-m k v] (assoc out-m k (f v))) (sorted-map) m)
    (map? m)
    (persistent! (reduce-kv (fn [out-m k v] (assoc! out-m k (f v))) (transient {}) m))
    :else
    (macro/for-map [[k v] m] k (f v))))

(defn index-by
  "Returns a map of the elements of `coll` keyed by the result of `f` on each
   element.  The value at each key will be a single element (in contrast to
   `clojure.core/group-by`).  Therefore `f` should generally return an unique
   key for every element - otherwise elements get discarded."
  [f coll]
  (persistent! (reduce #(assoc! %1 (f %2) %2) (transient {}) coll)))

(defn assoc-when
  "Like assoc but only assocs when value is truthy"
  [m & kvs]
  (assert (even? (count kvs)))
  (into (or m {})
        (for [[k v] (partition 2 kvs)
              :when v]
          [k v])))

;; Like clojure.walk but ast specific
(defn ast-walk
  [inner outer ast]
  (case (:node ast)
    (:pruning :sequential :parallel :otherwise) (outer (-> ast (update :left inner) (update :right inner)))
    :conditional (outer (-> ast (update :if inner) (update :then inner) (update :else inner)))
    :lambda (outer (-> ast (update :body inner) (assoc :params (mapv inner (:params ast))) (update :guard inner)))
    :declaration (outer (-> ast
                            (update :expr inner)
                            (cond->
                              (= :def (:type (:decl ast)))
                              (update-in [:decl :body] inner)

                              (= :include (:type (:decl ast)))
                              (update-in [:decl :declarations] #(map inner %)))))
    :defs-group (outer (-> ast
                           (update :expr inner)
                           (assoc :defs (mapv inner (:defs ast)))))
    :def (outer (assoc ast :instances (mapv inner (:instances ast))))
    :def-instance (outer (assoc ast :body (inner (:body ast))))
    :call (outer (-> ast (update :target inner) (assoc :args (mapv inner (:args ast)))))
    (:list :tuple) (outer (assoc ast :values (mapv inner (:values ast))))
    :record (outer (assoc ast :pairs (mapv (fn [[k v]] [k (inner v)]) (:pairs ast))))
    (:field-access :dereference) (outer (update ast :target inner))
    :normalized-conditional (outer (-> ast (update :if inner) (update :then inner) (update :else inner)))
    (:stop :const :var) (outer ast)))

(defn ast-postwalk
  [f form]
  (ast-walk (partial ast-postwalk f) f form))

(defn ast-prewalk
  [f form]
  (ast-walk (partial ast-prewalk f) identity (f form)))

(defn todo-exception [] (throw #?(:clj (RuntimeException.) :cljs (js/Error.))))