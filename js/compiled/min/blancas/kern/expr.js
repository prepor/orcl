// Compiled by ClojureScript 1.9.908 {}
goog.provide('blancas.kern.expr');
goog.require('cljs.core');
goog.require('blancas.kern.core');
goog.require('blancas.kern.i18n');
goog.require('blancas.kern.lexer.c_style');
/**
 * Parses p; as long as there is a binary operator op, reads the op and
 * another instance of p, then applies the operator on both values.
 * The operator associates to the left.
 */
blancas.kern.expr.chainl1 = (function blancas$kern$expr$chainl1(p,op){
var rest = (function blancas$kern$expr$chainl1_$_rest(a){
return blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,op,(function (f){
return blancas.kern.core._GT__GT__EQ_.call(null,p,(function (b){
return blancas$kern$expr$chainl1_$_rest.call(null,f.call(null,a,b));
}));
})),blancas.kern.core.return$.call(null,a));
});
return blancas.kern.core._GT__GT__EQ_.call(null,p,(function (a){
return rest.call(null,a);
}));
});
/**
 * Parses a value or a sequence or values separated by a binary operator.
 * If there's no initial value, defaults to a. Associates to the left.
 */
blancas.kern.expr.chainl = (function blancas$kern$expr$chainl(p,op,a){
return blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.expr.chainl1.call(null,p,op),blancas.kern.core.return$.call(null,a));
});
/**
 * Parses p; as long as there is a binary operator op, reads the op and
 * calls itself to compute the rest of the expression, then it applies
 * the operator on both values. The operator associates to the right.
 */
blancas.kern.expr.chainr1 = (function blancas$kern$expr$chainr1(p,op){
return blancas.kern.core._GT__GT__EQ_.call(null,p,(function (a){
return blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,op,(function (f){
return blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.expr.chainr1.call(null,p,op),(function (b){
return blancas.kern.core.return$.call(null,f.call(null,a,b));
}));
})),blancas.kern.core.return$.call(null,a));
}));
});
/**
 * Parses a value or a sequence or values with infix binary operators.
 * If there's no initial value, defaults to a. Associates to the right.
 */
blancas.kern.expr.chainr = (function blancas$kern$expr$chainr(p,op,a){
return blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.expr.chainr1.call(null,p,op),blancas.kern.core.return$.call(null,a));
});
/**
 * Parses p; as long as there is a binary operator op, reads the op and
 * another p, then makes an AST node with the operator on both values.
 * The operator associates to the left.
 */
blancas.kern.expr.chainl1_STAR_ = (function blancas$kern$expr$chainl1_STAR_(tok,p,op){
var rest = (function blancas$kern$expr$chainl1_STAR__$_rest(a){
return blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,op,(function (f){
return blancas.kern.core._GT__GT__EQ_.call(null,p,(function (b){
return blancas$kern$expr$chainl1_STAR__$_rest.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"token","token",-1211463215),tok,new cljs.core.Keyword(null,"op","op",-1882987955),f,new cljs.core.Keyword(null,"left","left",-399115937),a,new cljs.core.Keyword(null,"right","right",-452581833),b], null));
}));
})),blancas.kern.core.return$.call(null,a));
});
return blancas.kern.core._GT__GT__EQ_.call(null,p,(function (a){
return rest.call(null,a);
}));
});
/**
 * Parses a value or a sequence or values separated by a binary operator.
 * If there's no initial value, defaults to a. Associates to the left.
 * The resulting value is an AST node.
 */
blancas.kern.expr.chainl_STAR_ = (function blancas$kern$expr$chainl_STAR_(tok,p,op,a){
return blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.expr.chainl1_STAR_.call(null,tok,p,op),blancas.kern.core.return$.call(null,a));
});
/**
 * Parses p; as long as there is a binary operator op, reads the op and
 * calls itself to make the rest of the expression AST, then it makes
 * an AST node with the operator on both values. The operator associates
 * to the right.
 */
