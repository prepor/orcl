// Compiled by ClojureScript 1.9.908 {}
goog.provide('orcl.parser.utils');
goog.require('cljs.core');
goog.require('blancas.kern.core');
goog.require('blancas.kern.expr');
goog.require('orcl.lexer');
orcl.parser.utils.list_of = (function orcl$parser$utils$list_of(p){
return orcl.lexer.brackets.call(null,orcl.lexer.comma_sep.call(null,p));
});
orcl.parser.utils.tuple_of = (function orcl$parser$utils$tuple_of(p){
return orcl.lexer.parens.call(null,orcl.lexer.comma_sep1.call(null,p));
});
orcl.parser.utils.crackets = (function orcl$parser$utils$crackets(p){
return blancas.kern.core.between.call(null,orcl.lexer.token.call(null,"{."),orcl.lexer.token.call(null,".}"),orcl.lexer.lexeme.call(null,p));
});
orcl.parser.utils.record_entry = (function orcl$parser$utils$record_entry(p){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.identifier,(function (f){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.lexer.token.call(null,"="),(function (_){
return blancas.kern.core._GT__GT__EQ_.call(null,p,(function (e){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,e], null));
}));
}));
}));
});
orcl.parser.utils.record_of = (function orcl$parser$utils$record_of(p){
return orcl.parser.utils.crackets.call(null,orcl.lexer.comma_sep.call(null,orcl.lexer.lexeme.call(null,orcl.parser.utils.record_entry.call(null,p))));
});
orcl.parser.utils.choice_or_many = (function orcl$parser$utils$choice_or_many(xs){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,xs))){
return cljs.core.first.call(null,xs);
} else {
return cljs.core.apply.call(null,blancas.kern.core._LT__BAR__GT_,xs);
}
});
orcl.parser.utils.infix_op = (function orcl$parser$utils$infix_op(ops){
return blancas.kern.core._GT__GT__EQ_.call(null,orcl.parser.utils.choice_or_many.call(null,ops),(function (x){
return blancas.kern.core.return$.call(null,(function (l,r){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"var","var",-769682797),x], null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r], null)], null);
}));
}));
});
orcl.parser.utils.left_assoc_infix = (function orcl$parser$utils$left_assoc_infix(p,ops){
return blancas.kern.expr.chainl1.call(null,p,orcl.parser.utils.infix_op.call(null,ops));
});
orcl.parser.utils.right_assoc_infix = (function orcl$parser$utils$right_assoc_infix(p,ops){
return blancas.kern.expr.chainr1.call(null,p,orcl.parser.utils.infix_op.call(null,ops));
});
orcl.parser.utils.non_assoc_infix = (function orcl$parser$utils$non_assoc_infix(p,ops){
return blancas.kern.core._GT__GT__EQ_.call(null,p,(function (l){
return blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core.optional.call(null,blancas.kern.core._GT__GT__EQ_.call(null,orcl.parser.utils.choice_or_many.call(null,ops),(function (x){
return blancas.kern.core._GT__GT__EQ_.call(null,p,(function (r){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,r], null));
}));
}))),(function (opb){
if(cljs.core.truth_(opb)){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.first.call(null,opb)], null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,cljs.core.last.call(null,opb)], null)], null));
} else {
return blancas.kern.core.return$.call(null,l);
}
}));
}));
});
orcl.parser.utils.maybe_or_left = (function orcl$parser$utils$maybe_or_left(p,q){
return blancas.kern.core._GT__GT__EQ_.call(null,p,(function (l){
return blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,q,(function (r){
return blancas.kern.core.return$.call(null,r.call(null,l));
})),blancas.kern.core.return$.call(null,l));
}));
});

//# sourceMappingURL=utils.js.map
