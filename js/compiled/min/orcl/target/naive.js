// Compiled by ClojureScript 1.9.908 {}
goog.provide('orcl.target.naive');
goog.require('cljs.core');
goog.require('orcl.target.naive.impl');
goog.require('orcl.target.naive.vars');
goog.require('cljs.js');
orcl.target.naive.pattern_bindings = (function orcl$target$naive$pattern_bindings(p){
var G__42372 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p);
var G__42372__$1 = (((G__42372 instanceof cljs.core.Keyword))?G__42372.fqn:null);
switch (G__42372__$1) {
case "var":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(p))], null);

break;
case "wildcard":
return cljs.core.PersistentVector.EMPTY;

break;
case "const":
return cljs.core.PersistentVector.EMPTY;

break;
case "record":
return cljs.core.mapcat.call(null,cljs.core.comp.call(null,orcl.target.naive.pattern_bindings,cljs.core.second),new cljs.core.Keyword(null,"pairs","pairs",614609779).cljs$core$IFn$_invoke$arity$1(p));

break;
case "list":
case "tuple":
return cljs.core.mapcat.call(null,orcl.target.naive.pattern_bindings,new cljs.core.Keyword(null,"patterns","patterns",1164082024).cljs$core$IFn$_invoke$arity$1(p));

break;
case "as":
return cljs.core.cons.call(null,cljs.core.symbol.call(null,new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(p)),orcl.target.naive.pattern_bindings.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(p)));

