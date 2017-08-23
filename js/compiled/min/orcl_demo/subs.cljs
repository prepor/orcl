(ns orcl-demo.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re]))

(re/reg-sub
 :program
 (fn [db]
   (:program db)))

(re/reg-sub
  :state
  (fn [db]
    (:state db)))

(re/reg-sub
  :coeffects
  (fn [db]
    (:coeffects db)))

(re/reg-sub
  :realized
  (fn [db]
    (:realized db)))

(re/reg-sub
  :values
  (fn [db]
    (:values db)))