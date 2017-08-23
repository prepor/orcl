// Compiled by ClojureScript 1.9.908 {}
goog.provide('orcl.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('orcl.utils.hashify');
orcl.utils.sha = (function orcl$utils$sha(x){
if(cljs.core.map_QMARK_.call(null,x)){
var temp__4655__auto__ = new cljs.core.Keyword(null,"sha","sha",-950317251).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__4655__auto__)){
var sha = temp__4655__auto__;
return x;
} else {
return orcl.utils.sha.call(null,cljs.core.sort_by.call(null,cljs.core.first,x));
}
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return orcl.utils.sha.call(null,clojure.string.join.call(null,"",cljs.core.map.call(null,orcl.utils.sha,x)));
} else {
if(typeof x === 'string'){
return orcl.utils.hashify.hashify.call(null,x);
} else {
if((x instanceof cljs.core.Keyword)){
return orcl.utils.sha.call(null,cljs.core.name.call(null,x));
} else {
if((x instanceof cljs.core.Symbol)){
return orcl.utils.sha.call(null,cljs.core.name.call(null,x));
} else {
return orcl.utils.sha.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));

}
}
}
}
}
});
orcl.utils.with_sha = (function orcl$utils$with_sha(node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"sha","sha",-950317251),orcl.utils.sha.call(null,node));
});
/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
orcl.utils.map_vals = (function orcl$utils$map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__40703__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__40712_40722 = cljs.core.seq.call(null,m);
var chunk__40713_40723 = null;
var count__40714_40724 = (0);
var i__40715_40725 = (0);
while(true){
if((i__40715_40725 < count__40714_40724)){
var vec__40716_40726 = cljs.core._nth.call(null,chunk__40713_40723,i__40715_40725);
var k_40727 = cljs.core.nth.call(null,vec__40716_40726,(0),null);
var v_40728 = cljs.core.nth.call(null,vec__40716_40726,(1),null);
var m40711_40729 = cljs.core.deref.call(null,m_atom__40703__auto__);
cljs.core.reset_BANG_.call(null,m_atom__40703__auto__,cljs.core.assoc_BANG_.call(null,m40711_40729,k_40727,f.call(null,v_40728)));

var G__40730 = seq__40712_40722;
var G__40731 = chunk__40713_40723;
var G__40732 = count__40714_40724;
var G__40733 = (i__40715_40725 + (1));
seq__40712_40722 = G__40730;
chunk__40713_40723 = G__40731;
count__40714_40724 = G__40732;
i__40715_40725 = G__40733;
continue;
} else {
var temp__4657__auto___40734 = cljs.core.seq.call(null,seq__40712_40722);
if(temp__4657__auto___40734){
var seq__40712_40735__$1 = temp__4657__auto___40734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40712_40735__$1)){
var c__28034__auto___40736 = cljs.core.chunk_first.call(null,seq__40712_40735__$1);
var G__40737 = cljs.core.chunk_rest.call(null,seq__40712_40735__$1);
var G__40738 = c__28034__auto___40736;
var G__40739 = cljs.core.count.call(null,c__28034__auto___40736);
var G__40740 = (0);
seq__40712_40722 = G__40737;
chunk__40713_40723 = G__40738;
count__40714_40724 = G__40739;
i__40715_40725 = G__40740;
continue;
} else {
var vec__40719_40741 = cljs.core.first.call(null,seq__40712_40735__$1);
var k_40742 = cljs.core.nth.call(null,vec__40719_40741,(0),null);
var v_40743 = cljs.core.nth.call(null,vec__40719_40741,(1),null);
var m40711_40744 = cljs.core.deref.call(null,m_atom__40703__auto__);
cljs.core.reset_BANG_.call(null,m_atom__40703__auto__,cljs.core.assoc_BANG_.call(null,m40711_40744,k_40742,f.call(null,v_40743)));

var G__40745 = cljs.core.next.call(null,seq__40712_40735__$1);
var G__40746 = null;
var G__40747 = (0);
var G__40748 = (0);
seq__40712_40722 = G__40745;
chunk__40713_40723 = G__40746;
count__40714_40724 = G__40747;
i__40715_40725 = G__40748;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__40703__auto__));

}
}
});
/**
 * Returns a map of the elements of `coll` keyed by the result of `f` on each
 * element.  The value at each key will be a single element (in contrast to
 * `clojure.core/group-by`).  Therefore `f` should generally return an unique
 * key for every element - otherwise elements get discarded.
 */
