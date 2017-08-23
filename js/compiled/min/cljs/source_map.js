// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__32588){
var vec__32589 = p__32588;
var i = cljs.core.nth.call(null,vec__32589,(0),null);
var v = cljs.core.nth.call(null,vec__32589,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__32592 = seg;
var gcol = cljs.core.nth.call(null,vec__32592,(0),null);
var source = cljs.core.nth.call(null,vec__32592,(1),null);
var line = cljs.core.nth.call(null,vec__32592,(2),null);
var col = cljs.core.nth.call(null,vec__32592,(3),null);
var name = cljs.core.nth.call(null,vec__32592,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4657__auto__)){
var name__$1 = temp__4657__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__32595 = seg;
var gcol = cljs.core.nth.call(null,vec__32595,(0),null);
var source = cljs.core.nth.call(null,vec__32595,(1),null);
var line = cljs.core.nth.call(null,vec__32595,(2),null);
var col = cljs.core.nth.call(null,vec__32595,(3),null);
var name = cljs.core.nth.call(null,vec__32595,(4),null);
var vec__32598 = relseg;
var rgcol = cljs.core.nth.call(null,vec__32598,(0),null);
var rsource = cljs.core.nth.call(null,vec__32598,(1),null);
var rline = cljs.core.nth.call(null,vec__32598,(2),null);
var rcol = cljs.core.nth.call(null,vec__32598,(3),null);
var rname = cljs.core.nth.call(null,vec__32598,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__27195__auto__ = source;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__27195__auto__ = line;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__27195__auto__ = col;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__27195__auto__ = name;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__32601 = segmap;
var map__32601__$1 = ((((!((map__32601 == null)))?((((map__32601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32601):map__32601);
var gcol = cljs.core.get.call(null,map__32601__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__32601__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__32601__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__32601__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__32601__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__32601,map__32601__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__32601,map__32601__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__32601,map__32601__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__32601,map__32601__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__32601,map__32601__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__32601,map__32601__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__32604 = arguments.length;
switch (G__32604) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__32605 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__32609 = cljs.core.next.call(null,segs__$1);
var G__32610 = nrelseg;
var G__32611 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__32609;
relseg__$1 = G__32610;
result__$1 = G__32611;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__32605,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__32605,(1),null);
var G__32612 = (gline + (1));
var G__32613 = cljs.core.next.call(null,lines__$1);
var G__32614 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__32615 = result__$1;
gline = G__32612;
lines__$1 = G__32613;
relseg = G__32614;
result = G__32615;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__32617 = segmap;
var map__32617__$1 = ((((!((map__32617 == null)))?((((map__32617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32617):map__32617);
var gcol = cljs.core.get.call(null,map__32617__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__32617__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__32617__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__32617__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__32617__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__32617,map__32617__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__32617,map__32617__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__32616_SHARP_){
return cljs.core.conj.call(null,p1__32616_SHARP_,d__$1);
});})(map__32617,map__32617__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__32617,map__32617__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__32620 = arguments.length;
switch (G__32620) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__32621 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__32625 = cljs.core.next.call(null,segs__$1);
var G__32626 = nrelseg;
var G__32627 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__32625;
relseg__$1 = G__32626;
result__$1 = G__32627;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__32621,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__32621,(1),null);
var G__32628 = (gline + (1));
var G__32629 = cljs.core.next.call(null,lines__$1);
var G__32630 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__32631 = result__$1;
gline = G__32628;
lines__$1 = G__32629;
relseg = G__32630;
result = G__32631;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__32632){
var vec__32633 = p__32632;
var _ = cljs.core.nth.call(null,vec__32633,(0),null);
var source = cljs.core.nth.call(null,vec__32633,(1),null);
var line = cljs.core.nth.call(null,vec__32633,(2),null);
var col = cljs.core.nth.call(null,vec__32633,(3),null);
var name = cljs.core.nth.call(null,vec__32633,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__32636){
var vec__32637 = p__32636;
var gcol = cljs.core.nth.call(null,vec__32637,(0),null);
var sidx = cljs.core.nth.call(null,vec__32637,(1),null);
var line = cljs.core.nth.call(null,vec__32637,(2),null);
var col = cljs.core.nth.call(null,vec__32637,(3),null);
var name = cljs.core.nth.call(null,vec__32637,(4),null);
var seg = vec__32637;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__32637,gcol,sidx,line,col,name,seg,relseg){
return (function (p__32640){
var vec__32641 = p__32640;
var _ = cljs.core.nth.call(null,vec__32641,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__32641,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__32641,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__32641,(3),null);
var lname = cljs.core.nth.call(null,vec__32641,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__27195__auto__ = name;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__32637,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__27195__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4655__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
var idx = (function (){var temp__4655__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__32647 = cljs.core.seq.call(null,infos);
var chunk__32648 = null;
var count__32649 = (0);
var i__32650 = (0);
while(true){
if((i__32650 < count__32649)){
var info = cljs.core._nth.call(null,chunk__32648,i__32650);
var segv_32729 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_32730 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_32731 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_32730 > (lc_32731 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__32647,chunk__32648,count__32649,i__32650,segv_32729,gline_32730,lc_32731,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_32730 - (lc_32731 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_32729], null));
});})(seq__32647,chunk__32648,count__32649,i__32650,segv_32729,gline_32730,lc_32731,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__32647,chunk__32648,count__32649,i__32650,segv_32729,gline_32730,lc_32731,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32730], null),cljs.core.conj,segv_32729);
});})(seq__32647,chunk__32648,count__32649,i__32650,segv_32729,gline_32730,lc_32731,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__32732 = seq__32647;
var G__32733 = chunk__32648;
var G__32734 = count__32649;
var G__32735 = (i__32650 + (1));
seq__32647 = G__32732;
chunk__32648 = G__32733;
count__32649 = G__32734;
i__32650 = G__32735;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32647);
if(temp__4657__auto__){
var seq__32647__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32647__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__32647__$1);
var G__32736 = cljs.core.chunk_rest.call(null,seq__32647__$1);
var G__32737 = c__28034__auto__;
var G__32738 = cljs.core.count.call(null,c__28034__auto__);
var G__32739 = (0);
seq__32647 = G__32736;
chunk__32648 = G__32737;
count__32649 = G__32738;
i__32650 = G__32739;
continue;
} else {
var info = cljs.core.first.call(null,seq__32647__$1);
var segv_32740 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_32741 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_32742 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_32741 > (lc_32742 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__32647,chunk__32648,count__32649,i__32650,segv_32740,gline_32741,lc_32742,info,seq__32647__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_32741 - (lc_32742 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_32740], null));
});})(seq__32647,chunk__32648,count__32649,i__32650,segv_32740,gline_32741,lc_32742,info,seq__32647__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__32647,chunk__32648,count__32649,i__32650,segv_32740,gline_32741,lc_32742,info,seq__32647__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32741], null),cljs.core.conj,segv_32740);
});})(seq__32647,chunk__32648,count__32649,i__32650,segv_32740,gline_32741,lc_32742,info,seq__32647__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__32743 = cljs.core.next.call(null,seq__32647__$1);
var G__32744 = null;
var G__32745 = (0);
var G__32746 = (0);
seq__32647 = G__32743;
chunk__32648 = G__32744;
count__32649 = G__32745;
i__32650 = G__32746;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__32651_32747 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__32652_32748 = null;
var count__32653_32749 = (0);
var i__32654_32750 = (0);
while(true){
if((i__32654_32750 < count__32653_32749)){
var vec__32655_32751 = cljs.core._nth.call(null,chunk__32652_32748,i__32654_32750);
var source_idx_32752 = cljs.core.nth.call(null,vec__32655_32751,(0),null);
var vec__32658_32753 = cljs.core.nth.call(null,vec__32655_32751,(1),null);
var __32754 = cljs.core.nth.call(null,vec__32658_32753,(0),null);
var lines_32755__$1 = cljs.core.nth.call(null,vec__32658_32753,(1),null);
var seq__32661_32756 = cljs.core.seq.call(null,lines_32755__$1);
var chunk__32662_32757 = null;
var count__32663_32758 = (0);
var i__32664_32759 = (0);
while(true){
if((i__32664_32759 < count__32663_32758)){
var vec__32665_32760 = cljs.core._nth.call(null,chunk__32662_32757,i__32664_32759);
var line_32761 = cljs.core.nth.call(null,vec__32665_32760,(0),null);
var cols_32762 = cljs.core.nth.call(null,vec__32665_32760,(1),null);
var seq__32668_32763 = cljs.core.seq.call(null,cols_32762);
var chunk__32669_32764 = null;
var count__32670_32765 = (0);
var i__32671_32766 = (0);
while(true){
if((i__32671_32766 < count__32670_32765)){
var vec__32672_32767 = cljs.core._nth.call(null,chunk__32669_32764,i__32671_32766);
var col_32768 = cljs.core.nth.call(null,vec__32672_32767,(0),null);
var infos_32769 = cljs.core.nth.call(null,vec__32672_32767,(1),null);
encode_cols.call(null,infos_32769,source_idx_32752,line_32761,col_32768);

var G__32770 = seq__32668_32763;
var G__32771 = chunk__32669_32764;
var G__32772 = count__32670_32765;
var G__32773 = (i__32671_32766 + (1));
seq__32668_32763 = G__32770;
chunk__32669_32764 = G__32771;
count__32670_32765 = G__32772;
i__32671_32766 = G__32773;
continue;
} else {
var temp__4657__auto___32774 = cljs.core.seq.call(null,seq__32668_32763);
if(temp__4657__auto___32774){
var seq__32668_32775__$1 = temp__4657__auto___32774;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32668_32775__$1)){
var c__28034__auto___32776 = cljs.core.chunk_first.call(null,seq__32668_32775__$1);
var G__32777 = cljs.core.chunk_rest.call(null,seq__32668_32775__$1);
var G__32778 = c__28034__auto___32776;
var G__32779 = cljs.core.count.call(null,c__28034__auto___32776);
var G__32780 = (0);
seq__32668_32763 = G__32777;
chunk__32669_32764 = G__32778;
count__32670_32765 = G__32779;
i__32671_32766 = G__32780;
continue;
} else {
var vec__32675_32781 = cljs.core.first.call(null,seq__32668_32775__$1);
var col_32782 = cljs.core.nth.call(null,vec__32675_32781,(0),null);
var infos_32783 = cljs.core.nth.call(null,vec__32675_32781,(1),null);
encode_cols.call(null,infos_32783,source_idx_32752,line_32761,col_32782);

var G__32784 = cljs.core.next.call(null,seq__32668_32775__$1);
var G__32785 = null;
var G__32786 = (0);
var G__32787 = (0);
seq__32668_32763 = G__32784;
chunk__32669_32764 = G__32785;
count__32670_32765 = G__32786;
i__32671_32766 = G__32787;
continue;
}
} else {
}
}
break;
}

var G__32788 = seq__32661_32756;
var G__32789 = chunk__32662_32757;
var G__32790 = count__32663_32758;
var G__32791 = (i__32664_32759 + (1));
seq__32661_32756 = G__32788;
chunk__32662_32757 = G__32789;
count__32663_32758 = G__32790;
i__32664_32759 = G__32791;
continue;
} else {
var temp__4657__auto___32792 = cljs.core.seq.call(null,seq__32661_32756);
if(temp__4657__auto___32792){
var seq__32661_32793__$1 = temp__4657__auto___32792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32661_32793__$1)){
var c__28034__auto___32794 = cljs.core.chunk_first.call(null,seq__32661_32793__$1);
var G__32795 = cljs.core.chunk_rest.call(null,seq__32661_32793__$1);
var G__32796 = c__28034__auto___32794;
var G__32797 = cljs.core.count.call(null,c__28034__auto___32794);
var G__32798 = (0);
seq__32661_32756 = G__32795;
chunk__32662_32757 = G__32796;
count__32663_32758 = G__32797;
i__32664_32759 = G__32798;
continue;
} else {
var vec__32678_32799 = cljs.core.first.call(null,seq__32661_32793__$1);
var line_32800 = cljs.core.nth.call(null,vec__32678_32799,(0),null);
var cols_32801 = cljs.core.nth.call(null,vec__32678_32799,(1),null);
var seq__32681_32802 = cljs.core.seq.call(null,cols_32801);
var chunk__32682_32803 = null;
var count__32683_32804 = (0);
var i__32684_32805 = (0);
while(true){
if((i__32684_32805 < count__32683_32804)){
var vec__32685_32806 = cljs.core._nth.call(null,chunk__32682_32803,i__32684_32805);
var col_32807 = cljs.core.nth.call(null,vec__32685_32806,(0),null);
var infos_32808 = cljs.core.nth.call(null,vec__32685_32806,(1),null);
encode_cols.call(null,infos_32808,source_idx_32752,line_32800,col_32807);

var G__32809 = seq__32681_32802;
var G__32810 = chunk__32682_32803;
var G__32811 = count__32683_32804;
var G__32812 = (i__32684_32805 + (1));
seq__32681_32802 = G__32809;
chunk__32682_32803 = G__32810;
count__32683_32804 = G__32811;
i__32684_32805 = G__32812;
continue;
} else {
var temp__4657__auto___32813__$1 = cljs.core.seq.call(null,seq__32681_32802);
if(temp__4657__auto___32813__$1){
var seq__32681_32814__$1 = temp__4657__auto___32813__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32681_32814__$1)){
var c__28034__auto___32815 = cljs.core.chunk_first.call(null,seq__32681_32814__$1);
var G__32816 = cljs.core.chunk_rest.call(null,seq__32681_32814__$1);
var G__32817 = c__28034__auto___32815;
var G__32818 = cljs.core.count.call(null,c__28034__auto___32815);
var G__32819 = (0);
seq__32681_32802 = G__32816;
chunk__32682_32803 = G__32817;
count__32683_32804 = G__32818;
i__32684_32805 = G__32819;
continue;
} else {
var vec__32688_32820 = cljs.core.first.call(null,seq__32681_32814__$1);
var col_32821 = cljs.core.nth.call(null,vec__32688_32820,(0),null);
var infos_32822 = cljs.core.nth.call(null,vec__32688_32820,(1),null);
encode_cols.call(null,infos_32822,source_idx_32752,line_32800,col_32821);

var G__32823 = cljs.core.next.call(null,seq__32681_32814__$1);
var G__32824 = null;
var G__32825 = (0);
var G__32826 = (0);
seq__32681_32802 = G__32823;
chunk__32682_32803 = G__32824;
count__32683_32804 = G__32825;
i__32684_32805 = G__32826;
continue;
}
} else {
}
}
break;
}

var G__32827 = cljs.core.next.call(null,seq__32661_32793__$1);
var G__32828 = null;
var G__32829 = (0);
var G__32830 = (0);
seq__32661_32756 = G__32827;
chunk__32662_32757 = G__32828;
count__32663_32758 = G__32829;
i__32664_32759 = G__32830;
continue;
}
} else {
}
}
break;
}

