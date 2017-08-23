(ns orcl-demo.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [re-frisk.core :refer [enable-re-frisk!]]
            [orcl-demo.events]
            [orcl-demo.subs]
            [orcl-demo.routes :as routes]
            [orcl-demo.views :as views]
            [orcl-demo.config :as config]))


(enable-console-print!)

(defn dev-setup []
  (when config/debug?
    (enable-re-frisk!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (routes/app-routes)
  (re-frame/dispatch-sync [:initialize-db])
  (dev-setup)
  (mount-root))