break;
case "cons":
return cljs.core.concat.call(null,orcl.target.naive.pattern_bindings.call(null,new cljs.core.Keyword(null,"head","head",-771383919).cljs$core$IFn$_invoke$arity$1(p)),orcl.target.naive.pattern_bindings.call(null,new cljs.core.Keyword(null,"tail","tail",-1146023564).cljs$core$IFn$_invoke$arity$1(p)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42372__$1)].join('')));

}
});
orcl.target.naive.sequential = (function orcl$target$naive$sequential(pattern,left,right){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pattern-extractor__42374__auto__","pattern-extractor__42374__auto__",585564702,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("orcl.target.naive.impl","pattern-extractor","orcl.target.naive.impl/pattern-extractor",1643976396,null)),(function (){var x__28057__auto__ = pattern;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pattern-checker__42375__auto__","pattern-checker__42375__auto__",-2072096049,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("orcl.target.naive.impl","pattern-checker","orcl.target.naive.impl/pattern-checker",715118079,null)),(function (){var x__28057__auto__ = pattern;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("orcl.target.naive.impl","sequential","orcl.target.naive.impl/sequential",-168759021,null)),(function (){var x__28057__auto__ = left;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42376__auto__","x__42376__auto__",875828655,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pattern-checker__42375__auto__","pattern-checker__42375__auto__",-2072096049,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42376__auto__","x__42376__auto__",875828655,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,orcl.target.naive.pattern_bindings.call(null,pattern)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pattern-extractor__42374__auto__","pattern-extractor__42374__auto__",585564702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42376__auto__","x__42376__auto__",875828655,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = right;
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
orcl.target.naive.pruning = (function orcl$target$naive$pruning(pattern,left,right){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,orcl.target.naive.pattern_bindings.call(null,pattern)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__28057__auto__ = orcl.target.naive.sequential.call(null,pattern,right,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,orcl.target.naive.pattern_bindings.call(null,pattern)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = left;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
orcl.target.naive.parallel = (function orcl$target$naive$parallel(left,right){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__28057__auto__ = left;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = right;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
orcl.target.naive.otherwise = (function orcl$target$naive$otherwise(left,right){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("orcl.target.naive.impl","otherwise","orcl.target.naive.impl/otherwise",-354771174,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = left;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = right;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
orcl.target.naive.conditional = (function orcl$target$naive$conditional(x,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
orcl.target.naive.defs_group = (function orcl$target$naive$defs_group(defs,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","letfn","cljs.core/letfn",-874326064,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,defs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
orcl.target.naive.compile_def = (function orcl$target$naive$compile_def(name,arity,instances){
var bindings = cljs.core.repeatedly.call(null,arity,cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.symbol.call(null,name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,bindings))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null)),cljs.core.mapcat.call(null,((function (bindings){
return (function (p__42380){
var map__42381 = p__42380;
var map__42381__$1 = ((((!((map__42381 == null)))?((((map__42381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42381):map__42381);
var instance = map__42381__$1;
var checker = cljs.core.get.call(null,map__42381__$1,new cljs.core.Keyword(null,"checker","checker",413112880));
var body = cljs.core.get.call(null,map__42381__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(instance)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,bindings))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = new cljs.core.Keyword(null,"checker","checker",413112880).cljs$core$IFn$_invoke$arity$1(instance);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(instance)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,bindings))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(instance);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())))], null);
});})(bindings))
,instances))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
orcl.target.naive.def_instance = (function orcl$target$naive$def_instance(params,body){
var bindings = cljs.core.repeatedly.call(null,cljs.core.count.call(null,params),cljs.core.gensym);
var extractors = cljs.core.repeatedly.call(null,cljs.core.count.call(null,params),cljs.core.gensym);
var checkers = cljs.core.repeatedly.call(null,cljs.core.count.call(null,params),cljs.core.gensym);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,bindings)))),new cljs.core.Keyword(null,"checker","checker",413112880),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,checkers))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("orcl.target.naive.impl","pattern-checker","orcl.target.naive.impl/pattern-checker",715118079,null)),(function (){var x__28057__auto__ = params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"checker__42383__auto__","checker__42383__auto__",2102581288,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"v__42384__auto__","v__42384__auto__",-1801780471,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"checker__42383__auto__","checker__42383__auto__",2102581288,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"v__42384__auto__","v__42384__auto__",-1801780471,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",720641726,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,checkers))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,bindings))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,extractors))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("orcl.target.naive.impl","pattern-extractor","orcl.target.naive.impl/pattern-extractor",1643976396,null)),(function (){var x__28057__auto__ = params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (bindings,extractors,checkers){
return (function (binding,pattern,extractor){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,orcl.target.naive.pattern_bindings.call(null,pattern)),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = extractor;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = binding;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())))], null);
});})(bindings,extractors,checkers))
,bindings,params,extractors)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())))], null);
});
orcl.target.naive.compile_prelude_site = (function orcl$target$naive$compile_prelude_site(s){
var G__42385 = new cljs.core.Keyword(null,"definition","definition",-1198729982).cljs$core$IFn$_invoke$arity$1(s);
switch (G__42385) {
case "Ift":
return new cljs.core.Symbol("orcl.target.naive.impl","prelude-ift","orcl.target.naive.impl/prelude-ift",-479629724,null);

break;
case "Iff":
return new cljs.core.Symbol("orcl.target.naive.impl","prelude-iff","orcl.target.naive.impl/prelude-iff",-1577656854,null);

break;
default:
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",720641726,null)),(function (){var x__28057__auto__ = (function (){var G__42387 = new cljs.core.Keyword(null,"definition","definition",-1198729982).cljs$core$IFn$_invoke$arity$1(s);
switch (G__42387) {
case "Let":
return new cljs.core.Symbol("orcl.target.naive.impl","prelude-let","orcl.target.naive.impl/prelude-let",1866943786,null);

break;
case "+":
return new cljs.core.Symbol("orcl.target.naive.impl","prelude-plus","orcl.target.naive.impl/prelude-plus",-189383791,null);

break;
case "-":
return new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null);

break;
case "0-":
return new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null);

break;
case "*":
return new cljs.core.Symbol("cljs.core","*","cljs.core/*",-857794892,null);

break;
case "**":
return new cljs.core.Symbol("orcl.target.naive.impl","prelude-pow","orcl.target.naive.impl/prelude-pow",1800742699,null);

break;
case "/":
return new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null);

break;
case "%":
return new cljs.core.Symbol("cljs.core","rem","cljs.core/rem",-866786983,null);

break;
case "<:":
return new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null);

break;
case "<=":
return new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null);

break;
case ":>":
return new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null);

break;
case ">=":
return new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null);

break;
case "=":
return new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null);

break;
case "/=":
return new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null);

break;
case "~":
return new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null);

break;
case "&&":
return new cljs.core.Symbol("orcl.target.naive.impl","prelude-and","orcl.target.naive.impl/prelude-and",1663932239,null);

break;
case "||":
return new cljs.core.Symbol("orcl.target.naive.impl","prelude-or","orcl.target.naive.impl/prelude-or",228710687,null);

