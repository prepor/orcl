(ns orcl.lexer
  (:require [blancas.kern.core :refer [<|> <$> <:> << >> <+> >>= <?> <*>] :as k]
            [blancas.kern.lexer :as lex]
            [blancas.kern.i18n :as i18n]))

;;  +--------------------------------------------------------+
;;  |                     ORC LEXER                          |
;;  +--------------------------------------------------------+
(def orc-style
  (assoc lex/basic-def
    :comment-start "{-"
    :comment-end "-}"
    :comment-line "--"
    :identifier-start (<|> k/letter (k/sym* \_) (k/sym* \$))
    :nested-comments true
    :reserved-names ["as" "def" "else" "if" "import" "include",
                     "lambda" "signal" "stop" "then" "type" "val",
                     "true" "false" "null" "_"]))

;; Then make the customized parsers.
(def rec (lex/make-parsers orc-style))

;; For easy access, store the parsers in vars.
(def trim (:trim rec))
(def lexeme (:lexeme rec))
(def sym (:sym rec))
(def new-line (:new-line rec))
(def one-of (:one-of rec))
(def none-of (:none-of rec))
(def token (:token rec))
(def word (:word rec))
(def identifier (:identifier rec))
(def field (:field rec))
(def char-lit (:char-lit rec))
(def string-lit (:string-lit rec))
(def sign (k/optional (k/one-of* "+-")))
(def oct-lit (:oct-lit rec))
(def hex-lit (:hex-lit rec))
(def bool-lit (:bool-lit rec))
(def nil-lit (:nil-lit rec))
(def parens (:parens rec))
(def braces (:braces rec))
(def angles (:angles rec))
(def brackets (:brackets rec))
(def semi (:semi rec))
(def comma (:comma rec))
(def colon (:colon rec))
(def dot (:dot rec))
(def semi-sep (:semi-sep rec))
(def semi-sep1 (:semi-sep1 rec))
(def comma-sep (:comma-sep rec))
(def comma-sep1 (:comma-sep1 rec))

;; Default decimal literal expects that there are no . after digits. But
;; {.foo=1.} is valid orc

(def dec-lit
  (let [lead (if (:leading-sign orc-style) sign (k/return nil))]
    (<?> (>>= (<:> (lexeme (<+> lead (k/many1 k/digit) lex/int-suffix)))
              (fn [x]
                (k/return (lex/read-num-lit x))))
         (i18n/i18n :dec-lit))))

(def float-lit (let [lead (if (:leading-sign orc-style) sign (k/return nil))]
                 (<?> (>>= (<:> (lexeme
                                  (<+> lead (k/many1 k/digit)
                                       (<*> (k/sym* \.) (k/many1 k/digit))
                                       (k/optional (<*> (k/one-of* "eE") sign (k/many1 k/digit)))
                                       lex/float-suffix)))
                           (fn [x] (>> (k/return (lex/read-num-lit x)) k/clear-empty)))
                      (i18n/i18n :float-lit))))

;(def dec-lit (:dec-lit rec))
(def eq-tok (<$> str (sym \=)))
(def neq-tok (token "/="))
(def lt-tok (token "<:"))
(def gt-tok (token ":>"))
(def lte-tok (token "<="))
(def gte-tok (token ">="))
(def add-tok (<$> str (sym \+)))
(def subst-tok (<$> str (sym \-)))
(def mod-tok (<$> str (sym \%)))
(def assign-tok (token ":="))
(def expn-tok (token "**"))
(def and-tok (token "&&"))
(def or-tok (token "||"))

(def mult-tok (<:> (lexeme (<< (<$> str (k/sym* \*))
                               (k/not-followed-by (k/sym* \*))))))
(def div-tok (<:> (lexeme (<< (<$> str (k/sym* \/))
                              (k/not-followed-by (k/sym* \=))))))
(def cons-tok (<:> (lexeme (<< (<$> str (k/sym* \:))
                               (k/not-followed-by
                                 (<|> (k/sym* \=) (k/sym* \>)))))))
(def dot-tok (<:> (lexeme (<< (<$> str (k/sym* \.))
                              (k/not-followed-by (k/sym* \}))))))
