// Compiled by ClojureScript 1.9.908 {}
goog.provide('blancas.kern.core');
goog.require('cljs.core');
goog.require('blancas.kern.i18n');
goog.require('blancas.kern.char$');
goog.require('clojure.string');
goog.require('cljs.pprint');
var ret__28404__auto___30449 = (function (){
/**
 * Same as def, yielding a dynamic def.
 */
blancas.kern.core.defn_STAR_ = (function blancas$kern$core$defn_STAR_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___30450 = arguments.length;
var i__28365__auto___30451 = (0);
while(true){
if((i__28365__auto___30451 < len__28364__auto___30450)){
args__28371__auto__.push((arguments[i__28365__auto___30451]));

var G__30452 = (i__28365__auto___30451 + (1));
i__28365__auto___30451 = G__30452;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return blancas.kern.core.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

blancas.kern.core.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,more){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true)),more);
});

blancas.kern.core.defn_STAR_.cljs$lang$maxFixedArity = (3);

blancas.kern.core.defn_STAR_.cljs$lang$applyTo = (function (seq30445){
var G__30446 = cljs.core.first.call(null,seq30445);
var seq30445__$1 = cljs.core.next.call(null,seq30445);
var G__30447 = cljs.core.first.call(null,seq30445__$1);
var seq30445__$2 = cljs.core.next.call(null,seq30445__$1);
var G__30448 = cljs.core.first.call(null,seq30445__$2);
var seq30445__$3 = cljs.core.next.call(null,seq30445__$2);
return blancas.kern.core.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__30446,G__30447,G__30448,seq30445__$3);
});

return null;
})()
;
blancas.kern.core.defn_STAR_.cljs$lang$macro = true;

/**
 * Tests if x is a member of coll.
 */
blancas.kern.core.member_QMARK_ = (function blancas$kern$core$member_QMARK_(x,coll){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([x]),coll);
});
/**
 * Like conj but ignores values based on a predicate.
 */
blancas.kern.core.conjp = (function blancas$kern$core$conjp(p){
return (function (coll,x){
if(cljs.core.truth_(p.call(null,x))){
return coll;
} else {
return cljs.core.conj.call(null,coll,x);
}
});
});
/**
 * The number of columns to advance for a tab character.
 * By default, a tab takes four columns.
 */
blancas.kern.core._STAR_tab_width_STAR_ = (4);
blancas.kern.core.err_system = (0);
blancas.kern.core.err_unexpect = (1);
blancas.kern.core.err_expect = (2);
blancas.kern.core.err_message = (3);

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
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
blancas.kern.core.PPosition = (function (src,line,col,__meta,__extmap,__hash){
this.src = src;
this.line = line;
this.col = col;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 141312;
});
blancas.kern.core.PPosition.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27835__auto__,k__27836__auto__){
var self__ = this;
var this__27835__auto____$1 = this;
return this__27835__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__27836__auto__,null);
});

blancas.kern.core.PPosition.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27837__auto__,k30454,else__27838__auto__){
var self__ = this;
var this__27837__auto____$1 = this;
var G__30458 = k30454;
var G__30458__$1 = (((G__30458 instanceof cljs.core.Keyword))?G__30458.fqn:null);
switch (G__30458__$1) {
case "src":
return self__.src;

break;
case "line":
return self__.line;

break;
case "col":
return self__.col;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30454,else__27838__auto__);

}
});

blancas.kern.core.PPosition.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27849__auto__,writer__27850__auto__,opts__27851__auto__){
var self__ = this;
var this__27849__auto____$1 = this;
var pr_pair__27852__auto__ = ((function (this__27849__auto____$1){
return (function (keyval__27853__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27850__auto__,cljs.core.pr_writer,""," ","",opts__27851__auto__,keyval__27853__auto__);
});})(this__27849__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27850__auto__,pr_pair__27852__auto__,"#blancas.kern.core.PPosition{",", ","}",opts__27851__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"src","src",-1651076051),self__.src],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"line","line",212345235),self__.line],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
});

blancas.kern.core.PPosition.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30453){
var self__ = this;
var G__30453__$1 = this;
return (new cljs.core.RecordIter((0),G__30453__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

blancas.kern.core.PPosition.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27833__auto__){
var self__ = this;
var this__27833__auto____$1 = this;
return self__.__meta;
});

blancas.kern.core.PPosition.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27830__auto__){
var self__ = this;
var this__27830__auto____$1 = this;
return (new blancas.kern.core.PPosition(self__.src,self__.line,self__.col,self__.__meta,self__.__extmap,self__.__hash));
});

blancas.kern.core.PPosition.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27839__auto__){
var self__ = this;
var this__27839__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

blancas.kern.core.PPosition.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27831__auto__){
var self__ = this;
var this__27831__auto____$1 = this;
var h__27649__auto__ = self__.__hash;
if(!((h__27649__auto__ == null))){
return h__27649__auto__;
} else {
var h__27649__auto____$1 = ((function (h__27649__auto__,this__27831__auto____$1){
return (function (coll__27832__auto__){
return (-1586077910 ^ cljs.core.hash_unordered_coll.call(null,coll__27832__auto__));
});})(h__27649__auto__,this__27831__auto____$1))
.call(null,this__27831__auto____$1);
self__.__hash = h__27649__auto____$1;

return h__27649__auto____$1;
}
});

blancas.kern.core.PPosition.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30455,other30456){
var self__ = this;
var this30455__$1 = this;
return (!((other30456 == null))) && ((this30455__$1.constructor === other30456.constructor)) && (cljs.core._EQ_.call(null,this30455__$1.src,other30456.src)) && (cljs.core._EQ_.call(null,this30455__$1.line,other30456.line)) && (cljs.core._EQ_.call(null,this30455__$1.col,other30456.col)) && (cljs.core._EQ_.call(null,this30455__$1.__extmap,other30456.__extmap));
});

blancas.kern.core.PPosition.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27844__auto__,k__27845__auto__){
var self__ = this;
var this__27844__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"col","col",-1959363084),null], null), null),k__27845__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27844__auto____$1),self__.__meta),k__27845__auto__);
} else {
return (new blancas.kern.core.PPosition(self__.src,self__.line,self__.col,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27845__auto__)),null));
}
});

blancas.kern.core.PPosition.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27842__auto__,k__27843__auto__,G__30453){
var self__ = this;
var this__27842__auto____$1 = this;
var pred__30459 = cljs.core.keyword_identical_QMARK_;
var expr__30460 = k__27843__auto__;
if(cljs.core.truth_(pred__30459.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),expr__30460))){
return (new blancas.kern.core.PPosition(G__30453,self__.line,self__.col,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30459.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__30460))){
return (new blancas.kern.core.PPosition(self__.src,G__30453,self__.col,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30459.call(null,new cljs.core.Keyword(null,"col","col",-1959363084),expr__30460))){
return (new blancas.kern.core.PPosition(self__.src,self__.line,G__30453,self__.__meta,self__.__extmap,null));
} else {
return (new blancas.kern.core.PPosition(self__.src,self__.line,self__.col,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27843__auto__,G__30453),null));
}
}
}
});

blancas.kern.core.PPosition.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27847__auto__){
var self__ = this;
var this__27847__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"src","src",-1651076051),self__.src],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"line","line",212345235),self__.line],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
});

blancas.kern.core.PPosition.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27834__auto__,G__30453){
var self__ = this;
var this__27834__auto____$1 = this;
return (new blancas.kern.core.PPosition(self__.src,self__.line,self__.col,G__30453,self__.__extmap,self__.__hash));
});

blancas.kern.core.PPosition.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27840__auto__,entry__27841__auto__){
var self__ = this;
var this__27840__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27841__auto__)){
return this__27840__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__27841__auto__,(0)),cljs.core._nth.call(null,entry__27841__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27840__auto____$1,entry__27841__auto__);
}
});

blancas.kern.core.PPosition.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
var result = cljs.core.compare.call(null,self__.line,new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(other));
if((result === (0))){
return cljs.core.compare.call(null,self__.col,new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(other));
} else {
return result;
}
});

blancas.kern.core.PPosition.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"src","src",-10544524,null),new cljs.core.Symbol(null,"line","line",1852876762,null),new cljs.core.Symbol(null,"col","col",-318831557,null)], null);
});

blancas.kern.core.PPosition.cljs$lang$type = true;

blancas.kern.core.PPosition.cljs$lang$ctorPrSeq = (function (this__27871__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"blancas.kern.core/PPosition");
});

blancas.kern.core.PPosition.cljs$lang$ctorPrWriter = (function (this__27871__auto__,writer__27872__auto__){
return cljs.core._write.call(null,writer__27872__auto__,"blancas.kern.core/PPosition");
});

blancas.kern.core.__GT_PPosition = (function blancas$kern$core$__GT_PPosition(src,line,col){
return (new blancas.kern.core.PPosition(src,line,col,null,null,null));
});

blancas.kern.core.map__GT_PPosition = (function blancas$kern$core$map__GT_PPosition(G__30457){
return (new blancas.kern.core.PPosition(new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(G__30457),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(G__30457),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(G__30457),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__30457,new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084))),null));
});


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
blancas.kern.core.PMessage = (function (type,text,__meta,__extmap,__hash){
this.type = type;
this.text = text;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
blancas.kern.core.PMessage.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27835__auto__,k__27836__auto__){
var self__ = this;
var this__27835__auto____$1 = this;
return this__27835__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__27836__auto__,null);
});

blancas.kern.core.PMessage.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27837__auto__,k30464,else__27838__auto__){
var self__ = this;
var this__27837__auto____$1 = this;
var G__30468 = k30464;
var G__30468__$1 = (((G__30468 instanceof cljs.core.Keyword))?G__30468.fqn:null);
switch (G__30468__$1) {
case "type":
return self__.type;

break;
case "text":
return self__.text;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30464,else__27838__auto__);

}
});

blancas.kern.core.PMessage.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27849__auto__,writer__27850__auto__,opts__27851__auto__){
var self__ = this;
var this__27849__auto____$1 = this;
var pr_pair__27852__auto__ = ((function (this__27849__auto____$1){
return (function (keyval__27853__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27850__auto__,cljs.core.pr_writer,""," ","",opts__27851__auto__,keyval__27853__auto__);
});})(this__27849__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27850__auto__,pr_pair__27852__auto__,"#blancas.kern.core.PMessage{",", ","}",opts__27851__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null))], null),self__.__extmap));
});

blancas.kern.core.PMessage.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30463){
var self__ = this;
var G__30463__$1 = this;
return (new cljs.core.RecordIter((0),G__30463__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

blancas.kern.core.PMessage.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27833__auto__){
var self__ = this;
var this__27833__auto____$1 = this;
return self__.__meta;
});

blancas.kern.core.PMessage.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27830__auto__){
var self__ = this;
var this__27830__auto____$1 = this;
return (new blancas.kern.core.PMessage(self__.type,self__.text,self__.__meta,self__.__extmap,self__.__hash));
});

blancas.kern.core.PMessage.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27839__auto__){
var self__ = this;
var this__27839__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

blancas.kern.core.PMessage.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27831__auto__){
var self__ = this;
var this__27831__auto____$1 = this;
var h__27649__auto__ = self__.__hash;
if(!((h__27649__auto__ == null))){
return h__27649__auto__;
} else {
var h__27649__auto____$1 = ((function (h__27649__auto__,this__27831__auto____$1){
return (function (coll__27832__auto__){
return (1335089251 ^ cljs.core.hash_unordered_coll.call(null,coll__27832__auto__));
});})(h__27649__auto__,this__27831__auto____$1))
.call(null,this__27831__auto____$1);
self__.__hash = h__27649__auto____$1;

return h__27649__auto____$1;
}
});

blancas.kern.core.PMessage.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30465,other30466){
var self__ = this;
var this30465__$1 = this;
return (!((other30466 == null))) && ((this30465__$1.constructor === other30466.constructor)) && (cljs.core._EQ_.call(null,this30465__$1.type,other30466.type)) && (cljs.core._EQ_.call(null,this30465__$1.text,other30466.text)) && (cljs.core._EQ_.call(null,this30465__$1.__extmap,other30466.__extmap));
});

