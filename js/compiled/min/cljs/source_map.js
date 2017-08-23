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
return cljs.core.reduce.call(null,(function (m,p__32070){
var vec__32071 = p__32070;
var i = cljs.core.nth.call(null,vec__32071,(0),null);
var v = cljs.core.nth.call(null,vec__32071,(1),null);
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
var vec__32074 = seg;
var gcol = cljs.core.nth.call(null,vec__32074,(0),null);
var source = cljs.core.nth.call(null,vec__32074,(1),null);
var line = cljs.core.nth.call(null,vec__32074,(2),null);
var col = cljs.core.nth.call(null,vec__32074,(3),null);
var name = cljs.core.nth.call(null,vec__32074,(4),null);
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
var vec__32077 = seg;
var gcol = cljs.core.nth.call(null,vec__32077,(0),null);
var source = cljs.core.nth.call(null,vec__32077,(1),null);
var line = cljs.core.nth.call(null,vec__32077,(2),null);
var col = cljs.core.nth.call(null,vec__32077,(3),null);
var name = cljs.core.nth.call(null,vec__32077,(4),null);
var vec__32080 = relseg;
var rgcol = cljs.core.nth.call(null,vec__32080,(0),null);
var rsource = cljs.core.nth.call(null,vec__32080,(1),null);
var rline = cljs.core.nth.call(null,vec__32080,(2),null);
var rcol = cljs.core.nth.call(null,vec__32080,(3),null);
var rname = cljs.core.nth.call(null,vec__32080,(4),null);
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
var map__32083 = segmap;
var map__32083__$1 = ((((!((map__32083 == null)))?((((map__32083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32083):map__32083);
var gcol = cljs.core.get.call(null,map__32083__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__32083__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__32083__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__32083__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__32083__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__32083,map__32083__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__32083,map__32083__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__32083,map__32083__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__32083,map__32083__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__32083,map__32083__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__32083,map__32083__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__32086 = arguments.length;
switch (G__32086) {
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
var vec__32087 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__32091 = cljs.core.next.call(null,segs__$1);
var G__32092 = nrelseg;
var G__32093 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__32091;
relseg__$1 = G__32092;
result__$1 = G__32093;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__32087,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__32087,(1),null);
var G__32094 = (gline + (1));
var G__32095 = cljs.core.next.call(null,lines__$1);
var G__32096 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__32097 = result__$1;
gline = G__32094;
lines__$1 = G__32095;
relseg = G__32096;
result = G__32097;
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
var map__32099 = segmap;
var map__32099__$1 = ((((!((map__32099 == null)))?((((map__32099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32099):map__32099);
var gcol = cljs.core.get.call(null,map__32099__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__32099__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__32099__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__32099__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__32099__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__32099,map__32099__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__32099,map__32099__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__32098_SHARP_){
return cljs.core.conj.call(null,p1__32098_SHARP_,d__$1);
});})(map__32099,map__32099__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__32099,map__32099__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__32102 = arguments.length;
switch (G__32102) {
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
var vec__32103 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__32107 = cljs.core.next.call(null,segs__$1);
var G__32108 = nrelseg;
var G__32109 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__32107;
relseg__$1 = G__32108;
result__$1 = G__32109;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__32103,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__32103,(1),null);
var G__32110 = (gline + (1));
var G__32111 = cljs.core.next.call(null,lines__$1);
var G__32112 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__32113 = result__$1;
gline = G__32110;
lines__$1 = G__32111;
relseg = G__32112;
result = G__32113;
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
return (function (p__32114){
var vec__32115 = p__32114;
var _ = cljs.core.nth.call(null,vec__32115,(0),null);
var source = cljs.core.nth.call(null,vec__32115,(1),null);
var line = cljs.core.nth.call(null,vec__32115,(2),null);
var col = cljs.core.nth.call(null,vec__32115,(3),null);
var name = cljs.core.nth.call(null,vec__32115,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__32118){
var vec__32119 = p__32118;
var gcol = cljs.core.nth.call(null,vec__32119,(0),null);
var sidx = cljs.core.nth.call(null,vec__32119,(1),null);
var line = cljs.core.nth.call(null,vec__32119,(2),null);
var col = cljs.core.nth.call(null,vec__32119,(3),null);
var name = cljs.core.nth.call(null,vec__32119,(4),null);
var seg = vec__32119;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__32119,gcol,sidx,line,col,name,seg,relseg){
return (function (p__32122){
var vec__32123 = p__32122;
var _ = cljs.core.nth.call(null,vec__32123,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__32123,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__32123,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__32123,(3),null);
var lname = cljs.core.nth.call(null,vec__32123,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__27195__auto__ = name;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__32119,gcol,sidx,line,col,name,seg,relseg))
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
var seq__32129 = cljs.core.seq.call(null,infos);
var chunk__32130 = null;
var count__32131 = (0);
var i__32132 = (0);
while(true){
if((i__32132 < count__32131)){
var info = cljs.core._nth.call(null,chunk__32130,i__32132);
var segv_32211 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_32212 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_32213 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_32212 > (lc_32213 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__32129,chunk__32130,count__32131,i__32132,segv_32211,gline_32212,lc_32213,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_32212 - (lc_32213 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_32211], null));
});})(seq__32129,chunk__32130,count__32131,i__32132,segv_32211,gline_32212,lc_32213,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__32129,chunk__32130,count__32131,i__32132,segv_32211,gline_32212,lc_32213,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32212], null),cljs.core.conj,segv_32211);
});})(seq__32129,chunk__32130,count__32131,i__32132,segv_32211,gline_32212,lc_32213,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__32214 = seq__32129;
var G__32215 = chunk__32130;
var G__32216 = count__32131;
var G__32217 = (i__32132 + (1));
seq__32129 = G__32214;
chunk__32130 = G__32215;
count__32131 = G__32216;
i__32132 = G__32217;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32129);
if(temp__4657__auto__){
var seq__32129__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32129__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__32129__$1);
var G__32218 = cljs.core.chunk_rest.call(null,seq__32129__$1);
var G__32219 = c__28034__auto__;
var G__32220 = cljs.core.count.call(null,c__28034__auto__);
var G__32221 = (0);
seq__32129 = G__32218;
chunk__32130 = G__32219;
count__32131 = G__32220;
i__32132 = G__32221;
continue;
} else {
var info = cljs.core.first.call(null,seq__32129__$1);
var segv_32222 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_32223 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_32224 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_32223 > (lc_32224 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__32129,chunk__32130,count__32131,i__32132,segv_32222,gline_32223,lc_32224,info,seq__32129__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_32223 - (lc_32224 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_32222], null));
});})(seq__32129,chunk__32130,count__32131,i__32132,segv_32222,gline_32223,lc_32224,info,seq__32129__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__32129,chunk__32130,count__32131,i__32132,segv_32222,gline_32223,lc_32224,info,seq__32129__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32223], null),cljs.core.conj,segv_32222);
});})(seq__32129,chunk__32130,count__32131,i__32132,segv_32222,gline_32223,lc_32224,info,seq__32129__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__32225 = cljs.core.next.call(null,seq__32129__$1);
var G__32226 = null;
var G__32227 = (0);
var G__32228 = (0);
seq__32129 = G__32225;
chunk__32130 = G__32226;
count__32131 = G__32227;
i__32132 = G__32228;
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
var seq__32133_32229 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__32134_32230 = null;
var count__32135_32231 = (0);
var i__32136_32232 = (0);
while(true){
if((i__32136_32232 < count__32135_32231)){
var vec__32137_32233 = cljs.core._nth.call(null,chunk__32134_32230,i__32136_32232);
var source_idx_32234 = cljs.core.nth.call(null,vec__32137_32233,(0),null);
var vec__32140_32235 = cljs.core.nth.call(null,vec__32137_32233,(1),null);
var __32236 = cljs.core.nth.call(null,vec__32140_32235,(0),null);
var lines_32237__$1 = cljs.core.nth.call(null,vec__32140_32235,(1),null);
var seq__32143_32238 = cljs.core.seq.call(null,lines_32237__$1);
var chunk__32144_32239 = null;
var count__32145_32240 = (0);
var i__32146_32241 = (0);
while(true){
if((i__32146_32241 < count__32145_32240)){
var vec__32147_32242 = cljs.core._nth.call(null,chunk__32144_32239,i__32146_32241);
var line_32243 = cljs.core.nth.call(null,vec__32147_32242,(0),null);
var cols_32244 = cljs.core.nth.call(null,vec__32147_32242,(1),null);
var seq__32150_32245 = cljs.core.seq.call(null,cols_32244);
var chunk__32151_32246 = null;
var count__32152_32247 = (0);
var i__32153_32248 = (0);
while(true){
if((i__32153_32248 < count__32152_32247)){
var vec__32154_32249 = cljs.core._nth.call(null,chunk__32151_32246,i__32153_32248);
var col_32250 = cljs.core.nth.call(null,vec__32154_32249,(0),null);
var infos_32251 = cljs.core.nth.call(null,vec__32154_32249,(1),null);
encode_cols.call(null,infos_32251,source_idx_32234,line_32243,col_32250);

var G__32252 = seq__32150_32245;
var G__32253 = chunk__32151_32246;
var G__32254 = count__32152_32247;
var G__32255 = (i__32153_32248 + (1));
seq__32150_32245 = G__32252;
chunk__32151_32246 = G__32253;
count__32152_32247 = G__32254;
i__32153_32248 = G__32255;
continue;
} else {
var temp__4657__auto___32256 = cljs.core.seq.call(null,seq__32150_32245);
if(temp__4657__auto___32256){
var seq__32150_32257__$1 = temp__4657__auto___32256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32150_32257__$1)){
var c__28034__auto___32258 = cljs.core.chunk_first.call(null,seq__32150_32257__$1);
var G__32259 = cljs.core.chunk_rest.call(null,seq__32150_32257__$1);
var G__32260 = c__28034__auto___32258;
var G__32261 = cljs.core.count.call(null,c__28034__auto___32258);
var G__32262 = (0);
seq__32150_32245 = G__32259;
chunk__32151_32246 = G__32260;
count__32152_32247 = G__32261;
i__32153_32248 = G__32262;
continue;
} else {
var vec__32157_32263 = cljs.core.first.call(null,seq__32150_32257__$1);
var col_32264 = cljs.core.nth.call(null,vec__32157_32263,(0),null);
var infos_32265 = cljs.core.nth.call(null,vec__32157_32263,(1),null);
encode_cols.call(null,infos_32265,source_idx_32234,line_32243,col_32264);

var G__32266 = cljs.core.next.call(null,seq__32150_32257__$1);
var G__32267 = null;
var G__32268 = (0);
var G__32269 = (0);
seq__32150_32245 = G__32266;
chunk__32151_32246 = G__32267;
count__32152_32247 = G__32268;
i__32153_32248 = G__32269;
continue;
}
} else {
}
}
break;
}

var G__32270 = seq__32143_32238;
var G__32271 = chunk__32144_32239;
var G__32272 = count__32145_32240;
var G__32273 = (i__32146_32241 + (1));
seq__32143_32238 = G__32270;
chunk__32144_32239 = G__32271;
count__32145_32240 = G__32272;
i__32146_32241 = G__32273;
continue;
} else {
var temp__4657__auto___32274 = cljs.core.seq.call(null,seq__32143_32238);
if(temp__4657__auto___32274){
var seq__32143_32275__$1 = temp__4657__auto___32274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32143_32275__$1)){
var c__28034__auto___32276 = cljs.core.chunk_first.call(null,seq__32143_32275__$1);
var G__32277 = cljs.core.chunk_rest.call(null,seq__32143_32275__$1);
var G__32278 = c__28034__auto___32276;
var G__32279 = cljs.core.count.call(null,c__28034__auto___32276);
var G__32280 = (0);
seq__32143_32238 = G__32277;
chunk__32144_32239 = G__32278;
count__32145_32240 = G__32279;
i__32146_32241 = G__32280;
continue;
} else {
var vec__32160_32281 = cljs.core.first.call(null,seq__32143_32275__$1);
var line_32282 = cljs.core.nth.call(null,vec__32160_32281,(0),null);
var cols_32283 = cljs.core.nth.call(null,vec__32160_32281,(1),null);
var seq__32163_32284 = cljs.core.seq.call(null,cols_32283);
var chunk__32164_32285 = null;
var count__32165_32286 = (0);
var i__32166_32287 = (0);
while(true){
if((i__32166_32287 < count__32165_32286)){
var vec__32167_32288 = cljs.core._nth.call(null,chunk__32164_32285,i__32166_32287);
var col_32289 = cljs.core.nth.call(null,vec__32167_32288,(0),null);
var infos_32290 = cljs.core.nth.call(null,vec__32167_32288,(1),null);
encode_cols.call(null,infos_32290,source_idx_32234,line_32282,col_32289);

var G__32291 = seq__32163_32284;
var G__32292 = chunk__32164_32285;
var G__32293 = count__32165_32286;
var G__32294 = (i__32166_32287 + (1));
seq__32163_32284 = G__32291;
chunk__32164_32285 = G__32292;
count__32165_32286 = G__32293;
i__32166_32287 = G__32294;
continue;
} else {
var temp__4657__auto___32295__$1 = cljs.core.seq.call(null,seq__32163_32284);
if(temp__4657__auto___32295__$1){
var seq__32163_32296__$1 = temp__4657__auto___32295__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32163_32296__$1)){
var c__28034__auto___32297 = cljs.core.chunk_first.call(null,seq__32163_32296__$1);
var G__32298 = cljs.core.chunk_rest.call(null,seq__32163_32296__$1);
var G__32299 = c__28034__auto___32297;
var G__32300 = cljs.core.count.call(null,c__28034__auto___32297);
var G__32301 = (0);
seq__32163_32284 = G__32298;
chunk__32164_32285 = G__32299;
count__32165_32286 = G__32300;
i__32166_32287 = G__32301;
continue;
} else {
var vec__32170_32302 = cljs.core.first.call(null,seq__32163_32296__$1);
var col_32303 = cljs.core.nth.call(null,vec__32170_32302,(0),null);
var infos_32304 = cljs.core.nth.call(null,vec__32170_32302,(1),null);
encode_cols.call(null,infos_32304,source_idx_32234,line_32282,col_32303);

var G__32305 = cljs.core.next.call(null,seq__32163_32296__$1);
var G__32306 = null;
var G__32307 = (0);
var G__32308 = (0);
seq__32163_32284 = G__32305;
chunk__32164_32285 = G__32306;
count__32165_32286 = G__32307;
i__32166_32287 = G__32308;
continue;
}
} else {
}
}
break;
}

var G__32309 = cljs.core.next.call(null,seq__32143_32275__$1);
var G__32310 = null;
var G__32311 = (0);
var G__32312 = (0);
seq__32143_32238 = G__32309;
chunk__32144_32239 = G__32310;
count__32145_32240 = G__32311;
i__32146_32241 = G__32312;
continue;
}
} else {
}
}
break;
}

