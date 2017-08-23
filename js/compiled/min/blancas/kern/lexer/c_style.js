// Compiled by ClojureScript 1.9.908 {}
goog.provide('blancas.kern.lexer.c_style');
goog.require('cljs.core');
goog.require('blancas.kern.core');
goog.require('blancas.kern.lexer');
blancas.kern.lexer.c_style.rec = blancas.kern.lexer.make_parsers.call(null,blancas.kern.lexer.c_style_def);
blancas.kern.lexer.c_style.trim = new cljs.core.Keyword(null,"trim","trim",774319767).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.lexeme = new cljs.core.Keyword(null,"lexeme","lexeme",750515121).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.sym = new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.new_line = new cljs.core.Keyword(null,"new-line","new-line",1060819447).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.one_of = new cljs.core.Keyword(null,"one-of","one-of",144367098).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.none_of = new cljs.core.Keyword(null,"none-of","none-of",-1115383390).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.token = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.word = new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.identifier = new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.char_lit = new cljs.core.Keyword(null,"char-lit","char-lit",762455694).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.string_lit = new cljs.core.Keyword(null,"string-lit","string-lit",1570344494).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.dec_lit = new cljs.core.Keyword(null,"dec-lit","dec-lit",-1364231639).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.oct_lit = new cljs.core.Keyword(null,"oct-lit","oct-lit",-1521077730).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.hex_lit = new cljs.core.Keyword(null,"hex-lit","hex-lit",-448097198).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.float_lit = new cljs.core.Keyword(null,"float-lit","float-lit",1663609324).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.bool_lit = new cljs.core.Keyword(null,"bool-lit","bool-lit",-1597378914).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.nil_lit = new cljs.core.Keyword(null,"nil-lit","nil-lit",-1151930496).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.parens = new cljs.core.Keyword(null,"parens","parens",1028661830).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.braces = new cljs.core.Keyword(null,"braces","braces",907708519).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.angles = new cljs.core.Keyword(null,"angles","angles",-1220989759).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.brackets = new cljs.core.Keyword(null,"brackets","brackets",1720097338).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.semi = new cljs.core.Keyword(null,"semi","semi",276867757).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.comma = new cljs.core.Keyword(null,"comma","comma",1699024745).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.colon = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.dot = new cljs.core.Keyword(null,"dot","dot",1442709401).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.semi_sep = new cljs.core.Keyword(null,"semi-sep","semi-sep",-796169557).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.semi_sep1 = new cljs.core.Keyword(null,"semi-sep1","semi-sep1",-700853510).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.comma_sep = new cljs.core.Keyword(null,"comma-sep","comma-sep",1118800894).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);
blancas.kern.lexer.c_style.comma_sep1 = new cljs.core.Keyword(null,"comma-sep1","comma-sep1",412337366).cljs$core$IFn$_invoke$arity$1(blancas.kern.lexer.c_style.rec);

//# sourceMappingURL=c_style.js.map