blancas.kern.core.PMessage.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27844__auto__,k__27845__auto__){
var self__ = this;
var this__27844__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),k__27845__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27844__auto____$1),self__.__meta),k__27845__auto__);
} else {
return (new blancas.kern.core.PMessage(self__.type,self__.text,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27845__auto__)),null));
}
});

blancas.kern.core.PMessage.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27842__auto__,k__27843__auto__,G__30463){
var self__ = this;
var this__27842__auto____$1 = this;
var pred__30469 = cljs.core.keyword_identical_QMARK_;
var expr__30470 = k__27843__auto__;
if(cljs.core.truth_(pred__30469.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__30470))){
return (new blancas.kern.core.PMessage(G__30463,self__.text,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30469.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),expr__30470))){
return (new blancas.kern.core.PMessage(self__.type,G__30463,self__.__meta,self__.__extmap,null));
} else {
return (new blancas.kern.core.PMessage(self__.type,self__.text,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27843__auto__,G__30463),null));
}
}
});

blancas.kern.core.PMessage.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27847__auto__){
var self__ = this;
var this__27847__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null))], null),self__.__extmap));
});

blancas.kern.core.PMessage.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27834__auto__,G__30463){
var self__ = this;
var this__27834__auto____$1 = this;
return (new blancas.kern.core.PMessage(self__.type,self__.text,G__30463,self__.__extmap,self__.__hash));
});

blancas.kern.core.PMessage.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27840__auto__,entry__27841__auto__){
var self__ = this;
var this__27840__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27841__auto__)){
return this__27840__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__27841__auto__,(0)),cljs.core._nth.call(null,entry__27841__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27840__auto____$1,entry__27841__auto__);
}
});

blancas.kern.core.PMessage.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"text","text",-150030170,null)], null);
});

blancas.kern.core.PMessage.cljs$lang$type = true;

blancas.kern.core.PMessage.cljs$lang$ctorPrSeq = (function (this__27871__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"blancas.kern.core/PMessage");
});

blancas.kern.core.PMessage.cljs$lang$ctorPrWriter = (function (this__27871__auto__,writer__27872__auto__){
return cljs.core._write.call(null,writer__27872__auto__,"blancas.kern.core/PMessage");
});

blancas.kern.core.__GT_PMessage = (function blancas$kern$core$__GT_PMessage(type,text){
return (new blancas.kern.core.PMessage(type,text,null,null,null));
});

blancas.kern.core.map__GT_PMessage = (function blancas$kern$core$map__GT_PMessage(G__30467){
return (new blancas.kern.core.PMessage(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__30467),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__30467),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__30467,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697))),null));
});


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
blancas.kern.core.PError = (function (pos,msgs,__meta,__extmap,__hash){
this.pos = pos;
this.msgs = msgs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
blancas.kern.core.PError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27835__auto__,k__27836__auto__){
var self__ = this;
var this__27835__auto____$1 = this;
return this__27835__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__27836__auto__,null);
});

blancas.kern.core.PError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27837__auto__,k30474,else__27838__auto__){
var self__ = this;
var this__27837__auto____$1 = this;
var G__30478 = k30474;
var G__30478__$1 = (((G__30478 instanceof cljs.core.Keyword))?G__30478.fqn:null);
switch (G__30478__$1) {
case "pos":
return self__.pos;

break;
case "msgs":
return self__.msgs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30474,else__27838__auto__);

}
});

blancas.kern.core.PError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27849__auto__,writer__27850__auto__,opts__27851__auto__){
var self__ = this;
var this__27849__auto____$1 = this;
var pr_pair__27852__auto__ = ((function (this__27849__auto____$1){
return (function (keyval__27853__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27850__auto__,cljs.core.pr_writer,""," ","",opts__27851__auto__,keyval__27853__auto__);
});})(this__27849__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27850__auto__,pr_pair__27852__auto__,"#blancas.kern.core.PError{",", ","}",opts__27851__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs],null))], null),self__.__extmap));
});

blancas.kern.core.PError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30473){
var self__ = this;
var G__30473__$1 = this;
return (new cljs.core.RecordIter((0),G__30473__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

blancas.kern.core.PError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27833__auto__){
var self__ = this;
var this__27833__auto____$1 = this;
return self__.__meta;
});

blancas.kern.core.PError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27830__auto__){
var self__ = this;
var this__27830__auto____$1 = this;
return (new blancas.kern.core.PError(self__.pos,self__.msgs,self__.__meta,self__.__extmap,self__.__hash));
});

blancas.kern.core.PError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27839__auto__){
var self__ = this;
var this__27839__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

blancas.kern.core.PError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27831__auto__){
var self__ = this;
var this__27831__auto____$1 = this;
var h__27649__auto__ = self__.__hash;
if(!((h__27649__auto__ == null))){
return h__27649__auto__;
} else {
var h__27649__auto____$1 = ((function (h__27649__auto__,this__27831__auto____$1){
return (function (coll__27832__auto__){
return (-878302572 ^ cljs.core.hash_unordered_coll.call(null,coll__27832__auto__));
});})(h__27649__auto__,this__27831__auto____$1))
.call(null,this__27831__auto____$1);
self__.__hash = h__27649__auto____$1;

return h__27649__auto____$1;
}
});

blancas.kern.core.PError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30475,other30476){
var self__ = this;
var this30475__$1 = this;
return (!((other30476 == null))) && ((this30475__$1.constructor === other30476.constructor)) && (cljs.core._EQ_.call(null,this30475__$1.pos,other30476.pos)) && (cljs.core._EQ_.call(null,this30475__$1.msgs,other30476.msgs)) && (cljs.core._EQ_.call(null,this30475__$1.__extmap,other30476.__extmap));
});

blancas.kern.core.PError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27844__auto__,k__27845__auto__){
var self__ = this;
var this__27844__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),null], null), null),k__27845__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27844__auto____$1),self__.__meta),k__27845__auto__);
} else {
return (new blancas.kern.core.PError(self__.pos,self__.msgs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27845__auto__)),null));
}
});

blancas.kern.core.PError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27842__auto__,k__27843__auto__,G__30473){
var self__ = this;
var this__27842__auto____$1 = this;
var pred__30479 = cljs.core.keyword_identical_QMARK_;
var expr__30480 = k__27843__auto__;
if(cljs.core.truth_(pred__30479.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__30480))){
return (new blancas.kern.core.PError(G__30473,self__.msgs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30479.call(null,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),expr__30480))){
return (new blancas.kern.core.PError(self__.pos,G__30473,self__.__meta,self__.__extmap,null));
} else {
return (new blancas.kern.core.PError(self__.pos,self__.msgs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27843__auto__,G__30473),null));
}
}
});

blancas.kern.core.PError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27847__auto__){
var self__ = this;
var this__27847__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs],null))], null),self__.__extmap));
});

blancas.kern.core.PError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27834__auto__,G__30473){
var self__ = this;
var this__27834__auto____$1 = this;
return (new blancas.kern.core.PError(self__.pos,self__.msgs,G__30473,self__.__extmap,self__.__hash));
});

blancas.kern.core.PError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27840__auto__,entry__27841__auto__){
var self__ = this;
var this__27840__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27841__auto__)){
return this__27840__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__27841__auto__,(0)),cljs.core._nth.call(null,entry__27841__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27840__auto____$1,entry__27841__auto__);
}
});

blancas.kern.core.PError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null)], null);
});

blancas.kern.core.PError.cljs$lang$type = true;

blancas.kern.core.PError.cljs$lang$ctorPrSeq = (function (this__27871__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"blancas.kern.core/PError");
});

blancas.kern.core.PError.cljs$lang$ctorPrWriter = (function (this__27871__auto__,writer__27872__auto__){
return cljs.core._write.call(null,writer__27872__auto__,"blancas.kern.core/PError");
});

blancas.kern.core.__GT_PError = (function blancas$kern$core$__GT_PError(pos,msgs){
return (new blancas.kern.core.PError(pos,msgs,null,null,null));
});

blancas.kern.core.map__GT_PError = (function blancas$kern$core$map__GT_PError(G__30477){
return (new blancas.kern.core.PError(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__30477),new cljs.core.Keyword(null,"msgs","msgs",-1176489773).cljs$core$IFn$_invoke$arity$1(G__30477),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__30477,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"msgs","msgs",-1176489773))),null));
});


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
blancas.kern.core.PState = (function (input,pos,value,ok,empty,user,error,__meta,__extmap,__hash){
this.input = input;
this.pos = pos;
this.value = value;
this.ok = ok;
this.empty = empty;
this.user = user;
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
blancas.kern.core.PState.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27835__auto__,k__27836__auto__){
var self__ = this;
var this__27835__auto____$1 = this;
return this__27835__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__27836__auto__,null);
});

blancas.kern.core.PState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27837__auto__,k30484,else__27838__auto__){
var self__ = this;
var this__27837__auto____$1 = this;
var G__30488 = k30484;
var G__30488__$1 = (((G__30488 instanceof cljs.core.Keyword))?G__30488.fqn:null);
switch (G__30488__$1) {
case "input":
return self__.input;

break;
case "pos":
return self__.pos;

break;
case "value":
return self__.value;

break;
case "ok":
return self__.ok;

break;
case "empty":
return self__.empty;

break;
case "user":
return self__.user;

break;
case "error":
return self__.error;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30484,else__27838__auto__);

}
});

blancas.kern.core.PState.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27849__auto__,writer__27850__auto__,opts__27851__auto__){
var self__ = this;
var this__27849__auto____$1 = this;
var pr_pair__27852__auto__ = ((function (this__27849__auto____$1){
return (function (keyval__27853__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27850__auto__,cljs.core.pr_writer,""," ","",opts__27851__auto__,keyval__27853__auto__);
});})(this__27849__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27850__auto__,pr_pair__27852__auto__,"#blancas.kern.core.PState{",", ","}",opts__27851__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",556931961),self__.input],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ok","ok",967785236),self__.ok],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"empty","empty",767870958),self__.empty],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"user","user",1532431356),self__.user],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});

blancas.kern.core.PState.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30483){
var self__ = this;
var G__30483__$1 = this;
return (new cljs.core.RecordIter((0),G__30483__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"error","error",-978969032)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

blancas.kern.core.PState.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27833__auto__){
var self__ = this;
var this__27833__auto____$1 = this;
return self__.__meta;
});

blancas.kern.core.PState.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27830__auto__){
var self__ = this;
var this__27830__auto____$1 = this;
return (new blancas.kern.core.PState(self__.input,self__.pos,self__.value,self__.ok,self__.empty,self__.user,self__.error,self__.__meta,self__.__extmap,self__.__hash));
});

blancas.kern.core.PState.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27839__auto__){
var self__ = this;
var this__27839__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

blancas.kern.core.PState.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27831__auto__){
var self__ = this;
var this__27831__auto____$1 = this;
var h__27649__auto__ = self__.__hash;
if(!((h__27649__auto__ == null))){
return h__27649__auto__;
} else {
var h__27649__auto____$1 = ((function (h__27649__auto__,this__27831__auto____$1){
return (function (coll__27832__auto__){
return (-949167300 ^ cljs.core.hash_unordered_coll.call(null,coll__27832__auto__));
});})(h__27649__auto__,this__27831__auto____$1))
.call(null,this__27831__auto____$1);
self__.__hash = h__27649__auto____$1;

return h__27649__auto____$1;
}
});

blancas.kern.core.PState.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30485,other30486){
var self__ = this;
var this30485__$1 = this;
return (!((other30486 == null))) && ((this30485__$1.constructor === other30486.constructor)) && (cljs.core._EQ_.call(null,this30485__$1.input,other30486.input)) && (cljs.core._EQ_.call(null,this30485__$1.pos,other30486.pos)) && (cljs.core._EQ_.call(null,this30485__$1.value,other30486.value)) && (cljs.core._EQ_.call(null,this30485__$1.ok,other30486.ok)) && (cljs.core._EQ_.call(null,this30485__$1.empty,other30486.empty)) && (cljs.core._EQ_.call(null,this30485__$1.user,other30486.user)) && (cljs.core._EQ_.call(null,this30485__$1.error,other30486.error)) && (cljs.core._EQ_.call(null,this30485__$1.__extmap,other30486.__extmap));
});

