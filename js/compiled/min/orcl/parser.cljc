(ns orcl.parser
  (:require [blancas.kern.core :as k :refer [<|> >> << <:> <$>]]
            [blancas.kern.expr :as expr]
            [orcl.lexer :as lex]
            [orcl.parser.utils :as utils]
            [clojure.pprint :as pprint]
    #?(:clj
            [clojure.java.io :as io]))
  #?(:cljs (:require-macros [blancas.kern.core :as k])))

(declare pattern)

(def value
  (<|> lex/bool-lit
       (>> (lex/word "signal") (k/return :signal))
       lex/string-lit
       lex/float-lit
       lex/dec-lit
       (>> lex/nil-lit (k/return :null))))

(def base-pattern
  (<|>
    (k/bind [x value]
      (k/return {:type  :const
                 :value x}))
    (k/bind [_ (lex/sym \_)]
      (k/return {:type :wildcard}))
    (<:> (k/bind [target lex/identifier
                  args (utils/tuple-of (k/fwd pattern))]
           (k/return {:type   :call
                      :target target
                      :args   args})))
    (k/bind [var lex/identifier]
      (k/return {:type :var
                 :var  var}))
    (k/bind [patterns (utils/tuple-of (k/fwd pattern))]
      (k/return {:type     :tuple
                 :patterns patterns}))
    (k/bind [patterns (utils/list-of (k/fwd pattern))]
      (k/return {:type     :list
                 :patterns patterns}))
    (k/bind [pairs (utils/record-of (k/fwd pattern))]
      (k/return {:type  :record
                 :pairs pairs}))))

(def cons-pattern
  (expr/chainr1 base-pattern
                (>> (lex/token ":")
                    (k/return (fn [l r]
                                {:type :cons
                                 :head l
                                 :tail r})))))

(def as-pattern
  (utils/maybe-or-left
    cons-pattern
    (k/bind [_ (lex/word "as")
             var lex/identifier]
      (k/return (fn [pattern]
                  {:type    :as
                   :pattern pattern
                   :alias   var})))))

(def pattern as-pattern)

(defn combinator-without-pattern [node c]
  (>> (lex/sym c) (k/return (fn [l r]
                              {:node node :left l :right r}))))

(defn combinator-with-pattern
  [node c]
  (k/bind [_ (lex/sym c) v (k/optional pattern) _ (lex/sym c)]
    (k/return
      (fn [l r]
        {:node    node
         :pattern (or v {:type :wildcard})
         :left    l
         :right   r}))))

(declare expr)

(def base
  (<|> (k/bind [v value]
         (k/return {:node  :const
                    :value v}))
       (k/bind [p k/get-position v lex/identifier]
         (k/return {:node :var
                    :var  v
                    :pos  p}))
       (k/bind [p k/get-position v (lex/sym "_")]
         (k/return {:node :placeholder}))
       (k/bind [v (lex/word "stop")]
         (k/return {:node :stop}))
       (k/bind [p k/get-position v (utils/list-of (k/fwd expr))]
         (k/return {:node   :list
                    :values v
                    :pos    p}))
       (k/bind [p k/get-position v (utils/record-of (k/fwd expr))]
         (k/return {:node  :record
                    :pairs v
                    :pos   p}))
       (k/bind [p k/get-position v (utils/tuple-of (k/fwd expr))]
         (k/return (if (= (count v) 1)
                     (first v)
                     {:node   :tuple
                      :values v
                      :pos    p})))
       ; Trim and Section are not supported
       ))

(def argument-op
  (<|> (k/bind [_ lex/dot-tok p k/get-position f lex/identifier]
         (k/return (fn [l] {:node   :field-access
                            :target l
                            :field  f
                            :pos    p})))
       (k/bind [_ (lex/sym \?) p k/get-position]
         (k/return (fn [l] {:node   :dereference
                            :target l
                            :pos    p})))
       (k/bind [p k/get-position v (lex/parens (lex/comma-sep (k/fwd expr)))]
         (k/return (fn [l] {:node   :call
                            :target l
                            :args   v
                            :pos    p})))))

(def call (expr/postfix1 base argument-op))

(def unary
  (<|>
    ;; lex/float-lit lex/dec-lit order is important here
    (k/bind [n (<:> (>> (lex/sym \-) (<|> lex/float-lit lex/dec-lit)))]
      (k/return {:node  :const
                 :value (- n)}))
    (k/bind [op (lex/one-of "-~") e call]
      (k/return {:node   :call
                 :target {:node :var
                          :var  (str op)}
                 :args   [e]}))
    call))