var G__32831 = seq__32651_32747;
var G__32832 = chunk__32652_32748;
var G__32833 = count__32653_32749;
var G__32834 = (i__32654_32750 + (1));
seq__32651_32747 = G__32831;
chunk__32652_32748 = G__32832;
count__32653_32749 = G__32833;
i__32654_32750 = G__32834;
continue;
} else {
var temp__4657__auto___32835 = cljs.core.seq.call(null,seq__32651_32747);
if(temp__4657__auto___32835){
var seq__32651_32836__$1 = temp__4657__auto___32835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32651_32836__$1)){
var c__28034__auto___32837 = cljs.core.chunk_first.call(null,seq__32651_32836__$1);
var G__32838 = cljs.core.chunk_rest.call(null,seq__32651_32836__$1);
var G__32839 = c__28034__auto___32837;
var G__32840 = cljs.core.count.call(null,c__28034__auto___32837);
var G__32841 = (0);
seq__32651_32747 = G__32838;
chunk__32652_32748 = G__32839;
count__32653_32749 = G__32840;
i__32654_32750 = G__32841;
continue;
} else {
var vec__32691_32842 = cljs.core.first.call(null,seq__32651_32836__$1);
var source_idx_32843 = cljs.core.nth.call(null,vec__32691_32842,(0),null);
var vec__32694_32844 = cljs.core.nth.call(null,vec__32691_32842,(1),null);
var __32845 = cljs.core.nth.call(null,vec__32694_32844,(0),null);
var lines_32846__$1 = cljs.core.nth.call(null,vec__32694_32844,(1),null);
var seq__32697_32847 = cljs.core.seq.call(null,lines_32846__$1);
var chunk__32698_32848 = null;
var count__32699_32849 = (0);
var i__32700_32850 = (0);
while(true){
if((i__32700_32850 < count__32699_32849)){
var vec__32701_32851 = cljs.core._nth.call(null,chunk__32698_32848,i__32700_32850);
var line_32852 = cljs.core.nth.call(null,vec__32701_32851,(0),null);
var cols_32853 = cljs.core.nth.call(null,vec__32701_32851,(1),null);
var seq__32704_32854 = cljs.core.seq.call(null,cols_32853);
var chunk__32705_32855 = null;
var count__32706_32856 = (0);
var i__32707_32857 = (0);
while(true){
if((i__32707_32857 < count__32706_32856)){
var vec__32708_32858 = cljs.core._nth.call(null,chunk__32705_32855,i__32707_32857);
var col_32859 = cljs.core.nth.call(null,vec__32708_32858,(0),null);
var infos_32860 = cljs.core.nth.call(null,vec__32708_32858,(1),null);
encode_cols.call(null,infos_32860,source_idx_32843,line_32852,col_32859);

var G__32861 = seq__32704_32854;
var G__32862 = chunk__32705_32855;
var G__32863 = count__32706_32856;
var G__32864 = (i__32707_32857 + (1));
seq__32704_32854 = G__32861;
chunk__32705_32855 = G__32862;
count__32706_32856 = G__32863;
i__32707_32857 = G__32864;
continue;
} else {
var temp__4657__auto___32865__$1 = cljs.core.seq.call(null,seq__32704_32854);
if(temp__4657__auto___32865__$1){
var seq__32704_32866__$1 = temp__4657__auto___32865__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32704_32866__$1)){
var c__28034__auto___32867 = cljs.core.chunk_first.call(null,seq__32704_32866__$1);
var G__32868 = cljs.core.chunk_rest.call(null,seq__32704_32866__$1);
var G__32869 = c__28034__auto___32867;
var G__32870 = cljs.core.count.call(null,c__28034__auto___32867);
var G__32871 = (0);
seq__32704_32854 = G__32868;
chunk__32705_32855 = G__32869;
count__32706_32856 = G__32870;
i__32707_32857 = G__32871;
continue;
} else {
var vec__32711_32872 = cljs.core.first.call(null,seq__32704_32866__$1);
var col_32873 = cljs.core.nth.call(null,vec__32711_32872,(0),null);
var infos_32874 = cljs.core.nth.call(null,vec__32711_32872,(1),null);
encode_cols.call(null,infos_32874,source_idx_32843,line_32852,col_32873);

var G__32875 = cljs.core.next.call(null,seq__32704_32866__$1);
var G__32876 = null;
var G__32877 = (0);
var G__32878 = (0);
seq__32704_32854 = G__32875;
chunk__32705_32855 = G__32876;
count__32706_32856 = G__32877;
i__32707_32857 = G__32878;
continue;
}
} else {
}
}
break;
}

var G__32879 = seq__32697_32847;
var G__32880 = chunk__32698_32848;
var G__32881 = count__32699_32849;
var G__32882 = (i__32700_32850 + (1));
seq__32697_32847 = G__32879;
chunk__32698_32848 = G__32880;
count__32699_32849 = G__32881;
i__32700_32850 = G__32882;
continue;
} else {
var temp__4657__auto___32883__$1 = cljs.core.seq.call(null,seq__32697_32847);
if(temp__4657__auto___32883__$1){
var seq__32697_32884__$1 = temp__4657__auto___32883__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32697_32884__$1)){
var c__28034__auto___32885 = cljs.core.chunk_first.call(null,seq__32697_32884__$1);
var G__32886 = cljs.core.chunk_rest.call(null,seq__32697_32884__$1);
var G__32887 = c__28034__auto___32885;
var G__32888 = cljs.core.count.call(null,c__28034__auto___32885);
var G__32889 = (0);
seq__32697_32847 = G__32886;
chunk__32698_32848 = G__32887;
count__32699_32849 = G__32888;
i__32700_32850 = G__32889;
continue;
} else {
var vec__32714_32890 = cljs.core.first.call(null,seq__32697_32884__$1);
var line_32891 = cljs.core.nth.call(null,vec__32714_32890,(0),null);
var cols_32892 = cljs.core.nth.call(null,vec__32714_32890,(1),null);
var seq__32717_32893 = cljs.core.seq.call(null,cols_32892);
var chunk__32718_32894 = null;
var count__32719_32895 = (0);
var i__32720_32896 = (0);
while(true){
if((i__32720_32896 < count__32719_32895)){
var vec__32721_32897 = cljs.core._nth.call(null,chunk__32718_32894,i__32720_32896);
var col_32898 = cljs.core.nth.call(null,vec__32721_32897,(0),null);
var infos_32899 = cljs.core.nth.call(null,vec__32721_32897,(1),null);
encode_cols.call(null,infos_32899,source_idx_32843,line_32891,col_32898);

var G__32900 = seq__32717_32893;
var G__32901 = chunk__32718_32894;
var G__32902 = count__32719_32895;
var G__32903 = (i__32720_32896 + (1));
seq__32717_32893 = G__32900;
chunk__32718_32894 = G__32901;
count__32719_32895 = G__32902;
i__32720_32896 = G__32903;
continue;
} else {
var temp__4657__auto___32904__$2 = cljs.core.seq.call(null,seq__32717_32893);
if(temp__4657__auto___32904__$2){
var seq__32717_32905__$1 = temp__4657__auto___32904__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32717_32905__$1)){
var c__28034__auto___32906 = cljs.core.chunk_first.call(null,seq__32717_32905__$1);
var G__32907 = cljs.core.chunk_rest.call(null,seq__32717_32905__$1);
var G__32908 = c__28034__auto___32906;
var G__32909 = cljs.core.count.call(null,c__28034__auto___32906);
var G__32910 = (0);
seq__32717_32893 = G__32907;
chunk__32718_32894 = G__32908;
count__32719_32895 = G__32909;
i__32720_32896 = G__32910;
continue;
} else {
var vec__32724_32911 = cljs.core.first.call(null,seq__32717_32905__$1);
var col_32912 = cljs.core.nth.call(null,vec__32724_32911,(0),null);
var infos_32913 = cljs.core.nth.call(null,vec__32724_32911,(1),null);
encode_cols.call(null,infos_32913,source_idx_32843,line_32891,col_32912);

var G__32914 = cljs.core.next.call(null,seq__32717_32905__$1);
var G__32915 = null;
var G__32916 = (0);
var G__32917 = (0);
seq__32717_32893 = G__32914;
chunk__32718_32894 = G__32915;
count__32719_32895 = G__32916;
i__32720_32896 = G__32917;
continue;
}
} else {
}
}
break;
}