blancas.kern.core.PState.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27844__auto__,k__27845__auto__){
var self__ = this;
var this__27844__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"empty","empty",767870958),null,new cljs.core.Keyword(null,"ok","ok",967785236),null,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"input","input",556931961),null,new cljs.core.Keyword(null,"user","user",1532431356),null], null), null),k__27845__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27844__auto____$1),self__.__meta),k__27845__auto__);
} else {
return (new blancas.kern.core.PState(self__.input,self__.pos,self__.value,self__.ok,self__.empty,self__.user,self__.error,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27845__auto__)),null));
}
});

blancas.kern.core.PState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27842__auto__,k__27843__auto__,G__30483){
var self__ = this;
var this__27842__auto____$1 = this;
var pred__30489 = cljs.core.keyword_identical_QMARK_;
var expr__30490 = k__27843__auto__;
if(cljs.core.truth_(pred__30489.call(null,new cljs.core.Keyword(null,"input","input",556931961),expr__30490))){
return (new blancas.kern.core.PState(G__30483,self__.pos,self__.value,self__.ok,self__.empty,self__.user,self__.error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30489.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__30490))){
return (new blancas.kern.core.PState(self__.input,G__30483,self__.value,self__.ok,self__.empty,self__.user,self__.error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30489.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__30490))){
return (new blancas.kern.core.PState(self__.input,self__.pos,G__30483,self__.ok,self__.empty,self__.user,self__.error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30489.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),expr__30490))){
return (new blancas.kern.core.PState(self__.input,self__.pos,self__.value,G__30483,self__.empty,self__.user,self__.error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30489.call(null,new cljs.core.Keyword(null,"empty","empty",767870958),expr__30490))){
return (new blancas.kern.core.PState(self__.input,self__.pos,self__.value,self__.ok,G__30483,self__.user,self__.error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30489.call(null,new cljs.core.Keyword(null,"user","user",1532431356),expr__30490))){
return (new blancas.kern.core.PState(self__.input,self__.pos,self__.value,self__.ok,self__.empty,G__30483,self__.error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30489.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__30490))){
return (new blancas.kern.core.PState(self__.input,self__.pos,self__.value,self__.ok,self__.empty,self__.user,G__30483,self__.__meta,self__.__extmap,null));
} else {
return (new blancas.kern.core.PState(self__.input,self__.pos,self__.value,self__.ok,self__.empty,self__.user,self__.error,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27843__auto__,G__30483),null));
}
}
}
}
}
}
}
});

blancas.kern.core.PState.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27847__auto__){
var self__ = this;
var this__27847__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",556931961),self__.input],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ok","ok",967785236),self__.ok],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"empty","empty",767870958),self__.empty],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"user","user",1532431356),self__.user],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});

blancas.kern.core.PState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27834__auto__,G__30483){
var self__ = this;
var this__27834__auto____$1 = this;
return (new blancas.kern.core.PState(self__.input,self__.pos,self__.value,self__.ok,self__.empty,self__.user,self__.error,G__30483,self__.__extmap,self__.__hash));
});

blancas.kern.core.PState.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27840__auto__,entry__27841__auto__){
var self__ = this;
var this__27840__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27841__auto__)){
return this__27840__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__27841__auto__,(0)),cljs.core._nth.call(null,entry__27841__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27840__auto____$1,entry__27841__auto__);
}
});

blancas.kern.core.PState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"ok","ok",-1686650533,null),new cljs.core.Symbol(null,"empty","empty",-1886564811,null),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"error","error",661562495,null)], null);
});

blancas.kern.core.PState.cljs$lang$type = true;

blancas.kern.core.PState.cljs$lang$ctorPrSeq = (function (this__27871__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"blancas.kern.core/PState");
});

blancas.kern.core.PState.cljs$lang$ctorPrWriter = (function (this__27871__auto__,writer__27872__auto__){
return cljs.core._write.call(null,writer__27872__auto__,"blancas.kern.core/PState");
});

blancas.kern.core.__GT_PState = (function blancas$kern$core$__GT_PState(input,pos,value,ok,empty,user,error){
return (new blancas.kern.core.PState(input,pos,value,ok,empty,user,error,null,null,null));
});

blancas.kern.core.map__GT_PState = (function blancas$kern$core$map__GT_PState(G__30487){
return (new blancas.kern.core.PState(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(G__30487),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__30487),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__30487),new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(G__30487),new cljs.core.Keyword(null,"empty","empty",767870958).cljs$core$IFn$_invoke$arity$1(G__30487),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(G__30487),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__30487),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__30487,new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"error","error",-978969032))),null));
});

/**
 * Makes a position record.
 */
blancas.kern.core.make_pos = (function blancas$kern$core$make_pos(var_args){
var G__30494 = arguments.length;
switch (G__30494) {
case 1:
return blancas.kern.core.make_pos.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return blancas.kern.core.make_pos.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

blancas.kern.core.make_pos.cljs$core$IFn$_invoke$arity$1 = (function (src){
return blancas.kern.core.make_pos.call(null,src,(1),(1));
});

blancas.kern.core.make_pos.cljs$core$IFn$_invoke$arity$3 = (function (src,ln,col){
return blancas.kern.core.__GT_PPosition.call(null,(function (){var or__27195__auto__ = src;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return "";
}
})(),ln,col);
});

blancas.kern.core.make_pos.cljs$lang$maxFixedArity = 3;

/**
 * Computes the new position of the character c.
 */
blancas.kern.core.char_pos = (function blancas$kern$core$char_pos(pos,c){
if(cljs.core._EQ_.call(null,c,"\n")){
return cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"col","col",-1959363084),(1),new cljs.core.Keyword(null,"line","line",212345235),(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(pos) + (1)));
} else {
if(cljs.core._EQ_.call(null,c,"\t")){
return cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"col","col",-1959363084),(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(pos) + blancas.kern.core._STAR_tab_width_STAR_));
} else {
return cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"col","col",-1959363084),(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(pos) + (1)));

}
}
});
/**
 * Computes the stream position after the character sequence cs.
 */
blancas.kern.core.str_pos = (function blancas$kern$core$str_pos(pos,cs){
while(true){
if(cljs.core.empty_QMARK_.call(null,cs)){
return pos;
} else {
var G__30496 = blancas.kern.core.char_pos.call(null,pos,cljs.core.first.call(null,cs));
var G__30497 = cljs.core.rest.call(null,cs);
pos = G__30496;
cs = G__30497;
continue;
}
break;
}
});
/**
 * Makes a message of type err-system.
 */
blancas.kern.core.make_err_system = (function blancas$kern$core$make_err_system(pos,text){
return blancas.kern.core.__GT_PError.call(null,pos,(function (){var x__28057__auto__ = blancas.kern.core.__GT_PMessage.call(null,blancas.kern.core.err_system,text);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})());
});
/**
 * Makes a message of type err-unexpect.
 */
blancas.kern.core.make_err_unexpect = (function blancas$kern$core$make_err_unexpect(pos,text){
return blancas.kern.core.__GT_PError.call(null,pos,(function (){var x__28057__auto__ = blancas.kern.core.__GT_PMessage.call(null,blancas.kern.core.err_unexpect,text);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})());
});
/**
 * Makes a message of type err-expect.
 */
blancas.kern.core.make_err_expect = (function blancas$kern$core$make_err_expect(pos,text){
return blancas.kern.core.__GT_PError.call(null,pos,(function (){var x__28057__auto__ = blancas.kern.core.__GT_PMessage.call(null,blancas.kern.core.err_expect,text);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})());
});
/**
 * Makes a message of type err-message.
 */
blancas.kern.core.make_err_message = (function blancas$kern$core$make_err_message(pos,text){
return blancas.kern.core.__GT_PError.call(null,pos,(function (){var x__28057__auto__ = blancas.kern.core.__GT_PMessage.call(null,blancas.kern.core.err_message,text);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})());
});
/**
 * Get the text from message types system, unexpect, and message.
 */
blancas.kern.core.get_msg = (function blancas$kern$core$get_msg(pmsg){
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(pmsg);
var text = cljs.core.force.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(pmsg));
if(cljs.core._EQ_.call(null,type,blancas.kern.core.err_system)){
return blancas.kern.i18n.fmt.call(null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),text);
} else {
if(cljs.core._EQ_.call(null,type,blancas.kern.core.err_unexpect)){
return blancas.kern.i18n.fmt.call(null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),text);
} else {
if(cljs.core._EQ_.call(null,type,blancas.kern.core.err_message)){
return text;
} else {
return null;
}
}
}
});
/**
 * Get the text from a list of messages of type expect.
 */
blancas.kern.core.get_msg_expect = (function blancas$kern$core$get_msg_expect(lst){
var show = (function (xs){
var comma_sep = clojure.string.join.call(null,blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"comma","comma",1699024745)),cljs.core.butlast.call(null,xs));
var or_last = blancas.kern.i18n.fmt.call(null,new cljs.core.Keyword(null,"or","or",235744169),cljs.core.last.call(null,xs));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(comma_sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(or_last)].join('');
});
var opts = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.force,new cljs.core.Keyword(null,"text","text",-1790561697)),lst);
var cnt = cljs.core.count.call(null,opts);
return blancas.kern.i18n.fmt.call(null,new cljs.core.Keyword(null,"expecting","expecting",-57706705),((cljs.core._EQ_.call(null,cnt,(1)))?cljs.core.first.call(null,opts):show.call(null,opts)));
});
/**
 * Gets the text of error messages as a list.
 */
blancas.kern.core.get_msg_list = (function blancas$kern$core$get_msg_list(p__30508){
var map__30509 = p__30508;
var map__30509__$1 = ((((!((map__30509 == null)))?((((map__30509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30509):map__30509);
var msgs = cljs.core.get.call(null,map__30509__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var ms = cljs.core.distinct.call(null,msgs);
return cljs.core.concat.call(null,(function (){var lst = cljs.core.filter.call(null,((function (ms,map__30509,map__30509__$1,msgs){
return (function (p1__30498_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__30498_SHARP_),blancas.kern.core.err_system);
});})(ms,map__30509,map__30509__$1,msgs))
,ms);
return cljs.core.reduce.call(null,((function (lst,ms,map__30509,map__30509__$1,msgs){
return (function (p1__30499_SHARP_,p2__30500_SHARP_){
return cljs.core.conj.call(null,p1__30499_SHARP_,blancas.kern.core.get_msg.call(null,p2__30500_SHARP_));
});})(lst,ms,map__30509,map__30509__$1,msgs))
,cljs.core.PersistentVector.EMPTY,lst);
})(),(function (){var lst = cljs.core.filter.call(null,((function (ms,map__30509,map__30509__$1,msgs){
return (function (p1__30501_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__30501_SHARP_),blancas.kern.core.err_unexpect);
});})(ms,map__30509,map__30509__$1,msgs))
,ms);
return cljs.core.reduce.call(null,((function (lst,ms,map__30509,map__30509__$1,msgs){
return (function (p1__30502_SHARP_,p2__30503_SHARP_){
return cljs.core.conj.call(null,p1__30502_SHARP_,blancas.kern.core.get_msg.call(null,p2__30503_SHARP_));
});})(lst,ms,map__30509,map__30509__$1,msgs))
,cljs.core.PersistentVector.EMPTY,lst);
})(),(function (){var lst = cljs.core.filter.call(null,((function (ms,map__30509,map__30509__$1,msgs){
return (function (p1__30504_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__30504_SHARP_),blancas.kern.core.err_expect);
});})(ms,map__30509,map__30509__$1,msgs))
,ms);
if(cljs.core.empty_QMARK_.call(null,lst)){
return lst;
} else {
var x__28057__auto__ = blancas.kern.core.get_msg_expect.call(null,lst);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
}
})(),(function (){var lst = cljs.core.filter.call(null,((function (ms,map__30509,map__30509__$1,msgs){
return (function (p1__30505_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__30505_SHARP_),blancas.kern.core.err_message);
});})(ms,map__30509,map__30509__$1,msgs))
,ms);
return cljs.core.reduce.call(null,((function (lst,ms,map__30509,map__30509__$1,msgs){
return (function (p1__30506_SHARP_,p2__30507_SHARP_){
return cljs.core.conj.call(null,p1__30506_SHARP_,blancas.kern.core.get_msg.call(null,p2__30507_SHARP_));
});})(lst,ms,map__30509,map__30509__$1,msgs))
,cljs.core.PersistentVector.EMPTY,lst);
})());
});
/**
 * Gets the text of error messages separated by \n.
 */