orcl.utils.index_by = (function orcl$utils$index_by(f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (p1__40749_SHARP_,p2__40750_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__40749_SHARP_,f.call(null,p2__40750_SHARP_),p2__40750_SHARP_);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like assoc but only assocs when value is truthy
 */
orcl.utils.assoc_when = (function orcl$utils$assoc_when(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40763 = arguments.length;
var i__28365__auto___40764 = (0);
while(true){
if((i__28365__auto___40764 < len__28364__auto___40763)){
args__28371__auto__.push((arguments[i__28365__auto___40764]));

var G__40765 = (i__28365__auto___40764 + (1));
i__28365__auto___40764 = G__40765;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return orcl.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

orcl.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

return cljs.core.into.call(null,(function (){var or__27195__auto__ = m;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__28003__auto__ = (function orcl$utils$iter__40753(s__40754){
return (new cljs.core.LazySeq(null,(function (){
var s__40754__$1 = s__40754;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40754__$1);
if(temp__4657__auto__){
var s__40754__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40754__$2)){
var c__28001__auto__ = cljs.core.chunk_first.call(null,s__40754__$2);
var size__28002__auto__ = cljs.core.count.call(null,c__28001__auto__);
var b__40756 = cljs.core.chunk_buffer.call(null,size__28002__auto__);
if((function (){var i__40755 = (0);
while(true){
if((i__40755 < size__28002__auto__)){
var vec__40757 = cljs.core._nth.call(null,c__28001__auto__,i__40755);
var k = cljs.core.nth.call(null,vec__40757,(0),null);
var v = cljs.core.nth.call(null,vec__40757,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__40756,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__40766 = (i__40755 + (1));
i__40755 = G__40766;
continue;
} else {
var G__40767 = (i__40755 + (1));
i__40755 = G__40767;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40756),orcl$utils$iter__40753.call(null,cljs.core.chunk_rest.call(null,s__40754__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40756),null);
}
} else {
var vec__40760 = cljs.core.first.call(null,s__40754__$2);
var k = cljs.core.nth.call(null,vec__40760,(0),null);
var v = cljs.core.nth.call(null,vec__40760,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),orcl$utils$iter__40753.call(null,cljs.core.rest.call(null,s__40754__$2)));
} else {
var G__40768 = cljs.core.rest.call(null,s__40754__$2);
s__40754__$1 = G__40768;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28003__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

orcl.utils.assoc_when.cljs$lang$maxFixedArity = (1);

orcl.utils.assoc_when.cljs$lang$applyTo = (function (seq40751){
var G__40752 = cljs.core.first.call(null,seq40751);
var seq40751__$1 = cljs.core.next.call(null,seq40751);
return orcl.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__40752,seq40751__$1);
});

orcl.utils.ast_walk = (function orcl$utils$ast_walk(inner,outer,ast){
var G__40770 = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(ast);
var G__40770__$1 = (((G__40770 instanceof cljs.core.Keyword))?G__40770.fqn:null);
switch (G__40770__$1) {
case "pruning":
case "sequential":
case "parallel":
case "otherwise":
return outer.call(null,cljs.core.update.call(null,cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"left","left",-399115937),inner),new cljs.core.Keyword(null,"right","right",-452581833),inner));

break;
case "conditional":
return outer.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"if","if",-458814265),inner),new cljs.core.Keyword(null,"then","then",460598070),inner),new cljs.core.Keyword(null,"else","else",-1508377146),inner));

break;
case "lambda":
return outer.call(null,cljs.core.update.call(null,cljs.core.assoc.call(null,cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"body","body",-2049205669),inner),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.mapv.call(null,inner,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ast))),new cljs.core.Keyword(null,"guard","guard",-873147811),inner));

break;
case "declaration":
return outer.call(null,(function (){var G__40771 = cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"expr","expr",745722291),inner);
var G__40771__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"decl","decl",-1498869485).cljs$core$IFn$_invoke$arity$1(ast))))?cljs.core.update_in.call(null,G__40771,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decl","decl",-1498869485),new cljs.core.Keyword(null,"body","body",-2049205669)], null),inner):G__40771);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"include","include",153360230),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"decl","decl",-1498869485).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.update_in.call(null,G__40771__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decl","decl",-1498869485),new cljs.core.Keyword(null,"declarations","declarations",1621100858)], null),((function (G__40771,G__40771__$1,G__40770,G__40770__$1){
return (function (p1__40769_SHARP_){
return cljs.core.map.call(null,inner,p1__40769_SHARP_);
});})(G__40771,G__40771__$1,G__40770,G__40770__$1))
);
} else {
return G__40771__$1;
}
})());