var G__32313 = seq__32133_32229;
var G__32314 = chunk__32134_32230;
var G__32315 = count__32135_32231;
var G__32316 = (i__32136_32232 + (1));
seq__32133_32229 = G__32313;
chunk__32134_32230 = G__32314;
count__32135_32231 = G__32315;
i__32136_32232 = G__32316;
continue;
} else {
var temp__4657__auto___32317 = cljs.core.seq.call(null,seq__32133_32229);
if(temp__4657__auto___32317){
var seq__32133_32318__$1 = temp__4657__auto___32317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32133_32318__$1)){
var c__28034__auto___32319 = cljs.core.chunk_first.call(null,seq__32133_32318__$1);
var G__32320 = cljs.core.chunk_rest.call(null,seq__32133_32318__$1);
var G__32321 = c__28034__auto___32319;
var G__32322 = cljs.core.count.call(null,c__28034__auto___32319);
var G__32323 = (0);
seq__32133_32229 = G__32320;
chunk__32134_32230 = G__32321;
count__32135_32231 = G__32322;
i__32136_32232 = G__32323;
continue;
} else {
var vec__32173_32324 = cljs.core.first.call(null,seq__32133_32318__$1);
var source_idx_32325 = cljs.core.nth.call(null,vec__32173_32324,(0),null);
var vec__32176_32326 = cljs.core.nth.call(null,vec__32173_32324,(1),null);
var __32327 = cljs.core.nth.call(null,vec__32176_32326,(0),null);
var lines_32328__$1 = cljs.core.nth.call(null,vec__32176_32326,(1),null);
var seq__32179_32329 = cljs.core.seq.call(null,lines_32328__$1);
var chunk__32180_32330 = null;
var count__32181_32331 = (0);
var i__32182_32332 = (0);
while(true){
if((i__32182_32332 < count__32181_32331)){
var vec__32183_32333 = cljs.core._nth.call(null,chunk__32180_32330,i__32182_32332);
var line_32334 = cljs.core.nth.call(null,vec__32183_32333,(0),null);
var cols_32335 = cljs.core.nth.call(null,vec__32183_32333,(1),null);
var seq__32186_32336 = cljs.core.seq.call(null,cols_32335);
var chunk__32187_32337 = null;
var count__32188_32338 = (0);
var i__32189_32339 = (0);
while(true){
if((i__32189_32339 < count__32188_32338)){
var vec__32190_32340 = cljs.core._nth.call(null,chunk__32187_32337,i__32189_32339);
var col_32341 = cljs.core.nth.call(null,vec__32190_32340,(0),null);
var infos_32342 = cljs.core.nth.call(null,vec__32190_32340,(1),null);
encode_cols.call(null,infos_32342,source_idx_32325,line_32334,col_32341);

var G__32343 = seq__32186_32336;
var G__32344 = chunk__32187_32337;
var G__32345 = count__32188_32338;
var G__32346 = (i__32189_32339 + (1));
seq__32186_32336 = G__32343;
chunk__32187_32337 = G__32344;
count__32188_32338 = G__32345;
i__32189_32339 = G__32346;
continue;
} else {
var temp__4657__auto___32347__$1 = cljs.core.seq.call(null,seq__32186_32336);
if(temp__4657__auto___32347__$1){
var seq__32186_32348__$1 = temp__4657__auto___32347__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32186_32348__$1)){
var c__28034__auto___32349 = cljs.core.chunk_first.call(null,seq__32186_32348__$1);
var G__32350 = cljs.core.chunk_rest.call(null,seq__32186_32348__$1);
var G__32351 = c__28034__auto___32349;
var G__32352 = cljs.core.count.call(null,c__28034__auto___32349);
var G__32353 = (0);
seq__32186_32336 = G__32350;
chunk__32187_32337 = G__32351;
count__32188_32338 = G__32352;
i__32189_32339 = G__32353;
continue;
} else {
var vec__32193_32354 = cljs.core.first.call(null,seq__32186_32348__$1);
var col_32355 = cljs.core.nth.call(null,vec__32193_32354,(0),null);
var infos_32356 = cljs.core.nth.call(null,vec__32193_32354,(1),null);
encode_cols.call(null,infos_32356,source_idx_32325,line_32334,col_32355);

var G__32357 = cljs.core.next.call(null,seq__32186_32348__$1);
var G__32358 = null;
var G__32359 = (0);
var G__32360 = (0);
seq__32186_32336 = G__32357;
chunk__32187_32337 = G__32358;
count__32188_32338 = G__32359;
i__32189_32339 = G__32360;
continue;
}
} else {
}
}
break;
}

var G__32361 = seq__32179_32329;
var G__32362 = chunk__32180_32330;
var G__32363 = count__32181_32331;
var G__32364 = (i__32182_32332 + (1));
seq__32179_32329 = G__32361;
chunk__32180_32330 = G__32362;
count__32181_32331 = G__32363;
i__32182_32332 = G__32364;
continue;
} else {
var temp__4657__auto___32365__$1 = cljs.core.seq.call(null,seq__32179_32329);
if(temp__4657__auto___32365__$1){
var seq__32179_32366__$1 = temp__4657__auto___32365__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32179_32366__$1)){
var c__28034__auto___32367 = cljs.core.chunk_first.call(null,seq__32179_32366__$1);
var G__32368 = cljs.core.chunk_rest.call(null,seq__32179_32366__$1);
var G__32369 = c__28034__auto___32367;
var G__32370 = cljs.core.count.call(null,c__28034__auto___32367);
var G__32371 = (0);
seq__32179_32329 = G__32368;
chunk__32180_32330 = G__32369;
count__32181_32331 = G__32370;
i__32182_32332 = G__32371;
continue;
} else {
var vec__32196_32372 = cljs.core.first.call(null,seq__32179_32366__$1);
var line_32373 = cljs.core.nth.call(null,vec__32196_32372,(0),null);
var cols_32374 = cljs.core.nth.call(null,vec__32196_32372,(1),null);
var seq__32199_32375 = cljs.core.seq.call(null,cols_32374);
var chunk__32200_32376 = null;
var count__32201_32377 = (0);
var i__32202_32378 = (0);
while(true){
if((i__32202_32378 < count__32201_32377)){
var vec__32203_32379 = cljs.core._nth.call(null,chunk__32200_32376,i__32202_32378);
var col_32380 = cljs.core.nth.call(null,vec__32203_32379,(0),null);
var infos_32381 = cljs.core.nth.call(null,vec__32203_32379,(1),null);
encode_cols.call(null,infos_32381,source_idx_32325,line_32373,col_32380);

var G__32382 = seq__32199_32375;
var G__32383 = chunk__32200_32376;
var G__32384 = count__32201_32377;
var G__32385 = (i__32202_32378 + (1));
seq__32199_32375 = G__32382;
chunk__32200_32376 = G__32383;
count__32201_32377 = G__32384;
i__32202_32378 = G__32385;
continue;
} else {
var temp__4657__auto___32386__$2 = cljs.core.seq.call(null,seq__32199_32375);
if(temp__4657__auto___32386__$2){
var seq__32199_32387__$1 = temp__4657__auto___32386__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32199_32387__$1)){
var c__28034__auto___32388 = cljs.core.chunk_first.call(null,seq__32199_32387__$1);
var G__32389 = cljs.core.chunk_rest.call(null,seq__32199_32387__$1);
var G__32390 = c__28034__auto___32388;
var G__32391 = cljs.core.count.call(null,c__28034__auto___32388);
var G__32392 = (0);
seq__32199_32375 = G__32389;
chunk__32200_32376 = G__32390;
count__32201_32377 = G__32391;
i__32202_32378 = G__32392;
continue;
} else {
var vec__32206_32393 = cljs.core.first.call(null,seq__32199_32387__$1);
var col_32394 = cljs.core.nth.call(null,vec__32206_32393,(0),null);
var infos_32395 = cljs.core.nth.call(null,vec__32206_32393,(1),null);
encode_cols.call(null,infos_32395,source_idx_32325,line_32373,col_32394);

var G__32396 = cljs.core.next.call(null,seq__32199_32387__$1);
var G__32397 = null;
var G__32398 = (0);
var G__32399 = (0);
seq__32199_32375 = G__32396;
chunk__32200_32376 = G__32397;
count__32201_32377 = G__32398;
i__32202_32378 = G__32399;
continue;
}
} else {
}
}
break;
}

