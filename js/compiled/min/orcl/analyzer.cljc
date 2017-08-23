(ns orcl.analyzer
  (:require [orcl.utils.cursor :as cursor]
            [orcl.utils :as utils]
            [clojure.set :as set]
            [orcl.analyzer.vars :as vars]
            [orcl.analyzer.patterns :as patterns])
  #?(:clj (:require [orcl.analyzer.macro :as macro])
     :cljs (:require-macros [orcl.analyzer.macro :as macro])))

(defn primitive? [n] (#{:const :var} (:node n)))

(defn deflate-values
  [[c & cursors] node]
  (cond
    (nil? c) @node
    (primitive? @c) (recur cursors node)
    :else (macro/with-fresh fresh
                            (let [orig @c]
                              (cursor/reset! c {:node :var :var fresh})
                              {:node    :pruning
                               :pattern {:type :var :var fresh}
                               :left    (deflate-values cursors node)
                               :right   orig}))))

(def prelude
  #{"Let" "Ift" "Iff" "-" "+" "0-" "*" "**" "/" "%" "<:" "<=" ":>" ">=" "=" "/=" "~" "&&" "||" ":"})

(def prelude-env
  (into {} (for [x prelude] [x {:type :site :source {:type :prelude} :definition x}])))

(defn bindings [ast]
  (case (:node ast)
    :var #{(:var ast)}
    :pruning (set/union (set/difference (bindings (:left ast)) (set/difference (:pattern ast))) (bindings (:right ast)))
    :sequential (set/union (bindings (:left ast)) (set/difference (bindings (:right ast)) (set/difference (:pattern ast))))))

(declare normalize)
(defn normalize* [ast]
  (case (:node ast)
    :declaration (let [decl (:decl ast)]
                   (case (:type decl)
                     :include (letfn [(enfold [[d & declarations]]
                                        (if d
                                          {:node :declaration
                                           :decl d
                                           :expr (enfold declarations)}
                                          (:expr ast)))]
                                (enfold (:declarations decl)))
                     :val {:node    :pruning
                           :pattern (:pattern decl)
                           :left    (:expr ast)
                           :right   (:expr decl)}
                     :def (-> ast
                              (assoc :decl (-> decl (update :body normalize)))
                              (update :expr normalize))
                     ast))
    :lambda (let [body (:body ast)
                  n    (str "__def_" (utils/sha body))]
              {:node :declaration
               :decl {:type   :def
                      :name   n
                      :guard  (:guard ast)
                      :params (:params ast)
                      :body   body}
               :expr {:node :var
                      :var  n}})
    (:list :tuple) (macro/as-cursor [c ast] (deflate-values (seq (:values c)) c))
    :record (macro/as-cursor [c ast] (deflate-values (map second (:pairs c)) c))
    :call (macro/as-cursor [c ast] (deflate-values (concat [(:target c)] (:args c)) c))
    :field-access (macro/as-cursor [c ast] (deflate-values [(:target c)] c))
    :conditional (let [v    (str "__v_" (utils/sha ast))
                       then (str "__then_" (utils/sha (:then ast)))
                       else (str "__else_" (utils/sha (:else ast)))]
                   {:node :declaration
                    :decl {:type   :def
                           :name   then
                           :params []
                           :body   (:then ast)}
                    :expr {:node :declaration
                           :decl {:type   :def
                                  :name   else
                                  :params []
                                  :body   (:else ast)}
                           :expr {:node    :sequential
                                  :pattern {:type :var
                                            :var  v}
                                  :left    (:if ast)
                                  :right   {:node :normalized-conditional
                                            :if   {:node :var :var v}
                                            :then {:node :var :var then}
                                            :else {:node :var :var else}}}}})
    ast))

(defn normalize [ast]
  (utils/ast-prewalk normalize* ast))

(defn with-sha [ast]
  (utils/ast-postwalk utils/with-sha ast))

(declare analyze-env)

(defn flatten-def
  ([ast] (flatten-def ast []))
  ([ast acc]
   (if (and (= :declaration (:node ast)) (= :def (:type (:decl ast))))
     (flatten-def (:expr ast) (conj acc (:decl ast)))
     [ast acc])))

;; Call in tail position if
;; - it is not in left branch of sequential,
;; - not in right branch of pruning,
;; - not in left branch of otherwise
(def ^:dynamic *tail-pos*)

(defn analyze-instance [id instance]
  (let [argument-envs (fn [i p] (map (fn [binding] [binding {:type         :argument
                                                             :position     i
                                                             :instance-sha (:sha (:body instance))
                                                             :id           id}])
                                     (patterns/pattern-bindings p)))]
    (macro/with-envs (into {} (mapcat argument-envs (range) (:params instance)))
      (binding [*tail-pos* {:id id}]
        (-> instance
            (update :body analyze-env)
            (assoc :node :def-instance))))))

(defn analyze-def* [defs-in-group [n instances]]
  (macro/with-envs (into {} (for [[_ {:keys [name usages node]}] defs-in-group]
                              [name {:type   :def
                                     :id     (:sha node)
                                     :usages usages}]))
    (assoc (get-in defs-in-group [n :node])
      :usages (get-in defs-in-group [n :usages])
      :arity (count (:params (first instances)))
      :instances (mapv (partial analyze-instance (get-in defs-in-group [n :node :sha])) instances))))

(defn analyze-defs [ast]
  (let [[ast' def-instances] (flatten-def ast)
        grouped       (group-by :name def-instances)
        defs-in-group (into {} (map (fn [[n instances]]
                                      [n {:name   n
                                          :usages (atom 0)
                                          :node   (utils/with-sha {:node      :def
                                                                   :name      n
                                                                   :instances instances})}])
                                    grouped))
        defs          (map (partial analyze-def* defs-in-group) grouped)]
    [ast' defs]))

;; TODO check target & arity
(defn check-call! [call])

(defn analyze-env [ast]
  (case (:node ast)
    :pruning (assoc ast :left (macro/with-pattern (:pattern ast) {:type     :pruning
                                                                  :node-sha (:sha (:right ast))}
                                (analyze-env (:left ast)))
                        :right (binding [*tail-pos* nil]
                                 (analyze-env (:right ast))))
    :sequential (assoc ast :right (macro/with-pattern (:pattern ast) {:type     :sequential
                                                                      :node-sha (:sha (:left ast))}
                                    (analyze-env (:right ast)))
                           :left (binding [*tail-pos* nil]
                                   (analyze-env (:left ast))))
    :otherwise (assoc ast :right (analyze-env (:right ast))
                          :left (binding [*tail-pos* nil]
                                  (analyze-env (:left ast))))
    :declaration (let [decl (:decl ast)]
                   (case (:type decl)
                     :site (macro/with-env (:name decl) {:type       :site
                                                         :source     {:type :import :pos (:pos decl)}
                                                         :definition (:definition decl)}
                             (analyze-env (:expr ast)))
                     :def (let [[ast' defs] (analyze-defs ast)]
                            (macro/with-envs (into {} (for [{:keys [name sha usages]} defs]
                                                        [name {:type   :def
                                                               :id     sha
                                                               :usages usages}]))
                              {:node :defs-group
                               :defs defs
                               :expr (analyze-env ast')}))))
    :call (let [ast' (-> ast (update :target analyze-env) (assoc :args (mapv analyze-env (:args ast))))]
            (check-call! ast')
            (let [s (get-in ast' [:target :source])]
              (if (and *tail-pos* (= :def (:type s)) (= (:id s) (:id *tail-pos*)))
                (assoc ast'
                  :tail-pos *tail-pos*)
                ast')))
    :var (if-let [source (get vars/*env* (:var ast))]
           (do
             (when (= :def (:type source))
               (swap! (:usages source) inc))
             (assoc ast :source (dissoc source :usages)))
           ;; "Undefined variable" (:var ast)
           (utils/todo-exception))
    (utils/ast-walk analyze-env identity ast)))

(defn analyze-stage2 [ast]
  (let [set-locals    (fn [ast]
                        (assoc ast :locals
                                   (case (:node ast)
                                     (:otherwise :parallel) (set/union (:locals (:left ast))
                                                                       (:locals (:right ast)))
                                     (:sequential :pruning) (set/difference (set/union (:locals (:left ast))
                                                                                       (:locals (:right ast)))
                                                                            (patterns/pattern-bindings (:pattern ast)))
                                     :normalized-conditional (set/union (:locals (:var ast))
                                                                        (:locals (:then ast))
                                                                        (:locals (:else ast)))
                                     (:field-access :call) (apply set/union
                                                                  (get-in ast [:target :locals])
                                                                  (map :locals (:args ast)))
                                     (:tuple :list) (apply set/union (map :locals (:values ast)))
                                     :record (apply set/union (map (comp :locals second) (:pairs ast)))
                                     :var (if (#{:def :site} (get-in ast [:source :type]))
                                            #{}
                                            #{(:var ast)})
                                     :defs-group (set (mapcat :locals (:defs ast)))
                                     :def (set (mapcat :locals (:instances ast)))
                                     :def-instance (apply set/difference (:locals (:body ast))
                                                          (map patterns/pattern-bindings (:params ast)))
                                     (:const :stop) #{})))
        remove-unused (fn [ast]
                        (case (:node ast)
                          :def (update ast :usages deref)
                          :defs-group
                          (let [in-use (filterv #(pos? (:usages %)) (:defs ast))]
                            (if (not-empty in-use)
                              (assoc ast :defs in-use)
                              (:expr ast)))
                          ast))]
    (utils/ast-postwalk (comp set-locals remove-unused) ast)))

(defn analyze
  ([ast] (analyze ast prelude-env))
  ([ast env]
   (binding [vars/*env* env
             *tail-pos* nil]
     (let [ast' (analyze-env ast)]
       (analyze-stage2 ast')))))

(def full (comp analyze with-sha normalize))
