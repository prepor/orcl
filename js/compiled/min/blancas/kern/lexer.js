// Compiled by ClojureScript 1.9.908 {}
goog.provide('blancas.kern.lexer');
goog.require('cljs.core');
goog.require('blancas.kern.core');
goog.require('blancas.kern.i18n');
goog.require('clojure.string');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
blancas.kern.lexer.LanguageDef = (function (type,comment_start,comment_end,comment_line,nested_comments,identifier_start,identifier_letter,reserved_names,case_sensitive,line_continuation,trim_newline,leading_sign,__meta,__extmap,__hash){
this.type = type;
this.comment_start = comment_start;
this.comment_end = comment_end;
this.comment_line = comment_line;
this.nested_comments = nested_comments;
this.identifier_start = identifier_start;
this.identifier_letter = identifier_letter;
this.reserved_names = reserved_names;
this.case_sensitive = case_sensitive;
this.line_continuation = line_continuation;
this.trim_newline = trim_newline;
this.leading_sign = leading_sign;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
blancas.kern.lexer.LanguageDef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27835__auto__,k__27836__auto__){
var self__ = this;
var this__27835__auto____$1 = this;
return this__27835__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__27836__auto__,null);
});

blancas.kern.lexer.LanguageDef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27837__auto__,k30555,else__27838__auto__){
var self__ = this;
var this__27837__auto____$1 = this;
var G__30559 = k30555;
var G__30559__$1 = (((G__30559 instanceof cljs.core.Keyword))?G__30559.fqn:null);
switch (G__30559__$1) {
case "type":
return self__.type;

break;
case "comment-start":
return self__.comment_start;

break;
case "comment-end":
return self__.comment_end;

break;
case "comment-line":
return self__.comment_line;

break;
case "nested-comments":
return self__.nested_comments;

break;
case "identifier-start":
return self__.identifier_start;

break;
case "identifier-letter":
return self__.identifier_letter;

break;
case "reserved-names":
return self__.reserved_names;

break;
case "case-sensitive":
return self__.case_sensitive;

break;
case "line-continuation":
return self__.line_continuation;

break;
case "trim-newline":
return self__.trim_newline;

break;
case "leading-sign":
return self__.leading_sign;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30555,else__27838__auto__);

}
});

blancas.kern.lexer.LanguageDef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27849__auto__,writer__27850__auto__,opts__27851__auto__){
var self__ = this;
var this__27849__auto____$1 = this;
var pr_pair__27852__auto__ = ((function (this__27849__auto____$1){
return (function (keyval__27853__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27850__auto__,cljs.core.pr_writer,""," ","",opts__27851__auto__,keyval__27853__auto__);
});})(this__27849__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27850__auto__,pr_pair__27852__auto__,"#blancas.kern.lexer.LanguageDef{",", ","}",opts__27851__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"comment-start","comment-start",-1104408439),self__.comment_start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"comment-end","comment-end",-48325961),self__.comment_end],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"comment-line","comment-line",-935339272),self__.comment_line],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nested-comments","nested-comments",-856738865),self__.nested_comments],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier-start","identifier-start",-2096558846),self__.identifier_start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier-letter","identifier-letter",78001785),self__.identifier_letter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reserved-names","reserved-names",-535805962),self__.reserved_names],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"case-sensitive","case-sensitive",-1005239404),self__.case_sensitive],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"line-continuation","line-continuation",6492671),self__.line_continuation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trim-newline","trim-newline",-983715733),self__.trim_newline],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"leading-sign","leading-sign",-362968885),self__.leading_sign],null))], null),self__.__extmap));
});

blancas.kern.lexer.LanguageDef.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30554){
var self__ = this;
var G__30554__$1 = this;
return (new cljs.core.RecordIter((0),G__30554__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comment-start","comment-start",-1104408439),new cljs.core.Keyword(null,"comment-end","comment-end",-48325961),new cljs.core.Keyword(null,"comment-line","comment-line",-935339272),new cljs.core.Keyword(null,"nested-comments","nested-comments",-856738865),new cljs.core.Keyword(null,"identifier-start","identifier-start",-2096558846),new cljs.core.Keyword(null,"identifier-letter","identifier-letter",78001785),new cljs.core.Keyword(null,"reserved-names","reserved-names",-535805962),new cljs.core.Keyword(null,"case-sensitive","case-sensitive",-1005239404),new cljs.core.Keyword(null,"line-continuation","line-continuation",6492671),new cljs.core.Keyword(null,"trim-newline","trim-newline",-983715733),new cljs.core.Keyword(null,"leading-sign","leading-sign",-362968885)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

blancas.kern.lexer.LanguageDef.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27833__auto__){
var self__ = this;
var this__27833__auto____$1 = this;
return self__.__meta;
});

blancas.kern.lexer.LanguageDef.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27830__auto__){
var self__ = this;
var this__27830__auto____$1 = this;
return (new blancas.kern.lexer.LanguageDef(self__.type,self__.comment_start,self__.comment_end,self__.comment_line,self__.nested_comments,self__.identifier_start,self__.identifier_letter,self__.reserved_names,self__.case_sensitive,self__.line_continuation,self__.trim_newline,self__.leading_sign,self__.__meta,self__.__extmap,self__.__hash));
});

blancas.kern.lexer.LanguageDef.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27839__auto__){
var self__ = this;
var this__27839__auto____$1 = this;
return (12 + cljs.core.count.call(null,self__.__extmap));
});

blancas.kern.lexer.LanguageDef.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27831__auto__){
var self__ = this;
var this__27831__auto____$1 = this;
var h__27649__auto__ = self__.__hash;
if(!((h__27649__auto__ == null))){
return h__27649__auto__;
} else {
var h__27649__auto____$1 = ((function (h__27649__auto__,this__27831__auto____$1){
return (function (coll__27832__auto__){
return (-1954360337 ^ cljs.core.hash_unordered_coll.call(null,coll__27832__auto__));
});})(h__27649__auto__,this__27831__auto____$1))
.call(null,this__27831__auto____$1);
self__.__hash = h__27649__auto____$1;

return h__27649__auto____$1;
}
});

blancas.kern.lexer.LanguageDef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30556,other30557){
var self__ = this;
var this30556__$1 = this;
return (!((other30557 == null))) && ((this30556__$1.constructor === other30557.constructor)) && (cljs.core._EQ_.call(null,this30556__$1.type,other30557.type)) && (cljs.core._EQ_.call(null,this30556__$1.comment_start,other30557.comment_start)) && (cljs.core._EQ_.call(null,this30556__$1.comment_end,other30557.comment_end)) && (cljs.core._EQ_.call(null,this30556__$1.comment_line,other30557.comment_line)) && (cljs.core._EQ_.call(null,this30556__$1.nested_comments,other30557.nested_comments)) && (cljs.core._EQ_.call(null,this30556__$1.identifier_start,other30557.identifier_start)) && (cljs.core._EQ_.call(null,this30556__$1.identifier_letter,other30557.identifier_letter)) && (cljs.core._EQ_.call(null,this30556__$1.reserved_names,other30557.reserved_names)) && (cljs.core._EQ_.call(null,this30556__$1.case_sensitive,other30557.case_sensitive)) && (cljs.core._EQ_.call(null,this30556__$1.line_continuation,other30557.line_continuation)) && (cljs.core._EQ_.call(null,this30556__$1.trim_newline,other30557.trim_newline)) && (cljs.core._EQ_.call(null,this30556__$1.leading_sign,other30557.leading_sign)) && (cljs.core._EQ_.call(null,this30556__$1.__extmap,other30557.__extmap));
});

blancas.kern.lexer.LanguageDef.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27844__auto__,k__27845__auto__){
var self__ = this;
var this__27844__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"identifier-start","identifier-start",-2096558846),null,new cljs.core.Keyword(null,"comment-start","comment-start",-1104408439),null,new cljs.core.Keyword(null,"trim-newline","trim-newline",-983715733),null,new cljs.core.Keyword(null,"leading-sign","leading-sign",-362968885),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"nested-comments","nested-comments",-856738865),null,new cljs.core.Keyword(null,"case-sensitive","case-sensitive",-1005239404),null,new cljs.core.Keyword(null,"reserved-names","reserved-names",-535805962),null,new cljs.core.Keyword(null,"comment-end","comment-end",-48325961),null,new cljs.core.Keyword(null,"comment-line","comment-line",-935339272),null,new cljs.core.Keyword(null,"identifier-letter","identifier-letter",78001785),null,new cljs.core.Keyword(null,"line-continuation","line-continuation",6492671),null], null), null),k__27845__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27844__auto____$1),self__.__meta),k__27845__auto__);
} else {
return (new blancas.kern.lexer.LanguageDef(self__.type,self__.comment_start,self__.comment_end,self__.comment_line,self__.nested_comments,self__.identifier_start,self__.identifier_letter,self__.reserved_names,self__.case_sensitive,self__.line_continuation,self__.trim_newline,self__.leading_sign,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27845__auto__)),null));
}
});

blancas.kern.lexer.LanguageDef.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27842__auto__,k__27843__auto__,G__30554){
var self__ = this;
var this__27842__auto____$1 = this;
var pred__30560 = cljs.core.keyword_identical_QMARK_;
var expr__30561 = k__27843__auto__;
if(cljs.core.truth_(pred__30560.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__30561))){
return (new blancas.kern.lexer.LanguageDef(G__30554,self__.comment_start,self__.comment_end,self__.comment_line,self__.nested_comments,self__.identifier_start,self__.identifier_letter,self__.reserved_names,self__.case_sensitive,self__.line_continuation,self__.trim_newline,self__.leading_sign,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30560.call(null,new cljs.core.Keyword(null,"comment-start","comment-start",-1104408439),expr__30561))){
return (new blancas.kern.lexer.LanguageDef(self__.type,G__30554,self__.comment_end,self__.comment_line,self__.nested_comments,self__.identifier_start,self__.identifier_letter,self__.reserved_names,self__.case_sensitive,self__.line_continuation,self__.trim_newline,self__.leading_sign,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30560.call(null,new cljs.core.Keyword(null,"comment-end","comment-end",-48325961),expr__30561))){
return (new blancas.kern.lexer.LanguageDef(self__.type,self__.comment_start,G__30554,self__.comment_line,self__.nested_comments,self__.identifier_start,self__.identifier_letter,self__.reserved_names,self__.case_sensitive,self__.line_continuation,self__.trim_newline,self__.leading_sign,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30560.call(null,new cljs.core.Keyword(null,"comment-line","comment-line",-935339272),expr__30561))){
return (new blancas.kern.lexer.LanguageDef(self__.type,self__.comment_start,self__.comment_end,G__30554,self__.nested_comments,self__.identifier_start,self__.identifier_letter,self__.reserved_names,self__.case_sensitive,self__.line_continuation,self__.trim_newline,self__.leading_sign,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30560.call(null,new cljs.core.Keyword(null,"nested-comments","nested-comments",-856738865),expr__30561))){
return (new blancas.kern.lexer.LanguageDef(self__.type,self__.comment_start,self__.comment_end,self__.comment_line,G__30554,self__.identifier_start,self__.identifier_letter,self__.reserved_names,self__.case_sensitive,self__.line_continuation,self__.trim_newline,self__.leading_sign,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30560.call(null,new cljs.core.Keyword(null,"identifier-start","identifier-start",-2096558846),expr__30561))){
return (new blancas.kern.lexer.LanguageDef(self__.type,self__.comment_start,self__.comment_end,self__.comment_line,self__.nested_comments,G__30554,self__.identifier_letter,self__.reserved_names,self__.case_sensitive,self__.line_continuation,self__.trim_newline,self__.leading_sign,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30560.call(null,new cljs.core.Keyword(null,"identifier-letter","identifier-letter",78001785),expr__30561))){
return (new blancas.kern.lexer.LanguageDef(self__.type,self__.comment_start,self__.comment_end,self__.comment_line,self__.nested_comments,self__.identifier_start,G__30554,self__.reserved_names,self__.case_sensitive,self__.line_continuation,self__.trim_newline,self__.leading_sign,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30560.call(null,new cljs.core.Keyword(null,"reserved-names","reserved-names",-535805962),expr__30561))){
return (new blancas.kern.lexer.LanguageDef(self__.type,self__.comment_start,self__.comment_end,self__.comment_line,self__.nested_comments,self__.identifier_start,self__.identifier_letter,G__30554,self__.case_sensitive,self__.line_continuation,self__.trim_newline,self__.leading_sign,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30560.call(null,new cljs.core.Keyword(null,"case-sensitive","case-sensitive",-1005239404),expr__30561))){
return (new blancas.kern.lexer.LanguageDef(self__.type,self__.comment_start,self__.comment_end,self__.comment_line,self__.nested_comments,self__.identifier_start,self__.identifier_letter,self__.reserved_names,G__30554,self__.line_continuation,self__.trim_newline,self__.leading_sign,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30560.call(null,new cljs.core.Keyword(null,"line-continuation","line-continuation",6492671),expr__30561))){
return (new blancas.kern.lexer.LanguageDef(self__.type,self__.comment_start,self__.comment_end,self__.comment_line,self__.nested_comments,self__.identifier_start,self__.identifier_letter,self__.reserved_names,self__.case_sensitive,G__30554,self__.trim_newline,self__.leading_sign,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30560.call(null,new cljs.core.Keyword(null,"trim-newline","trim-newline",-983715733),expr__30561))){
return (new blancas.kern.lexer.LanguageDef(self__.type,self__.comment_start,self__.comment_end,self__.comment_line,self__.nested_comments,self__.identifier_start,self__.identifier_letter,self__.reserved_names,self__.case_sensitive,self__.line_continuation,G__30554,self__.leading_sign,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30560.call(null,new cljs.core.Keyword(null,"leading-sign","leading-sign",-362968885),expr__30561))){
return (new blancas.kern.lexer.LanguageDef(self__.type,self__.comment_start,self__.comment_end,self__.comment_line,self__.nested_comments,self__.identifier_start,self__.identifier_letter,self__.reserved_names,self__.case_sensitive,self__.line_continuation,self__.trim_newline,G__30554,self__.__meta,self__.__extmap,null));
} else {
return (new blancas.kern.lexer.LanguageDef(self__.type,self__.comment_start,self__.comment_end,self__.comment_line,self__.nested_comments,self__.identifier_start,self__.identifier_letter,self__.reserved_names,self__.case_sensitive,self__.line_continuation,self__.trim_newline,self__.leading_sign,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27843__auto__,G__30554),null));
}
}
}
}
}
}
}
}
}
}
}
}
});

