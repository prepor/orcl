                                                            ;; from https://github.com/rlewczuk/clj-cursor/blob/master/src/clj_cursor/core.clj
(ns orcl.utils.cursor
  (:require [clojure.core :as core])
  (:refer-clojure :exclude [reset! swap!]))

(defprotocol ICursor)

(defprotocol ITransact
  (-transact! [cursor f]))

(declare to-cursor cursor?)

(deftype ValCursor [value state path]
  ICursor
  #?(:clj clojure.lang.IDeref :cljs cljs.core/IDeref)
  (#?(:clj deref :cljs -deref) [_]
    (get-in @state path value))

  ITransact
  (-transact! [_ f]
    (get-in
      (core/swap! state (if (empty? path) f #(update-in % path f)))
      path)))

(deftype MapCursor [value state path]
  ICursor
  #?(:clj clojure.lang.Counted :cljs cljs.core/ICounted)
  (#?(:clj count :cljs -count) [_]
    (count (get-in @state path value)))

 #?(:clj clojure.lang.IDeref :cljs cljs.core/IDeref)
  (#?(:clj deref :cljs -deref) [_]
    (get-in @state path value))

  #?(:clj clojure.lang.IFn :cljs cljs.core/IFn)
 (#?(:clj invoke :cljs -invoke) [this key]
    (get this key))
  (#?(:clj invoke :cljs -invoke) [this key defval]
    (get this key defval))
  #?(:clj (applyTo [this args]
    (clojure.lang.AFn/applyToHelper this args)))

  #?(:clj clojure.lang.ILookup :cljs cljs.core/ILookup)
  (#?(:clj valAt :cljs -lookup) [obj key]
    (#?(:clj .valAt :cljs -lookup) obj key nil))
  (#?(:clj valAt :cljs -lookup) [_ key defv]
    (let [value (get-in @state path value)]
      (to-cursor (get value key defv) state (conj path key) defv)))
  ITransact
  (-transact! [cursor f]
    (get-in
      (core/swap! state (if (empty? path) f #(update-in % path f)))
      path))

  #?(:clj clojure.lang.Seqable :cljs cljs.core/ISeqable)
  (#?(:clj seq :cljs -seq) [this]
    (for [[k v] @this]
      [k (to-cursor v state (conj path k) nil)])))


(deftype VecCursor [value state path]
  ICursor
  #?(:clj clojure.lang.Counted :cljs cljs.core/ICounted)
  (#?(:clj count :cljs -count) [_]
    (count (get-in @state path)))

  #?(:clj clojure.lang.IDeref :cljs cljs.core/IDeref)
  (#?(:clj deref :cljs -deref) [_]
    (get-in @state path))

  #?(:clj clojure.lang.IFn :cljs cljs.core/IFn)
  (#?(:clj invoke :cljs -invoke) [this i]
    (nth this i))
  #?(:clj (applyTo [this args]
    (clojure.lang.AFn/applyToHelper this args)))

  #?(:clj clojure.lang.ILookup :cljs cljs.core/ILookup)
  (#?(:clj valAt :cljs -lookup) [this i]
    (nth this i))
  (#?(:clj valAt :cljs -lookup) [this i not-found]
    (nth this i not-found))

  #?(:clj clojure.lang.Indexed :cljs cljs.core/IIndexed)
  (#?(:clj nth :cljs -nth) [_ i]
    (let [value (get-in @state path value)]
      (to-cursor (nth value i) state (conj path i) nil)))
  (#?(:clj nth :cljs -nth) [_ i not-found]
    (let [value (get-in @state path value)]
      (to-cursor (nth value i not-found) state (conj path i) not-found)))

  ITransact
  (-transact! [cursor f]
    (get-in
      (core/swap! state (if (empty? path) f #(update-in % path f)))
      path))

  #?(:clj clojure.lang.Seqable :cljs cljs.core/ISeqable)
  (#?(:clj seq :cljs -seq) [this]
    (for [[v i] (map vector @this (range))]
      (to-cursor v state (conj path i) nil))))


(defn- to-cursor
  ([v state path value]
   (cond
     (cursor? v) v
     (map? v) (MapCursor. value state path)
     (vector? v) (VecCursor. value state path)
     :else (ValCursor. value state path)
     )))


(defn cursor? [c]
  "Returns true if c is a cursor."
  (satisfies? ICursor c))


(defn make [v]
  "Creates cursor from supplied value v. If v is an ordinary
   data structure, it is wrapped into atom. If v is an atom,
   it is used directly, so all changes by cursor modification
   functions are reflected in supplied atom reference."
  (to-cursor (if (instance? #?(:clj clojure.lang.Atom :cljs cljs.core/Atom) v) @v v)
             (if (instance? #?(:clj clojure.lang.Atom :cljs cljs.core/Atom) v) v (atom v))
             [] nil))



(defn update! [cursor f]
  "Changes value beneath cursor by passing it to a single-argument
   function f. Old value will be passed as function argument. Function
   result will be the new value."
  (-transact! cursor f))


(defn reset! [cursor v]
  "Replaces value supplied by cursor with value v."
  (-transact! cursor (constantly v)))
