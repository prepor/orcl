// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__39239){
var map__39240 = p__39239;
var map__39240__$1 = ((((!((map__39240 == null)))?((((map__39240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39240.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39240):map__39240);
var args = map__39240__$1;
var on_change = cljs.core.get.call(null,map__39240__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__39240__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__39240__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__39240__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__39240__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__39240__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__39240__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__39242 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__27195__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__39242,external_model_value);
} else {
return G__39242;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__39243,event){
var map__39244 = p__39243;
var map__39244__$1 = ((((!((map__39244 == null)))?((((map__39244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39244):map__39244);
var state = map__39244__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__39244__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__39244__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__39246 = event;
var G__39246__$1 = (((G__39246 instanceof cljs.core.Keyword))?G__39246.fqn:null);
switch (G__39246__$1) {
case "input-text-blurred":
var and__27183__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__27183__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__27195__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39246__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__39248,event){
var map__39249 = p__39248;
var map__39249__$1 = ((((!((map__39249 == null)))?((((map__39249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39249.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39249):map__39249);
var state = map__39249__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__39249__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__39251 = event;
var G__39251__$1 = (((G__39251 instanceof cljs.core.Keyword))?G__39251.fqn:null);
switch (G__39251__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__39253,new_value){
var map__39254 = p__39253;
var map__39254__$1 = ((((!((map__39254 == null)))?((((map__39254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39254):map__39254);
var state = map__39254__$1;
var on_change = cljs.core.get.call(null,map__39254__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__39256,suggestion){
var map__39257 = p__39256;
var map__39257__$1 = ((((!((map__39257 == null)))?((((map__39257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39257.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39257):map__39257);
var state = map__39257__$1;
var suggestion_to_string = cljs.core.get.call(null,map__39257__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__39259 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__39259,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__39259;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__39260,index){
var map__39261 = p__39260;
var map__39261__$1 = ((((!((map__39261 == null)))?((((map__39261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39261.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39261):map__39261);
var state = map__39261__$1;
var suggestions = cljs.core.get.call(null,map__39261__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__39263 = state;
var G__39263__$1 = cljs.core.assoc.call(null,G__39263,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__39263__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__39263__$1,suggestion):G__39263__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__39263__$2,suggestion);
} else {
return G__39263__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__39264,index){
var map__39265 = p__39264;
var map__39265__$1 = ((((!((map__39265 == null)))?((((map__39265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39265):map__39265);
var state = map__39265__$1;
var suggestions = cljs.core.get.call(null,map__39265__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__39267){
var map__39268 = p__39267;
var map__39268__$1 = ((((!((map__39268 == null)))?((((map__39268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39268):map__39268);
var state = map__39268__$1;
var suggestion_active_index = cljs.core.get.call(null,map__39268__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__39270 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__39270,suggestion_active_index);
} else {
return G__39270;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__39271){
var map__39272 = p__39271;
var map__39272__$1 = ((((!((map__39272 == null)))?((((map__39272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39272.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39272):map__39272);
var state = map__39272__$1;
var suggestions = cljs.core.get.call(null,map__39272__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__39272__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__39274 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__39274,re_com.typeahead.wrap.call(null,((function (){var or__27195__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__39274;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__39275){
var map__39276 = p__39275;
var map__39276__$1 = ((((!((map__39276 == null)))?((((map__39276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39276.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39276):map__39276);
var state = map__39276__$1;
var suggestions = cljs.core.get.call(null,map__39276__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__39276__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__39278 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__39278,re_com.typeahead.wrap.call(null,((function (){var or__27195__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__39278;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__39279 = state;
var G__39279__$1 = re_com.typeahead.clear_suggestions.call(null,G__39279)
;
var G__39279__$2 = cljs.core.assoc.call(null,G__39279__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__39279__$2,null);
} else {
return G__39279__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__39280){
var map__39281 = p__39280;
var map__39281__$1 = ((((!((map__39281 == null)))?((((map__39281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39281.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39281):map__39281);
var state = map__39281__$1;
var input_text = cljs.core.get.call(null,map__39281__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__39281__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__39283 = state;
if(cljs.core.truth_((function (){var and__27183__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__27183__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__27183__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__39283,input_text);
} else {
return G__39283;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__4655__auto__ = data_source.call(null,text,(function (p1__39284_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__39284_SHARP_);
}));
if(cljs.core.truth_(temp__4655__auto__)){
var return_value = temp__4655__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__37269__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37269__auto__){
return (function (){
var f__37270__auto__ = (function (){var switch__37181__auto__ = ((function (c__37269__auto__){
return (function (state_39301){
var state_val_39302 = (state_39301[(1)]);
if((state_val_39302 === (1))){
var state_39301__$1 = state_39301;
var statearr_39303_39315 = state_39301__$1;
(statearr_39303_39315[(2)] = null);

(statearr_39303_39315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (2))){
var state_39301__$1 = state_39301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39301__$1,(4),c_search);
} else {
if((state_val_39302 === (3))){
var inst_39299 = (state_39301[(2)]);
var state_39301__$1 = state_39301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39301__$1,inst_39299);
} else {
if((state_val_39302 === (4))){
var inst_39287 = (state_39301[(7)]);
var inst_39287__$1 = (state_39301[(2)]);
var inst_39288 = cljs.core.deref.call(null,state_atom);
var inst_39289 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_39288);
var inst_39290 = cljs.core._EQ_.call(null,"",inst_39287__$1);
var state_39301__$1 = (function (){var statearr_39304 = state_39301;
(statearr_39304[(7)] = inst_39287__$1);

(statearr_39304[(8)] = inst_39289);

return statearr_39304;
})();
if(inst_39290){
var statearr_39305_39316 = state_39301__$1;
(statearr_39305_39316[(1)] = (5));

} else {
var statearr_39306_39317 = state_39301__$1;
(statearr_39306_39317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (5))){
var inst_39292 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_39301__$1 = state_39301;
var statearr_39307_39318 = state_39301__$1;
(statearr_39307_39318[(2)] = inst_39292);

(statearr_39307_39318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (6))){
var inst_39287 = (state_39301[(7)]);
var inst_39289 = (state_39301[(8)]);
var inst_39294 = re_com.typeahead.search_data_source_BANG_.call(null,inst_39289,state_atom,inst_39287);
var state_39301__$1 = state_39301;
var statearr_39308_39319 = state_39301__$1;
(statearr_39308_39319[(2)] = inst_39294);

(statearr_39308_39319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (7))){
var inst_39296 = (state_39301[(2)]);
var state_39301__$1 = (function (){var statearr_39309 = state_39301;
(statearr_39309[(9)] = inst_39296);

return statearr_39309;
})();
var statearr_39310_39320 = state_39301__$1;
(statearr_39310_39320[(2)] = null);

(statearr_39310_39320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__37269__auto__))
;
return ((function (switch__37181__auto__,c__37269__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__37182__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__37182__auto____0 = (function (){
var statearr_39311 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39311[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__37182__auto__);

(statearr_39311[(1)] = (1));

return statearr_39311;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__37182__auto____1 = (function (state_39301){
while(true){
var ret_value__37183__auto__ = (function (){try{while(true){
var result__37184__auto__ = switch__37181__auto__.call(null,state_39301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37184__auto__;
}
break;
}
}catch (e39312){if((e39312 instanceof Object)){
var ex__37185__auto__ = e39312;
var statearr_39313_39321 = state_39301;
(statearr_39313_39321[(5)] = ex__37185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39322 = state_39301;
state_39301 = G__39322;
continue;
} else {
return ret_value__37183__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__37182__auto__ = function(state_39301){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__37182__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__37182__auto____1.call(this,state_39301);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__37182__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__37182__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__37182__auto__;
})()
;})(switch__37181__auto__,c__37269__auto__))
})();
var state__37271__auto__ = (function (){var statearr_39314 = f__37270__auto__.call(null);
(statearr_39314[(6)] = c__37269__auto__);

return statearr_39314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37271__auto__);
});})(c__37269__auto__))
);

return c__37269__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__39324 = cljs.core.deref.call(null,state_atom);
var map__39324__$1 = ((((!((map__39324 == null)))?((((map__39324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39324.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39324):map__39324);
var state = map__39324__$1;
var input_text = cljs.core.get.call(null,map__39324__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__39324__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__39324,map__39324__$1,state,input_text,c_input){
return (function (p1__39323_SHARP_){
var G__39326 = p1__39323_SHARP_;
var G__39326__$1 = cljs.core.assoc.call(null,G__39326,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__39326__$1,new_text);
} else {
return G__39326__$1;
}
});})(map__39324,map__39324__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__39327 = cljs.core._EQ_;
var expr__39328 = event.which;
if(cljs.core.truth_(pred__39327.call(null,goog.events.KeyCodes.UP,expr__39328))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__39327.call(null,goog.events.KeyCodes.DOWN,expr__39328))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__39327.call(null,goog.events.KeyCodes.ENTER,expr__39328))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__39327.call(null,goog.events.KeyCodes.ESC,expr__39328))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__39327.call(null,goog.events.KeyCodes.TAB,expr__39328))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__28371__auto__ = [];
var len__28364__auto___39352 = arguments.length;
var i__28365__auto___39353 = (0);
while(true){
if((i__28365__auto___39353 < len__28364__auto___39352)){
args__28371__auto__.push((arguments[i__28365__auto___39353]));

var G__39354 = (i__28365__auto___39353 + (1));
i__28365__auto___39353 = G__39354;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__39332){
var map__39333 = p__39332;
var map__39333__$1 = ((((!((map__39333 == null)))?((((map__39333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39333):map__39333);
var args = map__39333__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__39335 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__39335__$1 = ((((!((map__39335 == null)))?((((map__39335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39335.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39335):map__39335);
var state = map__39335__$1;
var c_search = cljs.core.get.call(null,map__39335__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__39335__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__39335,map__39335__$1,state,c_search,c_input,state_atom,input_text_model,map__39333,map__39333__$1,args){
return (function() { 
var G__39355__delegate = function (p__39337){
var map__39338 = p__39337;
var map__39338__$1 = ((((!((map__39338 == null)))?((((map__39338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39338):map__39338);
var args__$1 = map__39338__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__39338__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__39338__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__39338__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__39338__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__39338__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__39338__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__39338__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__39338__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__39338__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__39338__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__39338__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__39338__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__39338__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__39338__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__39338__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__39338__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__39338__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__39338__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__39340 = cljs.core.deref.call(null,state_atom);
var map__39340__$1 = ((((!((map__39340 == null)))?((((map__39340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39340):map__39340);
var state__$1 = map__39340__$1;
var suggestions = cljs.core.get.call(null,map__39340__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__39340__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__39340__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__39340__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__27195__auto__ = width;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__27195__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__28003__auto__ = ((function (map__39340,map__39340__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__39338,map__39338__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__39335,map__39335__$1,state,c_search,c_input,state_atom,input_text_model,map__39333,map__39333__$1,args){
return (function re_com$typeahead$iter__39342(s__39343){
return (new cljs.core.LazySeq(null,((function (map__39340,map__39340__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__39338,map__39338__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__39335,map__39335__$1,state,c_search,c_input,state_atom,input_text_model,map__39333,map__39333__$1,args){
return (function (){
var s__39343__$1 = s__39343;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__39343__$1);
if(temp__4657__auto__){
var s__39343__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39343__$2)){
var c__28001__auto__ = cljs.core.chunk_first.call(null,s__39343__$2);
var size__28002__auto__ = cljs.core.count.call(null,c__28001__auto__);
var b__39345 = cljs.core.chunk_buffer.call(null,size__28002__auto__);
if((function (){var i__39344 = (0);
while(true){
if((i__39344 < size__28002__auto__)){
var vec__39346 = cljs.core._nth.call(null,c__28001__auto__,i__39344);
var i = cljs.core.nth.call(null,vec__39346,(0),null);
var s = cljs.core.nth.call(null,vec__39346,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__39345,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__39344,selected_QMARK_,vec__39346,i,s,c__28001__auto__,size__28002__auto__,b__39345,s__39343__$2,temp__4657__auto__,map__39340,map__39340__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__39338,map__39338__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__39335,map__39335__$1,state,c_search,c_input,state_atom,input_text_model,map__39333,map__39333__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__39344,selected_QMARK_,vec__39346,i,s,c__28001__auto__,size__28002__auto__,b__39345,s__39343__$2,temp__4657__auto__,map__39340,map__39340__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__39338,map__39338__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__39335,map__39335__$1,state,c_search,c_input,state_atom,input_text_model,map__39333,map__39333__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__39344,selected_QMARK_,vec__39346,i,s,c__28001__auto__,size__28002__auto__,b__39345,s__39343__$2,temp__4657__auto__,map__39340,map__39340__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__39338,map__39338__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__39335,map__39335__$1,state,c_search,c_input,state_atom,input_text_model,map__39333,map__39333__$1,args){
return (function (p1__39330_SHARP_){
p1__39330_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__39344,selected_QMARK_,vec__39346,i,s,c__28001__auto__,size__28002__auto__,b__39345,s__39343__$2,temp__4657__auto__,map__39340,map__39340__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__39338,map__39338__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__39335,map__39335__$1,state,c_search,c_input,state_atom,input_text_model,map__39333,map__39333__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__39356 = (i__39344 + (1));
i__39344 = G__39356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39345),re_com$typeahead$iter__39342.call(null,cljs.core.chunk_rest.call(null,s__39343__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39345),null);
}
} else {
var vec__39349 = cljs.core.first.call(null,s__39343__$2);
var i = cljs.core.nth.call(null,vec__39349,(0),null);
var s = cljs.core.nth.call(null,vec__39349,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__39349,i,s,s__39343__$2,temp__4657__auto__,map__39340,map__39340__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__39338,map__39338__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__39335,map__39335__$1,state,c_search,c_input,state_atom,input_text_model,map__39333,map__39333__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__39349,i,s,s__39343__$2,temp__4657__auto__,map__39340,map__39340__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__39338,map__39338__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__39335,map__39335__$1,state,c_search,c_input,state_atom,input_text_model,map__39333,map__39333__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__39349,i,s,s__39343__$2,temp__4657__auto__,map__39340,map__39340__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__39338,map__39338__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__39335,map__39335__$1,state,c_search,c_input,state_atom,input_text_model,map__39333,map__39333__$1,args){
return (function (p1__39330_SHARP_){
p1__39330_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__39349,i,s,s__39343__$2,temp__4657__auto__,map__39340,map__39340__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__39338,map__39338__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__39335,map__39335__$1,state,c_search,c_input,state_atom,input_text_model,map__39333,map__39333__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__39342.call(null,cljs.core.rest.call(null,s__39343__$2)));
}
} else {
return null;
}
break;
}
});})(map__39340,map__39340__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__39338,map__39338__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__39335,map__39335__$1,state,c_search,c_input,state_atom,input_text_model,map__39333,map__39333__$1,args))
,null,null));
});})(map__39340,map__39340__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__39338,map__39338__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__39335,map__39335__$1,state,c_search,c_input,state_atom,input_text_model,map__39333,map__39333__$1,args))
;
return iter__28003__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__39355 = function (var_args){
var p__39337 = null;
if (arguments.length > 0) {
var G__39357__i = 0, G__39357__a = new Array(arguments.length -  0);
while (G__39357__i < G__39357__a.length) {G__39357__a[G__39357__i] = arguments[G__39357__i + 0]; ++G__39357__i;}
  p__39337 = new cljs.core.IndexedSeq(G__39357__a,0,null);
} 
return G__39355__delegate.call(this,p__39337);};
G__39355.cljs$lang$maxFixedArity = 0;
G__39355.cljs$lang$applyTo = (function (arglist__39358){
var p__39337 = cljs.core.seq(arglist__39358);
return G__39355__delegate(p__39337);
});
G__39355.cljs$core$IFn$_invoke$arity$variadic = G__39355__delegate;
return G__39355;
})()
;
;})(map__39335,map__39335__$1,state,c_search,c_input,state_atom,input_text_model,map__39333,map__39333__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq39331){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39331));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__37269__auto___39439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37269__auto___39439,out){
return (function (){
var f__37270__auto__ = (function (){var switch__37181__auto__ = ((function (c__37269__auto___39439,out){
return (function (state_39409){
var state_val_39410 = (state_39409[(1)]);
if((state_val_39410 === (7))){
var inst_39364 = (state_39409[(2)]);
var state_39409__$1 = state_39409;
var statearr_39411_39440 = state_39409__$1;
(statearr_39411_39440[(2)] = inst_39364);

(statearr_39411_39440[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39410 === (1))){
var inst_39359 = null;
var state_39409__$1 = (function (){var statearr_39412 = state_39409;
(statearr_39412[(7)] = inst_39359);

return statearr_39412;
})();
var statearr_39413_39441 = state_39409__$1;
(statearr_39413_39441[(2)] = null);

(statearr_39413_39441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39410 === (4))){
var state_39409__$1 = state_39409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39409__$1,(7),in$);
} else {
if((state_val_39410 === (15))){
var inst_39394 = (state_39409[(2)]);
var state_39409__$1 = (function (){var statearr_39414 = state_39409;
(statearr_39414[(8)] = inst_39394);

return statearr_39414;
})();
var statearr_39415_39442 = state_39409__$1;
(statearr_39415_39442[(2)] = null);

(statearr_39415_39442[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39410 === (13))){
var inst_39382 = (state_39409[(9)]);
var inst_39396 = cljs.core._EQ_.call(null,inst_39382,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_39409__$1 = state_39409;
if(inst_39396){
var statearr_39416_39443 = state_39409__$1;
(statearr_39416_39443[(1)] = (16));

} else {
var statearr_39417_39444 = state_39409__$1;
(statearr_39417_39444[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39410 === (6))){
var inst_39368 = (state_39409[(10)]);
var inst_39367 = (state_39409[(2)]);
var inst_39368__$1 = cljs.core.async.timeout.call(null,ms);
var inst_39376 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39377 = [in$,inst_39368__$1];
var inst_39378 = (new cljs.core.PersistentVector(null,2,(5),inst_39376,inst_39377,null));
var state_39409__$1 = (function (){var statearr_39418 = state_39409;
(statearr_39418[(11)] = inst_39367);

(statearr_39418[(10)] = inst_39368__$1);

return statearr_39418;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_39409__$1,(8),inst_39378);
} else {
if((state_val_39410 === (17))){
var state_39409__$1 = state_39409;
var statearr_39419_39445 = state_39409__$1;
(statearr_39419_39445[(2)] = null);

(statearr_39419_39445[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39410 === (3))){
var inst_39407 = (state_39409[(2)]);
var state_39409__$1 = state_39409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39409__$1,inst_39407);
} else {
if((state_val_39410 === (12))){
var inst_39367 = (state_39409[(11)]);
var state_39409__$1 = state_39409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39409__$1,(15),out,inst_39367);
} else {
if((state_val_39410 === (2))){
var inst_39359 = (state_39409[(7)]);
var inst_39361 = (inst_39359 == null);
var state_39409__$1 = state_39409;
if(cljs.core.truth_(inst_39361)){
var statearr_39420_39446 = state_39409__$1;
(statearr_39420_39446[(1)] = (4));

} else {
var statearr_39421_39447 = state_39409__$1;
(statearr_39421_39447[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39410 === (11))){
var inst_39404 = (state_39409[(2)]);
var inst_39359 = inst_39404;
var state_39409__$1 = (function (){var statearr_39422 = state_39409;
(statearr_39422[(7)] = inst_39359);

return statearr_39422;
})();
var statearr_39423_39448 = state_39409__$1;
(statearr_39423_39448[(2)] = null);

(statearr_39423_39448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39410 === (9))){
var inst_39380 = (state_39409[(12)]);
var inst_39388 = cljs.core.nth.call(null,inst_39380,(0),null);
var inst_39389 = cljs.core.nth.call(null,inst_39380,(1),null);
var state_39409__$1 = (function (){var statearr_39424 = state_39409;
(statearr_39424[(13)] = inst_39389);

return statearr_39424;
})();
var statearr_39425_39449 = state_39409__$1;
(statearr_39425_39449[(2)] = inst_39388);

(statearr_39425_39449[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39410 === (5))){
var inst_39359 = (state_39409[(7)]);
var state_39409__$1 = state_39409;
var statearr_39426_39450 = state_39409__$1;
(statearr_39426_39450[(2)] = inst_39359);

(statearr_39426_39450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39410 === (14))){
var inst_39402 = (state_39409[(2)]);
var state_39409__$1 = state_39409;
var statearr_39427_39451 = state_39409__$1;
(statearr_39427_39451[(2)] = inst_39402);

(statearr_39427_39451[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39410 === (16))){
var inst_39381 = (state_39409[(14)]);
var state_39409__$1 = state_39409;
var statearr_39428_39452 = state_39409__$1;
(statearr_39428_39452[(2)] = inst_39381);

(statearr_39428_39452[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39410 === (10))){
var inst_39368 = (state_39409[(10)]);
var inst_39382 = (state_39409[(9)]);
var inst_39391 = cljs.core._EQ_.call(null,inst_39382,inst_39368);
var state_39409__$1 = state_39409;
if(inst_39391){
var statearr_39429_39453 = state_39409__$1;
(statearr_39429_39453[(1)] = (12));

} else {
var statearr_39430_39454 = state_39409__$1;
(statearr_39430_39454[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39410 === (18))){
var inst_39400 = (state_39409[(2)]);
var state_39409__$1 = state_39409;
var statearr_39431_39455 = state_39409__$1;
(statearr_39431_39455[(2)] = inst_39400);

(statearr_39431_39455[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39410 === (8))){
var inst_39382 = (state_39409[(9)]);
var inst_39380 = (state_39409[(12)]);
var inst_39380__$1 = (state_39409[(2)]);
var inst_39381 = cljs.core.nth.call(null,inst_39380__$1,(0),null);
var inst_39382__$1 = cljs.core.nth.call(null,inst_39380__$1,(1),null);
var inst_39383 = cljs.core._EQ_.call(null,inst_39382__$1,in$);
var state_39409__$1 = (function (){var statearr_39432 = state_39409;
(statearr_39432[(14)] = inst_39381);

(statearr_39432[(9)] = inst_39382__$1);

(statearr_39432[(12)] = inst_39380__$1);

return statearr_39432;
})();
if(inst_39383){
var statearr_39433_39456 = state_39409__$1;
(statearr_39433_39456[(1)] = (9));

} else {
var statearr_39434_39457 = state_39409__$1;
(statearr_39434_39457[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37269__auto___39439,out))
;
return ((function (switch__37181__auto__,c__37269__auto___39439,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__37182__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__37182__auto____0 = (function (){
var statearr_39435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39435[(0)] = re_com$typeahead$debounce_$_state_machine__37182__auto__);

(statearr_39435[(1)] = (1));

return statearr_39435;
});
var re_com$typeahead$debounce_$_state_machine__37182__auto____1 = (function (state_39409){
while(true){
var ret_value__37183__auto__ = (function (){try{while(true){
var result__37184__auto__ = switch__37181__auto__.call(null,state_39409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37184__auto__;
}
break;
}
}catch (e39436){if((e39436 instanceof Object)){
var ex__37185__auto__ = e39436;
var statearr_39437_39458 = state_39409;
(statearr_39437_39458[(5)] = ex__37185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39459 = state_39409;
state_39409 = G__39459;
continue;
} else {
return ret_value__37183__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__37182__auto__ = function(state_39409){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__37182__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__37182__auto____1.call(this,state_39409);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__37182__auto____0;
re_com$typeahead$debounce_$_state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__37182__auto____1;
return re_com$typeahead$debounce_$_state_machine__37182__auto__;
})()
;})(switch__37181__auto__,c__37269__auto___39439,out))
})();
var state__37271__auto__ = (function (){var statearr_39438 = f__37270__auto__.call(null);
(statearr_39438[(6)] = c__37269__auto___39439);

return statearr_39438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37271__auto__);
});})(c__37269__auto___39439,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map
