// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.compiler');
goog.require('cljs.env');
goog.require('cljs.core');
goog.require('cljs.analyzer');
var ret__28404__auto___40348 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40349 = arguments.length;
var i__28365__auto___40350 = (0);
while(true){
if((i__28365__auto___40350 < len__28364__auto___40349)){
args__28371__auto__.push((arguments[i__28365__auto___40350]));

var G__40351 = (i__28365__auto___40350 + (1));
i__28365__auto___40350 = G__40351;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__28057__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})());
var G__40352 = threaded;
var G__40353 = cljs.core.next.call(null,forms__$1);
x__$1 = G__40352;
forms__$1 = G__40353;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq40344){
var G__40345 = cljs.core.first.call(null,seq40344);
var seq40344__$1 = cljs.core.next.call(null,seq40344);
var G__40346 = cljs.core.first.call(null,seq40344__$1);
var seq40344__$2 = cljs.core.next.call(null,seq40344__$1);
var G__40347 = cljs.core.first.call(null,seq40344__$2);
var seq40344__$3 = cljs.core.next.call(null,seq40344__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__40345,G__40346,G__40347,seq40344__$3);
});

return null;
})()
;
cljs.core$macros.__GT_.cljs$lang$macro = true;

var ret__28404__auto___40358 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40359 = arguments.length;
var i__28365__auto___40360 = (0);
while(true){
if((i__28365__auto___40360 < len__28364__auto___40359)){
args__28371__auto__.push((arguments[i__28365__auto___40360]));

var G__40361 = (i__28365__auto___40360 + (1));
i__28365__auto___40360 = G__40361;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__28057__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__28057__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})());
var G__40362 = threaded;
var G__40363 = cljs.core.next.call(null,forms__$1);
x__$1 = G__40362;
forms__$1 = G__40363;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq40354){
var G__40355 = cljs.core.first.call(null,seq40354);
var seq40354__$1 = cljs.core.next.call(null,seq40354);
var G__40356 = cljs.core.first.call(null,seq40354__$1);
var seq40354__$2 = cljs.core.next.call(null,seq40354__$1);
var G__40357 = cljs.core.first.call(null,seq40354__$2);
var seq40354__$3 = cljs.core.next.call(null,seq40354__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__40355,G__40356,G__40357,seq40354__$3);
});

return null;
})()
;
cljs.core$macros.__GT__GT_.cljs$lang$macro = true;

var ret__28404__auto___40371 = (function (){
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var G__40370 = arguments.length;
switch (G__40370) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___40373 = arguments.length;
var i__28365__auto___40374 = (0);
while(true){
if((i__28365__auto___40374 < len__28364__auto___40373)){
args_arr__28383__auto__.push((arguments[i__28365__auto___40374]));

var G__40375 = (i__28365__auto___40374 + (1));
i__28365__auto___40374 = G__40375;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28384__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq40365){
var G__40366 = cljs.core.first.call(null,seq40365);
var seq40365__$1 = cljs.core.next.call(null,seq40365);
var G__40367 = cljs.core.first.call(null,seq40365__$1);
var seq40365__$2 = cljs.core.next.call(null,seq40365__$1);
var G__40368 = cljs.core.first.call(null,seq40365__$2);
var seq40365__$3 = cljs.core.next.call(null,seq40365__$2);
var G__40369 = cljs.core.first.call(null,seq40365__$3);
var seq40365__$4 = cljs.core.next.call(null,seq40365__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__40366,G__40367,G__40368,G__40369,seq40365__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;

var ret__28404__auto___40379 = (function (){
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40380 = arguments.length;
var i__28365__auto___40381 = (0);
while(true){
if((i__28365__auto___40381 < len__28364__auto___40380)){
args__28371__auto__.push((arguments[i__28365__auto___40381]));

var G__40382 = (i__28365__auto___40381 + (1));
i__28365__auto___40381 = G__40382;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq40376){
var G__40377 = cljs.core.first.call(null,seq40376);
var seq40376__$1 = cljs.core.next.call(null,seq40376);
var G__40378 = cljs.core.first.call(null,seq40376__$1);
var seq40376__$2 = cljs.core.next.call(null,seq40376__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__40377,G__40378,seq40376__$2);
});

return null;
})()
;
cljs.core$macros.comment.cljs$lang$macro = true;

var ret__28404__auto___40386 = (function (){
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40387 = arguments.length;
var i__28365__auto___40388 = (0);
while(true){
if((i__28365__auto___40388 < len__28364__auto___40387)){
args__28371__auto__.push((arguments[i__28365__auto___40388]));

var G__40389 = (i__28365__auto___40388 + (1));
i__28365__auto___40388 = G__40389;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__28057__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__28057__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$2);
})(),x__28057__auto____$1);
})(),x__28057__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq40383){
var G__40384 = cljs.core.first.call(null,seq40383);
var seq40383__$1 = cljs.core.next.call(null,seq40383);
var G__40385 = cljs.core.first.call(null,seq40383__$1);
var seq40383__$2 = cljs.core.next.call(null,seq40383__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__40384,G__40385,seq40383__$2);
});

return null;
})()
;
cljs.core$macros.cond.cljs$lang$macro = true;

var ret__28404__auto___40394 = (function (){
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40395 = arguments.length;
var i__28365__auto___40396 = (0);
while(true){
if((i__28365__auto___40396 < len__28364__auto___40395)){
args__28371__auto__.push((arguments[i__28365__auto___40396]));

var G__40397 = (i__28365__auto___40396 + (1));
i__28365__auto___40396 = G__40397;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__40390_SHARP_){
return cljs.core._conj.call(null,(function (){var x__28057__auto__ = cljs.core.vary_meta.call(null,p1__40390_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq40391){
var G__40392 = cljs.core.first.call(null,seq40391);
var seq40391__$1 = cljs.core.next.call(null,seq40391);
var G__40393 = cljs.core.first.call(null,seq40391__$1);
var seq40391__$2 = cljs.core.next.call(null,seq40391__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__40392,G__40393,seq40391__$2);
});

return null;
})()
;
cljs.core$macros.declare.cljs$lang$macro = true;

var ret__28404__auto___40402 = (function (){
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40403 = arguments.length;
var i__28365__auto___40404 = (0);
while(true){
if((i__28365__auto___40404 < len__28364__auto___40403)){
args__28371__auto__.push((arguments[i__28365__auto___40404]));

var G__40405 = (i__28365__auto___40404 + (1));
i__28365__auto___40404 = G__40405;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__28057__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq40398){
var G__40399 = cljs.core.first.call(null,seq40398);
var seq40398__$1 = cljs.core.next.call(null,seq40398);
var G__40400 = cljs.core.first.call(null,seq40398__$1);
var seq40398__$2 = cljs.core.next.call(null,seq40398__$1);
var G__40401 = cljs.core.first.call(null,seq40398__$2);
var seq40398__$3 = cljs.core.next.call(null,seq40398__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__40399,G__40400,G__40401,seq40398__$3);
});

return null;
})()
;
cljs.core$macros.doto.cljs$lang$macro = true;

cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__40406 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__40407 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__40406;
s = G__40407;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls.call(null,specs);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,((function (impls){
return (function (p__40408){
var vec__40409 = p__40408;
var t = cljs.core.nth.call(null,vec__40409,(0),null);
var fs = cljs.core.nth.call(null,vec__40409,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__28057__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),fs)));
});})(impls))
,impls))));
});
var ret__28404__auto___40416 = (function (){
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40417 = arguments.length;
var i__28365__auto___40418 = (0);
while(true){
if((i__28365__auto___40418 < len__28364__auto___40417)){
args__28371__auto__.push((arguments[i__28365__auto___40418]));

var G__40419 = (i__28365__auto___40418 + (1));
i__28365__auto___40418 = G__40419;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq40412){
var G__40413 = cljs.core.first.call(null,seq40412);
var seq40412__$1 = cljs.core.next.call(null,seq40412);
var G__40414 = cljs.core.first.call(null,seq40412__$1);
var seq40412__$2 = cljs.core.next.call(null,seq40412__$1);
var G__40415 = cljs.core.first.call(null,seq40412__$2);
var seq40412__$3 = cljs.core.next.call(null,seq40412__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__40413,G__40414,G__40415,seq40412__$3);
});

return null;
})()
;
cljs.core$macros.extend_protocol.cljs$lang$macro = true;

cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,params)){
return cljs.core.cons.call(null,params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.meta.call(null,params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first.call(null,params__$1) instanceof cljs.core.Symbol)){
var G__40420 = cljs.core.next.call(null,params__$1);
var G__40421 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__40422 = lets;
params__$1 = G__40420;
new_params = G__40421;
lets = G__40422;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__40423 = cljs.core.next.call(null,params__$1);
var G__40424 = cljs.core.conj.call(null,new_params,gparam);
var G__40425 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__40423;
new_params = G__40424;
lets = G__40425;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
}
break;
}
}
});
var ret__28404__auto___40432 = (function (){
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40433 = arguments.length;
var i__28365__auto___40434 = (0);
while(true){
if((i__28365__auto___40434 < len__28364__auto___40433)){
args__28371__auto__.push((arguments[i__28365__auto___40434]));

var G__40435 = (i__28365__auto___40434 + (1));
i__28365__auto___40434 = G__40435;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__28057__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,sigs__$1))," should be a vector"].join(''):["Parameter declaration missing"].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')));
} else {
}

var vec__40429 = sig;
var seq__40430 = cljs.core.seq.call(null,vec__40429);
var first__40431 = cljs.core.first.call(null,seq__40430);
var seq__40430__$1 = cljs.core.next.call(null,seq__40430);
var params = first__40431;
var body = seq__40430__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__27195__auto__ = conds;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__28057__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core.map.call(null,((function (vec__40429,seq__40430,first__40431,seq__40430__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__28057__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});})(vec__40429,seq__40430,first__40431,seq__40430__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__40429,seq__40430,first__40431,seq__40430__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__28057__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});})(vec__40429,seq__40430,first__40431,seq__40430__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq40426){
var G__40427 = cljs.core.first.call(null,seq40426);
var seq40426__$1 = cljs.core.next.call(null,seq40426);
var G__40428 = cljs.core.first.call(null,seq40426__$1);
var seq40426__$2 = cljs.core.next.call(null,seq40426__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__40427,G__40428,seq40426__$2);
});

return null;
})()
;
cljs.core$macros.fn.cljs$lang$macro = true;

var ret__28404__auto___40440 = (function (){
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40441 = arguments.length;
var i__28365__auto___40442 = (0);
while(true){
if((i__28365__auto___40442 < len__28364__auto___40441)){
args__28371__auto__.push((arguments[i__28365__auto___40442]));

var G__40443 = (i__28365__auto___40442 + (1));
i__28365__auto___40442 = G__40443;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq40436){
var G__40437 = cljs.core.first.call(null,seq40436);
var seq40436__$1 = cljs.core.next.call(null,seq40436);
var G__40438 = cljs.core.first.call(null,seq40436__$1);
var seq40436__$2 = cljs.core.next.call(null,seq40436__$1);
var G__40439 = cljs.core.first.call(null,seq40436__$2);
var seq40436__$3 = cljs.core.next.call(null,seq40436__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__40437,G__40438,G__40439,seq40436__$3);
});

return null;
})()
;
cljs.core$macros.defn_.cljs$lang$macro = true;

var ret__28404__auto___40453 = (function (){
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var G__40452 = arguments.length;
switch (G__40452) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___40455 = arguments.length;
var i__28365__auto___40456 = (0);
while(true){
if((i__28365__auto___40456 < len__28364__auto___40455)){
args_arr__28383__auto__.push((arguments[i__28365__auto___40456]));

var G__40457 = (i__28365__auto___40456 + (1));
i__28365__auto___40456 = G__40457;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__28384__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__28057__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40444__auto__","temp__40444__auto__",-1246868396,null)),(function (){var x__28057__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40444__auto__","temp__40444__auto__",-1246868396,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40444__auto__","temp__40444__auto__",-1246868396,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq40446){
var G__40447 = cljs.core.first.call(null,seq40446);
var seq40446__$1 = cljs.core.next.call(null,seq40446);
var G__40448 = cljs.core.first.call(null,seq40446__$1);
var seq40446__$2 = cljs.core.next.call(null,seq40446__$1);
var G__40449 = cljs.core.first.call(null,seq40446__$2);
var seq40446__$3 = cljs.core.next.call(null,seq40446__$2);
var G__40450 = cljs.core.first.call(null,seq40446__$3);
var seq40446__$4 = cljs.core.next.call(null,seq40446__$3);
var G__40451 = cljs.core.first.call(null,seq40446__$4);
var seq40446__$5 = cljs.core.next.call(null,seq40446__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__40447,G__40448,G__40449,G__40450,G__40451,seq40446__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_let.cljs$lang$macro = true;

var ret__28404__auto___40460 = (function (){
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var G__40459 = arguments.length;
switch (G__40459) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__28057__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__28057__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;

return null;
})()
;
cljs.core$macros.if_not.cljs$lang$macro = true;

var ret__28404__auto___40467 = (function (){
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40468 = arguments.length;
var i__28365__auto___40469 = (0);
while(true){
if((i__28365__auto___40469 < len__28364__auto___40468)){
args__28371__auto__.push((arguments[i__28365__auto___40469]));

var G__40470 = (i__28365__auto___40469 + (1));
i__28365__auto___40469 = G__40470;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__40462_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__40462_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq40463){
var G__40464 = cljs.core.first.call(null,seq40463);
var seq40463__$1 = cljs.core.next.call(null,seq40463);
var G__40465 = cljs.core.first.call(null,seq40463__$1);
var seq40463__$2 = cljs.core.next.call(null,seq40463__$1);
var G__40466 = cljs.core.first.call(null,seq40463__$2);
var seq40463__$3 = cljs.core.next.call(null,seq40463__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__40464,G__40465,G__40466,seq40463__$3);
});

return null;
})()
;
cljs.core$macros.letfn.cljs$lang$macro = true;

var ret__28404__auto___40475 = (function (){
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a JavaScript
 *   method as a first-class fn.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40476 = arguments.length;
var i__28365__auto___40477 = (0);
while(true){
if((i__28365__auto___40477 < len__28364__auto___40476)){
args__28371__auto__.push((arguments[i__28365__auto___40477]));

var G__40478 = (i__28365__auto___40477 + (1));
i__28365__auto___40477 = G__40478;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq40471){
var G__40472 = cljs.core.first.call(null,seq40471);
var seq40471__$1 = cljs.core.next.call(null,seq40471);
var G__40473 = cljs.core.first.call(null,seq40471__$1);
var seq40471__$2 = cljs.core.next.call(null,seq40471__$1);
var G__40474 = cljs.core.first.call(null,seq40471__$2);
var seq40471__$3 = cljs.core.next.call(null,seq40471__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__40472,G__40473,G__40474,seq40471__$3);
});

return null;
})()
;
cljs.core$macros.memfn.cljs$lang$macro = true;

var ret__28404__auto___40483 = (function (){
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40484 = arguments.length;
var i__28365__auto___40485 = (0);
while(true){
if((i__28365__auto___40485 < len__28364__auto___40484)){
args__28371__auto__.push((arguments[i__28365__auto___40485]));

var G__40486 = (i__28365__auto___40485 + (1));
i__28365__auto___40485 = G__40486;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__28057__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq40479){
var G__40480 = cljs.core.first.call(null,seq40479);
var seq40479__$1 = cljs.core.next.call(null,seq40479);
var G__40481 = cljs.core.first.call(null,seq40479__$1);
var seq40479__$2 = cljs.core.next.call(null,seq40479__$1);
var G__40482 = cljs.core.first.call(null,seq40479__$2);
var seq40479__$3 = cljs.core.next.call(null,seq40479__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__40480,G__40481,G__40482,seq40479__$3);
});

return null;
})()
;
cljs.core$macros.when.cljs$lang$macro = true;

var ret__28404__auto___40495 = (function (){
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40496 = arguments.length;
var i__28365__auto___40497 = (0);
while(true){
if((i__28365__auto___40497 < len__28364__auto___40496)){
args__28371__auto__.push((arguments[i__28365__auto___40497]));

var G__40498 = (i__28365__auto___40497 + (1));
i__28365__auto___40497 = G__40498;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-first requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-first requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var vec__40492 = bindings;
var x = cljs.core.nth.call(null,vec__40492,(0),null);
var xs = cljs.core.nth.call(null,vec__40492,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__40487__auto__","xs__40487__auto__",377696258,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__28057__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__40487__auto__","xs__40487__auto__",377696258,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq40488){
var G__40489 = cljs.core.first.call(null,seq40488);
var seq40488__$1 = cljs.core.next.call(null,seq40488);
var G__40490 = cljs.core.first.call(null,seq40488__$1);
var seq40488__$2 = cljs.core.next.call(null,seq40488__$1);
var G__40491 = cljs.core.first.call(null,seq40488__$2);
var seq40488__$3 = cljs.core.next.call(null,seq40488__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__40489,G__40490,G__40491,seq40488__$3);
});

return null;
})()
;
cljs.core$macros.when_first.cljs$lang$macro = true;

var ret__28404__auto___40504 = (function (){
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40505 = arguments.length;
var i__28365__auto___40506 = (0);
while(true){
if((i__28365__auto___40506 < len__28364__auto___40505)){
args__28371__auto__.push((arguments[i__28365__auto___40506]));

var G__40507 = (i__28365__auto___40506 + (1));
i__28365__auto___40506 = G__40507;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40499__auto__","temp__40499__auto__",852895678,null)),(function (){var x__28057__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40499__auto__","temp__40499__auto__",852895678,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40499__auto__","temp__40499__auto__",852895678,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq40500){
var G__40501 = cljs.core.first.call(null,seq40500);
var seq40500__$1 = cljs.core.next.call(null,seq40500);
var G__40502 = cljs.core.first.call(null,seq40500__$1);
var seq40500__$2 = cljs.core.next.call(null,seq40500__$1);
var G__40503 = cljs.core.first.call(null,seq40500__$2);
var seq40500__$3 = cljs.core.next.call(null,seq40500__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__40501,G__40502,G__40503,seq40500__$3);
});

return null;
})()
;
cljs.core$macros.when_let.cljs$lang$macro = true;

var ret__28404__auto___40512 = (function (){
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40513 = arguments.length;
var i__28365__auto___40514 = (0);
while(true){
if((i__28365__auto___40514 < len__28364__auto___40513)){
args__28371__auto__.push((arguments[i__28365__auto___40514]));

var G__40515 = (i__28365__auto___40514 + (1));
i__28365__auto___40514 = G__40515;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__28057__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),null),x__28057__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq40508){
var G__40509 = cljs.core.first.call(null,seq40508);
var seq40508__$1 = cljs.core.next.call(null,seq40508);
var G__40510 = cljs.core.first.call(null,seq40508__$1);
var seq40508__$2 = cljs.core.next.call(null,seq40508__$1);
var G__40511 = cljs.core.first.call(null,seq40508__$2);
var seq40508__$3 = cljs.core.next.call(null,seq40508__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__40509,G__40510,G__40511,seq40508__$3);
});

return null;
})()
;
cljs.core$macros.when_not.cljs$lang$macro = true;

var ret__28404__auto___40520 = (function (){
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40521 = arguments.length;
var i__28365__auto___40522 = (0);
while(true){
if((i__28365__auto___40522 < len__28364__auto___40521)){
args__28371__auto__.push((arguments[i__28365__auto___40522]));

var G__40523 = (i__28365__auto___40522 + (1));
i__28365__auto___40522 = G__40523;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__28057__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),body,(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq40516){
var G__40517 = cljs.core.first.call(null,seq40516);
var seq40516__$1 = cljs.core.next.call(null,seq40516);
var G__40518 = cljs.core.first.call(null,seq40516__$1);
var seq40516__$2 = cljs.core.next.call(null,seq40516__$1);
var G__40519 = cljs.core.first.call(null,seq40516__$2);
var seq40516__$3 = cljs.core.next.call(null,seq40516__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__40517,G__40518,G__40519,seq40516__$3);
});

return null;
})()
;
cljs.core$macros.while$.cljs$lang$macro = true;

var ret__28404__auto___40532 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40533 = arguments.length;
var i__28365__auto___40534 = (0);
while(true){
if((i__28365__auto___40534 < len__28364__auto___40533)){
args__28371__auto__.push((arguments[i__28365__auto___40534]));

var G__40535 = (i__28365__auto___40534 + (1));
i__28365__auto___40534 = G__40535;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (p__40528){
var vec__40529 = p__40528;
var test = cljs.core.nth.call(null,vec__40529,(0),null);
var step = cljs.core.nth.call(null,vec__40529,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__28057__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});})(g))
,cljs.core.partition.call(null,(2),clauses));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq40524){
var G__40525 = cljs.core.first.call(null,seq40524);
var seq40524__$1 = cljs.core.next.call(null,seq40524);
var G__40526 = cljs.core.first.call(null,seq40524__$1);
var seq40524__$2 = cljs.core.next.call(null,seq40524__$1);
var G__40527 = cljs.core.first.call(null,seq40524__$2);
var seq40524__$3 = cljs.core.next.call(null,seq40524__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__40525,G__40526,G__40527,seq40524__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT_.cljs$lang$macro = true;

var ret__28404__auto___40544 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40545 = arguments.length;
var i__28365__auto___40546 = (0);
while(true){
if((i__28365__auto___40546 < len__28364__auto___40545)){
args__28371__auto__.push((arguments[i__28365__auto___40546]));

var G__40547 = (i__28365__auto___40546 + (1));
i__28365__auto___40546 = G__40547;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (p__40540){
var vec__40541 = p__40540;
var test = cljs.core.nth.call(null,vec__40541,(0),null);
var step = cljs.core.nth.call(null,vec__40541,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__28057__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});})(g))
,cljs.core.partition.call(null,(2),clauses));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq40536){
var G__40537 = cljs.core.first.call(null,seq40536);
var seq40536__$1 = cljs.core.next.call(null,seq40536);
var G__40538 = cljs.core.first.call(null,seq40536__$1);
var seq40536__$2 = cljs.core.next.call(null,seq40536__$1);
var G__40539 = cljs.core.first.call(null,seq40536__$2);
var seq40536__$3 = cljs.core.next.call(null,seq40536__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__40537,G__40538,G__40539,seq40536__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;

var ret__28404__auto___40553 = (function (){
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40554 = arguments.length;
var i__28365__auto___40555 = (0);
while(true){
if((i__28365__auto___40555 < len__28364__auto___40554)){
args__28371__auto__.push((arguments[i__28365__auto___40555]));

var G__40556 = (i__28365__auto___40555 + (1));
i__28365__auto___40555 = G__40556;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((4) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28372__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),cljs.core.butlast.call(null,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = ((cljs.core.empty_QMARK_.call(null,forms))?name:cljs.core.last.call(null,forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq40548){
var G__40549 = cljs.core.first.call(null,seq40548);
var seq40548__$1 = cljs.core.next.call(null,seq40548);
var G__40550 = cljs.core.first.call(null,seq40548__$1);
var seq40548__$2 = cljs.core.next.call(null,seq40548__$1);
var G__40551 = cljs.core.first.call(null,seq40548__$2);
var seq40548__$3 = cljs.core.next.call(null,seq40548__$2);
var G__40552 = cljs.core.first.call(null,seq40548__$3);
var seq40548__$4 = cljs.core.next.call(null,seq40548__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__40549,G__40550,G__40551,G__40552,seq40548__$4);
});

return null;
})()
;
cljs.core$macros.as__GT_.cljs$lang$macro = true;

var ret__28404__auto___40561 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40562 = arguments.length;
var i__28365__auto___40563 = (0);
while(true){
if((i__28365__auto___40563 < len__28364__auto___40562)){
args__28371__auto__.push((arguments[i__28365__auto___40563]));

var G__40564 = (i__28365__auto___40563 + (1));
i__28365__auto___40563 = G__40564;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__28057__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__28057__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});})(g))
,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq40557){
var G__40558 = cljs.core.first.call(null,seq40557);
var seq40557__$1 = cljs.core.next.call(null,seq40557);
var G__40559 = cljs.core.first.call(null,seq40557__$1);
var seq40557__$2 = cljs.core.next.call(null,seq40557__$1);
var G__40560 = cljs.core.first.call(null,seq40557__$2);
var seq40557__$3 = cljs.core.next.call(null,seq40557__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__40558,G__40559,G__40560,seq40557__$3);
});

