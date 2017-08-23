// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__30735__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30735 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30736__i = 0, G__30736__a = new Array(arguments.length -  0);
while (G__30736__i < G__30736__a.length) {G__30736__a[G__30736__i] = arguments[G__30736__i + 0]; ++G__30736__i;}
  args = new cljs.core.IndexedSeq(G__30736__a,0,null);
} 
return G__30735__delegate.call(this,args);};
G__30735.cljs$lang$maxFixedArity = 0;
G__30735.cljs$lang$applyTo = (function (arglist__30737){
var args = cljs.core.seq(arglist__30737);
return G__30735__delegate(args);
});
G__30735.cljs$core$IFn$_invoke$arity$variadic = G__30735__delegate;
return G__30735;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__30738__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30738 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30739__i = 0, G__30739__a = new Array(arguments.length -  0);
while (G__30739__i < G__30739__a.length) {G__30739__a[G__30739__i] = arguments[G__30739__i + 0]; ++G__30739__i;}
  args = new cljs.core.IndexedSeq(G__30739__a,0,null);
} 
return G__30738__delegate.call(this,args);};
G__30738.cljs$lang$maxFixedArity = 0;
G__30738.cljs$lang$applyTo = (function (arglist__30740){
var args = cljs.core.seq(arglist__30740);
return G__30738__delegate(args);
});
G__30738.cljs$core$IFn$_invoke$arity$variadic = G__30738__delegate;
return G__30738;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
