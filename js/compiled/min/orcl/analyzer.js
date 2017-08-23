// Compiled by ClojureScript 1.9.908 {}
goog.provide('orcl.analyzer');
goog.require('cljs.core');
goog.require('orcl.utils.cursor');
goog.require('orcl.utils');
goog.require('clojure.set');
goog.require('orcl.analyzer.vars');
goog.require('orcl.analyzer.patterns');
orcl.analyzer.primitive_QMARK_ = (function orcl$analyzer$primitive_QMARK_(n){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"const","const",1709929842),null,new cljs.core.Keyword(null,"var","var",-769682797),null], null), null).call(null,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n));
});
orcl.analyzer.deflate_values = (function orcl$analyzer$deflate_values(p__42696,node){
while(true){
var vec__42697 = p__42696;
var seq__42698 = cljs.core.seq.call(null,vec__42697);
var first__42699 = cljs.core.first.call(null,seq__42698);
var seq__42698__$1 = cljs.core.next.call(null,seq__42698);
var c = first__42699;
var cursors = seq__42698__$1;
if((c == null)){
return cljs.core.deref.call(null,node);
} else {
if(cljs.core.truth_(orcl.analyzer.primitive_QMARK_.call(null,cljs.core.deref.call(null,c)))){
var G__42701 = cursors;
var G__42702 = node;
p__42696 = G__42701;
node = G__42702;
continue;
} else {
var _STAR_fresh_STAR_42700 = orcl.analyzer.vars._STAR_fresh_STAR_;
orcl.analyzer.vars._STAR_fresh_STAR_ = (orcl.analyzer.vars._STAR_fresh_STAR_ + (1));

try{var fresh = ["__fresh",cljs.core.str.cljs$core$IFn$_invoke$arity$1(orcl.analyzer.vars._STAR_fresh_STAR_)].join('');
var orig = cljs.core.deref.call(null,c);
orcl.utils.cursor.reset_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"var","var",-769682797),fresh], null));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"pruning","pruning",-1224456546),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"var","var",-769682797),fresh], null),new cljs.core.Keyword(null,"left","left",-399115937),orcl.analyzer.deflate_values.call(null,cursors,node),new cljs.core.Keyword(null,"right","right",-452581833),orig], null);
}finally {orcl.analyzer.vars._STAR_fresh_STAR_ = _STAR_fresh_STAR_42700;
}
}
}
break;
}
});
orcl.analyzer.prelude = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, ["**",null,":>",null,"&&",null,"=",null,"*",null,"%",null,"<=",null,"Let",null,"~",null,"/",null,"-",null,"Ift",null,"/=",null,"0-",null,">=",null,":",null,"Iff",null,"||",null,"<:",null,"+",null], null), null);
orcl.analyzer.prelude_env = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28003__auto__ = (function orcl$analyzer$iter__42703(s__42704){
return (new cljs.core.LazySeq(null,(function (){
var s__42704__$1 = s__42704;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42704__$1);
if(temp__4657__auto__){
var s__42704__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42704__$2)){
var c__28001__auto__ = cljs.core.chunk_first.call(null,s__42704__$2);
var size__28002__auto__ = cljs.core.count.call(null,c__28001__auto__);
var b__42706 = cljs.core.chunk_buffer.call(null,size__28002__auto__);
if((function (){var i__42705 = (0);
while(true){
if((i__42705 < size__28002__auto__)){
var x = cljs.core._nth.call(null,c__28001__auto__,i__42705);
cljs.core.chunk_append.call(null,b__42706,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"site","site",-1852581499),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prelude","prelude",-138977836)], null),new cljs.core.Keyword(null,"definition","definition",-1198729982),x], null)], null));

var G__42707 = (i__42705 + (1));
i__42705 = G__42707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42706),orcl$analyzer$iter__42703.call(null,cljs.core.chunk_rest.call(null,s__42704__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42706),null);
}
} else {
var x = cljs.core.first.call(null,s__42704__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"site","site",-1852581499),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prelude","prelude",-138977836)], null),new cljs.core.Keyword(null,"definition","definition",-1198729982),x], null)], null),orcl$analyzer$iter__42703.call(null,cljs.core.rest.call(null,s__42704__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28003__auto__.call(null,orcl.analyzer.prelude);
})());
orcl.analyzer.bindings = (function orcl$analyzer$bindings(ast){
var G__42708 = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(ast);
var G__42708__$1 = (((G__42708 instanceof cljs.core.Keyword))?G__42708.fqn:null);
switch (G__42708__$1) {
case "var":
return cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(ast)]);

break;
case "pruning":
return clojure.set.union.call(null,clojure.set.difference.call(null,orcl.analyzer.bindings.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(ast)),clojure.set.difference.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(ast))),orcl.analyzer.bindings.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(ast)));

break;
case "sequential":
return clojure.set.union.call(null,orcl.analyzer.bindings.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(ast)),clojure.set.difference.call(null,orcl.analyzer.bindings.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(ast)),clojure.set.difference.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(ast))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42708__$1)].join('')));

}
});
orcl.analyzer.normalize_STAR_ = (function orcl$analyzer$normalize_STAR_(ast){
var G__42710 = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(ast);
var G__42710__$1 = (((G__42710 instanceof cljs.core.Keyword))?G__42710.fqn:null);
switch (G__42710__$1) {
case "declaration":
var decl = new cljs.core.Keyword(null,"decl","decl",-1498869485).cljs$core$IFn$_invoke$arity$1(ast);
var G__42711 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(decl);
var G__42711__$1 = (((G__42711 instanceof cljs.core.Keyword))?G__42711.fqn:null);
switch (G__42711__$1) {
case "include":
var enfold = ((function (G__42711,G__42711__$1,decl,G__42710,G__42710__$1){
return (function orcl$analyzer$normalize_STAR__$_enfold(p__42716){
var vec__42717 = p__42716;
var seq__42718 = cljs.core.seq.call(null,vec__42717);
var first__42719 = cljs.core.first.call(null,seq__42718);
var seq__42718__$1 = cljs.core.next.call(null,seq__42718);
var d = first__42719;
var declarations = seq__42718__$1;
if(cljs.core.truth_(d)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"declaration","declaration",-1819933768),new cljs.core.Keyword(null,"decl","decl",-1498869485),d,new cljs.core.Keyword(null,"expr","expr",745722291),orcl$analyzer$normalize_STAR__$_enfold.call(null,declarations)], null);
} else {
return new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(ast);
}
});})(G__42711,G__42711__$1,decl,G__42710,G__42710__$1))
;
return enfold.call(null,new cljs.core.Keyword(null,"declarations","declarations",1621100858).cljs$core$IFn$_invoke$arity$1(decl));

break;
case "val":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"pruning","pruning",-1224456546),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(decl),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(decl)], null);