return null;
})()
;
cljs.core$macros.some__GT_.cljs$lang$macro = true;

var ret__28404__auto___40569 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40570 = arguments.length;
var i__28365__auto___40571 = (0);
while(true){
if((i__28365__auto___40571 < len__28364__auto___40570)){
args__28371__auto__.push((arguments[i__28365__auto___40571]));

var G__40572 = (i__28365__auto___40571 + (1));
i__28365__auto___40571 = G__40572;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__28057__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__28057__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});})(g))
,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq40565){
var G__40566 = cljs.core.first.call(null,seq40565);
var seq40565__$1 = cljs.core.next.call(null,seq40565);
var G__40567 = cljs.core.first.call(null,seq40565__$1);
var seq40565__$2 = cljs.core.next.call(null,seq40565__$1);
var G__40568 = cljs.core.first.call(null,seq40565__$2);
var seq40565__$3 = cljs.core.next.call(null,seq40565__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__40566,G__40567,G__40568,seq40565__$3);
});

return null;
})()
;
cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;

var ret__28404__auto___40582 = (function (){
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var G__40581 = arguments.length;
switch (G__40581) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___40584 = arguments.length;
var i__28365__auto___40585 = (0);
while(true){
if((i__28365__auto___40585 < len__28364__auto___40584)){
args_arr__28383__auto__.push((arguments[i__28365__auto___40585]));

var G__40586 = (i__28365__auto___40585 + (1));
i__28365__auto___40585 = G__40586;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__28384__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__28057__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40573__auto__","temp__40573__auto__",1437470460,null)),(function (){var x__28057__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40573__auto__","temp__40573__auto__",1437470460,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40573__auto__","temp__40573__auto__",1437470460,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq40575){
var G__40576 = cljs.core.first.call(null,seq40575);
var seq40575__$1 = cljs.core.next.call(null,seq40575);
var G__40577 = cljs.core.first.call(null,seq40575__$1);
var seq40575__$2 = cljs.core.next.call(null,seq40575__$1);
var G__40578 = cljs.core.first.call(null,seq40575__$2);
var seq40575__$3 = cljs.core.next.call(null,seq40575__$2);
var G__40579 = cljs.core.first.call(null,seq40575__$3);
var seq40575__$4 = cljs.core.next.call(null,seq40575__$3);
var G__40580 = cljs.core.first.call(null,seq40575__$4);
var seq40575__$5 = cljs.core.next.call(null,seq40575__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__40576,G__40577,G__40578,G__40579,G__40580,seq40575__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_some.cljs$lang$macro = true;

var ret__28404__auto___40592 = (function (){
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40593 = arguments.length;
var i__28365__auto___40594 = (0);
while(true){
if((i__28365__auto___40594 < len__28364__auto___40593)){
args__28371__auto__.push((arguments[i__28365__auto___40594]));

var G__40595 = (i__28365__auto___40594 + (1));
i__28365__auto___40594 = G__40595;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40587__auto__","temp__40587__auto__",-402553139,null)),(function (){var x__28057__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40587__auto__","temp__40587__auto__",-402553139,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__40587__auto__","temp__40587__auto__",-402553139,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq40588){
var G__40589 = cljs.core.first.call(null,seq40588);
var seq40588__$1 = cljs.core.next.call(null,seq40588);
var G__40590 = cljs.core.first.call(null,seq40588__$1);
var seq40588__$2 = cljs.core.next.call(null,seq40588__$1);
var G__40591 = cljs.core.first.call(null,seq40588__$2);
var seq40588__$3 = cljs.core.next.call(null,seq40588__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__40589,G__40590,G__40591,seq40588__$3);
});

return null;
})()
;
cljs.core$macros.when_some.cljs$lang$macro = true;

/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_.call(null,fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.call(null,(function (p1__40596_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__40596_SHARP_)){
return cljs.core.first.call(null,p1__40596_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?["Invalid signature \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40596_SHARP_),"\" should be a list"].join(''):["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40596_SHARP_),"\" should be a vector"].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__40597_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__40597_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error(["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,bad_args)),"\" should be a vector"].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
cljs.core$macros.assert_valid_fdecl.call(null,fdecl);

var asig = (function (fdecl__$1){
var arglist = cljs.core.first.call(null,fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first.call(null,arglist)))?cljs.core.subvec.call(null,arglist,(2),cljs.core.count.call(null,arglist)):arglist);
var body = cljs.core.next.call(null,fdecl__$1);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
if(cljs.core.next.call(null,body)){
return cljs.core.with_meta.call(null,arglist__$1,cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,arglist__$1))?cljs.core.meta.call(null,arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first.call(null,body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__40598 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__40599 = cljs.core.next.call(null,fdecls);
ret = G__40598;
fdecls = G__40599;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__28057__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
}
});
var ret__28404__auto___40600 = /**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.defonce.cljs$lang$macro = true;

cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.call(null,(2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.call(null,"vec__");
var gseq = cljs.core.gensym.call(null,"seq__");
var gfirst = cljs.core.gensym.call(null,"first__");
var has_rest = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.call(null,bvec__$1,gvec,val);
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__28057__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq.call(null,bs)){
var firstb = cljs.core.first.call(null,bs);
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var G__40607 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__40608 = n;
var G__40609 = cljs.core.nnext.call(null,bs);
var G__40610 = true;
ret = G__40607;
n = G__40608;
bs = G__40609;
seen_rest_QMARK_ = G__40610;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__40611 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__28057__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__28057__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__28057__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__28057__auto____$1);
})(),x__28057__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__40612 = (n + (1));
var G__40613 = cljs.core.next.call(null,bs);
var G__40614 = seen_rest_QMARK_;
ret = G__40611;
n = G__40612;
bs = G__40613;
seen_rest_QMARK_ = G__40614;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.call(null,"map__");
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1),gmap);
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__28057__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__28057__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__40601_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__27195__auto__ = mkns;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core.namespace.call(null,p1__40601_SHARP_);
}
})(),cljs.core.name.call(null,p1__40601_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__40602_SHARP_){
return cljs.core._conj.call(null,(function (){var x__28057__auto__ = cljs.core.symbol.call(null,(function (){var or__27195__auto__ = mkns;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core.namespace.call(null,p1__40602_SHARP_);
}
})(),cljs.core.name.call(null,p1__40602_SHARP_));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"strs")){
return cljs.core.assoc.call(null,transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,b__$1));
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (p1__40603_SHARP_,p2__40604_SHARP_){
return cljs.core.assoc.call(null,p1__40603_SHARP_,p2__40604_SHARP_,cljs.core.val.call(null,entry).call(null,p2__40604_SHARP_));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,bes,cljs.core.key.call(null,entry)),cljs.core.key.call(null,entry).call(null,bes));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,b__$1,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"or","or",235744169)),transforms);
})();
while(true){
if(cljs.core.seq.call(null,bes)){
var bb = cljs.core.key.call(null,cljs.core.first.call(null,bes));
var bk = cljs.core.val.call(null,cljs.core.first.call(null,bes));
var local = ((((!((bb == null)))?((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === bb.cljs$core$INamed$)))?true:false):false))?cljs.core.with_meta.call(null,cljs.core.symbol.call(null,null,cljs.core.name.call(null,bb)),cljs.core.meta.call(null,bb)):bb);
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?cljs.core._conj.call(null,(function (){var x__28057__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$2 = defaults.call(null,local);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$2);
})(),x__28057__auto____$1);
})(),x__28057__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__28057__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__40615 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__40616 = cljs.core.next.call(null,bes);
ret = G__40615;
bes = G__40616;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,(cljs.core.truth_(cljs.core.namespace.call(null,b))?cljs.core.symbol.call(null,cljs.core.name.call(null,b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,cljs.core.symbol.call(null,cljs.core.name.call(null,b))),v);
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
return pvec.call(null,bvec,b,v);
} else {
if(cljs.core.map_QMARK_.call(null,b)){
return pmap.call(null,bvec,b,v);
} else {
throw (new Error(["Unsupported binding form: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb.call(null,bvec,cljs.core.first.call(null,b),cljs.core.second.call(null,b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,cljs.core.map.call(null,cljs.core.first,bents))){
return bindings;
} else {
var temp__4655__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bents,pb,process_entry){
return (function (p1__40605_SHARP_){
return (cljs.core.first.call(null,p1__40605_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__4655__auto__){
var kwbs = temp__4655__auto__;
throw (new Error(["Unsupported binding key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst.call(null,kwbs))].join('')));
} else {
return cljs.core.reduce.call(null,process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
var ret__28404__auto___40617 = /**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {'your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false)){
} else {
throw cljs.core.ex_info.call(null,"goog-define requires a string, number or boolean as default value",cljs.core.PersistentArrayMap.EMPTY);
}


var defname = cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":(((default$ === true) || (default$ === false))?"boolean":null)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__28057__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__28057__auto__ = ["/** @define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"} */"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__28057__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.goog_define.cljs$lang$macro = true;

var ret__28404__auto___40622 = (function (){
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40623 = arguments.length;
var i__28365__auto___40624 = (0);
while(true){
if((i__28365__auto___40624 < len__28364__auto___40623)){
args__28371__auto__.push((arguments[i__28365__auto___40624]));

var G__40625 = (i__28365__auto___40624 + (1));
i__28365__auto___40624 = G__40625;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"let requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__28057__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq40618){
var G__40619 = cljs.core.first.call(null,seq40618);
var seq40618__$1 = cljs.core.next.call(null,seq40618);
var G__40620 = cljs.core.first.call(null,seq40618__$1);
var seq40618__$2 = cljs.core.next.call(null,seq40618__$1);
var G__40621 = cljs.core.first.call(null,seq40618__$2);
var seq40618__$3 = cljs.core.next.call(null,seq40618__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__40619,G__40620,G__40621,seq40618__$3);
});

return null;
})()
;
cljs.core$macros.let$.cljs$lang$macro = true;

var ret__28404__auto___40634 = (function (){
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40635 = arguments.length;
var i__28365__auto___40636 = (0);
while(true){
if((i__28365__auto___40636 < len__28364__auto___40635)){
args__28371__auto__.push((arguments[i__28365__auto___40636]));

var G__40637 = (i__28365__auto___40636 + (1));
i__28365__auto___40636 = G__40637;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"loop requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"loop requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var db = cljs.core$macros.destructure.call(null,bindings);
if(cljs.core._EQ_.call(null,db,bindings)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__28057__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),body)));
} else {
var vs = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var bs = cljs.core.take_nth.call(null,(2),bindings);
var gs = cljs.core.map.call(null,((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.call(null);
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.call(null,((function (vs,bs,gs,db){
return (function (ret,p__40630){
var vec__40631 = p__40630;
var b = cljs.core.nth.call(null,vec__40631,(0),null);
var v = cljs.core.nth.call(null,vec__40631,(1),null);
var g = cljs.core.nth.call(null,vec__40631,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq40626){
var G__40627 = cljs.core.first.call(null,seq40626);
var seq40626__$1 = cljs.core.next.call(null,seq40626);
var G__40628 = cljs.core.first.call(null,seq40626__$1);
var seq40626__$2 = cljs.core.next.call(null,seq40626__$1);
var G__40629 = cljs.core.first.call(null,seq40626__$2);
var seq40626__$3 = cljs.core.next.call(null,seq40626__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__40627,G__40628,G__40629,seq40626__$3);
});

return null;
})()
;
cljs.core$macros.loop.cljs$lang$macro = true;

/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__40638_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40638_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null)], true)),cljs.core.iterate.call(null,(function (p__40639){
var vec__40640 = p__40639;
var p = cljs.core.nth.call(null,vec__40640,(0),null);
var b = cljs.core.nth.call(null,vec__40640,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count.call(null,cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod.call(null,c,(32));
if((m === (0))){
return cljs.core.quot.call(null,c,(32));
} else {
return (cljs.core.quot.call(null,c,(32)) + (1));
}
})();
var ret__28404__auto___40646 = (function (){
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40647 = arguments.length;
var i__28365__auto___40648 = (0);
while(true){
if((i__28365__auto___40648 < len__28364__auto___40647)){
args__28371__auto__.push((arguments[i__28365__auto___40648]));

var G__40649 = (i__28365__auto___40648 + (1));
i__28365__auto___40648 = G__40649;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var interpolate = (function (x){
if(typeof x === 'string'){
return "~{}";
} else {
return "cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})";
}
});
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.map.call(null,interpolate,xs)));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(strs),"].join('')"].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq40643){
var G__40644 = cljs.core.first.call(null,seq40643);
var seq40643__$1 = cljs.core.next.call(null,seq40643);
var G__40645 = cljs.core.first.call(null,seq40643__$1);
var seq40643__$2 = cljs.core.next.call(null,seq40643__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__40644,G__40645,seq40643__$2);
});

return null;
})()
;
cljs.core$macros.str.cljs$lang$macro = true;

cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__27183__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__27183__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__27183__auto__;
}
});
var ret__28404__auto___40660 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var G__40658 = arguments.length;
switch (G__40658) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___40662 = arguments.length;
var i__28365__auto___40663 = (0);
while(true){
if((i__28365__auto___40663 < len__28364__auto___40662)){
args_arr__28383__auto__.push((arguments[i__28365__auto___40663]));

var G__40664 = (i__28365__auto___40663 + (1));
i__28365__auto___40663 = G__40664;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28384__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__40650_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__40650_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__40651_SHARP_){
var _STAR_cljs_warnings_STAR_40659 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__40651_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_40659;
}});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__28057__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__40652__auto__","and__40652__auto__",-761311001,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__40652__auto__","and__40652__auto__",-761311001,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__40652__auto__","and__40652__auto__",-761311001,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq40654){
var G__40655 = cljs.core.first.call(null,seq40654);
var seq40654__$1 = cljs.core.next.call(null,seq40654);
var G__40656 = cljs.core.first.call(null,seq40654__$1);
var seq40654__$2 = cljs.core.next.call(null,seq40654__$1);
var G__40657 = cljs.core.first.call(null,seq40654__$2);
var seq40654__$3 = cljs.core.next.call(null,seq40654__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__40655,G__40656,G__40657,seq40654__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.and.cljs$lang$macro = true;

var ret__28404__auto___40675 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var G__40673 = arguments.length;
switch (G__40673) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___40677 = arguments.length;
var i__28365__auto___40678 = (0);
while(true){
if((i__28365__auto___40678 < len__28364__auto___40677)){
args_arr__28383__auto__.push((arguments[i__28365__auto___40678]));

var G__40679 = (i__28365__auto___40678 + (1));
i__28365__auto___40678 = G__40679;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28384__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__40665_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__40665_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__40666_SHARP_){
var _STAR_cljs_warnings_STAR_40674 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__40666_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_40674;
}});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__28057__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__40667__auto__","or__40667__auto__",-769006127,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__40667__auto__","or__40667__auto__",-769006127,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__40667__auto__","or__40667__auto__",-769006127,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq40669){
var G__40670 = cljs.core.first.call(null,seq40669);
var seq40669__$1 = cljs.core.next.call(null,seq40669);
var G__40671 = cljs.core.first.call(null,seq40669__$1);
var seq40669__$2 = cljs.core.next.call(null,seq40669__$1);
var G__40672 = cljs.core.first.call(null,seq40669__$2);
var seq40669__$3 = cljs.core.next.call(null,seq40669__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__40670,G__40671,G__40672,seq40669__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.or.cljs$lang$macro = true;

var ret__28404__auto___40680 = cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});
cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;

var ret__28404__auto___40681 = cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.some_QMARK_.cljs$lang$macro = true;

var ret__28404__auto___40682 = cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive_not.cljs$lang$macro = true;

var ret__28404__auto___40683 = cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;

var ret__28404__auto___40684 = cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;

var ret__28404__auto___40685 = cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});
cljs.core$macros.coercive_boolean.cljs$lang$macro = true;

var ret__28404__auto___40686 = cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","x is substituted twice","\n","(core/symbol? x)"].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.truth_.cljs$lang$macro = true;

var ret__28404__auto___40687 = cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_arguments.cljs$lang$macro = true;

var ret__28404__auto___40688 = cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_delete.cljs$lang$macro = true;

var ret__28404__auto___40689 = cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_in.cljs$lang$macro = true;

var ret__28404__auto___40690 = /**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__28057__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__28057__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});
cljs.core$macros.js_debugger.cljs$lang$macro = true;

var ret__28404__auto___40695 = /**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__40692 = clojure.string.split.call(null,comment,/\n/);
var seq__40693 = cljs.core.seq.call(null,vec__40692);
var first__40694 = cljs.core.first.call(null,seq__40693);
var seq__40693__$1 = cljs.core.next.call(null,seq__40693);
var x = first__40694;
var ys = seq__40693__$1;
return cljs.core._conj.call(null,(function (){var x__28057__auto__ = ["\n/**\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1([" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\n"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__40692,seq__40693,first__40694,seq__40693__$1,x,ys){
return (function (p1__40691_SHARP_){
return [" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,p1__40691_SHARP_,/^   /,"")),"\n"].join('');
});})(vec__40692,seq__40693,first__40694,seq__40693__$1,x,ys))
,ys)))," */\n"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_comment.cljs$lang$macro = true;

var ret__28404__auto___40696 = /**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = ["~{} = /** @type {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),"} */ (~{})"].join('');
return cljs.core._conj.call(null,(function (){var x__28057__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$2);
})(),x__28057__auto____$1);
})(),x__28057__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unsafe_cast.cljs$lang$macro = true;

var ret__28404__auto___40697 = /**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__28057__auto__ = ["/**",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),"*/"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_inline_comment.cljs$lang$macro = true;

var ret__28404__auto___40698 = cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.true_QMARK_.cljs$lang$macro = true;

var ret__28404__auto___40699 = cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.false_QMARK_.cljs$lang$macro = true;

var ret__28404__auto___40700 = cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.string_QMARK_.cljs$lang$macro = true;

var ret__28404__auto___40701 = /**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;

var ret__28404__auto___40702 = /**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;

var ret__28404__auto___40703 = cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;

var ret__28404__auto___40706 = cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__40704__auto__","c__40704__auto__",-192775603,null)),(function (){var x__28057__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40705__auto__","x__40705__auto__",-575138683,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40705__auto__","x__40705__auto__",-575138683,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__40704__auto__","c__40704__auto__",-192775603,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())))));
});
cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;

var ret__28404__auto___40707 = cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.number_QMARK_.cljs$lang$macro = true;

var ret__28404__auto___40708 = cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
});
cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;

var ret__28404__auto___40709 = cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
});
cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;

var ret__28404__auto___40719 = (function (){
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var G__40716 = arguments.length;
switch (G__40716) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___40721 = arguments.length;
var i__28365__auto___40722 = (0);
while(true){
if((i__28365__auto___40722 < len__28364__auto___40721)){
args_arr__28383__auto__.push((arguments[i__28365__auto___40722]));

var G__40723 = (i__28365__auto___40722 + (1));
i__28365__auto___40722 = G__40723;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28384__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx){
var G__40717 = cljs.analyzer.checked_arrays.call(null);
var G__40717__$1 = (((G__40717 instanceof cljs.core.Keyword))?G__40717.fqn:null);
switch (G__40717__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null)),(function (){var x__28057__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null)),(function (){var x__28057__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));

break;
default:
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = array;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idxs){
var G__40718 = cljs.analyzer.checked_arrays.call(null);
var G__40718__$1 = (((G__40718 instanceof cljs.core.Keyword))?G__40718.fqn:null);
switch (G__40718__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null)),(function (){var x__28057__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),idxs)));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null)),(function (){var x__28057__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),idxs)));

break;
default:
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__28057__auto__ = ["(~{}[~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),")"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),idxs)));

}
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq40711){
var G__40712 = cljs.core.first.call(null,seq40711);
var seq40711__$1 = cljs.core.next.call(null,seq40711);
var G__40713 = cljs.core.first.call(null,seq40711__$1);
var seq40711__$2 = cljs.core.next.call(null,seq40711__$1);
var G__40714 = cljs.core.first.call(null,seq40711__$2);
var seq40711__$3 = cljs.core.next.call(null,seq40711__$2);
var G__40715 = cljs.core.first.call(null,seq40711__$3);
var seq40711__$4 = cljs.core.next.call(null,seq40711__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__40712,G__40713,G__40714,G__40715,seq40711__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.aget.cljs$lang$macro = true;

var ret__28404__auto___40736 = (function (){
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var G__40733 = arguments.length;
switch (G__40733) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___40738 = arguments.length;
var i__28365__auto___40739 = (0);
while(true){
if((i__28365__auto___40739 < len__28364__auto___40738)){
args_arr__28383__auto__.push((arguments[i__28365__auto___40739]));

var G__40740 = (i__28365__auto___40739 + (1));
i__28365__auto___40739 = G__40740;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__28384__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,val){
var G__40734 = cljs.analyzer.checked_arrays.call(null);
var G__40734__$1 = (((G__40734 instanceof cljs.core.Keyword))?G__40734.fqn:null);
switch (G__40734__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null)),(function (){var x__28057__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null)),(function (){var x__28057__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));

break;
default:
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = array;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = idx;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$2 = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$2);
})(),x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idx2,idxv){
var G__40735 = cljs.analyzer.checked_arrays.call(null);
var G__40735__$1 = (((G__40735 instanceof cljs.core.Keyword))?G__40735.fqn:null);
switch (G__40735__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null)),(function (){var x__28057__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),idxv)));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null)),(function (){var x__28057__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),idxv)));

break;
default:
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__28057__auto__ = ["(~{}[~{}][~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr)," = ~{})"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),idxv)));

}
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq40727){
var G__40728 = cljs.core.first.call(null,seq40727);
var seq40727__$1 = cljs.core.next.call(null,seq40727);
var G__40729 = cljs.core.first.call(null,seq40727__$1);
var seq40727__$2 = cljs.core.next.call(null,seq40727__$1);
var G__40730 = cljs.core.first.call(null,seq40727__$2);
var seq40727__$3 = cljs.core.next.call(null,seq40727__$2);
var G__40731 = cljs.core.first.call(null,seq40727__$3);
var seq40727__$4 = cljs.core.next.call(null,seq40727__$3);
var G__40732 = cljs.core.first.call(null,seq40727__$4);
var seq40727__$5 = cljs.core.next.call(null,seq40727__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__40728,G__40729,G__40730,G__40731,G__40732,seq40727__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.aset.cljs$lang$macro = true;

var ret__28404__auto___40743 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_get = (function cljs$core$macros$unchecked_get(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unchecked_get.cljs$lang$macro = true;

var ret__28404__auto___40744 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_set = (function cljs$core$macros$unchecked_set(_AMPERSAND_form,_AMPERSAND_env,obj,key,val){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = key;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$2 = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$2);
})(),x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unchecked_set.cljs$lang$macro = true;

var ret__28404__auto___40752 = (function (){
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var G__40751 = arguments.length;
switch (G__40751) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___40754 = arguments.length;
var i__28365__auto___40755 = (0);
while(true){
if((i__28365__auto___40755 < len__28364__auto___40754)){
args_arr__28383__auto__.push((arguments[i__28365__auto___40755]));

var G__40756 = (i__28365__auto___40755 + (1));
i__28365__auto___40755 = G__40756;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28384__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq40746){
var G__40747 = cljs.core.first.call(null,seq40746);
var seq40746__$1 = cljs.core.next.call(null,seq40746);
var G__40748 = cljs.core.first.call(null,seq40746__$1);
var seq40746__$2 = cljs.core.next.call(null,seq40746__$1);
var G__40749 = cljs.core.first.call(null,seq40746__$2);
var seq40746__$3 = cljs.core.next.call(null,seq40746__$2);
var G__40750 = cljs.core.first.call(null,seq40746__$3);
var seq40746__$4 = cljs.core.next.call(null,seq40746__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__40747,G__40748,G__40749,G__40750,seq40746__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._PLUS_.cljs$lang$macro = true;

var ret__28404__auto___40757 = cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.byte$.cljs$lang$macro = true;

var ret__28404__auto___40758 = cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.short$.cljs$lang$macro = true;

var ret__28404__auto___40759 = cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.float$.cljs$lang$macro = true;

var ret__28404__auto___40760 = cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.double$.cljs$lang$macro = true;

var ret__28404__auto___40761 = cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_byte.cljs$lang$macro = true;

var ret__28404__auto___40762 = cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_char.cljs$lang$macro = true;

var ret__28404__auto___40763 = cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_short.cljs$lang$macro = true;

var ret__28404__auto___40764 = cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_float.cljs$lang$macro = true;

var ret__28404__auto___40765 = cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_double.cljs$lang$macro = true;

var ret__28404__auto___40769 = (function (){
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40770 = arguments.length;
var i__28365__auto___40771 = (0);
while(true){
if((i__28365__auto___40771 < len__28364__auto___40770)){
args__28371__auto__.push((arguments[i__28365__auto___40771]));

var G__40772 = (i__28365__auto___40771 + (1));
i__28365__auto___40771 = G__40772;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq40766){
var G__40767 = cljs.core.first.call(null,seq40766);
var seq40766__$1 = cljs.core.next.call(null,seq40766);
var G__40768 = cljs.core.first.call(null,seq40766__$1);
var seq40766__$2 = cljs.core.next.call(null,seq40766__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__40767,G__40768,seq40766__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add.cljs$lang$macro = true;

var ret__28404__auto___40776 = (function (){
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40777 = arguments.length;
var i__28365__auto___40778 = (0);
while(true){
if((i__28365__auto___40778 < len__28364__auto___40777)){
args__28371__auto__.push((arguments[i__28365__auto___40778]));

var G__40779 = (i__28365__auto___40778 + (1));
i__28365__auto___40778 = G__40779;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq40773){
var G__40774 = cljs.core.first.call(null,seq40773);
var seq40773__$1 = cljs.core.next.call(null,seq40773);
var G__40775 = cljs.core.first.call(null,seq40773__$1);
var seq40773__$2 = cljs.core.next.call(null,seq40773__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__40774,G__40775,seq40773__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;

var ret__28404__auto___40780 = cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.unchecked_dec.cljs$lang$macro = true;

var ret__28404__auto___40781 = cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;

var ret__28404__auto___40785 = (function (){
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40786 = arguments.length;
var i__28365__auto___40787 = (0);
while(true){
if((i__28365__auto___40787 < len__28364__auto___40786)){
args__28371__auto__.push((arguments[i__28365__auto___40787]));

var G__40788 = (i__28365__auto___40787 + (1));
i__28365__auto___40787 = G__40788;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq40782){
var G__40783 = cljs.core.first.call(null,seq40782);
var seq40782__$1 = cljs.core.next.call(null,seq40782);
var G__40784 = cljs.core.first.call(null,seq40782__$1);
var seq40782__$2 = cljs.core.next.call(null,seq40782__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__40783,G__40784,seq40782__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;

var ret__28404__auto___40789 = cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.unchecked_inc.cljs$lang$macro = true;

var ret__28404__auto___40790 = cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;

var ret__28404__auto___40794 = (function (){
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40795 = arguments.length;
var i__28365__auto___40796 = (0);
while(true){
if((i__28365__auto___40796 < len__28364__auto___40795)){
args__28371__auto__.push((arguments[i__28365__auto___40796]));

var G__40797 = (i__28365__auto___40796 + (1));
i__28365__auto___40796 = G__40797;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq40791){
var G__40792 = cljs.core.first.call(null,seq40791);
var seq40791__$1 = cljs.core.next.call(null,seq40791);
var G__40793 = cljs.core.first.call(null,seq40791__$1);
var seq40791__$2 = cljs.core.next.call(null,seq40791__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__40792,G__40793,seq40791__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;

var ret__28404__auto___40801 = (function (){
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40802 = arguments.length;
var i__28365__auto___40803 = (0);
while(true){
if((i__28365__auto___40803 < len__28364__auto___40802)){
args__28371__auto__.push((arguments[i__28365__auto___40803]));

var G__40804 = (i__28365__auto___40803 + (1));
i__28365__auto___40803 = G__40804;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq40798){
var G__40799 = cljs.core.first.call(null,seq40798);
var seq40798__$1 = cljs.core.next.call(null,seq40798);
var G__40800 = cljs.core.first.call(null,seq40798__$1);
var seq40798__$2 = cljs.core.next.call(null,seq40798__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__40799,G__40800,seq40798__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;

var ret__28404__auto___40805 = cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.unchecked_negate.cljs$lang$macro = true;

var ret__28404__auto___40806 = cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;

var ret__28404__auto___40807 = cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","mod","cljs.core/mod",1925370196,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;

var ret__28404__auto___40811 = (function (){
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40812 = arguments.length;
var i__28365__auto___40813 = (0);
while(true){
if((i__28365__auto___40813 < len__28364__auto___40812)){
args__28371__auto__.push((arguments[i__28365__auto___40813]));

var G__40814 = (i__28365__auto___40813 + (1));
i__28365__auto___40813 = G__40814;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq40808){
var G__40809 = cljs.core.first.call(null,seq40808);
var seq40808__$1 = cljs.core.next.call(null,seq40808);
var G__40810 = cljs.core.first.call(null,seq40808__$1);
var seq40808__$2 = cljs.core.next.call(null,seq40808__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__40809,G__40810,seq40808__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;

var ret__28404__auto___40818 = (function (){
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40819 = arguments.length;
var i__28365__auto___40820 = (0);
while(true){
if((i__28365__auto___40820 < len__28364__auto___40819)){
args__28371__auto__.push((arguments[i__28365__auto___40820]));

var G__40821 = (i__28365__auto___40820 + (1));
i__28365__auto___40820 = G__40821;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq40815){
var G__40816 = cljs.core.first.call(null,seq40815);
var seq40815__$1 = cljs.core.next.call(null,seq40815);
var G__40817 = cljs.core.first.call(null,seq40815__$1);
var seq40815__$2 = cljs.core.next.call(null,seq40815__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__40816,G__40817,seq40815__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;

var ret__28404__auto___40829 = (function (){
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var G__40828 = arguments.length;
switch (G__40828) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___40831 = arguments.length;
var i__28365__auto___40832 = (0);
while(true){
if((i__28365__auto___40832 < len__28364__auto___40831)){
args_arr__28383__auto__.push((arguments[i__28365__auto___40832]));

var G__40833 = (i__28365__auto___40832 + (1));
i__28365__auto___40832 = G__40833;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28384__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq40823){
var G__40824 = cljs.core.first.call(null,seq40823);
var seq40823__$1 = cljs.core.next.call(null,seq40823);
var G__40825 = cljs.core.first.call(null,seq40823__$1);
var seq40823__$2 = cljs.core.next.call(null,seq40823__$1);
var G__40826 = cljs.core.first.call(null,seq40823__$2);
var seq40823__$3 = cljs.core.next.call(null,seq40823__$2);
var G__40827 = cljs.core.first.call(null,seq40823__$3);
var seq40823__$4 = cljs.core.next.call(null,seq40823__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__40824,G__40825,G__40826,G__40827,seq40823__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._.cljs$lang$macro = true;

var ret__28404__auto___40841 = (function (){
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var G__40840 = arguments.length;
switch (G__40840) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___40843 = arguments.length;
var i__28365__auto___40844 = (0);
while(true){
if((i__28365__auto___40844 < len__28364__auto___40843)){
args_arr__28383__auto__.push((arguments[i__28365__auto___40844]));

var G__40845 = (i__28365__auto___40844 + (1));
i__28365__auto___40844 = G__40845;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28384__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq40835){
var G__40836 = cljs.core.first.call(null,seq40835);
var seq40835__$1 = cljs.core.next.call(null,seq40835);
var G__40837 = cljs.core.first.call(null,seq40835__$1);
var seq40835__$2 = cljs.core.next.call(null,seq40835__$1);
var G__40838 = cljs.core.first.call(null,seq40835__$2);
var seq40835__$3 = cljs.core.next.call(null,seq40835__$2);
var G__40839 = cljs.core.first.call(null,seq40835__$3);
var seq40835__$4 = cljs.core.next.call(null,seq40835__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__40836,G__40837,G__40838,G__40839,seq40835__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._STAR_.cljs$lang$macro = true;

var ret__28404__auto___40853 = (function (){
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var G__40852 = arguments.length;
switch (G__40852) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___40855 = arguments.length;
var i__28365__auto___40856 = (0);
while(true){
if((i__28365__auto___40856 < len__28364__auto___40855)){
args_arr__28383__auto__.push((arguments[i__28365__auto___40856]));

var G__40857 = (i__28365__auto___40856 + (1));
i__28365__auto___40856 = G__40857;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28384__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq40847){
var G__40848 = cljs.core.first.call(null,seq40847);
var seq40847__$1 = cljs.core.next.call(null,seq40847);
var G__40849 = cljs.core.first.call(null,seq40847__$1);
var seq40847__$2 = cljs.core.next.call(null,seq40847__$1);
var G__40850 = cljs.core.first.call(null,seq40847__$2);
var seq40847__$3 = cljs.core.next.call(null,seq40847__$2);
var G__40851 = cljs.core.first.call(null,seq40847__$3);
var seq40847__$4 = cljs.core.next.call(null,seq40847__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__40848,G__40849,G__40850,G__40851,seq40847__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._SLASH_.cljs$lang$macro = true;

var ret__28404__auto___40865 = (function (){
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var G__40864 = arguments.length;
switch (G__40864) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___40867 = arguments.length;
var i__28365__auto___40868 = (0);
while(true){
if((i__28365__auto___40868 < len__28364__auto___40867)){
args_arr__28383__auto__.push((arguments[i__28365__auto___40868]));

var G__40869 = (i__28365__auto___40868 + (1));
i__28365__auto___40868 = G__40869;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28384__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq40859){
var G__40860 = cljs.core.first.call(null,seq40859);
var seq40859__$1 = cljs.core.next.call(null,seq40859);
var G__40861 = cljs.core.first.call(null,seq40859__$1);
var seq40859__$2 = cljs.core.next.call(null,seq40859__$1);
var G__40862 = cljs.core.first.call(null,seq40859__$2);
var seq40859__$3 = cljs.core.next.call(null,seq40859__$2);
var G__40863 = cljs.core.first.call(null,seq40859__$3);
var seq40859__$4 = cljs.core.next.call(null,seq40859__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__40860,G__40861,G__40862,G__40863,seq40859__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.divide.cljs$lang$macro = true;

var ret__28404__auto___40877 = (function (){
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var G__40876 = arguments.length;
switch (G__40876) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___40879 = arguments.length;
var i__28365__auto___40880 = (0);
while(true){
if((i__28365__auto___40880 < len__28364__auto___40879)){
args_arr__28383__auto__.push((arguments[i__28365__auto___40880]));

var G__40881 = (i__28365__auto___40880 + (1));
i__28365__auto___40880 = G__40881;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28384__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__28057__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq40871){
var G__40872 = cljs.core.first.call(null,seq40871);
var seq40871__$1 = cljs.core.next.call(null,seq40871);
var G__40873 = cljs.core.first.call(null,seq40871__$1);
var seq40871__$2 = cljs.core.next.call(null,seq40871__$1);
var G__40874 = cljs.core.first.call(null,seq40871__$2);
var seq40871__$3 = cljs.core.next.call(null,seq40871__$2);
var G__40875 = cljs.core.first.call(null,seq40871__$3);
var seq40871__$4 = cljs.core.next.call(null,seq40871__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__40872,G__40873,G__40874,G__40875,seq40871__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT_.cljs$lang$macro = true;

var ret__28404__auto___40889 = (function (){
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var G__40888 = arguments.length;
switch (G__40888) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___40891 = arguments.length;
var i__28365__auto___40892 = (0);
while(true){
if((i__28365__auto___40892 < len__28364__auto___40891)){
args_arr__28383__auto__.push((arguments[i__28365__auto___40892]));

var G__40893 = (i__28365__auto___40892 + (1));
i__28365__auto___40892 = G__40893;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28384__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__28057__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq40883){
var G__40884 = cljs.core.first.call(null,seq40883);
var seq40883__$1 = cljs.core.next.call(null,seq40883);
var G__40885 = cljs.core.first.call(null,seq40883__$1);
var seq40883__$2 = cljs.core.next.call(null,seq40883__$1);
var G__40886 = cljs.core.first.call(null,seq40883__$2);
var seq40883__$3 = cljs.core.next.call(null,seq40883__$2);
var G__40887 = cljs.core.first.call(null,seq40883__$3);
var seq40883__$4 = cljs.core.next.call(null,seq40883__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__40884,G__40885,G__40886,G__40887,seq40883__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT__EQ_.cljs$lang$macro = true;

var ret__28404__auto___40901 = (function (){
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var G__40900 = arguments.length;
switch (G__40900) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___40903 = arguments.length;
var i__28365__auto___40904 = (0);
while(true){
if((i__28365__auto___40904 < len__28364__auto___40903)){
args_arr__28383__auto__.push((arguments[i__28365__auto___40904]));

var G__40905 = (i__28365__auto___40904 + (1));
i__28365__auto___40904 = G__40905;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28384__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__28057__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq40895){
var G__40896 = cljs.core.first.call(null,seq40895);
var seq40895__$1 = cljs.core.next.call(null,seq40895);
var G__40897 = cljs.core.first.call(null,seq40895__$1);
var seq40895__$2 = cljs.core.next.call(null,seq40895__$1);
var G__40898 = cljs.core.first.call(null,seq40895__$2);
var seq40895__$3 = cljs.core.next.call(null,seq40895__$2);
var G__40899 = cljs.core.first.call(null,seq40895__$3);
var seq40895__$4 = cljs.core.next.call(null,seq40895__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__40896,G__40897,G__40898,G__40899,seq40895__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT_.cljs$lang$macro = true;

var ret__28404__auto___40913 = (function (){
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var G__40912 = arguments.length;
switch (G__40912) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___40915 = arguments.length;
var i__28365__auto___40916 = (0);
while(true){
if((i__28365__auto___40916 < len__28364__auto___40915)){
args_arr__28383__auto__.push((arguments[i__28365__auto___40916]));

var G__40917 = (i__28365__auto___40916 + (1));
i__28365__auto___40916 = G__40917;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28384__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__28057__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq40907){
var G__40908 = cljs.core.first.call(null,seq40907);
var seq40907__$1 = cljs.core.next.call(null,seq40907);
var G__40909 = cljs.core.first.call(null,seq40907__$1);
var seq40907__$2 = cljs.core.next.call(null,seq40907__$1);
var G__40910 = cljs.core.first.call(null,seq40907__$2);
var seq40907__$3 = cljs.core.next.call(null,seq40907__$2);
var G__40911 = cljs.core.first.call(null,seq40907__$3);
var seq40907__$4 = cljs.core.next.call(null,seq40907__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__40908,G__40909,G__40910,G__40911,seq40907__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT__EQ_.cljs$lang$macro = true;

var ret__28404__auto___40925 = (function (){
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var G__40924 = arguments.length;
switch (G__40924) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___40927 = arguments.length;
var i__28365__auto___40928 = (0);
while(true){
if((i__28365__auto___40928 < len__28364__auto___40927)){
args_arr__28383__auto__.push((arguments[i__28365__auto___40928]));

var G__40929 = (i__28365__auto___40928 + (1));
i__28365__auto___40928 = G__40929;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28384__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__28057__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq40919){
var G__40920 = cljs.core.first.call(null,seq40919);
var seq40919__$1 = cljs.core.next.call(null,seq40919);
var G__40921 = cljs.core.first.call(null,seq40919__$1);
var seq40919__$2 = cljs.core.next.call(null,seq40919__$1);
var G__40922 = cljs.core.first.call(null,seq40919__$2);
var seq40919__$3 = cljs.core.next.call(null,seq40919__$2);
var G__40923 = cljs.core.first.call(null,seq40919__$3);
var seq40919__$4 = cljs.core.next.call(null,seq40919__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__40920,G__40921,G__40922,G__40923,seq40919__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;

var ret__28404__auto___40930 = cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});
cljs.core$macros.dec.cljs$lang$macro = true;

var ret__28404__auto___40931 = cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});
cljs.core$macros.inc.cljs$lang$macro = true;

var ret__28404__auto___40932 = cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;

var ret__28404__auto___40933 = cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;

var ret__28404__auto___40934 = cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;

var ret__28404__auto___40944 = (function (){
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var G__40943 = arguments.length;
switch (G__40943) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___40946 = arguments.length;
var i__28365__auto___40947 = (0);
while(true){
if((i__28365__auto___40947 < len__28364__auto___40946)){
args_arr__28383__auto__.push((arguments[i__28365__auto___40947]));

var G__40948 = (i__28365__auto___40947 + (1));
i__28365__auto___40947 = G__40948;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28384__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40935__auto__","x__40935__auto__",646836674,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__40936__auto__","y__40936__auto__",1966715616,null)),(function (){var x__28057__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40935__auto__","x__40935__auto__",646836674,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__40936__auto__","y__40936__auto__",1966715616,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40935__auto__","x__40935__auto__",646836674,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__40936__auto__","y__40936__auto__",1966715616,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq40938){
var G__40939 = cljs.core.first.call(null,seq40938);
var seq40938__$1 = cljs.core.next.call(null,seq40938);
var G__40940 = cljs.core.first.call(null,seq40938__$1);
var seq40938__$2 = cljs.core.next.call(null,seq40938__$1);
var G__40941 = cljs.core.first.call(null,seq40938__$2);
var seq40938__$3 = cljs.core.next.call(null,seq40938__$2);
var G__40942 = cljs.core.first.call(null,seq40938__$3);
var seq40938__$4 = cljs.core.next.call(null,seq40938__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__40939,G__40940,G__40941,G__40942,seq40938__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.max.cljs$lang$macro = true;

var ret__28404__auto___40958 = (function (){
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var G__40957 = arguments.length;
switch (G__40957) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___40960 = arguments.length;
var i__28365__auto___40961 = (0);
while(true){
if((i__28365__auto___40961 < len__28364__auto___40960)){
args_arr__28383__auto__.push((arguments[i__28365__auto___40961]));

var G__40962 = (i__28365__auto___40961 + (1));
i__28365__auto___40961 = G__40962;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28384__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40949__auto__","x__40949__auto__",-35545303,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__40950__auto__","y__40950__auto__",-996558269,null)),(function (){var x__28057__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40949__auto__","x__40949__auto__",-35545303,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__40950__auto__","y__40950__auto__",-996558269,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40949__auto__","x__40949__auto__",-35545303,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__40950__auto__","y__40950__auto__",-996558269,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq40952){
var G__40953 = cljs.core.first.call(null,seq40952);
var seq40952__$1 = cljs.core.next.call(null,seq40952);
var G__40954 = cljs.core.first.call(null,seq40952__$1);
var seq40952__$2 = cljs.core.next.call(null,seq40952__$1);
var G__40955 = cljs.core.first.call(null,seq40952__$2);
var seq40952__$3 = cljs.core.next.call(null,seq40952__$2);
var G__40956 = cljs.core.first.call(null,seq40952__$3);
var seq40952__$4 = cljs.core.next.call(null,seq40952__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__40953,G__40954,G__40955,G__40956,seq40952__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.min.cljs$lang$macro = true;

var ret__28404__auto___40963 = cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_mod.cljs$lang$macro = true;

var ret__28404__auto___40964 = cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_not.cljs$lang$macro = true;

var ret__28404__auto___40972 = (function (){
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var G__40971 = arguments.length;
switch (G__40971) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___40974 = arguments.length;
var i__28365__auto___40975 = (0);
while(true){
if((i__28365__auto___40975 < len__28364__auto___40974)){
args_arr__28383__auto__.push((arguments[i__28365__auto___40975]));

var G__40976 = (i__28365__auto___40975 + (1));
i__28365__auto___40975 = G__40976;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28384__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq40966){
var G__40967 = cljs.core.first.call(null,seq40966);
var seq40966__$1 = cljs.core.next.call(null,seq40966);
var G__40968 = cljs.core.first.call(null,seq40966__$1);
var seq40966__$2 = cljs.core.next.call(null,seq40966__$1);
var G__40969 = cljs.core.first.call(null,seq40966__$2);
var seq40966__$3 = cljs.core.next.call(null,seq40966__$2);
var G__40970 = cljs.core.first.call(null,seq40966__$3);
var seq40966__$4 = cljs.core.next.call(null,seq40966__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__40967,G__40968,G__40969,G__40970,seq40966__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and.cljs$lang$macro = true;

var ret__28404__auto___40984 = (function (){
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var G__40983 = arguments.length;
switch (G__40983) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___40986 = arguments.length;
var i__28365__auto___40987 = (0);
while(true){
if((i__28365__auto___40987 < len__28364__auto___40986)){
args_arr__28383__auto__.push((arguments[i__28365__auto___40987]));

var G__40988 = (i__28365__auto___40987 + (1));
i__28365__auto___40987 = G__40988;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28384__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq40978){
var G__40979 = cljs.core.first.call(null,seq40978);
var seq40978__$1 = cljs.core.next.call(null,seq40978);
var G__40980 = cljs.core.first.call(null,seq40978__$1);
var seq40978__$2 = cljs.core.next.call(null,seq40978__$1);
var G__40981 = cljs.core.first.call(null,seq40978__$2);
var seq40978__$3 = cljs.core.next.call(null,seq40978__$2);
var G__40982 = cljs.core.first.call(null,seq40978__$3);
var seq40978__$4 = cljs.core.next.call(null,seq40978__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__40979,G__40980,G__40981,G__40982,seq40978__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;

var ret__28404__auto___40996 = (function (){
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var G__40995 = arguments.length;
switch (G__40995) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___40998 = arguments.length;
var i__28365__auto___40999 = (0);
while(true){
if((i__28365__auto___40999 < len__28364__auto___40998)){
args_arr__28383__auto__.push((arguments[i__28365__auto___40999]));

var G__41000 = (i__28365__auto___40999 + (1));
i__28365__auto___40999 = G__41000;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28384__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq40990){
var G__40991 = cljs.core.first.call(null,seq40990);
var seq40990__$1 = cljs.core.next.call(null,seq40990);
var G__40992 = cljs.core.first.call(null,seq40990__$1);
var seq40990__$2 = cljs.core.next.call(null,seq40990__$1);
var G__40993 = cljs.core.first.call(null,seq40990__$2);
var seq40990__$3 = cljs.core.next.call(null,seq40990__$2);
var G__40994 = cljs.core.first.call(null,seq40990__$3);
var seq40990__$4 = cljs.core.next.call(null,seq40990__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__40991,G__40992,G__40993,G__40994,seq40990__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_or.cljs$lang$macro = true;

var ret__28404__auto___41001 = cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.int$.cljs$lang$macro = true;

var ret__28404__auto___41009 = (function (){
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var G__41008 = arguments.length;
switch (G__41008) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___41011 = arguments.length;
var i__28365__auto___41012 = (0);
while(true){
if((i__28365__auto___41012 < len__28364__auto___41011)){
args_arr__28383__auto__.push((arguments[i__28365__auto___41012]));

var G__41013 = (i__28365__auto___41012 + (1));
i__28365__auto___41012 = G__41013;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28384__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq41003){
var G__41004 = cljs.core.first.call(null,seq41003);
var seq41003__$1 = cljs.core.next.call(null,seq41003);
var G__41005 = cljs.core.first.call(null,seq41003__$1);
var seq41003__$2 = cljs.core.next.call(null,seq41003__$1);
var G__41006 = cljs.core.first.call(null,seq41003__$2);
var seq41003__$3 = cljs.core.next.call(null,seq41003__$2);
var G__41007 = cljs.core.first.call(null,seq41003__$3);
var seq41003__$4 = cljs.core.next.call(null,seq41003__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__41004,G__41005,G__41006,G__41007,seq41003__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_xor.cljs$lang$macro = true;

var ret__28404__auto___41021 = (function (){
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var G__41020 = arguments.length;
switch (G__41020) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___41023 = arguments.length;
var i__28365__auto___41024 = (0);
while(true){
if((i__28365__auto___41024 < len__28364__auto___41023)){
args_arr__28383__auto__.push((arguments[i__28365__auto___41024]));

var G__41025 = (i__28365__auto___41024 + (1));
i__28365__auto___41024 = G__41025;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28384__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq41015){
var G__41016 = cljs.core.first.call(null,seq41015);
var seq41015__$1 = cljs.core.next.call(null,seq41015);
var G__41017 = cljs.core.first.call(null,seq41015__$1);
var seq41015__$2 = cljs.core.next.call(null,seq41015__$1);
var G__41018 = cljs.core.first.call(null,seq41015__$2);
var seq41015__$3 = cljs.core.next.call(null,seq41015__$2);
var G__41019 = cljs.core.first.call(null,seq41015__$3);
var seq41015__$4 = cljs.core.next.call(null,seq41015__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__41016,G__41017,G__41018,G__41019,seq41015__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and_not.cljs$lang$macro = true;

var ret__28404__auto___41026 = cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_clear.cljs$lang$macro = true;

var ret__28404__auto___41027 = cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_flip.cljs$lang$macro = true;

var ret__28404__auto___41028 = cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.bit_test.cljs$lang$macro = true;

var ret__28404__auto___41029 = cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_left.cljs$lang$macro = true;

var ret__28404__auto___41030 = cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_right.cljs$lang$macro = true;

var ret__28404__auto___41031 = cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;

var ret__28404__auto___41032 = cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;

var ret__28404__auto___41033 = cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_set.cljs$lang$macro = true;

var ret__28404__auto___41034 = cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.mask.cljs$lang$macro = true;

var ret__28404__auto___41035 = cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__28057__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bitpos.cljs$lang$macro = true;

var ret__28404__auto___41037 = cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","hash-key is substituted twice","\n","(clojure.core/symbol? hash-key)"].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__41036__auto__","h__41036__auto__",-210639779,null)),(function (){var x__28057__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__41036__auto__","h__41036__auto__",-210639779,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__41036__auto__","h__41036__auto__",-210639779,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__41036__auto__","h__41036__auto__",-210639779,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28057__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__41036__auto__","h__41036__auto__",-210639779,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__41036__auto__","h__41036__auto__",-210639779,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.caching_hash.cljs$lang$macro = true;

cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__28057__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41038__auto__","x__41038__auto__",700861347,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41038__auto__","x__41038__auto__",700861347,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
var ret__28404__auto___41046 = (function (){
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41047 = arguments.length;
var i__28365__auto___41048 = (0);
while(true){
if((i__28365__auto___41048 < len__28364__auto___41047)){
args__28371__auto__.push((arguments[i__28365__auto___41048]));

var G__41049 = (i__28365__auto___41048 + (1));
i__28365__auto___41048 = G__41049;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((6) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__28372__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq41039){
var G__41040 = cljs.core.first.call(null,seq41039);
var seq41039__$1 = cljs.core.next.call(null,seq41039);
var G__41041 = cljs.core.first.call(null,seq41039__$1);
var seq41039__$2 = cljs.core.next.call(null,seq41039__$1);
var G__41042 = cljs.core.first.call(null,seq41039__$2);
var seq41039__$3 = cljs.core.next.call(null,seq41039__$2);
var G__41043 = cljs.core.first.call(null,seq41039__$3);
var seq41039__$4 = cljs.core.next.call(null,seq41039__$3);
var G__41044 = cljs.core.first.call(null,seq41039__$4);
var seq41039__$5 = cljs.core.next.call(null,seq41039__$4);
var G__41045 = cljs.core.first.call(null,seq41039__$5);
var seq41039__$6 = cljs.core.next.call(null,seq41039__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__41040,G__41041,G__41042,G__41043,G__41044,G__41045,seq41039__$6);
});

return null;
})()
;
cljs.core$macros.defcurried.cljs$lang$macro = true;

cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = clojure.walk.postwalk.call(null,(function (p1__41050_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__41050_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__41050_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k]),p1__41050_SHARP_));
} else {
return p1__41050_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
var ret__28404__auto___41055 = /**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__41051,fkv){
var vec__41052 = p__41051;
var f1 = cljs.core.nth.call(null,vec__41052,(0),null);
var k = cljs.core.nth.call(null,vec__41052,(1),null);
return cljs.core$macros.do_rfn.call(null,f1,k,fkv);
});
cljs.core$macros.rfn.cljs$lang$macro = true;

cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
var ret__28404__auto___41059 = (function (){
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (seq f)))))
 *   == ("f" "o" "o"))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41060 = arguments.length;
var i__28365__auto___41061 = (0);
while(true){
if((i__28365__auto___41061 < len__28364__auto___41060)){
args__28371__auto__.push((arguments[i__28365__auto___41061]));

var G__41062 = (i__28365__auto___41061 + (1));
i__28365__auto___41061 = G__41062;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,["t_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__28057__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__28057__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__28057__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__28057__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),locals,(function (){var x__28057__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__28057__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),locals,(function (){var x__28057__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq41056){
var G__41057 = cljs.core.first.call(null,seq41056);
var seq41056__$1 = cljs.core.next.call(null,seq41056);
var G__41058 = cljs.core.first.call(null,seq41056__$1);
var seq41056__$2 = cljs.core.next.call(null,seq41056__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__41057,G__41058,seq41056__$2);
});

return null;
})()
;
cljs.core$macros.reify.cljs$lang$macro = true;

var ret__28404__auto___41067 = (function (){
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41068 = arguments.length;
var i__28365__auto___41069 = (0);
while(true){
if((i__28365__auto___41069 < len__28364__auto___41068)){
args__28371__auto__.push((arguments[i__28365__auto___41069]));

var G__41070 = (i__28365__auto___41069 + (1));
i__28365__auto___41069 = G__41070;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq41063){
var G__41064 = cljs.core.first.call(null,seq41063);
var seq41063__$1 = cljs.core.next.call(null,seq41063);
var G__41065 = cljs.core.first.call(null,seq41063__$1);
var seq41063__$2 = cljs.core.next.call(null,seq41063__$1);
var G__41066 = cljs.core.first.call(null,seq41063__$2);
var seq41063__$3 = cljs.core.next.call(null,seq41063__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41064,G__41065,G__41066,seq41063__$3);
});

return null;
})()
;
cljs.core$macros.specify_BANG_.cljs$lang$macro = true;

var ret__28404__auto___41075 = (function (){
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41076 = arguments.length;
var i__28365__auto___41077 = (0);
while(true){
if((i__28365__auto___41077 < len__28364__auto___41076)){
args__28371__auto__.push((arguments[i__28365__auto___41077]));

var G__41078 = (i__28365__auto___41077 + (1));
i__28365__auto___41077 = G__41078;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__28057__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq41071){
var G__41072 = cljs.core.first.call(null,seq41071);
var seq41071__$1 = cljs.core.next.call(null,seq41071);
var G__41073 = cljs.core.first.call(null,seq41071__$1);
var seq41071__$2 = cljs.core.next.call(null,seq41071__$1);
var G__41074 = cljs.core.first.call(null,seq41071__$2);
var seq41071__$3 = cljs.core.next.call(null,seq41071__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__41072,G__41073,G__41074,seq41071__$3);
});

return null;
})()
;
cljs.core$macros.specify.cljs$lang$macro = true;

var ret__28404__auto___41079 = cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"this"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_this.cljs$lang$macro = true;

var ret__28404__auto___41084 = (function (){
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41085 = arguments.length;
var i__28365__auto___41086 = (0);
while(true){
if((i__28365__auto___41086 < len__28364__auto___41085)){
args__28371__auto__.push((arguments[i__28365__auto___41086]));

var G__41087 = (i__28365__auto___41086 + (1));
i__28365__auto___41086 = G__41087;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq41080){
var G__41081 = cljs.core.first.call(null,seq41080);
var seq41080__$1 = cljs.core.next.call(null,seq41080);
var G__41082 = cljs.core.first.call(null,seq41080__$1);
var seq41080__$2 = cljs.core.next.call(null,seq41080__$1);
var G__41083 = cljs.core.first.call(null,seq41080__$2);
var seq41080__$3 = cljs.core.next.call(null,seq41080__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__41081,G__41082,G__41083,seq41080__$3);
});

return null;
})()
;
cljs.core$macros.this_as.cljs$lang$macro = true;

cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"Object","Object",61210754,null),p)){
return null;
} else {
var temp__4655__auto__ = cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
if(cljs.core.truth_(temp__4655__auto__)){
var var$ = temp__4655__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
}

if(cljs.core.truth_((function (){var and__27183__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__27183__auto__)){
var and__27183__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__27183__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__27183__auto____$1;
}
} else {
return and__27183__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),((function (var$,temp__4655__auto__){
return (function (ns){
return cljs.core.update_in.call(null,ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,p)),new cljs.core.Keyword(null,"impls","impls",-1314014853)], null),cljs.core.conj,type);
});})(var$,temp__4655__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"undeclared","undeclared",1446667347).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Can't resolve: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')),"\n","ret"].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq.call(null,s)){
var G__41088 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__41089 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__41088;
s = G__41089;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__41090){
var vec__41091 = p__41090;
var p = cljs.core.nth.call(null,vec__41091,(0),null);
var sigs = cljs.core.nth.call(null,vec__41091,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join(''),(0),([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__28057__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__41091,p,sigs){
return (function (p__41094){
var vec__41095 = p__41094;
var seq__41096 = cljs.core.seq.call(null,vec__41095);
var first__41097 = cljs.core.first.call(null,seq__41096);
var seq__41096__$1 = cljs.core.next.call(null,seq__41096);
var f = first__41097;
var meths = seq__41096__$1;
var form = vec__41095;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__28057__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfn_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});})(psym,pfn_prefix,vec__41091,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__28150__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__28151__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__28152__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__28153__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__28154__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__28150__auto__,prefer_table__28151__auto__,method_cache__28152__auto__,cached_hierarchy__28153__auto__,hierarchy__28154__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__28150__auto__,prefer_table__28151__auto__,method_cache__28152__auto__,cached_hierarchy__28153__auto__,hierarchy__28154__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__28154__auto__,method_table__28150__auto__,prefer_table__28151__auto__,method_cache__28152__auto__,cached_hierarchy__28153__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__28057__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__28057__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__28057__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__41098){
var vec__41099 = p__41098;
var seq__41100 = cljs.core.seq.call(null,vec__41099);
var first__41101 = cljs.core.first.call(null,seq__41100);
var seq__41100__$1 = cljs.core.next.call(null,seq__41100);
var vec__41102 = first__41101;
var seq__41103 = cljs.core.seq.call(null,vec__41102);
var first__41104 = cljs.core.first.call(null,seq__41103);
var seq__41103__$1 = cljs.core.next.call(null,seq__41103);
var this$ = first__41104;
var args = seq__41103__$1;
var sig = vec__41102;
var body = seq__41100__$1;
var x__28057__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__41105){
var vec__41106 = p__41105;
var seq__41107 = cljs.core.seq.call(null,vec__41106);
var first__41108 = cljs.core.first.call(null,seq__41107);
var seq__41107__$1 = cljs.core.next.call(null,seq__41107);
var vec__41109 = first__41108;
var seq__41110 = cljs.core.seq.call(null,vec__41109);
var first__41111 = cljs.core.first.call(null,seq__41110);
var seq__41110__$1 = cljs.core.next.call(null,seq__41110);
var this$ = first__41111;
var args = seq__41110__$1;
var sig = vec__41109;
var body = seq__41107__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__28057__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__41112){
var vec__41113 = p__41112;
var seq__41114 = cljs.core.seq.call(null,vec__41113);
var first__41115 = cljs.core.first.call(null,seq__41114);
var seq__41114__$1 = cljs.core.next.call(null,seq__41114);
var vec__41116 = first__41115;
var seq__41117 = cljs.core.seq.call(null,vec__41116);
var first__41118 = cljs.core.first.call(null,seq__41117);
var seq__41117__$1 = cljs.core.next.call(null,seq__41117);
var this$ = first__41118;
var args = seq__41117__$1;
var sig = vec__41116;
var body = seq__41114__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__28057__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__41119){
var vec__41120 = p__41119;
var seq__41121 = cljs.core.seq.call(null,vec__41120);
var first__41122 = cljs.core.first.call(null,seq__41121);
var seq__41121__$1 = cljs.core.next.call(null,seq__41121);
var vec__41123 = first__41122;
var seq__41124 = cljs.core.seq.call(null,vec__41123);
var first__41125 = cljs.core.first.call(null,seq__41124);
var seq__41124__$1 = cljs.core.next.call(null,seq__41124);
var this$ = first__41125;
var args = seq__41124__$1;
var sig = vec__41123;
var body = seq__41121__$1;
var this_SINGLEQUOTE_ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,this_SINGLEQUOTE_,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__28057__auto__ = this_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__41127){
var vec__41128 = p__41127;
var seq__41129 = cljs.core.seq.call(null,vec__41128);
var first__41130 = cljs.core.first.call(null,seq__41129);
var seq__41129__$1 = cljs.core.next.call(null,seq__41129);
var f = first__41130;
var meths = seq__41129__$1;
var form = vec__41128;
var vec__41131 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__41131,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__41131,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28057__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__41131,f__$1,meths__$1,vec__41128,seq__41129,first__41130,seq__41129__$1,f,meths,form){
return (function (p1__41126_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__41126_SHARP_);
});})(vec__41131,f__$1,meths__$1,vec__41128,seq__41129,first__41130,seq__41129__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__41135){
var vec__41136 = p__41135;
var seq__41137 = cljs.core.seq.call(null,vec__41136);
var first__41138 = cljs.core.first.call(null,seq__41137);
var seq__41137__$1 = cljs.core.next.call(null,seq__41137);
var f = first__41138;
var meths = seq__41137__$1;
var form = vec__41136;
return cljs.core.map.call(null,((function (vec__41136,seq__41137,first__41138,seq__41137__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28057__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});})(vec__41136,seq__41137,first__41138,seq__41137__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__41136,seq__41137,first__41138,seq__41137__$1,f,meths,form){
return (function (p1__41134_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__41134_SHARP_);
});})(vec__41136,seq__41137,first__41138,seq__41137__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__41140){
var vec__41141 = p__41140;
var seq__41142 = cljs.core.seq.call(null,vec__41141);
var first__41143 = cljs.core.first.call(null,seq__41142);
var seq__41142__$1 = cljs.core.next.call(null,seq__41142);
var f = first__41143;
var meths = seq__41142__$1;
var form = vec__41141;
var meths__$1 = cljs.core.map.call(null,((function (vec__41141,seq__41142,first__41143,seq__41142__$1,f,meths,form){
return (function (p1__41139_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__41139_SHARP_);
});})(vec__41141,seq__41142,first__41143,seq__41142__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28057__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28057__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__28057__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__28057__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__28057__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__28057__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__41144){
var vec__41145 = p__41144;
var seq__41146 = cljs.core.seq.call(null,vec__41145);
var first__41147 = cljs.core.first.call(null,seq__41146);
var seq__41146__$1 = cljs.core.next.call(null,seq__41146);
var f = first__41147;
var meths = seq__41146__$1;
var form = vec__41145;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28057__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__41145,seq__41146,first__41147,seq__41146__$1,f,meths,form){
return (function (p__41148){
var vec__41149 = p__41148;
var seq__41150 = cljs.core.seq.call(null,vec__41149);
var first__41151 = cljs.core.first.call(null,seq__41150);
var seq__41150__$1 = cljs.core.next.call(null,seq__41150);
var sig = first__41151;
var body = seq__41150__$1;
var meth = vec__41149;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28057__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});})(pf,vec__41145,seq__41146,first__41147,seq__41146__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__41152){
var vec__41153 = p__41152;
var p = cljs.core.nth.call(null,vec__41153,(0),null);
var sigs = cljs.core.nth.call(null,vec__41153,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28057__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__41153,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__41153,p,sigs))
,sigs));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
var minfo = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first.call(null,method);
var __GT_name = cljs.core.comp.call(null,cljs.core.symbol,cljs.core.name);
var vec__41156 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__41156,(0),null);
var sigs = cljs.core.nth.call(null,vec__41156,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_41159 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_41159))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),method_name,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,sigs__$1)){
var sig = cljs.core.first.call(null,sigs__$1);
var c = cljs.core.count.call(null,sig);
if(cljs.core.contains_QMARK_.call(null,seen,c)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname], null));
} else {
}

if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"name","name",1843675177),fname], null));
} else {
}

if((cljs.core.not_EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c]),cljs.core.map.call(null,cljs.core.count,decmeths))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__41160 = cljs.core.next.call(null,sigs__$1);
var G__41161 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__41160;
seen = G__41161;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq.call(null,impls__$1)){
var proto = cljs.core.first.call(null,impls__$1);
var methods$ = cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
var impls__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
if(cljs.core.contains_QMARK_.call(null,protos,proto)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto], null));
} else {
}

var seen_41165 = cljs.core.PersistentHashSet.EMPTY;
var methods_41166__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_41166__$1)){
var vec__41162_41167 = cljs.core.first.call(null,methods_41166__$1);
var fname_41168 = cljs.core.nth.call(null,vec__41162_41167,(0),null);
var method_41169 = vec__41162_41167;
if(cljs.core.contains_QMARK_.call(null,seen_41165,fname_41168)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_41168], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_41169);

var G__41170 = cljs.core.conj.call(null,seen_41165,fname_41168);
var G__41171 = cljs.core.next.call(null,methods_41166__$1);
seen_41165 = G__41170;
methods_41166__$1 = G__41171;
continue;
} else {
}
break;
}

var G__41172 = cljs.core.conj.call(null,protos,proto);
var G__41173 = impls__$2;
protos = G__41172;
impls__$1 = G__41173;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.call(null,argv,(0),cljs.core.vary_meta.call(null,argv.call(null,(0)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sig),cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.second.call(null,sig)),cljs.core.nnext.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.first.call(null,sig)),cljs.core.next.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sigs),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest.call(null,sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,sig))){
return cljs.core$macros.type_hint_single_arity_sig.call(null,type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs.call(null,type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv.call(null,(function (m,proto,sigs){
return cljs.core.assoc.call(null,m,proto,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
var ret__28404__auto___41182 = (function (){
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y] ...) ...)
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41183 = arguments.length;
var i__28365__auto___41184 = (0);
while(true){
if((i__28365__auto___41184 < len__28364__auto___41183)){
args__28371__auto__.push((arguments[i__28365__auto___41184]));

var G__41185 = (i__28365__auto___41184 + (1));
i__28365__auto___41184 = G__41185;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__41179 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__41179,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__41179,(1),null);
if(cljs.core.truth_((function (){var and__27183__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__27183__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__41179,type,assign_impls){
return (function (p1__41174_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__41174_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__41179,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq41175){
var G__41176 = cljs.core.first.call(null,seq41175);
var seq41175__$1 = cljs.core.next.call(null,seq41175);
var G__41177 = cljs.core.first.call(null,seq41175__$1);
var seq41175__$2 = cljs.core.next.call(null,seq41175__$1);
var G__41178 = cljs.core.first.call(null,seq41175__$2);
var seq41175__$3 = cljs.core.next.call(null,seq41175__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__41176,G__41177,G__41178,seq41175__$3);
});

return null;
})()
;
cljs.core$macros.extend_type.cljs$lang$macro = true;

cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var fpp_pbs = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core$macros.fast_path_protocols,cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
var parts = (function (){var parts = cljs.core.group_by.call(null,cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.call(null,((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.call(null,ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.call(null,cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.call(null,cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__41187){
var vec__41188 = p__41187;
var f = cljs.core.nth.call(null,vec__41188,(0),null);
var sigs = cljs.core.nth.call(null,vec__41188,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__41188,f,sigs){
return (function (p1__41186_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__41186_SHARP_),cljs.core.nnext.call(null,p1__41186_SHARP_));
});})(vec__41188,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var G__41192 = arguments.length;
switch (G__41192) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.call(null,type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742),type,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),true,new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq.call(null,specs__$1)){
var p = cljs.core.first.call(null,specs__$1);
var ret__$1 = cljs.core.into.call(null,cljs.core.conj.call(null,ret,p),cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by.call(null,cljs.core.first,cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1)))));
var specs__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1));
var G__41194 = ret__$1;
var G__41195 = specs__$2;
ret = G__41194;
specs__$1 = G__41195;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__41196_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__41196_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__28057__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__28057__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_.call(null,fields)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(case$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),", no fields vector given."].join('')));
}
});
var ret__28404__auto___41208 = (function (){
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41209 = arguments.length;
var i__28365__auto___41210 = (0);
while(true){
if((i__28365__auto___41210 < len__28364__auto___41209)){
args__28371__auto__.push((arguments[i__28365__auto___41210]));

var G__41211 = (i__28365__auto___41210 + (1));
i__28365__auto___41210 = G__41211;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((4) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28372__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__41205 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__41205,(0),null);
var pmasks = cljs.core.nth.call(null,vec__41205,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__28057__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__28057__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__28057__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__28057__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__28057__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__28057__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41197__auto__","this__41197__auto__",1040557644,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__41198__auto__","writer__41198__auto__",1274688213,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__41199__auto__","opt__41199__auto__",-1129243843,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__41198__auto__","writer__41198__auto__",1274688213,null)),(function (){var x__28057__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq41200){
var G__41201 = cljs.core.first.call(null,seq41200);
var seq41200__$1 = cljs.core.next.call(null,seq41200);
var G__41202 = cljs.core.first.call(null,seq41200__$1);
var seq41200__$2 = cljs.core.next.call(null,seq41200__$1);
var G__41203 = cljs.core.first.call(null,seq41200__$2);
var seq41200__$3 = cljs.core.next.call(null,seq41200__$2);
var G__41204 = cljs.core.first.call(null,seq41200__$3);
var seq41200__$4 = cljs.core.next.call(null,seq41200__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__41201,G__41202,G__41203,G__41204,seq41200__$4);
});

return null;
})()
;
cljs.core$macros.deftype.cljs$lang$macro = true;

/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__41212_SHARP_){
return cljs.core.with_meta.call(null,p1__41212_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,rname)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,rname)),"{"].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41213__auto__","this__41213__auto__",1722817826,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__28057__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41214__auto__","this__41214__auto__",-319650817,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41214__auto__","this__41214__auto__",-319650817,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"coll__41215__auto__","coll__41215__auto__",896304600,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__28057__auto__ = cljs.core.hash.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,rname))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-unordered-coll","cljs.core/hash-unordered-coll",-639086053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"coll__41215__auto__","coll__41215__auto__",896304600,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),(function (){var this$ = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"this","this",1028897902,null));
var other = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"other","other",-1658642225,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","some?","cljs.core$macros/some?",-253244523,null)),(function (){var x__28057__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),(function (){var x__28057__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),(function (){var x__28057__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core.map.call(null,((function (this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (field){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__28057__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core$macros.to_property.call(null,field);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__28057__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core$macros.to_property.call(null,field);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});})(this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null)),(function (){var x__28057__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null)),(function (){var x__28057__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
})(),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41216__auto__","this__41216__auto__",-2030284329,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41217__auto__","this__41217__auto__",484816104,null)),(function (){var x__28057__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__28057__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41218__auto__","this__41218__auto__",1131832589,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__41219__auto__","k__41219__auto__",-716691917,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41218__auto__","this__41218__auto__",1131832589,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__41219__auto__","k__41219__auto__",-716691917,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41220__auto__","this__41220__auto__",417374521,null)),(function (){var x__28057__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__41221__auto__","else__41221__auto__",-1350217392,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__28057__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__28057__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__41221__auto__","else__41221__auto__",-1350217392,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41222__auto__","this__41222__auto__",-1711313496,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__28057__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41223__auto__","this__41223__auto__",1282177651,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__41224__auto__","entry__41224__auto__",-1078016187,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__41224__auto__","entry__41224__auto__",-1078016187,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41223__auto__","this__41223__auto__",1282177651,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__41224__auto__","entry__41224__auto__",-1078016187,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__41224__auto__","entry__41224__auto__",-1078016187,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41223__auto__","this__41223__auto__",1282177651,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__41224__auto__","entry__41224__auto__",-1078016187,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41225__auto__","this__41225__auto__",1378086889,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__41226__auto__","k__41226__auto__",1225959511,null)),(function (){var x__28057__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__41226__auto__","k__41226__auto__",1225959511,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null]),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__28057__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__41226__auto__","k__41226__auto__",1225959511,null)),(function (){var x__28057__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41227__auto__","this__41227__auto__",1936834087,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__41228__auto__","k__41228__auto__",-1247046297,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__28057__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__41228__auto__","k__41228__auto__",-1247046297,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-with-meta","cljs.core/-with-meta",-146937782,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__28057__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41227__auto__","this__41227__auto__",1936834087,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__41228__auto__","k__41228__auto__",-1247046297,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__28057__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__41228__auto__","k__41228__auto__",-1247046297,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41230__auto__","this__41230__auto__",-82169169,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__41229_SHARP_){
return cljs.core._conj.call(null,(function (){var x__28057__auto__ = cljs.core.keyword.call(null,p1__41229_SHARP_);
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = p1__41229_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__28057__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41232__auto__","this__41232__auto__",-563048721,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__41233__auto__","writer__41233__auto__",607952800,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__41234__auto__","opts__41234__auto__",83518363,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__41235__auto__","pr-pair__41235__auto__",1894216075,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__41236__auto__","keyval__41236__auto__",417730703,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__41233__auto__","writer__41233__auto__",607952800,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__41234__auto__","opts__41234__auto__",83518363,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__41236__auto__","keyval__41236__auto__",417730703,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__41233__auto__","writer__41233__auto__",607952800,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__41235__auto__","pr-pair__41235__auto__",1894216075,null)),(function (){var x__28057__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__41234__auto__","opts__41234__auto__",83518363,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__41231_SHARP_){
return cljs.core._conj.call(null,(function (){var x__28057__auto__ = cljs.core.keyword.call(null,p1__41231_SHARP_);
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = p1__41231_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())))], null));
var vec__41237 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__41237,(0),null);
var pmasks = cljs.core.nth.call(null,vec__41237,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__28057__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__28057__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__28057__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__28057__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__28057__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
var ret__28404__auto___41247 = (function (){
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41248 = arguments.length;
var i__28365__auto___41249 = (0);
while(true){
if((i__28365__auto___41249 < len__28364__auto___41248)){
args__28371__auto__.push((arguments[i__28365__auto___41249]));

var G__41250 = (i__28365__auto___41249 + (1));
i__28365__auto___41249 = G__41250;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((4) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28372__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__28057__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__28057__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__28057__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41240__auto__","this__41240__auto__",1760038938,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__28057__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__28057__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41240__auto__","this__41240__auto__",1760038938,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__41241__auto__","writer__41241__auto__",1212584847,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__41241__auto__","writer__41241__auto__",1212584847,null)),(function (){var x__28057__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq41242){
var G__41243 = cljs.core.first.call(null,seq41242);
var seq41242__$1 = cljs.core.next.call(null,seq41242);
var G__41244 = cljs.core.first.call(null,seq41242__$1);
var seq41242__$2 = cljs.core.next.call(null,seq41242__$1);
var G__41245 = cljs.core.first.call(null,seq41242__$2);
var seq41242__$3 = cljs.core.next.call(null,seq41242__$2);
var G__41246 = cljs.core.first.call(null,seq41242__$3);
var seq41242__$4 = cljs.core.next.call(null,seq41242__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__41243,G__41244,G__41245,G__41246,seq41242__$4);
});

return null;
})()
;
cljs.core$macros.defrecord.cljs$lang$macro = true;

var ret__28404__auto___41278 = (function (){
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41279 = arguments.length;
var i__28365__auto___41280 = (0);
while(true){
if((i__28365__auto___41280 < len__28364__auto___41279)){
args__28371__auto__.push((arguments[i__28365__auto___41280]));

var G__41281 = (i__28365__auto___41280 + (1));
i__28365__auto___41280 = G__41281;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__41257 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__41257,(0),null);
var methods$ = cljs.core.nth.call(null,vec__41257,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__41257,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});})(p,vec__41257,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__41260 = cljs.core.seq.call(null,methods$);
var chunk__41261 = null;
var count__41262 = (0);
var i__41263 = (0);
while(true){
if((i__41263 < count__41262)){
var vec__41264 = cljs.core._nth.call(null,chunk__41261,i__41263);
var seq__41265 = cljs.core.seq.call(null,vec__41264);
var first__41266 = cljs.core.first.call(null,seq__41265);
var seq__41265__$1 = cljs.core.next.call(null,seq__41265);
var mname = first__41266;
var arities = seq__41265__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__41282 = seq__41260;
var G__41283 = chunk__41261;
var G__41284 = count__41262;
var G__41285 = (i__41263 + (1));
seq__41260 = G__41282;
chunk__41261 = G__41283;
count__41262 = G__41284;
i__41263 = G__41285;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41260);
if(temp__4657__auto__){
var seq__41260__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41260__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__41260__$1);
var G__41286 = cljs.core.chunk_rest.call(null,seq__41260__$1);
var G__41287 = c__28034__auto__;
var G__41288 = cljs.core.count.call(null,c__28034__auto__);
var G__41289 = (0);
seq__41260 = G__41286;
chunk__41261 = G__41287;
count__41262 = G__41288;
i__41263 = G__41289;
continue;
} else {
var vec__41267 = cljs.core.first.call(null,seq__41260__$1);
var seq__41268 = cljs.core.seq.call(null,vec__41267);
var first__41269 = cljs.core.first.call(null,seq__41268);
var seq__41268__$1 = cljs.core.next.call(null,seq__41268);
var mname = first__41269;
var arities = seq__41268__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__41290 = cljs.core.next.call(null,seq__41260__$1);
var G__41291 = null;
var G__41292 = (0);
var G__41293 = (0);
seq__41260 = G__41290;
chunk__41261 = G__41291;
count__41262 = G__41292;
i__41263 = G__41293;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__41257,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.call(null,((function (p,vec__41257,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (arg){
if((arg instanceof cljs.core.Symbol)){
return arg;
} else {
if((cljs.core.map_QMARK_.call(null,arg)) && (!((new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg) == null)))){
return new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return cljs.core.gensym.call(null);

}
}
});})(p,vec__41257,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = sig__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__28057__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41251__auto__","x__41251__auto__",-403208007,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__28057__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__28057__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__41252__auto__","m__41252__auto__",-1776500333,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__28057__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41251__auto__","x__41251__auto__",-403208007,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__41252__auto__","m__41252__auto__",-1776500333,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__41252__auto__","m__41252__auto__",-1776500333,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__41252__auto__","m__41252__auto__",-1776500333,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__28057__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__41252__auto__","m__41252__auto__",-1776500333,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__41252__auto__","m__41252__auto__",-1776500333,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__28057__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});})(p,vec__41257,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__41257,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__41270){
var vec__41271 = p__41270;
var seq__41272 = cljs.core.seq.call(null,vec__41271);
var first__41273 = cljs.core.first.call(null,seq__41272);
var seq__41272__$1 = cljs.core.next.call(null,seq__41272);
var fname = first__41273;
var sigs = seq__41272__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__41257,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__41257,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__41274){
var vec__41275 = p__41274;
var seq__41276 = cljs.core.seq.call(null,vec__41275);
var first__41277 = cljs.core.first.call(null,seq__41276);
var seq__41276__$1 = cljs.core.next.call(null,seq__41276);
var fname = first__41277;
var sigs = seq__41276__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.apply.call(null,cljs.core.concat,sigs__$1)))?cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),psym__$2,new cljs.core.Keyword(null,"name","name",1843675177),fname], null)):null);
var slot = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,fname))].join(''));
var fname__$1 = cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__28057__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__41275,seq__41276,first__41277,seq__41276__$1,fname,sigs,p,vec__41257,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__41275,seq__41276,first__41277,seq__41276__$1,fname,sigs,p,vec__41257,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__41257,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__28057__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq41253){
var G__41254 = cljs.core.first.call(null,seq41253);
var seq41253__$1 = cljs.core.next.call(null,seq41253);
var G__41255 = cljs.core.first.call(null,seq41253__$1);
var seq41253__$2 = cljs.core.next.call(null,seq41253__$1);
var G__41256 = cljs.core.first.call(null,seq41253__$2);
var seq41253__$3 = cljs.core.next.call(null,seq41253__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__41254,G__41255,G__41256,seq41253__$3);
});

return null;
})()
;
cljs.core$macros.defprotocol.cljs$lang$macro = true;

var ret__28404__auto___41297 = /**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__41294 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__41294,(0),null);
var bit = cljs.core.nth.call(null,vec__41294,(1),null);
var msym = cljs.core.symbol.call(null,["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__28057__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__28057__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});
cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;

var ret__28404__auto___41301 = /**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__41298 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__41298,(0),null);
var bit = cljs.core.nth.call(null,vec__41298,(1),null);
var msym = cljs.core.symbol.call(null,["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__28057__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__28057__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__28057__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__28057__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__28057__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__28057__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__28057__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
}
});
cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;

var ret__28404__auto___41305 = (function (){
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41306 = arguments.length;
var i__28365__auto___41307 = (0);
while(true){
if((i__28365__auto___41307 < len__28364__auto___41306)){
args__28371__auto__.push((arguments[i__28365__auto___41307]));

var G__41308 = (i__28365__auto___41307 + (1));
i__28365__auto___41307 = G__41308;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq41302){
var G__41303 = cljs.core.first.call(null,seq41302);
var seq41302__$1 = cljs.core.next.call(null,seq41302);
var G__41304 = cljs.core.first.call(null,seq41302__$1);
var seq41302__$2 = cljs.core.next.call(null,seq41302__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__41303,G__41304,seq41302__$2);
});

return null;
})()
;
cljs.core$macros.lazy_seq.cljs$lang$macro = true;

var ret__28404__auto___41312 = (function (){
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41313 = arguments.length;
var i__28365__auto___41314 = (0);
while(true){
if((i__28365__auto___41314 < len__28364__auto___41313)){
args__28371__auto__.push((arguments[i__28365__auto___41314]));

var G__41315 = (i__28365__auto___41314 + (1));
i__28365__auto___41314 = G__41315;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq41309){
var G__41310 = cljs.core.first.call(null,seq41309);
var seq41309__$1 = cljs.core.next.call(null,seq41309);
var G__41311 = cljs.core.first.call(null,seq41309__$1);
var seq41309__$2 = cljs.core.next.call(null,seq41309__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__41310,G__41311,seq41309__$2);
});

return null;
})()
;
cljs.core$macros.delay.cljs$lang$macro = true;

var ret__28404__auto___41324 = (function (){
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41325 = arguments.length;
var i__28365__auto___41326 = (0);
while(true){
if((i__28365__auto___41326 < len__28364__auto___41325)){
args__28371__auto__.push((arguments[i__28365__auto___41326]));

var G__41327 = (i__28365__auto___41326 + (1));
i__28365__auto___41326 = G__41327;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__41320){
var vec__41321 = p__41320;
var k = cljs.core.nth.call(null,vec__41321,(0),null);
var v = cljs.core.nth.call(null,vec__41321,(1),null);
return cljs.core._conj.call(null,(function (){var x__28057__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq41316){
var G__41317 = cljs.core.first.call(null,seq41316);
var seq41316__$1 = cljs.core.next.call(null,seq41316);
var G__41318 = cljs.core.first.call(null,seq41316__$1);
var seq41316__$2 = cljs.core.next.call(null,seq41316__$1);
var G__41319 = cljs.core.first.call(null,seq41316__$2);
var seq41316__$3 = cljs.core.next.call(null,seq41316__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__41317,G__41318,G__41319,seq41316__$3);
});

return null;
})()
;
cljs.core$macros.with_redefs.cljs$lang$macro = true;

var ret__28404__auto___41332 = (function (){
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41333 = arguments.length;
var i__28365__auto___41334 = (0);
while(true){
if((i__28365__auto___41334 < len__28364__auto___41333)){
args__28371__auto__.push((arguments[i__28365__auto___41334]));

var G__41335 = (i__28365__auto___41334 + (1));
i__28365__auto___41334 = G__41335;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__28057__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq41328){
var G__41329 = cljs.core.first.call(null,seq41328);
var seq41328__$1 = cljs.core.next.call(null,seq41328);
var G__41330 = cljs.core.first.call(null,seq41328__$1);
var seq41328__$2 = cljs.core.next.call(null,seq41328__$1);
var G__41331 = cljs.core.first.call(null,seq41328__$2);
var seq41328__$3 = cljs.core.next.call(null,seq41328__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__41329,G__41330,G__41331,seq41328__$3);
});

return null;
})()
;
cljs.core$macros.binding.cljs$lang$macro = true;

var ret__28404__auto___41348 = (function (){
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an
 *   IllegalArgumentException is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41349 = arguments.length;
var i__28365__auto___41350 = (0);
while(true){
if((i__28365__auto___41350 < len__28364__auto___41349)){
args__28371__auto__.push((arguments[i__28365__auto___41350]));

var G__41351 = (i__28365__auto___41350 + (1));
i__28365__auto___41350 = G__41351;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((4) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28372__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__41342 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__41345 = cljs.core.nth.call(null,vec__41342,(0),null);
var a = cljs.core.nth.call(null,vec__41345,(0),null);
var b = cljs.core.nth.call(null,vec__41345,(1),null);
var c = cljs.core.nth.call(null,vec__41345,(2),null);
var clause = vec__41345;
var more = cljs.core.nth.call(null,vec__41342,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__28057__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__41336__auto__","p__41336__auto__",2010610875,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__41336__auto__","p__41336__auto__",2010610875,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq41337){
var G__41338 = cljs.core.first.call(null,seq41337);
var seq41337__$1 = cljs.core.next.call(null,seq41337);
var G__41339 = cljs.core.first.call(null,seq41337__$1);
var seq41337__$2 = cljs.core.next.call(null,seq41337__$1);
var G__41340 = cljs.core.first.call(null,seq41337__$2);
var seq41337__$3 = cljs.core.next.call(null,seq41337__$2);
var G__41341 = cljs.core.first.call(null,seq41337__$3);
var seq41337__$4 = cljs.core.next.call(null,seq41337__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__41338,G__41339,G__41340,G__41341,seq41337__$4);
});

return null;
})()
;
cljs.core$macros.condp.cljs$lang$macro = true;

cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_.call(null,m,test)){
throw (new Error(["Duplicate case test constant '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[" on line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.call(null,m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__27183__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__27183__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__27183__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.call(null,m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
var ret__28404__auto___41372 = (function (){
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41373 = arguments.length;
var i__28365__auto___41374 = (0);
while(true){
if((i__28365__auto___41374 < len__28364__auto___41373)){
args__28371__auto__.push((arguments[i__28365__auto___41374]));

var G__41375 = (i__28365__auto___41374 + (1));
i__28365__auto___41374 = G__41375;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var esym = cljs.core.gensym.call(null);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__28057__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (esym,default$,env){
return (function (m,p__41360){
var vec__41361 = p__41360;
var test = cljs.core.nth.call(null,vec__41361,(0),null);
var expr = cljs.core.nth.call(null,vec__41361,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__41361,test,expr,esym,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__28057__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__41361,test,expr,esym,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__28057__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),expr,env);
} else {
return cljs.core$macros.assoc_test.call(null,m,test,expr,env);

}
}
});})(esym,default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),clauses));
var tests = cljs.core.keys.call(null,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.call(null,cljs.core.char_QMARK_,new cljs.core.Keyword(null,"nonchar","nonchar",-421759703)),((function (esym,default$,env,pairs,tests){
return (function (p1__41352_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__41352_SHARP_);
});})(esym,default$,env,pairs,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__41353_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__41353_SHARP_)){
return cljs.core.vec.call(null,p1__41353_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41353_SHARP_], null);
}
});})(no_default,esym,default$,env,pairs,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__28057__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var kw_str = ((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__41354_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41354_SHARP_)].join('').substring((1));
});})(no_default,esym,default$,env,pairs,tests))
;
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,kw_str,esym,default$,env,pairs,tests){
return (function (p1__41355_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__41355_SHARP_)){
return cljs.core.mapv.call(null,kw_str,p1__41355_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw_str.call(null,p1__41355_SHARP_)], null);
}
});})(no_default,kw_str,esym,default$,env,pairs,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__28057__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__28057__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__28057__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (esym,default$,env,pairs,tests){
return (function (p__41368){
var vec__41369 = p__41368;
var m = cljs.core.nth.call(null,vec__41369,(0),null);
var c = cljs.core.nth.call(null,vec__41369,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__28057__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});})(esym,default$,env,pairs,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__28057__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq41356){
var G__41357 = cljs.core.first.call(null,seq41356);
var seq41356__$1 = cljs.core.next.call(null,seq41356);
var G__41358 = cljs.core.first.call(null,seq41356__$1);
var seq41356__$2 = cljs.core.next.call(null,seq41356__$1);
var G__41359 = cljs.core.first.call(null,seq41356__$2);
var seq41356__$3 = cljs.core.next.call(null,seq41356__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__41357,G__41358,G__41359,seq41356__$3);
});

return null;
})()
;
cljs.core$macros.case$.cljs$lang$macro = true;

var ret__28404__auto___41376 = cljs.core$macros.when_assert = (function cljs$core$macros$when_assert(_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return x;
} else {
return null;
}
});
cljs.core$macros.when_assert.cljs$lang$macro = true;

var ret__28404__auto___41379 = (function (){
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var G__41378 = arguments.length;
switch (G__41378) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__28057__auto__ = ["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__28057__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__28057__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;

return null;
})()
;
cljs.core$macros.assert.cljs$lang$macro = true;

var ret__28404__auto___41417 = /**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"for requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"for requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.call(null,(function (groups,p__41386){
var vec__41387 = p__41386;
var k = cljs.core.nth.call(null,vec__41387,(0),null);
var v = cljs.core.nth.call(null,vec__41387,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__41418__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__41418 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__41419__i = 0, G__41419__a = new Array(arguments.length -  0);
while (G__41419__i < G__41419__a.length) {G__41419__a[G__41419__i] = arguments[G__41419__i + 0]; ++G__41419__i;}
  msg = new cljs.core.IndexedSeq(G__41419__a,0,null);
} 
return G__41418__delegate.call(this,msg);};
G__41418.cljs$lang$maxFixedArity = 0;
G__41418.cljs$lang$applyTo = (function (arglist__41420){
var msg = cljs.core.seq(arglist__41420);
return G__41418__delegate(msg);
});
G__41418.cljs$core$IFn$_invoke$arity$variadic = G__41418__delegate;
return G__41418;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__41390){
var vec__41391 = p__41390;
var seq__41392 = cljs.core.seq.call(null,vec__41391);
var first__41393 = cljs.core.first.call(null,seq__41392);
var seq__41392__$1 = cljs.core.next.call(null,seq__41392);
var vec__41394 = first__41393;
var seq__41395 = cljs.core.seq.call(null,vec__41394);
var first__41396 = cljs.core.first.call(null,seq__41395);
var seq__41395__$1 = cljs.core.next.call(null,seq__41395);
var bind = first__41396;
var first__41396__$1 = cljs.core.first.call(null,seq__41395__$1);
var seq__41395__$2 = cljs.core.next.call(null,seq__41395__$1);
var expr = first__41396__$1;
var mod_pairs = seq__41395__$2;
var vec__41397 = seq__41392__$1;
var vec__41400 = cljs.core.nth.call(null,vec__41397,(0),null);
var _ = cljs.core.nth.call(null,vec__41400,(0),null);
var next_expr = cljs.core.nth.call(null,vec__41400,(1),null);
var next_groups = vec__41397;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__41391,seq__41392,first__41393,seq__41392__$1,vec__41394,seq__41395,first__41396,seq__41395__$1,bind,first__41396__$1,seq__41395__$2,expr,mod_pairs,vec__41397,vec__41400,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__41403){
var vec__41404 = p__41403;
var seq__41405 = cljs.core.seq.call(null,vec__41404);
var first__41406 = cljs.core.first.call(null,seq__41405);
var seq__41405__$1 = cljs.core.next.call(null,seq__41405);
var vec__41407 = first__41406;
var k = cljs.core.nth.call(null,vec__41407,(0),null);
var v = cljs.core.nth.call(null,vec__41407,(1),null);
var pair = vec__41407;
var etc = seq__41405__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__28057__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__28057__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__41381__auto__","iterys__41381__auto__",-1129151203,null)),(function (){var x__28057__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__41382__auto__","fs__41382__auto__",995747515,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__41381__auto__","iterys__41381__auto__",-1129151203,null)),(function (){var x__28057__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__41382__auto__","fs__41382__auto__",995747515,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__41382__auto__","fs__41382__auto__",995747515,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__28057__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__28057__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__28057__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__28057__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__41391,seq__41392,first__41393,seq__41392__$1,vec__41394,seq__41395,first__41396,seq__41395__$1,bind,first__41396__$1,seq__41395__$2,expr,mod_pairs,vec__41397,vec__41400,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__41391,seq__41392,first__41393,seq__41392__$1,vec__41394,seq__41395,first__41396,seq__41395__$1,bind,first__41396__$1,seq__41395__$2,expr,mod_pairs,vec__41397,vec__41400,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__41410){
var vec__41411 = p__41410;
var seq__41412 = cljs.core.seq.call(null,vec__41411);
var first__41413 = cljs.core.first.call(null,seq__41412);
var seq__41412__$1 = cljs.core.next.call(null,seq__41412);
var vec__41414 = first__41413;
var k = cljs.core.nth.call(null,vec__41414,(0),null);
var v = cljs.core.nth.call(null,vec__41414,(1),null);
var pair = vec__41414;
var etc = seq__41412__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__28057__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__28057__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__28057__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__28057__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__41391,seq__41392,first__41393,seq__41392__$1,vec__41394,seq__41395,first__41396,seq__41395__$1,bind,first__41396__$1,seq__41395__$2,expr,mod_pairs,vec__41397,vec__41400,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__28057__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__28057__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__41383__auto__","c__41383__auto__",-93886596,null)),(function (){var x__28057__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__28057__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/jenkins/workspace/orcl_master-BWHZEOIMVRLLYGQYEFB6RSZ6C6P6745JA24OSQTEWBYF6Z3JNJXQ/demo/resources/public/js/compiled/min/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2383),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2383),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__41384__auto__","size__41384__auto__",-867961574,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__41383__auto__","c__41383__auto__",-93886596,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__41384__auto__","size__41384__auto__",-867961574,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__28057__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__41384__auto__","size__41384__auto__",-867961574,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__41383__auto__","c__41383__auto__",-93886596,null)),(function (){var x__28057__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__28057__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__28057__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__28057__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__28057__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__41385__auto__","iter__41385__auto__",-1473943386,null)),(function (){var x__28057__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__41385__auto__","iter__41385__auto__",-1473943386,null)),(function (){var x__28057__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.for$.cljs$lang$macro = true;

var ret__28404__auto___41426 = (function (){
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41427 = arguments.length;
var i__28365__auto___41428 = (0);
while(true){
if((i__28365__auto___41428 < len__28364__auto___41427)){
args__28371__auto__.push((arguments[i__28365__auto___41428]));

var G__41429 = (i__28365__auto___41428 + (1));
i__28365__auto___41428 = G__41429;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"doseq requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"doseq requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var err = (function() { 
var G__41430__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__41430 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__41431__i = 0, G__41431__a = new Array(arguments.length -  0);
while (G__41431__i < G__41431__a.length) {G__41431__a[G__41431__i] = arguments[G__41431__i + 0]; ++G__41431__i;}
  msg = new cljs.core.IndexedSeq(G__41431__a,0,null);
} 
return G__41430__delegate.call(this,msg);};
G__41430.cljs$lang$maxFixedArity = 0;
G__41430.cljs$lang$applyTo = (function (arglist__41432){
var msg = cljs.core.seq(arglist__41432);
return G__41430__delegate(msg);
});
G__41430.cljs$core$IFn$_invoke$arity$variadic = G__41430__delegate;
return G__41430;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not.call(null,exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)))], null);
} else {
var k = cljs.core.first.call(null,exprs);
var v = cljs.core.second.call(null,exprs);
var seqsym = cljs.core.gensym.call(null,"seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__28057__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__28057__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28057__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28057__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__28057__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__28057__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__28057__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__28057__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__28057__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__28057__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__28057__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__28057__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__41421__auto__","c__41421__auto__",-1748489916,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__28057__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__28057__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__41421__auto__","c__41421__auto__",-1748489916,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__41421__auto__","c__41421__auto__",-1748489916,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__28057__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.call(null,step.call(null,null,cljs.core.seq.call(null,seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq41422){
var G__41423 = cljs.core.first.call(null,seq41422);
var seq41422__$1 = cljs.core.next.call(null,seq41422);
var G__41424 = cljs.core.first.call(null,seq41422__$1);
var seq41422__$2 = cljs.core.next.call(null,seq41422__$1);
var G__41425 = cljs.core.first.call(null,seq41422__$2);
var seq41422__$3 = cljs.core.next.call(null,seq41422__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__41423,G__41424,G__41425,seq41422__$3);
});

return null;
})()
;
cljs.core$macros.doseq.cljs$lang$macro = true;

var ret__28404__auto___41436 = (function (){
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41437 = arguments.length;
var i__28365__auto___41438 = (0);
while(true){
if((i__28365__auto___41438 < len__28364__auto___41437)){
args__28371__auto__.push((arguments[i__28365__auto___41438]));

var G__41439 = (i__28365__auto___41438 + (1));
i__28365__auto___41438 = G__41439;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs_str),"]"].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq41433){
var G__41434 = cljs.core.first.call(null,seq41433);
var seq41433__$1 = cljs.core.next.call(null,seq41433);
var G__41435 = cljs.core.first.call(null,seq41433__$1);
var seq41433__$2 = cljs.core.next.call(null,seq41433__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__41434,G__41435,seq41433__$2);
});

return null;
})()
;
cljs.core$macros.array.cljs$lang$macro = true;

var ret__28404__auto___41450 = (function (){
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var G__41449 = arguments.length;
switch (G__41449) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___41452 = arguments.length;
var i__28365__auto___41453 = (0);
while(true){
if((i__28365__auto___41453 < len__28364__auto___41452)){
args_arr__28383__auto__.push((arguments[i__28365__auto___41453]));

var G__41454 = (i__28365__auto___41453 + (1));
i__28365__auto___41453 = G__41454;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28384__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__28057__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__28057__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__41440__auto__","dims__41440__auto__",-183061078,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__41441__auto__","dimarray__41441__auto__",-1173595946,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__28057__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__41442__auto__","i__41442__auto__",1376453646,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__41441__auto__","dimarray__41441__auto__",-1173595946,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__41441__auto__","dimarray__41441__auto__",-1173595946,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__41442__auto__","i__41442__auto__",1376453646,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__41440__auto__","dims__41440__auto__",-183061078,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__41441__auto__","dimarray__41441__auto__",-1173595946,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq41444){
var G__41445 = cljs.core.first.call(null,seq41444);
var seq41444__$1 = cljs.core.next.call(null,seq41444);
var G__41446 = cljs.core.first.call(null,seq41444__$1);
var seq41444__$2 = cljs.core.next.call(null,seq41444__$1);
var G__41447 = cljs.core.first.call(null,seq41444__$2);
var seq41444__$3 = cljs.core.next.call(null,seq41444__$2);
var G__41448 = cljs.core.first.call(null,seq41444__$3);
var seq41444__$4 = cljs.core.next.call(null,seq41444__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__41445,G__41446,G__41447,G__41448,seq41444__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.make_array.cljs$lang$macro = true;

var ret__28404__auto___41463 = (function (){
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var G__41461 = arguments.length;
switch (G__41461) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___41465 = arguments.length;
var i__28365__auto___41466 = (0);
while(true){
if((i__28365__auto___41466 < len__28364__auto___41465)){
args_arr__28383__auto__.push((arguments[i__28365__auto___41466]));

var G__41467 = (i__28365__auto___41466 + (1));
i__28365__auto___41466 = G__41467;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28384__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1((function (){var _STAR_cljs_warnings_STAR_41462 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,x);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_41462;
}})()))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41455__auto__","x__41455__auto__",-1385137256,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41455__auto__","x__41455__auto__",-1385137256,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq41457){
var G__41458 = cljs.core.first.call(null,seq41457);
var seq41457__$1 = cljs.core.next.call(null,seq41457);
var G__41459 = cljs.core.first.call(null,seq41457__$1);
var seq41457__$2 = cljs.core.next.call(null,seq41457__$1);
var G__41460 = cljs.core.first.call(null,seq41457__$2);
var seq41457__$3 = cljs.core.next.call(null,seq41457__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__41458,G__41459,G__41460,seq41457__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.list.cljs$lang$macro = true;

var ret__28404__auto___41473 = (function (){
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var G__41472 = arguments.length;
switch (G__41472) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___41475 = arguments.length;
var i__28365__auto___41476 = (0);
while(true){
if((i__28365__auto___41476 < len__28364__auto___41475)){
args_arr__28383__auto__.push((arguments[i__28365__auto___41476]));

var G__41477 = (i__28365__auto___41476 + (1));
i__28365__auto___41476 = G__41477;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28384__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__28057__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq41469){
var G__41470 = cljs.core.first.call(null,seq41469);
var seq41469__$1 = cljs.core.next.call(null,seq41469);
var G__41471 = cljs.core.first.call(null,seq41469__$1);
var seq41469__$2 = cljs.core.next.call(null,seq41469__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__41470,G__41471,seq41469__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.vector.cljs$lang$macro = true;

var ret__28404__auto___41487 = (function (){
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var G__41484 = arguments.length;
switch (G__41484) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___41489 = arguments.length;
var i__28365__auto___41490 = (0);
while(true){
if((i__28365__auto___41490 < len__28364__auto___41489)){
args_arr__28383__auto__.push((arguments[i__28365__auto___41490]));

var G__41491 = (i__28365__auto___41490 + (1));
i__28365__auto___41490 = G__41491;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28384__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__41478_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__41478_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__41479_SHARP_){
var _STAR_cljs_warnings_STAR_41486 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__41479_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_41486;
}});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__28057__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq41481){
var G__41482 = cljs.core.first.call(null,seq41481);
var seq41481__$1 = cljs.core.next.call(null,seq41481);
var G__41483 = cljs.core.first.call(null,seq41481__$1);
var seq41481__$2 = cljs.core.next.call(null,seq41481__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__41482,G__41483,seq41481__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.array_map.cljs$lang$macro = true;

var ret__28404__auto___41497 = (function (){
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var G__41496 = arguments.length;
switch (G__41496) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___41499 = arguments.length;
var i__28365__auto___41500 = (0);
while(true){
if((i__28365__auto___41500 < len__28364__auto___41499)){
args_arr__28383__auto__.push((arguments[i__28365__auto___41500]));

var G__41501 = (i__28365__auto___41500 + (1));
i__28365__auto___41500 = G__41501;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28384__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq41493){
var G__41494 = cljs.core.first.call(null,seq41493);
var seq41493__$1 = cljs.core.next.call(null,seq41493);
var G__41495 = cljs.core.first.call(null,seq41493__$1);
var seq41493__$2 = cljs.core.next.call(null,seq41493__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__41494,G__41495,seq41493__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_map.cljs$lang$macro = true;

var ret__28404__auto___41511 = (function (){
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var G__41508 = arguments.length;
switch (G__41508) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___41513 = arguments.length;
var i__28365__auto___41514 = (0);
while(true){
if((i__28365__auto___41514 < len__28364__auto___41513)){
args_arr__28383__auto__.push((arguments[i__28365__auto___41514]));

var G__41515 = (i__28365__auto___41514 + (1));
i__28365__auto___41514 = G__41515;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28384__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__41502_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__41502_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__41503_SHARP_){
var _STAR_cljs_warnings_STAR_41510 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__41503_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_41510;
}}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__28057__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq41505){
var G__41506 = cljs.core.first.call(null,seq41505);
var seq41505__$1 = cljs.core.next.call(null,seq41505);
var G__41507 = cljs.core.first.call(null,seq41505__$1);
var seq41505__$2 = cljs.core.next.call(null,seq41505__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__41506,G__41507,seq41505__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_set.cljs$lang$macro = true;

cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvs_str),"}"].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
var ret__28404__auto___41531 = (function (){
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41532 = arguments.length;
var i__28365__auto___41533 = (0);
while(true){
if((i__28365__auto___41533 < len__28364__auto___41532)){
args__28371__auto__.push((arguments[i__28365__auto___41533]));

var G__41534 = (i__28365__auto___41533 + (1));
i__28365__auto___41533 = G__41534;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__41519){
var vec__41520 = p__41519;
var k = cljs.core.nth.call(null,vec__41520,(0),null);
var _ = cljs.core.nth.call(null,vec__41520,(1),null);
return f.call(null,k);
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),rest)));
var sym_pairs = filter_on_keys.call(null,cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,sym_or_str_QMARK_),cljs.core.keys.call(null,kvs)),cljs.core.repeatedly.call(null,cljs.core.gensym));
var obj = cljs.core.gensym.call(null,"obj");
if(cljs.core.empty_QMARK_.call(null,rest)){
return cljs.core$macros.js_obj_STAR_.call(null,cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__28057__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__41523){
var vec__41524 = p__41523;
var k = cljs.core.nth.call(null,vec__41524,(0),null);
var v = cljs.core.nth.call(null,vec__41524,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__28057__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__41527){
var vec__41528 = p__41527;
var k = cljs.core.nth.call(null,vec__41528,(0),null);
var v = cljs.core.nth.call(null,vec__41528,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__28057__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__28057__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq41516){
var G__41517 = cljs.core.first.call(null,seq41516);
var seq41516__$1 = cljs.core.next.call(null,seq41516);
var G__41518 = cljs.core.first.call(null,seq41516__$1);
var seq41516__$2 = cljs.core.next.call(null,seq41516__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__41517,G__41518,seq41516__$2);
});

return null;
})()
;
cljs.core$macros.js_obj.cljs$lang$macro = true;

var ret__28404__auto___41535 = cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),"~{}.length"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});
cljs.core$macros.alength.cljs$lang$macro = true;

var ret__28404__auto___41537 = /**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__41536__auto__","a__41536__auto__",-1278475703,null)),(function (){var x__28057__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__41536__auto__","a__41536__auto__",-1278475703,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__28057__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__41536__auto__","a__41536__auto__",-1278475703,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__28057__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__28057__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.amap.cljs$lang$macro = true;

var ret__28404__auto___41539 = /**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__41538__auto__","a__41538__auto__",663102933,null)),(function (){var x__28057__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__28057__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__28057__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__41538__auto__","a__41538__auto__",663102933,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__28057__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.areduce.cljs$lang$macro = true;

var ret__28404__auto___41545 = (function (){
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41546 = arguments.length;
var i__28365__auto___41547 = (0);
while(true){
if((i__28365__auto___41547 < len__28364__auto___41546)){
args__28371__auto__.push((arguments[i__28365__auto___41547]));

var G__41548 = (i__28365__auto___41547 + (1));
i__28365__auto___41547 = G__41548;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__41540__auto__","n__41540__auto__",1547438234,null)),(function (){var x__28057__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__28057__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__41540__auto__","n__41540__auto__",1547438234,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),body,(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__28057__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq41541){
var G__41542 = cljs.core.first.call(null,seq41541);
var seq41541__$1 = cljs.core.next.call(null,seq41541);
var G__41543 = cljs.core.first.call(null,seq41541__$1);
var seq41541__$2 = cljs.core.next.call(null,seq41541__$1);
var G__41544 = cljs.core.first.call(null,seq41541__$2);
var seq41541__$3 = cljs.core.next.call(null,seq41541__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__41542,G__41543,G__41544,seq41541__$3);
});

return null;
})()
;
cljs.core$macros.dotimes.cljs$lang$macro = true;

/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41552 = arguments.length;
var i__28365__auto___41553 = (0);
while(true){
if((i__28365__auto___41553 < len__28364__auto___41552)){
args__28371__auto__.push((arguments[i__28365__auto___41553]));

var G__41554 = (i__28365__auto___41553 + (1));
i__28365__auto___41553 = G__41554;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__41549_SHARP_){
return [", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41549_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq41550){
var G__41551 = cljs.core.first.call(null,seq41550);
var seq41550__$1 = cljs.core.next.call(null,seq41550);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__41551,seq41550__$1);
});

var ret__28404__auto___41564 = (function (){
/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41565 = arguments.length;
var i__28365__auto___41566 = (0);
while(true){
if((i__28365__auto___41566 < len__28364__auto___41565)){
args__28371__auto__.push((arguments[i__28365__auto___41566]));

var G__41567 = (i__28365__auto___41566 + (1));
i__28365__auto___41566 = G__41567;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.first.call(null,options):null);
var options__$1 = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.next.call(null,options):options);
var m = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.first.call(null,options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.next.call(null,options__$1):options__$1);
var dispatch_fn = cljs.core.first.call(null,options__$2);
var options__$3 = cljs.core.next.call(null,options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta.call(null,mm_name))?cljs.core.conj.call(null,cljs.core.meta.call(null,mm_name),m__$1):m__$1);
var mm_ns = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.call(null,cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
cljs.core$macros.check_valid_options.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341));

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__28057__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__41555__auto__","method-table__41555__auto__",-1728570893,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__28057__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__41556__auto__","prefer-table__41556__auto__",828179481,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__28057__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__41557__auto__","method-cache__41557__auto__",-1183425768,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__28057__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__41558__auto__","cached-hierarchy__41558__auto__",1488232878,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__28057__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__41559__auto__","hierarchy__41559__auto__",432673310,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__28057__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__28057__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__41559__auto__","hierarchy__41559__auto__",432673310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__41555__auto__","method-table__41555__auto__",-1728570893,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__41556__auto__","prefer-table__41556__auto__",828179481,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__41557__auto__","method-cache__41557__auto__",-1183425768,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__41558__auto__","cached-hierarchy__41558__auto__",1488232878,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq41560){
var G__41561 = cljs.core.first.call(null,seq41560);
var seq41560__$1 = cljs.core.next.call(null,seq41560);
var G__41562 = cljs.core.first.call(null,seq41560__$1);
var seq41560__$2 = cljs.core.next.call(null,seq41560__$1);
var G__41563 = cljs.core.first.call(null,seq41560__$2);
var seq41560__$3 = cljs.core.next.call(null,seq41560__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__41561,G__41562,G__41563,seq41560__$3);
});

return null;
})()
;
cljs.core$macros.defmulti.cljs$lang$macro = true;

var ret__28404__auto___41573 = (function (){
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41574 = arguments.length;
var i__28365__auto___41575 = (0);
while(true){
if((i__28365__auto___41575 < len__28364__auto___41574)){
args__28371__auto__.push((arguments[i__28365__auto___41575]));

var G__41576 = (i__28365__auto___41575 + (1));
i__28365__auto___41575 = G__41576;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((4) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28372__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__28057__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq41568){
var G__41569 = cljs.core.first.call(null,seq41568);
var seq41568__$1 = cljs.core.next.call(null,seq41568);
var G__41570 = cljs.core.first.call(null,seq41568__$1);
var seq41568__$2 = cljs.core.next.call(null,seq41568__$1);
var G__41571 = cljs.core.first.call(null,seq41568__$2);
var seq41568__$3 = cljs.core.next.call(null,seq41568__$2);
var G__41572 = cljs.core.first.call(null,seq41568__$3);
var seq41568__$4 = cljs.core.next.call(null,seq41568__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__41569,G__41570,G__41571,G__41572,seq41568__$4);
});

return null;
})()
;
cljs.core$macros.defmethod.cljs$lang$macro = true;

var ret__28404__auto___41579 = /**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__41577__auto__","start__41577__auto__",-1824353984,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__41578__auto__","ret__41578__auto__",945217931,null)),(function (){var x__28057__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__41577__auto__","start__41577__auto__",-1824353984,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__41578__auto__","ret__41578__auto__",945217931,null)))));
});
cljs.core$macros.time.cljs$lang$macro = true;

var ret__28404__auto___41594 = (function (){
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41595 = arguments.length;
var i__28365__auto___41596 = (0);
while(true){
if((i__28365__auto___41596 < len__28364__auto___41595)){
args__28371__auto__.push((arguments[i__28365__auto___41596]));

var G__41597 = (i__28365__auto___41596 + (1));
i__28365__auto___41596 = G__41597;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((5) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__28372__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__41591){
var map__41592 = p__41591;
var map__41592__$1 = ((((!((map__41592 == null)))?((((map__41592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41592):map__41592);
var print_fn = cljs.core.get.call(null,map__41592__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__41580__auto__","start__41580__auto__",-432933963,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__41581__auto__","ret__41581__auto__",1475025062,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___41582__auto__","___41582__auto__",-1988907778,null)),(function (){var x__28057__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__41583__auto__","end__41583__auto__",-1305465562,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__41584__auto__","elapsed__41584__auto__",1712357150,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__41583__auto__","end__41583__auto__",-1305465562,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__41580__auto__","start__41580__auto__",-432933963,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__28057__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__28057__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__28057__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__41584__auto__","elapsed__41584__auto__",1712357150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq41585){
var G__41586 = cljs.core.first.call(null,seq41585);
var seq41585__$1 = cljs.core.next.call(null,seq41585);
var G__41587 = cljs.core.first.call(null,seq41585__$1);
var seq41585__$2 = cljs.core.next.call(null,seq41585__$1);
var G__41588 = cljs.core.first.call(null,seq41585__$2);
var seq41585__$3 = cljs.core.next.call(null,seq41585__$2);
var G__41589 = cljs.core.first.call(null,seq41585__$3);
var seq41585__$4 = cljs.core.next.call(null,seq41585__$3);
var G__41590 = cljs.core.first.call(null,seq41585__$4);
var seq41585__$5 = cljs.core.next.call(null,seq41585__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__41586,G__41587,G__41588,G__41589,G__41590,seq41585__$5);
});

return null;
})()
;
cljs.core$macros.simple_benchmark.cljs$lang$macro = true;

cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var G__41599 = arguments.length;
switch (G__41599) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),(function (){var x__28057__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

var ret__28404__auto___41601 = cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.gen_apply_to.cljs$lang$macro = true;

cljs.core$macros.gen_apply_to_simple_helper = (function cljs$core$macros$gen_apply_to_simple_helper(f,num_args,args){
var new_arg_sym = cljs.core.symbol.call(null,["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var proto_name = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1((num_args + (1)))].join('');
var proto_prop = cljs.core.symbol.call(null,[".-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto_name)].join(''));
var proto_inv = cljs.core.symbol.call(null,[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto_name)].join(''));
var next_sym = cljs.core.symbol.call(null,["next_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var all_args = cljs.core.mapv.call(null,((function (new_arg_sym,proto_name,proto_prop,proto_inv,next_sym){
return (function (p1__41602_SHARP_){
return cljs.core.symbol.call(null,["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41602_SHARP_)].join(''));
});})(new_arg_sym,proto_name,proto_prop,proto_inv,next_sym))
,cljs.core.range.call(null,(num_args + (1))));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = new_arg_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),(function (){var x__28057__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__28057__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__28057__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = proto_prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = proto_inv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".call",".call",1496874263,null)),(function (){var x__28057__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = ((((19) <= num_args))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__41603__auto__","arr__41603__auto__",-1009417039,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null)),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__41604__auto__","s__41604__auto__",749306901,null)),(function (){var x__28057__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__41604__auto__","s__41604__auto__",749306901,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__41603__auto__","arr__41603__auto__",-1009417039,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__41604__auto__","s__41604__auto__",749306901,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__41604__auto__","s__41604__auto__",749306901,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__28057__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__41603__auto__","arr__41603__auto__",-1009417039,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))):cljs.core$macros.gen_apply_to_simple_helper.call(null,f,(num_args + (1)),next_sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
var ret__28404__auto___41605 = cljs.core$macros.gen_apply_to_simple = (function cljs$core$macros$gen_apply_to_simple(_AMPERSAND_form,_AMPERSAND_env,f,num_args,args){
return cljs.core$macros.gen_apply_to_simple_helper.call(null,f,num_args,args);
});
cljs.core$macros.gen_apply_to_simple.cljs$lang$macro = true;

var ret__28404__auto___41611 = (function (){
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41612 = arguments.length;
var i__28365__auto___41613 = (0);
while(true){
if((i__28365__auto___41613 < len__28364__auto___41612)){
args__28371__auto__.push((arguments[i__28365__auto___41613]));

var G__41614 = (i__28365__auto___41613 + (1));
i__28365__auto___41613 = G__41614;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__41606__auto__","sb__41606__auto__",1265689052,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41607__auto__","x__41607__auto__",1574443469,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__41606__auto__","sb__41606__auto__",1265689052,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__41607__auto__","x__41607__auto__",1574443469,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__41606__auto__","sb__41606__auto__",1265689052,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq41608){
var G__41609 = cljs.core.first.call(null,seq41608);
var seq41608__$1 = cljs.core.next.call(null,seq41608);
var G__41610 = cljs.core.first.call(null,seq41608__$1);
var seq41608__$2 = cljs.core.next.call(null,seq41608__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__41609,G__41610,seq41608__$2);
});

return null;
})()
;
cljs.core$macros.with_out_str.cljs$lang$macro = true;

var ret__28404__auto___41619 = (function (){
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41620 = arguments.length;
var i__28365__auto___41621 = (0);
while(true){
if((i__28365__auto___41621 < len__28364__auto___41620)){
args__28371__auto__.push((arguments[i__28365__auto___41621]));

var G__41622 = (i__28365__auto___41621 + (1));
i__28365__auto___41621 = G__41622;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__41615_SHARP_){
return cljs.core._conj.call(null,(function (){var x__28057__auto__ = p1__41615_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq41616){
var G__41617 = cljs.core.first.call(null,seq41616);
var seq41616__$1 = cljs.core.next.call(null,seq41616);
var G__41618 = cljs.core.first.call(null,seq41616__$1);
var seq41616__$2 = cljs.core.next.call(null,seq41616__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__41617,G__41618,seq41616__$2);
});

return null;
})()
;
cljs.core$macros.lazy_cat.cljs$lang$macro = true;

var ret__28404__auto___41623 = cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28057__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_str.cljs$lang$macro = true;

var ret__28404__auto___41625 = cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__28057__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41624__auto__","this__41624__auto__",-513865014,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__41624__auto__","this__41624__auto__",-513865014,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.es6_iterable.cljs$lang$macro = true;

var ret__28404__auto___41642 = /**
 * Returns a map of the public intern mappings for the namespace.
 */
cljs.core$macros.ns_publics = (function cljs$core$macros$ns_publics(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-publics must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__28057__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__41634){
var vec__41635 = p__41634;
var sym = cljs.core.nth.call(null,vec__41635,(0),null);
var _ = cljs.core.nth.call(null,vec__41635,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__28057__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__28057__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
});})(ns))
,cljs.core.filter.call(null,((function (ns){
return (function (p__41638){
var vec__41639 = p__41638;
var _ = cljs.core.nth.call(null,vec__41639,(0),null);
var info = cljs.core.nth.call(null,vec__41639,(1),null);
return cljs.core.not.call(null,new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(info)));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null))))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.ns_publics.cljs$lang$macro = true;

var ret__28404__auto___41651 = /**
 * Returns a map of the import mappings for the namespace.
 */
cljs.core$macros.ns_imports = (function cljs$core$macros$ns_imports(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-imports must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__28057__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__41647){
var vec__41648 = p__41647;
var ctor = cljs.core.nth.call(null,vec__41648,(0),null);
var qualified_ctor = cljs.core.nth.call(null,vec__41648,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__28057__auto__ = cljs.core.name.call(null,ctor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.symbol.call(null,qualified_ctor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"imports","imports",-1249933394)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.ns_imports.cljs$lang$macro = true;

var ret__28404__auto___41660 = /**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-interns must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__28057__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__41656){
var vec__41657 = p__41656;
var sym = cljs.core.nth.call(null,vec__41657,(0),null);
var _ = cljs.core.nth.call(null,vec__41657,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__28057__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__28057__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.ns_interns.cljs$lang$macro = true;

var ret__28404__auto___41661 = /**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,quoted_ns,quoted_sym){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol)) && (cljs.core.seq_QMARK_.call(null,quoted_sym)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_sym),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_sym) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Arguments to ns-unmap must be quoted symbols","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)) (seq? quoted-sym) (= (first quoted-sym) (quote quote)) (core/symbol? (second quoted-sym)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
var sym = cljs.core.second.call(null,quoted_sym);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__28057__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.ns_unmap.cljs$lang$macro = true;

var ret__28404__auto___41667 = (function (){
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41668 = arguments.length;
var i__28365__auto___41669 = (0);
while(true){
if((i__28365__auto___41669 < len__28364__auto___41668)){
args__28371__auto__.push((arguments[i__28365__auto___41669]));

var G__41670 = (i__28365__auto___41669 + (1));
i__28365__auto___41669 = G__41670;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((4) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28372__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__28057__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__28057__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq41662){
var G__41663 = cljs.core.first.call(null,seq41662);
var seq41662__$1 = cljs.core.next.call(null,seq41662);
var G__41664 = cljs.core.first.call(null,seq41662__$1);
var seq41662__$2 = cljs.core.next.call(null,seq41662__$1);
var G__41665 = cljs.core.first.call(null,seq41662__$2);
var seq41662__$3 = cljs.core.next.call(null,seq41662__$2);
var G__41666 = cljs.core.first.call(null,seq41662__$3);
var seq41662__$4 = cljs.core.next.call(null,seq41662__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41663,G__41664,G__41665,G__41666,seq41662__$4);
});

return null;
})()
;
cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;

var ret__28404__auto___41675 = (function (){
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41676 = arguments.length;
var i__28365__auto___41677 = (0);
while(true){
if((i__28365__auto___41677 < len__28364__auto___41676)){
args__28371__auto__.push((arguments[i__28365__auto___41677]));

var G__41678 = (i__28365__auto___41677 + (1));
i__28365__auto___41677 = G__41678;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq41671){
var G__41672 = cljs.core.first.call(null,seq41671);
var seq41671__$1 = cljs.core.next.call(null,seq41671);
var G__41673 = cljs.core.first.call(null,seq41671__$1);
var seq41671__$2 = cljs.core.next.call(null,seq41671__$1);
var G__41674 = cljs.core.first.call(null,seq41671__$2);
var seq41671__$3 = cljs.core.next.call(null,seq41671__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__41672,G__41673,G__41674,seq41671__$3);
});

return null;
})()
;
cljs.core$macros.locking.cljs$lang$macro = true;

var ret__28404__auto___41682 = (function (){
/**
 * Loads libs, skipping any that are already loaded. Each argument is
 *   either a libspec that identifies a lib or a flag that modifies how all the identified
 *   libs are loaded. Use :require in the ns macro in preference to calling this
 *   directly.
 * 
 *   Libs
 * 
 *   A 'lib' is a named set of resources in classpath whose contents define a
 *   library of ClojureScript code. Lib names are symbols and each lib is associated
 *   with a ClojureScript namespace. A lib's name also locates its root directory
 *   within classpath using Java's package name to classpath-relative path mapping.
 *   All resources in a lib should be contained in the directory structure under its
 *   root directory. All definitions a lib makes should be in its associated namespace.
 * 
 *   'require loads a lib by loading its root resource. The root resource path
 *   is derived from the lib name in the following manner:
 *   Consider a lib named by the symbol 'x.y.z; it has the root directory
 *   <classpath>/x/y/, and its root resource is <classpath>/x/y/z.clj. The root
 *   resource should contain code to create the lib's namespace (usually by using
 *   the ns macro) and load any additional lib resources.
 * 
 *   Libspecs
 * 
 *   A libspec is a lib name or a vector containing a lib name followed by
 *   options expressed as sequential keywords and arguments.
 * 
 *   Recognized options:
 *   :as takes a symbol as its argument and makes that symbol an alias to the
 *  lib's namespace in the current namespace.
 *   :refer takes a list of symbols to refer from the namespace.
 *   :refer-macros takes a list of macro symbols to refer from the namespace.
 *   :include-macros true causes macros from the namespace to be required.
 *   :rename specifies a map from referred var names to different
 *  symbols (and can be used to prevent clashes)
 * 
 * 
 *   Flags
 * 
 *   A flag is a keyword.
 *   Recognized flags: :reload, :reload-all, :verbose
 *   :reload forces loading of all the identified libs even if they are
 *  already loaded
 *   :reload-all implies :reload and also forces loading of all libs that the
 *  identified libs directly or indirectly load via require or use
 *   :verbose triggers printing information about each load, alias, and refer
 * 
 *   Example:
 * 
 *   The following would load the library clojure.string :as string.
 * 
 *   (require '[clojure.string :as string])
 */
cljs.core$macros.require = (function cljs$core$macros$require(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41683 = arguments.length;
var i__28365__auto___41684 = (0);
while(true){
if((i__28365__auto___41684 < len__28364__auto___41683)){
args__28371__auto__.push((arguments[i__28365__auto___41684]));

var G__41685 = (i__28365__auto___41684 + (1));
i__28365__auto___41684 = G__41685;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__28057__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require","require",-468001333),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq41679){
var G__41680 = cljs.core.first.call(null,seq41679);
var seq41679__$1 = cljs.core.next.call(null,seq41679);
var G__41681 = cljs.core.first.call(null,seq41679__$1);
var seq41679__$2 = cljs.core.next.call(null,seq41679__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__41680,G__41681,seq41679__$2);
});

return null;
})()
;
cljs.core$macros.require.cljs$lang$macro = true;

var ret__28404__auto___41689 = (function (){
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41690 = arguments.length;
var i__28365__auto___41691 = (0);
while(true){
if((i__28365__auto___41691 < len__28364__auto___41690)){
args__28371__auto__.push((arguments[i__28365__auto___41691]));

var G__41692 = (i__28365__auto___41691 + (1));
i__28365__auto___41691 = G__41692;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__28057__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq41686){
var G__41687 = cljs.core.first.call(null,seq41686);
var seq41686__$1 = cljs.core.next.call(null,seq41686);
var G__41688 = cljs.core.first.call(null,seq41686__$1);
var seq41686__$2 = cljs.core.next.call(null,seq41686__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__41687,G__41688,seq41686__$2);
});

return null;
})()
;
cljs.core$macros.require_macros.cljs$lang$macro = true;

var ret__28404__auto___41696 = (function (){
/**
 * Like require, but referring vars specified by the mandatory
 *   :only option.
 * 
 *   Example:
 * 
 *   The following would load the library clojure.set while referring
 *   the intersection var.
 * 
 *   (use '[clojure.set :only [intersection]])
 */
cljs.core$macros.use = (function cljs$core$macros$use(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41697 = arguments.length;
var i__28365__auto___41698 = (0);
while(true){
if((i__28365__auto___41698 < len__28364__auto___41697)){
args__28371__auto__.push((arguments[i__28365__auto___41698]));

var G__41699 = (i__28365__auto___41698 + (1));
i__28365__auto___41698 = G__41699;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__28057__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use","use",-1846382424),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq41693){
var G__41694 = cljs.core.first.call(null,seq41693);
var seq41693__$1 = cljs.core.next.call(null,seq41693);
var G__41695 = cljs.core.first.call(null,seq41693__$1);
var seq41693__$2 = cljs.core.next.call(null,seq41693__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__41694,G__41695,seq41693__$2);
});

return null;
})()
;
cljs.core$macros.use.cljs$lang$macro = true;

var ret__28404__auto___41703 = (function (){
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41704 = arguments.length;
var i__28365__auto___41705 = (0);
while(true){
if((i__28365__auto___41705 < len__28364__auto___41704)){
args__28371__auto__.push((arguments[i__28365__auto___41705]));

var G__41706 = (i__28365__auto___41705 + (1));
i__28365__auto___41705 = G__41706;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__28057__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq41700){
var G__41701 = cljs.core.first.call(null,seq41700);
var seq41700__$1 = cljs.core.next.call(null,seq41700);
var G__41702 = cljs.core.first.call(null,seq41700__$1);
var seq41700__$2 = cljs.core.next.call(null,seq41700__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__41701,G__41702,seq41700__$2);
});

return null;
})()
;
cljs.core$macros.use_macros.cljs$lang$macro = true;

var ret__28404__auto___41710 = (function (){
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41711 = arguments.length;
var i__28365__auto___41712 = (0);
while(true){
if((i__28365__auto___41712 < len__28364__auto___41711)){
args__28371__auto__.push((arguments[i__28365__auto___41712]));

var G__41713 = (i__28365__auto___41712 + (1));
i__28365__auto___41712 = G__41713;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__28057__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq41707){
var G__41708 = cljs.core.first.call(null,seq41707);
var seq41707__$1 = cljs.core.next.call(null,seq41707);
var G__41709 = cljs.core.first.call(null,seq41707__$1);
var seq41707__$2 = cljs.core.next.call(null,seq41707__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__41708,G__41709,seq41707__$2);
});

return null;
})()
;
cljs.core$macros.import$.cljs$lang$macro = true;

var ret__28404__auto___41717 = (function (){
/**
 * Refers to all the public vars of `cljs.core`, subject to
 *   filters.
 *   Filters can include at most one each of:
 * 
 *   :exclude list-of-symbols
 *   :rename map-of-fromsymbol-tosymbol
 * 
 *   Filters can be used to select a subset, via exclusion, or to provide a mapping
 *   to a symbol different from the var's name, in order to prevent clashes.
 */
cljs.core$macros.refer_clojure = (function cljs$core$macros$refer_clojure(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41718 = arguments.length;
var i__28365__auto___41719 = (0);
while(true){
if((i__28365__auto___41719 < len__28364__auto___41718)){
args__28371__auto__.push((arguments[i__28365__auto___41719]));

var G__41720 = (i__28365__auto___41719 + (1));
i__28365__auto___41719 = G__41720;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__28057__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq41714){
var G__41715 = cljs.core.first.call(null,seq41714);
var seq41714__$1 = cljs.core.next.call(null,seq41714);
var G__41716 = cljs.core.first.call(null,seq41714__$1);
var seq41714__$2 = cljs.core.next.call(null,seq41714__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__41715,G__41716,seq41714__$2);
});

return null;
})()
;
cljs.core$macros.refer_clojure.cljs$lang$macro = true;

var ret__28404__auto___41721 = cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__28057__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;

var ret__28404__auto___41722 = /**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand-1 must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second.call(null,quoted);
if(cljs.core.seq_QMARK_.call(null,form)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__28057__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
} else {
return form;
}
});
cljs.core$macros.macroexpand_1.cljs$lang$macro = true;

var ret__28404__auto___41723 = /**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second.call(null,quoted);
var env = _AMPERSAND_env;
if(cljs.core.seq_QMARK_.call(null,form)){
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1.call(null,env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__41724 = form_SINGLEQUOTE_;
var G__41725 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__41724;
form_SINGLEQUOTE_ = G__41725;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__28057__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
}
break;
}
} else {
return form;
}
});
cljs.core$macros.macroexpand.cljs$lang$macro = true;

cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count.call(null,fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__27183__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__27183__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__27183__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var G__41727 = arguments.length;
switch (G__41727) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__41728,solo){
var vec__41729 = p__41728;
var seq__41730 = cljs.core.seq.call(null,vec__41729);
var first__41731 = cljs.core.first.call(null,seq__41730);
var seq__41730__$1 = cljs.core.next.call(null,seq__41730);
var arglist = first__41731;
var body = seq__41730__$1;
var method = vec__41729;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__41729,seq__41730,first__41731,seq__41730__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__41729,seq__41730,first__41731,seq__41730__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__41729,seq__41730,first__41731,seq__41730__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__41729,seq__41730,first__41731,seq__41730__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__41729,seq__41730,first__41731,seq__41730__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/jenkins/workspace/orcl_master-BWHZEOIMVRLLYGQYEFB6RSZ6C6P6745JA24OSQTEWBYF6Z3JNJXQ/demo/resources/public/js/compiled/min/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2997),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2997),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/jenkins/workspace/orcl_master-BWHZEOIMVRLLYGQYEFB6RSZ6C6P6745JA24OSQTEWBYF6Z3JNJXQ/demo/resources/public/js/compiled/min/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2998),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2998),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
});})(sig,restarg,vec__41729,seq__41730,first__41731,seq__41730__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__41729,seq__41730,first__41731,seq__41730__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),params,(function (){var x__28057__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__28057__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
}
});})(sig,restarg,vec__41729,seq__41730,first__41731,seq__41730__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())))):null),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

var ret__28404__auto___41735 = cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__41733__auto__","len__41733__auto__",-1542760509,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__41734__auto__","i__41734__auto__",444841080,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__41734__auto__","i__41734__auto__",444841080,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__41733__auto__","len__41733__auto__",-1542760509,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__28057__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__41734__auto__","i__41734__auto__",444841080,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__41734__auto__","i__41734__auto__",444841080,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.copy_arguments.cljs$lang$macro = true;

cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__41738,emit_var_QMARK_){
var vec__41739 = p__41738;
var vec__41742 = cljs.core.nth.call(null,vec__41739,(0),null);
var seq__41743 = cljs.core.seq.call(null,vec__41742);
var first__41744 = cljs.core.first.call(null,seq__41743);
var seq__41743__$1 = cljs.core.next.call(null,seq__41743);
var arglist = first__41744;
var body = seq__41743__$1;
var method = vec__41742;
var fdecl = vec__41739;
var dest_args = ((function (vec__41739,vec__41742,seq__41743,first__41744,seq__41743__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__41739,vec__41742,seq__41743,first__41744,seq__41743__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});})(vec__41739,vec__41742,seq__41743,first__41744,seq__41743__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__41739,vec__41742,seq__41743,first__41744,seq__41743__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__28057__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__28057__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__41736__auto__","args__41736__auto__",1895707878,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__41736__auto__","args__41736__auto__",1895707878,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__41737__auto__","argseq__41737__auto__",1548761104,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__28057__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__41736__auto__","args__41736__auto__",1895707878,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__28057__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/jenkins/workspace/orcl_master-BWHZEOIMVRLLYGQYEFB6RSZ6C6P6745JA24OSQTEWBYF6Z3JNJXQ/demo/resources/public/js/compiled/min/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3045),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3045),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__41736__auto__","args__41736__auto__",1895707878,null)),(function (){var x__28057__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__41737__auto__","argseq__41737__auto__",1548761104,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__28057__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__41753){
var vec__41754 = p__41753;
var seq__41755 = cljs.core.seq.call(null,vec__41754);
var first__41756 = cljs.core.first.call(null,seq__41755);
var seq__41755__$1 = cljs.core.next.call(null,seq__41755);
var sig = first__41756;
var body = seq__41755__$1;
var method = vec__41754;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.symbol.call(null,["-cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__41745_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__41745_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
var param_counts = cljs.core.map.call(null,cljs.core.count,arglists);
if(cljs.core.not_EQ_.call(null,cljs.core.distinct.call(null,param_counts),param_counts)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__28057__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts){
return (function (p1__41746_SHARP_){
return fixed_arity.call(null,rname,p1__41746_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts))
,sigs),(function (){var x__28057__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__41747__auto__","args-arr__41747__auto__",1192496323,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__41747__auto__","args-arr__41747__auto__",1192496323,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__41748__auto__","argseq__41748__auto__",605506024,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__28057__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/jenkins/workspace/orcl_master-BWHZEOIMVRLLYGQYEFB6RSZ6C6P6745JA24OSQTEWBYF6Z3JNJXQ/demo/resources/public/js/compiled/min/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3106),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,59),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3106),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,79),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__41747__auto__","args-arr__41747__auto__",1192496323,null)),(function (){var x__28057__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__41748__auto__","argseq__41748__auto__",605506024,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__28057__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first.call(null,fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first.call(null,fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first.call(null,fdecl) === 'string')?cljs.core.next.call(null,fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.conj.call(null,m,cljs.core.first.call(null,fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.next.call(null,fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__28057__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj.call(null,(function (){var x__28057__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj.call(null,(function (){var x__28057__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__41757__i = 0, G__41757__a = new Array(arguments.length -  3);
while (G__41757__i < G__41757__a.length) {G__41757__a[G__41757__i] = arguments[G__41757__i + 3]; ++G__41757__i;}
  fdecl = new cljs.core.IndexedSeq(G__41757__a,0,null);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__41758){
var _AMPERSAND_form = cljs.core.first(arglist__41758);
arglist__41758 = cljs.core.next(arglist__41758);
var _AMPERSAND_env = cljs.core.first(arglist__41758);
arglist__41758 = cljs.core.next(arglist__41758);
var name = cljs.core.first(arglist__41758);
var fdecl = cljs.core.rest(arglist__41758);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__28371__auto__ = [];
var len__28364__auto___41764 = arguments.length;
var i__28365__auto___41765 = (0);
while(true){
if((i__28365__auto___41765 < len__28364__auto___41764)){
args__28371__auto__.push((arguments[i__28365__auto___41765]));

var G__41766 = (i__28365__auto___41765 + (1));
i__28365__auto___41765 = G__41766;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__28057__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__41767 = cljs.core.cons.call(null,f,p);
var G__41768 = cljs.core.next.call(null,args__$1);
p = G__41767;
args__$1 = G__41768;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__41769 = cljs.core.cons.call(null,f,p);
var G__41770 = cljs.core.next.call(null,args__$1);
p = G__41769;
args__$1 = G__41770;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first.call(null,fd) === 'string'){
var G__41771 = cljs.core.next.call(null,fd);
fd = G__41771;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__41772 = cljs.core.next.call(null,fd);
fd = G__41772;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__28057__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})():fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first.call(null,fd);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next.call(null,fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first.call(null,ds);
if(cljs.core.map_QMARK_.call(null,d)){
return cljs.core.conj.call(null,acc,d);
} else {
var G__41773 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__41774 = cljs.core.next.call(null,ds);
acc = G__41773;
ds = G__41774;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq.call(null,add_args.call(null,cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__41775 = cljs.core.next.call(null,p);
var G__41776 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__41775;
d = G__41776;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__41759__auto__","ret__41759__auto__",1282952713,null)),(function (){var x__28057__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28057__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__41759__auto__","ret__41759__auto__",1282952713,null)))));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq41760){
var G__41761 = cljs.core.first.call(null,seq41760);
var seq41760__$1 = cljs.core.next.call(null,seq41760);
var G__41762 = cljs.core.first.call(null,seq41760__$1);
var seq41760__$2 = cljs.core.next.call(null,seq41760__$1);
var G__41763 = cljs.core.first.call(null,seq41760__$2);
var seq41760__$3 = cljs.core.next.call(null,seq41760__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__41761,G__41762,G__41763,seq41760__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;
var ret__28404__auto___41781 = /**
 * Returns the var to which a symbol will be resolved in the namespace else nil.
 */
cljs.core$macros.resolve = (function cljs$core$macros$resolve(_AMPERSAND_form,_AMPERSAND_env,quoted_sym){
if((cljs.core.seq_QMARK_.call(null,quoted_sym)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,quoted_sym)))){
} else {
throw (new Error(["Assert failed: ","Argument to resolve must be a quoted symbol","\n","(core/and (seq? quoted-sym) (= (quote quote) (first quoted-sym)))"].join('')));
}

var sym = cljs.core.second.call(null,quoted_sym);
var env = _AMPERSAND_env;
var vec__41777 = (function (){try{var var$ = cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.analyzer.var_meta.call(null,var$)], null);
}catch (e41780){var e = e41780;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.resolve_var.call(null,env,sym),null], null);
}})();
var var$ = cljs.core.nth.call(null,vec__41777,(0),null);
var meta = cljs.core.nth.call(null,vec__41777,(1),null);
var resolved = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__28057__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Var.","cljs.core/Var.",-242685277,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__28057__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
cljs.core$macros.resolve.cljs$lang$macro = true;


//# sourceMappingURL=core$macros.js.map
