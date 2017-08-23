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
var seq__36051 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__36052 = null;
var count__36053 = (0);
var i__36054 = (0);
while(true){
if((i__36054 < count__36053)){
var vec__36055 = cljs.core._nth.call(null,chunk__36052,i__36054);
var effect_key = cljs.core.nth.call(null,vec__36055,(0),null);
var effect_value = cljs.core.nth.call(null,vec__36055,(1),null);
var temp__4655__auto___36061 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___36061)){
var effect_fn_36062 = temp__4655__auto___36061;
effect_fn_36062.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__36063 = seq__36051;
var G__36064 = chunk__36052;
var G__36065 = count__36053;
var G__36066 = (i__36054 + (1));
seq__36051 = G__36063;
chunk__36052 = G__36064;
count__36053 = G__36065;
i__36054 = G__36066;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36051);
if(temp__4657__auto__){
var seq__36051__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36051__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__36051__$1);
var G__36067 = cljs.core.chunk_rest.call(null,seq__36051__$1);
var G__36068 = c__28034__auto__;
var G__36069 = cljs.core.count.call(null,c__28034__auto__);
var G__36070 = (0);
seq__36051 = G__36067;
chunk__36052 = G__36068;
count__36053 = G__36069;
i__36054 = G__36070;
continue;
} else {
var vec__36058 = cljs.core.first.call(null,seq__36051__$1);
var effect_key = cljs.core.nth.call(null,vec__36058,(0),null);
var effect_value = cljs.core.nth.call(null,vec__36058,(1),null);
var temp__4655__auto___36071 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___36071)){
var effect_fn_36072 = temp__4655__auto___36071;
effect_fn_36072.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__36073 = cljs.core.next.call(null,seq__36051__$1);
var G__36074 = null;
var G__36075 = (0);
var G__36076 = (0);
seq__36051 = G__36073;
chunk__36052 = G__36074;
count__36053 = G__36075;
i__36054 = G__36076;
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
var seq__36077 = cljs.core.seq.call(null,value);
var chunk__36078 = null;
var count__36079 = (0);
var i__36080 = (0);
while(true){
if((i__36080 < count__36079)){
var map__36081 = cljs.core._nth.call(null,chunk__36078,i__36080);
var map__36081__$1 = ((((!((map__36081 == null)))?((((map__36081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36081.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36081):map__36081);
var effect = map__36081__$1;
var ms = cljs.core.get.call(null,map__36081__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__36081__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__36077,chunk__36078,count__36079,i__36080,map__36081,map__36081__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__36077,chunk__36078,count__36079,i__36080,map__36081,map__36081__$1,effect,ms,dispatch))
,ms);
}

var G__36085 = seq__36077;
var G__36086 = chunk__36078;
var G__36087 = count__36079;
var G__36088 = (i__36080 + (1));
seq__36077 = G__36085;
chunk__36078 = G__36086;
count__36079 = G__36087;
i__36080 = G__36088;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36077);
if(temp__4657__auto__){
var seq__36077__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36077__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__36077__$1);
var G__36089 = cljs.core.chunk_rest.call(null,seq__36077__$1);
var G__36090 = c__28034__auto__;
var G__36091 = cljs.core.count.call(null,c__28034__auto__);
var G__36092 = (0);
seq__36077 = G__36089;
chunk__36078 = G__36090;
count__36079 = G__36091;
i__36080 = G__36092;
continue;
} else {
var map__36083 = cljs.core.first.call(null,seq__36077__$1);
var map__36083__$1 = ((((!((map__36083 == null)))?((((map__36083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36083):map__36083);
var effect = map__36083__$1;
var ms = cljs.core.get.call(null,map__36083__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__36083__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__36077,chunk__36078,count__36079,i__36080,map__36083,map__36083__$1,effect,ms,dispatch,seq__36077__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__36077,chunk__36078,count__36079,i__36080,map__36083,map__36083__$1,effect,ms,dispatch,seq__36077__$1,temp__4657__auto__))
,ms);
}

var G__36093 = cljs.core.next.call(null,seq__36077__$1);
var G__36094 = null;
var G__36095 = (0);
var G__36096 = (0);
seq__36077 = G__36093;
chunk__36078 = G__36094;
count__36079 = G__36095;
i__36080 = G__36096;
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
var seq__36097 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__36098 = null;
var count__36099 = (0);
var i__36100 = (0);
while(true){
if((i__36100 < count__36099)){
var event = cljs.core._nth.call(null,chunk__36098,i__36100);
re_frame.router.dispatch.call(null,event);

var G__36101 = seq__36097;
var G__36102 = chunk__36098;
var G__36103 = count__36099;
var G__36104 = (i__36100 + (1));
seq__36097 = G__36101;
chunk__36098 = G__36102;
count__36099 = G__36103;
i__36100 = G__36104;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36097);
if(temp__4657__auto__){
var seq__36097__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36097__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__36097__$1);
var G__36105 = cljs.core.chunk_rest.call(null,seq__36097__$1);
var G__36106 = c__28034__auto__;
var G__36107 = cljs.core.count.call(null,c__28034__auto__);
var G__36108 = (0);
seq__36097 = G__36105;
chunk__36098 = G__36106;
count__36099 = G__36107;
i__36100 = G__36108;
continue;
} else {
var event = cljs.core.first.call(null,seq__36097__$1);
re_frame.router.dispatch.call(null,event);

var G__36109 = cljs.core.next.call(null,seq__36097__$1);
var G__36110 = null;
var G__36111 = (0);
var G__36112 = (0);
seq__36097 = G__36109;
chunk__36098 = G__36110;
count__36099 = G__36111;
i__36100 = G__36112;
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
var seq__36113 = cljs.core.seq.call(null,value);
var chunk__36114 = null;
var count__36115 = (0);
var i__36116 = (0);
while(true){
if((i__36116 < count__36115)){
var event = cljs.core._nth.call(null,chunk__36114,i__36116);
clear_event.call(null,event);

var G__36117 = seq__36113;
var G__36118 = chunk__36114;
var G__36119 = count__36115;
var G__36120 = (i__36116 + (1));
seq__36113 = G__36117;
chunk__36114 = G__36118;
count__36115 = G__36119;
i__36116 = G__36120;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36113);
if(temp__4657__auto__){
var seq__36113__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36113__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__36113__$1);
var G__36121 = cljs.core.chunk_rest.call(null,seq__36113__$1);
var G__36122 = c__28034__auto__;
var G__36123 = cljs.core.count.call(null,c__28034__auto__);
var G__36124 = (0);
seq__36113 = G__36121;
chunk__36114 = G__36122;
count__36115 = G__36123;
i__36116 = G__36124;
continue;
} else {
var event = cljs.core.first.call(null,seq__36113__$1);
clear_event.call(null,event);

var G__36125 = cljs.core.next.call(null,seq__36113__$1);
var G__36126 = null;
var G__36127 = (0);
var G__36128 = (0);
seq__36113 = G__36125;
chunk__36114 = G__36126;
count__36115 = G__36127;
i__36116 = G__36128;
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