break;
case "def":
return cljs.core.update.call(null,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"decl","decl",-1498869485),cljs.core.update.call(null,decl,new cljs.core.Keyword(null,"body","body",-2049205669),orcl.analyzer.normalize)),new cljs.core.Keyword(null,"expr","expr",745722291),orcl.analyzer.normalize);

break;
default:
return ast;

}

break;
case "lambda":
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ast);
var n = ["__def_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(orcl.utils.sha.call(null,body))].join('');
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"declaration","declaration",-1819933768),new cljs.core.Keyword(null,"decl","decl",-1498869485),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"guard","guard",-873147811),new cljs.core.Keyword(null,"guard","guard",-873147811).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"body","body",-2049205669),body], null),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"var","var",-769682797),n], null)], null);

break;
case "list":
case "tuple":
var c = orcl.utils.cursor.make.call(null,ast);
return orcl.analyzer.deflate_values.call(null,cljs.core.seq.call(null,new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(c)),c);

break;
case "record":
var c = orcl.utils.cursor.make.call(null,ast);
return orcl.analyzer.deflate_values.call(null,cljs.core.map.call(null,cljs.core.second,new cljs.core.Keyword(null,"pairs","pairs",614609779).cljs$core$IFn$_invoke$arity$1(c)),c);

break;
case "call":
var c = orcl.utils.cursor.make.call(null,ast);
return orcl.analyzer.deflate_values.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(c)),c);

break;
case "field-access":
var c = orcl.utils.cursor.make.call(null,ast);
return orcl.analyzer.deflate_values.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(c)], null),c);