blancas.kern.core.get_msg_str = (function blancas$kern$core$get_msg_str(err){
var eol = "\n";
return clojure.string.join.call(null,eol,blancas.kern.core.get_msg_list.call(null,err));
});
/**
 * Merges errors from two state records.
 */
blancas.kern.core.merge_err = (function blancas$kern$core$merge_err(p__30511,p__30512){
var map__30513 = p__30511;
var map__30513__$1 = ((((!((map__30513 == null)))?((((map__30513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30513):map__30513);
var e1 = cljs.core.get.call(null,map__30513__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var map__30514 = p__30512;
var map__30514__$1 = ((((!((map__30514 == null)))?((((map__30514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30514.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30514):map__30514);
var e2 = cljs.core.get.call(null,map__30514__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(((e1 == null)) && ((e2 == null))){
return null;
} else {
if((e1 == null)){
return e2;
} else {
if((e2 == null)){
return e1;
} else {
var pos1 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e1);
var pos2 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(e2);
var r = cljs.core.compare.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(pos1),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(pos1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(pos2),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(pos2)], null));
if((r === (0))){
return cljs.core.update_in.call(null,e1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773)], null),cljs.core.concat,new cljs.core.Keyword(null,"msgs","msgs",-1176489773).cljs$core$IFn$_invoke$arity$1(e2));
} else {
if((r > (0))){
return e1;
} else {
return e2;

}
}

}
}
}
});
/**
 * Applies p on s; conjoins the result to that of s.
 */
blancas.kern.core.cat = (function blancas$kern$core$cat(p,s){
var st = p.call(null,s);
if(cljs.core.truth_(new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(st))){
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.conj.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(st)));
} else {
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"empty","empty",767870958),(function (){var and__27183__auto__ = new cljs.core.Keyword(null,"empty","empty",767870958).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(and__27183__auto__)){
return new cljs.core.Keyword(null,"empty","empty",767870958).cljs$core$IFn$_invoke$arity$1(st);
} else {
return and__27183__auto__;
}
})());
}
});
/**
 * Replace expect errors with expecting msg.
 */
blancas.kern.core.set_ex = (function blancas$kern$core$set_ex(msg,s){
var not_ex = (function blancas$kern$core$set_ex_$_not_ex(p__30520){
var map__30521 = p__30520;
var map__30521__$1 = ((((!((map__30521 == null)))?((((map__30521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30521):map__30521);
var type = cljs.core.get.call(null,map__30521__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return !(cljs.core._EQ_.call(null,type,blancas.kern.core.err_expect));
});
var update = (function blancas$kern$core$set_ex_$_update(lst,err){
return cljs.core.cons.call(null,err,cljs.core.filter.call(null,not_ex,lst));
});
var m = blancas.kern.core.__GT_PMessage.call(null,blancas.kern.core.err_expect,msg);
return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)], null),update,m);
});
/**
 * Makes s succeed with value v.
 */
blancas.kern.core.reply = (function blancas$kern$core$reply(v,s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"ok","ok",967785236),true,new cljs.core.Keyword(null,"error","error",-978969032),null);
});
/**
 * Tests if s failed without consuming any input.
 */
blancas.kern.core.failed_empty_QMARK_ = (function blancas$kern$core$failed_empty_QMARK_(s){
var and__27183__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(s));
if(and__27183__auto__){
return new cljs.core.Keyword(null,"empty","empty",767870958).cljs$core$IFn$_invoke$arity$1(s);
} else {
return and__27183__auto__;
}
});
/**
 * Sets s as failed because an unexpected reason.
 */
blancas.kern.core.unexpected = (function blancas$kern$core$unexpected(msg,s){
var err = blancas.kern.core.make_err_unexpect.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(s),msg);
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"ok","ok",967785236),false,new cljs.core.Keyword(null,"empty","empty",767870958),true,new cljs.core.Keyword(null,"error","error",-978969032),err);
});
/**
 * Sets s as failed because of an unexpected input.
 */
blancas.kern.core.unexpected_input = (function blancas$kern$core$unexpected_input(in$,s){
var err = blancas.kern.core.make_err_system.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(s),in$);
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"ok","ok",967785236),false,new cljs.core.Keyword(null,"empty","empty",767870958),true,new cljs.core.Keyword(null,"error","error",-978969032),err);
});
/**
 * Sets s as expecting msg.
 */
blancas.kern.core.expecting = (function blancas$kern$core$expecting(msg,s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"error","error",-978969032),blancas.kern.core.make_err_expect.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(s),msg));
});
/**
 * Sets the parser state as not empty. Needed in compound parsers
 * where optional parsers at the end may leave an incorrect :empty
 * state for the parser as a whole.
 */
blancas.kern.core.clear_empty = (function blancas$kern$core$clear_empty(s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"empty","empty",767870958),false);
});
/**
 * Succeeds without consuming any input. Any carried errors
 * are removed.
 */
blancas.kern.core.return$ = (function blancas$kern$core$return(v){
return (function (s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"ok","ok",967785236),true,new cljs.core.Keyword(null,"error","error",-978969032),null);
});
});
/**
 * Fails without consuming any input, having a single error
 * record with the passed messge msg.
 */
blancas.kern.core.fail = (function blancas$kern$core$fail(msg){
return (function (s){
var err = blancas.kern.core.make_err_message.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(s),msg);
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"ok","ok",967785236),false,new cljs.core.Keyword(null,"empty","empty",767870958),true,new cljs.core.Keyword(null,"error","error",-978969032),err);
});
});
/**
 * Succeeds if the next character satisfies the predicate pred,
 * in which case advances the position of the input stream. It
 * may fail on an unexpected end of input.
 */
blancas.kern.core.satisfy = (function blancas$kern$core$satisfy(pred){
return (function (s){
var stm = new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.empty_QMARK_.call(null,stm)){
return blancas.kern.core.unexpected.call(null,blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"eof","eof",-489063237)),s);
} else {
var c = cljs.core.first.call(null,stm);
if(cljs.core.truth_(pred.call(null,c))){
return blancas.kern.core.__GT_PState.call(null,cljs.core.rest.call(null,stm),blancas.kern.core.char_pos.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(s),c),c,true,false,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(s),null);
} else {
return blancas.kern.core.unexpected_input.call(null,(function (){var sb__28222__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30523_30525 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30524_30526 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30523_30525,_STAR_print_fn_STAR_30524_30526,sb__28222__auto__,c,stm){
return (function (x__28223__auto__){
return sb__28222__auto__.append(x__28223__auto__);
});})(_STAR_print_newline_STAR_30523_30525,_STAR_print_fn_STAR_30524_30526,sb__28222__auto__,c,stm))
;

try{cljs.core.pr.call(null,c);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30524_30526;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30523_30525;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28222__auto__)].join('');
})(),s);
}
}
});
});
/**
 * If parser p fails consuming no input, it replaces any Expecting
 * errors with a single Expecting with message msg. This helps to
 * produce more abstract and accurate error messages.
 */
blancas.kern.core._LT__QMARK__GT_ = (function blancas$kern$core$_LT__QMARK__GT_(p,msg){
return (function (s){
var st = p.call(null,s);
if(cljs.core.truth_(blancas.kern.core.failed_empty_QMARK_.call(null,st))){
return blancas.kern.core.set_ex.call(null,msg,st);
} else {
return st;
}
});
});
/**
 * Applies parser p; if it fails (regardless of input consumed)
 * it replaces any expecting errors with expecting msg. This is
 * similar to <?> but works even if some input was consumed.
 */
blancas.kern.core.expect = (function blancas$kern$core$expect(p,msg){
return (function (s){
var st = p.call(null,s);
if(cljs.core.truth_(new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(st))){
return st;
} else {
return blancas.kern.core.set_ex.call(null,msg,st);
}
});
});
/**
 * Tries p; if it fails without consuming any input, it tries q.
 * With more parsers, it will stop and succeed if a parser succeeds;
 * it will stop and fail if a parser fails consuming input; or it
 * will try the next one if a parser fails without consuming input.
 */
blancas.kern.core._LT__BAR__GT_ = (function blancas$kern$core$_LT__BAR__GT_(var_args){
var G__30531 = arguments.length;
switch (G__30531) {
case 2:
return blancas.kern.core._LT__BAR__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___30533 = arguments.length;
var i__28365__auto___30534 = (0);
while(true){
if((i__28365__auto___30534 < len__28364__auto___30533)){
args_arr__28383__auto__.push((arguments[i__28365__auto___30534]));

var G__30535 = (i__28365__auto___30534 + (1));
i__28365__auto___30534 = G__30535;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((2)),(0),null));
return blancas.kern.core._LT__BAR__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28384__auto__);

}
});

blancas.kern.core._LT__BAR__GT_.cljs$core$IFn$_invoke$arity$2 = (function (p,q){
return (function (s){
var s2 = p.call(null,s);
if(cljs.core.truth_(blancas.kern.core.failed_empty_QMARK_.call(null,s2))){
var s3 = q.call(null,s);
if(cljs.core.truth_(new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(s3))){
return s3;
} else {
return cljs.core.assoc.call(null,s3,new cljs.core.Keyword(null,"error","error",-978969032),blancas.kern.core.merge_err.call(null,s2,s3));
}
} else {
return s2;
}
});
});

blancas.kern.core._LT__BAR__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (p,q,more){
return cljs.core.reduce.call(null,blancas.kern.core._LT__BAR__GT_,cljs.core.list_STAR_.call(null,p,q,more));
});

blancas.kern.core._LT__BAR__GT_.cljs$lang$applyTo = (function (seq30528){
var G__30529 = cljs.core.first.call(null,seq30528);
var seq30528__$1 = cljs.core.next.call(null,seq30528);
var G__30530 = cljs.core.first.call(null,seq30528__$1);
var seq30528__$2 = cljs.core.next.call(null,seq30528__$1);
return blancas.kern.core._LT__BAR__GT_.cljs$core$IFn$_invoke$arity$variadic(G__30529,G__30530,seq30528__$2);
});

blancas.kern.core._LT__BAR__GT_.cljs$lang$maxFixedArity = (2);

/**
 * Binds parser p to function f which gets p's value and returns
 * a new parser. Function p must define a single parameter. The
 * argument it receives is the value parsed by p, not ps' return
 * value, which is a parser state record.
 */
blancas.kern.core._GT__GT__EQ_ = (function blancas$kern$core$_GT__GT__EQ_(p,f){
return (function (s){
var s1 = p.call(null,s);
if(cljs.core.truth_(new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(s1))){
var s2 = f.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(s1)).call(null,s1);
var s3 = cljs.core.assoc.call(null,s2,new cljs.core.Keyword(null,"empty","empty",767870958),(function (){var and__27183__auto__ = new cljs.core.Keyword(null,"empty","empty",767870958).cljs$core$IFn$_invoke$arity$1(s1);
if(cljs.core.truth_(and__27183__auto__)){
return new cljs.core.Keyword(null,"empty","empty",767870958).cljs$core$IFn$_invoke$arity$1(s2);
} else {
return and__27183__auto__;
}
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(s3))){
return s3;
} else {
return cljs.core.assoc.call(null,s3,new cljs.core.Keyword(null,"error","error",-978969032),blancas.kern.core.merge_err.call(null,s1,s3));
}
} else {
return s1;
}
});
});
/**
 * Parses p followed by q; skips p, keeps q. If more parsers are
 * given, it skips all but last and keeps the result of the last.
 */
blancas.kern.core._GT__GT_ = (function blancas$kern$core$_GT__GT_(var_args){
var G__30540 = arguments.length;
switch (G__30540) {
case 2:
return blancas.kern.core._GT__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___30542 = arguments.length;
var i__28365__auto___30543 = (0);
while(true){
if((i__28365__auto___30543 < len__28364__auto___30542)){
args_arr__28383__auto__.push((arguments[i__28365__auto___30543]));

var G__30544 = (i__28365__auto___30543 + (1));
i__28365__auto___30543 = G__30544;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((2)),(0),null));
return blancas.kern.core._GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28384__auto__);

}
});

