// Compiled by ClojureScript 1.9.908 {}
goog.provide('orcl.utils.cursor');
goog.require('cljs.core');
goog.require('cljs.core');

/**
 * @interface
 */
orcl.utils.cursor.ICursor = function(){};


/**
 * @interface
 */
orcl.utils.cursor.ITransact = function(){};

orcl.utils.cursor._transact_BANG_ = (function orcl$utils$cursor$_transact_BANG_(cursor,f){
if((!((cursor == null))) && (!((cursor.orcl$utils$cursor$ITransact$_transact_BANG_$arity$2 == null)))){
return cursor.orcl$utils$cursor$ITransact$_transact_BANG_$arity$2(cursor,f);
} else {
var x__27878__auto__ = (((cursor == null))?null:cursor);
var m__27879__auto__ = (orcl.utils.cursor._transact_BANG_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,cursor,f);
} else {
var m__27879__auto____$1 = (orcl.utils.cursor._transact_BANG_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,cursor,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
}
});



/**
* @constructor
 * @implements {orcl.utils.cursor.ITransact}
 * @implements {orcl.utils.cursor.ICursor}
 * @implements {cljs.core.IDeref}
*/
orcl.utils.cursor.ValCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
orcl.utils.cursor.ValCursor.prototype.orcl$utils$cursor$ICursor$ = cljs.core.PROTOCOL_SENTINEL;

orcl.utils.cursor.ValCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,self__.value);
});

orcl.utils.cursor.ValCursor.prototype.orcl$utils$cursor$ITransact$ = cljs.core.PROTOCOL_SENTINEL;

orcl.utils.cursor.ValCursor.prototype.orcl$utils$cursor$ITransact$_transact_BANG_$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.swap_BANG_.call(null,self__.state,((cljs.core.empty_QMARK_.call(null,self__.path))?f:((function (___$1){
return (function (p1__42341_SHARP_){
return cljs.core.update_in.call(null,p1__42341_SHARP_,self__.path,f);
});})(___$1))
)),self__.path);
});

orcl.utils.cursor.ValCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

orcl.utils.cursor.ValCursor.cljs$lang$type = true;

orcl.utils.cursor.ValCursor.cljs$lang$ctorStr = "orcl.utils.cursor/ValCursor";

orcl.utils.cursor.ValCursor.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"orcl.utils.cursor/ValCursor");
});

orcl.utils.cursor.__GT_ValCursor = (function orcl$utils$cursor$__GT_ValCursor(value,state,path){
return (new orcl.utils.cursor.ValCursor(value,state,path));
});