break;
case "conditional":
var v = ["__v_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(orcl.utils.sha.call(null,ast))].join('');
var then = ["__then_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(orcl.utils.sha.call(null,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(ast)))].join('');
var else$ = ["__else_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(orcl.utils.sha.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(ast)))].join('');
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"declaration","declaration",-1819933768),new cljs.core.Keyword(null,"decl","decl",-1498869485),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"name","name",1843675177),then,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(ast)], null),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"declaration","declaration",-1819933768),new cljs.core.Keyword(null,"decl","decl",-1498869485),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"name","name",1843675177),else$,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(ast)], null),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"var","var",-769682797),v], null),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"if","if",-458814265).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"normalized-conditional","normalized-conditional",-1179416019),new cljs.core.Keyword(null,"if","if",-458814265),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"var","var",-769682797),v], null),new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"var","var",-769682797),then], null),new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"var","var",-769682797),else$], null)], null)], null)], null)], null);

break;
default:
return ast;

}
});
orcl.analyzer.normalize = (function orcl$analyzer$normalize(ast){
return orcl.utils.ast_prewalk.call(null,orcl.analyzer.normalize_STAR_,ast);
});
orcl.analyzer.with_sha = (function orcl$analyzer$with_sha(ast){
return orcl.utils.ast_postwalk.call(null,orcl.utils.with_sha,ast);
});
orcl.analyzer.flatten_def = (function orcl$analyzer$flatten_def(var_args){
var G__42723 = arguments.length;
switch (G__42723) {
case 1:
return orcl.analyzer.flatten_def.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return orcl.analyzer.flatten_def.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

orcl.analyzer.flatten_def.cljs$core$IFn$_invoke$arity$1 = (function (ast){
return orcl.analyzer.flatten_def.call(null,ast,cljs.core.PersistentVector.EMPTY);
});

orcl.analyzer.flatten_def.cljs$core$IFn$_invoke$arity$2 = (function (ast,acc){
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"declaration","declaration",-1819933768),new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(ast))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"decl","decl",-1498869485).cljs$core$IFn$_invoke$arity$1(ast))))){
return orcl.analyzer.flatten_def.call(null,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.conj.call(null,acc,new cljs.core.Keyword(null,"decl","decl",-1498869485).cljs$core$IFn$_invoke$arity$1(ast)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast,acc], null);
}
});

orcl.analyzer.flatten_def.cljs$lang$maxFixedArity = 2;

orcl.analyzer.analyze_instance = (function orcl$analyzer$analyze_instance(id,instance){
var argument_envs = (function (i,p){
return cljs.core.map.call(null,(function (binding){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [binding,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"argument","argument",1183001841),new cljs.core.Keyword(null,"position","position",-2011731912),i,new cljs.core.Keyword(null,"instance-sha","instance-sha",51010913),new cljs.core.Keyword(null,"sha","sha",-950317251).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(instance)),new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null);
}),orcl.analyzer.patterns.pattern_bindings.call(null,p));
});
var _STAR_env_STAR_42725 = orcl.analyzer.vars._STAR_env_STAR_;
orcl.analyzer.vars._STAR_env_STAR_ = cljs.core.merge.call(null,orcl.analyzer.vars._STAR_env_STAR_,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.call(null,argument_envs,cljs.core.range.call(null),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(instance))));

try{var _STAR_tail_pos_STAR_42726 = orcl.analyzer._STAR_tail_pos_STAR_;
orcl.analyzer._STAR_tail_pos_STAR_ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null);