blancas.kern.core._GT__GT_.cljs$core$IFn$_invoke$arity$2 = (function (p,q){
return blancas.kern.core._GT__GT__EQ_.call(null,p,(function (_){
return q;
}));
});

blancas.kern.core._GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (p,q,more){
return cljs.core.reduce.call(null,blancas.kern.core._GT__GT_,cljs.core.list_STAR_.call(null,p,q,more));
});

blancas.kern.core._GT__GT_.cljs$lang$applyTo = (function (seq30537){
var G__30538 = cljs.core.first.call(null,seq30537);
var seq30537__$1 = cljs.core.next.call(null,seq30537);
var G__30539 = cljs.core.first.call(null,seq30537__$1);
var seq30537__$2 = cljs.core.next.call(null,seq30537__$1);
return blancas.kern.core._GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__30538,G__30539,seq30537__$2);
});

blancas.kern.core._GT__GT_.cljs$lang$maxFixedArity = (2);

/**
 * Parses p followed by q; keeps p, skips q. If more parsers are
 * given, it keeps the first result and skips the rest.
 */
blancas.kern.core._LT__LT_ = (function blancas$kern$core$_LT__LT_(var_args){
var G__30549 = arguments.length;
switch (G__30549) {
case 2:
return blancas.kern.core._LT__LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___30551 = arguments.length;
var i__28365__auto___30552 = (0);
while(true){
if((i__28365__auto___30552 < len__28364__auto___30551)){
args_arr__28383__auto__.push((arguments[i__28365__auto___30552]));

var G__30553 = (i__28365__auto___30552 + (1));
i__28365__auto___30552 = G__30553;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((2)),(0),null));
return blancas.kern.core._LT__LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28384__auto__);

}
});

blancas.kern.core._LT__LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,q){
return blancas.kern.core._GT__GT__EQ_.call(null,p,(function (x){
return blancas.kern.core._GT__GT_.call(null,q,blancas.kern.core.return$.call(null,x));
}));
});

blancas.kern.core._LT__LT_.cljs$core$IFn$_invoke$arity$variadic = (function (p,q,more){
return cljs.core.reduce.call(null,blancas.kern.core._LT__LT_,cljs.core.list_STAR_.call(null,p,q,more));
});

blancas.kern.core._LT__LT_.cljs$lang$applyTo = (function (seq30546){
var G__30547 = cljs.core.first.call(null,seq30546);
var seq30546__$1 = cljs.core.next.call(null,seq30546);
var G__30548 = cljs.core.first.call(null,seq30546__$1);
var seq30546__$2 = cljs.core.next.call(null,seq30546__$1);
return blancas.kern.core._LT__LT_.cljs$core$IFn$_invoke$arity$variadic(G__30547,G__30548,seq30546__$2);
});

blancas.kern.core._LT__LT_.cljs$lang$maxFixedArity = (2);

/**
 * Parses p; if successful, it applies f to the value parsed by p.
 */
blancas.kern.core._LT_$_GT_ = (function blancas$kern$core$_LT_$_GT_(f,p){
return blancas.kern.core._GT__GT__EQ_.call(null,p,(function (x){
return blancas.kern.core.return$.call(null,f.call(null,x));
}));
});
/**
 * Applies one or more parsers; collects the results in a
 * vector, including nil values. If any parser fails, it
 * stops immediately and fails.
 */
blancas.kern.core._LT__STAR__GT_ = (function blancas$kern$core$_LT__STAR__GT_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___30556 = arguments.length;
var i__28365__auto___30557 = (0);
while(true){
if((i__28365__auto___30557 < len__28364__auto___30556)){
args__28371__auto__.push((arguments[i__28365__auto___30557]));

var G__30558 = (i__28365__auto___30557 + (1));
i__28365__auto___30557 = G__30558;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return blancas.kern.core._LT__STAR__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

blancas.kern.core._LT__STAR__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (p,more){
return (function (s){
var s1 = cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"empty","empty",767870958),true);
var ps = cljs.core.cons.call(null,p,more);
while(true){
var s2 = blancas.kern.core.cat.call(null,cljs.core.first.call(null,ps),s1);
if(cljs.core.truth_((function (){var and__27183__auto__ = new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(s2);
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core.next.call(null,ps);
} else {
return and__27183__auto__;
}
})())){
var G__30559 = s2;
var G__30560 = cljs.core.next.call(null,ps);
s1 = G__30559;
ps = G__30560;
continue;
} else {
return s2;
}
break;
}
});
});

blancas.kern.core._LT__STAR__GT_.cljs$lang$maxFixedArity = (1);

blancas.kern.core._LT__STAR__GT_.cljs$lang$applyTo = (function (seq30554){
var G__30555 = cljs.core.first.call(null,seq30554);
var seq30554__$1 = cljs.core.next.call(null,seq30554);
return blancas.kern.core._LT__STAR__GT_.cljs$core$IFn$_invoke$arity$variadic(G__30555,seq30554__$1);
});

/**
 * Parses p; on failure it pretends it did not consume any input.
 */
blancas.kern.core._LT__COLON__GT_ = (function blancas$kern$core$_LT__COLON__GT_(p){
return (function (s){
var st = p.call(null,s);
if(cljs.core.truth_(new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(st))){
return st;
} else {
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"empty","empty",767870958),true);
}
});
});
/**
 * Parses p zero or more times; returns the result(s) in a
 * vector. It stops when p fails, but this parser succeeds.
 */
blancas.kern.core.many = (function blancas$kern$core$many(p){
return (function (s){
var st = p.call(null,s);
var vs = cljs.core.PersistentVector.EMPTY;
var e = true;
while(true){
if(cljs.core.truth_((function (){var and__27183__auto__ = new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(st);
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"empty","empty",767870958).cljs$core$IFn$_invoke$arity$1(st));
} else {
return and__27183__auto__;
}
})())){
var G__30561 = p.call(null,st);
var G__30562 = cljs.core.conj.call(null,vs,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(st));
var G__30563 = (function (){var and__27183__auto__ = e;
if(and__27183__auto__){
return new cljs.core.Keyword(null,"empty","empty",767870958).cljs$core$IFn$_invoke$arity$1(st);
} else {
return and__27183__auto__;
}
})();
st = G__30561;
vs = G__30562;
e = G__30563;
continue;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"empty","empty",767870958).cljs$core$IFn$_invoke$arity$1(st))){
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"value","value",305978217),vs,new cljs.core.Keyword(null,"ok","ok",967785236),true,new cljs.core.Keyword(null,"empty","empty",767870958),e,new cljs.core.Keyword(null,"error","error",-978969032),null);
} else {
return st;
}
}
break;
}
});
});
/**
 * Like (many) but it won't set the state to :empty. Use instead of
 * (many) if it comes last to avoid overriding non-empty parsing.
 */
blancas.kern.core.many0 = (function blancas$kern$core$many0(p){
return blancas.kern.core._GT__GT_.call(null,blancas.kern.core.many.call(null,p),blancas.kern.core.clear_empty);
});
/**
 * Parses p one or more times and returns the result(s) in a
 * vector. It stops when p fails, but this parser succeeds.
 */
blancas.kern.core.many1 = (function blancas$kern$core$many1(p){
return blancas.kern.core._GT__GT__EQ_.call(null,p,(function (x){
return blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core.many.call(null,p),(function (y){
return blancas.kern.core.return$.call(null,cljs.core.reduce.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),y));
}));
}));
});
/**
 * Succeeds if p succeeds or if p fails without consuming input.
 */
blancas.kern.core.optional = (function blancas$kern$core$optional(p){
return (function (s){
var st = p.call(null,s);
if(cljs.core.truth_((function (){var or__27195__auto__ = new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(st);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return new cljs.core.Keyword(null,"empty","empty",767870958).cljs$core$IFn$_invoke$arity$1(st);
}
})())){
return blancas.kern.core.reply.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(st),st);
} else {
return st;
}
});
});
/**
 * Applies p; if it fails without consuming input, it returns a
 * parser state record with the :value x as default.
 */
blancas.kern.core.option = (function blancas$kern$core$option(x,p){
return (function (s){
var st = p.call(null,s);
if(cljs.core.truth_(blancas.kern.core.failed_empty_QMARK_.call(null,st))){
return blancas.kern.core.reply.call(null,x,s);
} else {
return st;
}
});
});
/**
 * Applies one or more parsers and skips the result. That is, it
 * returns a parser state record with a :value nil.
 */
blancas.kern.core.skip = (function blancas$kern$core$skip(var_args){
var G__30568 = arguments.length;
switch (G__30568) {
case 1:
return blancas.kern.core.skip.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return blancas.kern.core.skip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___30570 = arguments.length;
var i__28365__auto___30571 = (0);
while(true){
if((i__28365__auto___30571 < len__28364__auto___30570)){
args_arr__28383__auto__.push((arguments[i__28365__auto___30571]));

var G__30572 = (i__28365__auto___30571 + (1));
i__28365__auto___30571 = G__30572;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((2)),(0),null));
return blancas.kern.core.skip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28384__auto__);

}
});

blancas.kern.core.skip.cljs$core$IFn$_invoke$arity$1 = (function (p){
return blancas.kern.core._GT__GT_.call(null,p,blancas.kern.core.return$.call(null,null));
});

blancas.kern.core.skip.cljs$core$IFn$_invoke$arity$2 = (function (p,q){
return blancas.kern.core._GT__GT__EQ_.call(null,p,(function (_){
return blancas.kern.core.skip.call(null,q);
}));
});

blancas.kern.core.skip.cljs$core$IFn$_invoke$arity$variadic = (function (p,q,more){
return cljs.core.reduce.call(null,blancas.kern.core.skip,cljs.core.list_STAR_.call(null,p,q,more));
});

blancas.kern.core.skip.cljs$lang$applyTo = (function (seq30565){
var G__30566 = cljs.core.first.call(null,seq30565);
var seq30565__$1 = cljs.core.next.call(null,seq30565);
var G__30567 = cljs.core.first.call(null,seq30565__$1);
var seq30565__$2 = cljs.core.next.call(null,seq30565__$1);
return blancas.kern.core.skip.cljs$core$IFn$_invoke$arity$variadic(G__30566,G__30567,seq30565__$2);
});

blancas.kern.core.skip.cljs$lang$maxFixedArity = (2);

/**
 * Parses p zero or more times and skips the results. This is
 * like skip but it can apply p zero, one, or many times.
 */
blancas.kern.core.skip_many = (function blancas$kern$core$skip_many(p){
return (function (s){
var st = p.call(null,s);
var e = true;
while(true){
if(cljs.core.truth_((function (){var and__27183__auto__ = new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(st);
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"empty","empty",767870958).cljs$core$IFn$_invoke$arity$1(st));
} else {
return and__27183__auto__;
}
})())){
var G__30573 = p.call(null,st);
var G__30574 = (function (){var and__27183__auto__ = e;
if(and__27183__auto__){
return new cljs.core.Keyword(null,"empty","empty",767870958).cljs$core$IFn$_invoke$arity$1(st);
} else {
return and__27183__auto__;
}
})();
st = G__30573;
e = G__30574;
continue;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"empty","empty",767870958).cljs$core$IFn$_invoke$arity$1(st))){
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"ok","ok",967785236),true,new cljs.core.Keyword(null,"empty","empty",767870958),e,new cljs.core.Keyword(null,"error","error",-978969032),null);
} else {
return st;
}
}
break;
}
});
});
/**
 * Parses p one or more times and skips the results.
 */
blancas.kern.core.skip_many1 = (function blancas$kern$core$skip_many1(p){
return blancas.kern.core._GT__GT_.call(null,p,blancas.kern.core.skip_many.call(null,p));
});
/**
 * Parses p one or more times while parsing sep in between;
 * collects the results of p in a vector.
 */
blancas.kern.core.sep_by1 = (function blancas$kern$core$sep_by1(sep,p){
return blancas.kern.core._GT__GT__EQ_.call(null,p,(function (x){
return blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core.many.call(null,blancas.kern.core._GT__GT_.call(null,sep,p)),(function (y){
return blancas.kern.core.return$.call(null,cljs.core.reduce.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),y));
}));
}));
});
/**
 * Parses p zero or more times while parsing sep in between;
 * collects the results of p in a vector.
 */