/**
* @constructor
 * @implements {orcl.utils.cursor.ITransact}
 * @implements {cljs.core.IFn}
 * @implements {orcl.utils.cursor.ICursor}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
orcl.utils.cursor.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 8421635;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
orcl.utils.cursor.MapCursor.prototype.orcl$utils$cursor$ICursor$ = cljs.core.PROTOCOL_SENTINEL;

orcl.utils.cursor.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,self__.value));
});

orcl.utils.cursor.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,self__.value);
});

orcl.utils.cursor.MapCursor.prototype.call = (function() {
var G__42354 = null;
var G__42354__2 = (function (self__,key){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.get.call(null,this$,key);
});
var G__42354__3 = (function (self__,key,defval){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.get.call(null,this$,key,defval);
});
G__42354 = function(self__,key,defval){
switch(arguments.length){
case 2:
return G__42354__2.call(this,self__,key);
case 3:
return G__42354__3.call(this,self__,key,defval);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__42354.cljs$core$IFn$_invoke$arity$2 = G__42354__2;
G__42354.cljs$core$IFn$_invoke$arity$3 = G__42354__3;
return G__42354;
})()
;

orcl.utils.cursor.MapCursor.prototype.apply = (function (self__,args42343){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args42343)));
});

orcl.utils.cursor.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (key){
var self__ = this;
var this$ = this;
return cljs.core.get.call(null,this$,key);
});

orcl.utils.cursor.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (key,defval){
var self__ = this;
var this$ = this;
return cljs.core.get.call(null,this$,key,defval);
});

orcl.utils.cursor.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (obj,key){
var self__ = this;
var obj__$1 = this;
return cljs.core._lookup.call(null,obj__$1,key,null);
});

orcl.utils.cursor.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,key,defv){
var self__ = this;
var ___$1 = this;
var value__$1 = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,self__.value);
return orcl.utils.cursor.to_cursor.call(null,cljs.core.get.call(null,value__$1,key,defv),self__.state,cljs.core.conj.call(null,self__.path,key),defv);
});

orcl.utils.cursor.MapCursor.prototype.orcl$utils$cursor$ITransact$ = cljs.core.PROTOCOL_SENTINEL;

orcl.utils.cursor.MapCursor.prototype.orcl$utils$cursor$ITransact$_transact_BANG_$arity$2 = (function (cursor,f){
var self__ = this;
var cursor__$1 = this;
return cljs.core.get_in.call(null,cljs.core.swap_BANG_.call(null,self__.state,((cljs.core.empty_QMARK_.call(null,self__.path))?f:((function (cursor__$1){
return (function (p1__42342_SHARP_){
return cljs.core.update_in.call(null,p1__42342_SHARP_,self__.path,f);
});})(cursor__$1))
)),self__.path);
});

orcl.utils.cursor.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var iter__28003__auto__ = ((function (this$__$1){
return (function orcl$utils$cursor$iter__42344(s__42345){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__42345__$1 = s__42345;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42345__$1);
if(temp__4657__auto__){
var s__42345__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42345__$2)){
var c__28001__auto__ = cljs.core.chunk_first.call(null,s__42345__$2);
var size__28002__auto__ = cljs.core.count.call(null,c__28001__auto__);
var b__42347 = cljs.core.chunk_buffer.call(null,size__28002__auto__);
if((function (){var i__42346 = (0);
while(true){
if((i__42346 < size__28002__auto__)){
var vec__42348 = cljs.core._nth.call(null,c__28001__auto__,i__42346);
var k = cljs.core.nth.call(null,vec__42348,(0),null);
var v = cljs.core.nth.call(null,vec__42348,(1),null);
cljs.core.chunk_append.call(null,b__42347,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,orcl.utils.cursor.to_cursor.call(null,v,self__.state,cljs.core.conj.call(null,self__.path,k),null)], null));

var G__42355 = (i__42346 + (1));
i__42346 = G__42355;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42347),orcl$utils$cursor$iter__42344.call(null,cljs.core.chunk_rest.call(null,s__42345__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42347),null);
}
} else {
var vec__42351 = cljs.core.first.call(null,s__42345__$2);
var k = cljs.core.nth.call(null,vec__42351,(0),null);
var v = cljs.core.nth.call(null,vec__42351,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,orcl.utils.cursor.to_cursor.call(null,v,self__.state,cljs.core.conj.call(null,self__.path,k),null)], null),orcl$utils$cursor$iter__42344.call(null,cljs.core.rest.call(null,s__42345__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__28003__auto__.call(null,cljs.core.deref.call(null,this$__$1));
});

orcl.utils.cursor.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

orcl.utils.cursor.MapCursor.cljs$lang$type = true;

orcl.utils.cursor.MapCursor.cljs$lang$ctorStr = "orcl.utils.cursor/MapCursor";

orcl.utils.cursor.MapCursor.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"orcl.utils.cursor/MapCursor");
});

orcl.utils.cursor.__GT_MapCursor = (function orcl$utils$cursor$__GT_MapCursor(value,state,path){
return (new orcl.utils.cursor.MapCursor(value,state,path));
});


/**
* @constructor
 * @implements {orcl.utils.cursor.ITransact}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IFn}
 * @implements {orcl.utils.cursor.ICursor}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
orcl.utils.cursor.VecCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 8421651;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
orcl.utils.cursor.VecCursor.prototype.orcl$utils$cursor$ICursor$ = cljs.core.PROTOCOL_SENTINEL;

orcl.utils.cursor.VecCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path));
});

orcl.utils.cursor.VecCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path);
});

orcl.utils.cursor.VecCursor.prototype.call = (function (self__,i){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.nth.call(null,this$,i);
});

orcl.utils.cursor.VecCursor.prototype.apply = (function (self__,args42357){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args42357)));
});

orcl.utils.cursor.VecCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (i){
var self__ = this;
var this$ = this;
return cljs.core.nth.call(null,this$,i);
});

orcl.utils.cursor.VecCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
return cljs.core.nth.call(null,this$__$1,i);
});

orcl.utils.cursor.VecCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core.nth.call(null,this$__$1,i,not_found);
});

orcl.utils.cursor.VecCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,i){
var self__ = this;
var ___$1 = this;
var value__$1 = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,self__.value);
return orcl.utils.cursor.to_cursor.call(null,cljs.core.nth.call(null,value__$1,i),self__.state,cljs.core.conj.call(null,self__.path,i),null);
});

orcl.utils.cursor.VecCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,i,not_found){
var self__ = this;
var ___$1 = this;
var value__$1 = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,self__.value);
return orcl.utils.cursor.to_cursor.call(null,cljs.core.nth.call(null,value__$1,i,not_found),self__.state,cljs.core.conj.call(null,self__.path,i),not_found);
});

orcl.utils.cursor.VecCursor.prototype.orcl$utils$cursor$ITransact$ = cljs.core.PROTOCOL_SENTINEL;

orcl.utils.cursor.VecCursor.prototype.orcl$utils$cursor$ITransact$_transact_BANG_$arity$2 = (function (cursor,f){
var self__ = this;
var cursor__$1 = this;
return cljs.core.get_in.call(null,cljs.core.swap_BANG_.call(null,self__.state,((cljs.core.empty_QMARK_.call(null,self__.path))?f:((function (cursor__$1){
return (function (p1__42356_SHARP_){
return cljs.core.update_in.call(null,p1__42356_SHARP_,self__.path,f);
});})(cursor__$1))
)),self__.path);
});

orcl.utils.cursor.VecCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var iter__28003__auto__ = ((function (this$__$1){
return (function orcl$utils$cursor$iter__42358(s__42359){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__42359__$1 = s__42359;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42359__$1);
if(temp__4657__auto__){
var s__42359__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42359__$2)){
var c__28001__auto__ = cljs.core.chunk_first.call(null,s__42359__$2);
var size__28002__auto__ = cljs.core.count.call(null,c__28001__auto__);
var b__42361 = cljs.core.chunk_buffer.call(null,size__28002__auto__);
if((function (){var i__42360 = (0);
while(true){
if((i__42360 < size__28002__auto__)){
var vec__42362 = cljs.core._nth.call(null,c__28001__auto__,i__42360);
var v = cljs.core.nth.call(null,vec__42362,(0),null);
var i = cljs.core.nth.call(null,vec__42362,(1),null);
cljs.core.chunk_append.call(null,b__42361,orcl.utils.cursor.to_cursor.call(null,v,self__.state,cljs.core.conj.call(null,self__.path,i),null));

var G__42368 = (i__42360 + (1));
i__42360 = G__42368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42361),orcl$utils$cursor$iter__42358.call(null,cljs.core.chunk_rest.call(null,s__42359__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42361),null);
}
} else {
var vec__42365 = cljs.core.first.call(null,s__42359__$2);
var v = cljs.core.nth.call(null,vec__42365,(0),null);
var i = cljs.core.nth.call(null,vec__42365,(1),null);
return cljs.core.cons.call(null,orcl.utils.cursor.to_cursor.call(null,v,self__.state,cljs.core.conj.call(null,self__.path,i),null),orcl$utils$cursor$iter__42358.call(null,cljs.core.rest.call(null,s__42359__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__28003__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.deref.call(null,this$__$1),cljs.core.range.call(null)));
});

orcl.utils.cursor.VecCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

orcl.utils.cursor.VecCursor.cljs$lang$type = true;

orcl.utils.cursor.VecCursor.cljs$lang$ctorStr = "orcl.utils.cursor/VecCursor";

orcl.utils.cursor.VecCursor.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"orcl.utils.cursor/VecCursor");
});

orcl.utils.cursor.__GT_VecCursor = (function orcl$utils$cursor$__GT_VecCursor(value,state,path){
return (new orcl.utils.cursor.VecCursor(value,state,path));
});

orcl.utils.cursor.to_cursor = (function orcl$utils$cursor$to_cursor(v,state,path,value){
if(cljs.core.truth_(orcl.utils.cursor.cursor_QMARK_.call(null,v))){
return v;
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return (new orcl.utils.cursor.MapCursor(value,state,path));
} else {
if(cljs.core.vector_QMARK_.call(null,v)){
return (new orcl.utils.cursor.VecCursor(value,state,path));
} else {
return (new orcl.utils.cursor.ValCursor(value,state,path));

}
}
}
});
orcl.utils.cursor.cursor_QMARK_ = (function orcl$utils$cursor$cursor_QMARK_(c){

if(!((c == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === c.orcl$utils$cursor$ICursor$))){
return true;
} else {
if((!c.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,orcl.utils.cursor.ICursor,c);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,orcl.utils.cursor.ICursor,c);
}
});
orcl.utils.cursor.make = (function orcl$utils$cursor$make(v){

return orcl.utils.cursor.to_cursor.call(null,(((v instanceof cljs.core.Atom))?cljs.core.deref.call(null,v):v),(((v instanceof cljs.core.Atom))?v:cljs.core.atom.call(null,v)),cljs.core.PersistentVector.EMPTY,null);
});
orcl.utils.cursor.update_BANG_ = (function orcl$utils$cursor$update_BANG_(cursor,f){

return orcl.utils.cursor._transact_BANG_.call(null,cursor,f);
});
orcl.utils.cursor.reset_BANG_ = (function orcl$utils$cursor$reset_BANG_(cursor,v){

return orcl.utils.cursor._transact_BANG_.call(null,cursor,cljs.core.constantly.call(null,v));
});

//# sourceMappingURL=cursor.js.map