try{return cljs.core.assoc.call(null,cljs.core.update.call(null,instance,new cljs.core.Keyword(null,"body","body",-2049205669),orcl.analyzer.analyze_env),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"def-instance","def-instance",1087585554));
}finally {orcl.analyzer._STAR_tail_pos_STAR_ = _STAR_tail_pos_STAR_42726;
}}finally {orcl.analyzer.vars._STAR_env_STAR_ = _STAR_env_STAR_42725;
}});
orcl.analyzer.analyze_def_STAR_ = (function orcl$analyzer$analyze_def_STAR_(defs_in_group,p__42727){
var vec__42728 = p__42727;
var n = cljs.core.nth.call(null,vec__42728,(0),null);
var instances = cljs.core.nth.call(null,vec__42728,(1),null);
var _STAR_env_STAR_42731 = orcl.analyzer.vars._STAR_env_STAR_;
orcl.analyzer.vars._STAR_env_STAR_ = cljs.core.merge.call(null,orcl.analyzer.vars._STAR_env_STAR_,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28003__auto__ = ((function (_STAR_env_STAR_42731,vec__42728,n,instances){
return (function orcl$analyzer$analyze_def_STAR__$_iter__42732(s__42733){
return (new cljs.core.LazySeq(null,((function (_STAR_env_STAR_42731,vec__42728,n,instances){
return (function (){
var s__42733__$1 = s__42733;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42733__$1);
if(temp__4657__auto__){
var s__42733__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42733__$2)){
var c__28001__auto__ = cljs.core.chunk_first.call(null,s__42733__$2);
var size__28002__auto__ = cljs.core.count.call(null,c__28001__auto__);
var b__42735 = cljs.core.chunk_buffer.call(null,size__28002__auto__);
if((function (){var i__42734 = (0);
while(true){
if((i__42734 < size__28002__auto__)){
var vec__42736 = cljs.core._nth.call(null,c__28001__auto__,i__42734);
var _ = cljs.core.nth.call(null,vec__42736,(0),null);
var map__42739 = cljs.core.nth.call(null,vec__42736,(1),null);
var map__42739__$1 = ((((!((map__42739 == null)))?((((map__42739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42739):map__42739);
var name = cljs.core.get.call(null,map__42739__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var usages = cljs.core.get.call(null,map__42739__$1,new cljs.core.Keyword(null,"usages","usages",-1094756749));
var node = cljs.core.get.call(null,map__42739__$1,new cljs.core.Keyword(null,"node","node",581201198));
cljs.core.chunk_append.call(null,b__42735,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sha","sha",-950317251).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"usages","usages",-1094756749),usages], null)], null));

var G__42746 = (i__42734 + (1));
i__42734 = G__42746;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42735),orcl$analyzer$analyze_def_STAR__$_iter__42732.call(null,cljs.core.chunk_rest.call(null,s__42733__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42735),null);
}
} else {
var vec__42741 = cljs.core.first.call(null,s__42733__$2);
var _ = cljs.core.nth.call(null,vec__42741,(0),null);
var map__42744 = cljs.core.nth.call(null,vec__42741,(1),null);
var map__42744__$1 = ((((!((map__42744 == null)))?((((map__42744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42744):map__42744);
var name = cljs.core.get.call(null,map__42744__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var usages = cljs.core.get.call(null,map__42744__$1,new cljs.core.Keyword(null,"usages","usages",-1094756749));
var node = cljs.core.get.call(null,map__42744__$1,new cljs.core.Keyword(null,"node","node",581201198));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sha","sha",-950317251).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"usages","usages",-1094756749),usages], null)], null),orcl$analyzer$analyze_def_STAR__$_iter__42732.call(null,cljs.core.rest.call(null,s__42733__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_env_STAR_42731,vec__42728,n,instances))
,null,null));
});})(_STAR_env_STAR_42731,vec__42728,n,instances))
;
return iter__28003__auto__.call(null,defs_in_group);
})()));

try{return cljs.core.assoc.call(null,cljs.core.get_in.call(null,defs_in_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,new cljs.core.Keyword(null,"node","node",581201198)], null)),new cljs.core.Keyword(null,"usages","usages",-1094756749),cljs.core.get_in.call(null,defs_in_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,new cljs.core.Keyword(null,"usages","usages",-1094756749)], null)),new cljs.core.Keyword(null,"arity","arity",-1808556135),cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,instances))),new cljs.core.Keyword(null,"instances","instances",-335364781),cljs.core.mapv.call(null,cljs.core.partial.call(null,orcl.analyzer.analyze_instance,cljs.core.get_in.call(null,defs_in_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"sha","sha",-950317251)], null))),instances));
}finally {orcl.analyzer.vars._STAR_env_STAR_ = _STAR_env_STAR_42731;
}});
orcl.analyzer.analyze_defs = (function orcl$analyzer$analyze_defs(ast){
var vec__42747 = orcl.analyzer.flatten_def.call(null,ast);
var ast_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__42747,(0),null);
var def_instances = cljs.core.nth.call(null,vec__42747,(1),null);
var grouped = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),def_instances);
var defs_in_group = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__42747,ast_SINGLEQUOTE_,def_instances,grouped){
return (function (p__42750){
var vec__42751 = p__42750;
var n = cljs.core.nth.call(null,vec__42751,(0),null);
var instances = cljs.core.nth.call(null,vec__42751,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"usages","usages",-1094756749),cljs.core.atom.call(null,(0)),new cljs.core.Keyword(null,"node","node",581201198),orcl.utils.with_sha.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"instances","instances",-335364781),instances], null))], null)], null);
});})(vec__42747,ast_SINGLEQUOTE_,def_instances,grouped))
,grouped));
var defs = cljs.core.map.call(null,cljs.core.partial.call(null,orcl.analyzer.analyze_def_STAR_,defs_in_group),grouped);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ast_SINGLEQUOTE_,defs], null);
});
orcl.analyzer.check_call_BANG_ = (function orcl$analyzer$check_call_BANG_(call){
return null;
});
orcl.analyzer.analyze_env = (function orcl$analyzer$analyze_env(ast){
var G__42754 = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(ast);
var G__42754__$1 = (((G__42754 instanceof cljs.core.Keyword))?G__42754.fqn:null);
switch (G__42754__$1) {
case "pruning":
return cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"left","left",-399115937),(function (){var _STAR_env_STAR_42755 = orcl.analyzer.vars._STAR_env_STAR_;
orcl.analyzer.vars._STAR_env_STAR_ = cljs.core.merge.call(null,orcl.analyzer.vars._STAR_env_STAR_,orcl.analyzer.patterns.pattern_envs.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pruning","pruning",-1224456546),new cljs.core.Keyword(null,"node-sha","node-sha",-418411289),new cljs.core.Keyword(null,"sha","sha",-950317251).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(ast))], null)));

try{return orcl.analyzer.analyze_env.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(ast));
}finally {orcl.analyzer.vars._STAR_env_STAR_ = _STAR_env_STAR_42755;
}})(),new cljs.core.Keyword(null,"right","right",-452581833),(function (){var _STAR_tail_pos_STAR_42756 = orcl.analyzer._STAR_tail_pos_STAR_;
orcl.analyzer._STAR_tail_pos_STAR_ = null;

try{return orcl.analyzer.analyze_env.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(ast));
}finally {orcl.analyzer._STAR_tail_pos_STAR_ = _STAR_tail_pos_STAR_42756;
}})());