blancas.kern.core.sep_by = (function blancas$kern$core$sep_by(sep,p){
return blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core.sep_by1.call(null,sep,p),blancas.kern.core.return$.call(null,cljs.core.PersistentVector.EMPTY));
});
/**
 * Parses p zero or more times, separated and ended by applications
 * of sep; returns the results of p in a vector.
 */
blancas.kern.core.end_by = (function blancas$kern$core$end_by(sep,p){
return blancas.kern.core.many.call(null,blancas.kern.core._LT__LT_.call(null,p,sep));
});
/**
 * Parses p one or more times, separated and ended by applications
 * of sep; returns the results of p in a vector.
 */
blancas.kern.core.end_by1 = (function blancas$kern$core$end_by1(sep,p){
return blancas.kern.core.many1.call(null,blancas.kern.core._LT__LT_.call(null,p,sep));
});
/**
 * Parses p one or more times separated, and optionally ended by sep;
 * collects the results in a vector.
 */
blancas.kern.core.sep_end_by1 = (function blancas$kern$core$sep_end_by1(sep,p){
return blancas.kern.core._GT__GT__EQ_.call(null,p,(function (x){
return blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._GT__GT_.call(null,sep,blancas.kern.core.sep_end_by.call(null,sep,p)),(function (y){
return blancas.kern.core.return$.call(null,cljs.core.reduce.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),y));
})),blancas.kern.core.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null)));
}));
});
/**
 * Parses p zero or more times separated, and optionally ended by sep;
 * collects the results in a vector.
 */
blancas.kern.core.sep_end_by = (function blancas$kern$core$sep_end_by(sep,p){
return blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core.sep_end_by1.call(null,sep,p),blancas.kern.core.return$.call(null,cljs.core.PersistentVector.EMPTY));
});
/**
 * Applies open, p, close; returns the value of p.
 */
blancas.kern.core.between = (function blancas$kern$core$between(var_args){
var G__30576 = arguments.length;
switch (G__30576) {
case 2:
return blancas.kern.core.between.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return blancas.kern.core.between.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

blancas.kern.core.between.cljs$core$IFn$_invoke$arity$2 = (function (delim,p){
return blancas.kern.core.between.call(null,delim,delim,p);
});

blancas.kern.core.between.cljs$core$IFn$_invoke$arity$3 = (function (open,close,p){
return blancas.kern.core._LT__LT_.call(null,blancas.kern.core._GT__GT_.call(null,open,p),close);
});

blancas.kern.core.between.cljs$lang$maxFixedArity = 3;

/**
 * Applies p n times; collects the results in a vector.
 */
blancas.kern.core.times = (function blancas$kern$core$times(n,p){
if((n > (0))){
return cljs.core.apply.call(null,blancas.kern.core._LT__STAR__GT_,cljs.core.repeat.call(null,n,p));
} else {
return blancas.kern.core.return$.call(null,cljs.core.PersistentVector.EMPTY);
}
});
/**
 * Applies p and returns the result; it consumes no input.
 */
blancas.kern.core.look_ahead = (function blancas$kern$core$look_ahead(p){
return (function (s){
var st = p.call(null,s);
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(st));
});
});
/**
 * Applies p; if it succeeds it consumes no input.
 */
blancas.kern.core.predict = (function blancas$kern$core$predict(p){
return (function (s){
var st = p.call(null,s);
if(cljs.core.not.call(null,(function (){var or__27195__auto__ = new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(st);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return new cljs.core.Keyword(null,"empty","empty",767870958).cljs$core$IFn$_invoke$arity$1(st);
}
})())){
return st;
} else {
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(s));
}
});
});
/**
 * Succeeds only if p fails; consumes no input.
 */
blancas.kern.core.not_followed_by = (function blancas$kern$core$not_followed_by(p){
return blancas.kern.core._LT__COLON__GT_.call(null,blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._LT__COLON__GT_.call(null,p),(function (x){
return cljs.core.partial.call(null,blancas.kern.core.unexpected_input,x);
})),blancas.kern.core.return$.call(null,null)));
});
/**
 * Parses zero or more p while trying end, until end succeeds.
 * Returns the results in a vector.
 */
blancas.kern.core.many_till = (function blancas$kern$core$many_till(p,end){
var scan = (function blancas$kern$core$many_till_$_scan(){
return blancas.kern.core._LT__BAR__GT_.call(null,blancas.kern.core._GT__GT_.call(null,end,blancas.kern.core.return$.call(null,cljs.core.PersistentVector.EMPTY)),blancas.kern.core._GT__GT__EQ_.call(null,p,(function (x){
return blancas.kern.core._GT__GT__EQ_.call(null,blancas$kern$core$many_till_$_scan.call(null),(function (y){
return blancas.kern.core.return$.call(null,cljs.core.reduce.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),y));
}));
})));
});
return scan.call(null);
});
/**
 * Applies one or more parsers stopping at the first failure.
 * Flattens the result and converts it to a string.
 */
blancas.kern.core._LT__PLUS__GT_ = (function blancas$kern$core$_LT__PLUS__GT_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___30580 = arguments.length;
var i__28365__auto___30581 = (0);
while(true){
if((i__28365__auto___30581 < len__28364__auto___30580)){
args__28371__auto__.push((arguments[i__28365__auto___30581]));

var G__30582 = (i__28365__auto___30581 + (1));
i__28365__auto___30581 = G__30582;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return blancas.kern.core._LT__PLUS__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

blancas.kern.core._LT__PLUS__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (p,more){
return blancas.kern.core._LT_$_GT_.call(null,cljs.core.comp.call(null,clojure.string.join,cljs.core.flatten),cljs.core.apply.call(null,blancas.kern.core._LT__STAR__GT_,p,more));
});

blancas.kern.core._LT__PLUS__GT_.cljs$lang$maxFixedArity = (1);

blancas.kern.core._LT__PLUS__GT_.cljs$lang$applyTo = (function (seq30578){
var G__30579 = cljs.core.first.call(null,seq30578);
var seq30578__$1 = cljs.core.next.call(null,seq30578);
return blancas.kern.core._LT__PLUS__GT_.cljs$core$IFn$_invoke$arity$variadic(G__30579,seq30578__$1);
});

/**
 * Applies a parser p, traversing the input as necessary,
 * until it succeeds or it reaches the end of input.
 */
blancas.kern.core.search = (function blancas$kern$core$search(p){
return (function (s){
while(true){
var s2 = p.call(null,s);
if(cljs.core.truth_((function (){var or__27195__auto__ = new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(s2);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(s2));
}
})())){
return s2;
} else {
var G__30583 = cljs.core.assoc.call(null,s2,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.rest.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(s2)),new cljs.core.Keyword(null,"error","error",-978969032),null);
s = G__30583;
continue;
}
break;
}
});
});
/**
 * Succeeds with any character.
 */
blancas.kern.core.any_char = blancas.kern.core.satisfy.call(null,cljs.core.constantly.call(null,true));
/**
 * Parses a letter.
 */
blancas.kern.core.letter = blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core.satisfy.call(null,blancas.kern.char$.is_letter),blancas.kern.i18n.di18n.call(null,new cljs.core.Keyword(null,"letter","letter",-125811450)));
/**
 * Parses a lower-case letter.
 */
blancas.kern.core.lower = blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core.satisfy.call(null,blancas.kern.char$.is_lower_case),blancas.kern.i18n.di18n.call(null,new cljs.core.Keyword(null,"lower","lower",1120320821)));
/**
 * Parses an upper-case letter.
 */
blancas.kern.core.upper = blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core.satisfy.call(null,blancas.kern.char$.is_upper_case),blancas.kern.i18n.di18n.call(null,new cljs.core.Keyword(null,"upper","upper",246243906)));
/**
 * Parses a whitespace character.
 */
blancas.kern.core.white_space = blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core.satisfy.call(null,blancas.kern.char$.is_white_space),blancas.kern.i18n.di18n.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483)));
/**
 * Parses the space character.
 */
blancas.kern.core.space = blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core.satisfy.call(null,blancas.kern.char$.is_space),blancas.kern.i18n.di18n.call(null,new cljs.core.Keyword(null,"space","space",348133475)));
/**
 * Parses the tab character.
 */
blancas.kern.core.tab = blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core.satisfy.call(null,blancas.kern.char$.is_tab),blancas.kern.i18n.di18n.call(null,new cljs.core.Keyword(null,"tab","tab",-559583621)));
/**
 * Parses a digit.
 */
blancas.kern.core.digit = blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core.satisfy.call(null,blancas.kern.char$.is_digit),blancas.kern.i18n.di18n.call(null,new cljs.core.Keyword(null,"digit","digit",1612650493)));
/**
 * Parses a hexadecimal digit.
 */
blancas.kern.core.hex_digit = (function (){var hex = cljs.core.set.call(null,"0123456789abcdefABCDEF");
return blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core.satisfy.call(null,((function (hex){
return (function (c){
return hex.call(null,c);
});})(hex))
),blancas.kern.i18n.di18n.call(null,new cljs.core.Keyword(null,"hex-digit","hex-digit",210179419)));
})();
/**
 * Parses an octal digit.
 */
blancas.kern.core.oct_digit = (function (){var oct = cljs.core.set.call(null,"01234567");
return blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core.satisfy.call(null,((function (oct){
return (function (c){
return oct.call(null,c);
});})(oct))
),blancas.kern.i18n.di18n.call(null,new cljs.core.Keyword(null,"oct-digit","oct-digit",468252641)));
})();
/**
 * Parses a letter or digit.
 */
blancas.kern.core.alpha_num = blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core.satisfy.call(null,blancas.kern.char$.is_letter_or_digit),blancas.kern.i18n.di18n.call(null,new cljs.core.Keyword(null,"alpha-num","alpha-num",-124211883)));
/**
 * Parses a single symbol x (a character).
 */
blancas.kern.core.sym_STAR_ = (function blancas$kern$core$sym_STAR_(x){
return blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core.satisfy.call(null,(function (c){
return cljs.core._EQ_.call(null,c,x);
})),(function (){var sb__28222__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30584_30586 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30585_30587 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30584_30586,_STAR_print_fn_STAR_30585_30587,sb__28222__auto__){
return (function (x__28223__auto__){
return sb__28222__auto__.append(x__28223__auto__);
});})(_STAR_print_newline_STAR_30584_30586,_STAR_print_fn_STAR_30585_30587,sb__28222__auto__))
;

try{cljs.core.pr.call(null,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30585_30587;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30584_30586;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28222__auto__)].join('');
})());
});
/**
 * Parses a single symbol x (a character); not case-sensitive.
 */
blancas.kern.core.sym_ = (function blancas$kern$core$sym_(x){
return blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core._GT__GT_.call(null,blancas.kern.core.satisfy.call(null,(function (c){
return cljs.core._EQ_.call(null,clojure.string.lower_case.call(null,x),clojure.string.lower_case.call(null,c));
})),blancas.kern.core.return$.call(null,x)),(function (){var sb__28222__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30588_30590 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30589_30591 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30588_30590,_STAR_print_fn_STAR_30589_30591,sb__28222__auto__){
return (function (x__28223__auto__){
return sb__28222__auto__.append(x__28223__auto__);
});})(_STAR_print_newline_STAR_30588_30590,_STAR_print_fn_STAR_30589_30591,sb__28222__auto__))
;

try{cljs.core.pr.call(null,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30589_30591;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30588_30590;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28222__auto__)].join('');
})());
});
/**
 * Parses a specific string, not necessarily delimited. If more
 * than one are given it will try each choice in turn.
 */
blancas.kern.core.token_STAR_ = (function blancas$kern$core$token_STAR_(var_args){
var G__30595 = arguments.length;
switch (G__30595) {
case 1:
return blancas.kern.core.token_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___30597 = arguments.length;
var i__28365__auto___30598 = (0);
while(true){
if((i__28365__auto___30598 < len__28364__auto___30597)){
args_arr__28383__auto__.push((arguments[i__28365__auto___30598]));

var G__30599 = (i__28365__auto___30598 + (1));
i__28365__auto___30598 = G__30599;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((1)),(0),null));
return blancas.kern.core.token_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28384__auto__);

}
});