blancas.kern.lexer.LanguageDef.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27847__auto__){
var self__ = this;
var this__27847__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"comment-start","comment-start",-1104408439),self__.comment_start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"comment-end","comment-end",-48325961),self__.comment_end],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"comment-line","comment-line",-935339272),self__.comment_line],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nested-comments","nested-comments",-856738865),self__.nested_comments],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier-start","identifier-start",-2096558846),self__.identifier_start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier-letter","identifier-letter",78001785),self__.identifier_letter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reserved-names","reserved-names",-535805962),self__.reserved_names],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"case-sensitive","case-sensitive",-1005239404),self__.case_sensitive],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"line-continuation","line-continuation",6492671),self__.line_continuation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trim-newline","trim-newline",-983715733),self__.trim_newline],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"leading-sign","leading-sign",-362968885),self__.leading_sign],null))], null),self__.__extmap));
});

blancas.kern.lexer.LanguageDef.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27834__auto__,G__30554){
var self__ = this;
var this__27834__auto____$1 = this;
return (new blancas.kern.lexer.LanguageDef(self__.type,self__.comment_start,self__.comment_end,self__.comment_line,self__.nested_comments,self__.identifier_start,self__.identifier_letter,self__.reserved_names,self__.case_sensitive,self__.line_continuation,self__.trim_newline,self__.leading_sign,G__30554,self__.__extmap,self__.__hash));
});

blancas.kern.lexer.LanguageDef.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27840__auto__,entry__27841__auto__){
var self__ = this;
var this__27840__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27841__auto__)){
return this__27840__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__27841__auto__,(0)),cljs.core._nth.call(null,entry__27841__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27840__auto____$1,entry__27841__auto__);
}
});

blancas.kern.lexer.LanguageDef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"comment-start","comment-start",536123088,null),new cljs.core.Symbol(null,"comment-end","comment-end",1592205566,null),new cljs.core.Symbol(null,"comment-line","comment-line",705192255,null),new cljs.core.Symbol(null,"nested-comments","nested-comments",783792662,null),new cljs.core.Symbol(null,"identifier-start","identifier-start",-456027319,null),new cljs.core.Symbol(null,"identifier-letter","identifier-letter",1718533312,null),new cljs.core.Symbol(null,"reserved-names","reserved-names",1104725565,null),new cljs.core.Symbol(null,"case-sensitive","case-sensitive",635292123,null),new cljs.core.Symbol(null,"line-continuation","line-continuation",1647024198,null),new cljs.core.Symbol(null,"trim-newline","trim-newline",656815794,null),new cljs.core.Symbol(null,"leading-sign","leading-sign",1277562642,null)], null);
});

blancas.kern.lexer.LanguageDef.cljs$lang$type = true;

blancas.kern.lexer.LanguageDef.cljs$lang$ctorPrSeq = (function (this__27871__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"blancas.kern.lexer/LanguageDef");
});

blancas.kern.lexer.LanguageDef.cljs$lang$ctorPrWriter = (function (this__27871__auto__,writer__27872__auto__){
return cljs.core._write.call(null,writer__27872__auto__,"blancas.kern.lexer/LanguageDef");
});

blancas.kern.lexer.__GT_LanguageDef = (function blancas$kern$lexer$__GT_LanguageDef(type,comment_start,comment_end,comment_line,nested_comments,identifier_start,identifier_letter,reserved_names,case_sensitive,line_continuation,trim_newline,leading_sign){
return (new blancas.kern.lexer.LanguageDef(type,comment_start,comment_end,comment_line,nested_comments,identifier_start,identifier_letter,reserved_names,case_sensitive,line_continuation,trim_newline,leading_sign,null,null,null));
});

blancas.kern.lexer.map__GT_LanguageDef = (function blancas$kern$lexer$map__GT_LanguageDef(G__30558){
return (new blancas.kern.lexer.LanguageDef(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__30558),new cljs.core.Keyword(null,"comment-start","comment-start",-1104408439).cljs$core$IFn$_invoke$arity$1(G__30558),new cljs.core.Keyword(null,"comment-end","comment-end",-48325961).cljs$core$IFn$_invoke$arity$1(G__30558),new cljs.core.Keyword(null,"comment-line","comment-line",-935339272).cljs$core$IFn$_invoke$arity$1(G__30558),new cljs.core.Keyword(null,"nested-comments","nested-comments",-856738865).cljs$core$IFn$_invoke$arity$1(G__30558),new cljs.core.Keyword(null,"identifier-start","identifier-start",-2096558846).cljs$core$IFn$_invoke$arity$1(G__30558),new cljs.core.Keyword(null,"identifier-letter","identifier-letter",78001785).cljs$core$IFn$_invoke$arity$1(G__30558),new cljs.core.Keyword(null,"reserved-names","reserved-names",-535805962).cljs$core$IFn$_invoke$arity$1(G__30558),new cljs.core.Keyword(null,"case-sensitive","case-sensitive",-1005239404).cljs$core$IFn$_invoke$arity$1(G__30558),new cljs.core.Keyword(null,"line-continuation","line-continuation",6492671).cljs$core$IFn$_invoke$arity$1(G__30558),new cljs.core.Keyword(null,"trim-newline","trim-newline",-983715733).cljs$core$IFn$_invoke$arity$1(G__30558),new cljs.core.Keyword(null,"leading-sign","leading-sign",-362968885).cljs$core$IFn$_invoke$arity$1(G__30558),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__30558,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comment-start","comment-start",-1104408439),new cljs.core.Keyword(null,"comment-end","comment-end",-48325961),new cljs.core.Keyword(null,"comment-line","comment-line",-935339272),new cljs.core.Keyword(null,"nested-comments","nested-comments",-856738865),new cljs.core.Keyword(null,"identifier-start","identifier-start",-2096558846),new cljs.core.Keyword(null,"identifier-letter","identifier-letter",78001785),new cljs.core.Keyword(null,"reserved-names","reserved-names",-535805962),new cljs.core.Keyword(null,"case-sensitive","case-sensitive",-1005239404),new cljs.core.Keyword(null,"line-continuation","line-continuation",6492671),new cljs.core.Keyword(null,"trim-newline","trim-newline",-983715733),new cljs.core.Keyword(null,"leading-sign","leading-sign",-362968885))),null));
});

/**
 * The most basic record; for use to build new styles.
 */
blancas.kern.lexer.basic_def = blancas.kern.lexer.map__GT_LanguageDef.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"identifier-start","identifier-start",-2096558846),new cljs.core.Keyword(null,"comment-start","comment-start",-1104408439),new cljs.core.Keyword(null,"trim-newline","trim-newline",-983715733),new cljs.core.Keyword(null,"leading-sign","leading-sign",-362968885),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nested-comments","nested-comments",-856738865),new cljs.core.Keyword(null,"case-sensitive","case-sensitive",-1005239404),new cljs.core.Keyword(null,"reserved-names","reserved-names",-535805962),new cljs.core.Keyword(null,"comment-end","comment-end",-48325961),new cljs.core.Keyword(null,"comment-line","comment-line",-935339272),new cljs.core.Keyword(null,"identifier-letter","identifier-letter",78001785),new cljs.core.Keyword(null,"line-continuation","line-continuation",6492671)],[blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core.letter,blancas.kern.core.sym_STAR_.call(null,"_")),"",true,true,new cljs.core.Keyword(null,"basic","basic",1043717368),false,true,cljs.core.PersistentVector.EMPTY,"","",blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core.alpha_num,blancas.kern.core.sym_STAR_.call(null,"_")),blancas.kern.core.sym_STAR_.call(null,"\\")]));
/**
 * Lexical settings for Haskell-style languages.
 */
blancas.kern.lexer.haskell_style_def = cljs.core.assoc.call(null,blancas.kern.lexer.basic_def,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Haskell","Haskell",667642655),new cljs.core.Keyword(null,"comment-start","comment-start",-1104408439),"{-",new cljs.core.Keyword(null,"comment-end","comment-end",-48325961),"-}",new cljs.core.Keyword(null,"comment-line","comment-line",-935339272),"--",new cljs.core.Keyword(null,"nested-comments","nested-comments",-856738865),true);
/**
 * Lexical settings for Java-style languages.
 */
blancas.kern.lexer.java_style_def = cljs.core.assoc.call(null,blancas.kern.lexer.basic_def,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Java","Java",-753254123),new cljs.core.Keyword(null,"comment-start","comment-start",-1104408439),"/*",new cljs.core.Keyword(null,"comment-end","comment-end",-48325961),"*/",new cljs.core.Keyword(null,"comment-line","comment-line",-935339272),"//");
/**
 * Lexical settings for C-style languages.
 */
blancas.kern.lexer.c_style_def = cljs.core.assoc.call(null,blancas.kern.lexer.java_style_def,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"C","C",-173629587));
/**
 * Lexical settings for shell-style languages.
 */
blancas.kern.lexer.shell_style_def = cljs.core.assoc.call(null,blancas.kern.lexer.basic_def,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Shell","Shell",-90623198),new cljs.core.Keyword(null,"comment-line","comment-line",-935339272),"#",new cljs.core.Keyword(null,"identifier-letter","identifier-letter",78001785),blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core.alpha_num,blancas.kern.core.one_of_STAR_.call(null,"_-.")),new cljs.core.Keyword(null,"trim-newline","trim-newline",-983715733),false);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
blancas.kern.lexer.TokenParsers = (function (trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit,oct_lit,hex_lit,float_lit,bool_lit,nil_lit,parens,braces,angles,brackets,semi,comma,colon,dot,semi_sep,semi_sep1,comma_sep,comma_sep1,__meta,__extmap,__hash){
this.trim = trim;
this.lexeme = lexeme;
this.sym = sym;
this.new_line = new_line;
this.one_of = one_of;
this.none_of = none_of;
this.token = token;
this.word = word;
this.identifier = identifier;
this.field = field;
this.char_lit = char_lit;
this.string_lit = string_lit;
this.dec_lit = dec_lit;
this.oct_lit = oct_lit;
this.hex_lit = hex_lit;
this.float_lit = float_lit;
this.bool_lit = bool_lit;
this.nil_lit = nil_lit;
this.parens = parens;
this.braces = braces;
this.angles = angles;
this.brackets = brackets;
this.semi = semi;
this.comma = comma;
this.colon = colon;
this.dot = dot;
this.semi_sep = semi_sep;
this.semi_sep1 = semi_sep1;
this.comma_sep = comma_sep;
this.comma_sep1 = comma_sep1;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
blancas.kern.lexer.TokenParsers.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27835__auto__,k__27836__auto__){
var self__ = this;
var this__27835__auto____$1 = this;
return this__27835__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__27836__auto__,null);
});

blancas.kern.lexer.TokenParsers.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27837__auto__,k30565,else__27838__auto__){
var self__ = this;
var this__27837__auto____$1 = this;
var G__30569 = k30565;
var G__30569__$1 = (((G__30569 instanceof cljs.core.Keyword))?G__30569.fqn:null);
switch (G__30569__$1) {
case "trim":
return self__.trim;

break;
case "lexeme":
return self__.lexeme;

break;
case "sym":
return self__.sym;

break;
case "new-line":
return self__.new_line;

break;
case "one-of":
return self__.one_of;

break;
case "none-of":
return self__.none_of;

break;
case "token":
return self__.token;

break;
case "word":
return self__.word;

break;
case "identifier":
return self__.identifier;

break;
case "field":
return self__.field;

break;
case "char-lit":
return self__.char_lit;

break;
case "string-lit":
return self__.string_lit;

break;
case "dec-lit":
return self__.dec_lit;

break;
case "oct-lit":
return self__.oct_lit;

break;
case "hex-lit":
return self__.hex_lit;

break;
case "float-lit":
return self__.float_lit;

break;
case "bool-lit":
return self__.bool_lit;

break;
case "nil-lit":
return self__.nil_lit;

break;
case "parens":
return self__.parens;

break;
case "braces":
return self__.braces;

break;
case "angles":
return self__.angles;

break;
case "brackets":
return self__.brackets;

break;
case "semi":
return self__.semi;

break;
case "comma":
return self__.comma;

break;
case "colon":
return self__.colon;

break;
case "dot":
return self__.dot;

break;
case "semi-sep":
return self__.semi_sep;

break;
case "semi-sep1":
return self__.semi_sep1;

break;
case "comma-sep":
return self__.comma_sep;

break;
case "comma-sep1":
return self__.comma_sep1;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30565,else__27838__auto__);

}
});