break;
case "sequential":
return cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"right","right",-452581833),(function (){var _STAR_env_STAR_42757 = orcl.analyzer.vars._STAR_env_STAR_;
orcl.analyzer.vars._STAR_env_STAR_ = cljs.core.merge.call(null,orcl.analyzer.vars._STAR_env_STAR_,orcl.analyzer.patterns.pattern_envs.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"node-sha","node-sha",-418411289),new cljs.core.Keyword(null,"sha","sha",-950317251).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(ast))], null)));

try{return orcl.analyzer.analyze_env.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(ast));
}finally {orcl.analyzer.vars._STAR_env_STAR_ = _STAR_env_STAR_42757;
}})(),new cljs.core.Keyword(null,"left","left",-399115937),(function (){var _STAR_tail_pos_STAR_42758 = orcl.analyzer._STAR_tail_pos_STAR_;
orcl.analyzer._STAR_tail_pos_STAR_ = null;

try{return orcl.analyzer.analyze_env.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(ast));
}finally {orcl.analyzer._STAR_tail_pos_STAR_ = _STAR_tail_pos_STAR_42758;
}})());

break;
case "otherwise":
return cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"right","right",-452581833),orcl.analyzer.analyze_env.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(ast)),new cljs.core.Keyword(null,"left","left",-399115937),(function (){var _STAR_tail_pos_STAR_42759 = orcl.analyzer._STAR_tail_pos_STAR_;
orcl.analyzer._STAR_tail_pos_STAR_ = null;

try{return orcl.analyzer.analyze_env.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(ast));
}finally {orcl.analyzer._STAR_tail_pos_STAR_ = _STAR_tail_pos_STAR_42759;
}})());

