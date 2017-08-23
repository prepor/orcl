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
var G__28871__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28871 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28872__i = 0, G__28872__a = new Array(arguments.length -  0);
while (G__28872__i < G__28872__a.length) {G__28872__a[G__28872__i] = arguments[G__28872__i + 0]; ++G__28872__i;}
  args = new cljs.core.IndexedSeq(G__28872__a,0,null);
} 
return G__28871__delegate.call(this,args);};
G__28871.cljs$lang$maxFixedArity = 0;
G__28871.cljs$lang$applyTo = (function (arglist__28873){
var args = cljs.core.seq(arglist__28873);
return G__28871__delegate(args);
});
G__28871.cljs$core$IFn$_invoke$arity$variadic = G__28871__delegate;
return G__28871;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__28874__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28874 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28875__i = 0, G__28875__a = new Array(arguments.length -  0);
while (G__28875__i < G__28875__a.length) {G__28875__a[G__28875__i] = arguments[G__28875__i + 0]; ++G__28875__i;}
  args = new cljs.core.IndexedSeq(G__28875__a,0,null);
} 
return G__28874__delegate.call(this,args);};
G__28874.cljs$lang$maxFixedArity = 0;
G__28874.cljs$lang$applyTo = (function (arglist__28876){
var args = cljs.core.seq(arglist__28876);
return G__28874__delegate(args);
});
G__28874.cljs$core$IFn$_invoke$arity$variadic = G__28874__delegate;
return G__28874;
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