blancas.kern.core.token_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return blancas.kern.core._LT__QMARK__GT_.call(null,(function (s){
var st = cljs.core.reduce.call(null,blancas.kern.core._GT__GT_,cljs.core.map.call(null,blancas.kern.core.sym_STAR_,xs)).call(null,s);
if(cljs.core.truth_(new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(st))){
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"value","value",305978217),xs);
} else {
var in$ = new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.seq.call(null,in$)){
return blancas.kern.core.unexpected.call(null,clojure.string.join.call(null,cljs.core.take.call(null,cljs.core.count.call(null,xs),in$)),s);
} else {
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"ok","ok",967785236),false,new cljs.core.Keyword(null,"empty","empty",767870958),true,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(st));
}
}
}),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs)].join(''));
});

blancas.kern.core.token_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (xs,more){
return cljs.core.apply.call(null,blancas.kern.core._LT__BAR__GT_,cljs.core.map.call(null,blancas.kern.core.token_STAR_,cljs.core.cons.call(null,xs,more)));
});

blancas.kern.core.token_STAR_.cljs$lang$applyTo = (function (seq30593){
var G__30594 = cljs.core.first.call(null,seq30593);
var seq30593__$1 = cljs.core.next.call(null,seq30593);
return blancas.kern.core.token_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__30594,seq30593__$1);
});

blancas.kern.core.token_STAR_.cljs$lang$maxFixedArity = (1);

/**
 * Parses a specific string, not necessarily delimited; not
 * case-sensitive. If more than one are given it will try
 * each choice in turn.
 */
blancas.kern.core.token_ = (function blancas$kern$core$token_(var_args){
var G__30603 = arguments.length;
switch (G__30603) {
case 1:
return blancas.kern.core.token_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___30605 = arguments.length;
var i__28365__auto___30606 = (0);
while(true){
if((i__28365__auto___30606 < len__28364__auto___30605)){
args_arr__28383__auto__.push((arguments[i__28365__auto___30606]));

var G__30607 = (i__28365__auto___30606 + (1));
i__28365__auto___30606 = G__30607;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((1)),(0),null));
return blancas.kern.core.token_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28384__auto__);

}
});

blancas.kern.core.token_.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return blancas.kern.core._LT__QMARK__GT_.call(null,(function (s){
var st = cljs.core.reduce.call(null,blancas.kern.core._GT__GT_,cljs.core.map.call(null,blancas.kern.core.sym_,xs)).call(null,s);
if(cljs.core.truth_(new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(st))){
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"value","value",305978217),xs);
} else {
var in$ = new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.seq.call(null,in$)){
return blancas.kern.core.unexpected.call(null,clojure.string.join.call(null,cljs.core.take.call(null,cljs.core.count.call(null,xs),in$)),s);
} else {
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"ok","ok",967785236),false,new cljs.core.Keyword(null,"empty","empty",767870958),true,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(st));
}
}
}),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs)].join(''));
});

blancas.kern.core.token_.cljs$core$IFn$_invoke$arity$variadic = (function (xs,more){
return cljs.core.apply.call(null,blancas.kern.core._LT__BAR__GT_,cljs.core.map.call(null,blancas.kern.core.token_,cljs.core.cons.call(null,xs,more)));
});

blancas.kern.core.token_.cljs$lang$applyTo = (function (seq30601){
var G__30602 = cljs.core.first.call(null,seq30601);
var seq30601__$1 = cljs.core.next.call(null,seq30601);
return blancas.kern.core.token_.cljs$core$IFn$_invoke$arity$variadic(G__30602,seq30601__$1);
});

blancas.kern.core.token_.cljs$lang$maxFixedArity = (1);

/**
 * Parses a specific string, delimited by letter. If more than
 * one are given it will try each choice in turn.
 */
blancas.kern.core.word_STAR_ = (function blancas$kern$core$word_STAR_(var_args){
var G__30613 = arguments.length;
switch (G__30613) {
case 2:
return blancas.kern.core.word_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___30615 = arguments.length;
var i__28365__auto___30616 = (0);
while(true){
if((i__28365__auto___30616 < len__28364__auto___30615)){
args_arr__28383__auto__.push((arguments[i__28365__auto___30616]));

var G__30617 = (i__28365__auto___30616 + (1));
i__28365__auto___30616 = G__30617;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((2)),(0),null));
return blancas.kern.core.word_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28384__auto__);

}
});

blancas.kern.core.word_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (letter,cs){
return blancas.kern.core._LT__COLON__GT_.call(null,blancas.kern.core._LT__LT_.call(null,blancas.kern.core.token_STAR_.call(null,cs),blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core.not_followed_by.call(null,letter),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"end-of","end-of",-370589573))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cs)].join(''))));
});

blancas.kern.core.word_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (letter,cs,more){
return cljs.core.apply.call(null,blancas.kern.core._LT__BAR__GT_,cljs.core.map.call(null,(function (p1__30608_SHARP_){
return blancas.kern.core.word_STAR_.call(null,letter,p1__30608_SHARP_);
}),cljs.core.cons.call(null,cs,more)));
});

blancas.kern.core.word_STAR_.cljs$lang$applyTo = (function (seq30610){
var G__30611 = cljs.core.first.call(null,seq30610);
var seq30610__$1 = cljs.core.next.call(null,seq30610);
var G__30612 = cljs.core.first.call(null,seq30610__$1);
var seq30610__$2 = cljs.core.next.call(null,seq30610__$1);
return blancas.kern.core.word_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__30611,G__30612,seq30610__$2);
});

blancas.kern.core.word_STAR_.cljs$lang$maxFixedArity = (2);

/**
 * Parses a specific string, delimited by letter; not case-sensitive.
 * If more than one are given it will try each choice in turn.
 */
blancas.kern.core.word_ = (function blancas$kern$core$word_(var_args){
var G__30623 = arguments.length;
switch (G__30623) {
case 2:
return blancas.kern.core.word_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__28383__auto__ = [];
var len__28364__auto___30625 = arguments.length;
var i__28365__auto___30626 = (0);
while(true){
if((i__28365__auto___30626 < len__28364__auto___30625)){
args_arr__28383__auto__.push((arguments[i__28365__auto___30626]));

var G__30627 = (i__28365__auto___30626 + (1));
i__28365__auto___30626 = G__30627;
continue;
} else {
}
break;
}

var argseq__28384__auto__ = (new cljs.core.IndexedSeq(args_arr__28383__auto__.slice((2)),(0),null));
return blancas.kern.core.word_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28384__auto__);

}
});

blancas.kern.core.word_.cljs$core$IFn$_invoke$arity$2 = (function (letter,cs){
return blancas.kern.core._LT__COLON__GT_.call(null,blancas.kern.core._LT__LT_.call(null,blancas.kern.core.token_.call(null,cs),blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core.not_followed_by.call(null,letter),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(blancas.kern.i18n.i18n.call(null,new cljs.core.Keyword(null,"end-of","end-of",-370589573))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cs)].join(''))));
});

blancas.kern.core.word_.cljs$core$IFn$_invoke$arity$variadic = (function (letter,cs,more){
return cljs.core.apply.call(null,blancas.kern.core._LT__BAR__GT_,cljs.core.map.call(null,(function (p1__30618_SHARP_){
return blancas.kern.core.word_.call(null,letter,p1__30618_SHARP_);
}),cljs.core.cons.call(null,cs,more)));
});

blancas.kern.core.word_.cljs$lang$applyTo = (function (seq30620){
var G__30621 = cljs.core.first.call(null,seq30620);
var seq30620__$1 = cljs.core.next.call(null,seq30620);
var G__30622 = cljs.core.first.call(null,seq30620__$1);
var seq30620__$2 = cljs.core.next.call(null,seq30620__$1);
return blancas.kern.core.word_.cljs$core$IFn$_invoke$arity$variadic(G__30621,G__30622,seq30620__$2);
});

blancas.kern.core.word_.cljs$lang$maxFixedArity = (2);

/**
 * Succeeds if the next character is in the supplied string.
 */
blancas.kern.core.one_of_STAR_ = (function blancas$kern$core$one_of_STAR_(cs){
return blancas.kern.core.satisfy.call(null,(function (p1__30628_SHARP_){
return clojure.string.index_of.call(null,cs,p1__30628_SHARP_);
}));
});
/**
 * Succeeds if the next character is not in the supplied string.
 */
blancas.kern.core.none_of_STAR_ = (function blancas$kern$core$none_of_STAR_(cs){
return blancas.kern.core.satisfy.call(null,(function (p1__30629_SHARP_){
return (clojure.string.index_of.call(null,cs,p1__30629_SHARP_) == null);
}));
});
/**
 * Succeeds on a new line.
 */
blancas.kern.core.new_line_STAR_ = blancas.kern.core._GT__GT_.call(null,blancas.kern.core.optional.call(null,blancas.kern.core.sym_STAR_.call(null,"\r")),blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core.sym_STAR_.call(null,"\n"),blancas.kern.i18n.di18n.call(null,new cljs.core.Keyword(null,"new-line","new-line",1060819447))));
/**
 * Succeeds on end of input.
 */
blancas.kern.core.eof = blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core.not_followed_by.call(null,blancas.kern.core.any_char),blancas.kern.i18n.di18n.call(null,new cljs.core.Keyword(null,"eof","eof",-489063237)));
/**
 * Skips whitespaces before parsing p.
 */
blancas.kern.core.skip_ws = (function blancas$kern$core$skip_ws(p){
return blancas.kern.core._GT__GT_.call(null,blancas.kern.core.many.call(null,blancas.kern.core.white_space),p);
});
/**
 * Parses an unquoted text field terminated by any character in cs.
 */
blancas.kern.core.field_STAR_ = (function blancas$kern$core$field_STAR_(cs){
return blancas.kern.core._LT__PLUS__GT_.call(null,blancas.kern.core.many.call(null,blancas.kern.core.none_of_STAR_.call(null,cs)));
});
/**
 * Splits a string on one of the given characters and whitespace.
 * Removes empty strings from the result.
 */
blancas.kern.core.split_on = (function blancas$kern$core$split_on(cs){
return blancas.kern.core._LT_$_GT_.call(null,cljs.core.partial.call(null,cljs.core.reduce,blancas.kern.core.conjp.call(null,cljs.core.empty_QMARK_),cljs.core.PersistentVector.EMPTY),blancas.kern.core.sep_by.call(null,blancas.kern.core.skip.call(null,blancas.kern.core.one_of_STAR_.call(null,cs),blancas.kern.core.many.call(null,blancas.kern.core.white_space)),blancas.kern.core.field_STAR_.call(null,cs)));
});
/**
 * Splits a string on whitespace.
 */
blancas.kern.core.split = blancas.kern.core.split_on.call(null," \t\f\r\n");
/**
 * Succeeds with a punctuation mark.
 */
blancas.kern.core.mark = blancas.kern.core.one_of_STAR_.call(null,"~!@#$%^&*()_-=+[]{}\\|;:<>,./?");
/**
 * Removes leading zeroes from a string.
 */
blancas.kern.core.rmvz = (function blancas$kern$core$rmvz(cs){
var s = clojure.string.join.call(null,cljs.core.drop_while.call(null,(function (p1__30630_SHARP_){
return cljs.core._EQ_.call(null,p1__30630_SHARP_,"0");
}),cs));
if(cljs.core.empty_QMARK_.call(null,s)){
return "0";
} else {
return s;
}
});
/**
 * Parses a decimal integer delimited by any character that
 * is not a decimal digit.
 */
blancas.kern.core.dec_num = blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._LT__PLUS__GT_.call(null,blancas.kern.core.many1.call(null,blancas.kern.core.digit)),(function (x){
return blancas.kern.core.return$.call(null,eval(blancas.kern.core.rmvz.call(null,x)));
})),blancas.kern.i18n.di18n.call(null,new cljs.core.Keyword(null,"dec-lit","dec-lit",-1364231639)));
/**
 * Parses an octal integer delimited by any character that
 * is not an octal digit.
 */
