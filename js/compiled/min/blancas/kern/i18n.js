// Compiled by ClojureScript 1.9.908 {}
goog.provide('blancas.kern.i18n');
goog.require('cljs.core');
blancas.kern.i18n.default$ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"oct-digit","oct-digit",468252641),new cljs.core.Keyword(null,"end-char","end-char",912903586),new cljs.core.Keyword(null,"upper","upper",246243906),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"esc-code-j","esc-code-j",145779396),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483),new cljs.core.Keyword(null,"letter","letter",-125811450),new cljs.core.Keyword(null,"esc-code-c","esc-code-c",453502246),new cljs.core.Keyword(null,"esc-code-b","esc-code-b",1044487655),new cljs.core.Keyword(null,"dec-lit","dec-lit",-1364231639),new cljs.core.Keyword(null,"comma","comma",1699024745),new cljs.core.Keyword(null,"end-string","end-string",-417901109),new cljs.core.Keyword(null,"float-lit","float-lit",1663609324),new cljs.core.Keyword(null,"string-lit","string-lit",1570344494),new cljs.core.Keyword(null,"char-lit","char-lit",762455694),new cljs.core.Keyword(null,"hex-lit","hex-lit",-448097198),new cljs.core.Keyword(null,"end-comment","end-comment",-88176909),new cljs.core.Keyword(null,"lower","lower",1120320821),new cljs.core.Keyword(null,"alpha-num","alpha-num",-124211883),new cljs.core.Keyword(null,"esc-code-h","esc-code-h",-50056298),new cljs.core.Keyword(null,"new-line","new-line",1060819447),new cljs.core.Keyword(null,"end-of","end-of",-370589573),new cljs.core.Keyword(null,"eof","eof",-489063237),new cljs.core.Keyword(null,"hex-digit","hex-digit",210179419),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"digit","digit",1612650493),new cljs.core.Keyword(null,"oct-lit","oct-lit",-1521077730)],["octal digit","end of character literal","uppercase letter","space","escaped code: b, t, n, f, r, ', \\, ooo, hhhh","whitespace","letter","escaped code: b, t, n, f, r, ', \\, ?, a, v, 0, ooo, uhhhh, xhh","escaped code: b, t, n, f, r, ', \\","decimal literal",", ","end of string literal","floating-point literal","string literal","character literal","hex literal","end of comment","lowercase letter","letter or digit","escaped code: b, t, n, f, r, ', \\, ?, a, v, 0, nnn, onnn, xnnnn","new line","end of ","end of input","hexadecimal digit","tab","digit","octal literal"]);
blancas.kern.i18n.default_fmt = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),(function (p1__28737_SHARP_){
return ["unexpected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28737_SHARP_)].join('');
}),new cljs.core.Keyword(null,"expecting","expecting",-57706705),(function (p1__28738_SHARP_){
return ["expecting ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28738_SHARP_)].join('');
}),new cljs.core.Keyword(null,"or","or",235744169),(function (p1__28739_SHARP_){
return [" or ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28739_SHARP_)].join('');
}),new cljs.core.Keyword(null,"err-pos","err-pos",-42056483),(function (p1__28740_SHARP_,p2__28741_SHARP_,p3__28742_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28740_SHARP_)," line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28741_SHARP_)," column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p3__28742_SHARP_),"\n"].join('');
}),new cljs.core.Keyword(null,"reserved","reserved",-775228297),(function (p1__28743_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28743_SHARP_)," is a reserved name"].join('');
})], null);
blancas.kern.i18n.text = cljs.core.atom.call(null,blancas.kern.i18n.default$);
blancas.kern.i18n.fmt_text = cljs.core.atom.call(null,blancas.kern.i18n.default_fmt);
/**
 * Merges m into the text map for customization.
 */
blancas.kern.i18n.i18n_merge = (function blancas$kern$i18n$i18n_merge(m){
return cljs.core.swap_BANG_.call(null,blancas.kern.i18n.text,cljs.core.merge,m);
});
/**
 * Gets or sets the value for the supplied key.
 */
