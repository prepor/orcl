// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_com.util');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('reagent.ratom');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28003__auto__ = (function re_com$util$fmap_$_iter__36516(s__36517){
return (new cljs.core.LazySeq(null,(function (){
var s__36517__$1 = s__36517;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36517__$1);
if(temp__4657__auto__){
var s__36517__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36517__$2)){
var c__28001__auto__ = cljs.core.chunk_first.call(null,s__36517__$2);
var size__28002__auto__ = cljs.core.count.call(null,c__28001__auto__);
var b__36519 = cljs.core.chunk_buffer.call(null,size__28002__auto__);
if((function (){var i__36518 = (0);
while(true){
if((i__36518 < size__28002__auto__)){
var vec__36520 = cljs.core._nth.call(null,c__28001__auto__,i__36518);
var k = cljs.core.nth.call(null,vec__36520,(0),null);
var val = cljs.core.nth.call(null,vec__36520,(1),null);
cljs.core.chunk_append.call(null,b__36519,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__36526 = (i__36518 + (1));
i__36518 = G__36526;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36519),re_com$util$fmap_$_iter__36516.call(null,cljs.core.chunk_rest.call(null,s__36517__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36519),null);
}
} else {
var vec__36523 = cljs.core.first.call(null,s__36517__$2);
var k = cljs.core.nth.call(null,vec__36523,(0),null);
var val = cljs.core.nth.call(null,vec__36523,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_com$util$fmap_$_iter__36516.call(null,cljs.core.rest.call(null,s__36517__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28003__auto__.call(null,m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__28371__auto__ = [];
var len__28364__auto___36528 = arguments.length;
var i__28365__auto___36529 = (0);
while(true){
if((i__28365__auto___36529 < len__28364__auto___36528)){
args__28371__auto__.push((arguments[i__28365__auto___36529]));

var G__36530 = (i__28365__auto___36529 + (1));
i__28365__auto___36529 = G__36530;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,vals)){
return cljs.core.apply.call(null,cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last.call(null,vals);
}
});

re_com.util.deep_merge.cljs$lang$maxFixedArity = (0);

re_com.util.deep_merge.cljs$lang$applyTo = (function (seq36527){
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36527));
});

/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it by derefing
 *   
 */
re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$)))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it, but WITHOUT derefing
 * 
 *   The arg validation code uses this, since calling deref-or-value adds this arg to the watched ratom list for the component
 *   in question, which in turn can cause different rendering behaviour between dev (where we validate) and prod (where we don't).
 * 
 *   This was experienced in popover-content-wrapper with the position-injected atom which was not derefed there, however
 *   the dev-only validation caused it to be derefed, modifying its render behaviour and causing mayhem and madness for the developer.
 * 
 *   See below that different Reagent types have different ways of retrieving the value without causing capture, although in the case of
 *   Track, we just deref it as there is no peek or state, so hopefully this won't cause issues (surely this is used very rarely).
 *   
 */
re_com.util.deref_or_value_peek = (function re_com$util$deref_or_value_peek(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$)))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
if((val_or_atom instanceof reagent.ratom.RAtom)){
return val_or_atom.state;
} else {
if((val_or_atom instanceof reagent.ratom.Reaction)){
return val_or_atom._peek_at();
} else {
if((val_or_atom instanceof reagent.ratom.RCursor)){
return val_or_atom._peek();
} else {
if((val_or_atom instanceof reagent.ratom.Track)){
return cljs.core.deref.call(null,val_or_atom);
} else {
if((val_or_atom instanceof reagent.ratom.Wrapper)){
return val_or_atom.state;
} else {
throw (new Error("Unknown reactive data type"));

}
}
}
}
}
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function re_com$util$get_element_by_id(id){
return document.getElementById(id);
});
/**
 * Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
 */
re_com.util.pad_zero = (function re_com$util$pad_zero(s,len){
if((cljs.core.count.call(null,s) < len)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,len,cljs.core.concat.call(null,cljs.core.repeat.call(null,len,"0"),s)));
} else {
return s;
}
});
/**
 * return 'num' as a string of 'len' characters, left padding with '0' as necessary
 */
re_com.util.pad_zero_number = (function re_com$util$pad_zero_number(num,len){
return re_com.util.pad_zero.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join(''),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(var_args){
var args__28371__auto__ = [];
var len__28364__auto___36535 = arguments.length;
var i__28365__auto___36536 = (0);
while(true){
if((i__28365__auto___36536 < len__28364__auto___36535)){
args__28371__auto__.push((arguments[i__28365__auto___36536]));

var G__36537 = (i__28365__auto___36536 + (1));
i__28365__auto___36536 = G__36537;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(negative)?(- val):val)),"px"].join('');
});

re_com.util.px.cljs$lang$maxFixedArity = (1);

re_com.util.px.cljs$lang$applyTo = (function (seq36533){
var G__36534 = cljs.core.first.call(null,seq36533);
var seq36533__$1 = cljs.core.next.call(null,seq36533);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(G__36534,seq36533__$1);
});

/**
 * Removes the item at position n from a vector v, returning a shrunk vector
 */
re_com.util.remove_nth = (function re_com$util$remove_nth(v,n){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,v,(0),n),cljs.core.subvec.call(null,v,(n + (1)),cljs.core.count.call(null,v))));
});
re_com.util.insert_nth = (function re_com$util$insert_nth(vect,index,item){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.subvec.call(null,vect,(0),index),item,cljs.core.subvec.call(null,vect,index));
});
/**
 * Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.position_for_id = (function re_com$util$position_for_id(var_args){
var args__28371__auto__ = [];
var len__28364__auto___36544 = arguments.length;
var i__28365__auto___36545 = (0);
while(true){
if((i__28365__auto___36545 < len__28364__auto___36544)){
args__28371__auto__.push((arguments[i__28365__auto___36545]));

var G__36546 = (i__28365__auto___36545 + (1));
i__28365__auto___36545 = G__36546;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__36541){
var map__36542 = p__36541;
var map__36542__$1 = ((((!((map__36542 == null)))?((((map__36542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36542):map__36542);
var id_fn = cljs.core.get.call(null,map__36542__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = ((function (map__36542,map__36542__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});})(map__36542,map__36542__$1,id_fn))
;
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.position_for_id.cljs$lang$applyTo = (function (seq36538){
var G__36539 = cljs.core.first.call(null,seq36538);
var seq36538__$1 = cljs.core.next.call(null,seq36538);
var G__36540 = cljs.core.first.call(null,seq36538__$1);
var seq36538__$2 = cljs.core.next.call(null,seq36538__$1);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(G__36539,G__36540,seq36538__$2);
});

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__28371__auto__ = [];
var len__28364__auto___36554 = arguments.length;
var i__28365__auto___36555 = (0);
while(true){
if((i__28365__auto___36555 < len__28364__auto___36554)){
args__28371__auto__.push((arguments[i__28365__auto___36555]));

var G__36556 = (i__28365__auto___36555 + (1));
i__28365__auto___36555 = G__36556;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__36551){
var map__36552 = p__36551;
var map__36552__$1 = ((((!((map__36552 == null)))?((((map__36552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36552):map__36552);
var id_fn = cljs.core.get.call(null,map__36552__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__36552,map__36552__$1,id_fn){
return (function (p1__36547_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__36547_SHARP_),id);
});})(map__36552,map__36552__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.item_for_id.cljs$lang$applyTo = (function (seq36548){
var G__36549 = cljs.core.first.call(null,seq36548);
var seq36548__$1 = cljs.core.next.call(null,seq36548);
var G__36550 = cljs.core.first.call(null,seq36548__$1);
var seq36548__$2 = cljs.core.next.call(null,seq36548__$1);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(G__36549,G__36550,seq36548__$2);
});

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__28371__auto__ = [];
var len__28364__auto___36564 = arguments.length;
var i__28365__auto___36565 = (0);
while(true){
if((i__28365__auto___36565 < len__28364__auto___36564)){
args__28371__auto__.push((arguments[i__28365__auto___36565]));

var G__36566 = (i__28365__auto___36565 + (1));
i__28365__auto___36565 = G__36566;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((2) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28372__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__36561){
var map__36562 = p__36561;
var map__36562__$1 = ((((!((map__36562 == null)))?((((map__36562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36562.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36562):map__36562);
var id_fn = cljs.core.get.call(null,map__36562__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,((function (map__36562,map__36562__$1,id_fn){
return (function (p1__36557_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__36557_SHARP_),id);
});})(map__36562,map__36562__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq36558){
var G__36559 = cljs.core.first.call(null,seq36558);
var seq36558__$1 = cljs.core.next.call(null,seq36558);
var G__36560 = cljs.core.first.call(null,seq36558__$1);
var seq36558__$2 = cljs.core.next.call(null,seq36558__$1);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic(G__36559,G__36560,seq36558__$2);
});

/**
 * (for [[index item first? last?] (enumerate coll)] ...)  
 */
re_com.util.enumerate = (function re_com$util$enumerate(coll){
var c = (cljs.core.count.call(null,coll) - (1));
var f = ((function (c){
return (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.call(null,(0),index),cljs.core._EQ_.call(null,c,index)], null);
});})(c))
;
return cljs.core.map_indexed.call(null,f,coll);
});
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_com.util.sum_scroll_offsets = (function re_com$util$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.call(null,current_node.tagName,"BODY")){
var G__36567 = current_node.parentNode;
var G__36568 = (sum_scroll_left + current_node.scrollLeft);
var G__36569 = (sum_scroll_top + current_node.scrollTop);
current_node = G__36567;
sum_scroll_left = G__36568;
sum_scroll_top = G__36569;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});
/**
 * Answer a goog.date.UtcDateTime based on local date/time.
 */
re_com.util.now__GT_utc = (function re_com$util$now__GT_utc(){
var local_date = (new goog.date.DateTime());
return (new goog.date.UtcDateTime(local_date.getYear(),local_date.getMonth(),local_date.getDate(),(0),(0),(0),(0)));
});

//# sourceMappingURL=util.js.map