break;
case "declaration":
var decl = new cljs.core.Keyword(null,"decl","decl",-1498869485).cljs$core$IFn$_invoke$arity$1(ast);
var G__42760 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(decl);
var G__42760__$1 = (((G__42760 instanceof cljs.core.Keyword))?G__42760.fqn:null);
switch (G__42760__$1) {
case "site":
var _STAR_env_STAR_42761 = orcl.analyzer.vars._STAR_env_STAR_;
orcl.analyzer.vars._STAR_env_STAR_ = cljs.core.assoc.call(null,orcl.analyzer.vars._STAR_env_STAR_,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(decl),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"site","site",-1852581499),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(decl)], null),new cljs.core.Keyword(null,"definition","definition",-1198729982),new cljs.core.Keyword(null,"definition","definition",-1198729982).cljs$core$IFn$_invoke$arity$1(decl)], null));

try{return orcl.analyzer.analyze_env.call(null,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(ast));
}finally {orcl.analyzer.vars._STAR_env_STAR_ = _STAR_env_STAR_42761;
}
break;
case "def":
var vec__42762 = orcl.analyzer.analyze_defs.call(null,ast);
var ast_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__42762,(0),null);
var defs = cljs.core.nth.call(null,vec__42762,(1),null);
var _STAR_env_STAR_42765 = orcl.analyzer.vars._STAR_env_STAR_;
orcl.analyzer.vars._STAR_env_STAR_ = cljs.core.merge.call(null,orcl.analyzer.vars._STAR_env_STAR_,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28003__auto__ = ((function (_STAR_env_STAR_42765,vec__42762,ast_SINGLEQUOTE_,defs,G__42760,G__42760__$1,decl,G__42754,G__42754__$1){
return (function orcl$analyzer$analyze_env_$_iter__42766(s__42767){
return (new cljs.core.LazySeq(null,((function (_STAR_env_STAR_42765,vec__42762,ast_SINGLEQUOTE_,defs,G__42760,G__42760__$1,decl,G__42754,G__42754__$1){
return (function (){
var s__42767__$1 = s__42767;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42767__$1);
if(temp__4657__auto__){
var s__42767__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42767__$2)){
var c__28001__auto__ = cljs.core.chunk_first.call(null,s__42767__$2);
var size__28002__auto__ = cljs.core.count.call(null,c__28001__auto__);
var b__42769 = cljs.core.chunk_buffer.call(null,size__28002__auto__);
if((function (){var i__42768 = (0);
while(true){
if((i__42768 < size__28002__auto__)){
var map__42770 = cljs.core._nth.call(null,c__28001__auto__,i__42768);
var map__42770__$1 = ((((!((map__42770 == null)))?((((map__42770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42770.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42770):map__42770);
var name = cljs.core.get.call(null,map__42770__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var sha = cljs.core.get.call(null,map__42770__$1,new cljs.core.Keyword(null,"sha","sha",-950317251));
var usages = cljs.core.get.call(null,map__42770__$1,new cljs.core.Keyword(null,"usages","usages",-1094756749));
cljs.core.chunk_append.call(null,b__42769,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"id","id",-1388402092),sha,new cljs.core.Keyword(null,"usages","usages",-1094756749),usages], null)], null));

var G__42776 = (i__42768 + (1));
i__42768 = G__42776;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42769),orcl$analyzer$analyze_env_$_iter__42766.call(null,cljs.core.chunk_rest.call(null,s__42767__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42769),null);
}
} else {
var map__42772 = cljs.core.first.call(null,s__42767__$2);
var map__42772__$1 = ((((!((map__42772 == null)))?((((map__42772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42772.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42772):map__42772);
var name = cljs.core.get.call(null,map__42772__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var sha = cljs.core.get.call(null,map__42772__$1,new cljs.core.Keyword(null,"sha","sha",-950317251));
var usages = cljs.core.get.call(null,map__42772__$1,new cljs.core.Keyword(null,"usages","usages",-1094756749));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"id","id",-1388402092),sha,new cljs.core.Keyword(null,"usages","usages",-1094756749),usages], null)], null),orcl$analyzer$analyze_env_$_iter__42766.call(null,cljs.core.rest.call(null,s__42767__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_env_STAR_42765,vec__42762,ast_SINGLEQUOTE_,defs,G__42760,G__42760__$1,decl,G__42754,G__42754__$1))
,null,null));
});})(_STAR_env_STAR_42765,vec__42762,ast_SINGLEQUOTE_,defs,G__42760,G__42760__$1,decl,G__42754,G__42754__$1))
;
return iter__28003__auto__.call(null,defs);
})()));

try{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"defs-group","defs-group",-1605838115),new cljs.core.Keyword(null,"defs","defs",1398449717),defs,new cljs.core.Keyword(null,"expr","expr",745722291),orcl.analyzer.analyze_env.call(null,ast_SINGLEQUOTE_)], null);
}finally {orcl.analyzer.vars._STAR_env_STAR_ = _STAR_env_STAR_42765;
}
break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42760__$1)].join('')));

}

