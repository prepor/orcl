// Compiled by ClojureScript 1.9.908 {}
goog.provide('orcl.analyzer.patterns');
goog.require('cljs.core');
goog.require('orcl.utils');
orcl.analyzer.patterns.pattern_bindings = (function orcl$analyzer$patterns$pattern_bindings(p){
var G__42422 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p);
var G__42422__$1 = (((G__42422 instanceof cljs.core.Keyword))?G__42422.fqn:null);
switch (G__42422__$1) {
case "const":
return cljs.core.PersistentHashSet.EMPTY;

break;
case "wildcard":
return cljs.core.PersistentHashSet.EMPTY;

break;
case "var":
return cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(p)]);

break;
case "list":
case "tuple":
return cljs.core.set.call(null,cljs.core.mapcat.call(null,orcl.analyzer.patterns.pattern_bindings,new cljs.core.Keyword(null,"patterns","patterns",1164082024).cljs$core$IFn$_invoke$arity$1(p)));

break;
case "record":
return cljs.core.set.call(null,cljs.core.mapcat.call(null,((function (G__42422,G__42422__$1){
return (function (p1__42421_SHARP_){
return orcl.analyzer.patterns.pattern_bindings.call(null,cljs.core.second.call(null,p1__42421_SHARP_));
});})(G__42422,G__42422__$1))
,new cljs.core.Keyword(null,"pairs","pairs",614609779).cljs$core$IFn$_invoke$arity$1(p)));

break;
case "cons":
return cljs.core.set.call(null,cljs.core.concat.call(null,orcl.analyzer.patterns.pattern_bindings.call(null,new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(p)),orcl.analyzer.patterns.pattern_bindings.call(null,new cljs.core.Keyword(null,"tail","tail",-1146023564).cljs$core$IFn$_invoke$arity$1(p))));

break;
case "as":
return cljs.core.conj.call(null,orcl.analyzer.patterns.pattern_bindings.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(p));

break;
case "call":
return orcl.utils.todo_exception.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42422__$1)].join('')));

}
});
orcl.analyzer.patterns.pattern_envs = (function orcl$analyzer$patterns$pattern_envs(pattern,source){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28003__auto__ = (function orcl$analyzer$patterns$pattern_envs_$_iter__42424(s__42425){
return (new cljs.core.LazySeq(null,(function (){
var s__42425__$1 = s__42425;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42425__$1);
if(temp__4657__auto__){
var s__42425__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42425__$2)){
var c__28001__auto__ = cljs.core.chunk_first.call(null,s__42425__$2);
var size__28002__auto__ = cljs.core.count.call(null,c__28001__auto__);
var b__42427 = cljs.core.chunk_buffer.call(null,size__28002__auto__);
if((function (){var i__42426 = (0);
while(true){
if((i__42426 < size__28002__auto__)){
var p = cljs.core._nth.call(null,c__28001__auto__,i__42426);
cljs.core.chunk_append.call(null,b__42427,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,source], null));

var G__42428 = (i__42426 + (1));
i__42426 = G__42428;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42427),orcl$analyzer$patterns$pattern_envs_$_iter__42424.call(null,cljs.core.chunk_rest.call(null,s__42425__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42427),null);
}
} else {
var p = cljs.core.first.call(null,s__42425__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,source], null),orcl$analyzer$patterns$pattern_envs_$_iter__42424.call(null,cljs.core.rest.call(null,s__42425__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28003__auto__.call(null,orcl.analyzer.patterns.pattern_bindings.call(null,pattern));
})());
});

//# sourceMappingURL=patterns.js.map