break;
case ":":
return new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42387)].join('')));

}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));

}
});
orcl.target.naive.compile_import_site = (function orcl$target$naive$compile_import_site(s){
var G__42390 = new cljs.core.Keyword(null,"definition","definition",-1198729982).cljs$core$IFn$_invoke$arity$1(s);
switch (G__42390) {
case "Coeffect":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",720641726,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("orcl.target.naive.impl","coeffect","orcl.target.naive.impl/coeffect",723892586,null)))));

break;
case "Cell":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",720641726,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("orcl.target.naive.impl","core-cell","orcl.target.naive.impl/core-cell",-240254812,null)))));

break;
case "Println":
return new cljs.core.Symbol("orcl.target.naive.impl","text-println","orcl.target.naive.impl/text-println",-1190853150,null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42390)].join('')));

}
});
orcl.target.naive.compile_primitive = (function orcl$target$naive$compile_primitive(ast){
var G__42392 = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(ast);
var G__42392__$1 = (((G__42392 instanceof cljs.core.Keyword))?G__42392.fqn:null);
switch (G__42392__$1) {
case "const":
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(ast);

break;
case "var":
var s = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(ast);
var G__42393 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(s);
var G__42393__$1 = (((G__42393 instanceof cljs.core.Keyword))?G__42393.fqn:null);
switch (G__42393__$1) {
case "site":
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"prelude","prelude",-138977836),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(s)))){
return orcl.target.naive.compile_prelude_site.call(null,s);
} else {
return orcl.target.naive.compile_import_site.call(null,s);
}

break;
case "def":
case "sequential":
case "pruning":
case "argument":
return cljs.core.symbol.call(null,new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(ast));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42393__$1)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42392__$1)].join('')));

}
});
orcl.target.naive.checked_call = (function orcl$target$naive$checked_call(target,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"target__42397__auto__","target__42397__auto__",425203407,null)),(function (){var x__28057__auto__ = orcl.target.naive.compile_primitive.call(null,target);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("orcl.target.naive.impl","pending","orcl.target.naive.impl/pending",-1639321523)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"target__42397__auto__","target__42397__auto__",425203407,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__42398__auto__","args__42398__auto__",1083951964,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,orcl.target.naive.compile_primitive,args)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null)),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null)),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__42396__42399__auto__","p1__42396__42399__auto__",1098178142,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("orcl.target.naive.impl","pending","orcl.target.naive.impl/pending",-1639321523)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p1__42396__42399__auto__","p1__42396__42399__auto__",1098178142,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__42398__auto__","args__42398__auto__",1083951964,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("orcl.target.naive.impl","pending","orcl.target.naive.impl/pending",-1639321523))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"target__42397__auto__","target__42397__auto__",425203407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__42398__auto__","args__42398__auto__",1083951964,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
});
orcl.target.naive.call = (function orcl$target$naive$call(target,args){
var G__42400 = cljs.core.get_in.call(null,target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"type","type",1174270348)], null));
var G__42400__$1 = (((G__42400 instanceof cljs.core.Keyword))?G__42400.fqn:null);
switch (G__42400__$1) {
case "def":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = orcl.target.naive.compile_primitive.call(null,target);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),cljs.core.map.call(null,orcl.target.naive.compile_primitive,args))));

break;
default:
return orcl.target.naive.checked_call.call(null,target,args);

}
});
orcl.target.naive.recur_call = (function orcl$target$naive$recur_call(args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),cljs.core.map.call(null,orcl.target.naive.compile_primitive,args))));
});
orcl.target.naive.compile = (function orcl$target$naive$compile(ast){
var G__42402 = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(ast);
var G__42402__$1 = (((G__42402 instanceof cljs.core.Keyword))?G__42402.fqn:null);
switch (G__42402__$1) {
case "pruning":
return orcl.target.naive.pruning.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(ast),orcl.target.naive.compile.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(ast)),orcl.target.naive.compile.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(ast)));

break;
case "sequential":
return orcl.target.naive.sequential.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(ast),orcl.target.naive.compile.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(ast)),orcl.target.naive.compile.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(ast)));

break;
case "otherwise":
return orcl.target.naive.otherwise.call(null,orcl.target.naive.compile.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(ast)),orcl.target.naive.compile.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(ast)));

break;
case "parallel":
return orcl.target.naive.parallel.call(null,orcl.target.naive.compile.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(ast)),orcl.target.naive.compile.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(ast)));

break;
case "normalized-conditional":
return orcl.target.naive.conditional.call(null,orcl.target.naive.compile_primitive.call(null,new cljs.core.Keyword(null,"if","if",-458814265).cljs$core$IFn$_invoke$arity$1(ast)),orcl.target.naive.compile_primitive.call(null,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(ast)),orcl.target.naive.compile_primitive.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(ast)));

break;
case "defs-group":
return orcl.target.naive.defs_group.call(null,cljs.core.map.call(null,orcl.target.naive.compile,new cljs.core.Keyword(null,"defs","defs",1398449717).cljs$core$IFn$_invoke$arity$1(ast)),orcl.target.naive.compile.call(null,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(ast)));

break;
case "def":
return orcl.target.naive.compile_def.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"arity","arity",-1808556135).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.map.call(null,orcl.target.naive.compile,new cljs.core.Keyword(null,"instances","instances",-335364781).cljs$core$IFn$_invoke$arity$1(ast)));