var G__32918 = cljs.core.next.call(null,seq__32697_32884__$1);
var G__32919 = null;
var G__32920 = (0);
var G__32921 = (0);
seq__32697_32847 = G__32918;
chunk__32698_32848 = G__32919;
count__32699_32849 = G__32920;
i__32700_32850 = G__32921;
continue;
}
} else {
}
}
break;
}

var G__32922 = cljs.core.next.call(null,seq__32651_32836__$1);
var G__32923 = null;
var G__32924 = (0);
var G__32925 = (0);
seq__32651_32747 = G__32922;
chunk__32652_32748 = G__32923;
count__32653_32749 = G__32924;
i__32654_32750 = G__32925;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__32727 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__32644_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32644_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__32645_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__32645_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__32646_SHARP_){
return clojure.string.join.call(null,",",p1__32646_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__32728 = G__32727;
goog.object.set(G__32728,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__32728;
} else {
return G__32727;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__32926 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__32926,(0),null);
var col_map = cljs.core.nth.call(null,vec__32926,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__32929 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__32929,(0),null);
var infos = cljs.core.nth.call(null,vec__32929,(1),null);
var G__32935 = cljs.core.next.call(null,col_map_seq);
var G__32936 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__32929,col,infos,vec__32926,line,col_map){
return (function (v,p__32932){
var map__32933 = p__32932;
var map__32933__$1 = ((((!((map__32933 == null)))?((((map__32933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32933.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32933):map__32933);
var gline = cljs.core.get.call(null,map__32933__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__32933__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__32929,col,infos,vec__32926,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__32935;
new_cols = G__32936;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__32937 = cljs.core.next.call(null,line_map_seq);
var G__32938 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__32937;
new_lines = G__32938;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__32939_33001 = cljs.core.seq.call(null,reverse_map);
var chunk__32940_33002 = null;
var count__32941_33003 = (0);
var i__32942_33004 = (0);
while(true){
if((i__32942_33004 < count__32941_33003)){
var vec__32943_33005 = cljs.core._nth.call(null,chunk__32940_33002,i__32942_33004);
var line_33006 = cljs.core.nth.call(null,vec__32943_33005,(0),null);
var columns_33007 = cljs.core.nth.call(null,vec__32943_33005,(1),null);
var seq__32946_33008 = cljs.core.seq.call(null,columns_33007);
var chunk__32947_33009 = null;
var count__32948_33010 = (0);
var i__32949_33011 = (0);
while(true){
if((i__32949_33011 < count__32948_33010)){
var vec__32950_33012 = cljs.core._nth.call(null,chunk__32947_33009,i__32949_33011);
var column_33013 = cljs.core.nth.call(null,vec__32950_33012,(0),null);
var column_info_33014 = cljs.core.nth.call(null,vec__32950_33012,(1),null);
var seq__32953_33015 = cljs.core.seq.call(null,column_info_33014);
var chunk__32954_33016 = null;
var count__32955_33017 = (0);
var i__32956_33018 = (0);
while(true){
if((i__32956_33018 < count__32955_33017)){
var map__32957_33019 = cljs.core._nth.call(null,chunk__32954_33016,i__32956_33018);
var map__32957_33020__$1 = ((((!((map__32957_33019 == null)))?((((map__32957_33019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32957_33019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32957_33019):map__32957_33019);
var gline_33021 = cljs.core.get.call(null,map__32957_33020__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33022 = cljs.core.get.call(null,map__32957_33020__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33023 = cljs.core.get.call(null,map__32957_33020__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33021], null),cljs.core.fnil.call(null,((function (seq__32953_33015,chunk__32954_33016,count__32955_33017,i__32956_33018,seq__32946_33008,chunk__32947_33009,count__32948_33010,i__32949_33011,seq__32939_33001,chunk__32940_33002,count__32941_33003,i__32942_33004,map__32957_33019,map__32957_33020__$1,gline_33021,gcol_33022,name_33023,vec__32950_33012,column_33013,column_info_33014,vec__32943_33005,line_33006,columns_33007,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33022], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33006,new cljs.core.Keyword(null,"col","col",-1959363084),column_33013,new cljs.core.Keyword(null,"name","name",1843675177),name_33023], null));
});})(seq__32953_33015,chunk__32954_33016,count__32955_33017,i__32956_33018,seq__32946_33008,chunk__32947_33009,count__32948_33010,i__32949_33011,seq__32939_33001,chunk__32940_33002,count__32941_33003,i__32942_33004,map__32957_33019,map__32957_33020__$1,gline_33021,gcol_33022,name_33023,vec__32950_33012,column_33013,column_info_33014,vec__32943_33005,line_33006,columns_33007,inverted))
,cljs.core.sorted_map.call(null)));

var G__33024 = seq__32953_33015;
var G__33025 = chunk__32954_33016;
var G__33026 = count__32955_33017;
var G__33027 = (i__32956_33018 + (1));
seq__32953_33015 = G__33024;
chunk__32954_33016 = G__33025;
count__32955_33017 = G__33026;
i__32956_33018 = G__33027;
continue;
} else {
var temp__4657__auto___33028 = cljs.core.seq.call(null,seq__32953_33015);
if(temp__4657__auto___33028){
var seq__32953_33029__$1 = temp__4657__auto___33028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32953_33029__$1)){
var c__28034__auto___33030 = cljs.core.chunk_first.call(null,seq__32953_33029__$1);
var G__33031 = cljs.core.chunk_rest.call(null,seq__32953_33029__$1);
var G__33032 = c__28034__auto___33030;
var G__33033 = cljs.core.count.call(null,c__28034__auto___33030);
var G__33034 = (0);
seq__32953_33015 = G__33031;
chunk__32954_33016 = G__33032;
count__32955_33017 = G__33033;
i__32956_33018 = G__33034;
continue;
} else {
var map__32959_33035 = cljs.core.first.call(null,seq__32953_33029__$1);
var map__32959_33036__$1 = ((((!((map__32959_33035 == null)))?((((map__32959_33035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32959_33035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32959_33035):map__32959_33035);
var gline_33037 = cljs.core.get.call(null,map__32959_33036__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33038 = cljs.core.get.call(null,map__32959_33036__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33039 = cljs.core.get.call(null,map__32959_33036__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33037], null),cljs.core.fnil.call(null,((function (seq__32953_33015,chunk__32954_33016,count__32955_33017,i__32956_33018,seq__32946_33008,chunk__32947_33009,count__32948_33010,i__32949_33011,seq__32939_33001,chunk__32940_33002,count__32941_33003,i__32942_33004,map__32959_33035,map__32959_33036__$1,gline_33037,gcol_33038,name_33039,seq__32953_33029__$1,temp__4657__auto___33028,vec__32950_33012,column_33013,column_info_33014,vec__32943_33005,line_33006,columns_33007,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33038], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33006,new cljs.core.Keyword(null,"col","col",-1959363084),column_33013,new cljs.core.Keyword(null,"name","name",1843675177),name_33039], null));
});})(seq__32953_33015,chunk__32954_33016,count__32955_33017,i__32956_33018,seq__32946_33008,chunk__32947_33009,count__32948_33010,i__32949_33011,seq__32939_33001,chunk__32940_33002,count__32941_33003,i__32942_33004,map__32959_33035,map__32959_33036__$1,gline_33037,gcol_33038,name_33039,seq__32953_33029__$1,temp__4657__auto___33028,vec__32950_33012,column_33013,column_info_33014,vec__32943_33005,line_33006,columns_33007,inverted))
,cljs.core.sorted_map.call(null)));

var G__33040 = cljs.core.next.call(null,seq__32953_33029__$1);
var G__33041 = null;
var G__33042 = (0);
var G__33043 = (0);
seq__32953_33015 = G__33040;
chunk__32954_33016 = G__33041;
count__32955_33017 = G__33042;
i__32956_33018 = G__33043;
continue;
}
} else {
}
}
break;
}

var G__33044 = seq__32946_33008;
var G__33045 = chunk__32947_33009;
var G__33046 = count__32948_33010;
var G__33047 = (i__32949_33011 + (1));
seq__32946_33008 = G__33044;
chunk__32947_33009 = G__33045;
count__32948_33010 = G__33046;
i__32949_33011 = G__33047;
continue;
} else {
var temp__4657__auto___33048 = cljs.core.seq.call(null,seq__32946_33008);
if(temp__4657__auto___33048){
var seq__32946_33049__$1 = temp__4657__auto___33048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32946_33049__$1)){
var c__28034__auto___33050 = cljs.core.chunk_first.call(null,seq__32946_33049__$1);
var G__33051 = cljs.core.chunk_rest.call(null,seq__32946_33049__$1);
var G__33052 = c__28034__auto___33050;
var G__33053 = cljs.core.count.call(null,c__28034__auto___33050);
var G__33054 = (0);
seq__32946_33008 = G__33051;
chunk__32947_33009 = G__33052;
count__32948_33010 = G__33053;
i__32949_33011 = G__33054;
continue;
} else {
var vec__32961_33055 = cljs.core.first.call(null,seq__32946_33049__$1);
var column_33056 = cljs.core.nth.call(null,vec__32961_33055,(0),null);
var column_info_33057 = cljs.core.nth.call(null,vec__32961_33055,(1),null);
var seq__32964_33058 = cljs.core.seq.call(null,column_info_33057);
var chunk__32965_33059 = null;
var count__32966_33060 = (0);
var i__32967_33061 = (0);
while(true){
if((i__32967_33061 < count__32966_33060)){
var map__32968_33062 = cljs.core._nth.call(null,chunk__32965_33059,i__32967_33061);
var map__32968_33063__$1 = ((((!((map__32968_33062 == null)))?((((map__32968_33062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32968_33062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32968_33062):map__32968_33062);
var gline_33064 = cljs.core.get.call(null,map__32968_33063__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33065 = cljs.core.get.call(null,map__32968_33063__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33066 = cljs.core.get.call(null,map__32968_33063__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33064], null),cljs.core.fnil.call(null,((function (seq__32964_33058,chunk__32965_33059,count__32966_33060,i__32967_33061,seq__32946_33008,chunk__32947_33009,count__32948_33010,i__32949_33011,seq__32939_33001,chunk__32940_33002,count__32941_33003,i__32942_33004,map__32968_33062,map__32968_33063__$1,gline_33064,gcol_33065,name_33066,vec__32961_33055,column_33056,column_info_33057,seq__32946_33049__$1,temp__4657__auto___33048,vec__32943_33005,line_33006,columns_33007,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33065], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33006,new cljs.core.Keyword(null,"col","col",-1959363084),column_33056,new cljs.core.Keyword(null,"name","name",1843675177),name_33066], null));
});})(seq__32964_33058,chunk__32965_33059,count__32966_33060,i__32967_33061,seq__32946_33008,chunk__32947_33009,count__32948_33010,i__32949_33011,seq__32939_33001,chunk__32940_33002,count__32941_33003,i__32942_33004,map__32968_33062,map__32968_33063__$1,gline_33064,gcol_33065,name_33066,vec__32961_33055,column_33056,column_info_33057,seq__32946_33049__$1,temp__4657__auto___33048,vec__32943_33005,line_33006,columns_33007,inverted))
,cljs.core.sorted_map.call(null)));

var G__33067 = seq__32964_33058;
var G__33068 = chunk__32965_33059;
var G__33069 = count__32966_33060;
var G__33070 = (i__32967_33061 + (1));
seq__32964_33058 = G__33067;
chunk__32965_33059 = G__33068;
count__32966_33060 = G__33069;
i__32967_33061 = G__33070;
continue;
} else {
var temp__4657__auto___33071__$1 = cljs.core.seq.call(null,seq__32964_33058);
if(temp__4657__auto___33071__$1){
var seq__32964_33072__$1 = temp__4657__auto___33071__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32964_33072__$1)){
var c__28034__auto___33073 = cljs.core.chunk_first.call(null,seq__32964_33072__$1);
var G__33074 = cljs.core.chunk_rest.call(null,seq__32964_33072__$1);
var G__33075 = c__28034__auto___33073;
var G__33076 = cljs.core.count.call(null,c__28034__auto___33073);
var G__33077 = (0);
seq__32964_33058 = G__33074;
chunk__32965_33059 = G__33075;
count__32966_33060 = G__33076;
i__32967_33061 = G__33077;
continue;
} else {
var map__32970_33078 = cljs.core.first.call(null,seq__32964_33072__$1);
var map__32970_33079__$1 = ((((!((map__32970_33078 == null)))?((((map__32970_33078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32970_33078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32970_33078):map__32970_33078);
var gline_33080 = cljs.core.get.call(null,map__32970_33079__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33081 = cljs.core.get.call(null,map__32970_33079__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33082 = cljs.core.get.call(null,map__32970_33079__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33080], null),cljs.core.fnil.call(null,((function (seq__32964_33058,chunk__32965_33059,count__32966_33060,i__32967_33061,seq__32946_33008,chunk__32947_33009,count__32948_33010,i__32949_33011,seq__32939_33001,chunk__32940_33002,count__32941_33003,i__32942_33004,map__32970_33078,map__32970_33079__$1,gline_33080,gcol_33081,name_33082,seq__32964_33072__$1,temp__4657__auto___33071__$1,vec__32961_33055,column_33056,column_info_33057,seq__32946_33049__$1,temp__4657__auto___33048,vec__32943_33005,line_33006,columns_33007,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33081], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33006,new cljs.core.Keyword(null,"col","col",-1959363084),column_33056,new cljs.core.Keyword(null,"name","name",1843675177),name_33082], null));
});})(seq__32964_33058,chunk__32965_33059,count__32966_33060,i__32967_33061,seq__32946_33008,chunk__32947_33009,count__32948_33010,i__32949_33011,seq__32939_33001,chunk__32940_33002,count__32941_33003,i__32942_33004,map__32970_33078,map__32970_33079__$1,gline_33080,gcol_33081,name_33082,seq__32964_33072__$1,temp__4657__auto___33071__$1,vec__32961_33055,column_33056,column_info_33057,seq__32946_33049__$1,temp__4657__auto___33048,vec__32943_33005,line_33006,columns_33007,inverted))
,cljs.core.sorted_map.call(null)));

var G__33083 = cljs.core.next.call(null,seq__32964_33072__$1);
var G__33084 = null;
var G__33085 = (0);
var G__33086 = (0);
seq__32964_33058 = G__33083;
chunk__32965_33059 = G__33084;
count__32966_33060 = G__33085;
i__32967_33061 = G__33086;
continue;
}
} else {
}
}
break;
}

var G__33087 = cljs.core.next.call(null,seq__32946_33049__$1);
var G__33088 = null;
var G__33089 = (0);
var G__33090 = (0);
seq__32946_33008 = G__33087;
chunk__32947_33009 = G__33088;
count__32948_33010 = G__33089;
i__32949_33011 = G__33090;
continue;
}
} else {
}
}
break;
}

var G__33091 = seq__32939_33001;
var G__33092 = chunk__32940_33002;
var G__33093 = count__32941_33003;
var G__33094 = (i__32942_33004 + (1));
seq__32939_33001 = G__33091;
chunk__32940_33002 = G__33092;
count__32941_33003 = G__33093;
i__32942_33004 = G__33094;
continue;
} else {
var temp__4657__auto___33095 = cljs.core.seq.call(null,seq__32939_33001);
if(temp__4657__auto___33095){
var seq__32939_33096__$1 = temp__4657__auto___33095;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32939_33096__$1)){
var c__28034__auto___33097 = cljs.core.chunk_first.call(null,seq__32939_33096__$1);
var G__33098 = cljs.core.chunk_rest.call(null,seq__32939_33096__$1);
var G__33099 = c__28034__auto___33097;
var G__33100 = cljs.core.count.call(null,c__28034__auto___33097);
var G__33101 = (0);
seq__32939_33001 = G__33098;
chunk__32940_33002 = G__33099;
count__32941_33003 = G__33100;
i__32942_33004 = G__33101;
continue;
} else {
var vec__32972_33102 = cljs.core.first.call(null,seq__32939_33096__$1);
var line_33103 = cljs.core.nth.call(null,vec__32972_33102,(0),null);
var columns_33104 = cljs.core.nth.call(null,vec__32972_33102,(1),null);
var seq__32975_33105 = cljs.core.seq.call(null,columns_33104);
var chunk__32976_33106 = null;
var count__32977_33107 = (0);
var i__32978_33108 = (0);
while(true){
if((i__32978_33108 < count__32977_33107)){
var vec__32979_33109 = cljs.core._nth.call(null,chunk__32976_33106,i__32978_33108);
var column_33110 = cljs.core.nth.call(null,vec__32979_33109,(0),null);
var column_info_33111 = cljs.core.nth.call(null,vec__32979_33109,(1),null);
var seq__32982_33112 = cljs.core.seq.call(null,column_info_33111);
var chunk__32983_33113 = null;
var count__32984_33114 = (0);
var i__32985_33115 = (0);
while(true){
if((i__32985_33115 < count__32984_33114)){
var map__32986_33116 = cljs.core._nth.call(null,chunk__32983_33113,i__32985_33115);
var map__32986_33117__$1 = ((((!((map__32986_33116 == null)))?((((map__32986_33116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32986_33116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32986_33116):map__32986_33116);
var gline_33118 = cljs.core.get.call(null,map__32986_33117__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33119 = cljs.core.get.call(null,map__32986_33117__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33120 = cljs.core.get.call(null,map__32986_33117__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33118], null),cljs.core.fnil.call(null,((function (seq__32982_33112,chunk__32983_33113,count__32984_33114,i__32985_33115,seq__32975_33105,chunk__32976_33106,count__32977_33107,i__32978_33108,seq__32939_33001,chunk__32940_33002,count__32941_33003,i__32942_33004,map__32986_33116,map__32986_33117__$1,gline_33118,gcol_33119,name_33120,vec__32979_33109,column_33110,column_info_33111,vec__32972_33102,line_33103,columns_33104,seq__32939_33096__$1,temp__4657__auto___33095,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33119], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33103,new cljs.core.Keyword(null,"col","col",-1959363084),column_33110,new cljs.core.Keyword(null,"name","name",1843675177),name_33120], null));
});})(seq__32982_33112,chunk__32983_33113,count__32984_33114,i__32985_33115,seq__32975_33105,chunk__32976_33106,count__32977_33107,i__32978_33108,seq__32939_33001,chunk__32940_33002,count__32941_33003,i__32942_33004,map__32986_33116,map__32986_33117__$1,gline_33118,gcol_33119,name_33120,vec__32979_33109,column_33110,column_info_33111,vec__32972_33102,line_33103,columns_33104,seq__32939_33096__$1,temp__4657__auto___33095,inverted))
,cljs.core.sorted_map.call(null)));

var G__33121 = seq__32982_33112;
var G__33122 = chunk__32983_33113;
var G__33123 = count__32984_33114;
var G__33124 = (i__32985_33115 + (1));
seq__32982_33112 = G__33121;
chunk__32983_33113 = G__33122;
count__32984_33114 = G__33123;
i__32985_33115 = G__33124;
continue;
} else {
var temp__4657__auto___33125__$1 = cljs.core.seq.call(null,seq__32982_33112);
if(temp__4657__auto___33125__$1){
var seq__32982_33126__$1 = temp__4657__auto___33125__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32982_33126__$1)){
var c__28034__auto___33127 = cljs.core.chunk_first.call(null,seq__32982_33126__$1);
var G__33128 = cljs.core.chunk_rest.call(null,seq__32982_33126__$1);
var G__33129 = c__28034__auto___33127;
var G__33130 = cljs.core.count.call(null,c__28034__auto___33127);
var G__33131 = (0);
seq__32982_33112 = G__33128;
chunk__32983_33113 = G__33129;
count__32984_33114 = G__33130;
i__32985_33115 = G__33131;
continue;
} else {
var map__32988_33132 = cljs.core.first.call(null,seq__32982_33126__$1);
var map__32988_33133__$1 = ((((!((map__32988_33132 == null)))?((((map__32988_33132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32988_33132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32988_33132):map__32988_33132);
var gline_33134 = cljs.core.get.call(null,map__32988_33133__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33135 = cljs.core.get.call(null,map__32988_33133__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33136 = cljs.core.get.call(null,map__32988_33133__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33134], null),cljs.core.fnil.call(null,((function (seq__32982_33112,chunk__32983_33113,count__32984_33114,i__32985_33115,seq__32975_33105,chunk__32976_33106,count__32977_33107,i__32978_33108,seq__32939_33001,chunk__32940_33002,count__32941_33003,i__32942_33004,map__32988_33132,map__32988_33133__$1,gline_33134,gcol_33135,name_33136,seq__32982_33126__$1,temp__4657__auto___33125__$1,vec__32979_33109,column_33110,column_info_33111,vec__32972_33102,line_33103,columns_33104,seq__32939_33096__$1,temp__4657__auto___33095,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33135], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33103,new cljs.core.Keyword(null,"col","col",-1959363084),column_33110,new cljs.core.Keyword(null,"name","name",1843675177),name_33136], null));
});})(seq__32982_33112,chunk__32983_33113,count__32984_33114,i__32985_33115,seq__32975_33105,chunk__32976_33106,count__32977_33107,i__32978_33108,seq__32939_33001,chunk__32940_33002,count__32941_33003,i__32942_33004,map__32988_33132,map__32988_33133__$1,gline_33134,gcol_33135,name_33136,seq__32982_33126__$1,temp__4657__auto___33125__$1,vec__32979_33109,column_33110,column_info_33111,vec__32972_33102,line_33103,columns_33104,seq__32939_33096__$1,temp__4657__auto___33095,inverted))
,cljs.core.sorted_map.call(null)));

var G__33137 = cljs.core.next.call(null,seq__32982_33126__$1);
var G__33138 = null;
var G__33139 = (0);
var G__33140 = (0);
seq__32982_33112 = G__33137;
chunk__32983_33113 = G__33138;
count__32984_33114 = G__33139;
i__32985_33115 = G__33140;
continue;
}
} else {
}
}
break;
}