(def expn-op (utils/right-assoc-infix unary [(lex/token "**")]))

(def mult-op (utils/left-assoc-infix expn-op [lex/mult-tok
                                              lex/div-tok
                                              (lex/token "%")]))

(def additional-op (utils/left-assoc-infix mult-op [(lex/token "-")
                                                    (lex/token "+")]))

(def cons-op (utils/right-assoc-infix additional-op [lex/cons-tok]))

(def relational-op (utils/non-assoc-infix cons-op [(lex/token "<:")
                                                   (lex/token ":>")
                                                   (lex/token "<=")
                                                   (lex/token ">=")
                                                   (lex/token "=")
                                                   (lex/token "/=")]))

(def logical-op (utils/left-assoc-infix relational-op [(lex/token "||")
                                                       (lex/token "&&")]))

(def assign-op (utils/non-assoc-infix logical-op [(lex/token ":=")]))

(def sequential
  (expr/chainr1 assign-op (combinator-with-pattern :sequential \>)))

(def parallel
  (expr/chainl1 sequential (combinator-without-pattern :parallel \|)))

(def pruning
  (expr/chainl1 parallel (combinator-with-pattern :pruning \<)))

(def otherwise
  (expr/chainl1 pruning (combinator-without-pattern :otherwise \;)))

(def guard
  (k/bind [_ (lex/word "if")
           e (lex/parens (k/fwd expr))]
    (k/return e)))

(defprotocol FileSystem
  (read-file [this file]))

#?(:clj (def resources-file-system
          (reify FileSystem
            (read-file [this file] (slurp (io/resource file))))))

(defn in-memory-file-system
  [m]
  (reify FileSystem
    (read-file [this file] (m file))))

(declare declaration)
(def declarations (k/many (k/fwd declaration)))

(defn state-field [s kw]
  (get-in s [:user kw]))

(def include-declaration
  (k/bind [_ (lex/word "include")
           sl lex/string-lit]
    (fn [s]
      (let [file   (str (state-field s ::current-file) sl)
            body   (read-file (state-field s ::file-system) file)
            parsed (k/parse declarations body file
                            (assoc (:user s) ::current-file file))]
        (if (:ok parsed)
          (assoc s :value {:type         :include
                           :src          file
                           :declarations (:value parsed)})
          (assoc s :ok false
                   :error (:error parsed)))))))

(def site-declaration
  (k/bind [p k/get-position
           _ (lex/word "import")
           _ (lex/word "site")
           id lex/identifier
           _ (lex/sym \=)
           sl lex/string-lit]
    (k/return {:type       :site
               :name       id
               :definition sl
               :pos        p})))

(def def-declaration
  (k/bind [p k/get-position
           _ (lex/word "def")
           id lex/identifier
           p (lex/parens (lex/comma-sep pattern))
           g (k/optional guard)
           _ (lex/sym \=)
           b (k/fwd expr)]
    (k/return {:type   :def
               :name   id
               :body   b
               :params p
               :guard  g})))

(def val-declaration
  (k/bind [p k/get-position
           _ (lex/word "val")
           pattern pattern
           _ (lex/sym \=)
           ex (k/fwd expr)]
    (k/return {:type    :val
               :pattern pattern
               :expr    ex
               :pos     p})))

(def declaration
  (<< (<|> val-declaration
           def-declaration
           site-declaration
           include-declaration)
      (k/optional (lex/sym \#))))

(def with-declaration
  (k/bind [decl declaration
           expr (k/fwd expr)]
    (k/return {:node :declaration
               :decl decl
               :expr expr})))

(def conditional
  (k/bind [test (>> (lex/word "if") (k/fwd expr))
           then (>> (lex/word "then") (k/fwd expr))
           else (>> (lex/word "else") (k/fwd expr))]
    (k/return {:node :conditional
               :if   test :then then :else else})))

(def lambda
  (k/bind [p k/get-position
           _ (lex/word "lambda")
           params (lex/parens (lex/comma-sep pattern))
           g (k/optional guard)
           _ (lex/sym \=)
           b (k/fwd expr)]
    (k/return {:node   :lambda
               :params params
               :body   b
               :guard  g
               :pos    p})))

(def expr
  (>> lex/trim
      (<|> otherwise
           with-declaration
           conditional
           lambda)))

(def program (<< expr k/eof))

(defn parse
  ([s] (parse s (in-memory-file-system {})))
  ([s file-system]
   (let [res (k/parse program s nil {::file-system file-system})]
     (if (:ok res)
       (:value res)
       (do
         (pprint/pprint [s (:error res)])
         (throw (ex-info "Parsing error" {:error (:error res)})))))))