blancas.kern.lexer.TokenParsers.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27849__auto__,writer__27850__auto__,opts__27851__auto__){
var self__ = this;
var this__27849__auto____$1 = this;
var pr_pair__27852__auto__ = ((function (this__27849__auto____$1){
return (function (keyval__27853__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27850__auto__,cljs.core.pr_writer,""," ","",opts__27851__auto__,keyval__27853__auto__);
});})(this__27849__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27850__auto__,pr_pair__27852__auto__,"#blancas.kern.lexer.TokenParsers{",", ","}",opts__27851__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trim","trim",774319767),self__.trim],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lexeme","lexeme",750515121),self__.lexeme],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-line","new-line",1060819447),self__.new_line],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"one-of","one-of",144367098),self__.one_of],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"none-of","none-of",-1115383390),self__.none_of],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"token","token",-1211463215),self__.token],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"word","word",-420123725),self__.word],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"field","field",-1302436500),self__.field],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"char-lit","char-lit",762455694),self__.char_lit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"string-lit","string-lit",1570344494),self__.string_lit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dec-lit","dec-lit",-1364231639),self__.dec_lit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"oct-lit","oct-lit",-1521077730),self__.oct_lit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hex-lit","hex-lit",-448097198),self__.hex_lit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"float-lit","float-lit",1663609324),self__.float_lit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bool-lit","bool-lit",-1597378914),self__.bool_lit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nil-lit","nil-lit",-1151930496),self__.nil_lit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parens","parens",1028661830),self__.parens],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"braces","braces",907708519),self__.braces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"angles","angles",-1220989759),self__.angles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"brackets","brackets",1720097338),self__.brackets],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"semi","semi",276867757),self__.semi],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"comma","comma",1699024745),self__.comma],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"colon","colon",-965200945),self__.colon],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dot","dot",1442709401),self__.dot],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"semi-sep","semi-sep",-796169557),self__.semi_sep],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"semi-sep1","semi-sep1",-700853510),self__.semi_sep1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"comma-sep","comma-sep",1118800894),self__.comma_sep],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"comma-sep1","comma-sep1",412337366),self__.comma_sep1],null))], null),self__.__extmap));
});

blancas.kern.lexer.TokenParsers.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30564){
var self__ = this;
var G__30564__$1 = this;
return (new cljs.core.RecordIter((0),G__30564__$1,30,new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trim","trim",774319767),new cljs.core.Keyword(null,"lexeme","lexeme",750515121),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"new-line","new-line",1060819447),new cljs.core.Keyword(null,"one-of","one-of",144367098),new cljs.core.Keyword(null,"none-of","none-of",-1115383390),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"word","word",-420123725),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"char-lit","char-lit",762455694),new cljs.core.Keyword(null,"string-lit","string-lit",1570344494),new cljs.core.Keyword(null,"dec-lit","dec-lit",-1364231639),new cljs.core.Keyword(null,"oct-lit","oct-lit",-1521077730),new cljs.core.Keyword(null,"hex-lit","hex-lit",-448097198),new cljs.core.Keyword(null,"float-lit","float-lit",1663609324),new cljs.core.Keyword(null,"bool-lit","bool-lit",-1597378914),new cljs.core.Keyword(null,"nil-lit","nil-lit",-1151930496),new cljs.core.Keyword(null,"parens","parens",1028661830),new cljs.core.Keyword(null,"braces","braces",907708519),new cljs.core.Keyword(null,"angles","angles",-1220989759),new cljs.core.Keyword(null,"brackets","brackets",1720097338),new cljs.core.Keyword(null,"semi","semi",276867757),new cljs.core.Keyword(null,"comma","comma",1699024745),new cljs.core.Keyword(null,"colon","colon",-965200945),new cljs.core.Keyword(null,"dot","dot",1442709401),new cljs.core.Keyword(null,"semi-sep","semi-sep",-796169557),new cljs.core.Keyword(null,"semi-sep1","semi-sep1",-700853510),new cljs.core.Keyword(null,"comma-sep","comma-sep",1118800894),new cljs.core.Keyword(null,"comma-sep1","comma-sep1",412337366)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

blancas.kern.lexer.TokenParsers.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27833__auto__){
var self__ = this;
var this__27833__auto____$1 = this;
return self__.__meta;
});

blancas.kern.lexer.TokenParsers.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27830__auto__){
var self__ = this;
var this__27830__auto____$1 = this;
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,self__.__hash));
});

blancas.kern.lexer.TokenParsers.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27839__auto__){
var self__ = this;
var this__27839__auto____$1 = this;
return (30 + cljs.core.count.call(null,self__.__extmap));
});

blancas.kern.lexer.TokenParsers.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27831__auto__){
var self__ = this;
var this__27831__auto____$1 = this;
var h__27649__auto__ = self__.__hash;
if(!((h__27649__auto__ == null))){
return h__27649__auto__;
} else {
var h__27649__auto____$1 = ((function (h__27649__auto__,this__27831__auto____$1){
return (function (coll__27832__auto__){
return (276489583 ^ cljs.core.hash_unordered_coll.call(null,coll__27832__auto__));
});})(h__27649__auto__,this__27831__auto____$1))
.call(null,this__27831__auto____$1);
self__.__hash = h__27649__auto____$1;

return h__27649__auto____$1;
}
});

blancas.kern.lexer.TokenParsers.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30566,other30567){
var self__ = this;
var this30566__$1 = this;
return (!((other30567 == null))) && ((this30566__$1.constructor === other30567.constructor)) && (cljs.core._EQ_.call(null,this30566__$1.trim,other30567.trim)) && (cljs.core._EQ_.call(null,this30566__$1.lexeme,other30567.lexeme)) && (cljs.core._EQ_.call(null,this30566__$1.sym,other30567.sym)) && (cljs.core._EQ_.call(null,this30566__$1.new_line,other30567.new_line)) && (cljs.core._EQ_.call(null,this30566__$1.one_of,other30567.one_of)) && (cljs.core._EQ_.call(null,this30566__$1.none_of,other30567.none_of)) && (cljs.core._EQ_.call(null,this30566__$1.token,other30567.token)) && (cljs.core._EQ_.call(null,this30566__$1.word,other30567.word)) && (cljs.core._EQ_.call(null,this30566__$1.identifier,other30567.identifier)) && (cljs.core._EQ_.call(null,this30566__$1.field,other30567.field)) && (cljs.core._EQ_.call(null,this30566__$1.char_lit,other30567.char_lit)) && (cljs.core._EQ_.call(null,this30566__$1.string_lit,other30567.string_lit)) && (cljs.core._EQ_.call(null,this30566__$1.dec_lit,other30567.dec_lit)) && (cljs.core._EQ_.call(null,this30566__$1.oct_lit,other30567.oct_lit)) && (cljs.core._EQ_.call(null,this30566__$1.hex_lit,other30567.hex_lit)) && (cljs.core._EQ_.call(null,this30566__$1.float_lit,other30567.float_lit)) && (cljs.core._EQ_.call(null,this30566__$1.bool_lit,other30567.bool_lit)) && (cljs.core._EQ_.call(null,this30566__$1.nil_lit,other30567.nil_lit)) && (cljs.core._EQ_.call(null,this30566__$1.parens,other30567.parens)) && (cljs.core._EQ_.call(null,this30566__$1.braces,other30567.braces)) && (cljs.core._EQ_.call(null,this30566__$1.angles,other30567.angles)) && (cljs.core._EQ_.call(null,this30566__$1.brackets,other30567.brackets)) && (cljs.core._EQ_.call(null,this30566__$1.semi,other30567.semi)) && (cljs.core._EQ_.call(null,this30566__$1.comma,other30567.comma)) && (cljs.core._EQ_.call(null,this30566__$1.colon,other30567.colon)) && (cljs.core._EQ_.call(null,this30566__$1.dot,other30567.dot)) && (cljs.core._EQ_.call(null,this30566__$1.semi_sep,other30567.semi_sep)) && (cljs.core._EQ_.call(null,this30566__$1.semi_sep1,other30567.semi_sep1)) && (cljs.core._EQ_.call(null,this30566__$1.comma_sep,other30567.comma_sep)) && (cljs.core._EQ_.call(null,this30566__$1.comma_sep1,other30567.comma_sep1)) && (cljs.core._EQ_.call(null,this30566__$1.__extmap,other30567.__extmap));
});

blancas.kern.lexer.TokenParsers.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27844__auto__,k__27845__auto__){
var self__ = this;
var this__27844__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 30, [new cljs.core.Keyword(null,"nil-lit","nil-lit",-1151930496),null,new cljs.core.Keyword(null,"angles","angles",-1220989759),null,new cljs.core.Keyword(null,"none-of","none-of",-1115383390),null,new cljs.core.Keyword(null,"parens","parens",1028661830),null,new cljs.core.Keyword(null,"braces","braces",907708519),null,new cljs.core.Keyword(null,"dec-lit","dec-lit",-1364231639),null,new cljs.core.Keyword(null,"comma","comma",1699024745),null,new cljs.core.Keyword(null,"semi-sep","semi-sep",-796169557),null,new cljs.core.Keyword(null,"field","field",-1302436500),null,new cljs.core.Keyword(null,"float-lit","float-lit",1663609324),null,new cljs.core.Keyword(null,"semi","semi",276867757),null,new cljs.core.Keyword(null,"string-lit","string-lit",1570344494),null,new cljs.core.Keyword(null,"char-lit","char-lit",762455694),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null,new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"token","token",-1211463215),null,new cljs.core.Keyword(null,"lexeme","lexeme",750515121),null,new cljs.core.Keyword(null,"hex-lit","hex-lit",-448097198),null,new cljs.core.Keyword(null,"word","word",-420123725),null,new cljs.core.Keyword(null,"comma-sep1","comma-sep1",412337366),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null,new cljs.core.Keyword(null,"new-line","new-line",1060819447),null,new cljs.core.Keyword(null,"trim","trim",774319767),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null,new cljs.core.Keyword(null,"one-of","one-of",144367098),null,new cljs.core.Keyword(null,"brackets","brackets",1720097338),null,new cljs.core.Keyword(null,"semi-sep1","semi-sep1",-700853510),null,new cljs.core.Keyword(null,"oct-lit","oct-lit",-1521077730),null,new cljs.core.Keyword(null,"bool-lit","bool-lit",-1597378914),null,new cljs.core.Keyword(null,"comma-sep","comma-sep",1118800894),null], null), null),k__27845__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27844__auto____$1),self__.__meta),k__27845__auto__);
} else {
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27845__auto__)),null));
}
});

