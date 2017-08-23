(ns orcl-demo.events
  (:require [re-frame.core :as re]
            [orcl-demo.db :as db]
            [orcl.analyzer :as analyzer]
            [orcl.parser :as parser]
            [orcl.target.naive :as compiler]))

(re/reg-event-db
 :initialize-db
 (fn  [_ _]
   db/default-db))

(re/reg-event-db
  :change-program
  (fn [db [_ text]]
    (assoc db :program text)))

(re/reg-event-db
 :run
 (fn [db _]
   (prn "---RUN" (:program db))
   (let [compiled (-> (:program db) (parser/parse) (analyzer/full) (compiler/compile))
         {:keys [values state coeffects]} (compiler/run compiled)]
     (-> db
         (assoc
           :compiled compiled
           :values values
           :coeffects (into {} coeffects)
           :realized ()
           :program-state state
           :state :running)
         (cond-> (empty? coeffects)
                 (assoc :state :completed))))))

(re/reg-event-db
  :unblock
  (fn [db [_ id value]]
    (let [{:keys [values state coeffects]} (compiler/unblock (:compiled db) (:program-state db) id (.parse js/JSON value))]
      (-> db
          (update :realized #(cons {:definition (get-in db [:coeffects id]) :value value} %))
          (update :coeffects dissoc id)
          (update :coeffects merge (into {} coeffects))
          (assoc :program-state state
                 :values values)))))