break;
case "call":
var ast_SINGLEQUOTE_ = cljs.core.assoc.call(null,cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"target","target",253001721),orcl.analyzer.analyze_env),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,orcl.analyzer.analyze_env,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast)));
orcl.analyzer.check_call_BANG_.call(null,ast_SINGLEQUOTE_);

var s = cljs.core.get_in.call(null,ast_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"source","source",-433931539)], null));
if(cljs.core.truth_((function (){var and__27183__auto__ = orcl.analyzer._STAR_tail_pos_STAR_;
if(cljs.core.truth_(and__27183__auto__)){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(s))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(orcl.analyzer._STAR_tail_pos_STAR_)));
} else {
return and__27183__auto__;
}
})())){
return cljs.core.assoc.call(null,ast_SINGLEQUOTE_,new cljs.core.Keyword(null,"tail-pos","tail-pos",1500172733),orcl.analyzer._STAR_tail_pos_STAR_);
} else {
return ast_SINGLEQUOTE_;
}

break;
case "var":
var temp__4655__auto__ = cljs.core.get.call(null,orcl.analyzer.vars._STAR_env_STAR_,new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(temp__4655__auto__)){
var source = temp__4655__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(source))){
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"usages","usages",-1094756749).cljs$core$IFn$_invoke$arity$1(source),cljs.core.inc);
} else {
}

return cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.dissoc.call(null,source,new cljs.core.Keyword(null,"usages","usages",-1094756749)));
} else {
return orcl.utils.todo_exception.call(null);
}

break;
default:
return orcl.utils.ast_walk.call(null,orcl.analyzer.analyze_env,cljs.core.identity,ast);

}
});
orcl.analyzer.analyze_stage2 = (function orcl$analyzer$analyze_stage2(ast){
var set_locals = (function (ast__$1){
return cljs.core.assoc.call(null,ast__$1,new cljs.core.Keyword(null,"locals","locals",535295783),(function (){var G__42778 = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(ast__$1);
var G__42778__$1 = (((G__42778 instanceof cljs.core.Keyword))?G__42778.fqn:null);
switch (G__42778__$1) {
case "otherwise":
case "parallel":
return clojure.set.union.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(ast__$1)),new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(ast__$1)));

break;
case "sequential":
case "pruning":
return clojure.set.difference.call(null,clojure.set.union.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(ast__$1)),new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(ast__$1))),orcl.analyzer.patterns.pattern_bindings.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(ast__$1)));

break;
case "normalized-conditional":
return clojure.set.union.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(ast__$1)),new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(ast__$1)),new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(ast__$1)));

break;
case "field-access":
case "call":
return cljs.core.apply.call(null,clojure.set.union,cljs.core.get_in.call(null,ast__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"locals","locals",535295783)], null)),cljs.core.map.call(null,new cljs.core.Keyword(null,"locals","locals",535295783),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast__$1)));

break;
case "tuple":
case "list":
return cljs.core.apply.call(null,clojure.set.union,cljs.core.map.call(null,new cljs.core.Keyword(null,"locals","locals",535295783),new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(ast__$1)));

