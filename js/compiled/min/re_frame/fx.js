// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__35533 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__35534 = null;
var count__35535 = (0);
var i__35536 = (0);
while(true){
if((i__35536 < count__35535)){
var vec__35537 = cljs.core._nth.call(null,chunk__35534,i__35536);
var effect_key = cljs.core.nth.call(null,vec__35537,(0),null);
var effect_value = cljs.core.nth.call(null,vec__35537,(1),null);
var temp__4655__auto___35543 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___35543)){
var effect_fn_35544 = temp__4655__auto___35543;
effect_fn_35544.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__35545 = seq__35533;
var G__35546 = chunk__35534;
var G__35547 = count__35535;
var G__35548 = (i__35536 + (1));
seq__35533 = G__35545;
chunk__35534 = G__35546;
count__35535 = G__35547;
i__35536 = G__35548;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35533);
if(temp__4657__auto__){
var seq__35533__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35533__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__35533__$1);
var G__35549 = cljs.core.chunk_rest.call(null,seq__35533__$1);
var G__35550 = c__28034__auto__;
var G__35551 = cljs.core.count.call(null,c__28034__auto__);
var G__35552 = (0);
seq__35533 = G__35549;
chunk__35534 = G__35550;
count__35535 = G__35551;
i__35536 = G__35552;
continue;
} else {
var vec__35540 = cljs.core.first.call(null,seq__35533__$1);
var effect_key = cljs.core.nth.call(null,vec__35540,(0),null);
var effect_value = cljs.core.nth.call(null,vec__35540,(1),null);
var temp__4655__auto___35553 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___35553)){
var effect_fn_35554 = temp__4655__auto___35553;
effect_fn_35554.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__35555 = cljs.core.next.call(null,seq__35533__$1);
var G__35556 = null;
var G__35557 = (0);
var G__35558 = (0);
seq__35533 = G__35555;
chunk__35534 = G__35556;
count__35535 = G__35557;
i__35536 = G__35558;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__35559 = cljs.core.seq.call(null,value);
var chunk__35560 = null;
var count__35561 = (0);
var i__35562 = (0);
while(true){
if((i__35562 < count__35561)){
var map__35563 = cljs.core._nth.call(null,chunk__35560,i__35562);
var map__35563__$1 = ((((!((map__35563 == null)))?((((map__35563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35563.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35563):map__35563);
var effect = map__35563__$1;
var ms = cljs.core.get.call(null,map__35563__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__35563__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__35559,chunk__35560,count__35561,i__35562,map__35563,map__35563__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__35559,chunk__35560,count__35561,i__35562,map__35563,map__35563__$1,effect,ms,dispatch))
,ms);
}

var G__35567 = seq__35559;
var G__35568 = chunk__35560;
var G__35569 = count__35561;
var G__35570 = (i__35562 + (1));
seq__35559 = G__35567;
chunk__35560 = G__35568;
count__35561 = G__35569;
i__35562 = G__35570;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35559);
if(temp__4657__auto__){
var seq__35559__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35559__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__35559__$1);
var G__35571 = cljs.core.chunk_rest.call(null,seq__35559__$1);
var G__35572 = c__28034__auto__;
var G__35573 = cljs.core.count.call(null,c__28034__auto__);
var G__35574 = (0);
seq__35559 = G__35571;
chunk__35560 = G__35572;
count__35561 = G__35573;
i__35562 = G__35574;
continue;
} else {
var map__35565 = cljs.core.first.call(null,seq__35559__$1);
var map__35565__$1 = ((((!((map__35565 == null)))?((((map__35565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35565.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35565):map__35565);
var effect = map__35565__$1;
var ms = cljs.core.get.call(null,map__35565__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__35565__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__35559,chunk__35560,count__35561,i__35562,map__35565,map__35565__$1,effect,ms,dispatch,seq__35559__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__35559,chunk__35560,count__35561,i__35562,map__35565,map__35565__$1,effect,ms,dispatch,seq__35559__$1,temp__4657__auto__))
,ms);
}

var G__35575 = cljs.core.next.call(null,seq__35559__$1);
var G__35576 = null;
var G__35577 = (0);
var G__35578 = (0);
seq__35559 = G__35575;
chunk__35560 = G__35576;
count__35561 = G__35577;
i__35562 = G__35578;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__35579 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__35580 = null;
var count__35581 = (0);
var i__35582 = (0);
while(true){
if((i__35582 < count__35581)){
var event = cljs.core._nth.call(null,chunk__35580,i__35582);
re_frame.router.dispatch.call(null,event);

var G__35583 = seq__35579;
var G__35584 = chunk__35580;
var G__35585 = count__35581;
var G__35586 = (i__35582 + (1));
seq__35579 = G__35583;
chunk__35580 = G__35584;
count__35581 = G__35585;
i__35582 = G__35586;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35579);
if(temp__4657__auto__){
var seq__35579__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35579__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__35579__$1);
var G__35587 = cljs.core.chunk_rest.call(null,seq__35579__$1);
var G__35588 = c__28034__auto__;
var G__35589 = cljs.core.count.call(null,c__28034__auto__);
var G__35590 = (0);
seq__35579 = G__35587;
chunk__35580 = G__35588;
count__35581 = G__35589;
i__35582 = G__35590;
continue;
} else {
var event = cljs.core.first.call(null,seq__35579__$1);
re_frame.router.dispatch.call(null,event);

var G__35591 = cljs.core.next.call(null,seq__35579__$1);
var G__35592 = null;
var G__35593 = (0);
var G__35594 = (0);
seq__35579 = G__35591;
chunk__35580 = G__35592;
count__35581 = G__35593;
i__35582 = G__35594;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__35595 = cljs.core.seq.call(null,value);
var chunk__35596 = null;
var count__35597 = (0);
var i__35598 = (0);
while(true){
if((i__35598 < count__35597)){
var event = cljs.core._nth.call(null,chunk__35596,i__35598);
clear_event.call(null,event);

var G__35599 = seq__35595;
var G__35600 = chunk__35596;
var G__35601 = count__35597;
var G__35602 = (i__35598 + (1));
seq__35595 = G__35599;
chunk__35596 = G__35600;
count__35597 = G__35601;
i__35598 = G__35602;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35595);
if(temp__4657__auto__){
var seq__35595__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35595__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__35595__$1);
var G__35603 = cljs.core.chunk_rest.call(null,seq__35595__$1);
var G__35604 = c__28034__auto__;
var G__35605 = cljs.core.count.call(null,c__28034__auto__);
var G__35606 = (0);
seq__35595 = G__35603;
chunk__35596 = G__35604;
count__35597 = G__35605;
i__35598 = G__35606;
continue;
} else {
var event = cljs.core.first.call(null,seq__35595__$1);
clear_event.call(null,event);

var G__35607 = cljs.core.next.call(null,seq__35595__$1);
var G__35608 = null;
var G__35609 = (0);
var G__35610 = (0);
seq__35595 = G__35607;
chunk__35596 = G__35608;
count__35597 = G__35609;
i__35598 = G__35610;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
