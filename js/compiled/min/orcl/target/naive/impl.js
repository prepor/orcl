// Compiled by ClojureScript 1.9.908 {}
goog.provide('orcl.target.naive.impl');
goog.require('cljs.core');
goog.require('orcl.utils');
goog.require('orcl.target.naive.vars');
orcl.target.naive.impl.pending_res = (function orcl$target$naive$impl$pending_res(p){
var G__40289 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p);
var G__40289__$1 = (((G__40289 instanceof cljs.core.Keyword))?G__40289.fqn:null);
switch (G__40289__$1) {
case "wildcard":
case "var":
case "const":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("orcl.target.naive.impl","pending","orcl.target.naive.impl/pending",-1639321523)], null);

break;
case "list":
case "tuple":
return cljs.core.mapcat.call(null,orcl.target.naive.impl.pending_res,new cljs.core.Keyword(null,"patterns","patterns",1164082024).cljs$core$IFn$_invoke$arity$1(p));

break;
case "record":
return cljs.core.mapcat.call(null,cljs.core.comp.call(null,orcl.target.naive.impl.pending_res,cljs.core.second),new cljs.core.Keyword(null,"pairs","pairs",614609779).cljs$core$IFn$_invoke$arity$1(p));

break;
case "cons":
return cljs.core.concat.call(null,orcl.target.naive.impl.pending_res.call(null,new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(p)),orcl.target.naive.impl.pending_res.call(null,new cljs.core.Keyword(null,"tail","tail",-1146023564).cljs$core$IFn$_invoke$arity$1(p)));

break;
case "as":
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(p),orcl.target.naive.impl.pending_res.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(p)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40289__$1)].join('')));

}
});
orcl.target.naive.impl.pattern_checker_STAR_ = (function orcl$target$naive$impl$pattern_checker_STAR_(p){
var G__40291 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p);
var G__40291__$1 = (((G__40291 instanceof cljs.core.Keyword))?G__40291.fqn:null);
switch (G__40291__$1) {
case "wildcard":
case "var":
return cljs.core.constantly.call(null,true);

break;
case "const":
return ((function (G__40291,G__40291__$1){
return (function (v){
return cljs.core._EQ_.call(null,v,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p));
});
;})(G__40291,G__40291__$1))

break;
case "list":
case "tuple":
var checkers = cljs.core.map.call(null,orcl.target.naive.impl.pattern_checker_STAR_,new cljs.core.Keyword(null,"patterns","patterns",1164082024).cljs$core$IFn$_invoke$arity$1(p));
return ((function (checkers,G__40291,G__40291__$1){
return (function (v){
return (cljs.core.sequential_QMARK_.call(null,v)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,v),cljs.core.count.call(null,checkers))) && (cljs.core.every_QMARK_.call(null,((function (checkers,G__40291,G__40291__$1){
return (function (p__40296){
var vec__40297 = p__40296;
var checker = cljs.core.nth.call(null,vec__40297,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__40297,(1),null);
return checker.call(null,v__$1);
});})(checkers,G__40291,G__40291__$1))
,cljs.core.map.call(null,cljs.core.vector,checkers,v)));
});
;})(checkers,G__40291,G__40291__$1))

break;
case "record":
var checkers = cljs.core.map.call(null,cljs.core.comp.call(null,orcl.target.naive.impl.pattern_checker_STAR_,cljs.core.second),new cljs.core.Keyword(null,"pairs","pairs",614609779).cljs$core$IFn$_invoke$arity$1(p));
return ((function (checkers,G__40291,G__40291__$1){
return (function (v){
return (cljs.core.map_QMARK_.call(null,v)) && (cljs.core.every_QMARK_.call(null,((function (checkers,G__40291,G__40291__$1){
return (function (p__40307){
var vec__40308 = p__40307;
var checker = cljs.core.nth.call(null,vec__40308,(0),null);
var vec__40311 = cljs.core.nth.call(null,vec__40308,(1),null);
var k = cljs.core.nth.call(null,vec__40311,(0),null);
var _ = cljs.core.nth.call(null,vec__40311,(1),null);
return checker.call(null,cljs.core.get.call(null,v,k,new cljs.core.Keyword("orcl.target.naive.impl","not-found","orcl.target.naive.impl/not-found",1882599832)));
});})(checkers,G__40291,G__40291__$1))
,cljs.core.map.call(null,cljs.core.vector,checkers,new cljs.core.Keyword(null,"pairs","pairs",614609779).cljs$core$IFn$_invoke$arity$1(p))));
});
;})(checkers,G__40291,G__40291__$1))