blancas.kern.lexer.TokenParsers.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27842__auto__,k__27843__auto__,G__30564){
var self__ = this;
var this__27842__auto____$1 = this;
var pred__30570 = cljs.core.keyword_identical_QMARK_;
var expr__30571 = k__27843__auto__;
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"trim","trim",774319767),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(G__30564,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"lexeme","lexeme",750515121),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,G__30564,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,G__30564,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"new-line","new-line",1060819447),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,G__30564,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"one-of","one-of",144367098),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,G__30564,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"none-of","none-of",-1115383390),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,G__30564,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"token","token",-1211463215),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,G__30564,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"word","word",-420123725),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,G__30564,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,G__30564,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"field","field",-1302436500),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,G__30564,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"char-lit","char-lit",762455694),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,G__30564,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"string-lit","string-lit",1570344494),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,G__30564,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"dec-lit","dec-lit",-1364231639),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,G__30564,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"oct-lit","oct-lit",-1521077730),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,G__30564,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"hex-lit","hex-lit",-448097198),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,G__30564,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"float-lit","float-lit",1663609324),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,G__30564,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"bool-lit","bool-lit",-1597378914),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,G__30564,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"nil-lit","nil-lit",-1151930496),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,G__30564,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"parens","parens",1028661830),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,G__30564,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"braces","braces",907708519),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,G__30564,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"angles","angles",-1220989759),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,G__30564,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"brackets","brackets",1720097338),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,G__30564,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"semi","semi",276867757),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,G__30564,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"comma","comma",1699024745),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,G__30564,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,G__30564,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"dot","dot",1442709401),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,G__30564,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"semi-sep","semi-sep",-796169557),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,G__30564,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"semi-sep1","semi-sep1",-700853510),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,G__30564,self__.comma_sep,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"comma-sep","comma-sep",1118800894),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,G__30564,self__.comma_sep1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30570.call(null,new cljs.core.Keyword(null,"comma-sep1","comma-sep1",412337366),expr__30571))){
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,G__30564,self__.__meta,self__.__extmap,null));
} else {
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27843__auto__,G__30564),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

blancas.kern.lexer.TokenParsers.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27847__auto__){
var self__ = this;
var this__27847__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trim","trim",774319767),self__.trim],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lexeme","lexeme",750515121),self__.lexeme],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-line","new-line",1060819447),self__.new_line],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"one-of","one-of",144367098),self__.one_of],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"none-of","none-of",-1115383390),self__.none_of],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"token","token",-1211463215),self__.token],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"word","word",-420123725),self__.word],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"field","field",-1302436500),self__.field],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"char-lit","char-lit",762455694),self__.char_lit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"string-lit","string-lit",1570344494),self__.string_lit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dec-lit","dec-lit",-1364231639),self__.dec_lit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"oct-lit","oct-lit",-1521077730),self__.oct_lit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hex-lit","hex-lit",-448097198),self__.hex_lit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"float-lit","float-lit",1663609324),self__.float_lit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bool-lit","bool-lit",-1597378914),self__.bool_lit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nil-lit","nil-lit",-1151930496),self__.nil_lit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parens","parens",1028661830),self__.parens],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"braces","braces",907708519),self__.braces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"angles","angles",-1220989759),self__.angles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"brackets","brackets",1720097338),self__.brackets],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"semi","semi",276867757),self__.semi],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"comma","comma",1699024745),self__.comma],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"colon","colon",-965200945),self__.colon],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dot","dot",1442709401),self__.dot],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"semi-sep","semi-sep",-796169557),self__.semi_sep],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"semi-sep1","semi-sep1",-700853510),self__.semi_sep1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"comma-sep","comma-sep",1118800894),self__.comma_sep],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"comma-sep1","comma-sep1",412337366),self__.comma_sep1],null))], null),self__.__extmap));
});

blancas.kern.lexer.TokenParsers.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27834__auto__,G__30564){
var self__ = this;
var this__27834__auto____$1 = this;
return (new blancas.kern.lexer.TokenParsers(self__.trim,self__.lexeme,self__.sym,self__.new_line,self__.one_of,self__.none_of,self__.token,self__.word,self__.identifier,self__.field,self__.char_lit,self__.string_lit,self__.dec_lit,self__.oct_lit,self__.hex_lit,self__.float_lit,self__.bool_lit,self__.nil_lit,self__.parens,self__.braces,self__.angles,self__.brackets,self__.semi,self__.comma,self__.colon,self__.dot,self__.semi_sep,self__.semi_sep1,self__.comma_sep,self__.comma_sep1,G__30564,self__.__extmap,self__.__hash));
});

blancas.kern.lexer.TokenParsers.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27840__auto__,entry__27841__auto__){
var self__ = this;
var this__27840__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27841__auto__)){
return this__27840__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__27841__auto__,(0)),cljs.core._nth.call(null,entry__27841__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27840__auto____$1,entry__27841__auto__);
}
});

blancas.kern.lexer.TokenParsers.getBasis = (function (){
return new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"trim","trim",-1880116002,null),new cljs.core.Symbol(null,"lexeme","lexeme",-1903920648,null),new cljs.core.Symbol(null,"sym","sym",195671222,null),new cljs.core.Symbol(null,"new-line","new-line",-1593616322,null),new cljs.core.Symbol(null,"one-of","one-of",1784898625,null),new cljs.core.Symbol(null,"none-of","none-of",525148137,null),new cljs.core.Symbol(null,"token","token",429068312,null),new cljs.core.Symbol(null,"word","word",1220407802,null),new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"field","field",338095027,null),new cljs.core.Symbol(null,"char-lit","char-lit",-1891980075,null),new cljs.core.Symbol(null,"string-lit","string-lit",-1084091275,null),new cljs.core.Symbol(null,"dec-lit","dec-lit",276299888,null),new cljs.core.Symbol(null,"oct-lit","oct-lit",119453797,null),new cljs.core.Symbol(null,"hex-lit","hex-lit",1192434329,null),new cljs.core.Symbol(null,"float-lit","float-lit",-990826445,null),new cljs.core.Symbol(null,"bool-lit","bool-lit",43152613,null),new cljs.core.Symbol(null,"nil-lit","nil-lit",488601031,null),new cljs.core.Symbol(null,"parens","parens",-1625773939,null),new cljs.core.Symbol(null,"braces","braces",-1746727250,null),new cljs.core.Symbol(null,"angles","angles",419541768,null),new cljs.core.Symbol(null,"brackets","brackets",-934338431,null),new cljs.core.Symbol(null,"semi","semi",1917399284,null),new cljs.core.Symbol(null,"comma","comma",-955411024,null),new cljs.core.Symbol(null,"colon","colon",675330582,null),new cljs.core.Symbol(null,"dot","dot",-1211726368,null),new cljs.core.Symbol(null,"semi-sep","semi-sep",844361970,null),new cljs.core.Symbol(null,"semi-sep1","semi-sep1",939678017,null),new cljs.core.Symbol(null,"comma-sep","comma-sep",-1535634875,null),new cljs.core.Symbol(null,"comma-sep1","comma-sep1",2052868893,null)], null);
});

blancas.kern.lexer.TokenParsers.cljs$lang$type = true;

blancas.kern.lexer.TokenParsers.cljs$lang$ctorPrSeq = (function (this__27871__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"blancas.kern.lexer/TokenParsers");
});

blancas.kern.lexer.TokenParsers.cljs$lang$ctorPrWriter = (function (this__27871__auto__,writer__27872__auto__){
return cljs.core._write.call(null,writer__27872__auto__,"blancas.kern.lexer/TokenParsers");
});

blancas.kern.lexer.__GT_TokenParsers = (function blancas$kern$lexer$__GT_TokenParsers(trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit,oct_lit,hex_lit,float_lit,bool_lit,nil_lit,parens,braces,angles,brackets,semi,comma,colon,dot,semi_sep,semi_sep1,comma_sep,comma_sep1){
return (new blancas.kern.lexer.TokenParsers(trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit,oct_lit,hex_lit,float_lit,bool_lit,nil_lit,parens,braces,angles,brackets,semi,comma,colon,dot,semi_sep,semi_sep1,comma_sep,comma_sep1,null,null,null));
});

blancas.kern.lexer.map__GT_TokenParsers = (function blancas$kern$lexer$map__GT_TokenParsers(G__30568){
return (new blancas.kern.lexer.TokenParsers(new cljs.core.Keyword(null,"trim","trim",774319767).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"lexeme","lexeme",750515121).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"new-line","new-line",1060819447).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"one-of","one-of",144367098).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"none-of","none-of",-1115383390).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"char-lit","char-lit",762455694).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"string-lit","string-lit",1570344494).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"dec-lit","dec-lit",-1364231639).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"oct-lit","oct-lit",-1521077730).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"hex-lit","hex-lit",-448097198).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"float-lit","float-lit",1663609324).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"bool-lit","bool-lit",-1597378914).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"nil-lit","nil-lit",-1151930496).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"parens","parens",1028661830).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"braces","braces",907708519).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"angles","angles",-1220989759).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"brackets","brackets",1720097338).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"semi","semi",276867757).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"comma","comma",1699024745).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"dot","dot",1442709401).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"semi-sep","semi-sep",-796169557).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"semi-sep1","semi-sep1",-700853510).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"comma-sep","comma-sep",1118800894).cljs$core$IFn$_invoke$arity$1(G__30568),new cljs.core.Keyword(null,"comma-sep1","comma-sep1",412337366).cljs$core$IFn$_invoke$arity$1(G__30568),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__30568,new cljs.core.Keyword(null,"trim","trim",774319767),new cljs.core.Keyword(null,"lexeme","lexeme",750515121),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"new-line","new-line",1060819447),new cljs.core.Keyword(null,"one-of","one-of",144367098),new cljs.core.Keyword(null,"none-of","none-of",-1115383390),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"word","word",-420123725),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"char-lit","char-lit",762455694),new cljs.core.Keyword(null,"string-lit","string-lit",1570344494),new cljs.core.Keyword(null,"dec-lit","dec-lit",-1364231639),new cljs.core.Keyword(null,"oct-lit","oct-lit",-1521077730),new cljs.core.Keyword(null,"hex-lit","hex-lit",-448097198),new cljs.core.Keyword(null,"float-lit","float-lit",1663609324),new cljs.core.Keyword(null,"bool-lit","bool-lit",-1597378914),new cljs.core.Keyword(null,"nil-lit","nil-lit",-1151930496),new cljs.core.Keyword(null,"parens","parens",1028661830),new cljs.core.Keyword(null,"braces","braces",907708519),new cljs.core.Keyword(null,"angles","angles",-1220989759),new cljs.core.Keyword(null,"brackets","brackets",1720097338),new cljs.core.Keyword(null,"semi","semi",276867757),new cljs.core.Keyword(null,"comma","comma",1699024745),new cljs.core.Keyword(null,"colon","colon",-965200945),new cljs.core.Keyword(null,"dot","dot",1442709401),new cljs.core.Keyword(null,"semi-sep","semi-sep",-796169557),new cljs.core.Keyword(null,"semi-sep1","semi-sep1",-700853510),new cljs.core.Keyword(null,"comma-sep","comma-sep",1118800894),new cljs.core.Keyword(null,"comma-sep1","comma-sep1",412337366))),null));
});

/**
 * Skips over any whitespace, including comments (if defined), at
 *        the start of the input. Whether newline characters are removed
 *        as whitespace is configured by :trim-newline. When that setting
 *        is true, the setting :line-continuation is activated.
 */
blancas.kern.lexer.trim = (function blancas$kern$lexer$trim(){
return null;
});
/**
 * Applies parser p, then calls (trim).
 */
blancas.kern.lexer.lexeme = (function blancas$kern$lexer$lexeme(p){
return null;
});
/**
 * Parses a single character c. Compares according to
 *        :case-sensitive. Calls (trim) afterwards.
 */
blancas.kern.lexer.sym = (function blancas$kern$lexer$sym(c){
return null;
});
/**
 * Parses a new line, UNIX or Windows style; then calls (trim).
 */
blancas.kern.lexer.new_line = (function blancas$kern$lexer$new_line(){
return null;
});
/**
 * Succeeds if the next character is in the supplied string.
 *        Calls (trim) afterwards.
 */
blancas.kern.lexer.one_of = (function blancas$kern$lexer$one_of(cs){
return null;
});
/**
 * Succeeds if the next character is not in the supplied string.
 *        Calls (trim) afterwards.
 */
blancas.kern.lexer.none_of = (function blancas$kern$lexer$none_of(){
return null;
});
/**
 * Parses a specific string, not necessarily delimited. If more
 *        than one are given it will try each choice in turn. Compares
 *        according to :case-sensitive. Calls (trim) afterwards.
 */
blancas.kern.lexer.token = (function blancas$kern$lexer$token(var_args){
var G__30577 = arguments.length;
switch (G__30577) {
case 1:
return blancas.kern.lexer.token.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___30579 = arguments.length;
var i__28365__auto___30580 = (0);
while(true){
if((i__28365__auto___30580 < len__28364__auto___30579)){
args_arr__28383__auto__.push((arguments[i__28365__auto___30580]));

var G__30581 = (i__28365__auto___30580 + (1));
i__28365__auto___30580 = G__30581;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((1)),(0),null));
return blancas.kern.lexer.token.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28384__auto__);

}
});

blancas.kern.lexer.token.cljs$core$IFn$_invoke$arity$1 = (function (cs){
return null;
});

blancas.kern.lexer.token.cljs$core$IFn$_invoke$arity$variadic = (function (cs,more){
return null;
});