break;
case "record":
return cljs.core.apply.call(null,clojure.set.union,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"locals","locals",535295783),cljs.core.second),new cljs.core.Keyword(null,"pairs","pairs",614609779).cljs$core$IFn$_invoke$arity$1(ast__$1)));

break;
case "var":
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"site","site",-1852581499),null,new cljs.core.Keyword(null,"def","def",-1043430536),null], null), null).call(null,cljs.core.get_in.call(null,ast__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"type","type",1174270348)], null))))){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(ast__$1)]);
}

break;
case "defs-group":
return cljs.core.set.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"locals","locals",535295783),new cljs.core.Keyword(null,"defs","defs",1398449717).cljs$core$IFn$_invoke$arity$1(ast__$1)));

break;
case "def":
return cljs.core.set.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"locals","locals",535295783),new cljs.core.Keyword(null,"instances","instances",-335364781).cljs$core$IFn$_invoke$arity$1(ast__$1)));

break;
case "def-instance":
return cljs.core.apply.call(null,clojure.set.difference,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ast__$1)),cljs.core.map.call(null,orcl.analyzer.patterns.pattern_bindings,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ast__$1)));

break;
case "const":
case "stop":
return cljs.core.PersistentHashSet.EMPTY;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42778__$1)].join('')));

}
})());
});
var remove_unused = ((function (set_locals){
return (function (ast__$1){
var G__42779 = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(ast__$1);
var G__42779__$1 = (((G__42779 instanceof cljs.core.Keyword))?G__42779.fqn:null);
switch (G__42779__$1) {
case "def":
return cljs.core.update.call(null,ast__$1,new cljs.core.Keyword(null,"usages","usages",-1094756749),cljs.core.deref);

break;
case "defs-group":
var in_use = cljs.core.filterv.call(null,((function (G__42779,G__42779__$1,set_locals){
return (function (p1__42777_SHARP_){
return (new cljs.core.Keyword(null,"usages","usages",-1094756749).cljs$core$IFn$_invoke$arity$1(p1__42777_SHARP_) > (0));
});})(G__42779,G__42779__$1,set_locals))
,new cljs.core.Keyword(null,"defs","defs",1398449717).cljs$core$IFn$_invoke$arity$1(ast__$1));
if(cljs.core.truth_(cljs.core.not_empty.call(null,in_use))){
return cljs.core.assoc.call(null,ast__$1,new cljs.core.Keyword(null,"defs","defs",1398449717),in_use);
} else {
return new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(ast__$1);
}

break;
default:
return ast__$1;

}
});})(set_locals))
;
return orcl.utils.ast_postwalk.call(null,cljs.core.comp.call(null,set_locals,remove_unused),ast);
});
orcl.analyzer.analyze = (function orcl$analyzer$analyze(var_args){
var G__42783 = arguments.length;
switch (G__42783) {
case 1:
return orcl.analyzer.analyze.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return orcl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

orcl.analyzer.analyze.cljs$core$IFn$_invoke$arity$1 = (function (ast){
return orcl.analyzer.analyze.call(null,ast,orcl.analyzer.prelude_env);
});

orcl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (ast,env){
var _STAR_env_STAR_42784 = orcl.analyzer.vars._STAR_env_STAR_;
var _STAR_tail_pos_STAR_42785 = orcl.analyzer._STAR_tail_pos_STAR_;
orcl.analyzer.vars._STAR_env_STAR_ = env;

orcl.analyzer._STAR_tail_pos_STAR_ = null;

try{var ast_SINGLEQUOTE_ = orcl.analyzer.analyze_env.call(null,ast);
return orcl.analyzer.analyze_stage2.call(null,ast_SINGLEQUOTE_);
}finally {orcl.analyzer._STAR_tail_pos_STAR_ = _STAR_tail_pos_STAR_42785;

orcl.analyzer.vars._STAR_env_STAR_ = _STAR_env_STAR_42784;
}});

orcl.analyzer.analyze.cljs$lang$maxFixedArity = 2;

orcl.analyzer.full = cljs.core.comp.call(null,orcl.analyzer.analyze,orcl.analyzer.with_sha,orcl.analyzer.normalize);

//# sourceMappingURL=analyzer.js.map