break;
case "cons":
var head = orcl.target.naive.impl.pattern_checker_STAR_.call(null,new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(p));
var tail = orcl.target.naive.impl.pattern_checker_STAR_.call(null,new cljs.core.Keyword(null,"tail","tail",-1146023564).cljs$core$IFn$_invoke$arity$1(p));
return ((function (head,tail,G__40291,G__40291__$1){
return (function (v){
var and__27183__auto__ = cljs.core.sequential_QMARK_.call(null,v);
if(and__27183__auto__){
var vec__40317 = v;
var seq__40318 = cljs.core.seq.call(null,vec__40317);
var first__40319 = cljs.core.first.call(null,seq__40318);
var seq__40318__$1 = cljs.core.next.call(null,seq__40318);
var x = first__40319;
var xs = seq__40318__$1;
var and__27183__auto____$1 = head.call(null,x);
if(cljs.core.truth_(and__27183__auto____$1)){
return tail.call(null,xs);
} else {
return and__27183__auto____$1;
}
} else {
return and__27183__auto__;
}
});
;})(head,tail,G__40291,G__40291__$1))

break;
case "as":
return orcl.target.naive.impl.pattern_checker_STAR_.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(p));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40291__$1)].join('')));

}
});
orcl.target.naive.impl.pattern_checker = (function orcl$target$naive$impl$pattern_checker(p){
var f = orcl.target.naive.impl.pattern_checker_STAR_.call(null,p);
return ((function (f){
return (function (v){
var or__27195__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword("orcl.target.naive.impl","pending","orcl.target.naive.impl/pending",-1639321523),v);
if(or__27195__auto__){
return or__27195__auto__;
} else {
return f.call(null,v);
}
});
;})(f))
});
orcl.target.naive.impl.pattern_extractor_STAR_ = (function orcl$target$naive$impl$pattern_extractor_STAR_(p){
var G__40323 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p);
var G__40323__$1 = (((G__40323 instanceof cljs.core.Keyword))?G__40323.fqn:null);
switch (G__40323__$1) {
case "var":
return ((function (G__40323,G__40323__$1){
return (function (v){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
});
;})(G__40323,G__40323__$1))

break;
case "wildcard":
case "const":
return ((function (G__40323,G__40323__$1){
return (function (v){
return null;
});
;})(G__40323,G__40323__$1))

break;
case "list":
case "tuple":
var extractors = cljs.core.map.call(null,orcl.target.naive.impl.pattern_extractor_STAR_,new cljs.core.Keyword(null,"patterns","patterns",1164082024).cljs$core$IFn$_invoke$arity$1(p));
return ((function (extractors,G__40323,G__40323__$1){
return (function (v){
return cljs.core.mapcat.call(null,((function (extractors,G__40323,G__40323__$1){
return (function (p1__40321_SHARP_,p2__40322_SHARP_){
return p1__40321_SHARP_.call(null,p2__40322_SHARP_);
});})(extractors,G__40323,G__40323__$1))
,extractors,v);
});
;})(extractors,G__40323,G__40323__$1))

break;
case "record":
var extractors = cljs.core.map.call(null,cljs.core.comp.call(null,orcl.target.naive.impl.pattern_extractor_STAR_,cljs.core.second),new cljs.core.Keyword(null,"pairs","pairs",614609779).cljs$core$IFn$_invoke$arity$1(p));
return ((function (extractors,G__40323,G__40323__$1){
return (function (v){
return cljs.core.mapcat.call(null,((function (extractors,G__40323,G__40323__$1){
return (function (e,p__40324){
var vec__40325 = p__40324;
var k = cljs.core.nth.call(null,vec__40325,(0),null);
var _ = cljs.core.nth.call(null,vec__40325,(1),null);
return e.call(null,cljs.core.get.call(null,v,k,new cljs.core.Keyword("orcl.target.naive.impl","not-found","orcl.target.naive.impl/not-found",1882599832)));
});})(extractors,G__40323,G__40323__$1))
,extractors,new cljs.core.Keyword(null,"pairs","pairs",614609779).cljs$core$IFn$_invoke$arity$1(p));
});
;})(extractors,G__40323,G__40323__$1))

break;
case "cons":
var head = orcl.target.naive.impl.pattern_extractor_STAR_.call(null,new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(p));
var tail = orcl.target.naive.impl.pattern_extractor_STAR_.call(null,new cljs.core.Keyword(null,"tail","tail",-1146023564).cljs$core$IFn$_invoke$arity$1(p));
return ((function (head,tail,G__40323,G__40323__$1){
return (function (p__40328){
var vec__40329 = p__40328;
var seq__40330 = cljs.core.seq.call(null,vec__40329);
var first__40331 = cljs.core.first.call(null,seq__40330);
var seq__40330__$1 = cljs.core.next.call(null,seq__40330);
var x = first__40331;
var xs = seq__40330__$1;
return cljs.core.concat.call(null,head.call(null,x),tail.call(null,xs));
});
;})(head,tail,G__40323,G__40323__$1))

break;
case "as":
var e = orcl.target.naive.impl.pattern_extractor_STAR_.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(p));
return ((function (e,G__40323,G__40323__$1){
return (function (v){
var extracted = e.call(null,v);
return cljs.core.cons.call(null,v,extracted);
});
;})(e,G__40323,G__40323__$1))

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40323__$1)].join('')));

}
});
orcl.target.naive.impl.pattern_extractor = (function orcl$target$naive$impl$pattern_extractor(p){
var pending = orcl.target.naive.impl.pending_res.call(null,p);
var f = orcl.target.naive.impl.pattern_extractor_STAR_.call(null,p);
return ((function (pending,f){
return (function (v){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("orcl.target.naive.impl","pending","orcl.target.naive.impl/pending",-1639321523),v)){
return pending;
} else {
return f.call(null,v);
}
});
;})(pending,f))
});
orcl.target.naive.impl.otherwise = (function orcl$target$naive$impl$otherwise(left,right){
var temp__4655__auto__ = cljs.core.seq.call(null,left.call(null));
if(temp__4655__auto__){
var v = temp__4655__auto__;
return v;
} else {
return right.call(null);
}
});
orcl.target.naive.impl.sequential = (function orcl$target$naive$impl$sequential(left,right){
return cljs.core.mapcat.call(null,right,left);
});
orcl.target.naive.impl.prelude_pow = (function orcl$target$naive$impl$prelude_pow(base,pow){
return Math.pow(base,pow);
});
orcl.target.naive.impl.prelude_let = (function orcl$target$naive$impl$prelude_let(var_args){
var G__40336 = arguments.length;
switch (G__40336) {
case 0:
return orcl.target.naive.impl.prelude_let.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return orcl.target.naive.impl.prelude_let.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___40338 = arguments.length;
var i__28365__auto___40339 = (0);
while(true){
if((i__28365__auto___40339 < len__28364__auto___40338)){
args_arr__28383__auto__.push((arguments[i__28365__auto___40339]));

var G__40340 = (i__28365__auto___40339 + (1));
i__28365__auto___40339 = G__40340;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((1)),(0),null));
return orcl.target.naive.impl.prelude_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28384__auto__);

}
});