var G__32400 = cljs.core.next.call(null,seq__32179_32366__$1);
var G__32401 = null;
var G__32402 = (0);
var G__32403 = (0);
seq__32179_32329 = G__32400;
chunk__32180_32330 = G__32401;
count__32181_32331 = G__32402;
i__32182_32332 = G__32403;
continue;
}
} else {
}
}
break;
}

var G__32404 = cljs.core.next.call(null,seq__32133_32318__$1);
var G__32405 = null;
var G__32406 = (0);
var G__32407 = (0);
seq__32133_32229 = G__32404;
chunk__32134_32230 = G__32405;
count__32135_32231 = G__32406;
i__32136_32232 = G__32407;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__32209 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__32126_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32126_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__32127_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__32127_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__32128_SHARP_){
return clojure.string.join.call(null,",",p1__32128_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__32210 = G__32209;
goog.object.set(G__32210,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__32210;
} else {
return G__32209;
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
var vec__32408 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__32408,(0),null);
var col_map = cljs.core.nth.call(null,vec__32408,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__32411 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__32411,(0),null);
var infos = cljs.core.nth.call(null,vec__32411,(1),null);
var G__32417 = cljs.core.next.call(null,col_map_seq);
var G__32418 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__32411,col,infos,vec__32408,line,col_map){
return (function (v,p__32414){
var map__32415 = p__32414;
var map__32415__$1 = ((((!((map__32415 == null)))?((((map__32415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32415.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32415):map__32415);
var gline = cljs.core.get.call(null,map__32415__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__32415__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__32411,col,infos,vec__32408,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__32417;
new_cols = G__32418;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__32419 = cljs.core.next.call(null,line_map_seq);
var G__32420 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__32419;
new_lines = G__32420;
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
var seq__32421_32483 = cljs.core.seq.call(null,reverse_map);
var chunk__32422_32484 = null;
var count__32423_32485 = (0);
var i__32424_32486 = (0);
while(true){
if((i__32424_32486 < count__32423_32485)){
var vec__32425_32487 = cljs.core._nth.call(null,chunk__32422_32484,i__32424_32486);
var line_32488 = cljs.core.nth.call(null,vec__32425_32487,(0),null);
var columns_32489 = cljs.core.nth.call(null,vec__32425_32487,(1),null);
var seq__32428_32490 = cljs.core.seq.call(null,columns_32489);
var chunk__32429_32491 = null;
var count__32430_32492 = (0);
var i__32431_32493 = (0);
while(true){
if((i__32431_32493 < count__32430_32492)){
var vec__32432_32494 = cljs.core._nth.call(null,chunk__32429_32491,i__32431_32493);
var column_32495 = cljs.core.nth.call(null,vec__32432_32494,(0),null);
var column_info_32496 = cljs.core.nth.call(null,vec__32432_32494,(1),null);
var seq__32435_32497 = cljs.core.seq.call(null,column_info_32496);
var chunk__32436_32498 = null;
var count__32437_32499 = (0);
var i__32438_32500 = (0);
while(true){
if((i__32438_32500 < count__32437_32499)){
var map__32439_32501 = cljs.core._nth.call(null,chunk__32436_32498,i__32438_32500);
var map__32439_32502__$1 = ((((!((map__32439_32501 == null)))?((((map__32439_32501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32439_32501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32439_32501):map__32439_32501);
var gline_32503 = cljs.core.get.call(null,map__32439_32502__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_32504 = cljs.core.get.call(null,map__32439_32502__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_32505 = cljs.core.get.call(null,map__32439_32502__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32503], null),cljs.core.fnil.call(null,((function (seq__32435_32497,chunk__32436_32498,count__32437_32499,i__32438_32500,seq__32428_32490,chunk__32429_32491,count__32430_32492,i__32431_32493,seq__32421_32483,chunk__32422_32484,count__32423_32485,i__32424_32486,map__32439_32501,map__32439_32502__$1,gline_32503,gcol_32504,name_32505,vec__32432_32494,column_32495,column_info_32496,vec__32425_32487,line_32488,columns_32489,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_32504], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_32488,new cljs.core.Keyword(null,"col","col",-1959363084),column_32495,new cljs.core.Keyword(null,"name","name",1843675177),name_32505], null));
});})(seq__32435_32497,chunk__32436_32498,count__32437_32499,i__32438_32500,seq__32428_32490,chunk__32429_32491,count__32430_32492,i__32431_32493,seq__32421_32483,chunk__32422_32484,count__32423_32485,i__32424_32486,map__32439_32501,map__32439_32502__$1,gline_32503,gcol_32504,name_32505,vec__32432_32494,column_32495,column_info_32496,vec__32425_32487,line_32488,columns_32489,inverted))
,cljs.core.sorted_map.call(null)));

var G__32506 = seq__32435_32497;
var G__32507 = chunk__32436_32498;
var G__32508 = count__32437_32499;
var G__32509 = (i__32438_32500 + (1));
seq__32435_32497 = G__32506;
chunk__32436_32498 = G__32507;
count__32437_32499 = G__32508;
i__32438_32500 = G__32509;
continue;
} else {
var temp__4657__auto___32510 = cljs.core.seq.call(null,seq__32435_32497);
if(temp__4657__auto___32510){
var seq__32435_32511__$1 = temp__4657__auto___32510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32435_32511__$1)){
var c__28034__auto___32512 = cljs.core.chunk_first.call(null,seq__32435_32511__$1);
var G__32513 = cljs.core.chunk_rest.call(null,seq__32435_32511__$1);
var G__32514 = c__28034__auto___32512;
var G__32515 = cljs.core.count.call(null,c__28034__auto___32512);
var G__32516 = (0);
seq__32435_32497 = G__32513;
chunk__32436_32498 = G__32514;
count__32437_32499 = G__32515;
i__32438_32500 = G__32516;
continue;
} else {
var map__32441_32517 = cljs.core.first.call(null,seq__32435_32511__$1);
var map__32441_32518__$1 = ((((!((map__32441_32517 == null)))?((((map__32441_32517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32441_32517.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32441_32517):map__32441_32517);
var gline_32519 = cljs.core.get.call(null,map__32441_32518__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_32520 = cljs.core.get.call(null,map__32441_32518__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_32521 = cljs.core.get.call(null,map__32441_32518__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32519], null),cljs.core.fnil.call(null,((function (seq__32435_32497,chunk__32436_32498,count__32437_32499,i__32438_32500,seq__32428_32490,chunk__32429_32491,count__32430_32492,i__32431_32493,seq__32421_32483,chunk__32422_32484,count__32423_32485,i__32424_32486,map__32441_32517,map__32441_32518__$1,gline_32519,gcol_32520,name_32521,seq__32435_32511__$1,temp__4657__auto___32510,vec__32432_32494,column_32495,column_info_32496,vec__32425_32487,line_32488,columns_32489,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_32520], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_32488,new cljs.core.Keyword(null,"col","col",-1959363084),column_32495,new cljs.core.Keyword(null,"name","name",1843675177),name_32521], null));
});})(seq__32435_32497,chunk__32436_32498,count__32437_32499,i__32438_32500,seq__32428_32490,chunk__32429_32491,count__32430_32492,i__32431_32493,seq__32421_32483,chunk__32422_32484,count__32423_32485,i__32424_32486,map__32441_32517,map__32441_32518__$1,gline_32519,gcol_32520,name_32521,seq__32435_32511__$1,temp__4657__auto___32510,vec__32432_32494,column_32495,column_info_32496,vec__32425_32487,line_32488,columns_32489,inverted))
,cljs.core.sorted_map.call(null)));

var G__32522 = cljs.core.next.call(null,seq__32435_32511__$1);
var G__32523 = null;
var G__32524 = (0);
var G__32525 = (0);
seq__32435_32497 = G__32522;
chunk__32436_32498 = G__32523;
count__32437_32499 = G__32524;
i__32438_32500 = G__32525;
continue;
}
} else {
}
}
break;
}

var G__32526 = seq__32428_32490;
var G__32527 = chunk__32429_32491;
var G__32528 = count__32430_32492;
var G__32529 = (i__32431_32493 + (1));
seq__32428_32490 = G__32526;
chunk__32429_32491 = G__32527;
count__32430_32492 = G__32528;
i__32431_32493 = G__32529;
continue;
} else {
var temp__4657__auto___32530 = cljs.core.seq.call(null,seq__32428_32490);
if(temp__4657__auto___32530){
var seq__32428_32531__$1 = temp__4657__auto___32530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32428_32531__$1)){
var c__28034__auto___32532 = cljs.core.chunk_first.call(null,seq__32428_32531__$1);
var G__32533 = cljs.core.chunk_rest.call(null,seq__32428_32531__$1);
var G__32534 = c__28034__auto___32532;
var G__32535 = cljs.core.count.call(null,c__28034__auto___32532);
var G__32536 = (0);
seq__32428_32490 = G__32533;
chunk__32429_32491 = G__32534;
count__32430_32492 = G__32535;
i__32431_32493 = G__32536;
continue;
} else {
var vec__32443_32537 = cljs.core.first.call(null,seq__32428_32531__$1);
var column_32538 = cljs.core.nth.call(null,vec__32443_32537,(0),null);
var column_info_32539 = cljs.core.nth.call(null,vec__32443_32537,(1),null);
var seq__32446_32540 = cljs.core.seq.call(null,column_info_32539);
var chunk__32447_32541 = null;
var count__32448_32542 = (0);
var i__32449_32543 = (0);
while(true){
if((i__32449_32543 < count__32448_32542)){
var map__32450_32544 = cljs.core._nth.call(null,chunk__32447_32541,i__32449_32543);
var map__32450_32545__$1 = ((((!((map__32450_32544 == null)))?((((map__32450_32544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32450_32544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32450_32544):map__32450_32544);
var gline_32546 = cljs.core.get.call(null,map__32450_32545__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_32547 = cljs.core.get.call(null,map__32450_32545__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_32548 = cljs.core.get.call(null,map__32450_32545__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32546], null),cljs.core.fnil.call(null,((function (seq__32446_32540,chunk__32447_32541,count__32448_32542,i__32449_32543,seq__32428_32490,chunk__32429_32491,count__32430_32492,i__32431_32493,seq__32421_32483,chunk__32422_32484,count__32423_32485,i__32424_32486,map__32450_32544,map__32450_32545__$1,gline_32546,gcol_32547,name_32548,vec__32443_32537,column_32538,column_info_32539,seq__32428_32531__$1,temp__4657__auto___32530,vec__32425_32487,line_32488,columns_32489,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_32547], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_32488,new cljs.core.Keyword(null,"col","col",-1959363084),column_32538,new cljs.core.Keyword(null,"name","name",1843675177),name_32548], null));
});})(seq__32446_32540,chunk__32447_32541,count__32448_32542,i__32449_32543,seq__32428_32490,chunk__32429_32491,count__32430_32492,i__32431_32493,seq__32421_32483,chunk__32422_32484,count__32423_32485,i__32424_32486,map__32450_32544,map__32450_32545__$1,gline_32546,gcol_32547,name_32548,vec__32443_32537,column_32538,column_info_32539,seq__32428_32531__$1,temp__4657__auto___32530,vec__32425_32487,line_32488,columns_32489,inverted))
,cljs.core.sorted_map.call(null)));

var G__32549 = seq__32446_32540;
var G__32550 = chunk__32447_32541;
var G__32551 = count__32448_32542;
var G__32552 = (i__32449_32543 + (1));
seq__32446_32540 = G__32549;
chunk__32447_32541 = G__32550;
count__32448_32542 = G__32551;
i__32449_32543 = G__32552;
continue;
} else {
var temp__4657__auto___32553__$1 = cljs.core.seq.call(null,seq__32446_32540);
if(temp__4657__auto___32553__$1){
var seq__32446_32554__$1 = temp__4657__auto___32553__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32446_32554__$1)){
var c__28034__auto___32555 = cljs.core.chunk_first.call(null,seq__32446_32554__$1);
var G__32556 = cljs.core.chunk_rest.call(null,seq__32446_32554__$1);
var G__32557 = c__28034__auto___32555;
var G__32558 = cljs.core.count.call(null,c__28034__auto___32555);
var G__32559 = (0);
seq__32446_32540 = G__32556;
chunk__32447_32541 = G__32557;
count__32448_32542 = G__32558;
i__32449_32543 = G__32559;
continue;
} else {
var map__32452_32560 = cljs.core.first.call(null,seq__32446_32554__$1);
var map__32452_32561__$1 = ((((!((map__32452_32560 == null)))?((((map__32452_32560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32452_32560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32452_32560):map__32452_32560);
var gline_32562 = cljs.core.get.call(null,map__32452_32561__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_32563 = cljs.core.get.call(null,map__32452_32561__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_32564 = cljs.core.get.call(null,map__32452_32561__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32562], null),cljs.core.fnil.call(null,((function (seq__32446_32540,chunk__32447_32541,count__32448_32542,i__32449_32543,seq__32428_32490,chunk__32429_32491,count__32430_32492,i__32431_32493,seq__32421_32483,chunk__32422_32484,count__32423_32485,i__32424_32486,map__32452_32560,map__32452_32561__$1,gline_32562,gcol_32563,name_32564,seq__32446_32554__$1,temp__4657__auto___32553__$1,vec__32443_32537,column_32538,column_info_32539,seq__32428_32531__$1,temp__4657__auto___32530,vec__32425_32487,line_32488,columns_32489,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_32563], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_32488,new cljs.core.Keyword(null,"col","col",-1959363084),column_32538,new cljs.core.Keyword(null,"name","name",1843675177),name_32564], null));
});})(seq__32446_32540,chunk__32447_32541,count__32448_32542,i__32449_32543,seq__32428_32490,chunk__32429_32491,count__32430_32492,i__32431_32493,seq__32421_32483,chunk__32422_32484,count__32423_32485,i__32424_32486,map__32452_32560,map__32452_32561__$1,gline_32562,gcol_32563,name_32564,seq__32446_32554__$1,temp__4657__auto___32553__$1,vec__32443_32537,column_32538,column_info_32539,seq__32428_32531__$1,temp__4657__auto___32530,vec__32425_32487,line_32488,columns_32489,inverted))
,cljs.core.sorted_map.call(null)));

var G__32565 = cljs.core.next.call(null,seq__32446_32554__$1);
var G__32566 = null;
var G__32567 = (0);
var G__32568 = (0);
seq__32446_32540 = G__32565;
chunk__32447_32541 = G__32566;
count__32448_32542 = G__32567;
i__32449_32543 = G__32568;
continue;
}
} else {
}
}
break;
}

var G__32569 = cljs.core.next.call(null,seq__32428_32531__$1);
var G__32570 = null;
var G__32571 = (0);
var G__32572 = (0);
seq__32428_32490 = G__32569;
chunk__32429_32491 = G__32570;
count__32430_32492 = G__32571;
i__32431_32493 = G__32572;
continue;
}
} else {
}
}
break;
}

var G__32573 = seq__32421_32483;
var G__32574 = chunk__32422_32484;
var G__32575 = count__32423_32485;
var G__32576 = (i__32424_32486 + (1));
seq__32421_32483 = G__32573;
chunk__32422_32484 = G__32574;
count__32423_32485 = G__32575;
i__32424_32486 = G__32576;
continue;
} else {
var temp__4657__auto___32577 = cljs.core.seq.call(null,seq__32421_32483);
if(temp__4657__auto___32577){
var seq__32421_32578__$1 = temp__4657__auto___32577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32421_32578__$1)){
var c__28034__auto___32579 = cljs.core.chunk_first.call(null,seq__32421_32578__$1);
var G__32580 = cljs.core.chunk_rest.call(null,seq__32421_32578__$1);
var G__32581 = c__28034__auto___32579;
var G__32582 = cljs.core.count.call(null,c__28034__auto___32579);
var G__32583 = (0);
seq__32421_32483 = G__32580;
chunk__32422_32484 = G__32581;
count__32423_32485 = G__32582;
i__32424_32486 = G__32583;
continue;
} else {
var vec__32454_32584 = cljs.core.first.call(null,seq__32421_32578__$1);
var line_32585 = cljs.core.nth.call(null,vec__32454_32584,(0),null);
var columns_32586 = cljs.core.nth.call(null,vec__32454_32584,(1),null);
var seq__32457_32587 = cljs.core.seq.call(null,columns_32586);
var chunk__32458_32588 = null;
var count__32459_32589 = (0);
var i__32460_32590 = (0);
while(true){
if((i__32460_32590 < count__32459_32589)){
var vec__32461_32591 = cljs.core._nth.call(null,chunk__32458_32588,i__32460_32590);
var column_32592 = cljs.core.nth.call(null,vec__32461_32591,(0),null);
var column_info_32593 = cljs.core.nth.call(null,vec__32461_32591,(1),null);
var seq__32464_32594 = cljs.core.seq.call(null,column_info_32593);
var chunk__32465_32595 = null;
var count__32466_32596 = (0);
var i__32467_32597 = (0);
while(true){
if((i__32467_32597 < count__32466_32596)){
var map__32468_32598 = cljs.core._nth.call(null,chunk__32465_32595,i__32467_32597);
var map__32468_32599__$1 = ((((!((map__32468_32598 == null)))?((((map__32468_32598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32468_32598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32468_32598):map__32468_32598);
var gline_32600 = cljs.core.get.call(null,map__32468_32599__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_32601 = cljs.core.get.call(null,map__32468_32599__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_32602 = cljs.core.get.call(null,map__32468_32599__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32600], null),cljs.core.fnil.call(null,((function (seq__32464_32594,chunk__32465_32595,count__32466_32596,i__32467_32597,seq__32457_32587,chunk__32458_32588,count__32459_32589,i__32460_32590,seq__32421_32483,chunk__32422_32484,count__32423_32485,i__32424_32486,map__32468_32598,map__32468_32599__$1,gline_32600,gcol_32601,name_32602,vec__32461_32591,column_32592,column_info_32593,vec__32454_32584,line_32585,columns_32586,seq__32421_32578__$1,temp__4657__auto___32577,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_32601], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_32585,new cljs.core.Keyword(null,"col","col",-1959363084),column_32592,new cljs.core.Keyword(null,"name","name",1843675177),name_32602], null));
});})(seq__32464_32594,chunk__32465_32595,count__32466_32596,i__32467_32597,seq__32457_32587,chunk__32458_32588,count__32459_32589,i__32460_32590,seq__32421_32483,chunk__32422_32484,count__32423_32485,i__32424_32486,map__32468_32598,map__32468_32599__$1,gline_32600,gcol_32601,name_32602,vec__32461_32591,column_32592,column_info_32593,vec__32454_32584,line_32585,columns_32586,seq__32421_32578__$1,temp__4657__auto___32577,inverted))
,cljs.core.sorted_map.call(null)));

var G__32603 = seq__32464_32594;
var G__32604 = chunk__32465_32595;
var G__32605 = count__32466_32596;
var G__32606 = (i__32467_32597 + (1));
seq__32464_32594 = G__32603;
chunk__32465_32595 = G__32604;
count__32466_32596 = G__32605;
i__32467_32597 = G__32606;
continue;
} else {
var temp__4657__auto___32607__$1 = cljs.core.seq.call(null,seq__32464_32594);
if(temp__4657__auto___32607__$1){
var seq__32464_32608__$1 = temp__4657__auto___32607__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32464_32608__$1)){
var c__28034__auto___32609 = cljs.core.chunk_first.call(null,seq__32464_32608__$1);
var G__32610 = cljs.core.chunk_rest.call(null,seq__32464_32608__$1);
var G__32611 = c__28034__auto___32609;
var G__32612 = cljs.core.count.call(null,c__28034__auto___32609);
var G__32613 = (0);
seq__32464_32594 = G__32610;
chunk__32465_32595 = G__32611;
count__32466_32596 = G__32612;
i__32467_32597 = G__32613;
continue;
} else {
var map__32470_32614 = cljs.core.first.call(null,seq__32464_32608__$1);
var map__32470_32615__$1 = ((((!((map__32470_32614 == null)))?((((map__32470_32614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32470_32614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32470_32614):map__32470_32614);
var gline_32616 = cljs.core.get.call(null,map__32470_32615__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_32617 = cljs.core.get.call(null,map__32470_32615__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_32618 = cljs.core.get.call(null,map__32470_32615__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32616], null),cljs.core.fnil.call(null,((function (seq__32464_32594,chunk__32465_32595,count__32466_32596,i__32467_32597,seq__32457_32587,chunk__32458_32588,count__32459_32589,i__32460_32590,seq__32421_32483,chunk__32422_32484,count__32423_32485,i__32424_32486,map__32470_32614,map__32470_32615__$1,gline_32616,gcol_32617,name_32618,seq__32464_32608__$1,temp__4657__auto___32607__$1,vec__32461_32591,column_32592,column_info_32593,vec__32454_32584,line_32585,columns_32586,seq__32421_32578__$1,temp__4657__auto___32577,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_32617], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_32585,new cljs.core.Keyword(null,"col","col",-1959363084),column_32592,new cljs.core.Keyword(null,"name","name",1843675177),name_32618], null));
});})(seq__32464_32594,chunk__32465_32595,count__32466_32596,i__32467_32597,seq__32457_32587,chunk__32458_32588,count__32459_32589,i__32460_32590,seq__32421_32483,chunk__32422_32484,count__32423_32485,i__32424_32486,map__32470_32614,map__32470_32615__$1,gline_32616,gcol_32617,name_32618,seq__32464_32608__$1,temp__4657__auto___32607__$1,vec__32461_32591,column_32592,column_info_32593,vec__32454_32584,line_32585,columns_32586,seq__32421_32578__$1,temp__4657__auto___32577,inverted))
,cljs.core.sorted_map.call(null)));

var G__32619 = cljs.core.next.call(null,seq__32464_32608__$1);
var G__32620 = null;
var G__32621 = (0);
var G__32622 = (0);
seq__32464_32594 = G__32619;
chunk__32465_32595 = G__32620;
count__32466_32596 = G__32621;
i__32467_32597 = G__32622;
continue;
}
} else {
}
}
break;
}