blancas.kern.lexer.token.cljs$lang$applyTo = (function (seq30575){
var G__30576 = cljs.core.first.call(null,seq30575);
var seq30575__$1 = cljs.core.next.call(null,seq30575);
return blancas.kern.lexer.token.cljs$core$IFn$_invoke$arity$variadic(G__30576,seq30575__$1);
});

blancas.kern.lexer.token.cljs$lang$maxFixedArity = (1);

/**
 * Parses a specific string; must be delimited by any character not
 *        parsed by :identifier-letter. If more than one are given it will
 *        try each choice in turn. Compares according to :case-sensitive.
 *        Calls (trim) afterwards.
 */
blancas.kern.lexer.word = (function blancas$kern$lexer$word(var_args){
var G__30585 = arguments.length;
switch (G__30585) {
case 1:
return blancas.kern.lexer.word.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___30587 = arguments.length;
var i__28365__auto___30588 = (0);
while(true){
if((i__28365__auto___30588 < len__28364__auto___30587)){
args_arr__28383__auto__.push((arguments[i__28365__auto___30588]));

var G__30589 = (i__28365__auto___30588 + (1));
i__28365__auto___30588 = G__30589;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((1)),(0),null));
return blancas.kern.lexer.word.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28384__auto__);

}
});

blancas.kern.lexer.word.cljs$core$IFn$_invoke$arity$1 = (function (cs){
return null;
});

blancas.kern.lexer.word.cljs$core$IFn$_invoke$arity$variadic = (function (cs,more){
return null;
});

blancas.kern.lexer.word.cljs$lang$applyTo = (function (seq30583){
var G__30584 = cljs.core.first.call(null,seq30583);
var seq30583__$1 = cljs.core.next.call(null,seq30583);
return blancas.kern.lexer.word.cljs$core$IFn$_invoke$arity$variadic(G__30584,seq30583__$1);
});

blancas.kern.lexer.word.cljs$lang$maxFixedArity = (1);

/**
 * Parses an unquoted string suitable for an identifier or a name.
 *        The start of the input is defined by :identifier-start, and
 *        subsequent symbols by :identtifier-letter. It will check that
 *        the parsed value not be in the list of :reserved-names, if any,
 *        comparing according to :case-sensitive. Calls (trim) afterwards.
 */
blancas.kern.lexer.identifier = (function blancas$kern$lexer$identifier(){
return null;
});
/**
 * Parses an unquoted text field terminated by any character
 *        in cs. Calls (trim) afterwards.
 */
blancas.kern.lexer.field = (function blancas$kern$lexer$field(cs){
return null;
});
/**
 * Parses a character literal according to the :type setting. The
 *        common syntax is a symbol in single quotes with the usual
 *        escape codes. Calls (trim) afterwards.
 * 
 *        The following styles add escaped characters:
 * 
 *        :basic   \b \t \n \f \r \' \" \/
 *        :C       :basic + \0ooo \0xnn \unnnnnnnn
 *        :Haskell :basic + \nnnn \onnnn \xnnnn
 *        :Java    :basic + \0ooo \unnnn
 *        :Shell   :basic + \0ooo \0xnn \unnnnnnnn
 */
blancas.kern.lexer.char_lit = (function blancas$kern$lexer$char_lit(){
return null;
});
/**
 * Parses a string literal according to the :type setting. The
 *        common syntax is any number of symbols in double quotes
 *        with the usual escape codes. Calls (trim) afterward.
 * 
 *        The following styles add escaped characters:
 * 
 *        :basic   \b \t \n \f \r \' \" \/
 *        :C       :basic + \0ooo \0xnn \unnnnnnnn
 *        :Haskell :basic + \nnnn \onnnn \xnnnn
 *        :Java    :basic + \0ooo \unnnn
 *        :Shell   :basic + \0ooo \0xnn \unnnnnnnn
 */
blancas.kern.lexer.string_lit = (function blancas$kern$lexer$string_lit(){
return null;
});
/**
 * Parses a decimal number as Long or BigInt depending on the
 *        magnitude or if it ends with N. Calls (trim) afterward.
 */
blancas.kern.lexer.dec_lit = (function blancas$kern$lexer$dec_lit(){
return null;
});
/**
 * Parses an octal number as Long or BigInt depending on the
 *        magnitude or if it ends with N. Calls (trim) afterward.
 */
blancas.kern.lexer.oct_lit = (function blancas$kern$lexer$oct_lit(){
return null;
});
/**
 * Parses a hexadecimal number as Long or BigInt depending on the
 *        magnitude or if it ends with N. Calls (trim) afterward.
 */
blancas.kern.lexer.hex_lit = (function blancas$kern$lexer$hex_lit(){
return null;
});
/**
 * Parses a floating-point number as Double or BigDecimal depending
 *        on the magnitude or if it ends with M. It cannot start with a
 *        period. The first period found must be followed by at least one
 *        digit. Calls (trim) afterward.
 */
blancas.kern.lexer.float_lit = (function blancas$kern$lexer$float_lit(){
return null;
});
/**
 * Parses a boolean value, true or false, comparing according to
 *        :case-sensitive. Calls (trim) afterward.
 */
blancas.kern.lexer.bool_lit = (function blancas$kern$lexer$bool_lit(){
return null;
});
/**
 * Parses a null value, nil or null, comparing according to
 *        :case-sensitive. Calls (trim) afterward.
 */
blancas.kern.lexer.nil_lit = (function blancas$kern$lexer$nil_lit(){
return null;
});
/**
 * Applies parser p skiping over surrounding parenthesis.
 *        Calls (trim) after the opening paren, after p, and after
 *        the closing paren.
 */
blancas.kern.lexer.parens = (function blancas$kern$lexer$parens(p){
return null;
});
/**
 * Applies parser p skiping over surrounding braces.
 *        Calls (trim) after the opening brace, after p, and after
 *        the closing brace.
 */
blancas.kern.lexer.braces = (function blancas$kern$lexer$braces(p){
return null;
});
/**
 * Applies parser p skiping over surrounding angle brackets.
 *        Calls (trim) after the opening bracket, after p, and after
 *        the closing bracket.
 */
blancas.kern.lexer.angles = (function blancas$kern$lexer$angles(p){
return null;
});
/**
 * Applies parser p skiping over surrounding brackets.
 *        Calls (trim) after the opening bracket, after p, and after
 *        the closing bracket.
 */
blancas.kern.lexer.brackets = (function blancas$kern$lexer$brackets(p){
return null;
});
/**
 * Parses a single semicolon; then calls (trim).
 */
blancas.kern.lexer.semi = (function blancas$kern$lexer$semi(){
return null;
});
/**
 * Parses a single comma; then calls (trim).
 */
blancas.kern.lexer.comma = (function blancas$kern$lexer$comma(){
return null;
});
/**
 * Parses a single colon; then calls (trim).
 */
blancas.kern.lexer.colon = (function blancas$kern$lexer$colon(){
return null;
});
/**
 * Parses a single dot; then calls (trim).
 */
blancas.kern.lexer.dot = (function blancas$kern$lexer$dot(){
return null;
});
/**
 * Applies parser p zero or more times, skiping over separating
 *        semicolons. Calls (trim) after each p and semicolon.
 */
blancas.kern.lexer.semi_sep = (function blancas$kern$lexer$semi_sep(){
return null;
});
/**
 * Applies parser p one or more times, skiping over separating
 *        semicolons. Calls (trim) after each p and semicolon.
 */
blancas.kern.lexer.semi_sep1 = (function blancas$kern$lexer$semi_sep1(){
return null;
});
/**
 * Applies parser p zero or more times, skiping over separating
 *        commas. Calls (trim) after each p and comma.
 */
blancas.kern.lexer.comma_sep = (function blancas$kern$lexer$comma_sep(){
return null;
});
/**
 * Applies parser p one or more times, skiping over separating
 *        commas. Calls (trim) after each p and comma.
 */
blancas.kern.lexer.comma_sep1 = (function blancas$kern$lexer$comma_sep1(){
return null;
});
/**
 * Parses a line comment.
 */
blancas.kern.lexer.line_comment = (function blancas$kern$lexer$line_comment(rec){
var start = new cljs.core.Keyword(null,"comment-line","comment-line",-935339272).cljs$core$IFn$_invoke$arity$1(rec);
return blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core.token_STAR_.call(null,start),((function (start){
return (function (_){
return blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core.many_till.call(null,blancas.kern.core.any_char,blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core.new_line_STAR_,blancas.kern.core.eof)),((function (start){
return (function (___$1){
return blancas.kern.core.return$.call(null,null);
});})(start))
);
});})(start))
);
});
/**
 * Parses the contents and end of a nested block comment.
 */
blancas.kern.lexer.block_nested = (function blancas$kern$lexer$block_nested(rec){
var start = new cljs.core.Keyword(null,"comment-start","comment-start",-1104408439).cljs$core$IFn$_invoke$arity$1(rec);
var end = new cljs.core.Keyword(null,"comment-end","comment-end",-48325961).cljs$core$IFn$_invoke$arity$1(rec);
return blancas.kern.core.expect.call(null,blancas.kern.core.many_till.call(null,blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._LT__COLON__GT_.call(null,blancas.kern.core.token_STAR_.call(null,start)),((function (start,end){
return (function (_){
return blancas.kern.lexer.block_nested.call(null,rec);
});})(start,end))
),blancas.kern.core.any_char),blancas.kern.core.token_STAR_.call(null,end)),blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"end-comment","end-comment",-88176909)));
});
/**
 * Parses the contents and end of a block comment.
 */
blancas.kern.lexer.block_rest = (function blancas$kern$lexer$block_rest(rec){
var end = new cljs.core.Keyword(null,"comment-end","comment-end",-48325961).cljs$core$IFn$_invoke$arity$1(rec);
return blancas.kern.core.expect.call(null,blancas.kern.core.many_till.call(null,blancas.kern.core.any_char,blancas.kern.core.token_STAR_.call(null,end)),blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"end-comment","end-comment",-88176909)));
});
/**
 * Parses a block comment.
 */
blancas.kern.lexer.block_comment = (function blancas$kern$lexer$block_comment(rec){
var start = new cljs.core.Keyword(null,"comment-start","comment-start",-1104408439).cljs$core$IFn$_invoke$arity$1(rec);
var nest_QMARK_ = new cljs.core.Keyword(null,"nested-comments","nested-comments",-856738865).cljs$core$IFn$_invoke$arity$1(rec);
return blancas.kern.core.skip.call(null,blancas.kern.core._LT__COLON__GT_.call(null,blancas.kern.core.token_STAR_.call(null,start)),(cljs.core.truth_(nest_QMARK_)?blancas.kern.lexer.block_nested.call(null,rec):blancas.kern.lexer.block_rest.call(null,rec)));
});
blancas.kern.lexer.space_ascii = (32);
/**
 * Parses an escape code for a basic char.
 */
blancas.kern.lexer.esc_char = (function (){var codes = cljs.core.zipmap.call(null,"btnfr'\"\\/","\b\t\n\f\r'\"\\/");
return blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core.one_of_STAR_.call(null,"btnfr'\"\\/"),blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"esc-code","esc-code",-875562618))),((function (codes){
return (function (x){
return blancas.kern.core.return$.call(null,cljs.core.get.call(null,codes,x));
});})(codes))
);
})();
blancas.kern.lexer.char_code = (function blancas$kern$lexer$char_code(c){
return c.charCodeAt((0));
});
/**
 * Parses an unquoted character literal. Character c must be escaped.
 */
blancas.kern.lexer.basic_char = (function blancas$kern$lexer$basic_char(c){
return blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core.satisfy.call(null,(function (p1__30590_SHARP_){
return (cljs.core.not_EQ_.call(null,p1__30590_SHARP_,c)) && (cljs.core.not_EQ_.call(null,p1__30590_SHARP_,"\\")) && ((blancas.kern.lexer.char_code.call(null,p1__30590_SHARP_) >= blancas.kern.lexer.space_ascii));
})),blancas.kern.core._GT__GT_.call(null,blancas.kern.core.sym_STAR_.call(null,"\\"),blancas.kern.lexer.esc_char)),blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"char-lit","char-lit",762455694)));
});
/**
 * Parses an octal escape code; the result is the encoded char.
 */
blancas.kern.lexer.esc_oct = blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._LT__PLUS__GT_.call(null,blancas.kern.core.many1.call(null,blancas.kern.core.oct_digit)),(function (x){
var n = parseInt(x,(8));
if((n <= (255))){
return blancas.kern.core.return$.call(null,cljs.core.char$.call(null,n));
} else {
return blancas.kern.core.fail.call(null,blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"bad-octal","bad-octal",-1900109825)));
}
}));
/**
 * Parses a unicode escape code; the result is the encoded char.
 */