orcl.target.naive.impl.prelude_let.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.Keyword("orcl.target.naive.impl","signal","orcl.target.naive.impl/signal",-714753121);
});

orcl.target.naive.impl.prelude_let.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

orcl.target.naive.impl.prelude_let.cljs$core$IFn$_invoke$arity$variadic = (function (x,xs){
return cljs.core.vec.call(null,cljs.core.cons.call(null,x,xs));
});

orcl.target.naive.impl.prelude_let.cljs$lang$applyTo = (function (seq40334){
var G__40335 = cljs.core.first.call(null,seq40334);
var seq40334__$1 = cljs.core.next.call(null,seq40334);
return orcl.target.naive.impl.prelude_let.cljs$core$IFn$_invoke$arity$variadic(G__40335,seq40334__$1);
});

orcl.target.naive.impl.prelude_let.cljs$lang$maxFixedArity = (1);

orcl.target.naive.impl.prelude_plus = (function orcl$target$naive$impl$prelude_plus(a,b){
if(typeof a === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');
} else {
if(cljs.core.map_QMARK_.call(null,a)){
return cljs.core.merge.call(null,a,b);
} else {
return (a + b);

}
}
});
orcl.target.naive.impl.prelude_ift = (function orcl$target$naive$impl$prelude_ift(x){
if(cljs.core.truth_(x)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("orcl.target.naive.impl","signal","orcl.target.naive.impl/signal",-714753121)], null);
} else {
return null;
}
});
orcl.target.naive.impl.prelude_iff = (function orcl$target$naive$impl$prelude_iff(x){
if(cljs.core.truth_(x)){
return null;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("orcl.target.naive.impl","signal","orcl.target.naive.impl/signal",-714753121)], null);
}
});
orcl.target.naive.impl.prelude_and = (function orcl$target$naive$impl$prelude_and(a,b){
var and__27183__auto__ = a;
if(cljs.core.truth_(and__27183__auto__)){
return b;
} else {
return and__27183__auto__;
}
});
orcl.target.naive.impl.prelude_or = (function orcl$target$naive$impl$prelude_or(a,b){
var or__27195__auto__ = a;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return b;
}
});
orcl.target.naive.impl.coeffect = (function orcl$target$naive$impl$coeffect(definition){
var c = cljs.core.deref.call(null,new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(orcl.target.naive.vars._STAR_state_STAR_));
var res__40281__auto__ = (function (){var x = cljs.core.get_in.call(null,orcl.target.naive.vars._STAR_state_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"realized","realized",-153188123),c], null),new cljs.core.Keyword("orcl.target.naive.impl","not-found","orcl.target.naive.impl/not-found",1882599832));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("orcl.target.naive.impl","not-found","orcl.target.naive.impl/not-found",1882599832),x)){
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(orcl.target.naive.vars._STAR_state_STAR_),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,definition], null));

