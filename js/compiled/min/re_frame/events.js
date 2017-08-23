// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__35413_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__35413_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__4657__auto___35414 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___35414)){
var not_i_35415 = temp__4657__auto___35414;
if(cljs.core.fn_QMARK_.call(null,not_i_35415)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_35415);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_35415);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_35416 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_35417 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__35361__auto___35430 = re_frame.interop.now.call(null);
var duration__35362__auto___35431 = (end__35361__auto___35430 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__35418_35432 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__35419_35433 = null;
var count__35420_35434 = (0);
var i__35421_35435 = (0);
while(true){
if((i__35421_35435 < count__35420_35434)){
var vec__35422_35436 = cljs.core._nth.call(null,chunk__35419_35433,i__35421_35435);
var k__35363__auto___35437 = cljs.core.nth.call(null,vec__35422_35436,(0),null);
var cb__35364__auto___35438 = cljs.core.nth.call(null,vec__35422_35436,(1),null);
try{cb__35364__auto___35438.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__35362__auto___35431,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e35425){if((e35425 instanceof java.lang.Exception)){
var e__35365__auto___35439 = e35425;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__35363__auto___35437,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__35365__auto___35439);
} else {
throw e35425;

}
}
var G__35440 = seq__35418_35432;
var G__35441 = chunk__35419_35433;
var G__35442 = count__35420_35434;
var G__35443 = (i__35421_35435 + (1));
seq__35418_35432 = G__35440;
chunk__35419_35433 = G__35441;
count__35420_35434 = G__35442;
i__35421_35435 = G__35443;
continue;
} else {
var temp__4657__auto___35444 = cljs.core.seq.call(null,seq__35418_35432);
if(temp__4657__auto___35444){
var seq__35418_35445__$1 = temp__4657__auto___35444;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35418_35445__$1)){
var c__28034__auto___35446 = cljs.core.chunk_first.call(null,seq__35418_35445__$1);
var G__35447 = cljs.core.chunk_rest.call(null,seq__35418_35445__$1);
var G__35448 = c__28034__auto___35446;
var G__35449 = cljs.core.count.call(null,c__28034__auto___35446);
var G__35450 = (0);
seq__35418_35432 = G__35447;
chunk__35419_35433 = G__35448;
count__35420_35434 = G__35449;
i__35421_35435 = G__35450;
continue;
} else {
var vec__35426_35451 = cljs.core.first.call(null,seq__35418_35445__$1);
var k__35363__auto___35452 = cljs.core.nth.call(null,vec__35426_35451,(0),null);
var cb__35364__auto___35453 = cljs.core.nth.call(null,vec__35426_35451,(1),null);
try{cb__35364__auto___35453.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__35362__auto___35431,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e35429){if((e35429 instanceof java.lang.Exception)){
var e__35365__auto___35454 = e35429;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__35363__auto___35452,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__35365__auto___35454);
} else {
throw e35429;

}
}
var G__35455 = cljs.core.next.call(null,seq__35418_35445__$1);
var G__35456 = null;
var G__35457 = (0);
var G__35458 = (0);
seq__35418_35432 = G__35455;
chunk__35419_35433 = G__35456;
count__35420_35434 = G__35457;
i__35421_35435 = G__35458;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_35417;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_35416;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map