var G__33141 = seq__32975_33105;
var G__33142 = chunk__32976_33106;
var G__33143 = count__32977_33107;
var G__33144 = (i__32978_33108 + (1));
seq__32975_33105 = G__33141;
chunk__32976_33106 = G__33142;
count__32977_33107 = G__33143;
i__32978_33108 = G__33144;
continue;
} else {
var temp__4657__auto___33145__$1 = cljs.core.seq.call(null,seq__32975_33105);
if(temp__4657__auto___33145__$1){
var seq__32975_33146__$1 = temp__4657__auto___33145__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32975_33146__$1)){
var c__28034__auto___33147 = cljs.core.chunk_first.call(null,seq__32975_33146__$1);
var G__33148 = cljs.core.chunk_rest.call(null,seq__32975_33146__$1);
var G__33149 = c__28034__auto___33147;
var G__33150 = cljs.core.count.call(null,c__28034__auto___33147);
var G__33151 = (0);
seq__32975_33105 = G__33148;
chunk__32976_33106 = G__33149;
count__32977_33107 = G__33150;
i__32978_33108 = G__33151;
continue;
} else {
var vec__32990_33152 = cljs.core.first.call(null,seq__32975_33146__$1);
var column_33153 = cljs.core.nth.call(null,vec__32990_33152,(0),null);
var column_info_33154 = cljs.core.nth.call(null,vec__32990_33152,(1),null);
var seq__32993_33155 = cljs.core.seq.call(null,column_info_33154);
var chunk__32994_33156 = null;
var count__32995_33157 = (0);
var i__32996_33158 = (0);
while(true){
if((i__32996_33158 < count__32995_33157)){
var map__32997_33159 = cljs.core._nth.call(null,chunk__32994_33156,i__32996_33158);
var map__32997_33160__$1 = ((((!((map__32997_33159 == null)))?((((map__32997_33159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32997_33159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32997_33159):map__32997_33159);
var gline_33161 = cljs.core.get.call(null,map__32997_33160__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33162 = cljs.core.get.call(null,map__32997_33160__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33163 = cljs.core.get.call(null,map__32997_33160__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33161], null),cljs.core.fnil.call(null,((function (seq__32993_33155,chunk__32994_33156,count__32995_33157,i__32996_33158,seq__32975_33105,chunk__32976_33106,count__32977_33107,i__32978_33108,seq__32939_33001,chunk__32940_33002,count__32941_33003,i__32942_33004,map__32997_33159,map__32997_33160__$1,gline_33161,gcol_33162,name_33163,vec__32990_33152,column_33153,column_info_33154,seq__32975_33146__$1,temp__4657__auto___33145__$1,vec__32972_33102,line_33103,columns_33104,seq__32939_33096__$1,temp__4657__auto___33095,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33162], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33103,new cljs.core.Keyword(null,"col","col",-1959363084),column_33153,new cljs.core.Keyword(null,"name","name",1843675177),name_33163], null));
});})(seq__32993_33155,chunk__32994_33156,count__32995_33157,i__32996_33158,seq__32975_33105,chunk__32976_33106,count__32977_33107,i__32978_33108,seq__32939_33001,chunk__32940_33002,count__32941_33003,i__32942_33004,map__32997_33159,map__32997_33160__$1,gline_33161,gcol_33162,name_33163,vec__32990_33152,column_33153,column_info_33154,seq__32975_33146__$1,temp__4657__auto___33145__$1,vec__32972_33102,line_33103,columns_33104,seq__32939_33096__$1,temp__4657__auto___33095,inverted))
,cljs.core.sorted_map.call(null)));

var G__33164 = seq__32993_33155;
var G__33165 = chunk__32994_33156;
var G__33166 = count__32995_33157;
var G__33167 = (i__32996_33158 + (1));
seq__32993_33155 = G__33164;
chunk__32994_33156 = G__33165;
count__32995_33157 = G__33166;
i__32996_33158 = G__33167;
continue;
} else {
var temp__4657__auto___33168__$2 = cljs.core.seq.call(null,seq__32993_33155);
if(temp__4657__auto___33168__$2){
var seq__32993_33169__$1 = temp__4657__auto___33168__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32993_33169__$1)){
var c__28034__auto___33170 = cljs.core.chunk_first.call(null,seq__32993_33169__$1);
var G__33171 = cljs.core.chunk_rest.call(null,seq__32993_33169__$1);
var G__33172 = c__28034__auto___33170;
var G__33173 = cljs.core.count.call(null,c__28034__auto___33170);
var G__33174 = (0);
seq__32993_33155 = G__33171;
chunk__32994_33156 = G__33172;
count__32995_33157 = G__33173;
i__32996_33158 = G__33174;
continue;
} else {
var map__32999_33175 = cljs.core.first.call(null,seq__32993_33169__$1);
var map__32999_33176__$1 = ((((!((map__32999_33175 == null)))?((((map__32999_33175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32999_33175.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32999_33175):map__32999_33175);
var gline_33177 = cljs.core.get.call(null,map__32999_33176__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33178 = cljs.core.get.call(null,map__32999_33176__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33179 = cljs.core.get.call(null,map__32999_33176__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33177], null),cljs.core.fnil.call(null,((function (seq__32993_33155,chunk__32994_33156,count__32995_33157,i__32996_33158,seq__32975_33105,chunk__32976_33106,count__32977_33107,i__32978_33108,seq__32939_33001,chunk__32940_33002,count__32941_33003,i__32942_33004,map__32999_33175,map__32999_33176__$1,gline_33177,gcol_33178,name_33179,seq__32993_33169__$1,temp__4657__auto___33168__$2,vec__32990_33152,column_33153,column_info_33154,seq__32975_33146__$1,temp__4657__auto___33145__$1,vec__32972_33102,line_33103,columns_33104,seq__32939_33096__$1,temp__4657__auto___33095,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33178], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33103,new cljs.core.Keyword(null,"col","col",-1959363084),column_33153,new cljs.core.Keyword(null,"name","name",1843675177),name_33179], null));
});})(seq__32993_33155,chunk__32994_33156,count__32995_33157,i__32996_33158,seq__32975_33105,chunk__32976_33106,count__32977_33107,i__32978_33108,seq__32939_33001,chunk__32940_33002,count__32941_33003,i__32942_33004,map__32999_33175,map__32999_33176__$1,gline_33177,gcol_33178,name_33179,seq__32993_33169__$1,temp__4657__auto___33168__$2,vec__32990_33152,column_33153,column_info_33154,seq__32975_33146__$1,temp__4657__auto___33145__$1,vec__32972_33102,line_33103,columns_33104,seq__32939_33096__$1,temp__4657__auto___33095,inverted))
,cljs.core.sorted_map.call(null)));

var G__33180 = cljs.core.next.call(null,seq__32993_33169__$1);
var G__33181 = null;
var G__33182 = (0);
var G__33183 = (0);
seq__32993_33155 = G__33180;
chunk__32994_33156 = G__33181;
count__32995_33157 = G__33182;
i__32996_33158 = G__33183;
continue;
}
} else {
}
}
break;
}

var G__33184 = cljs.core.next.call(null,seq__32975_33146__$1);
var G__33185 = null;
var G__33186 = (0);
var G__33187 = (0);
seq__32975_33105 = G__33184;
chunk__32976_33106 = G__33185;
count__32977_33107 = G__33186;
i__32978_33108 = G__33187;
continue;
}
} else {
}
}
break;
}

var G__33188 = cljs.core.next.call(null,seq__32939_33096__$1);
var G__33189 = null;
var G__33190 = (0);
var G__33191 = (0);
seq__32939_33001 = G__33188;
chunk__32940_33002 = G__33189;
count__32941_33003 = G__33190;
i__32942_33004 = G__33191;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map