break;
case "def-instance":
return orcl.target.naive.def_instance.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ast),orcl.target.naive.compile.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ast)));

break;
case "call":
if(cljs.core.truth_(new cljs.core.Keyword(null,"tail-pos","tail-pos",1500172733).cljs$core$IFn$_invoke$arity$1(ast))){
return orcl.target.naive.recur_call.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return orcl.target.naive.call.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast));
}

break;
case "tuple":
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,orcl.target.naive.compile_primitive,new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(ast))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));

break;
case "list":
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),cljs.core.map.call(null,orcl.target.naive.compile_primitive,new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(ast)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));

break;
case "record":
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),cljs.core.mapcat.call(null,((function (G__42402,G__42402__$1){
return (function (p__42407){
var vec__42408 = p__42407;
var k = cljs.core.nth.call(null,vec__42408,(0),null);
var v = cljs.core.nth.call(null,vec__42408,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,orcl.target.naive.compile_primitive.call(null,v)], null);
});})(G__42402,G__42402__$1))
,new cljs.core.Keyword(null,"pairs","pairs",614609779).cljs$core$IFn$_invoke$arity$1(ast)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));

break;
case "field-access":
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28057__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__28057__auto__ = orcl.target.naive.compile_primitive.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),(function (){var x__28057__auto__ = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(ast);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})()))));

break;
case "stop":
return null;

break;
case "const":
case "var":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [orcl.target.naive.compile_primitive.call(null,ast)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42402__$1)].join('')));

}
});
orcl.target.naive.cljs_eval = (function orcl$target$naive$cljs_eval(program){
cljs.core.prn.call(null,"---EVAL",program);

return cljs.js.eval.call(null,cljs.js.empty_state.call(null),program,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null),(function (res){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
}));
});
orcl.target.naive.run = (function orcl$target$naive$run(var_args){
var G__42414 = arguments.length;
switch (G__42414) {
case 1:
return orcl.target.naive.run.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return orcl.target.naive.run.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

orcl.target.naive.run.cljs$core$IFn$_invoke$arity$1 = (function (program){
return orcl.target.naive.run.call(null,program,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
});

orcl.target.naive.run.cljs$core$IFn$_invoke$arity$3 = (function (program,state,internal){
var program_SINGLEQUOTE_ = cljs.core._conj.call(null,(function (){var x__28057__auto__ = cljs.core.list(new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),cljs.core.list(new cljs.core.Keyword(null,"require","require",-468001333),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"orcl.target.naive.impl","orcl.target.naive.impl",688617892,null)], null)));
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = program;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
var coeffects = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var internal__$1 = cljs.core.atom.call(null,internal);
var _STAR_state_STAR_42415 = orcl.target.naive.vars._STAR_state_STAR_;
orcl.target.naive.vars._STAR_state_STAR_ = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.atom.call(null,(0)),new cljs.core.Keyword(null,"realized","realized",-153188123),state,new cljs.core.Keyword(null,"coeffects","coeffects",497912985),coeffects,new cljs.core.Keyword(null,"internal","internal",-854870097),internal__$1,new cljs.core.Keyword(null,"rerun","rerun",-15982659),cljs.core.atom.call(null,false)], null);

try{var res = orcl.target.naive.cljs_eval.call(null,program);
if(cljs.core.truth_(cljs.core.deref.call(null,new cljs.core.Keyword(null,"rerun","rerun",-15982659).cljs$core$IFn$_invoke$arity$1(orcl.target.naive.vars._STAR_state_STAR_)))){
return orcl.target.naive.run.call(null,program,state,cljs.core.deref.call(null,internal__$1));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"values","values",372645556),cljs.core.filter.call(null,((function (res,_STAR_state_STAR_42415,program_SINGLEQUOTE_,coeffects,internal__$1){
return (function (p1__42412_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("orcl.target.naive.impl","pending","orcl.target.naive.impl/pending",-1639321523),p1__42412_SHARP_);
});})(res,_STAR_state_STAR_42415,program_SINGLEQUOTE_,coeffects,internal__$1))
,res),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),cljs.core.deref.call(null,coeffects)], null);
}
}finally {orcl.target.naive.vars._STAR_state_STAR_ = _STAR_state_STAR_42415;
}});

orcl.target.naive.run.cljs$lang$maxFixedArity = 3;

orcl.target.naive.unblock = (function orcl$target$naive$unblock(program,state,coeffect,value){
return orcl.target.naive.run.call(null,program,cljs.core.assoc.call(null,state,coeffect,value),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=naive.js.map