blancas.kern.expr.chainr1_STAR_ = (function blancas$kern$expr$chainr1_STAR_(tok,p,op){
return blancas.kern.core._GT__GT__EQ_.call(null,p,(function (a){
return blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,op,(function (f){
return blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.expr.chainr1_STAR_.call(null,tok,p,op),(function (b){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"token","token",-1211463215),tok,new cljs.core.Keyword(null,"op","op",-1882987955),f,new cljs.core.Keyword(null,"left","left",-399115937),a,new cljs.core.Keyword(null,"right","right",-452581833),b], null));
}));
})),blancas.kern.core.return$.call(null,a));
}));
});
/**
 * Parses a value or a sequence or values with infix binary operators.
 * If there's no initial value, defaults to a. Associates to the right.
 * The operator associates to the right.
 */
blancas.kern.expr.chainr_STAR_ = (function blancas$kern$expr$chainr_STAR_(tok,p,op,a){
return blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.expr.chainr1_STAR_.call(null,tok,p,op),blancas.kern.core.return$.call(null,a));
});
/**
 * Parses zero or more operators op before an operand p. It applies
 * the parsed functions to the operand in reverse order of parsing.
 */
blancas.kern.expr.prefix1 = (function blancas$kern$expr$prefix1(p,op){
return blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,op,(function (f){
return blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.expr.prefix1.call(null,p,op),(function (a){
return blancas.kern.core.return$.call(null,f.call(null,a));
}));
})),blancas.kern.core._GT__GT__EQ_.call(null,p,(function (a){
return blancas.kern.core.return$.call(null,a);
})));
});
/**
 * Like prefix1, but both the operator and operand are optional.
 * If no operand is given, it returns the default value a.
 */
blancas.kern.expr.prefix = (function blancas$kern$expr$prefix(p,op,a){
return blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.expr.prefix1.call(null,p,op),blancas.kern.core.return$.call(null,a));
});
/**
 * Parses zero or more operators op before an operand p. It builds an
 * AST node for each parsed function, where the operand is a node
 * for a value or a further application of a prefix operator.
 */
blancas.kern.expr.prefix1_STAR_ = (function blancas$kern$expr$prefix1_STAR_(tok,p,op){
return blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,op,(function (f){
return blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.expr.prefix1_STAR_.call(null,tok,p,op),(function (a){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),tok,new cljs.core.Keyword(null,"op","op",-1882987955),f,new cljs.core.Keyword(null,"right","right",-452581833),a], null));
}));
})),blancas.kern.core._GT__GT__EQ_.call(null,p,(function (a){
return blancas.kern.core.return$.call(null,a);
})));
});
/**
 * Like prefix1*, but both the operator and operand are optional.
 * If no operand is given, it returns the default value a.
 */
blancas.kern.expr.prefix_STAR_ = (function blancas$kern$expr$prefix_STAR_(tok,p,op,a){
return blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.expr.prefix1_STAR_.call(null,tok,p,op),blancas.kern.core.return$.call(null,a));
});
/**
 * Parses an operand p followed by zero or more operators. It applies the
 * parsed functions to the operand or the result of a previous application.
 */
blancas.kern.expr.postfix1 = (function blancas$kern$expr$postfix1(p,op){
var rest = (function blancas$kern$expr$postfix1_$_rest(a){
return blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,op,(function (f){
return blancas$kern$expr$postfix1_$_rest.call(null,f.call(null,a));
})),blancas.kern.core.return$.call(null,a));
});
return blancas.kern.core._GT__GT__EQ_.call(null,p,(function (a){
return rest.call(null,a);
}));
});
/**
 * Like postfix1, but both the operator and operand are optional.
 * If no operand is given, it returns the default value a.
 */
blancas.kern.expr.postfix = (function blancas$kern$expr$postfix(p,op,a){
return blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.expr.postfix1.call(null,p,op),blancas.kern.core.return$.call(null,a));
});
/**
 * Parses an operand p followed by zero or more operators op. It builds
 * an AST node for each parsed function, where the operand is a node
 * for a value or a previous  application of a postfix operator.
 */
