// Compiled by ClojureScript 1.9.908 {}
goog.provide('orcl.lexer');
goog.require('cljs.core');
goog.require('blancas.kern.core');
goog.require('blancas.kern.lexer');
goog.require('blancas.kern.i18n');
orcl.lexer.orc_style = cljs.core.assoc.call(null,blancas.kern.lexer.basic_def,new cljs.core.Keyword(null,"comment-start","comment-start",-1104408439),"{-",new cljs.core.Keyword(null,"comment-end","comment-end",-48325961),"-}",new cljs.core.Keyword(null,"comment-line","comment-line",-935339272),"--",new cljs.core.Keyword(null,"identifier-start","identifier-start",-2096558846),blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core.letter,blancas.kern.core.sym_STAR_.call(null,"_"),blancas.kern.core.sym_STAR_.call(null,"$")),new cljs.core.Keyword(null,"nested-comments","nested-comments",-856738865),true,new cljs.core.Keyword(null,"reserved-names","reserved-names",-535805962),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, ["as","def","else","if","import","include","lambda","signal","stop","then","type","val","true","false","null","_"], null));
orcl.lexer.rec = blancas.kern.lexer.make_parsers.call(null,orcl.lexer.orc_style);
orcl.lexer.trim = new cljs.core.Keyword(null,"trim","trim",774319767).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.lexeme = new cljs.core.Keyword(null,"lexeme","lexeme",750515121).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.sym = new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.new_line = new cljs.core.Keyword(null,"new-line","new-line",1060819447).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.one_of = new cljs.core.Keyword(null,"one-of","one-of",144367098).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.none_of = new cljs.core.Keyword(null,"none-of","none-of",-1115383390).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.token = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.word = new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.identifier = new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.char_lit = new cljs.core.Keyword(null,"char-lit","char-lit",762455694).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.string_lit = new cljs.core.Keyword(null,"string-lit","string-lit",1570344494).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.sign = blancas.kern.core.optional.call(null,blancas.kern.core.one_of_STAR_.call(null,"+-"));
orcl.lexer.oct_lit = new cljs.core.Keyword(null,"oct-lit","oct-lit",-1521077730).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.hex_lit = new cljs.core.Keyword(null,"hex-lit","hex-lit",-448097198).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.bool_lit = new cljs.core.Keyword(null,"bool-lit","bool-lit",-1597378914).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.nil_lit = new cljs.core.Keyword(null,"nil-lit","nil-lit",-1151930496).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.parens = new cljs.core.Keyword(null,"parens","parens",1028661830).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.braces = new cljs.core.Keyword(null,"braces","braces",907708519).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.angles = new cljs.core.Keyword(null,"angles","angles",-1220989759).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.brackets = new cljs.core.Keyword(null,"brackets","brackets",1720097338).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.semi = new cljs.core.Keyword(null,"semi","semi",276867757).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.comma = new cljs.core.Keyword(null,"comma","comma",1699024745).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.colon = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.dot = new cljs.core.Keyword(null,"dot","dot",1442709401).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.semi_sep = new cljs.core.Keyword(null,"semi-sep","semi-sep",-796169557).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.semi_sep1 = new cljs.core.Keyword(null,"semi-sep1","semi-sep1",-700853510).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.comma_sep = new cljs.core.Keyword(null,"comma-sep","comma-sep",1118800894).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.comma_sep1 = new cljs.core.Keyword(null,"comma-sep1","comma-sep1",412337366).cljs$core$IFn$_invoke$arity$1(orcl.lexer.rec);
orcl.lexer.dec_lit = (function (){var lead = (cljs.core.truth_(new cljs.core.Keyword(null,"leading-sign","leading-sign",-362968885).cljs$core$IFn$_invoke$arity$1(orcl.lexer.orc_style))?orcl.lexer.sign:blancas.kern.core.return$.call(null,null));
return blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._LT__COLON__GT_.call(null,orcl.lexer.lexeme.call(null,blancas.kern.core._LT__PLUS__GT_.call(null,lead,blancas.kern.core.many1.call(null,blancas.kern.core.digit),blancas.kern.lexer.int_suffix))),((function (lead){
return (function (x){
return blancas.kern.core.return$.call(null,blancas.kern.lexer.read_num_lit.call(null,x));
});})(lead))
),blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"dec-lit","dec-lit",-1364231639)));
})();
orcl.lexer.float_lit = (function (){var lead = (cljs.core.truth_(new cljs.core.Keyword(null,"leading-sign","leading-sign",-362968885).cljs$core$IFn$_invoke$arity$1(orcl.lexer.orc_style))?orcl.lexer.sign:blancas.kern.core.return$.call(null,null));
return blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._LT__COLON__GT_.call(null,orcl.lexer.lexeme.call(null,blancas.kern.core._LT__PLUS__GT_.call(null,lead,blancas.kern.core.many1.call(null,blancas.kern.core.digit),blancas.kern.core._LT__STAR__GT_.call(null,blancas.kern.core.sym_STAR_.call(null,"."),blancas.kern.core.many1.call(null,blancas.kern.core.digit)),blancas.kern.core.optional.call(null,blancas.kern.core._LT__STAR__GT_.call(null,blancas.kern.core.one_of_STAR_.call(null,"eE"),orcl.lexer.sign,blancas.kern.core.many1.call(null,blancas.kern.core.digit))),blancas.kern.lexer.float_suffix))),((function (lead){
return (function (x){
return blancas.kern.core._GT__GT_.call(null,blancas.kern.core.return$.call(null,blancas.kern.lexer.read_num_lit.call(null,x)),blancas.kern.core.clear_empty);
});})(lead))
),blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"float-lit","float-lit",1663609324)));
})();
orcl.lexer.eq_tok = blancas.kern.core._LT_$_GT_.call(null,cljs.core.str,orcl.lexer.sym.call(null,"="));
orcl.lexer.neq_tok = orcl.lexer.token.call(null,"/=");
orcl.lexer.lt_tok = orcl.lexer.token.call(null,"<:");
orcl.lexer.gt_tok = orcl.lexer.token.call(null,":>");
orcl.lexer.lte_tok = orcl.lexer.token.call(null,"<=");
orcl.lexer.gte_tok = orcl.lexer.token.call(null,">=");
orcl.lexer.add_tok = blancas.kern.core._LT_$_GT_.call(null,cljs.core.str,orcl.lexer.sym.call(null,"+"));
orcl.lexer.subst_tok = blancas.kern.core._LT_$_GT_.call(null,cljs.core.str,orcl.lexer.sym.call(null,"-"));
orcl.lexer.mod_tok = blancas.kern.core._LT_$_GT_.call(null,cljs.core.str,orcl.lexer.sym.call(null,"%"));
orcl.lexer.assign_tok = orcl.lexer.token.call(null,":=");
orcl.lexer.expn_tok = orcl.lexer.token.call(null,"**");
orcl.lexer.and_tok = orcl.lexer.token.call(null,"&&");
orcl.lexer.or_tok = orcl.lexer.token.call(null,"||");
orcl.lexer.mult_tok = blancas.kern.core._LT__COLON__GT_.call(null,orcl.lexer.lexeme.call(null,blancas.kern.core._LT__LT_.call(null,blancas.kern.core._LT_$_GT_.call(null,cljs.core.str,blancas.kern.core.sym_STAR_.call(null,"*")),blancas.kern.core.not_followed_by.call(null,blancas.kern.core.sym_STAR_.call(null,"*")))));
orcl.lexer.div_tok = blancas.kern.core._LT__COLON__GT_.call(null,orcl.lexer.lexeme.call(null,blancas.kern.core._LT__LT_.call(null,blancas.kern.core._LT_$_GT_.call(null,cljs.core.str,blancas.kern.core.sym_STAR_.call(null,"/")),blancas.kern.core.not_followed_by.call(null,blancas.kern.core.sym_STAR_.call(null,"=")))));
orcl.lexer.cons_tok = blancas.kern.core._LT__COLON__GT_.call(null,orcl.lexer.lexeme.call(null,blancas.kern.core._LT__LT_.call(null,blancas.kern.core._LT_$_GT_.call(null,cljs.core.str,blancas.kern.core.sym_STAR_.call(null,":")),blancas.kern.core.not_followed_by.call(null,blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core.sym_STAR_.call(null,"="),blancas.kern.core.sym_STAR_.call(null,">"))))));
orcl.lexer.dot_tok = blancas.kern.core._LT__COLON__GT_.call(null,orcl.lexer.lexeme.call(null,blancas.kern.core._LT__LT_.call(null,blancas.kern.core._LT_$_GT_.call(null,cljs.core.str,blancas.kern.core.sym_STAR_.call(null,".")),blancas.kern.core.not_followed_by.call(null,blancas.kern.core.sym_STAR_.call(null,"}")))));

//# sourceMappingURL=lexer.js.map