blancas.kern.core.oct_num = blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._LT__PLUS__GT_.call(null,blancas.kern.core.many1.call(null,blancas.kern.core.oct_digit)),(function (x){
return blancas.kern.core.return$.call(null,eval(["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')));
})),blancas.kern.i18n.di18n.call(null,new cljs.core.Keyword(null,"oct-lit","oct-lit",-1521077730)));
/**
 * Parses a hex integer delimited by any character that
 * is not a hex digit.
 */
blancas.kern.core.hex_num = blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._LT__PLUS__GT_.call(null,blancas.kern.core.many1.call(null,blancas.kern.core.hex_digit)),(function (x){
return blancas.kern.core.return$.call(null,eval(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')));
})),blancas.kern.i18n.di18n.call(null,new cljs.core.Keyword(null,"hex-lit","hex-lit",-448097198)));
/**
 * Parses a simple fractional number without an exponent.
 * It is delimited by any character that is not a decimal
 * digit. It cannot start with a period; the first period
 * found must be followed by at least one digit.
 */
blancas.kern.core.float_num = blancas.kern.core._LT__QMARK__GT_.call(null,blancas.kern.core._GT__GT__EQ_.call(null,blancas.kern.core._LT__PLUS__GT_.call(null,blancas.kern.core.many1.call(null,blancas.kern.core.digit),blancas.kern.core.option.call(null,".0",blancas.kern.core._LT__STAR__GT_.call(null,blancas.kern.core.sym_STAR_.call(null,"."),blancas.kern.core.many1.call(null,blancas.kern.core.digit)))),(function (x){
return blancas.kern.core.return$.call(null,eval(x));
})),blancas.kern.i18n.di18n.call(null,new cljs.core.Keyword(null,"float-lit","float-lit",1663609324)));
/**
 * Get the user state from the parser state record.
 */
blancas.kern.core.get_state = (function blancas$kern$core$get_state(s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"ok","ok",967785236),true,new cljs.core.Keyword(null,"empty","empty",767870958),true,new cljs.core.Keyword(null,"error","error",-978969032),null);
});
/**
 * Put u as the new value for user state in the parser state record.
 */
blancas.kern.core.put_state = (function blancas$kern$core$put_state(u){
return (function (s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"ok","ok",967785236),true,new cljs.core.Keyword(null,"empty","empty",767870958),true,new cljs.core.Keyword(null,"user","user",1532431356),u,new cljs.core.Keyword(null,"error","error",-978969032),null);
});
});
/**
 * Modify the user state with the result of f, which takes the old
 * user state plus any additional arguments.
 */
blancas.kern.core.modify_state = (function blancas$kern$core$modify_state(var_args){
var args__28371__auto__ = [];
var len__28364__auto___30633 = arguments.length;
var i__28365__auto___30634 = (0);
while(true){
if((i__28365__auto___30634 < len__28364__auto___30633)){
args__28371__auto__.push((arguments[i__28365__auto___30634]));

var G__30635 = (i__28365__auto___30634 + (1));
i__28365__auto___30634 = G__30635;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return blancas.kern.core.modify_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

blancas.kern.core.modify_state.cljs$core$IFn$_invoke$arity$variadic = (function (f,more){
return (function (s){
var u = cljs.core.apply.call(null,f,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(s),more);
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"ok","ok",967785236),true,new cljs.core.Keyword(null,"empty","empty",767870958),true,new cljs.core.Keyword(null,"user","user",1532431356),u,new cljs.core.Keyword(null,"error","error",-978969032),null);
});
});

blancas.kern.core.modify_state.cljs$lang$maxFixedArity = (1);

blancas.kern.core.modify_state.cljs$lang$applyTo = (function (seq30631){
var G__30632 = cljs.core.first.call(null,seq30631);
var seq30631__$1 = cljs.core.next.call(null,seq30631);
return blancas.kern.core.modify_state.cljs$core$IFn$_invoke$arity$variadic(G__30632,seq30631__$1);
});

/**
 * Gets the input stream from a parser state.
 */
blancas.kern.core.get_input = (function blancas$kern$core$get_input(s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"ok","ok",967785236),true,new cljs.core.Keyword(null,"empty","empty",767870958),true,new cljs.core.Keyword(null,"error","error",-978969032),null);
});
/**
 * Sets the input stream in a parser state.
 */
blancas.kern.core.set_input = (function blancas$kern$core$set_input(in$){
return (function (s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.seq.call(null,in$),new cljs.core.Keyword(null,"ok","ok",967785236),true,new cljs.core.Keyword(null,"empty","empty",767870958),true,new cljs.core.Keyword(null,"error","error",-978969032),null);
});
});
/**
 * Gets the position in the input stream of a parser state.
 */
blancas.kern.core.get_position = (function blancas$kern$core$get_position(s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"ok","ok",967785236),true,new cljs.core.Keyword(null,"empty","empty",767870958),true,new cljs.core.Keyword(null,"error","error",-978969032),null);
});
/**
 * Sets the position in the input stream of a parser state.
 */
blancas.kern.core.set_position = (function blancas$kern$core$set_position(pos){
return (function (s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"ok","ok",967785236),true,new cljs.core.Keyword(null,"empty","empty",767870958),true,new cljs.core.Keyword(null,"error","error",-978969032),null);
});
});
/**
 * Parses a character sequence; takes an optional label and a user
 * state initial value, which default to nil. Returns a PState record.
 * 
 * cs    A seqable object; parse calls (seq) on this value.
 * src   Identifies the source of the text, e.g. a filename.
 * us    Initializes a field that is maintained by client code.
 */
blancas.kern.core.parse = (function blancas$kern$core$parse(var_args){
var G__30637 = arguments.length;
switch (G__30637) {
case 2:
return blancas.kern.core.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return blancas.kern.core.parse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return blancas.kern.core.parse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

blancas.kern.core.parse.cljs$core$IFn$_invoke$arity$2 = (function (p,cs){
return blancas.kern.core.parse.call(null,p,cs,null,null);
});

blancas.kern.core.parse.cljs$core$IFn$_invoke$arity$3 = (function (p,cs,src){
return blancas.kern.core.parse.call(null,p,cs,src,null);
});

blancas.kern.core.parse.cljs$core$IFn$_invoke$arity$4 = (function (p,cs,src,us){
return p.call(null,blancas.kern.core.__GT_PState.call(null,cljs.core.seq.call(null,cs),blancas.kern.core.make_pos.call(null,src),null,true,true,us,null));
});

blancas.kern.core.parse.cljs$lang$maxFixedArity = 4;

/**
 * Calls (parse) on the arguments and returns the actual parsed
 * value, not the PState record.
 */
blancas.kern.core.value = (function blancas$kern$core$value(var_args){
var G__30640 = arguments.length;
switch (G__30640) {
case 2:
return blancas.kern.core.value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return blancas.kern.core.value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return blancas.kern.core.value.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

blancas.kern.core.value.cljs$core$IFn$_invoke$arity$2 = (function (p,cs){
return blancas.kern.core.value.call(null,p,cs,null,null);
});

blancas.kern.core.value.cljs$core$IFn$_invoke$arity$3 = (function (p,cs,src){
return blancas.kern.core.value.call(null,p,cs,src,null);
});

blancas.kern.core.value.cljs$core$IFn$_invoke$arity$4 = (function (p,cs,src,us){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(blancas.kern.core.parse.call(null,p,cs,src,us));
});

blancas.kern.core.value.cljs$lang$maxFixedArity = 4;

/**
 * Prints error messages in a PState record.
 */
blancas.kern.core.print_error = (function blancas$kern$core$print_error(s){
var err = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(s);
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(err);
var src = (function (){var l = new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(pos);
if(cljs.core.empty_QMARK_.call(null,l)){
return "";
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(l)," "].join('');
}
})();
var ln = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(pos);
var col = new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(pos);
cljs.core.print.call(null,blancas.kern.i18n.fmt.call(null,new cljs.core.Keyword(null,"err-pos","err-pos",-42056483),src,ln,col));

return cljs.core.println.call(null,blancas.kern.core.get_msg_str.call(null,err));
});
/**
 * For testing parsers, e.g. at the REPL. Calls (parse) on the
 * arguments and prints the result. If p succeeds it prints the
 * parsed value; if it fails it prints any error messages.
 */
blancas.kern.core.run = (function blancas$kern$core$run(var_args){
var G__30643 = arguments.length;
switch (G__30643) {
case 2:
return blancas.kern.core.run.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return blancas.kern.core.run.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return blancas.kern.core.run.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

blancas.kern.core.run.cljs$core$IFn$_invoke$arity$2 = (function (p,cs){
return blancas.kern.core.run.call(null,p,cs,null,null);
});

blancas.kern.core.run.cljs$core$IFn$_invoke$arity$3 = (function (p,cs,src){
return blancas.kern.core.run.call(null,p,cs,src,null);
});

blancas.kern.core.run.cljs$core$IFn$_invoke$arity$4 = (function (p,cs,src,us){
var s = blancas.kern.core.parse.call(null,p,cs,src,us);
if(cljs.core.truth_(new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(s))){
cljs.pprint.pprint.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(s));
} else {
blancas.kern.core.print_error.call(null,s);
}

var temp__4655__auto__ = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(temp__4655__auto__)){
var us__$1 = temp__4655__auto__;
return cljs.pprint.pprint.call(null,us__$1);
} else {
return null;
}
});

blancas.kern.core.run.cljs$lang$maxFixedArity = 4;

/**
 * For testing parsers, e.g. at the REPL. Works like (run) but
 * on success it pretty-prints the resulting parser state.
 */
blancas.kern.core.run_STAR_ = (function blancas$kern$core$run_STAR_(var_args){
var G__30646 = arguments.length;
switch (G__30646) {
case 2:
return blancas.kern.core.run_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return blancas.kern.core.run_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return blancas.kern.core.run_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

blancas.kern.core.run_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,cs){
return blancas.kern.core.run_STAR_.call(null,p,cs,null,null);
});

blancas.kern.core.run_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (p,cs,src){
return blancas.kern.core.run_STAR_.call(null,p,cs,src,null);
});

blancas.kern.core.run_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (p,cs,src,us){
return cljs.pprint.pprint.call(null,blancas.kern.core.parse.call(null,p,cs,src,us));
});

blancas.kern.core.run_STAR_.cljs$lang$maxFixedArity = 4;

blancas.kern.core.char_pos_x = (function blancas$kern$core$char_pos_x(x,_){
return x;
});
blancas.kern.core.str_pos_x = (function blancas$kern$core$str_pos_x(x,_){
return x;
});
blancas.kern.core.merge_err_x = (function blancas$kern$core$merge_err_x(_,___$1){
return null;
});
blancas.kern.core.set_ex_x = (function blancas$kern$core$set_ex_x(_,x){
return x;
});
/**
 * Works like (parse) but with error diagnostics disabled for
 * better performance. It's intended for data that can be
 * assumed to be correct or its diagnosis postponed.
 */
blancas.kern.core.parse_data = (function blancas$kern$core$parse_data(var_args){
var G__30649 = arguments.length;
switch (G__30649) {
case 2:
return blancas.kern.core.parse_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return blancas.kern.core.parse_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return blancas.kern.core.parse_data.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

blancas.kern.core.parse_data.cljs$core$IFn$_invoke$arity$2 = (function (p,cs){
return blancas.kern.core.parse_data.call(null,p,cs,null,null);
});

blancas.kern.core.parse_data.cljs$core$IFn$_invoke$arity$3 = (function (p,cs,src){
return blancas.kern.core.parse_data.call(null,p,cs,src,null);
});

blancas.kern.core.parse_data.cljs$core$IFn$_invoke$arity$4 = (function (p,cs,src,us){
var char_pos30650 = blancas.kern.core.char_pos;
var str_pos30651 = blancas.kern.core.str_pos;
var merge_err30652 = blancas.kern.core.merge_err;
var set_ex30653 = blancas.kern.core.set_ex;
blancas.kern.core.char_pos = blancas.kern.core.char_pos_x;

blancas.kern.core.str_pos = blancas.kern.core.str_pos_x;

blancas.kern.core.merge_err = blancas.kern.core.merge_err_x;

blancas.kern.core.set_ex = blancas.kern.core.set_ex_x;

try{return blancas.kern.core.parse.call(null,p,cs,src,us);
}finally {blancas.kern.core.set_ex = set_ex30653;

blancas.kern.core.merge_err = merge_err30652;

blancas.kern.core.str_pos = str_pos30651;

blancas.kern.core.char_pos = char_pos30650;
}});

blancas.kern.core.parse_data.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=core.js.map
