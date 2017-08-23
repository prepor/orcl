(ns orcl.target.naive
  (:require [orcl.target.naive.impl :as impl]
            [orcl.target.naive.vars :as vars]
    #?(:cljs [cljs.js]))

  (:refer-clojure :exclude [compile]))

(defn pattern-bindings [p]
  (case (:type p)
    :var [(symbol (:var p))]
    :wildcard []
    :const []
    :record (mapcat (comp pattern-bindings second) (:pairs p))
    (:list :tuple) (mapcat pattern-bindings (:patterns p))
    :as (cons (symbol (:alias p))
              (pattern-bindings (:pattern p)))
    :cons (concat (pattern-bindings (:head p)) (pattern-bindings (:tail p)))))

(defn sequential [pattern left right]
  `(let [pattern-extractor# (impl/pattern-extractor ~pattern)
         pattern-checker#   (impl/pattern-checker ~pattern)]
     (impl/sequential ~left
                      (fn [x#]
                        (if (pattern-checker# x#)
                          (let [[~@(pattern-bindings pattern)] (pattern-extractor# x#)]
                            ~right))))))

(defn pruning [pattern left right]
  `(let [[~@(pattern-bindings pattern)] (first ~(sequential pattern right `[[~@(pattern-bindings pattern)]]))]
     ~left))

(defn parallel [left right]
  `(concat ~left ~right))

(defn otherwise [left right]
  `(impl/otherwise (fn [] ~left) (fn [] ~right)))

(defn conditional [x then else]
  `(if ~x (~then) (~else)))

(defn defs-group [defs expr]
  `(letfn [~@defs]
     ~expr))

(defn compile-def [name arity instances]
  (let [bindings (repeatedly arity gensym)]
    `(~(symbol name) [~@bindings]
       (cond
         ~@(mapcat (fn [{:keys [checker body] :as instance}]
                  [`(let [[~@(:bindings instance)] [~@bindings]]
                      ~(:checker instance))
                   `(let [[~@(:bindings instance)] [~@bindings]]
                      ~(:body instance))])
                instances)))))

(defn def-instance [params body]
  (let [bindings   (repeatedly (count params) gensym)
        extractors (repeatedly (count params) gensym)
        checkers   (repeatedly (count params) gensym)]
    {:bindings `[~@bindings]
     :checker  `(let [[~@checkers] (map impl/pattern-checker ~params)]
                  (every? (fn [[checker# v#]] (checker# v#))
                          (map vector [~@checkers] [~@bindings])))
     :body     `(let [[~@extractors] (map impl/pattern-extractor ~params)]
                  (let [~@(mapcat (fn [binding pattern extractor]
                                    [(vec (pattern-bindings pattern)) `(~extractor ~binding)]) bindings params extractors)]
                    ~body))}))

(defn compile-prelude-site [s]
  (case (:definition s)
    "Ift" `impl/prelude-ift
    "Iff" `impl/prelude-iff
    `(comp vector
           ~(case (:definition s)
              "Let" `impl/prelude-let
              "+" `impl/prelude-plus
              "-" `-
              "0-" `-
              "*" `*
              "**" `impl/prelude-pow
              "/" `/
              "%" `rem
              "<:" `<
              "<=" `<=
              ":>" `>
              ">=" `>=
              "=" `=
              "/=" `not=
              "~" `not
              "&&" `impl/prelude-and
              "||" `impl/prelude-or
              ":" `cons))))

(defn compile-import-site [s]
  (case (:definition s)
    "Coeffect" `(comp vector impl/coeffect)
    "Cell" `(comp vector impl/core-cell)
    "Println" `impl/text-println))

(defn compile-primitive [ast]
  (case (:node ast)
    :const (:value ast)
    :var (let [s (:source ast)]
           (case (:type s)
             :site (if (= :prelude (:type (:source s)))
                     (compile-prelude-site s)
                     (compile-import-site s))
             (:def :sequential :pruning :argument) (symbol (:var ast))))))

(defn checked-call [target args]
  `(let [target# ~(compile-primitive target)]
     (when-not (= ::impl/pending target#)
       (let [args# [~@(map compile-primitive args)]]
         (when-not (some #(= ::impl/pending %) args#)
           (apply target# args#))))))

(defn call [target args]
  (case (get-in target [:source :type])
    :def `(~(compile-primitive target) ~@(map compile-primitive args))
    (checked-call target args)))

(defn recur-call [args]
  `(recur ~@(map compile-primitive args)))

(defn compile [ast]
  (case (:node ast)
    :pruning (pruning (:pattern ast) (compile (:left ast)) (compile (:right ast)))
    :sequential (sequential (:pattern ast) (compile (:left ast)) (compile (:right ast)))
    :otherwise (otherwise (compile (:left ast)) (compile (:right ast)))
    :parallel (parallel (compile (:left ast)) (compile (:right ast)))
    :normalized-conditional (conditional (compile-primitive (:if ast)) (compile-primitive (:then ast)) (compile-primitive (:else ast)))
    :defs-group (defs-group (map compile (:defs ast)) (compile (:expr ast)))
    :def (compile-def (:name ast) (:arity ast) (map compile (:instances ast)))
    :def-instance (def-instance (:params ast) (compile (:body ast)))
    :call (if (:tail-pos ast)
            (recur-call (:args ast))
            (call (:target ast) (:args ast)))
    :tuple `[[~@(map compile-primitive (:values ast))]]
    :list `[(list ~@(map compile-primitive (:values ast)))]
    :record `[(hash-map ~@(mapcat (fn [[k v]] [k (compile-primitive v)]) (:pairs ast)))]
    :field-access `[(get ~(compile-primitive (:target ast)) ~(:field ast))]
    :stop nil
    (:const :var) [(compile-primitive ast)]))

#?(:cljs
   (defn cljs-eval [program]
         (prn "---EVAL" program)
         (cljs.js/eval (cljs.js/empty-state)
                       program
                       {:eval cljs.js/js-eval
                        :ns 'cljs.user
                        :def-emits-var true
                        :load #(prn "----LOAD" %)}
                       (fn [res] (:value res)))))

(defn run
  ([program] (run program {} {}))
  ([program state internal]
   (let [program' (list 'do '(ns cljs.user (:require [orcl.target.naive.impl])) program)
         coeffects (atom [])
         internal  (atom internal)]
     (binding [vars/*state* {:counter   (atom 0)
                             :realized  state
                             :coeffects coeffects
                             :internal  internal
                             :rerun     (atom false)}]
       (let [res (#?(:clj eval :cljs cljs-eval) program')]
         (if @(:rerun vars/*state*)
           (run program state @internal)
           {:state     state
            :values    res
            :coeffects @coeffects}))))))

(defn unblock [program state coeffect value]
  (run program (assoc state coeffect value) {}))