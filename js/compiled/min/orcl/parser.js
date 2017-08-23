// Compiled by ClojureScript 1.9.908 {}
goog.provide('orcl.parser');
goog.require('cljs.core');
goog.require('blancas.kern.core');
goog.require('blancas.kern.expr');
goog.require('orcl.lexer');
goog.require('orcl.parser.utils');
goog.require('cljs.pprint');
orcl.parser.value = blancas.kern.core._LT__BAR__GT_.call(null,orcl.lexer.bool_lit,blancas.kern.core._GT__GT_.call(null,orcl.lexer.word.call(null,"signal"),blancas.kern.core.return$.call(null,new cljs.core.Keyword(null,"signal","signal",-1984951589))),orcl.lexer.string_lit,orcl.lexer.float_lit,orcl.lexer.dec_lit,blancas.kern.core._GT__GT_.call(null,orcl.lexer.nil_lit,blancas.kern.core.return$.call(null,new cljs.core.Keyword(null,"null","null",-180137709))));
orcl.parser.base_pattern = blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,orcl.parser.value,(function (x){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"value","value",305978217),x], null));
})),blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.sym.call(null,"_"),(function (_){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"wildcard","wildcard",-622473020)], null));
})),blancas.kern.core._LT__COLON__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.identifier,(function (target){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.parser.utils.tuple_of.call(null,(function (G__42316){
return orcl.parser.pattern.call(null,G__42316);
})),(function (args){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}));
}))),blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.identifier,(function (var$){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"var","var",-769682797),var$], null));
})),blancas.kern.core._GT__GT__EQ_.call(null,orcl.parser.utils.tuple_of.call(null,(function (G__42317){
return orcl.parser.pattern.call(null,G__42317);
})),(function (patterns){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword(null,"patterns","patterns",1164082024),patterns], null));
})),blancas.kern.core._GT__GT__EQ_.call(null,orcl.parser.utils.list_of.call(null,(function (G__42318){
return orcl.parser.pattern.call(null,G__42318);
})),(function (patterns){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"patterns","patterns",1164082024),patterns], null));
})),blancas.kern.core._GT__GT__EQ_.call(null,orcl.parser.utils.record_of.call(null,(function (G__42319){
return orcl.parser.pattern.call(null,G__42319);
})),(function (pairs){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"record","record",-779106859),new cljs.core.Keyword(null,"pairs","pairs",614609779),pairs], null));
})));
orcl.parser.cons_pattern = blancas.kern.expr.chainr1.call(null,orcl.parser.base_pattern,blancas.kern.core._GT__GT_.call(null,orcl.lexer.token.call(null,":"),blancas.kern.core.return$.call(null,(function (l,r){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cons","cons",-885083073),new cljs.core.Keyword(null,"head","head",-771383919),l,new cljs.core.Keyword(null,"tail","tail",-1146023564),r], null);
}))));
orcl.parser.as_pattern = orcl.parser.utils.maybe_or_left.call(null,orcl.parser.cons_pattern,blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.word.call(null,"as"),(function (_){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.identifier,(function (var$){
return blancas.kern.core.return$.call(null,(function (pattern){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern,new cljs.core.Keyword(null,"alias","alias",-2039751630),var$], null);
}));
}));
})));
orcl.parser.pattern = orcl.parser.as_pattern;
orcl.parser.combinator_without_pattern = (function orcl$parser$combinator_without_pattern(node,c){
return blancas.kern.core._GT__GT_.call(null,orcl.lexer.sym.call(null,c),blancas.kern.core.return$.call(null,(function (l,r){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"left","left",-399115937),l,new cljs.core.Keyword(null,"right","right",-452581833),r], null);
})));
});
orcl.parser.combinator_with_pattern = (function orcl$parser$combinator_with_pattern(node,c){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.sym.call(null,c),(function (_){
return blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core.optional.call(null,orcl.parser.pattern),(function (v){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.sym.call(null,c),(function (___$1){
return blancas.kern.core.return$.call(null,(function (l,r){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"pattern","pattern",242135423),(function (){var or__27195__auto__ = v;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"wildcard","wildcard",-622473020)], null);
}
})(),new cljs.core.Keyword(null,"left","left",-399115937),l,new cljs.core.Keyword(null,"right","right",-452581833),r], null);
}));
}));
}));
}));
});
orcl.parser.base = blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,orcl.parser.value,(function (v){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"value","value",305978217),v], null));
})),blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core.get_position,(function (p){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.identifier,(function (v){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"pos","pos",-864607220),p], null));
}));
})),blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core.get_position,(function (p){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.sym.call(null,"_"),(function (v){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083)], null));
}));
})),blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.word.call(null,"stop"),(function (v){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"stop","stop",-2140911342)], null));
})),blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core.get_position,(function (p){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.parser.utils.list_of.call(null,(function (G__42320){
return orcl.parser.expr.call(null,G__42320);
})),(function (v){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"values","values",372645556),v,new cljs.core.Keyword(null,"pos","pos",-864607220),p], null));
}));
})),blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core.get_position,(function (p){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.parser.utils.record_of.call(null,(function (G__42321){
return orcl.parser.expr.call(null,G__42321);
})),(function (v){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"record","record",-779106859),new cljs.core.Keyword(null,"pairs","pairs",614609779),v,new cljs.core.Keyword(null,"pos","pos",-864607220),p], null));
}));
})),blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core.get_position,(function (p){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.parser.utils.tuple_of.call(null,(function (G__42322){
return orcl.parser.expr.call(null,G__42322);
})),(function (v){
return blancas.kern.core.return$.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,v),(1)))?cljs.core.first.call(null,v):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword(null,"values","values",372645556),v,new cljs.core.Keyword(null,"pos","pos",-864607220),p], null)));
}));
})));
orcl.parser.argument_op = blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.dot_tok,(function (_){
return blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core.get_position,(function (p){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.identifier,(function (f){
return blancas.kern.core.return$.call(null,(function (l){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"field-access","field-access",526206733),new cljs.core.Keyword(null,"target","target",253001721),l,new cljs.core.Keyword(null,"field","field",-1302436500),f,new cljs.core.Keyword(null,"pos","pos",-864607220),p], null);
}));
}));
}));
})),blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.sym.call(null,"?"),(function (_){
return blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core.get_position,(function (p){
return blancas.kern.core.return$.call(null,(function (l){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"dereference","dereference",1033470779),new cljs.core.Keyword(null,"target","target",253001721),l,new cljs.core.Keyword(null,"pos","pos",-864607220),p], null);
}));
}));
})),blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core.get_position,(function (p){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.parens.call(null,orcl.lexer.comma_sep.call(null,(function (G__42323){
return orcl.parser.expr.call(null,G__42323);
}))),(function (v){
return blancas.kern.core.return$.call(null,(function (l){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),l,new cljs.core.Keyword(null,"args","args",1315556576),v,new cljs.core.Keyword(null,"pos","pos",-864607220),p], null);
}));
}));
})));
orcl.parser.call = blancas.kern.expr.postfix1.call(null,orcl.parser.base,orcl.parser.argument_op);
orcl.parser.unary = blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._LT__COLON__GT_.call(null,blancas.kern.core._GT__GT_.call(null,orcl.lexer.sym.call(null,"-"),blancas.kern.core._LT__BAR__GT_.call(null,orcl.lexer.float_lit,orcl.lexer.dec_lit))),(function (n){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"value","value",305978217),(- n)], null));
})),blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.one_of.call(null,"-~"),(function (op){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.parser.call,(function (e){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"var","var",-769682797),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')], null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)], null));
}));
})),orcl.parser.call);
orcl.parser.expn_op = orcl.parser.utils.right_assoc_infix.call(null,orcl.parser.unary,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [orcl.lexer.token.call(null,"**")], null));
orcl.parser.mult_op = orcl.parser.utils.left_assoc_infix.call(null,orcl.parser.expn_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [orcl.lexer.mult_tok,orcl.lexer.div_tok,orcl.lexer.token.call(null,"%")], null));
orcl.parser.additional_op = orcl.parser.utils.left_assoc_infix.call(null,orcl.parser.mult_op,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [orcl.lexer.token.call(null,"-"),orcl.lexer.token.call(null,"+")], null));
orcl.parser.cons_op = orcl.parser.utils.right_assoc_infix.call(null,orcl.parser.additional_op,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [orcl.lexer.cons_tok], null));
orcl.parser.relational_op = orcl.parser.utils.non_assoc_infix.call(null,orcl.parser.cons_op,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [orcl.lexer.token.call(null,"<:"),orcl.lexer.token.call(null,":>"),orcl.lexer.token.call(null,"<="),orcl.lexer.token.call(null,">="),orcl.lexer.token.call(null,"="),orcl.lexer.token.call(null,"/=")], null));
orcl.parser.logical_op = orcl.parser.utils.left_assoc_infix.call(null,orcl.parser.relational_op,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [orcl.lexer.token.call(null,"||"),orcl.lexer.token.call(null,"&&")], null));
orcl.parser.assign_op = orcl.parser.utils.non_assoc_infix.call(null,orcl.parser.logical_op,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [orcl.lexer.token.call(null,":=")], null));
orcl.parser.sequential = blancas.kern.expr.chainr1.call(null,orcl.parser.assign_op,orcl.parser.combinator_with_pattern.call(null,new cljs.core.Keyword(null,"sequential","sequential",-1082983960),">"));
orcl.parser.parallel = blancas.kern.expr.chainl1.call(null,orcl.parser.sequential,orcl.parser.combinator_without_pattern.call(null,new cljs.core.Keyword(null,"parallel","parallel",-1863607128),"|"));
orcl.parser.pruning = blancas.kern.expr.chainl1.call(null,orcl.parser.parallel,orcl.parser.combinator_with_pattern.call(null,new cljs.core.Keyword(null,"pruning","pruning",-1224456546),"<"));
orcl.parser.otherwise = blancas.kern.expr.chainl1.call(null,orcl.parser.pruning,orcl.parser.combinator_without_pattern.call(null,new cljs.core.Keyword(null,"otherwise","otherwise",-1127537137),";"));
orcl.parser.guard = blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.word.call(null,"if"),(function (_){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.parens.call(null,(function (G__42324){
return orcl.parser.expr.call(null,G__42324);
})),(function (e){
return blancas.kern.core.return$.call(null,e);
}));
}));