blancas.kern.i18n.i18n = (function blancas$kern$i18n$i18n(var_args){
var G__28745 = arguments.length;
switch (G__28745) {
case 1:
return blancas.kern.i18n.i18n.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return blancas.kern.i18n.i18n.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

blancas.kern.i18n.i18n.cljs$core$IFn$_invoke$arity$1 = (function (k){
return k.call(null,cljs.core.deref.call(null,blancas.kern.i18n.text));
});

blancas.kern.i18n.i18n.cljs$core$IFn$_invoke$arity$2 = (function (k,v){
return cljs.core.swap_BANG_.call(null,blancas.kern.i18n.text,cljs.core.assoc,k,v);
});

blancas.kern.i18n.i18n.cljs$lang$maxFixedArity = 2;

/**
 * Formats a string with a key and more arguments.
 */
blancas.kern.i18n.fmt = (function blancas$kern$i18n$fmt(var_args){
var args__28371__auto__ = [];
var len__28364__auto___28749 = arguments.length;
var i__28365__auto___28750 = (0);
while(true){
if((i__28365__auto___28750 < len__28364__auto___28749)){
args__28371__auto__.push((arguments[i__28365__auto___28750]));

var G__28751 = (i__28365__auto___28750 + (1));
i__28365__auto___28750 = G__28751;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return blancas.kern.i18n.fmt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

blancas.kern.i18n.fmt.cljs$core$IFn$_invoke$arity$variadic = (function (k,more){
return cljs.core.apply.call(null,k.call(null,cljs.core.deref.call(null,blancas.kern.i18n.fmt_text)),more);
});

blancas.kern.i18n.fmt.cljs$lang$maxFixedArity = (1);

blancas.kern.i18n.fmt.cljs$lang$applyTo = (function (seq28747){
var G__28748 = cljs.core.first.call(null,seq28747);
var seq28747__$1 = cljs.core.next.call(null,seq28747);
return blancas.kern.i18n.fmt.cljs$core$IFn$_invoke$arity$variadic(G__28748,seq28747__$1);
});

/**
 * Returns a Delay instance with the value for the supplied key.
 * Useful in (def)'ed expressions that evaluate too soon.
 */
blancas.kern.i18n.di18n = (function blancas$kern$i18n$di18n(k){
return (new cljs.core.Delay((function (){
return k.call(null,cljs.core.deref.call(null,blancas.kern.i18n.text));
}),null));
});
/**
 * Returns a Delay instance with a string formatted with a key and more
 * arguments. Useful in (def)'ed expressions that evaluate too soon.
 */
blancas.kern.i18n.dfmt = (function blancas$kern$i18n$dfmt(var_args){
var args__28371__auto__ = [];
var len__28364__auto___28754 = arguments.length;
var i__28365__auto___28755 = (0);
while(true){
if((i__28365__auto___28755 < len__28364__auto___28754)){
args__28371__auto__.push((arguments[i__28365__auto___28755]));

var G__28756 = (i__28365__auto___28755 + (1));
i__28365__auto___28755 = G__28756;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return blancas.kern.i18n.dfmt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

blancas.kern.i18n.dfmt.cljs$core$IFn$_invoke$arity$variadic = (function (k,more){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,blancas.kern.i18n.fmt,k,more);
}),null));
});

blancas.kern.i18n.dfmt.cljs$lang$maxFixedArity = (1);

blancas.kern.i18n.dfmt.cljs$lang$applyTo = (function (seq28752){
var G__28753 = cljs.core.first.call(null,seq28752);
var seq28752__$1 = cljs.core.next.call(null,seq28752);
return blancas.kern.i18n.dfmt.cljs$core$IFn$_invoke$arity$variadic(G__28753,seq28752__$1);
});


//# sourceMappingURL=i18n.js.map