break;
case "defs-group":
return outer.call(null,cljs.core.assoc.call(null,cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"expr","expr",745722291),inner),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.mapv.call(null,inner,new cljs.core.Keyword(null,"defs","defs",1398449717).cljs$core$IFn$_invoke$arity$1(ast))));

break;
case "def":
return outer.call(null,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"instances","instances",-335364781),cljs.core.mapv.call(null,inner,new cljs.core.Keyword(null,"instances","instances",-335364781).cljs$core$IFn$_invoke$arity$1(ast))));

break;
case "def-instance":
return outer.call(null,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"body","body",-2049205669),inner.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ast))));

break;
case "call":
return outer.call(null,cljs.core.assoc.call(null,cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"target","target",253001721),inner),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,inner,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast))));

break;
case "list":
case "tuple":
return outer.call(null,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"values","values",372645556),cljs.core.mapv.call(null,inner,new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(ast))));

break;
case "record":
return outer.call(null,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"pairs","pairs",614609779),cljs.core.mapv.call(null,((function (G__40770,G__40770__$1){
return (function (p__40772){
var vec__40773 = p__40772;
var k = cljs.core.nth.call(null,vec__40773,(0),null);
var v = cljs.core.nth.call(null,vec__40773,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,inner.call(null,v)], null);
});})(G__40770,G__40770__$1))
,new cljs.core.Keyword(null,"pairs","pairs",614609779).cljs$core$IFn$_invoke$arity$1(ast))));

break;
case "field-access":
case "dereference":
return outer.call(null,cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"target","target",253001721),inner));

break;
case "normalized-conditional":
return outer.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"if","if",-458814265),inner),new cljs.core.Keyword(null,"then","then",460598070),inner),new cljs.core.Keyword(null,"else","else",-1508377146),inner));

break;
case "stop":
case "const":
case "var":
return outer.call(null,ast);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40770__$1)].join('')));

}
});
orcl.utils.ast_postwalk = (function orcl$utils$ast_postwalk(f,form){
return orcl.utils.ast_walk.call(null,cljs.core.partial.call(null,orcl.utils.ast_postwalk,f),f,form);
});
orcl.utils.ast_prewalk = (function orcl$utils$ast_prewalk(f,form){
return orcl.utils.ast_walk.call(null,cljs.core.partial.call(null,orcl.utils.ast_prewalk,f),cljs.core.identity,f.call(null,form));
});
orcl.utils.todo_exception = (function orcl$utils$todo_exception(){
throw (new Error());
});

//# sourceMappingURL=utils.js.map
