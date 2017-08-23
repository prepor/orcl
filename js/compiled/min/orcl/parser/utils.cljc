(ns orcl.parser.utils
  (:require [blancas.kern.core :as k :refer [<|>]]
            [blancas.kern.expr :as expr]
            [orcl.lexer :as lex]))

(defn list-of [p]
  (lex/brackets (lex/comma-sep p)))

(defn tuple-of [p]
  (lex/parens (lex/comma-sep1 p)))

(defn crackets [p]
  (k/between (lex/token "{.") (lex/token ".}") (lex/lexeme p)))

(defn record-entry [p]
  (k/bind [f lex/identifier _ (lex/token "=") e p]
    (k/return [f e])))

(defn record-of [p]
  (crackets (lex/comma-sep (lex/lexeme (record-entry p)))))

(defn choice-or-many [xs]
  (if (= 1 (count xs))
    (first xs)
    (apply <|> xs)))

(defn infix-op
  [ops]
  (k/bind [x (choice-or-many ops)]
    (k/return (fn [l r] {:node   :call
                         :target {:node :var
                                  :var  x}
                         :args   [l r]}))))

(defn left-assoc-infix
  [p ops]
  (expr/chainl1 p (infix-op ops)))

(defn right-assoc-infix
  [p ops]
  (expr/chainr1 p (infix-op ops)))

(defn non-assoc-infix
  [p ops]
  (k/bind [l p
           opb (k/optional (k/bind [x (choice-or-many ops) r p] (k/return [x r])))]
    (if opb
      (k/return {:node   :call
                 :target {:node :var
                          :var  (first opb)}
                 :args   [l (last opb)]})
      (k/return l))))

(defn maybe-or-left
  [p q]
  (k/bind [l p]
    (<|> (k/bind [r q]
           (k/return (r l)))
         (k/return l))))

