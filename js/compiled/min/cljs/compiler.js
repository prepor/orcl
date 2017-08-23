// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__33210 = s;
var map__33210__$1 = ((((!((map__33210 == null)))?((((map__33210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33210):map__33210);
var name = cljs.core.get.call(null,map__33210__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__33210__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__33213 = info;
var map__33214 = G__33213;
var map__33214__$1 = ((((!((map__33214 == null)))?((((map__33214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33214):map__33214);
var shadow = cljs.core.get.call(null,map__33214__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__33213__$1 = G__33213;
while(true){
var d__$2 = d__$1;
var map__33216 = G__33213__$1;
var map__33216__$1 = ((((!((map__33216 == null)))?((((map__33216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33216):map__33216);
var shadow__$1 = cljs.core.get.call(null,map__33216__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__33218 = (d__$2 + (1));
var G__33219 = shadow__$1;
d__$1 = G__33218;
G__33213__$1 = G__33219;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__33220){
var map__33221 = p__33220;
var map__33221__$1 = ((((!((map__33221 == null)))?((((map__33221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33221.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33221):map__33221);
var name_var = map__33221__$1;
var name = cljs.core.get.call(null,map__33221__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__33221__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__33223 = info;
var map__33223__$1 = ((((!((map__33223 == null)))?((((map__33223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33223):map__33223);
var ns = cljs.core.get.call(null,map__33223__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__33223__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__33226 = arguments.length;
switch (G__33226) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge_str.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__33228 = cp;
switch (G__33228) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__33230_33234 = cljs.core.seq.call(null,s);
var chunk__33231_33235 = null;
var count__33232_33236 = (0);
var i__33233_33237 = (0);
while(true){
if((i__33233_33237 < count__33232_33236)){
var c_33238 = cljs.core._nth.call(null,chunk__33231_33235,i__33233_33237);
sb.append(cljs.compiler.escape_char.call(null,c_33238));

var G__33239 = seq__33230_33234;
var G__33240 = chunk__33231_33235;
var G__33241 = count__33232_33236;
var G__33242 = (i__33233_33237 + (1));
seq__33230_33234 = G__33239;
chunk__33231_33235 = G__33240;
count__33232_33236 = G__33241;
i__33233_33237 = G__33242;
continue;
} else {
var temp__4657__auto___33243 = cljs.core.seq.call(null,seq__33230_33234);
if(temp__4657__auto___33243){
var seq__33230_33244__$1 = temp__4657__auto___33243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33230_33244__$1)){
var c__28034__auto___33245 = cljs.core.chunk_first.call(null,seq__33230_33244__$1);
var G__33246 = cljs.core.chunk_rest.call(null,seq__33230_33244__$1);
var G__33247 = c__28034__auto___33245;
var G__33248 = cljs.core.count.call(null,c__28034__auto___33245);
var G__33249 = (0);
seq__33230_33234 = G__33246;
chunk__33231_33235 = G__33247;
count__33232_33236 = G__33248;
i__33233_33237 = G__33249;
continue;
} else {
var c_33250 = cljs.core.first.call(null,seq__33230_33244__$1);
sb.append(cljs.compiler.escape_char.call(null,c_33250));

var G__33251 = cljs.core.next.call(null,seq__33230_33244__$1);
var G__33252 = null;
var G__33253 = (0);
var G__33254 = (0);
seq__33230_33234 = G__33251;
chunk__33231_33235 = G__33252;
count__33232_33236 = G__33253;
i__33233_33237 = G__33254;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__28150__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__28151__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__28152__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__28153__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__28154__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__28154__auto__,method_table__28150__auto__,prefer_table__28151__auto__,method_cache__28152__auto__,cached_hierarchy__28153__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__31607__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__31607__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__33255_33260 = ast;
var map__33255_33261__$1 = ((((!((map__33255_33260 == null)))?((((map__33255_33260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33255_33260.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33255_33260):map__33255_33260);
var env_33262 = cljs.core.get.call(null,map__33255_33261__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_33262))){
var map__33257_33263 = env_33262;
var map__33257_33264__$1 = ((((!((map__33257_33263 == null)))?((((map__33257_33263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33257_33263.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33257_33263):map__33257_33263);
var line_33265 = cljs.core.get.call(null,map__33257_33264__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_33266 = cljs.core.get.call(null,map__33257_33264__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__33257_33263,map__33257_33264__$1,line_33265,column_33266,map__33255_33260,map__33255_33261__$1,env_33262,val__31607__auto__){
return (function (m){
var minfo = (function (){var G__33259 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__33259,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__33259;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_33265 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__33257_33263,map__33257_33264__$1,line_33265,column_33266,map__33255_33260,map__33255_33261__$1,env_33262,val__31607__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_33266)?(column_33266 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__33257_33263,map__33257_33264__$1,line_33265,column_33266,map__33255_33260,map__33255_33261__$1,env_33262,val__31607__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__33257_33263,map__33257_33264__$1,line_33265,column_33266,map__33255_33260,map__33255_33261__$1,env_33262,val__31607__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__33257_33263,map__33257_33264__$1,line_33265,column_33266,map__33255_33260,map__33255_33261__$1,env_33262,val__31607__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__33257_33263,map__33257_33264__$1,line_33265,column_33266,map__33255_33260,map__33255_33261__$1,env_33262,val__31607__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__31607__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__28371__auto__ = [];
var len__28364__auto___33273 = arguments.length;
var i__28365__auto___33274 = (0);
while(true){
if((i__28365__auto___33274 < len__28364__auto___33273)){
args__28371__auto__.push((arguments[i__28365__auto___33274]));

var G__33275 = (i__28365__auto___33274 + (1));
i__28365__auto___33274 = G__33275;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__33269_33276 = cljs.core.seq.call(null,xs);
var chunk__33270_33277 = null;
var count__33271_33278 = (0);
var i__33272_33279 = (0);
while(true){
if((i__33272_33279 < count__33271_33278)){
var x_33280 = cljs.core._nth.call(null,chunk__33270_33277,i__33272_33279);
if((x_33280 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_33280)){
cljs.compiler.emit.call(null,x_33280);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_33280)){
cljs.core.apply.call(null,cljs.compiler.emits,x_33280);
} else {
if(goog.isFunction(x_33280)){
x_33280.call(null);
} else {
var s_33281 = cljs.core.print_str.call(null,x_33280);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__33269_33276,chunk__33270_33277,count__33271_33278,i__33272_33279,s_33281,x_33280){
return (function (p1__33267_SHARP_){
return (p1__33267_SHARP_ + cljs.core.count.call(null,s_33281));
});})(seq__33269_33276,chunk__33270_33277,count__33271_33278,i__33272_33279,s_33281,x_33280))
);
}

cljs.core.print.call(null,s_33281);

}
}
}
}

var G__33282 = seq__33269_33276;
var G__33283 = chunk__33270_33277;
var G__33284 = count__33271_33278;
var G__33285 = (i__33272_33279 + (1));
seq__33269_33276 = G__33282;
chunk__33270_33277 = G__33283;
count__33271_33278 = G__33284;
i__33272_33279 = G__33285;
continue;
} else {
var temp__4657__auto___33286 = cljs.core.seq.call(null,seq__33269_33276);
if(temp__4657__auto___33286){
var seq__33269_33287__$1 = temp__4657__auto___33286;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33269_33287__$1)){
var c__28034__auto___33288 = cljs.core.chunk_first.call(null,seq__33269_33287__$1);
var G__33289 = cljs.core.chunk_rest.call(null,seq__33269_33287__$1);
var G__33290 = c__28034__auto___33288;
var G__33291 = cljs.core.count.call(null,c__28034__auto___33288);
var G__33292 = (0);
seq__33269_33276 = G__33289;
chunk__33270_33277 = G__33290;
count__33271_33278 = G__33291;
i__33272_33279 = G__33292;
continue;
} else {
var x_33293 = cljs.core.first.call(null,seq__33269_33287__$1);
if((x_33293 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_33293)){
cljs.compiler.emit.call(null,x_33293);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_33293)){
cljs.core.apply.call(null,cljs.compiler.emits,x_33293);
} else {
if(goog.isFunction(x_33293)){
x_33293.call(null);
} else {
var s_33294 = cljs.core.print_str.call(null,x_33293);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__33269_33276,chunk__33270_33277,count__33271_33278,i__33272_33279,s_33294,x_33293,seq__33269_33287__$1,temp__4657__auto___33286){
return (function (p1__33267_SHARP_){
return (p1__33267_SHARP_ + cljs.core.count.call(null,s_33294));
});})(seq__33269_33276,chunk__33270_33277,count__33271_33278,i__33272_33279,s_33294,x_33293,seq__33269_33287__$1,temp__4657__auto___33286))
);
}

cljs.core.print.call(null,s_33294);

}
}
}
}

var G__33295 = cljs.core.next.call(null,seq__33269_33287__$1);
var G__33296 = null;
var G__33297 = (0);
var G__33298 = (0);
seq__33269_33276 = G__33295;
chunk__33270_33277 = G__33296;
count__33271_33278 = G__33297;
i__33272_33279 = G__33298;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq33268){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33268));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__28371__auto__ = [];
var len__28364__auto___33304 = arguments.length;
var i__28365__auto___33305 = (0);
while(true){
if((i__28365__auto___33305 < len__28364__auto___33304)){
args__28371__auto__.push((arguments[i__28365__auto___33305]));

var G__33306 = (i__28365__auto___33305 + (1));
i__28365__auto___33305 = G__33306;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_33300_33307 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_33300_33307;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__33301){
var map__33302 = p__33301;
var map__33302__$1 = ((((!((map__33302 == null)))?((((map__33302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33302):map__33302);
var m = map__33302__$1;
var gen_line = cljs.core.get.call(null,map__33302__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq33299){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33299));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__28222__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_33308_33310 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_33309_33311 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_33308_33310,_STAR_print_fn_STAR_33309_33311,sb__28222__auto__){
return (function (x__28223__auto__){
return sb__28222__auto__.append(x__28223__auto__);
});})(_STAR_print_newline_STAR_33308_33310,_STAR_print_fn_STAR_33309_33311,sb__28222__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33309_33311;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33308_33310;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28222__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__28150__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__28151__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__28152__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__28153__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__28154__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__28154__auto__,method_table__28150__auto__,prefer_table__28151__auto__,method_cache__28152__auto__,cached_hierarchy__28153__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,"(",x,")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__33312 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__33312,(0),null);
var flags = cljs.core.nth.call(null,vec__33312,(1),null);
var pattern = cljs.core.nth.call(null,vec__33312,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
var temp__4655__auto__ = (function (){var and__27183__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__27183__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__27183__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var value = temp__4655__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
var temp__4655__auto__ = (function (){var and__27183__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__27183__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__27183__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var value = temp__4655__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__33316){
var map__33317 = p__33316;
var map__33317__$1 = ((((!((map__33317 == null)))?((((map__33317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33317):map__33317);
var ast = map__33317__$1;
var info = cljs.core.get.call(null,map__33317__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__33317__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__33317__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__4655__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__4655__auto__)){
var const_expr = temp__4655__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__33319 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__33319__$1 = ((((!((map__33319 == null)))?((((map__33319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33319.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33319):map__33319);
var cenv = map__33319__$1;
var options = cljs.core.get.call(null,map__33319__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__27195__auto__ = js_module_name;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__33321 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__27183__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__27183__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__27183__auto__;
}
})())){
return clojure.set.difference.call(null,G__33321,cljs.analyzer.es5_allowed);
} else {
return G__33321;
}
})();
var env__33202__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__33322 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__33322,reserved);
} else {
return G__33322;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__33323){
var map__33324 = p__33323;
var map__33324__$1 = ((((!((map__33324 == null)))?((((map__33324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33324.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33324):map__33324);
var arg = map__33324__$1;
var env = cljs.core.get.call(null,map__33324__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__33324__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__33324__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__33324__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__33326 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__33326__$1 = ((((!((map__33326 == null)))?((((map__33326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33326):map__33326);
var name = cljs.core.get.call(null,map__33326__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__33202__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__33328){
var map__33329 = p__33328;
var map__33329__$1 = ((((!((map__33329 == null)))?((((map__33329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33329.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33329):map__33329);
var expr = cljs.core.get.call(null,map__33329__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__33329__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__33329__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33202__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__33331_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__33331_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__33332){
var map__33333 = p__33332;
var map__33333__$1 = ((((!((map__33333 == null)))?((((map__33333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33333):map__33333);
var env = cljs.core.get.call(null,map__33333__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__33333__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__33333__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__33202__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__33335){
var map__33336 = p__33335;
var map__33336__$1 = ((((!((map__33336 == null)))?((((map__33336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33336):map__33336);
var items = cljs.core.get.call(null,map__33336__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__33336__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33202__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__33338){
var map__33339 = p__33338;
var map__33339__$1 = ((((!((map__33339 == null)))?((((map__33339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33339):map__33339);
var items = cljs.core.get.call(null,map__33339__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__33339__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33202__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_33341 = cljs.core.count.call(null,items);
if((cnt_33341 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_33341,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__33342_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__33342_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__33343){
var map__33344 = p__33343;
var map__33344__$1 = ((((!((map__33344 == null)))?((((map__33344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33344.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33344):map__33344);
var items = cljs.core.get.call(null,map__33344__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__33344__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33202__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,items),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__33346){
var map__33347 = p__33346;
var map__33347__$1 = ((((!((map__33347 == null)))?((((map__33347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33347.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33347):map__33347);
var items = cljs.core.get.call(null,map__33347__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__33347__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__33347__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33202__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___33365 = cljs.core.seq.call(null,items);
if(temp__4657__auto___33365){
var items_33366__$1 = temp__4657__auto___33365;
var vec__33349_33367 = items_33366__$1;
var seq__33350_33368 = cljs.core.seq.call(null,vec__33349_33367);
var first__33351_33369 = cljs.core.first.call(null,seq__33350_33368);
var seq__33350_33370__$1 = cljs.core.next.call(null,seq__33350_33368);
var vec__33352_33371 = first__33351_33369;
var k_33372 = cljs.core.nth.call(null,vec__33352_33371,(0),null);
var v_33373 = cljs.core.nth.call(null,vec__33352_33371,(1),null);
var r_33374 = seq__33350_33370__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_33372),"\": ",v_33373);

var seq__33355_33375 = cljs.core.seq.call(null,r_33374);
var chunk__33356_33376 = null;
var count__33357_33377 = (0);
var i__33358_33378 = (0);
while(true){
if((i__33358_33378 < count__33357_33377)){
var vec__33359_33379 = cljs.core._nth.call(null,chunk__33356_33376,i__33358_33378);
var k_33380__$1 = cljs.core.nth.call(null,vec__33359_33379,(0),null);
var v_33381__$1 = cljs.core.nth.call(null,vec__33359_33379,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_33380__$1),"\": ",v_33381__$1);

var G__33382 = seq__33355_33375;
var G__33383 = chunk__33356_33376;
var G__33384 = count__33357_33377;
var G__33385 = (i__33358_33378 + (1));
seq__33355_33375 = G__33382;
chunk__33356_33376 = G__33383;
count__33357_33377 = G__33384;
i__33358_33378 = G__33385;
continue;
} else {
var temp__4657__auto___33386__$1 = cljs.core.seq.call(null,seq__33355_33375);
if(temp__4657__auto___33386__$1){
var seq__33355_33387__$1 = temp__4657__auto___33386__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33355_33387__$1)){
var c__28034__auto___33388 = cljs.core.chunk_first.call(null,seq__33355_33387__$1);
var G__33389 = cljs.core.chunk_rest.call(null,seq__33355_33387__$1);
var G__33390 = c__28034__auto___33388;
var G__33391 = cljs.core.count.call(null,c__28034__auto___33388);
var G__33392 = (0);
seq__33355_33375 = G__33389;
chunk__33356_33376 = G__33390;
count__33357_33377 = G__33391;
i__33358_33378 = G__33392;
continue;
} else {
var vec__33362_33393 = cljs.core.first.call(null,seq__33355_33387__$1);
var k_33394__$1 = cljs.core.nth.call(null,vec__33362_33393,(0),null);
var v_33395__$1 = cljs.core.nth.call(null,vec__33362_33393,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_33394__$1),"\": ",v_33395__$1);

var G__33396 = cljs.core.next.call(null,seq__33355_33387__$1);
var G__33397 = null;
var G__33398 = (0);
var G__33399 = (0);
seq__33355_33375 = G__33396;
chunk__33356_33376 = G__33397;
count__33357_33377 = G__33398;
i__33358_33378 = G__33399;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"})");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__33400){
var map__33401 = p__33400;
var map__33401__$1 = ((((!((map__33401 == null)))?((((map__33401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33401):map__33401);
var items = cljs.core.get.call(null,map__33401__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__33401__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__33401__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__33401__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33202__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__33403){
var map__33404 = p__33403;
var map__33404__$1 = ((((!((map__33404 == null)))?((((map__33404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33404.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33404):map__33404);
var form = cljs.core.get.call(null,map__33404__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__33404__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__33202__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__33406){
var map__33407 = p__33406;
var map__33407__$1 = ((((!((map__33407 == null)))?((((map__33407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33407):map__33407);
var op = cljs.core.get.call(null,map__33407__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__33407__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__33407__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__27195__auto__ = (function (){var and__27183__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__27183__auto__){
var and__27183__auto____$1 = form;
if(cljs.core.truth_(and__27183__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__27183__auto____$1;
}
} else {
return and__27183__auto__;
}
})();
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
var and__27183__auto__ = !((const_expr == null));
if(and__27183__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__27183__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__33409){
var map__33410 = p__33409;
var map__33410__$1 = ((((!((map__33410 == null)))?((((map__33410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33410.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33410):map__33410);
var op = cljs.core.get.call(null,map__33410__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__33410__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__33410__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__27195__auto__ = (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
if(or__27195__auto__){
return or__27195__auto__;
} else {
var and__27183__auto__ = !((const_expr == null));
if(and__27183__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__27183__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__27195__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__33412){
var map__33413 = p__33412;
var map__33413__$1 = ((((!((map__33413 == null)))?((((map__33413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33413):map__33413);
var test = cljs.core.get.call(null,map__33413__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__33413__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__33413__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__33413__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__33413__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__27195__auto__ = unchecked;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__33415){
var map__33416 = p__33415;
var map__33416__$1 = ((((!((map__33416 == null)))?((((map__33416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33416.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33416):map__33416);
var v = cljs.core.get.call(null,map__33416__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__33416__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__33416__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__33416__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__33416__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__33418_33436 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__33419_33437 = null;
var count__33420_33438 = (0);
var i__33421_33439 = (0);
while(true){
if((i__33421_33439 < count__33420_33438)){
var vec__33422_33440 = cljs.core._nth.call(null,chunk__33419_33437,i__33421_33439);
var ts_33441 = cljs.core.nth.call(null,vec__33422_33440,(0),null);
var then_33442 = cljs.core.nth.call(null,vec__33422_33440,(1),null);
var seq__33425_33443 = cljs.core.seq.call(null,ts_33441);
var chunk__33426_33444 = null;
var count__33427_33445 = (0);
var i__33428_33446 = (0);
while(true){
if((i__33428_33446 < count__33427_33445)){
var test_33447 = cljs.core._nth.call(null,chunk__33426_33444,i__33428_33446);
cljs.compiler.emitln.call(null,"case ",test_33447,":");

var G__33448 = seq__33425_33443;
var G__33449 = chunk__33426_33444;
var G__33450 = count__33427_33445;
var G__33451 = (i__33428_33446 + (1));
seq__33425_33443 = G__33448;
chunk__33426_33444 = G__33449;
count__33427_33445 = G__33450;
i__33428_33446 = G__33451;
continue;
} else {
var temp__4657__auto___33452 = cljs.core.seq.call(null,seq__33425_33443);
if(temp__4657__auto___33452){
var seq__33425_33453__$1 = temp__4657__auto___33452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33425_33453__$1)){
var c__28034__auto___33454 = cljs.core.chunk_first.call(null,seq__33425_33453__$1);
var G__33455 = cljs.core.chunk_rest.call(null,seq__33425_33453__$1);
var G__33456 = c__28034__auto___33454;
var G__33457 = cljs.core.count.call(null,c__28034__auto___33454);
var G__33458 = (0);
seq__33425_33443 = G__33455;
chunk__33426_33444 = G__33456;
count__33427_33445 = G__33457;
i__33428_33446 = G__33458;
continue;
} else {
var test_33459 = cljs.core.first.call(null,seq__33425_33453__$1);
cljs.compiler.emitln.call(null,"case ",test_33459,":");

var G__33460 = cljs.core.next.call(null,seq__33425_33453__$1);
var G__33461 = null;
var G__33462 = (0);
var G__33463 = (0);
seq__33425_33443 = G__33460;
chunk__33426_33444 = G__33461;
count__33427_33445 = G__33462;
i__33428_33446 = G__33463;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_33442);
} else {
cljs.compiler.emitln.call(null,then_33442);
}

cljs.compiler.emitln.call(null,"break;");

var G__33464 = seq__33418_33436;
var G__33465 = chunk__33419_33437;
var G__33466 = count__33420_33438;
var G__33467 = (i__33421_33439 + (1));
seq__33418_33436 = G__33464;
chunk__33419_33437 = G__33465;
count__33420_33438 = G__33466;
i__33421_33439 = G__33467;
continue;
} else {
var temp__4657__auto___33468 = cljs.core.seq.call(null,seq__33418_33436);
if(temp__4657__auto___33468){
var seq__33418_33469__$1 = temp__4657__auto___33468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33418_33469__$1)){
var c__28034__auto___33470 = cljs.core.chunk_first.call(null,seq__33418_33469__$1);
var G__33471 = cljs.core.chunk_rest.call(null,seq__33418_33469__$1);
var G__33472 = c__28034__auto___33470;
var G__33473 = cljs.core.count.call(null,c__28034__auto___33470);
var G__33474 = (0);
seq__33418_33436 = G__33471;
chunk__33419_33437 = G__33472;
count__33420_33438 = G__33473;
i__33421_33439 = G__33474;
continue;
} else {
var vec__33429_33475 = cljs.core.first.call(null,seq__33418_33469__$1);
var ts_33476 = cljs.core.nth.call(null,vec__33429_33475,(0),null);
var then_33477 = cljs.core.nth.call(null,vec__33429_33475,(1),null);
var seq__33432_33478 = cljs.core.seq.call(null,ts_33476);
var chunk__33433_33479 = null;
var count__33434_33480 = (0);
var i__33435_33481 = (0);
while(true){
if((i__33435_33481 < count__33434_33480)){
var test_33482 = cljs.core._nth.call(null,chunk__33433_33479,i__33435_33481);
cljs.compiler.emitln.call(null,"case ",test_33482,":");

var G__33483 = seq__33432_33478;
var G__33484 = chunk__33433_33479;
var G__33485 = count__33434_33480;
var G__33486 = (i__33435_33481 + (1));
seq__33432_33478 = G__33483;
chunk__33433_33479 = G__33484;
count__33434_33480 = G__33485;
i__33435_33481 = G__33486;
continue;
} else {
var temp__4657__auto___33487__$1 = cljs.core.seq.call(null,seq__33432_33478);
if(temp__4657__auto___33487__$1){
var seq__33432_33488__$1 = temp__4657__auto___33487__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33432_33488__$1)){
var c__28034__auto___33489 = cljs.core.chunk_first.call(null,seq__33432_33488__$1);
var G__33490 = cljs.core.chunk_rest.call(null,seq__33432_33488__$1);
var G__33491 = c__28034__auto___33489;
var G__33492 = cljs.core.count.call(null,c__28034__auto___33489);
var G__33493 = (0);
seq__33432_33478 = G__33490;
chunk__33433_33479 = G__33491;
count__33434_33480 = G__33492;
i__33435_33481 = G__33493;
continue;
} else {
var test_33494 = cljs.core.first.call(null,seq__33432_33488__$1);
cljs.compiler.emitln.call(null,"case ",test_33494,":");

var G__33495 = cljs.core.next.call(null,seq__33432_33488__$1);
var G__33496 = null;
var G__33497 = (0);
var G__33498 = (0);
seq__33432_33478 = G__33495;
chunk__33433_33479 = G__33496;
count__33434_33480 = G__33497;
i__33435_33481 = G__33498;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_33477);
} else {
cljs.compiler.emitln.call(null,then_33477);
}

cljs.compiler.emitln.call(null,"break;");

var G__33499 = cljs.core.next.call(null,seq__33418_33469__$1);
var G__33500 = null;
var G__33501 = (0);
var G__33502 = (0);
seq__33418_33436 = G__33499;
chunk__33419_33437 = G__33500;
count__33420_33438 = G__33501;
i__33421_33439 = G__33502;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__33503){
var map__33504 = p__33503;
var map__33504__$1 = ((((!((map__33504 == null)))?((((map__33504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33504):map__33504);
var throw$ = cljs.core.get.call(null,map__33504__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__33504__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__33507 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__33507,(0),null);
var rstr = cljs.core.nth.call(null,vec__33507,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__33507,fstr,rstr,ret_t,axstr){
return (function (p1__33506_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__33506_SHARP_);
});})(idx,vec__33507,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__33510 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33510),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__33510;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__33511_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__33511_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__33512 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__33513 = cljs.core.seq.call(null,vec__33512);
var first__33514 = cljs.core.first.call(null,seq__33513);
var seq__33513__$1 = cljs.core.next.call(null,seq__33513);
var p = first__33514;
var first__33514__$1 = cljs.core.first.call(null,seq__33513__$1);
var seq__33513__$2 = cljs.core.next.call(null,seq__33513__$1);
var ts = first__33514__$1;
var first__33514__$2 = cljs.core.first.call(null,seq__33513__$2);
var seq__33513__$3 = cljs.core.next.call(null,seq__33513__$2);
var n = first__33514__$2;
var xs = seq__33513__$3;
if(cljs.core.truth_((function (){var and__27183__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__27183__auto__){
var and__27183__auto____$1 = ts;
if(cljs.core.truth_(and__27183__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__27183__auto____$1;
}
} else {
return and__27183__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__33515 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__33516 = cljs.core.seq.call(null,vec__33515);
var first__33517 = cljs.core.first.call(null,seq__33516);
var seq__33516__$1 = cljs.core.next.call(null,seq__33516);
var p = first__33517;
var first__33517__$1 = cljs.core.first.call(null,seq__33516__$1);
var seq__33516__$2 = cljs.core.next.call(null,seq__33516__$1);
var ts = first__33517__$1;
var xs = seq__33516__$2;
if(cljs.core.truth_((function (){var and__27183__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__27183__auto__){
var and__27183__auto____$1 = ts;
if(cljs.core.truth_(and__27183__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__27183__auto____$1;
}
} else {
return and__27183__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__33520 = arguments.length;
switch (G__33520) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__33528 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__33518_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__33518_SHARP_);
} else {
return p1__33518_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__33529 = cljs.core.seq.call(null,vec__33528);
var first__33530 = cljs.core.first.call(null,seq__33529);
var seq__33529__$1 = cljs.core.next.call(null,seq__33529);
var x = first__33530;
var ys = seq__33529__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__33531 = cljs.core.seq.call(null,ys);
var chunk__33532 = null;
var count__33533 = (0);
var i__33534 = (0);
while(true){
if((i__33534 < count__33533)){
var next_line = cljs.core._nth.call(null,chunk__33532,i__33534);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__33540 = seq__33531;
var G__33541 = chunk__33532;
var G__33542 = count__33533;
var G__33543 = (i__33534 + (1));
seq__33531 = G__33540;
chunk__33532 = G__33541;
count__33533 = G__33542;
i__33534 = G__33543;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33531);
if(temp__4657__auto__){
var seq__33531__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33531__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__33531__$1);
var G__33544 = cljs.core.chunk_rest.call(null,seq__33531__$1);
var G__33545 = c__28034__auto__;
var G__33546 = cljs.core.count.call(null,c__28034__auto__);
var G__33547 = (0);
seq__33531 = G__33544;
chunk__33532 = G__33545;
count__33533 = G__33546;
i__33534 = G__33547;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__33531__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__33548 = cljs.core.next.call(null,seq__33531__$1);
var G__33549 = null;
var G__33550 = (0);
var G__33551 = (0);
seq__33531 = G__33548;
chunk__33532 = G__33549;
count__33533 = G__33550;
i__33534 = G__33551;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__33535_33552 = cljs.core.seq.call(null,docs__$2);
var chunk__33536_33553 = null;
var count__33537_33554 = (0);
var i__33538_33555 = (0);
while(true){
if((i__33538_33555 < count__33537_33554)){
var e_33556 = cljs.core._nth.call(null,chunk__33536_33553,i__33538_33555);
if(cljs.core.truth_(e_33556)){
print_comment_lines.call(null,e_33556);
} else {
}

var G__33557 = seq__33535_33552;
var G__33558 = chunk__33536_33553;
var G__33559 = count__33537_33554;
var G__33560 = (i__33538_33555 + (1));
seq__33535_33552 = G__33557;
chunk__33536_33553 = G__33558;
count__33537_33554 = G__33559;
i__33538_33555 = G__33560;
continue;
} else {
var temp__4657__auto___33561 = cljs.core.seq.call(null,seq__33535_33552);
if(temp__4657__auto___33561){
var seq__33535_33562__$1 = temp__4657__auto___33561;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33535_33562__$1)){
var c__28034__auto___33563 = cljs.core.chunk_first.call(null,seq__33535_33562__$1);
var G__33564 = cljs.core.chunk_rest.call(null,seq__33535_33562__$1);
var G__33565 = c__28034__auto___33563;
var G__33566 = cljs.core.count.call(null,c__28034__auto___33563);
var G__33567 = (0);
seq__33535_33552 = G__33564;
chunk__33536_33553 = G__33565;
count__33537_33554 = G__33566;
i__33538_33555 = G__33567;
continue;
} else {
var e_33568 = cljs.core.first.call(null,seq__33535_33562__$1);
if(cljs.core.truth_(e_33568)){
print_comment_lines.call(null,e_33568);
} else {
}

var G__33569 = cljs.core.next.call(null,seq__33535_33562__$1);
var G__33570 = null;
var G__33571 = (0);
var G__33572 = (0);
seq__33535_33552 = G__33569;
chunk__33536_33553 = G__33570;
count__33537_33554 = G__33571;
i__33538_33555 = G__33572;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__27183__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__33574_SHARP_){
return goog.string.startsWith(p1__33574_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__27183__auto__)){
var and__27183__auto____$1 = opts;
if(cljs.core.truth_(and__27183__auto____$1)){
var and__27183__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__27183__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__27183__auto____$2;
}
} else {
return and__27183__auto____$1;
}
} else {
return and__27183__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__33575){
var map__33576 = p__33575;
var map__33576__$1 = ((((!((map__33576 == null)))?((((map__33576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33576.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33576):map__33576);
var name = cljs.core.get.call(null,map__33576__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__33576__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__33576__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__33576__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__33576__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__33576__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__33576__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__33576__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__33576__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__27195__auto__ = init;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4655__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4655__auto__)){
var define = temp__4655__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__27183__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__27183__auto__){
return test;
} else {
return and__27183__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__33578){
var map__33579 = p__33578;
var map__33579__$1 = ((((!((map__33579 == null)))?((((map__33579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33579):map__33579);
var name = cljs.core.get.call(null,map__33579__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__33579__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__33579__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__33581_33599 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__33582_33600 = null;
var count__33583_33601 = (0);
var i__33584_33602 = (0);
while(true){
if((i__33584_33602 < count__33583_33601)){
var vec__33585_33603 = cljs.core._nth.call(null,chunk__33582_33600,i__33584_33602);
var i_33604 = cljs.core.nth.call(null,vec__33585_33603,(0),null);
var param_33605 = cljs.core.nth.call(null,vec__33585_33603,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_33605);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__33606 = seq__33581_33599;
var G__33607 = chunk__33582_33600;
var G__33608 = count__33583_33601;
var G__33609 = (i__33584_33602 + (1));
seq__33581_33599 = G__33606;
chunk__33582_33600 = G__33607;
count__33583_33601 = G__33608;
i__33584_33602 = G__33609;
continue;
} else {
var temp__4657__auto___33610 = cljs.core.seq.call(null,seq__33581_33599);
if(temp__4657__auto___33610){
var seq__33581_33611__$1 = temp__4657__auto___33610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33581_33611__$1)){
var c__28034__auto___33612 = cljs.core.chunk_first.call(null,seq__33581_33611__$1);
var G__33613 = cljs.core.chunk_rest.call(null,seq__33581_33611__$1);
var G__33614 = c__28034__auto___33612;
var G__33615 = cljs.core.count.call(null,c__28034__auto___33612);
var G__33616 = (0);
seq__33581_33599 = G__33613;
chunk__33582_33600 = G__33614;
count__33583_33601 = G__33615;
i__33584_33602 = G__33616;
continue;
} else {
var vec__33588_33617 = cljs.core.first.call(null,seq__33581_33611__$1);
var i_33618 = cljs.core.nth.call(null,vec__33588_33617,(0),null);
var param_33619 = cljs.core.nth.call(null,vec__33588_33617,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_33619);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__33620 = cljs.core.next.call(null,seq__33581_33611__$1);
var G__33621 = null;
var G__33622 = (0);
var G__33623 = (0);
seq__33581_33599 = G__33620;
chunk__33582_33600 = G__33621;
count__33583_33601 = G__33622;
i__33584_33602 = G__33623;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__33591_33624 = cljs.core.seq.call(null,params);
var chunk__33592_33625 = null;
var count__33593_33626 = (0);
var i__33594_33627 = (0);
while(true){
if((i__33594_33627 < count__33593_33626)){
var param_33628 = cljs.core._nth.call(null,chunk__33592_33625,i__33594_33627);
cljs.compiler.emit.call(null,param_33628);

if(cljs.core._EQ_.call(null,param_33628,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33629 = seq__33591_33624;
var G__33630 = chunk__33592_33625;
var G__33631 = count__33593_33626;
var G__33632 = (i__33594_33627 + (1));
seq__33591_33624 = G__33629;
chunk__33592_33625 = G__33630;
count__33593_33626 = G__33631;
i__33594_33627 = G__33632;
continue;
} else {
var temp__4657__auto___33633 = cljs.core.seq.call(null,seq__33591_33624);
if(temp__4657__auto___33633){
var seq__33591_33634__$1 = temp__4657__auto___33633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33591_33634__$1)){
var c__28034__auto___33635 = cljs.core.chunk_first.call(null,seq__33591_33634__$1);
var G__33636 = cljs.core.chunk_rest.call(null,seq__33591_33634__$1);
var G__33637 = c__28034__auto___33635;
var G__33638 = cljs.core.count.call(null,c__28034__auto___33635);
var G__33639 = (0);
seq__33591_33624 = G__33636;
chunk__33592_33625 = G__33637;
count__33593_33626 = G__33638;
i__33594_33627 = G__33639;
continue;
} else {
var param_33640 = cljs.core.first.call(null,seq__33591_33634__$1);
cljs.compiler.emit.call(null,param_33640);

if(cljs.core._EQ_.call(null,param_33640,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33641 = cljs.core.next.call(null,seq__33591_33634__$1);
var G__33642 = null;
var G__33643 = (0);
var G__33644 = (0);
seq__33591_33624 = G__33641;
chunk__33592_33625 = G__33642;
count__33593_33626 = G__33643;
i__33594_33627 = G__33644;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__33595_33645 = cljs.core.seq.call(null,params);
var chunk__33596_33646 = null;
var count__33597_33647 = (0);
var i__33598_33648 = (0);
while(true){
if((i__33598_33648 < count__33597_33647)){
var param_33649 = cljs.core._nth.call(null,chunk__33596_33646,i__33598_33648);
cljs.compiler.emit.call(null,param_33649);

if(cljs.core._EQ_.call(null,param_33649,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33650 = seq__33595_33645;
var G__33651 = chunk__33596_33646;
var G__33652 = count__33597_33647;
var G__33653 = (i__33598_33648 + (1));
seq__33595_33645 = G__33650;
chunk__33596_33646 = G__33651;
count__33597_33647 = G__33652;
i__33598_33648 = G__33653;
continue;
} else {
var temp__4657__auto___33654 = cljs.core.seq.call(null,seq__33595_33645);
if(temp__4657__auto___33654){
var seq__33595_33655__$1 = temp__4657__auto___33654;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33595_33655__$1)){
var c__28034__auto___33656 = cljs.core.chunk_first.call(null,seq__33595_33655__$1);
var G__33657 = cljs.core.chunk_rest.call(null,seq__33595_33655__$1);
var G__33658 = c__28034__auto___33656;
var G__33659 = cljs.core.count.call(null,c__28034__auto___33656);
var G__33660 = (0);
seq__33595_33645 = G__33657;
chunk__33596_33646 = G__33658;
count__33597_33647 = G__33659;
i__33598_33648 = G__33660;
continue;
} else {
var param_33661 = cljs.core.first.call(null,seq__33595_33655__$1);
cljs.compiler.emit.call(null,param_33661);

if(cljs.core._EQ_.call(null,param_33661,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33662 = cljs.core.next.call(null,seq__33595_33655__$1);
var G__33663 = null;
var G__33664 = (0);
var G__33665 = (0);
seq__33595_33645 = G__33662;
chunk__33596_33646 = G__33663;
count__33597_33647 = G__33664;
i__33598_33648 = G__33665;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__33666 = cljs.core.seq.call(null,params);
var chunk__33667 = null;
var count__33668 = (0);
var i__33669 = (0);
while(true){
if((i__33669 < count__33668)){
var param = cljs.core._nth.call(null,chunk__33667,i__33669);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33670 = seq__33666;
var G__33671 = chunk__33667;
var G__33672 = count__33668;
var G__33673 = (i__33669 + (1));
seq__33666 = G__33670;
chunk__33667 = G__33671;
count__33668 = G__33672;
i__33669 = G__33673;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33666);
if(temp__4657__auto__){
var seq__33666__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33666__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__33666__$1);
var G__33674 = cljs.core.chunk_rest.call(null,seq__33666__$1);
var G__33675 = c__28034__auto__;
var G__33676 = cljs.core.count.call(null,c__28034__auto__);
var G__33677 = (0);
seq__33666 = G__33674;
chunk__33667 = G__33675;
count__33668 = G__33676;
i__33669 = G__33677;
continue;
} else {
var param = cljs.core.first.call(null,seq__33666__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33678 = cljs.core.next.call(null,seq__33666__$1);
var G__33679 = null;
var G__33680 = (0);
var G__33681 = (0);
seq__33666 = G__33678;
chunk__33667 = G__33679;
count__33668 = G__33680;
i__33669 = G__33681;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__33682){
var map__33683 = p__33682;
var map__33683__$1 = ((((!((map__33683 == null)))?((((map__33683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33683.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33683):map__33683);
var type = cljs.core.get.call(null,map__33683__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__33683__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__33683__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__33683__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__33683__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__33683__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__33683__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__33683__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__33202__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__33685){
var map__33686 = p__33685;
var map__33686__$1 = ((((!((map__33686 == null)))?((((map__33686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33686):map__33686);
var f = map__33686__$1;
var type = cljs.core.get.call(null,map__33686__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__33686__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__33686__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__33686__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__33686__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__33686__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__33686__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__33686__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__33202__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_33696__$1 = (function (){var or__27195__auto__ = name;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_33697 = cljs.compiler.munge.call(null,name_33696__$1);
var delegate_name_33698 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_33697),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_33698," = function (");

var seq__33688_33699 = cljs.core.seq.call(null,params);
var chunk__33689_33700 = null;
var count__33690_33701 = (0);
var i__33691_33702 = (0);
while(true){
if((i__33691_33702 < count__33690_33701)){
var param_33703 = cljs.core._nth.call(null,chunk__33689_33700,i__33691_33702);
cljs.compiler.emit.call(null,param_33703);

if(cljs.core._EQ_.call(null,param_33703,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33704 = seq__33688_33699;
var G__33705 = chunk__33689_33700;
var G__33706 = count__33690_33701;
var G__33707 = (i__33691_33702 + (1));
seq__33688_33699 = G__33704;
chunk__33689_33700 = G__33705;
count__33690_33701 = G__33706;
i__33691_33702 = G__33707;
continue;
} else {
var temp__4657__auto___33708 = cljs.core.seq.call(null,seq__33688_33699);
if(temp__4657__auto___33708){
var seq__33688_33709__$1 = temp__4657__auto___33708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33688_33709__$1)){
var c__28034__auto___33710 = cljs.core.chunk_first.call(null,seq__33688_33709__$1);
var G__33711 = cljs.core.chunk_rest.call(null,seq__33688_33709__$1);
var G__33712 = c__28034__auto___33710;
var G__33713 = cljs.core.count.call(null,c__28034__auto___33710);
var G__33714 = (0);
seq__33688_33699 = G__33711;
chunk__33689_33700 = G__33712;
count__33690_33701 = G__33713;
i__33691_33702 = G__33714;
continue;
} else {
var param_33715 = cljs.core.first.call(null,seq__33688_33709__$1);
cljs.compiler.emit.call(null,param_33715);

if(cljs.core._EQ_.call(null,param_33715,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33716 = cljs.core.next.call(null,seq__33688_33709__$1);
var G__33717 = null;
var G__33718 = (0);
var G__33719 = (0);
seq__33688_33699 = G__33716;
chunk__33689_33700 = G__33717;
count__33690_33701 = G__33718;
i__33691_33702 = G__33719;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_33697," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_33720 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_33720,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_33698,".call(this,");

var seq__33692_33721 = cljs.core.seq.call(null,params);
var chunk__33693_33722 = null;
var count__33694_33723 = (0);
var i__33695_33724 = (0);
while(true){
if((i__33695_33724 < count__33694_33723)){
var param_33725 = cljs.core._nth.call(null,chunk__33693_33722,i__33695_33724);
cljs.compiler.emit.call(null,param_33725);

if(cljs.core._EQ_.call(null,param_33725,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33726 = seq__33692_33721;
var G__33727 = chunk__33693_33722;
var G__33728 = count__33694_33723;
var G__33729 = (i__33695_33724 + (1));
seq__33692_33721 = G__33726;
chunk__33693_33722 = G__33727;
count__33694_33723 = G__33728;
i__33695_33724 = G__33729;
continue;
} else {
var temp__4657__auto___33730 = cljs.core.seq.call(null,seq__33692_33721);
if(temp__4657__auto___33730){
var seq__33692_33731__$1 = temp__4657__auto___33730;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33692_33731__$1)){
var c__28034__auto___33732 = cljs.core.chunk_first.call(null,seq__33692_33731__$1);
var G__33733 = cljs.core.chunk_rest.call(null,seq__33692_33731__$1);
var G__33734 = c__28034__auto___33732;
var G__33735 = cljs.core.count.call(null,c__28034__auto___33732);
var G__33736 = (0);
seq__33692_33721 = G__33733;
chunk__33693_33722 = G__33734;
count__33694_33723 = G__33735;
i__33695_33724 = G__33736;
continue;
} else {
var param_33737 = cljs.core.first.call(null,seq__33692_33731__$1);
cljs.compiler.emit.call(null,param_33737);

if(cljs.core._EQ_.call(null,param_33737,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33738 = cljs.core.next.call(null,seq__33692_33731__$1);
var G__33739 = null;
var G__33740 = (0);
var G__33741 = (0);
seq__33692_33721 = G__33738;
chunk__33693_33722 = G__33739;
count__33694_33723 = G__33740;
i__33695_33724 = G__33741;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_33697,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_33697,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_33696__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_33697,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_33698,";");

cljs.compiler.emitln.call(null,"return ",mname_33697,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__33745){
var map__33746 = p__33745;
var map__33746__$1 = ((((!((map__33746 == null)))?((((map__33746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33746.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33746):map__33746);
var name = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__33746,map__33746__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__33742_SHARP_){
var and__27183__auto__ = p1__33742_SHARP_;
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__33742_SHARP_));
} else {
return and__27183__auto__;
}
});})(map__33746,map__33746__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_33781__$1 = (function (){var or__27195__auto__ = name;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_33782 = cljs.compiler.munge.call(null,name_33781__$1);
var maxparams_33783 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_33784 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_33781__$1,mname_33782,maxparams_33783,loop_locals,map__33746,map__33746__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_33782),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_33781__$1,mname_33782,maxparams_33783,loop_locals,map__33746,map__33746__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_33785 = cljs.core.sort_by.call(null,((function (name_33781__$1,mname_33782,maxparams_33783,mmap_33784,loop_locals,map__33746,map__33746__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__33743_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__33743_SHARP_)));
});})(name_33781__$1,mname_33782,maxparams_33783,mmap_33784,loop_locals,map__33746,map__33746__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_33784));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_33782," = null;");

var seq__33748_33786 = cljs.core.seq.call(null,ms_33785);
var chunk__33749_33787 = null;
var count__33750_33788 = (0);
var i__33751_33789 = (0);
while(true){
if((i__33751_33789 < count__33750_33788)){
var vec__33752_33790 = cljs.core._nth.call(null,chunk__33749_33787,i__33751_33789);
var n_33791 = cljs.core.nth.call(null,vec__33752_33790,(0),null);
var meth_33792 = cljs.core.nth.call(null,vec__33752_33790,(1),null);
cljs.compiler.emits.call(null,"var ",n_33791," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_33792))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_33792);
} else {
cljs.compiler.emit_fn_method.call(null,meth_33792);
}

cljs.compiler.emitln.call(null,";");

var G__33793 = seq__33748_33786;
var G__33794 = chunk__33749_33787;
var G__33795 = count__33750_33788;
var G__33796 = (i__33751_33789 + (1));
seq__33748_33786 = G__33793;
chunk__33749_33787 = G__33794;
count__33750_33788 = G__33795;
i__33751_33789 = G__33796;
continue;
} else {
var temp__4657__auto___33797 = cljs.core.seq.call(null,seq__33748_33786);
if(temp__4657__auto___33797){
var seq__33748_33798__$1 = temp__4657__auto___33797;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33748_33798__$1)){
var c__28034__auto___33799 = cljs.core.chunk_first.call(null,seq__33748_33798__$1);
var G__33800 = cljs.core.chunk_rest.call(null,seq__33748_33798__$1);
var G__33801 = c__28034__auto___33799;
var G__33802 = cljs.core.count.call(null,c__28034__auto___33799);
var G__33803 = (0);
seq__33748_33786 = G__33800;
chunk__33749_33787 = G__33801;
count__33750_33788 = G__33802;
i__33751_33789 = G__33803;
continue;
} else {
var vec__33755_33804 = cljs.core.first.call(null,seq__33748_33798__$1);
var n_33805 = cljs.core.nth.call(null,vec__33755_33804,(0),null);
var meth_33806 = cljs.core.nth.call(null,vec__33755_33804,(1),null);
cljs.compiler.emits.call(null,"var ",n_33805," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_33806))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_33806);
} else {
cljs.compiler.emit_fn_method.call(null,meth_33806);
}

cljs.compiler.emitln.call(null,";");

var G__33807 = cljs.core.next.call(null,seq__33748_33798__$1);
var G__33808 = null;
var G__33809 = (0);
var G__33810 = (0);
seq__33748_33786 = G__33807;
chunk__33749_33787 = G__33808;
count__33750_33788 = G__33809;
i__33751_33789 = G__33810;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_33782," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_33783),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_33783)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_33783));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__33758_33811 = cljs.core.seq.call(null,ms_33785);
var chunk__33759_33812 = null;
var count__33760_33813 = (0);
var i__33761_33814 = (0);
while(true){
if((i__33761_33814 < count__33760_33813)){
var vec__33762_33815 = cljs.core._nth.call(null,chunk__33759_33812,i__33761_33814);
var n_33816 = cljs.core.nth.call(null,vec__33762_33815,(0),null);
var meth_33817 = cljs.core.nth.call(null,vec__33762_33815,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_33817))){
cljs.compiler.emitln.call(null,"default:");

var restarg_33818 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_33818," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_33819 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_33818," = new cljs.core.IndexedSeq(",a_33819,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_33816,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_33783)),(((cljs.core.count.call(null,maxparams_33783) > (1)))?", ":null),restarg_33818,");");
} else {
var pcnt_33820 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_33817));
cljs.compiler.emitln.call(null,"case ",pcnt_33820,":");

cljs.compiler.emitln.call(null,"return ",n_33816,".call(this",(((pcnt_33820 === (0)))?null:cljs.core._conj.call(null,(function (){var x__28057__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_33820,maxparams_33783));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),",")),");");
}

var G__33821 = seq__33758_33811;
var G__33822 = chunk__33759_33812;
var G__33823 = count__33760_33813;
var G__33824 = (i__33761_33814 + (1));
seq__33758_33811 = G__33821;
chunk__33759_33812 = G__33822;
count__33760_33813 = G__33823;
i__33761_33814 = G__33824;
continue;
} else {
var temp__4657__auto___33825 = cljs.core.seq.call(null,seq__33758_33811);
if(temp__4657__auto___33825){
var seq__33758_33826__$1 = temp__4657__auto___33825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33758_33826__$1)){
var c__28034__auto___33827 = cljs.core.chunk_first.call(null,seq__33758_33826__$1);
var G__33828 = cljs.core.chunk_rest.call(null,seq__33758_33826__$1);
var G__33829 = c__28034__auto___33827;
var G__33830 = cljs.core.count.call(null,c__28034__auto___33827);
var G__33831 = (0);
seq__33758_33811 = G__33828;
chunk__33759_33812 = G__33829;
count__33760_33813 = G__33830;
i__33761_33814 = G__33831;
continue;
} else {
var vec__33765_33832 = cljs.core.first.call(null,seq__33758_33826__$1);
var n_33833 = cljs.core.nth.call(null,vec__33765_33832,(0),null);
var meth_33834 = cljs.core.nth.call(null,vec__33765_33832,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_33834))){
cljs.compiler.emitln.call(null,"default:");

var restarg_33835 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_33835," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_33836 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_33835," = new cljs.core.IndexedSeq(",a_33836,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_33833,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_33783)),(((cljs.core.count.call(null,maxparams_33783) > (1)))?", ":null),restarg_33835,");");
} else {
var pcnt_33837 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_33834));
cljs.compiler.emitln.call(null,"case ",pcnt_33837,":");

cljs.compiler.emitln.call(null,"return ",n_33833,".call(this",(((pcnt_33837 === (0)))?null:cljs.core._conj.call(null,(function (){var x__28057__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_33837,maxparams_33783));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),",")),");");
}

var G__33838 = cljs.core.next.call(null,seq__33758_33826__$1);
var G__33839 = null;
var G__33840 = (0);
var G__33841 = (0);
seq__33758_33811 = G__33838;
chunk__33759_33812 = G__33839;
count__33760_33813 = G__33840;
i__33761_33814 = G__33841;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + (arguments.length - 1)));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_33782,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_33782,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_33781__$1,mname_33782,maxparams_33783,mmap_33784,ms_33785,loop_locals,map__33746,map__33746__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__33744_SHARP_){
var vec__33768 = p1__33744_SHARP_;
var n = cljs.core.nth.call(null,vec__33768,(0),null);
var m = cljs.core.nth.call(null,vec__33768,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_33781__$1,mname_33782,maxparams_33783,mmap_33784,ms_33785,loop_locals,map__33746,map__33746__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_33785),".cljs$lang$applyTo;");
} else {
}

var seq__33771_33842 = cljs.core.seq.call(null,ms_33785);
var chunk__33772_33843 = null;
var count__33773_33844 = (0);
var i__33774_33845 = (0);
while(true){
if((i__33774_33845 < count__33773_33844)){
var vec__33775_33846 = cljs.core._nth.call(null,chunk__33772_33843,i__33774_33845);
var n_33847 = cljs.core.nth.call(null,vec__33775_33846,(0),null);
var meth_33848 = cljs.core.nth.call(null,vec__33775_33846,(1),null);
var c_33849 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_33848));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_33848))){
cljs.compiler.emitln.call(null,mname_33782,".cljs$core$IFn$_invoke$arity$variadic = ",n_33847,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_33782,".cljs$core$IFn$_invoke$arity$",c_33849," = ",n_33847,";");
}

var G__33850 = seq__33771_33842;
var G__33851 = chunk__33772_33843;
var G__33852 = count__33773_33844;
var G__33853 = (i__33774_33845 + (1));
seq__33771_33842 = G__33850;
chunk__33772_33843 = G__33851;
count__33773_33844 = G__33852;
i__33774_33845 = G__33853;
continue;
} else {
var temp__4657__auto___33854 = cljs.core.seq.call(null,seq__33771_33842);
if(temp__4657__auto___33854){
var seq__33771_33855__$1 = temp__4657__auto___33854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33771_33855__$1)){
var c__28034__auto___33856 = cljs.core.chunk_first.call(null,seq__33771_33855__$1);
var G__33857 = cljs.core.chunk_rest.call(null,seq__33771_33855__$1);
var G__33858 = c__28034__auto___33856;
var G__33859 = cljs.core.count.call(null,c__28034__auto___33856);
var G__33860 = (0);
seq__33771_33842 = G__33857;
chunk__33772_33843 = G__33858;
count__33773_33844 = G__33859;
i__33774_33845 = G__33860;
continue;
} else {
var vec__33778_33861 = cljs.core.first.call(null,seq__33771_33855__$1);
var n_33862 = cljs.core.nth.call(null,vec__33778_33861,(0),null);
var meth_33863 = cljs.core.nth.call(null,vec__33778_33861,(1),null);
var c_33864 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_33863));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_33863))){
cljs.compiler.emitln.call(null,mname_33782,".cljs$core$IFn$_invoke$arity$variadic = ",n_33862,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_33782,".cljs$core$IFn$_invoke$arity$",c_33864," = ",n_33862,";");
}

var G__33865 = cljs.core.next.call(null,seq__33771_33855__$1);
var G__33866 = null;
var G__33867 = (0);
var G__33868 = (0);
seq__33771_33842 = G__33865;
chunk__33772_33843 = G__33866;
count__33773_33844 = G__33867;
i__33774_33845 = G__33868;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_33782,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__33869){
var map__33870 = p__33869;
var map__33870__$1 = ((((!((map__33870 == null)))?((((map__33870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33870.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33870):map__33870);
var statements = cljs.core.get.call(null,map__33870__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__33870__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__33870__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__27183__auto__ = statements;
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__27183__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__33872_33876 = cljs.core.seq.call(null,statements);
var chunk__33873_33877 = null;
var count__33874_33878 = (0);
var i__33875_33879 = (0);
while(true){
if((i__33875_33879 < count__33874_33878)){
var s_33880 = cljs.core._nth.call(null,chunk__33873_33877,i__33875_33879);
cljs.compiler.emitln.call(null,s_33880);

var G__33881 = seq__33872_33876;
var G__33882 = chunk__33873_33877;
var G__33883 = count__33874_33878;
var G__33884 = (i__33875_33879 + (1));
seq__33872_33876 = G__33881;
chunk__33873_33877 = G__33882;
count__33874_33878 = G__33883;
i__33875_33879 = G__33884;
continue;
} else {
var temp__4657__auto___33885 = cljs.core.seq.call(null,seq__33872_33876);
if(temp__4657__auto___33885){
var seq__33872_33886__$1 = temp__4657__auto___33885;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33872_33886__$1)){
var c__28034__auto___33887 = cljs.core.chunk_first.call(null,seq__33872_33886__$1);
var G__33888 = cljs.core.chunk_rest.call(null,seq__33872_33886__$1);
var G__33889 = c__28034__auto___33887;
var G__33890 = cljs.core.count.call(null,c__28034__auto___33887);
var G__33891 = (0);
seq__33872_33876 = G__33888;
chunk__33873_33877 = G__33889;
count__33874_33878 = G__33890;
i__33875_33879 = G__33891;
continue;
} else {
var s_33892 = cljs.core.first.call(null,seq__33872_33886__$1);
cljs.compiler.emitln.call(null,s_33892);

var G__33893 = cljs.core.next.call(null,seq__33872_33886__$1);
var G__33894 = null;
var G__33895 = (0);
var G__33896 = (0);
seq__33872_33876 = G__33893;
chunk__33873_33877 = G__33894;
count__33874_33878 = G__33895;
i__33875_33879 = G__33896;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__27183__auto__ = statements;
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__27183__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__33897){
var map__33898 = p__33897;
var map__33898__$1 = ((((!((map__33898 == null)))?((((map__33898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33898):map__33898);
var env = cljs.core.get.call(null,map__33898__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__33898__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__33898__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__33898__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__33898__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__27195__auto__ = name;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :constant (:op finally))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__33900,is_loop){
var map__33901 = p__33900;
var map__33901__$1 = ((((!((map__33901 == null)))?((((map__33901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33901):map__33901);
var bindings = cljs.core.get.call(null,map__33901__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__33901__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__33901__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_33903_33912 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_33903_33912,context,map__33901,map__33901__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_33903_33912,context,map__33901,map__33901__$1,bindings,expr,env))
,bindings):null));

try{var seq__33904_33913 = cljs.core.seq.call(null,bindings);
var chunk__33905_33914 = null;
var count__33906_33915 = (0);
var i__33907_33916 = (0);
while(true){
if((i__33907_33916 < count__33906_33915)){
var map__33908_33917 = cljs.core._nth.call(null,chunk__33905_33914,i__33907_33916);
var map__33908_33918__$1 = ((((!((map__33908_33917 == null)))?((((map__33908_33917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33908_33917.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33908_33917):map__33908_33917);
var binding_33919 = map__33908_33918__$1;
var init_33920 = cljs.core.get.call(null,map__33908_33918__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_33919);

cljs.compiler.emitln.call(null," = ",init_33920,";");

var G__33921 = seq__33904_33913;
var G__33922 = chunk__33905_33914;
var G__33923 = count__33906_33915;
var G__33924 = (i__33907_33916 + (1));
seq__33904_33913 = G__33921;
chunk__33905_33914 = G__33922;
count__33906_33915 = G__33923;
i__33907_33916 = G__33924;
continue;
} else {
var temp__4657__auto___33925 = cljs.core.seq.call(null,seq__33904_33913);
if(temp__4657__auto___33925){
var seq__33904_33926__$1 = temp__4657__auto___33925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33904_33926__$1)){
var c__28034__auto___33927 = cljs.core.chunk_first.call(null,seq__33904_33926__$1);
var G__33928 = cljs.core.chunk_rest.call(null,seq__33904_33926__$1);
var G__33929 = c__28034__auto___33927;
var G__33930 = cljs.core.count.call(null,c__28034__auto___33927);
var G__33931 = (0);
seq__33904_33913 = G__33928;
chunk__33905_33914 = G__33929;
count__33906_33915 = G__33930;
i__33907_33916 = G__33931;
continue;
} else {
var map__33910_33932 = cljs.core.first.call(null,seq__33904_33926__$1);
var map__33910_33933__$1 = ((((!((map__33910_33932 == null)))?((((map__33910_33932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33910_33932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33910_33932):map__33910_33932);
var binding_33934 = map__33910_33933__$1;
var init_33935 = cljs.core.get.call(null,map__33910_33933__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_33934);

cljs.compiler.emitln.call(null," = ",init_33935,";");

var G__33936 = cljs.core.next.call(null,seq__33904_33926__$1);
var G__33937 = null;
var G__33938 = (0);
var G__33939 = (0);
seq__33904_33913 = G__33936;
chunk__33905_33914 = G__33937;
count__33906_33915 = G__33938;
i__33907_33916 = G__33939;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_33903_33912;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__33940){
var map__33941 = p__33940;
var map__33941__$1 = ((((!((map__33941 == null)))?((((map__33941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33941):map__33941);
var frame = cljs.core.get.call(null,map__33941__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__33941__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__33941__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__28140__auto___33943 = cljs.core.count.call(null,exprs);
var i_33944 = (0);
while(true){
if((i_33944 < n__28140__auto___33943)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_33944)," = ",exprs.call(null,i_33944),";");

var G__33945 = (i_33944 + (1));
i_33944 = G__33945;
continue;
} else {
}
break;
}

var n__28140__auto___33946 = cljs.core.count.call(null,exprs);
var i_33947 = (0);
while(true){
if((i_33947 < n__28140__auto___33946)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_33947))," = ",temps.call(null,i_33947),";");

var G__33948 = (i_33947 + (1));
i_33947 = G__33948;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__33949){
var map__33950 = p__33949;
var map__33950__$1 = ((((!((map__33950 == null)))?((((map__33950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33950):map__33950);
var bindings = cljs.core.get.call(null,map__33950__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__33950__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__33950__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__33952_33960 = cljs.core.seq.call(null,bindings);
var chunk__33953_33961 = null;
var count__33954_33962 = (0);
var i__33955_33963 = (0);
while(true){
if((i__33955_33963 < count__33954_33962)){
var map__33956_33964 = cljs.core._nth.call(null,chunk__33953_33961,i__33955_33963);
var map__33956_33965__$1 = ((((!((map__33956_33964 == null)))?((((map__33956_33964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33956_33964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33956_33964):map__33956_33964);
var binding_33966 = map__33956_33965__$1;
var init_33967 = cljs.core.get.call(null,map__33956_33965__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_33966)," = ",init_33967,";");

var G__33968 = seq__33952_33960;
var G__33969 = chunk__33953_33961;
var G__33970 = count__33954_33962;
var G__33971 = (i__33955_33963 + (1));
seq__33952_33960 = G__33968;
chunk__33953_33961 = G__33969;
count__33954_33962 = G__33970;
i__33955_33963 = G__33971;
continue;
} else {
var temp__4657__auto___33972 = cljs.core.seq.call(null,seq__33952_33960);
if(temp__4657__auto___33972){
var seq__33952_33973__$1 = temp__4657__auto___33972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33952_33973__$1)){
var c__28034__auto___33974 = cljs.core.chunk_first.call(null,seq__33952_33973__$1);
var G__33975 = cljs.core.chunk_rest.call(null,seq__33952_33973__$1);
var G__33976 = c__28034__auto___33974;
var G__33977 = cljs.core.count.call(null,c__28034__auto___33974);
var G__33978 = (0);
seq__33952_33960 = G__33975;
chunk__33953_33961 = G__33976;
count__33954_33962 = G__33977;
i__33955_33963 = G__33978;
continue;
} else {
var map__33958_33979 = cljs.core.first.call(null,seq__33952_33973__$1);
var map__33958_33980__$1 = ((((!((map__33958_33979 == null)))?((((map__33958_33979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33958_33979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33958_33979):map__33958_33979);
var binding_33981 = map__33958_33980__$1;
var init_33982 = cljs.core.get.call(null,map__33958_33980__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_33981)," = ",init_33982,";");

var G__33983 = cljs.core.next.call(null,seq__33952_33973__$1);
var G__33984 = null;
var G__33985 = (0);
var G__33986 = (0);
seq__33952_33960 = G__33983;
chunk__33953_33961 = G__33984;
count__33954_33962 = G__33985;
i__33955_33963 = G__33986;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__33989){
var map__33990 = p__33989;
var map__33990__$1 = ((((!((map__33990 == null)))?((((map__33990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33990):map__33990);
var expr = map__33990__$1;
var f = cljs.core.get.call(null,map__33990__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__33990__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__33990__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__27183__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__27183__auto__){
var and__27183__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__27183__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__27183__auto____$1;
}
} else {
return and__27183__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__27183__auto__ = protocol;
if(cljs.core.truth_(and__27183__auto__)){
var and__27183__auto____$1 = tag;
if(cljs.core.truth_(and__27183__auto____$1)){
var or__27195__auto__ = (function (){var and__27183__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__27183__auto____$2){
var and__27183__auto____$3 = protocol;
if(cljs.core.truth_(and__27183__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__27183__auto____$3;
}
} else {
return and__27183__auto____$2;
}
})();
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
var and__27183__auto____$2 = (function (){var or__27195__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__27195__auto____$1){
return or__27195__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__27183__auto____$2)){
var or__27195__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__27195__auto____$1){
return or__27195__auto____$1;
} else {
var and__27183__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__27183__auto____$3){
var and__27183__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__27183__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__27183__auto____$4;
}
} else {
return and__27183__auto____$3;
}
}
} else {
return and__27183__auto____$2;
}
}
} else {
return and__27183__auto____$1;
}
} else {
return and__27183__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__27195__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__27195__auto__){
return or__27195__auto__;
} else {
var or__27195__auto____$1 = (function (){var temp__4657__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__4657__auto__)){
var ns_str = temp__4657__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__27195__auto____$1)){
return or__27195__auto____$1;
} else {
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f))) || ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)));
var vec__33992 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__27183__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__27183__auto__)){
return (arity > mfa);
} else {
return and__27183__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33990,map__33990__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33990,map__33990__$1,expr,f,args,env){
return (function (p1__33987_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__33987_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33990,map__33990__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33990,map__33990__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33990,map__33990__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33990,map__33990__$1,expr,f,args,env){
return (function (p1__33988_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__33988_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33990,map__33990__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33990,map__33990__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__33992,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__33992,(1),null);
var env__33202__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_33995 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_33995,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_33996 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_33996,args)),(((mfa_33996 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_33996,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__27195__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
var or__27195__auto____$1 = js_QMARK_;
if(or__27195__auto____$1){
return or__27195__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797)))){
var fprop_33997 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_33997," ? ",f__$1,fprop_33997,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_33997," ? ",f__$1,fprop_33997,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__33998){
var map__33999 = p__33998;
var map__33999__$1 = ((((!((map__33999 == null)))?((((map__33999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33999.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33999):map__33999);
var ctor = cljs.core.get.call(null,map__33999__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__33999__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__33999__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33202__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__34001){
var map__34002 = p__34001;
var map__34002__$1 = ((((!((map__34002 == null)))?((((map__34002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34002.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34002):map__34002);
var target = cljs.core.get.call(null,map__34002__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__34002__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__34002__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33202__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__34004 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__34004__$1 = ((((!((map__34004 == null)))?((((map__34004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34004):map__34004);
var options = cljs.core.get.call(null,map__34004__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__34004__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__34005 = options;
var map__34005__$1 = ((((!((map__34005 == null)))?((((map__34005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34005.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34005):map__34005);
var target = cljs.core.get.call(null,map__34005__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__34005__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__34006 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__34012 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__34012__$1 = ((((!((map__34012 == null)))?((((map__34012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34012):map__34012);
var node_libs = cljs.core.get.call(null,map__34012__$1,true);
var libs_to_load = cljs.core.get.call(null,map__34012__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__34006,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__34006,(1),null);
var map__34009 = cljs.core.group_by.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__34009__$1 = ((((!((map__34009 == null)))?((((map__34009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34009):map__34009);
var global_exports_libs = cljs.core.get.call(null,map__34009__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__34009__$1,false);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__34015_34031 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__34016_34032 = null;
var count__34017_34033 = (0);
var i__34018_34034 = (0);
while(true){
if((i__34018_34034 < count__34017_34033)){
var lib_34035 = cljs.core._nth.call(null,chunk__34016_34032,i__34018_34034);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_34035)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__27195__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_34035),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_34035),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__27195__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_34035),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_34035),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_34035),"');");

}
}
}

var G__34036 = seq__34015_34031;
var G__34037 = chunk__34016_34032;
var G__34038 = count__34017_34033;
var G__34039 = (i__34018_34034 + (1));
seq__34015_34031 = G__34036;
chunk__34016_34032 = G__34037;
count__34017_34033 = G__34038;
i__34018_34034 = G__34039;
continue;
} else {
var temp__4657__auto___34040 = cljs.core.seq.call(null,seq__34015_34031);
if(temp__4657__auto___34040){
var seq__34015_34041__$1 = temp__4657__auto___34040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34015_34041__$1)){
var c__28034__auto___34042 = cljs.core.chunk_first.call(null,seq__34015_34041__$1);
var G__34043 = cljs.core.chunk_rest.call(null,seq__34015_34041__$1);
var G__34044 = c__28034__auto___34042;
var G__34045 = cljs.core.count.call(null,c__28034__auto___34042);
var G__34046 = (0);
seq__34015_34031 = G__34043;
chunk__34016_34032 = G__34044;
count__34017_34033 = G__34045;
i__34018_34034 = G__34046;
continue;
} else {
var lib_34047 = cljs.core.first.call(null,seq__34015_34041__$1);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_34047)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__27195__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_34047),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_34047),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__27195__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_34047),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_34047),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_34047),"');");

}
}
}

var G__34048 = cljs.core.next.call(null,seq__34015_34041__$1);
var G__34049 = null;
var G__34050 = (0);
var G__34051 = (0);
seq__34015_34031 = G__34048;
chunk__34016_34032 = G__34049;
count__34017_34033 = G__34050;
i__34018_34034 = G__34051;
continue;
}
} else {
}
}
break;
}

var seq__34019_34052 = cljs.core.seq.call(null,node_libs);
var chunk__34020_34053 = null;
var count__34021_34054 = (0);
var i__34022_34055 = (0);
while(true){
if((i__34022_34055 < count__34021_34054)){
var lib_34056 = cljs.core._nth.call(null,chunk__34020_34053,i__34022_34055);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_34056)," = require('",lib_34056,"');");

var G__34057 = seq__34019_34052;
var G__34058 = chunk__34020_34053;
var G__34059 = count__34021_34054;
var G__34060 = (i__34022_34055 + (1));
seq__34019_34052 = G__34057;
chunk__34020_34053 = G__34058;
count__34021_34054 = G__34059;
i__34022_34055 = G__34060;
continue;
} else {
var temp__4657__auto___34061 = cljs.core.seq.call(null,seq__34019_34052);
if(temp__4657__auto___34061){
var seq__34019_34062__$1 = temp__4657__auto___34061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34019_34062__$1)){
var c__28034__auto___34063 = cljs.core.chunk_first.call(null,seq__34019_34062__$1);
var G__34064 = cljs.core.chunk_rest.call(null,seq__34019_34062__$1);
var G__34065 = c__28034__auto___34063;
var G__34066 = cljs.core.count.call(null,c__28034__auto___34063);
var G__34067 = (0);
seq__34019_34052 = G__34064;
chunk__34020_34053 = G__34065;
count__34021_34054 = G__34066;
i__34022_34055 = G__34067;
continue;
} else {
var lib_34068 = cljs.core.first.call(null,seq__34019_34062__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_34068)," = require('",lib_34068,"');");

var G__34069 = cljs.core.next.call(null,seq__34019_34062__$1);
var G__34070 = null;
var G__34071 = (0);
var G__34072 = (0);
seq__34019_34052 = G__34069;
chunk__34020_34053 = G__34070;
count__34021_34054 = G__34071;
i__34022_34055 = G__34072;
continue;
}
} else {
}
}
break;
}

var seq__34023_34073 = cljs.core.seq.call(null,global_exports_libs);
var chunk__34024_34074 = null;
var count__34025_34075 = (0);
var i__34026_34076 = (0);
while(true){
if((i__34026_34076 < count__34025_34075)){
var lib_34077 = cljs.core._nth.call(null,chunk__34024_34074,i__34026_34076);
var map__34027_34078 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_34077));
var map__34027_34079__$1 = ((((!((map__34027_34078 == null)))?((((map__34027_34078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34027_34078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34027_34078):map__34027_34078);
var global_exports_34080 = cljs.core.get.call(null,map__34027_34079__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_34077)," = goog.global.",cljs.core.get.call(null,global_exports_34080,cljs.core.symbol.call(null,lib_34077)),";");

var G__34081 = seq__34023_34073;
var G__34082 = chunk__34024_34074;
var G__34083 = count__34025_34075;
var G__34084 = (i__34026_34076 + (1));
seq__34023_34073 = G__34081;
chunk__34024_34074 = G__34082;
count__34025_34075 = G__34083;
i__34026_34076 = G__34084;
continue;
} else {
var temp__4657__auto___34085 = cljs.core.seq.call(null,seq__34023_34073);
if(temp__4657__auto___34085){
var seq__34023_34086__$1 = temp__4657__auto___34085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34023_34086__$1)){
var c__28034__auto___34087 = cljs.core.chunk_first.call(null,seq__34023_34086__$1);
var G__34088 = cljs.core.chunk_rest.call(null,seq__34023_34086__$1);
var G__34089 = c__28034__auto___34087;
var G__34090 = cljs.core.count.call(null,c__28034__auto___34087);
var G__34091 = (0);
seq__34023_34073 = G__34088;
chunk__34024_34074 = G__34089;
count__34025_34075 = G__34090;
i__34026_34076 = G__34091;
continue;
} else {
var lib_34092 = cljs.core.first.call(null,seq__34023_34086__$1);
var map__34029_34093 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_34092));
var map__34029_34094__$1 = ((((!((map__34029_34093 == null)))?((((map__34029_34093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34029_34093.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34029_34093):map__34029_34093);
var global_exports_34095 = cljs.core.get.call(null,map__34029_34094__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_34092)," = goog.global.",cljs.core.get.call(null,global_exports_34095,cljs.core.symbol.call(null,lib_34092)),";");

var G__34096 = cljs.core.next.call(null,seq__34023_34086__$1);
var G__34097 = null;
var G__34098 = (0);
var G__34099 = (0);
seq__34023_34073 = G__34096;
chunk__34024_34074 = G__34097;
count__34025_34075 = G__34098;
i__34026_34076 = G__34099;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__34100){
var map__34101 = p__34100;
var map__34101__$1 = ((((!((map__34101 == null)))?((((map__34101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34101):map__34101);
var name = cljs.core.get.call(null,map__34101__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__34101__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__34101__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__34101__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__34101__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__34101__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__34101__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__34103){
var map__34104 = p__34103;
var map__34104__$1 = ((((!((map__34104 == null)))?((((map__34104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34104.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34104):map__34104);
var name = cljs.core.get.call(null,map__34104__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__34104__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__34104__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__34104__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__34104__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__34104__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__34104__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__34106){
var map__34107 = p__34106;
var map__34107__$1 = ((((!((map__34107 == null)))?((((map__34107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34107.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34107):map__34107);
var t = cljs.core.get.call(null,map__34107__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__34107__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__34107__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__34107__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__34107__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__34109_34127 = cljs.core.seq.call(null,protocols);
var chunk__34110_34128 = null;
var count__34111_34129 = (0);
var i__34112_34130 = (0);
while(true){
if((i__34112_34130 < count__34111_34129)){
var protocol_34131 = cljs.core._nth.call(null,chunk__34110_34128,i__34112_34130);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_34131)].join('')),"}");

var G__34132 = seq__34109_34127;
var G__34133 = chunk__34110_34128;
var G__34134 = count__34111_34129;
var G__34135 = (i__34112_34130 + (1));
seq__34109_34127 = G__34132;
chunk__34110_34128 = G__34133;
count__34111_34129 = G__34134;
i__34112_34130 = G__34135;
continue;
} else {
var temp__4657__auto___34136 = cljs.core.seq.call(null,seq__34109_34127);
if(temp__4657__auto___34136){
var seq__34109_34137__$1 = temp__4657__auto___34136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34109_34137__$1)){
var c__28034__auto___34138 = cljs.core.chunk_first.call(null,seq__34109_34137__$1);
var G__34139 = cljs.core.chunk_rest.call(null,seq__34109_34137__$1);
var G__34140 = c__28034__auto___34138;
var G__34141 = cljs.core.count.call(null,c__28034__auto___34138);
var G__34142 = (0);
seq__34109_34127 = G__34139;
chunk__34110_34128 = G__34140;
count__34111_34129 = G__34141;
i__34112_34130 = G__34142;
continue;
} else {
var protocol_34143 = cljs.core.first.call(null,seq__34109_34137__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_34143)].join('')),"}");

var G__34144 = cljs.core.next.call(null,seq__34109_34137__$1);
var G__34145 = null;
var G__34146 = (0);
var G__34147 = (0);
seq__34109_34127 = G__34144;
chunk__34110_34128 = G__34145;
count__34111_34129 = G__34146;
i__34112_34130 = G__34147;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__34113_34148 = cljs.core.seq.call(null,fields__$1);
var chunk__34114_34149 = null;
var count__34115_34150 = (0);
var i__34116_34151 = (0);
while(true){
if((i__34116_34151 < count__34115_34150)){
var fld_34152 = cljs.core._nth.call(null,chunk__34114_34149,i__34116_34151);
cljs.compiler.emitln.call(null,"this.",fld_34152," = ",fld_34152,";");

var G__34153 = seq__34113_34148;
var G__34154 = chunk__34114_34149;
var G__34155 = count__34115_34150;
var G__34156 = (i__34116_34151 + (1));
seq__34113_34148 = G__34153;
chunk__34114_34149 = G__34154;
count__34115_34150 = G__34155;
i__34116_34151 = G__34156;
continue;
} else {
var temp__4657__auto___34157 = cljs.core.seq.call(null,seq__34113_34148);
if(temp__4657__auto___34157){
var seq__34113_34158__$1 = temp__4657__auto___34157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34113_34158__$1)){
var c__28034__auto___34159 = cljs.core.chunk_first.call(null,seq__34113_34158__$1);
var G__34160 = cljs.core.chunk_rest.call(null,seq__34113_34158__$1);
var G__34161 = c__28034__auto___34159;
var G__34162 = cljs.core.count.call(null,c__28034__auto___34159);
var G__34163 = (0);
seq__34113_34148 = G__34160;
chunk__34114_34149 = G__34161;
count__34115_34150 = G__34162;
i__34116_34151 = G__34163;
continue;
} else {
var fld_34164 = cljs.core.first.call(null,seq__34113_34158__$1);
cljs.compiler.emitln.call(null,"this.",fld_34164," = ",fld_34164,";");

var G__34165 = cljs.core.next.call(null,seq__34113_34158__$1);
var G__34166 = null;
var G__34167 = (0);
var G__34168 = (0);
seq__34113_34148 = G__34165;
chunk__34114_34149 = G__34166;
count__34115_34150 = G__34167;
i__34116_34151 = G__34168;
continue;
}
} else {
}
}
break;
}

var seq__34117_34169 = cljs.core.seq.call(null,pmasks);
var chunk__34118_34170 = null;
var count__34119_34171 = (0);
var i__34120_34172 = (0);
while(true){
if((i__34120_34172 < count__34119_34171)){
var vec__34121_34173 = cljs.core._nth.call(null,chunk__34118_34170,i__34120_34172);
var pno_34174 = cljs.core.nth.call(null,vec__34121_34173,(0),null);
var pmask_34175 = cljs.core.nth.call(null,vec__34121_34173,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_34174,"$ = ",pmask_34175,";");

var G__34176 = seq__34117_34169;
var G__34177 = chunk__34118_34170;
var G__34178 = count__34119_34171;
var G__34179 = (i__34120_34172 + (1));
seq__34117_34169 = G__34176;
chunk__34118_34170 = G__34177;
count__34119_34171 = G__34178;
i__34120_34172 = G__34179;
continue;
} else {
var temp__4657__auto___34180 = cljs.core.seq.call(null,seq__34117_34169);
if(temp__4657__auto___34180){
var seq__34117_34181__$1 = temp__4657__auto___34180;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34117_34181__$1)){
var c__28034__auto___34182 = cljs.core.chunk_first.call(null,seq__34117_34181__$1);
var G__34183 = cljs.core.chunk_rest.call(null,seq__34117_34181__$1);
var G__34184 = c__28034__auto___34182;
var G__34185 = cljs.core.count.call(null,c__28034__auto___34182);
var G__34186 = (0);
seq__34117_34169 = G__34183;
chunk__34118_34170 = G__34184;
count__34119_34171 = G__34185;
i__34120_34172 = G__34186;
continue;
} else {
var vec__34124_34187 = cljs.core.first.call(null,seq__34117_34181__$1);
var pno_34188 = cljs.core.nth.call(null,vec__34124_34187,(0),null);
var pmask_34189 = cljs.core.nth.call(null,vec__34124_34187,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_34188,"$ = ",pmask_34189,";");

var G__34190 = cljs.core.next.call(null,seq__34117_34181__$1);
var G__34191 = null;
var G__34192 = (0);
var G__34193 = (0);
seq__34117_34169 = G__34190;
chunk__34118_34170 = G__34191;
count__34119_34171 = G__34192;
i__34120_34172 = G__34193;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__34194){
var map__34195 = p__34194;
var map__34195__$1 = ((((!((map__34195 == null)))?((((map__34195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34195.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34195):map__34195);
var t = cljs.core.get.call(null,map__34195__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__34195__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__34195__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__34195__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__34195__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__34197_34215 = cljs.core.seq.call(null,protocols);
var chunk__34198_34216 = null;
var count__34199_34217 = (0);
var i__34200_34218 = (0);
while(true){
if((i__34200_34218 < count__34199_34217)){
var protocol_34219 = cljs.core._nth.call(null,chunk__34198_34216,i__34200_34218);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_34219)].join('')),"}");

var G__34220 = seq__34197_34215;
var G__34221 = chunk__34198_34216;
var G__34222 = count__34199_34217;
var G__34223 = (i__34200_34218 + (1));
seq__34197_34215 = G__34220;
chunk__34198_34216 = G__34221;
count__34199_34217 = G__34222;
i__34200_34218 = G__34223;
continue;
} else {
var temp__4657__auto___34224 = cljs.core.seq.call(null,seq__34197_34215);
if(temp__4657__auto___34224){
var seq__34197_34225__$1 = temp__4657__auto___34224;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34197_34225__$1)){
var c__28034__auto___34226 = cljs.core.chunk_first.call(null,seq__34197_34225__$1);
var G__34227 = cljs.core.chunk_rest.call(null,seq__34197_34225__$1);
var G__34228 = c__28034__auto___34226;
var G__34229 = cljs.core.count.call(null,c__28034__auto___34226);
var G__34230 = (0);
seq__34197_34215 = G__34227;
chunk__34198_34216 = G__34228;
count__34199_34217 = G__34229;
i__34200_34218 = G__34230;
continue;
} else {
var protocol_34231 = cljs.core.first.call(null,seq__34197_34225__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_34231)].join('')),"}");

var G__34232 = cljs.core.next.call(null,seq__34197_34225__$1);
var G__34233 = null;
var G__34234 = (0);
var G__34235 = (0);
seq__34197_34215 = G__34232;
chunk__34198_34216 = G__34233;
count__34199_34217 = G__34234;
i__34200_34218 = G__34235;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__34201_34236 = cljs.core.seq.call(null,fields__$1);
var chunk__34202_34237 = null;
var count__34203_34238 = (0);
var i__34204_34239 = (0);
while(true){
if((i__34204_34239 < count__34203_34238)){
var fld_34240 = cljs.core._nth.call(null,chunk__34202_34237,i__34204_34239);
cljs.compiler.emitln.call(null,"this.",fld_34240," = ",fld_34240,";");

var G__34241 = seq__34201_34236;
var G__34242 = chunk__34202_34237;
var G__34243 = count__34203_34238;
var G__34244 = (i__34204_34239 + (1));
seq__34201_34236 = G__34241;
chunk__34202_34237 = G__34242;
count__34203_34238 = G__34243;
i__34204_34239 = G__34244;
continue;
} else {
var temp__4657__auto___34245 = cljs.core.seq.call(null,seq__34201_34236);
if(temp__4657__auto___34245){
var seq__34201_34246__$1 = temp__4657__auto___34245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34201_34246__$1)){
var c__28034__auto___34247 = cljs.core.chunk_first.call(null,seq__34201_34246__$1);
var G__34248 = cljs.core.chunk_rest.call(null,seq__34201_34246__$1);
var G__34249 = c__28034__auto___34247;
var G__34250 = cljs.core.count.call(null,c__28034__auto___34247);
var G__34251 = (0);
seq__34201_34236 = G__34248;
chunk__34202_34237 = G__34249;
count__34203_34238 = G__34250;
i__34204_34239 = G__34251;
continue;
} else {
var fld_34252 = cljs.core.first.call(null,seq__34201_34246__$1);
cljs.compiler.emitln.call(null,"this.",fld_34252," = ",fld_34252,";");

var G__34253 = cljs.core.next.call(null,seq__34201_34246__$1);
var G__34254 = null;
var G__34255 = (0);
var G__34256 = (0);
seq__34201_34236 = G__34253;
chunk__34202_34237 = G__34254;
count__34203_34238 = G__34255;
i__34204_34239 = G__34256;
continue;
}
} else {
}
}
break;
}

var seq__34205_34257 = cljs.core.seq.call(null,pmasks);
var chunk__34206_34258 = null;
var count__34207_34259 = (0);
var i__34208_34260 = (0);
while(true){
if((i__34208_34260 < count__34207_34259)){
var vec__34209_34261 = cljs.core._nth.call(null,chunk__34206_34258,i__34208_34260);
var pno_34262 = cljs.core.nth.call(null,vec__34209_34261,(0),null);
var pmask_34263 = cljs.core.nth.call(null,vec__34209_34261,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_34262,"$ = ",pmask_34263,";");

var G__34264 = seq__34205_34257;
var G__34265 = chunk__34206_34258;
var G__34266 = count__34207_34259;
var G__34267 = (i__34208_34260 + (1));
seq__34205_34257 = G__34264;
chunk__34206_34258 = G__34265;
count__34207_34259 = G__34266;
i__34208_34260 = G__34267;
continue;
} else {
var temp__4657__auto___34268 = cljs.core.seq.call(null,seq__34205_34257);
if(temp__4657__auto___34268){
var seq__34205_34269__$1 = temp__4657__auto___34268;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34205_34269__$1)){
var c__28034__auto___34270 = cljs.core.chunk_first.call(null,seq__34205_34269__$1);
var G__34271 = cljs.core.chunk_rest.call(null,seq__34205_34269__$1);
var G__34272 = c__28034__auto___34270;
var G__34273 = cljs.core.count.call(null,c__28034__auto___34270);
var G__34274 = (0);
seq__34205_34257 = G__34271;
chunk__34206_34258 = G__34272;
count__34207_34259 = G__34273;
i__34208_34260 = G__34274;
continue;
} else {
var vec__34212_34275 = cljs.core.first.call(null,seq__34205_34269__$1);
var pno_34276 = cljs.core.nth.call(null,vec__34212_34275,(0),null);
var pmask_34277 = cljs.core.nth.call(null,vec__34212_34275,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_34276,"$ = ",pmask_34277,";");

var G__34278 = cljs.core.next.call(null,seq__34205_34269__$1);
var G__34279 = null;
var G__34280 = (0);
var G__34281 = (0);
seq__34205_34257 = G__34278;
chunk__34206_34258 = G__34279;
count__34207_34259 = G__34280;
i__34208_34260 = G__34281;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__34282){
var map__34283 = p__34282;
var map__34283__$1 = ((((!((map__34283 == null)))?((((map__34283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34283):map__34283);
var target = cljs.core.get.call(null,map__34283__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__34283__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__34283__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__34283__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__34283__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33202__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__34285){
var map__34286 = p__34285;
var map__34286__$1 = ((((!((map__34286 == null)))?((((map__34286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34286.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34286):map__34286);
var op = cljs.core.get.call(null,map__34286__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__34286__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__34286__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__34286__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__34286__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__27183__auto__ = code;
if(cljs.core.truth_(and__27183__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__27183__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__33202__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33202__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"cache-key","cache-key",-565448732),new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445),new cljs.core.Keyword(null,"language-out","language-out",334619882)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__34291 = cljs.core.seq.call(null,table);
var chunk__34292 = null;
var count__34293 = (0);
var i__34294 = (0);
while(true){
if((i__34294 < count__34293)){
var vec__34295 = cljs.core._nth.call(null,chunk__34292,i__34294);
var sym = cljs.core.nth.call(null,vec__34295,(0),null);
var value = cljs.core.nth.call(null,vec__34295,(1),null);
var ns_34301 = cljs.core.namespace.call(null,sym);
var name_34302 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__34303 = seq__34291;
var G__34304 = chunk__34292;
var G__34305 = count__34293;
var G__34306 = (i__34294 + (1));
seq__34291 = G__34303;
chunk__34292 = G__34304;
count__34293 = G__34305;
i__34294 = G__34306;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34291);
if(temp__4657__auto__){
var seq__34291__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34291__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__34291__$1);
var G__34307 = cljs.core.chunk_rest.call(null,seq__34291__$1);
var G__34308 = c__28034__auto__;
var G__34309 = cljs.core.count.call(null,c__28034__auto__);
var G__34310 = (0);
seq__34291 = G__34307;
chunk__34292 = G__34308;
count__34293 = G__34309;
i__34294 = G__34310;
continue;
} else {
var vec__34298 = cljs.core.first.call(null,seq__34291__$1);
var sym = cljs.core.nth.call(null,vec__34298,(0),null);
var value = cljs.core.nth.call(null,vec__34298,(1),null);
var ns_34311 = cljs.core.namespace.call(null,sym);
var name_34312 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__34313 = cljs.core.next.call(null,seq__34291__$1);
var G__34314 = null;
var G__34315 = (0);
var G__34316 = (0);
seq__34291 = G__34313;
chunk__34292 = G__34314;
count__34293 = G__34315;
i__34294 = G__34316;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__34318 = arguments.length;
switch (G__34318) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_34323 = cljs.core.first.call(null,ks);
var vec__34319_34324 = cljs.core.conj.call(null,prefix,k_34323);
var top_34325 = cljs.core.nth.call(null,vec__34319_34324,(0),null);
var prefix_SINGLEQUOTE__34326 = vec__34319_34324;
if((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_34323)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__34326) == null))){
if(!((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_34325)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_34325)))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__34326)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_34325);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__34326)),";");
}
} else {
}

var m_34327 = cljs.core.get.call(null,externs,k_34323);
if(cljs.core.empty_QMARK_.call(null,m_34327)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__34326,m_34327,top_level,known_externs);
}

var G__34328 = cljs.core.next.call(null,ks);
ks = G__34328;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
