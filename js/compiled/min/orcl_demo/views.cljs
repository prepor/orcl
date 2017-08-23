(ns orcl-demo.views
  (:require [re-frame.core :as re]
            [re-com.core :as c]
            [reagent.core :as reagent]))

(defn editor []
  [c/box
   :size "3"
   :child [c/input-textarea
           :width "100%"
           :rows 10
           :model @(re/subscribe [:program])
           :on-change #(re/dispatch [:change-program %])]])

(defn coeffect [id definition]
  (let [collapsed (reagent/atom true)
        value     (reagent/atom "")]
    (fn []
      (if @collapsed
        [c/h-box
         :align :center
         :gap "1em"
         :children [[:pre.m-0.w-100 definition]
                    [c/md-circle-icon-button :md-icon-name "zmdi-plus" :on-click #(swap! collapsed not)]]]
        [c/v-box
         :gap "3px"
         :children [[:pre.m-0.w-100 definition]
                    "=>"
                    [c/input-text
                     :width "100%"
                     :model value
                     :on-change #(reset! value %)]
                    [c/h-box
                     :gap "1em"
                     :children
                     [[c/button
                       :label "Unblock"
                       :class "btn-primary"
                       :on-click #(re/dispatch [:unblock id @value])]
                      [c/button
                       :label "Cancel"
                       :on-click #(swap! collapsed not)]]]]])
      )))

(defn pending-coeffects-list []
  (when-let [data (seq @(re/subscribe [:coeffects]))]
    (c/v-box
      :children [[c/title :label "Coeffects" :level :level2]
                 (for [[id v] data]
                   ^{:key id} [coeffect id v])])))

(defn editor-side []
  [c/v-box
   :size "2"
   :children [[c/button
               :label "Run"
               :on-click #(re/dispatch [:run])]
              (when (= :running @(re/subscribe [:state]))
                [pending-coeffects-list])]])

(defn values-list []
  (when-let [data (seq @(re/subscribe [:values]))]
    (c/v-box
      :gap "5px"
      :children (apply vector
                       [c/title :label "Values" :level :level2]
                       (for [[i v] (map-indexed vector data)]
                         ^{:key i} [:pre.m-0 v])))))

(defn realized-coeffects-list []
  (when-let [data (seq @(re/subscribe [:realized]))]
    (c/v-box
      :gap "5px"
      :children (apply vector
                       [c/title :label "Realized" :level :level2]
                       (for [[i {:keys [definition value]}] (map-indexed vector data)]
                         ^{:key i} [c/h-box :gap "5px" :align :center :children [[:pre.m-0 definition] "=>" [:pre.m-0 value]]])))))

(defn editor-pane []
  [c/h-box
   :justify :between
   :gap "1em"
   :children [[editor]
              [editor-side]]])

(defn main-panel []
  [c/v-box
   :margin "10px auto 0 auto"
   :width "1280px"
   :children [[editor-pane]
              (case @(re/subscribe [:state])
                (:running :completed)
                (list ^{:key "values"} [values-list]
                      ^{:key "realized"} [realized-coeffects-list])
                :editor nil)]])