/**
 * @interface
 */
orcl.parser.FileSystem = function(){};

orcl.parser.read_file = (function orcl$parser$read_file(this$,file){
if((!((this$ == null))) && (!((this$.orcl$parser$FileSystem$read_file$arity$2 == null)))){
return this$.orcl$parser$FileSystem$read_file$arity$2(this$,file);
} else {
var x__27878__auto__ = (((this$ == null))?null:this$);
var m__27879__auto__ = (orcl.parser.read_file[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,this$,file);
} else {
var m__27879__auto____$1 = (orcl.parser.read_file["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,this$,file);
} else {
throw cljs.core.missing_protocol.call(null,"FileSystem.read-file",this$);
}
}
}
});

orcl.parser.in_memory_file_system = (function orcl$parser$in_memory_file_system(m){
if(typeof orcl.parser.t_orcl$parser42325 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {orcl.parser.FileSystem}
 * @implements {cljs.core.IWithMeta}
*/
orcl.parser.t_orcl$parser42325 = (function (m,meta42326){
this.m = m;
this.meta42326 = meta42326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
orcl.parser.t_orcl$parser42325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42327,meta42326__$1){
var self__ = this;
var _42327__$1 = this;
return (new orcl.parser.t_orcl$parser42325(self__.m,meta42326__$1));
});

orcl.parser.t_orcl$parser42325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42327){
var self__ = this;
var _42327__$1 = this;
return self__.meta42326;
});

orcl.parser.t_orcl$parser42325.prototype.orcl$parser$FileSystem$ = cljs.core.PROTOCOL_SENTINEL;

orcl.parser.t_orcl$parser42325.prototype.orcl$parser$FileSystem$read_file$arity$2 = (function (this$,file){
var self__ = this;
var this$__$1 = this;
return self__.m.call(null,file);
});

orcl.parser.t_orcl$parser42325.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta42326","meta42326",244293801,null)], null);
});