blancas.kern.lexer.esc_uni = blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._LT__PLUS__GT_.call(null,blancas.kern.core._GT__GT_.call(null,blancas.kern.core.sym_STAR_.call(null,"u"),blancas.kern.core.times.call(null,(4),blancas.kern.core.hex_digit))),(function (x){
return blancas.kern.core.return$.call(null,(String.fromCodePoint(parseInt(x,(16)))[(0)]));
}));
/**
 * Parses an unquoted Java character literal. Character c must be escaped.
 */
blancas.kern.lexer.java_char = (function blancas$kern$lexer$java_char(c){
return blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core.satisfy.call(null,(function (p1__30591_SHARP_){
return (cljs.core.not_EQ_.call(null,p1__30591_SHARP_,c)) && (cljs.core.not_EQ_.call(null,p1__30591_SHARP_,"\\")) && ((blancas.kern.lexer.char_code.call(null,p1__30591_SHARP_) >= blancas.kern.lexer.space_ascii));
})),blancas.kern.core._GT__GT_.call(null,blancas.kern.core.sym_STAR_.call(null,"\\"),blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.lexer.esc_char,blancas.kern.lexer.esc_oct,blancas.kern.lexer.esc_uni),blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"esc-code-j","esc-code-j",145779396))))),blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"char-lit","char-lit",762455694)));
});
/**
 * Parses an escape code for a C char.
 */
blancas.kern.lexer.c_esc_char = (function (){var codes = cljs.core.assoc.call(null,cljs.core.zipmap.call(null,"btnfr'\"\\?/","\b\t\n\f\r'\"\\?/"),"a",cljs.core.char$.call(null,(7)),"v",cljs.core.char$.call(null,(11)),"0",cljs.core.char$.call(null,(0)));
return blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core.one_of_STAR_.call(null,"btnfr'\"\\?/av0"),((function (codes){
return (function (x){
return blancas.kern.core.return$.call(null,cljs.core.get.call(null,codes,x));
});})(codes))
);
})();
/**
 * Parses a long unicode escape code; the result is the encoded char.
 */
blancas.kern.lexer.c_esc_uni = blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._LT__PLUS__GT_.call(null,blancas.kern.core._GT__GT_.call(null,blancas.kern.core.sym_STAR_.call(null,"U"),blancas.kern.core.times.call(null,(8),blancas.kern.core.hex_digit))),(function (x){
return blancas.kern.core.return$.call(null,(String.fromCodePoint(parseInt(x,(16)))[(0)]));
}));
/**
 * Parses a hex escape code; the result is the encoded char.
 */
blancas.kern.lexer.c_esc_hex = blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._LT__PLUS__GT_.call(null,blancas.kern.core._GT__GT_.call(null,blancas.kern.core.sym_.call(null,"x"),blancas.kern.core.times.call(null,(2),blancas.kern.core.hex_digit))),(function (x){
return blancas.kern.core.return$.call(null,(String.fromCodePoint(parseInt(x,(16)))[(0)]));
}));
/**
 * Parses an unquoted C character literal. Character c must be escaped.
 */
blancas.kern.lexer.c_char = (function blancas$kern$lexer$c_char(c){
return blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core.satisfy.call(null,(function (p1__30592_SHARP_){
return (cljs.core.not_EQ_.call(null,p1__30592_SHARP_,c)) && (cljs.core.not_EQ_.call(null,p1__30592_SHARP_,"\\")) && ((blancas.kern.lexer.char_code.call(null,p1__30592_SHARP_) >= blancas.kern.lexer.space_ascii));
})),blancas.kern.core._GT__GT_.call(null,blancas.kern.core.sym_STAR_.call(null,"\\"),blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.lexer.c_esc_hex,blancas.kern.lexer.c_esc_char,blancas.kern.lexer.esc_oct,blancas.kern.lexer.esc_uni,blancas.kern.lexer.c_esc_uni),blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"esc-code-c","esc-code-c",453502246))))),blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"char-lit","char-lit",762455694)));
});
/**
 * Parses a Haskell octal escape code; the result is the encoded char.
 */
blancas.kern.lexer.h_esc_oct = blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._LT__PLUS__GT_.call(null,blancas.kern.core._GT__GT_.call(null,blancas.kern.core.sym_STAR_.call(null,"o"),blancas.kern.core.many1.call(null,blancas.kern.core.oct_digit))),(function (x){
var n = parseInt(x,(8));
if((n <= (1114111))){
return blancas.kern.core.return$.call(null,cljs.core.char$.call(null,n));
} else {
return blancas.kern.core.fail.call(null,blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"bad-oct-h","bad-oct-h",160828044)));
}
}));
/**
 * Parses a Haskell decimal escape code; the result is the encoded char.
 */
blancas.kern.lexer.h_esc_dec = blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._LT__PLUS__GT_.call(null,blancas.kern.core.many1.call(null,blancas.kern.core.digit)),(function (x){
var n = parseInt(x);
if((n <= (1114111))){
return blancas.kern.core.return$.call(null,cljs.core.char$.call(null,n));
} else {
return blancas.kern.core.fail.call(null,blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"bad-dec-h","bad-dec-h",-1110940516)));
}
}));
/**
 * Parses a Haskell hex escape code; the result is the encoded char.
 */
blancas.kern.lexer.h_esc_hex = blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._LT__PLUS__GT_.call(null,blancas.kern.core._GT__GT_.call(null,blancas.kern.core.sym_STAR_.call(null,"x"),blancas.kern.core.many1.call(null,blancas.kern.core.hex_digit))),(function (x){
var n = parseInt(x,(16));
if((n <= (1114111))){
return blancas.kern.core.return$.call(null,cljs.core.char$.call(null,n));
} else {
return blancas.kern.core.fail.call(null,blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"bad-hex-h","bad-hex-h",-73942683)));
}
}));
/**
 * Parses Haskell character literals.
 */
blancas.kern.lexer.haskell_char = (function blancas$kern$lexer$haskell_char(c){
return blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core.satisfy.call(null,(function (p1__30593_SHARP_){
return (cljs.core.not_EQ_.call(null,p1__30593_SHARP_,c)) && (cljs.core.not_EQ_.call(null,p1__30593_SHARP_,"\\")) && ((blancas.kern.lexer.char_code.call(null,p1__30593_SHARP_) >= blancas.kern.lexer.space_ascii));
})),blancas.kern.core._GT__GT_.call(null,blancas.kern.core.sym_STAR_.call(null,"\\"),blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.lexer.h_esc_hex,blancas.kern.lexer.h_esc_oct,blancas.kern.lexer.c_esc_char,blancas.kern.lexer.h_esc_dec),blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"esc-code-h","esc-code-h",-50056298))))),blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"char-lit","char-lit",762455694)));
});
/**
 * Parses character literals delimited by single quotes.
 */
blancas.kern.lexer.char_parser = (function blancas$kern$lexer$char_parser(lex,f){
return blancas.kern.core._LT__QMARK__GT_.call(null,lex.call(null,blancas.kern.core.between.call(null,blancas.kern.core.sym_STAR_.call(null,"'"),blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core.sym_STAR_.call(null,"'"),blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"end-char","end-char",912903586))),f.call(null,"'"))),blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"char-lit","char-lit",762455694)));
});
/**
 * Parses string literals delimited by double quotes.
 */
blancas.kern.lexer.str_parser = (function blancas$kern$lexer$str_parser(lex,f){
return blancas.kern.core._LT__QMARK__GT_.call(null,lex.call(null,blancas.kern.core.between.call(null,blancas.kern.core.sym_STAR_.call(null,"\""),blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core.sym_STAR_.call(null,"\""),blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"end-string","end-string",-417901109))),blancas.kern.core._LT__PLUS__GT_.call(null,blancas.kern.core.many.call(null,f.call(null,"\""))))),blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"string-lit","string-lit",1570344494)));
});
blancas.kern.lexer.sign = blancas.kern.core.optional.call(null,blancas.kern.core.one_of_STAR_.call(null,"+-"));
blancas.kern.lexer.int_suffix = blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core._LT__LT_.call(null,blancas.kern.core.skip.call(null,blancas.kern.core.sym_STAR_.call(null,"N")),blancas.kern.core.not_followed_by.call(null,blancas.kern.core.letter)),blancas.kern.core.not_followed_by.call(null,blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core.letter,blancas.kern.core.sym_STAR_.call(null,"."))));
blancas.kern.lexer.float_suffix = blancas.kern.core._LT__LT_.call(null,blancas.kern.core.optional.call(null,blancas.kern.core.skip.call(null,blancas.kern.core.sym_STAR_.call(null,"M"))),blancas.kern.core.not_followed_by.call(null,blancas.kern.core.letter));
blancas.kern.lexer.read_num_lit = (function blancas$kern$lexer$read_num_lit(x){
return eval(x);
});
/**
 * Returns a function map that corresponds to the customization
 * values of the input record, whose fields are as follows:
 * 
 * :type                Identifies the type of settings.
 * :comment-start       A string that marks the start of a block comment.
 * :comment-end         A string that marks the end of a block comment.
 * :comment-line        A string that marks the start of a line comment.
 * :nested-comments     Whether the lexer accepts nested comments; a boolean.
 * :identifier-start    A parser for the start of an identifier.
 * :identifier-letter   A parser for the subsequent characters of an identifier.
 * :reserved-names      A list of names that cannot be identifiers.
 * :case-sensitive      Whether tokens are case-sensitive; a boolean.
 * :line-continuation   A parser for the token that precedes the new line.
 * :trim-newline        Treats newline character(s) as whitespace.
 * :leading-sign        Whether numbers accept an optional leading sign.
 */