blancas.kern.expr.postfix1_STAR_ = (function blancas$kern$expr$postfix1_STAR_(tok,p,op){
var rest = (function blancas$kern$expr$postfix1_STAR__$_rest(a){
return blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,op,(function (f){
return blancas$kern$expr$postfix1_STAR__$_rest.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),tok,new cljs.core.Keyword(null,"op","op",-1882987955),f,new cljs.core.Keyword(null,"left","left",-399115937),a], null));
})),blancas.kern.core.return$.call(null,a));
});
return blancas.kern.core._GT__GT__EQ_.call(null,p,(function (a){
return rest.call(null,a);
}));
});
/**
 * Like postfix1*, but both the operator and operand are optional.
 * If no operand is given, it returns the default value a.
 */
blancas.kern.expr.postfix_STAR_ = (function blancas$kern$expr$postfix_STAR_(tok,p,op,a){
return blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.expr.postfix1_STAR_.call(null,tok,p,op),blancas.kern.core.return$.call(null,a));
});
/**
 * Parses the POW operator.
 */
blancas.kern.expr.pow_op = blancas.kern.core._GT__GT_.call(null,blancas.kern.lexer.c_style.sym.call(null,"^"),blancas.kern.core.return$.call(null,(function (p1__42306_SHARP_,p2__42307_SHARP_){
return Math.pow(p1__42306_SHARP_,p2__42307_SHARP_);
})));
/**
 * Unary prefix operator: logical not or numeric minus.
 */
blancas.kern.expr.uni_op = blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.lexer.c_style.one_of.call(null,"!-"),(function (op){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 2, ["!",cljs.core.not,"-",cljs.core._], null).call(null,op));
}));
/**
 * Multiplicative operator: multiplication, division, or modulo.
 */
blancas.kern.expr.mul_op = blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.lexer.c_style.one_of.call(null,"*/%"),(function (op){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 3, ["*",cljs.core._STAR_,"/",cljs.core.quot,"%",cljs.core.mod], null).call(null,op));
}));
/**
 * Additive operator: addition or subtraction.
 */
blancas.kern.expr.add_op = blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.lexer.c_style.one_of.call(null,"+-"),(function (op){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 2, ["+",cljs.core._PLUS_,"-",cljs.core._], null).call(null,op));
}));
/**
 * Parses one of the relational operators.
 */
blancas.kern.expr.rel_op = blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.lexer.c_style.token.call(null,"==","!=",">=","<=",">","<"),(function (op){
return blancas.kern.core.return$.call(null,new cljs.core.PersistentArrayMap(null, 6, ["==",cljs.core._EQ_,"!=",cljs.core.not_EQ_,">=",cljs.core._GT__EQ_,"<=",cljs.core._LT__EQ_,">",cljs.core._GT_,"<",cljs.core._LT_], null).call(null,op));
}));
/**
 * Parses the logical AND operator.
 */
blancas.kern.expr.and_op = blancas.kern.core._GT__GT_.call(null,blancas.kern.lexer.c_style.token.call(null,"&&"),blancas.kern.core.return$.call(null,(function (p1__42308_SHARP_,p2__42309_SHARP_){
var and__27183__auto__ = p1__42308_SHARP_;
if(cljs.core.truth_(and__27183__auto__)){
return p2__42309_SHARP_;
} else {
return and__27183__auto__;
}
})));
/**
 * Parses the logical OR operator.
 */
blancas.kern.expr.or_op = blancas.kern.core._GT__GT_.call(null,blancas.kern.lexer.c_style.token.call(null,"||"),blancas.kern.core.return$.call(null,(function (p1__42310_SHARP_,p2__42311_SHARP_){
var or__27195__auto__ = p1__42310_SHARP_;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return p2__42311_SHARP_;
}
})));

//# sourceMappingURL=expr.js.map