orcl.parser.t_orcl$parser42325.cljs$lang$type = true;

orcl.parser.t_orcl$parser42325.cljs$lang$ctorStr = "orcl.parser/t_orcl$parser42325";

orcl.parser.t_orcl$parser42325.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"orcl.parser/t_orcl$parser42325");
});

orcl.parser.__GT_t_orcl$parser42325 = (function orcl$parser$in_memory_file_system_$___GT_t_orcl$parser42325(m__$1,meta42326){
return (new orcl.parser.t_orcl$parser42325(m__$1,meta42326));
});

}

return (new orcl.parser.t_orcl$parser42325(m,cljs.core.PersistentArrayMap.EMPTY));
});
orcl.parser.declarations = blancas.kern.core.many.call(null,(function (G__42328){
return orcl.parser.declaration.call(null,G__42328);
}));
orcl.parser.state_field = (function orcl$parser$state_field(s,kw){
return cljs.core.get_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),kw], null));
});
orcl.parser.include_declaration = blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.word.call(null,"include"),(function (_){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.string_lit,(function (sl){
return (function (s){
var file = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(orcl.parser.state_field.call(null,s,new cljs.core.Keyword("orcl.parser","current-file","orcl.parser/current-file",1526232276))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sl)].join('');
var body = orcl.parser.read_file.call(null,orcl.parser.state_field.call(null,s,new cljs.core.Keyword("orcl.parser","file-system","orcl.parser/file-system",1878754769)),file);
var parsed = blancas.kern.core.parse.call(null,orcl.parser.declarations,body,file,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword("orcl.parser","current-file","orcl.parser/current-file",1526232276),file));
if(cljs.core.truth_(new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(parsed))){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"include","include",153360230),new cljs.core.Keyword(null,"src","src",-1651076051),file,new cljs.core.Keyword(null,"declarations","declarations",1621100858),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(parsed)], null));
} else {
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"ok","ok",967785236),false,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(parsed));
}
});
}));
}));
orcl.parser.site_declaration = blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core.get_position,(function (p){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.word.call(null,"import"),(function (_){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.word.call(null,"site"),(function (___$1){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.identifier,(function (id){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.sym.call(null,"="),(function (___$2){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.string_lit,(function (sl){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"site","site",-1852581499),new cljs.core.Keyword(null,"name","name",1843675177),id,new cljs.core.Keyword(null,"definition","definition",-1198729982),sl,new cljs.core.Keyword(null,"pos","pos",-864607220),p], null));
}));
}));
}));
}));
}));
}));
orcl.parser.def_declaration = blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core.get_position,(function (p){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.word.call(null,"def"),(function (_){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.identifier,(function (id){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.parens.call(null,orcl.lexer.comma_sep.call(null,orcl.parser.pattern)),(function (p__$1){
return blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core.optional.call(null,orcl.parser.guard),(function (g){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.sym.call(null,"="),(function (___$1){
return blancas.kern.core._GT__GT__EQ_.call(null,(function (G__42329){
return orcl.parser.expr.call(null,G__42329);
}),(function (b){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"name","name",1843675177),id,new cljs.core.Keyword(null,"body","body",-2049205669),b,new cljs.core.Keyword(null,"params","params",710516235),p__$1,new cljs.core.Keyword(null,"guard","guard",-873147811),g], null));
}));
}));
}));
}));
}));
}));
}));
orcl.parser.val_declaration = blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core.get_position,(function (p){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.word.call(null,"val"),(function (_){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.parser.pattern,(function (pattern){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.sym.call(null,"="),(function (___$1){
return blancas.kern.core._GT__GT__EQ_.call(null,(function (G__42330){
return orcl.parser.expr.call(null,G__42330);
}),(function (ex){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern,new cljs.core.Keyword(null,"expr","expr",745722291),ex,new cljs.core.Keyword(null,"pos","pos",-864607220),p], null));
}));
}));
}));
}));
}));
orcl.parser.declaration = blancas.kern.core._LT__LT_.call(null,blancas.kern.core._LT__BAR__GT_.call(null,orcl.parser.val_declaration,orcl.parser.def_declaration,orcl.parser.site_declaration,orcl.parser.include_declaration),blancas.kern.core.optional.call(null,orcl.lexer.sym.call(null,"#")));
orcl.parser.with_declaration = blancas.kern.core._GT__GT__EQ_.call(null,orcl.parser.declaration,(function (decl){
return blancas.kern.core._GT__GT__EQ_.call(null,(function (G__42331){
return orcl.parser.expr.call(null,G__42331);
}),(function (expr){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"declaration","declaration",-1819933768),new cljs.core.Keyword(null,"decl","decl",-1498869485),decl,new cljs.core.Keyword(null,"expr","expr",745722291),expr], null));
}));
}));
orcl.parser.conditional = blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._GT__GT_.call(null,orcl.lexer.word.call(null,"if"),(function (G__42332){
return orcl.parser.expr.call(null,G__42332);
})),(function (test){
return blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._GT__GT_.call(null,orcl.lexer.word.call(null,"then"),(function (G__42333){
return orcl.parser.expr.call(null,G__42333);
})),(function (then){
return blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._GT__GT_.call(null,orcl.lexer.word.call(null,"else"),(function (G__42334){
return orcl.parser.expr.call(null,G__42334);
})),(function (else$){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"conditional","conditional",1441892799),new cljs.core.Keyword(null,"if","if",-458814265),test,new cljs.core.Keyword(null,"then","then",460598070),then,new cljs.core.Keyword(null,"else","else",-1508377146),else$], null));
}));
}));
}));
orcl.parser.lambda = blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core.get_position,(function (p){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.word.call(null,"lambda"),(function (_){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.parens.call(null,orcl.lexer.comma_sep.call(null,orcl.parser.pattern)),(function (params){
return blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core.optional.call(null,orcl.parser.guard),(function (g){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.sym.call(null,"="),(function (___$1){
return blancas.kern.core._GT__GT__EQ_.call(null,(function (G__42335){
return orcl.parser.expr.call(null,G__42335);
}),(function (b){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"lambda","lambda",-1483427225),new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"body","body",-2049205669),b,new cljs.core.Keyword(null,"guard","guard",-873147811),g,new cljs.core.Keyword(null,"pos","pos",-864607220),p], null));
}));
}));
}));
}));
}));
}));
orcl.parser.expr = blancas.kern.core._GT__GT_.call(null,orcl.lexer.trim,blancas.kern.core._LT__BAR__GT_.call(null,orcl.parser.otherwise,orcl.parser.with_declaration,orcl.parser.conditional,orcl.parser.lambda));
orcl.parser.program = blancas.kern.core._LT__LT_.call(null,orcl.parser.expr,blancas.kern.core.eof);
orcl.parser.parse = (function orcl$parser$parse(var_args){
var G__42337 = arguments.length;
switch (G__42337) {
case 1:
return orcl.parser.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return orcl.parser.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

orcl.parser.parse.cljs$core$IFn$_invoke$arity$1 = (function (s){
return orcl.parser.parse.call(null,s,orcl.parser.in_memory_file_system.call(null,cljs.core.PersistentArrayMap.EMPTY));
});

orcl.parser.parse.cljs$core$IFn$_invoke$arity$2 = (function (s,file_system){
var res = blancas.kern.core.parse.call(null,orcl.parser.program,s,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("orcl.parser","file-system","orcl.parser/file-system",1878754769),file_system], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(res))){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
} else {
cljs.pprint.pprint.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res)], null));

throw cljs.core.ex_info.call(null,"Parsing error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res)], null));
}
});

orcl.parser.parse.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=parser.js.map
