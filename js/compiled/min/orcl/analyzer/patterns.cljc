(ns orcl.analyzer.patterns
  (:require [orcl.utils :as utils]))

(defn pattern-bindings [p]
  (case (:type p)
    :const #{}
    :wildcard #{}
    :var #{(:var p)}
    (:list :tuple) (set (mapcat pattern-bindings (:patterns p)))
    :record (set (mapcat #(pattern-bindings (second %)) (:pairs p)))
    :cons (set (concat (pattern-bindings (:head p)) (pattern-bindings (:tail p))))
    :as (conj (pattern-bindings (:pattern p)) (:alias p))
    :call (utils/todo-exception)))


(defn pattern-envs [pattern source]
  (into {} (for [p (pattern-bindings pattern)] [p source])))