return new cljs.core.Keyword("orcl.target.naive.impl","pending","orcl.target.naive.impl/pending",-1639321523);
} else {
return x;
}
})();
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(orcl.target.naive.vars._STAR_state_STAR_),cljs.core.inc);

return res__40281__auto__;
});
orcl.target.naive.impl.internal_block = (function orcl$target$naive$impl$internal_block(k){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(orcl.target.naive.vars._STAR_state_STAR_)),k,new cljs.core.Keyword("orcl.target.naive.impl","not-found","orcl.target.naive.impl/not-found",1882599832));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("orcl.target.naive.impl","not-found","orcl.target.naive.impl/not-found",1882599832),v)){
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(orcl.target.naive.vars._STAR_state_STAR_),cljs.core.assoc,k,new cljs.core.Keyword("orcl.target.naive.impl","pending","orcl.target.naive.impl/pending",-1639321523));

return new cljs.core.Keyword("orcl.target.naive.impl","pending","orcl.target.naive.impl/pending",-1639321523);
} else {
return v;
}
});
orcl.target.naive.impl.internal_unblock = (function orcl$target$naive$impl$internal_unblock(k,v){
var prev = cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(orcl.target.naive.vars._STAR_state_STAR_)),k);
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(orcl.target.naive.vars._STAR_state_STAR_),cljs.core.assoc,k,v);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword("orcl.target.naive.impl","pending","orcl.target.naive.impl/pending",-1639321523),prev)){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"rerun","rerun",-15982659).cljs$core$IFn$_invoke$arity$1(orcl.target.naive.vars._STAR_state_STAR_),true);
} else {
return null;
}
});
orcl.target.naive.impl.core_cell = (function orcl$target$naive$impl$core_cell(){
var c = cljs.core.deref.call(null,new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(orcl.target.naive.vars._STAR_state_STAR_));
var res__40281__auto__ = new cljs.core.PersistentArrayMap(null, 3, ["read",((function (c){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [orcl.target.naive.impl.internal_block.call(null,c)], null);
});})(c))
,"readD",((function (c){
return (function (){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(orcl.target.naive.vars._STAR_state_STAR_)),c,new cljs.core.Keyword("orcl.target.naive.impl","not-found","orcl.target.naive.impl/not-found",1882599832));
if((cljs.core._EQ_.call(null,new cljs.core.Keyword("orcl.target.naive.impl","not-found","orcl.target.naive.impl/not-found",1882599832),v)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword("orcl.target.naive.impl","pending","orcl.target.naive.impl/pending",-1639321523),v))){
return null;
} else {
return v;
}
});})(c))
,"write",((function (c){
return (function (v){
var x = cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(orcl.target.naive.vars._STAR_state_STAR_)),c,new cljs.core.Keyword("orcl.target.naive.impl","not-found","orcl.target.naive.impl/not-found",1882599832));
if((cljs.core._EQ_.call(null,new cljs.core.Keyword("orcl.target.naive.impl","not-found","orcl.target.naive.impl/not-found",1882599832),x)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword("orcl.target.naive.impl","pending","orcl.target.naive.impl/pending",-1639321523),x))){
orcl.target.naive.impl.internal_unblock.call(null,c,v);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("orcl.target.naive.impl","signal","orcl.target.naive.impl/signal",-714753121)], null);
} else {
return null;
}
});})(c))
], null);
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(orcl.target.naive.vars._STAR_state_STAR_),cljs.core.inc);

return res__40281__auto__;
});
orcl.target.naive.impl.text_println = (function orcl$target$naive$impl$text_println(x){
cljs.core.prn.call(null,x);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("orcl.target.naive.impl","signal","orcl.target.naive.impl/signal",-714753121)], null);
});

//# sourceMappingURL=impl.js.map