var G__32623 = seq__32457_32587;
var G__32624 = chunk__32458_32588;
var G__32625 = count__32459_32589;
var G__32626 = (i__32460_32590 + (1));
seq__32457_32587 = G__32623;
chunk__32458_32588 = G__32624;
count__32459_32589 = G__32625;
i__32460_32590 = G__32626;
continue;
} else {
var temp__4657__auto___32627__$1 = cljs.core.seq.call(null,seq__32457_32587);
if(temp__4657__auto___32627__$1){
var seq__32457_32628__$1 = temp__4657__auto___32627__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32457_32628__$1)){
var c__28034__auto___32629 = cljs.core.chunk_first.call(null,seq__32457_32628__$1);
var G__32630 = cljs.core.chunk_rest.call(null,seq__32457_32628__$1);
var G__32631 = c__28034__auto___32629;
var G__32632 = cljs.core.count.call(null,c__28034__auto___32629);
var G__32633 = (0);
seq__32457_32587 = G__32630;
chunk__32458_32588 = G__32631;
count__32459_32589 = G__32632;
i__32460_32590 = G__32633;
continue;
} else {
var vec__32472_32634 = cljs.core.first.call(null,seq__32457_32628__$1);
var column_32635 = cljs.core.nth.call(null,vec__32472_32634,(0),null);
var column_info_32636 = cljs.core.nth.call(null,vec__32472_32634,(1),null);
var seq__32475_32637 = cljs.core.seq.call(null,column_info_32636);
var chunk__32476_32638 = null;
var count__32477_32639 = (0);
var i__32478_32640 = (0);
while(true){
if((i__32478_32640 < count__32477_32639)){
var map__32479_32641 = cljs.core._nth.call(null,chunk__32476_32638,i__32478_32640);
var map__32479_32642__$1 = ((((!((map__32479_32641 == null)))?((((map__32479_32641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32479_32641.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32479_32641):map__32479_32641);
var gline_32643 = cljs.core.get.call(null,map__32479_32642__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_32644 = cljs.core.get.call(null,map__32479_32642__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_32645 = cljs.core.get.call(null,map__32479_32642__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32643], null),cljs.core.fnil.call(null,((function (seq__32475_32637,chunk__32476_32638,count__32477_32639,i__32478_32640,seq__32457_32587,chunk__32458_32588,count__32459_32589,i__32460_32590,seq__32421_32483,chunk__32422_32484,count__32423_32485,i__32424_32486,map__32479_32641,map__32479_32642__$1,gline_32643,gcol_32644,name_32645,vec__32472_32634,column_32635,column_info_32636,seq__32457_32628__$1,temp__4657__auto___32627__$1,vec__32454_32584,line_32585,columns_32586,seq__32421_32578__$1,temp__4657__auto___32577,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_32644], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_32585,new cljs.core.Keyword(null,"col","col",-1959363084),column_32635,new cljs.core.Keyword(null,"name","name",1843675177),name_32645], null));
});})(seq__32475_32637,chunk__32476_32638,count__32477_32639,i__32478_32640,seq__32457_32587,chunk__32458_32588,count__32459_32589,i__32460_32590,seq__32421_32483,chunk__32422_32484,count__32423_32485,i__32424_32486,map__32479_32641,map__32479_32642__$1,gline_32643,gcol_32644,name_32645,vec__32472_32634,column_32635,column_info_32636,seq__32457_32628__$1,temp__4657__auto___32627__$1,vec__32454_32584,line_32585,columns_32586,seq__32421_32578__$1,temp__4657__auto___32577,inverted))
,cljs.core.sorted_map.call(null)));

var G__32646 = seq__32475_32637;
var G__32647 = chunk__32476_32638;
var G__32648 = count__32477_32639;
var G__32649 = (i__32478_32640 + (1));
seq__32475_32637 = G__32646;
chunk__32476_32638 = G__32647;
count__32477_32639 = G__32648;
i__32478_32640 = G__32649;
continue;
} else {
var temp__4657__auto___32650__$2 = cljs.core.seq.call(null,seq__32475_32637);
if(temp__4657__auto___32650__$2){
var seq__32475_32651__$1 = temp__4657__auto___32650__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32475_32651__$1)){
var c__28034__auto___32652 = cljs.core.chunk_first.call(null,seq__32475_32651__$1);
var G__32653 = cljs.core.chunk_rest.call(null,seq__32475_32651__$1);
var G__32654 = c__28034__auto___32652;
var G__32655 = cljs.core.count.call(null,c__28034__auto___32652);
var G__32656 = (0);
seq__32475_32637 = G__32653;
chunk__32476_32638 = G__32654;
count__32477_32639 = G__32655;
i__32478_32640 = G__32656;
continue;
} else {
var map__32481_32657 = cljs.core.first.call(null,seq__32475_32651__$1);
var map__32481_32658__$1 = ((((!((map__32481_32657 == null)))?((((map__32481_32657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32481_32657.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32481_32657):map__32481_32657);
var gline_32659 = cljs.core.get.call(null,map__32481_32658__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_32660 = cljs.core.get.call(null,map__32481_32658__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_32661 = cljs.core.get.call(null,map__32481_32658__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32659], null),cljs.core.fnil.call(null,((function (seq__32475_32637,chunk__32476_32638,count__32477_32639,i__32478_32640,seq__32457_32587,chunk__32458_32588,count__32459_32589,i__32460_32590,seq__32421_32483,chunk__32422_32484,count__32423_32485,i__32424_32486,map__32481_32657,map__32481_32658__$1,gline_32659,gcol_32660,name_32661,seq__32475_32651__$1,temp__4657__auto___32650__$2,vec__32472_32634,column_32635,column_info_32636,seq__32457_32628__$1,temp__4657__auto___32627__$1,vec__32454_32584,line_32585,columns_32586,seq__32421_32578__$1,temp__4657__auto___32577,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_32660], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_32585,new cljs.core.Keyword(null,"col","col",-1959363084),column_32635,new cljs.core.Keyword(null,"name","name",1843675177),name_32661], null));
});})(seq__32475_32637,chunk__32476_32638,count__32477_32639,i__32478_32640,seq__32457_32587,chunk__32458_32588,count__32459_32589,i__32460_32590,seq__32421_32483,chunk__32422_32484,count__32423_32485,i__32424_32486,map__32481_32657,map__32481_32658__$1,gline_32659,gcol_32660,name_32661,seq__32475_32651__$1,temp__4657__auto___32650__$2,vec__32472_32634,column_32635,column_info_32636,seq__32457_32628__$1,temp__4657__auto___32627__$1,vec__32454_32584,line_32585,columns_32586,seq__32421_32578__$1,temp__4657__auto___32577,inverted))
,cljs.core.sorted_map.call(null)));

var G__32662 = cljs.core.next.call(null,seq__32475_32651__$1);
var G__32663 = null;
var G__32664 = (0);
var G__32665 = (0);
seq__32475_32637 = G__32662;
chunk__32476_32638 = G__32663;
count__32477_32639 = G__32664;
i__32478_32640 = G__32665;
continue;
}
} else {
}
}
break;
}

var G__32666 = cljs.core.next.call(null,seq__32457_32628__$1);
var G__32667 = null;
var G__32668 = (0);
var G__32669 = (0);
seq__32457_32587 = G__32666;
chunk__32458_32588 = G__32667;
count__32459_32589 = G__32668;
i__32460_32590 = G__32669;
continue;
}
} else {
}
}
break;
}

var G__32670 = cljs.core.next.call(null,seq__32421_32578__$1);
var G__32671 = null;
var G__32672 = (0);
var G__32673 = (0);
seq__32421_32483 = G__32670;
chunk__32422_32484 = G__32671;
count__32423_32485 = G__32672;
i__32424_32486 = G__32673;
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