blancas.kern.lexer.make_parsers = (function blancas$kern$lexer$make_parsers(rec){
var trim = (function (){var line_QMARK_ = cljs.core.seq.call(null,new cljs.core.Keyword(null,"comment-line","comment-line",-935339272).cljs$core$IFn$_invoke$arity$1(rec));
var multi_QMARK_ = cljs.core.seq.call(null,new cljs.core.Keyword(null,"comment-start","comment-start",-1104408439).cljs$core$IFn$_invoke$arity$1(rec));
var both_QMARK_ = (line_QMARK_) && (multi_QMARK_);
var ws = (cljs.core.truth_(new cljs.core.Keyword(null,"trim-newline","trim-newline",-983715733).cljs$core$IFn$_invoke$arity$1(rec))?blancas.kern.core.white_space:blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core.one_of_STAR_.call(null,"\t\f\r "),blancas.kern.core.skip.call(null,new cljs.core.Keyword(null,"line-continuation","line-continuation",6492671).cljs$core$IFn$_invoke$arity$1(rec),blancas.kern.core.new_line_STAR_)));
var many_ws = blancas.kern.core.skip_many1.call(null,ws);
if(both_QMARK_){
return blancas.kern.core.skip_many.call(null,blancas.kern.core._LT__BAR__GT_.call(null,many_ws,blancas.kern.lexer.line_comment.call(null,rec),blancas.kern.lexer.block_comment.call(null,rec)));
} else {
if(line_QMARK_){
return blancas.kern.core.skip_many.call(null,blancas.kern.core._LT__BAR__GT_.call(null,many_ws,blancas.kern.lexer.line_comment.call(null,rec)));
} else {
if(multi_QMARK_){
return blancas.kern.core.skip_many.call(null,blancas.kern.core._LT__BAR__GT_.call(null,many_ws,blancas.kern.lexer.block_comment.call(null,rec)));
} else {
return blancas.kern.core.skip_many.call(null,ws);

}
}
}
})();
var lexeme = ((function (trim){
return (function (p){
return blancas.kern.core._LT__LT_.call(null,p,trim);
});})(trim))
;
var sym = (cljs.core.truth_(new cljs.core.Keyword(null,"case-sensitive","case-sensitive",-1005239404).cljs$core$IFn$_invoke$arity$1(rec))?((function (trim,lexeme){
return (function (x){
return lexeme.call(null,blancas.kern.core.sym_STAR_.call(null,x));
});})(trim,lexeme))
:((function (trim,lexeme){
return (function (x){
return lexeme.call(null,blancas.kern.core.sym_.call(null,x));
});})(trim,lexeme))
);
var new_line = lexeme.call(null,blancas.kern.core.new_line_STAR_);
var one_of = ((function (trim,lexeme,sym,new_line){
return (function (cs){
return lexeme.call(null,blancas.kern.core.one_of_STAR_.call(null,cs));
});})(trim,lexeme,sym,new_line))
;
var none_of = ((function (trim,lexeme,sym,new_line,one_of){
return (function (cs){
return lexeme.call(null,blancas.kern.core.none_of_STAR_.call(null,cs));
});})(trim,lexeme,sym,new_line,one_of))
;
var token = (cljs.core.truth_(new cljs.core.Keyword(null,"case-sensitive","case-sensitive",-1005239404).cljs$core$IFn$_invoke$arity$1(rec))?((function (trim,lexeme,sym,new_line,one_of,none_of){
return (function() {
var G__30595 = null;
var G__30595__1 = (function (cs){
return lexeme.call(null,blancas.kern.core.token_STAR_.call(null,cs));
});
var G__30595__2 = (function() { 
var G__30596__delegate = function (cs,more){
return lexeme.call(null,cljs.core.apply.call(null,blancas.kern.core.token_STAR_,cs,more));
};
var G__30596 = function (cs,var_args){
var more = null;
if (arguments.length > 1) {
var G__30597__i = 0, G__30597__a = new Array(arguments.length -  1);
while (G__30597__i < G__30597__a.length) {G__30597__a[G__30597__i] = arguments[G__30597__i + 1]; ++G__30597__i;}
  more = new cljs.core.IndexedSeq(G__30597__a,0,null);
} 
return G__30596__delegate.call(this,cs,more);};
G__30596.cljs$lang$maxFixedArity = 1;
G__30596.cljs$lang$applyTo = (function (arglist__30598){
var cs = cljs.core.first(arglist__30598);
var more = cljs.core.rest(arglist__30598);
return G__30596__delegate(cs,more);
});
G__30596.cljs$core$IFn$_invoke$arity$variadic = G__30596__delegate;
return G__30596;
})()
;
G__30595 = function(cs,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return G__30595__1.call(this,cs);
default:
var G__30599 = null;
if (arguments.length > 1) {
var G__30600__i = 0, G__30600__a = new Array(arguments.length -  1);
while (G__30600__i < G__30600__a.length) {G__30600__a[G__30600__i] = arguments[G__30600__i + 1]; ++G__30600__i;}
G__30599 = new cljs.core.IndexedSeq(G__30600__a,0,null);
}
return G__30595__2.cljs$core$IFn$_invoke$arity$variadic(cs, G__30599);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__30595.cljs$lang$maxFixedArity = 1;
G__30595.cljs$lang$applyTo = G__30595__2.cljs$lang$applyTo;
G__30595.cljs$core$IFn$_invoke$arity$1 = G__30595__1;
G__30595.cljs$core$IFn$_invoke$arity$variadic = G__30595__2.cljs$core$IFn$_invoke$arity$variadic;
return G__30595;
})()
;})(trim,lexeme,sym,new_line,one_of,none_of))
:((function (trim,lexeme,sym,new_line,one_of,none_of){
return (function() {
var G__30601 = null;
var G__30601__1 = (function (cs){
return lexeme.call(null,blancas.kern.core.token_.call(null,cs));
});
var G__30601__2 = (function() { 
var G__30602__delegate = function (cs,more){
return lexeme.call(null,cljs.core.apply.call(null,blancas.kern.core.token_,cs,more));
};
var G__30602 = function (cs,var_args){
var more = null;
if (arguments.length > 1) {
var G__30603__i = 0, G__30603__a = new Array(arguments.length -  1);
while (G__30603__i < G__30603__a.length) {G__30603__a[G__30603__i] = arguments[G__30603__i + 1]; ++G__30603__i;}
  more = new cljs.core.IndexedSeq(G__30603__a,0,null);
} 
return G__30602__delegate.call(this,cs,more);};
G__30602.cljs$lang$maxFixedArity = 1;
G__30602.cljs$lang$applyTo = (function (arglist__30604){
var cs = cljs.core.first(arglist__30604);
var more = cljs.core.rest(arglist__30604);
return G__30602__delegate(cs,more);
});
G__30602.cljs$core$IFn$_invoke$arity$variadic = G__30602__delegate;
return G__30602;
})()
;
G__30601 = function(cs,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return G__30601__1.call(this,cs);
default:
var G__30605 = null;
if (arguments.length > 1) {
var G__30606__i = 0, G__30606__a = new Array(arguments.length -  1);
while (G__30606__i < G__30606__a.length) {G__30606__a[G__30606__i] = arguments[G__30606__i + 1]; ++G__30606__i;}
G__30605 = new cljs.core.IndexedSeq(G__30606__a,0,null);
}
return G__30601__2.cljs$core$IFn$_invoke$arity$variadic(cs, G__30605);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__30601.cljs$lang$maxFixedArity = 1;
G__30601.cljs$lang$applyTo = G__30601__2.cljs$lang$applyTo;
G__30601.cljs$core$IFn$_invoke$arity$1 = G__30601__1;
G__30601.cljs$core$IFn$_invoke$arity$variadic = G__30601__2.cljs$core$IFn$_invoke$arity$variadic;
return G__30601;
})()
;})(trim,lexeme,sym,new_line,one_of,none_of))
);
var word = (function (){var il = new cljs.core.Keyword(null,"identifier-letter","identifier-letter",78001785).cljs$core$IFn$_invoke$arity$1(rec);
if(cljs.core.truth_(new cljs.core.Keyword(null,"case-sensitive","case-sensitive",-1005239404).cljs$core$IFn$_invoke$arity$1(rec))){
return ((function (il,trim,lexeme,sym,new_line,one_of,none_of,token){
return (function() {
var G__30607 = null;
var G__30607__1 = (function (cs){
return lexeme.call(null,blancas.kern.core.word_STAR_.call(null,il,cs));
});
var G__30607__2 = (function() { 
var G__30608__delegate = function (cs,more){
return lexeme.call(null,cljs.core.apply.call(null,blancas.kern.core.word_STAR_,il,cs,more));
};
var G__30608 = function (cs,var_args){
var more = null;
if (arguments.length > 1) {
var G__30609__i = 0, G__30609__a = new Array(arguments.length -  1);
while (G__30609__i < G__30609__a.length) {G__30609__a[G__30609__i] = arguments[G__30609__i + 1]; ++G__30609__i;}
  more = new cljs.core.IndexedSeq(G__30609__a,0,null);
} 
return G__30608__delegate.call(this,cs,more);};
G__30608.cljs$lang$maxFixedArity = 1;
G__30608.cljs$lang$applyTo = (function (arglist__30610){
var cs = cljs.core.first(arglist__30610);
var more = cljs.core.rest(arglist__30610);
return G__30608__delegate(cs,more);
});
G__30608.cljs$core$IFn$_invoke$arity$variadic = G__30608__delegate;
return G__30608;
})()
;
G__30607 = function(cs,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return G__30607__1.call(this,cs);
default:
var G__30611 = null;
if (arguments.length > 1) {
var G__30612__i = 0, G__30612__a = new Array(arguments.length -  1);
while (G__30612__i < G__30612__a.length) {G__30612__a[G__30612__i] = arguments[G__30612__i + 1]; ++G__30612__i;}
G__30611 = new cljs.core.IndexedSeq(G__30612__a,0,null);
}
return G__30607__2.cljs$core$IFn$_invoke$arity$variadic(cs, G__30611);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__30607.cljs$lang$maxFixedArity = 1;
G__30607.cljs$lang$applyTo = G__30607__2.cljs$lang$applyTo;
G__30607.cljs$core$IFn$_invoke$arity$1 = G__30607__1;
G__30607.cljs$core$IFn$_invoke$arity$variadic = G__30607__2.cljs$core$IFn$_invoke$arity$variadic;
return G__30607;
})()
;})(il,trim,lexeme,sym,new_line,one_of,none_of,token))
} else {
return ((function (il,trim,lexeme,sym,new_line,one_of,none_of,token){
return (function() {
var G__30613 = null;
var G__30613__1 = (function (cs){
return lexeme.call(null,blancas.kern.core.word_.call(null,il,cs));
});
var G__30613__2 = (function() { 
var G__30614__delegate = function (cs,more){
return lexeme.call(null,cljs.core.apply.call(null,blancas.kern.core.word_,il,cs,more));
};
var G__30614 = function (cs,var_args){
var more = null;
if (arguments.length > 1) {
var G__30615__i = 0, G__30615__a = new Array(arguments.length -  1);
while (G__30615__i < G__30615__a.length) {G__30615__a[G__30615__i] = arguments[G__30615__i + 1]; ++G__30615__i;}
  more = new cljs.core.IndexedSeq(G__30615__a,0,null);
} 
return G__30614__delegate.call(this,cs,more);};
G__30614.cljs$lang$maxFixedArity = 1;
G__30614.cljs$lang$applyTo = (function (arglist__30616){
var cs = cljs.core.first(arglist__30616);
var more = cljs.core.rest(arglist__30616);
return G__30614__delegate(cs,more);
});
G__30614.cljs$core$IFn$_invoke$arity$variadic = G__30614__delegate;
return G__30614;
})()
;
G__30613 = function(cs,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return G__30613__1.call(this,cs);
default:
var G__30617 = null;
if (arguments.length > 1) {
var G__30618__i = 0, G__30618__a = new Array(arguments.length -  1);
while (G__30618__i < G__30618__a.length) {G__30618__a[G__30618__i] = arguments[G__30618__i + 1]; ++G__30618__i;}
G__30617 = new cljs.core.IndexedSeq(G__30618__a,0,null);
}
return G__30613__2.cljs$core$IFn$_invoke$arity$variadic(cs, G__30617);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__30613.cljs$lang$maxFixedArity = 1;
G__30613.cljs$lang$applyTo = G__30613__2.cljs$lang$applyTo;
G__30613.cljs$core$IFn$_invoke$arity$1 = G__30613__1;
G__30613.cljs$core$IFn$_invoke$arity$variadic = G__30613__2.cljs$core$IFn$_invoke$arity$variadic;
return G__30613;
})()
;})(il,trim,lexeme,sym,new_line,one_of,none_of,token))
}
})();
var identifier = (function (){var start = new cljs.core.Keyword(null,"identifier-start","identifier-start",-2096558846).cljs$core$IFn$_invoke$arity$1(rec);
var other = new cljs.core.Keyword(null,"identifier-letter","identifier-letter",78001785).cljs$core$IFn$_invoke$arity$1(rec);
var names = new cljs.core.Keyword(null,"reserved-names","reserved-names",-535805962).cljs$core$IFn$_invoke$arity$1(rec);
var elem_QMARK_ = ((function (start,other,names,trim,lexeme,sym,new_line,one_of,none_of,token,word){
return (function (s,coll){
return blancas.kern.core.member_QMARK_.call(null,clojure.string.lower_case.call(null,s),cljs.core.map.call(null,((function (start,other,names,trim,lexeme,sym,new_line,one_of,none_of,token,word){
return (function (p1__30594_SHARP_){
return clojure.string.lower_case.call(null,p1__30594_SHARP_);
});})(start,other,names,trim,lexeme,sym,new_line,one_of,none_of,token,word))
,coll));
});})(start,other,names,trim,lexeme,sym,new_line,one_of,none_of,token,word))
;
var is_in = (cljs.core.truth_(new cljs.core.Keyword(null,"case-sensitive","case-sensitive",-1005239404).cljs$core$IFn$_invoke$arity$1(rec))?blancas.kern.core.member_QMARK_:elem_QMARK_);
var check = ((function (start,other,names,elem_QMARK_,is_in,trim,lexeme,sym,new_line,one_of,none_of,token,word){
return (function (p){
return blancas.kern.core._GT__GT__EQ_.call(null,p,((function (start,other,names,elem_QMARK_,is_in,trim,lexeme,sym,new_line,one_of,none_of,token,word){
return (function (s){
if(cljs.core.truth_(is_in.call(null,s,names))){
return blancas.kern.core.fail.call(null,blancas.kern.i18n.fmt.call(null,new cljs.core.Keyword(null,"reserved","reserved",-775228297),s));
} else {
return blancas.kern.core.return$.call(null,s);
}
});})(start,other,names,elem_QMARK_,is_in,trim,lexeme,sym,new_line,one_of,none_of,token,word))
);
});})(start,other,names,elem_QMARK_,is_in,trim,lexeme,sym,new_line,one_of,none_of,token,word))
;
var t = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(rec);
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"basic","basic",1043717368))){
return blancas.kern.core._LT__COLON__GT_.call(null,check.call(null,lexeme.call(null,blancas.kern.core._LT__PLUS__GT_.call(null,start,blancas.kern.core.many0.call(null,other)))));
} else {
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"C","C",-173629587))){
return blancas.kern.core._LT__COLON__GT_.call(null,check.call(null,lexeme.call(null,blancas.kern.core._LT__PLUS__GT_.call(null,start,blancas.kern.core.many0.call(null,other)))));
} else {
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"Haskell","Haskell",667642655))){
return blancas.kern.core._LT__COLON__GT_.call(null,check.call(null,lexeme.call(null,blancas.kern.core._LT__PLUS__GT_.call(null,start,blancas.kern.core.many0.call(null,other)))));
} else {
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"Java","Java",-753254123))){
return blancas.kern.core._LT__COLON__GT_.call(null,check.call(null,lexeme.call(null,blancas.kern.core._LT__PLUS__GT_.call(null,start,blancas.kern.core.many0.call(null,other)))));
} else {
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"Shell","Shell",-90623198))){
return blancas.kern.core._LT__COLON__GT_.call(null,check.call(null,lexeme.call(null,blancas.kern.core._LT__PLUS__GT_.call(null,start,blancas.kern.core.many0.call(null,other)))));
} else {
return null;
}
}
}
}
}
})();
var field = ((function (trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier){
return (function (cs){
return lexeme.call(null,blancas.kern.core.field_STAR_.call(null,cs));
});})(trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier))
;
var char_lit = (function (){var t = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(rec);
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"basic","basic",1043717368))){
return blancas.kern.lexer.char_parser.call(null,lexeme,blancas.kern.lexer.basic_char);
} else {
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"C","C",-173629587))){
return blancas.kern.lexer.char_parser.call(null,lexeme,blancas.kern.lexer.c_char);
} else {
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"Haskell","Haskell",667642655))){
return blancas.kern.lexer.char_parser.call(null,lexeme,blancas.kern.lexer.haskell_char);
} else {
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"Java","Java",-753254123))){
return blancas.kern.lexer.char_parser.call(null,lexeme,blancas.kern.lexer.java_char);
} else {
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"Shell","Shell",-90623198))){
return blancas.kern.lexer.char_parser.call(null,lexeme,blancas.kern.lexer.c_char);
} else {
return null;
}
}
}
}
}
})();
var string_lit = (function (){var t = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(rec);
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"basic","basic",1043717368))){
return blancas.kern.lexer.str_parser.call(null,lexeme,blancas.kern.lexer.basic_char);
} else {
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"C","C",-173629587))){
return blancas.kern.core._LT__PLUS__GT_.call(null,blancas.kern.core.many1.call(null,blancas.kern.lexer.str_parser.call(null,lexeme,blancas.kern.lexer.c_char)));
} else {
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"Haskell","Haskell",667642655))){
return blancas.kern.lexer.str_parser.call(null,lexeme,blancas.kern.lexer.haskell_char);
} else {
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"Java","Java",-753254123))){
return blancas.kern.lexer.str_parser.call(null,lexeme,blancas.kern.lexer.java_char);
} else {
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"Shell","Shell",-90623198))){
return blancas.kern.core._LT__PLUS__GT_.call(null,blancas.kern.core.many1.call(null,blancas.kern.lexer.str_parser.call(null,lexeme,blancas.kern.lexer.c_char)));
} else {
return null;
}
}
}
}
}
})();
var dec_lit = (function (){var lead = (cljs.core.truth_(new cljs.core.Keyword(null,"leading-sign","leading-sign",-362968885).cljs$core$IFn$_invoke$arity$1(rec))?blancas.kern.lexer.sign:blancas.kern.core.return$.call(null,null));
return blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._LT__COLON__GT_.call(null,lexeme.call(null,blancas.kern.core._LT__PLUS__GT_.call(null,lead,blancas.kern.core.many1.call(null,blancas.kern.core.digit),blancas.kern.lexer.int_suffix))),((function (lead,trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit){
return (function (x){
return blancas.kern.core.return$.call(null,blancas.kern.lexer.read_num_lit.call(null,x));
});})(lead,trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit))
),blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"dec-lit","dec-lit",-1364231639)));
})();
var oct_lit = (function (){var lead = (cljs.core.truth_(new cljs.core.Keyword(null,"leading-sign","leading-sign",-362968885).cljs$core$IFn$_invoke$arity$1(rec))?blancas.kern.lexer.sign:blancas.kern.core.return$.call(null,null));
return blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._LT__COLON__GT_.call(null,lexeme.call(null,blancas.kern.core._LT__PLUS__GT_.call(null,lead,blancas.kern.core.sym_STAR_.call(null,"0"),blancas.kern.core.many.call(null,blancas.kern.core.oct_digit),blancas.kern.lexer.int_suffix))),((function (lead,trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit){
return (function (x){
return blancas.kern.core.return$.call(null,blancas.kern.lexer.read_num_lit.call(null,x));
});})(lead,trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit))
),blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"oct-lit","oct-lit",-1521077730)));
})();
var hex_lit = (function (){var lead = (cljs.core.truth_(new cljs.core.Keyword(null,"leading-sign","leading-sign",-362968885).cljs$core$IFn$_invoke$arity$1(rec))?blancas.kern.lexer.sign:blancas.kern.core.return$.call(null,null));
return blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._LT__COLON__GT_.call(null,lexeme.call(null,blancas.kern.core._LT__PLUS__GT_.call(null,lead,blancas.kern.core.token_.call(null,"0x"),blancas.kern.core.many1.call(null,blancas.kern.core.hex_digit),blancas.kern.lexer.int_suffix))),((function (lead,trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit,oct_lit){
return (function (x){
return blancas.kern.core.return$.call(null,blancas.kern.lexer.read_num_lit.call(null,x));
});})(lead,trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit,oct_lit))
),blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"hex-lit","hex-lit",-448097198)));
})();
var float_lit = (function (){var lead = (cljs.core.truth_(new cljs.core.Keyword(null,"leading-sign","leading-sign",-362968885).cljs$core$IFn$_invoke$arity$1(rec))?blancas.kern.lexer.sign:blancas.kern.core.return$.call(null,null));
return blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._LT__COLON__GT_.call(null,lexeme.call(null,blancas.kern.core._LT__PLUS__GT_.call(null,lead,blancas.kern.core.many1.call(null,blancas.kern.core.digit),blancas.kern.core.option.call(null,".0",blancas.kern.core._LT__STAR__GT_.call(null,blancas.kern.core.sym_STAR_.call(null,"."),blancas.kern.core.many1.call(null,blancas.kern.core.digit))),blancas.kern.core.optional.call(null,blancas.kern.core._LT__STAR__GT_.call(null,blancas.kern.core.one_of_STAR_.call(null,"eE"),blancas.kern.lexer.sign,blancas.kern.core.many1.call(null,blancas.kern.core.digit))),blancas.kern.lexer.float_suffix))),((function (lead,trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit,oct_lit,hex_lit){
return (function (x){
return blancas.kern.core._GT__GT_.call(null,blancas.kern.core.return$.call(null,blancas.kern.lexer.read_num_lit.call(null,x)),blancas.kern.core.clear_empty);
});})(lead,trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit,oct_lit,hex_lit))
),blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"float-lit","float-lit",1663609324)));
})();
var bool_lit = blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core._GT__GT_.call(null,word.call(null,"true"),blancas.kern.core.return$.call(null,true)),blancas.kern.core._GT__GT_.call(null,word.call(null,"false"),blancas.kern.core.return$.call(null,false)));
var nil_lit = blancas.kern.core._GT__GT_.call(null,word.call(null,"nil","null"),blancas.kern.core.return$.call(null,null));
var parens = ((function (trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit,oct_lit,hex_lit,float_lit,bool_lit,nil_lit){
return (function (p){
return blancas.kern.core.between.call(null,sym.call(null,"("),sym.call(null,")"),lexeme.call(null,p));
});})(trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit,oct_lit,hex_lit,float_lit,bool_lit,nil_lit))
;
var braces = ((function (trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit,oct_lit,hex_lit,float_lit,bool_lit,nil_lit,parens){
return (function (p){
return blancas.kern.core.between.call(null,sym.call(null,"{"),sym.call(null,"}"),lexeme.call(null,p));
});})(trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit,oct_lit,hex_lit,float_lit,bool_lit,nil_lit,parens))
;
var angles = ((function (trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit,oct_lit,hex_lit,float_lit,bool_lit,nil_lit,parens,braces){
return (function (p){
return blancas.kern.core.between.call(null,sym.call(null,"<"),sym.call(null,">"),lexeme.call(null,p));
});})(trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit,oct_lit,hex_lit,float_lit,bool_lit,nil_lit,parens,braces))
;
var brackets = ((function (trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit,oct_lit,hex_lit,float_lit,bool_lit,nil_lit,parens,braces,angles){
return (function (p){
return blancas.kern.core.between.call(null,sym.call(null,"["),sym.call(null,"]"),lexeme.call(null,p));
});})(trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit,oct_lit,hex_lit,float_lit,bool_lit,nil_lit,parens,braces,angles))
;
var semi = sym.call(null,";");
var comma = sym.call(null,",");
var colon = sym.call(null,":");
var dot = sym.call(null,".");
var semi_sep = ((function (trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit,oct_lit,hex_lit,float_lit,bool_lit,nil_lit,parens,braces,angles,brackets,semi,comma,colon,dot){
return (function (p){
return blancas.kern.core.sep_by.call(null,semi,lexeme.call(null,p));
});})(trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit,oct_lit,hex_lit,float_lit,bool_lit,nil_lit,parens,braces,angles,brackets,semi,comma,colon,dot))
;
var semi_sep1 = ((function (trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit,oct_lit,hex_lit,float_lit,bool_lit,nil_lit,parens,braces,angles,brackets,semi,comma,colon,dot,semi_sep){
return (function (p){
return blancas.kern.core.sep_by1.call(null,semi,lexeme.call(null,p));
});})(trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit,oct_lit,hex_lit,float_lit,bool_lit,nil_lit,parens,braces,angles,brackets,semi,comma,colon,dot,semi_sep))
;
var comma_sep = ((function (trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit,oct_lit,hex_lit,float_lit,bool_lit,nil_lit,parens,braces,angles,brackets,semi,comma,colon,dot,semi_sep,semi_sep1){
return (function (p){
return blancas.kern.core.sep_by.call(null,comma,lexeme.call(null,p));
});})(trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit,oct_lit,hex_lit,float_lit,bool_lit,nil_lit,parens,braces,angles,brackets,semi,comma,colon,dot,semi_sep,semi_sep1))
;
var comma_sep1 = ((function (trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit,oct_lit,hex_lit,float_lit,bool_lit,nil_lit,parens,braces,angles,brackets,semi,comma,colon,dot,semi_sep,semi_sep1,comma_sep){
return (function (p){
return blancas.kern.core.sep_by1.call(null,comma,lexeme.call(null,p));
});})(trim,lexeme,sym,new_line,one_of,none_of,token,word,identifier,field,char_lit,string_lit,dec_lit,oct_lit,hex_lit,float_lit,bool_lit,nil_lit,parens,braces,angles,brackets,semi,comma,colon,dot,semi_sep,semi_sep1,comma_sep))
;
return blancas.kern.lexer.map__GT_TokenParsers.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"nil-lit","nil-lit",-1151930496),new cljs.core.Keyword(null,"angles","angles",-1220989759),new cljs.core.Keyword(null,"none-of","none-of",-1115383390),new cljs.core.Keyword(null,"parens","parens",1028661830),new cljs.core.Keyword(null,"braces","braces",907708519),new cljs.core.Keyword(null,"dec-lit","dec-lit",-1364231639),new cljs.core.Keyword(null,"comma","comma",1699024745),new cljs.core.Keyword(null,"semi-sep","semi-sep",-796169557),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"float-lit","float-lit",1663609324),new cljs.core.Keyword(null,"semi","semi",276867757),new cljs.core.Keyword(null,"string-lit","string-lit",1570344494),new cljs.core.Keyword(null,"char-lit","char-lit",762455694),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"colon","colon",-965200945),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"lexeme","lexeme",750515121),new cljs.core.Keyword(null,"hex-lit","hex-lit",-448097198),new cljs.core.Keyword(null,"word","word",-420123725),new cljs.core.Keyword(null,"comma-sep1","comma-sep1",412337366),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"new-line","new-line",1060819447),new cljs.core.Keyword(null,"trim","trim",774319767),new cljs.core.Keyword(null,"dot","dot",1442709401),new cljs.core.Keyword(null,"one-of","one-of",144367098),new cljs.core.Keyword(null,"brackets","brackets",1720097338),new cljs.core.Keyword(null,"semi-sep1","semi-sep1",-700853510),new cljs.core.Keyword(null,"oct-lit","oct-lit",-1521077730),new cljs.core.Keyword(null,"bool-lit","bool-lit",-1597378914),new cljs.core.Keyword(null,"comma-sep","comma-sep",1118800894)],[nil_lit,angles,none_of,parens,braces,dec_lit,comma,semi_sep,field,float_lit,semi,string_lit,char_lit,sym,colon,token,lexeme,hex_lit,word,comma_sep1,identifier,new_line,trim,dot,one_of,brackets,semi_sep1,oct_lit,bool_lit,comma_sep]));
});

//# sourceMappingURL=lexer.js.map
