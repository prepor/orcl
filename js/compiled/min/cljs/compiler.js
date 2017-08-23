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
var map__32692 = s;
var map__32692__$1 = ((((!((map__32692 == null)))?((((map__32692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32692.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32692):map__32692);
var name = cljs.core.get.call(null,map__32692__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__32692__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__32695 = info;
var map__32696 = G__32695;
var map__32696__$1 = ((((!((map__32696 == null)))?((((map__32696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32696.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32696):map__32696);
var shadow = cljs.core.get.call(null,map__32696__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__32695__$1 = G__32695;
while(true){
var d__$2 = d__$1;
var map__32698 = G__32695__$1;
var map__32698__$1 = ((((!((map__32698 == null)))?((((map__32698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32698):map__32698);
var shadow__$1 = cljs.core.get.call(null,map__32698__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__32700 = (d__$2 + (1));
var G__32701 = shadow__$1;
d__$1 = G__32700;
G__32695__$1 = G__32701;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__32702){
var map__32703 = p__32702;
var map__32703__$1 = ((((!((map__32703 == null)))?((((map__32703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32703):map__32703);
var name_var = map__32703__$1;
var name = cljs.core.get.call(null,map__32703__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__32703__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__32705 = info;
var map__32705__$1 = ((((!((map__32705 == null)))?((((map__32705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32705.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32705):map__32705);
var ns = cljs.core.get.call(null,map__32705__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__32705__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__32708 = arguments.length;
switch (G__32708) {
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
var G__32710 = cp;
switch (G__32710) {
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
var seq__32712_32716 = cljs.core.seq.call(null,s);
var chunk__32713_32717 = null;
var count__32714_32718 = (0);
var i__32715_32719 = (0);
while(true){
if((i__32715_32719 < count__32714_32718)){
var c_32720 = cljs.core._nth.call(null,chunk__32713_32717,i__32715_32719);
sb.append(cljs.compiler.escape_char.call(null,c_32720));

var G__32721 = seq__32712_32716;
var G__32722 = chunk__32713_32717;
var G__32723 = count__32714_32718;
var G__32724 = (i__32715_32719 + (1));
seq__32712_32716 = G__32721;
chunk__32713_32717 = G__32722;
count__32714_32718 = G__32723;
i__32715_32719 = G__32724;
continue;
} else {
var temp__4657__auto___32725 = cljs.core.seq.call(null,seq__32712_32716);
if(temp__4657__auto___32725){
var seq__32712_32726__$1 = temp__4657__auto___32725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32712_32726__$1)){
var c__28034__auto___32727 = cljs.core.chunk_first.call(null,seq__32712_32726__$1);
var G__32728 = cljs.core.chunk_rest.call(null,seq__32712_32726__$1);
var G__32729 = c__28034__auto___32727;
var G__32730 = cljs.core.count.call(null,c__28034__auto___32727);
var G__32731 = (0);
seq__32712_32716 = G__32728;
chunk__32713_32717 = G__32729;
count__32714_32718 = G__32730;
i__32715_32719 = G__32731;
continue;
} else {
var c_32732 = cljs.core.first.call(null,seq__32712_32726__$1);
sb.append(cljs.compiler.escape_char.call(null,c_32732));

var G__32733 = cljs.core.next.call(null,seq__32712_32726__$1);
var G__32734 = null;
var G__32735 = (0);
var G__32736 = (0);
seq__32712_32716 = G__32733;
chunk__32713_32717 = G__32734;
count__32714_32718 = G__32735;
i__32715_32719 = G__32736;
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
var val__31089__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__31089__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__32737_32742 = ast;
var map__32737_32743__$1 = ((((!((map__32737_32742 == null)))?((((map__32737_32742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32737_32742.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32737_32742):map__32737_32742);
var env_32744 = cljs.core.get.call(null,map__32737_32743__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_32744))){
var map__32739_32745 = env_32744;
var map__32739_32746__$1 = ((((!((map__32739_32745 == null)))?((((map__32739_32745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32739_32745.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32739_32745):map__32739_32745);
var line_32747 = cljs.core.get.call(null,map__32739_32746__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_32748 = cljs.core.get.call(null,map__32739_32746__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__32739_32745,map__32739_32746__$1,line_32747,column_32748,map__32737_32742,map__32737_32743__$1,env_32744,val__31089__auto__){
return (function (m){
var minfo = (function (){var G__32741 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__32741,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__32741;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_32747 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__32739_32745,map__32739_32746__$1,line_32747,column_32748,map__32737_32742,map__32737_32743__$1,env_32744,val__31089__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_32748)?(column_32748 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__32739_32745,map__32739_32746__$1,line_32747,column_32748,map__32737_32742,map__32737_32743__$1,env_32744,val__31089__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__32739_32745,map__32739_32746__$1,line_32747,column_32748,map__32737_32742,map__32737_32743__$1,env_32744,val__31089__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__32739_32745,map__32739_32746__$1,line_32747,column_32748,map__32737_32742,map__32737_32743__$1,env_32744,val__31089__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__32739_32745,map__32739_32746__$1,line_32747,column_32748,map__32737_32742,map__32737_32743__$1,env_32744,val__31089__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__31089__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__28371__auto__ = [];
var len__28364__auto___32755 = arguments.length;
var i__28365__auto___32756 = (0);
while(true){
if((i__28365__auto___32756 < len__28364__auto___32755)){
args__28371__auto__.push((arguments[i__28365__auto___32756]));

var G__32757 = (i__28365__auto___32756 + (1));
i__28365__auto___32756 = G__32757;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__32751_32758 = cljs.core.seq.call(null,xs);
var chunk__32752_32759 = null;
var count__32753_32760 = (0);
var i__32754_32761 = (0);
while(true){
if((i__32754_32761 < count__32753_32760)){
var x_32762 = cljs.core._nth.call(null,chunk__32752_32759,i__32754_32761);
if((x_32762 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_32762)){
cljs.compiler.emit.call(null,x_32762);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_32762)){
cljs.core.apply.call(null,cljs.compiler.emits,x_32762);
} else {
if(goog.isFunction(x_32762)){
x_32762.call(null);
} else {
var s_32763 = cljs.core.print_str.call(null,x_32762);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__32751_32758,chunk__32752_32759,count__32753_32760,i__32754_32761,s_32763,x_32762){
return (function (p1__32749_SHARP_){
return (p1__32749_SHARP_ + cljs.core.count.call(null,s_32763));
});})(seq__32751_32758,chunk__32752_32759,count__32753_32760,i__32754_32761,s_32763,x_32762))
);
}

cljs.core.print.call(null,s_32763);

}
}
}
}

var G__32764 = seq__32751_32758;
var G__32765 = chunk__32752_32759;
var G__32766 = count__32753_32760;
var G__32767 = (i__32754_32761 + (1));
seq__32751_32758 = G__32764;
chunk__32752_32759 = G__32765;
count__32753_32760 = G__32766;
i__32754_32761 = G__32767;
continue;
} else {
var temp__4657__auto___32768 = cljs.core.seq.call(null,seq__32751_32758);
if(temp__4657__auto___32768){
var seq__32751_32769__$1 = temp__4657__auto___32768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32751_32769__$1)){
var c__28034__auto___32770 = cljs.core.chunk_first.call(null,seq__32751_32769__$1);
var G__32771 = cljs.core.chunk_rest.call(null,seq__32751_32769__$1);
var G__32772 = c__28034__auto___32770;
var G__32773 = cljs.core.count.call(null,c__28034__auto___32770);
var G__32774 = (0);
seq__32751_32758 = G__32771;
chunk__32752_32759 = G__32772;
count__32753_32760 = G__32773;
i__32754_32761 = G__32774;
continue;
} else {
var x_32775 = cljs.core.first.call(null,seq__32751_32769__$1);
if((x_32775 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_32775)){
cljs.compiler.emit.call(null,x_32775);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_32775)){
cljs.core.apply.call(null,cljs.compiler.emits,x_32775);
} else {
if(goog.isFunction(x_32775)){
x_32775.call(null);
} else {
var s_32776 = cljs.core.print_str.call(null,x_32775);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__32751_32758,chunk__32752_32759,count__32753_32760,i__32754_32761,s_32776,x_32775,seq__32751_32769__$1,temp__4657__auto___32768){
return (function (p1__32749_SHARP_){
return (p1__32749_SHARP_ + cljs.core.count.call(null,s_32776));
});})(seq__32751_32758,chunk__32752_32759,count__32753_32760,i__32754_32761,s_32776,x_32775,seq__32751_32769__$1,temp__4657__auto___32768))
);
}

cljs.core.print.call(null,s_32776);

}
}
}
}

var G__32777 = cljs.core.next.call(null,seq__32751_32769__$1);
var G__32778 = null;
var G__32779 = (0);
var G__32780 = (0);
seq__32751_32758 = G__32777;
chunk__32752_32759 = G__32778;
count__32753_32760 = G__32779;
i__32754_32761 = G__32780;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq32750){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32750));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__28371__auto__ = [];
var len__28364__auto___32786 = arguments.length;
var i__28365__auto___32787 = (0);
while(true){
if((i__28365__auto___32787 < len__28364__auto___32786)){
args__28371__auto__.push((arguments[i__28365__auto___32787]));

var G__32788 = (i__28365__auto___32787 + (1));
i__28365__auto___32787 = G__32788;
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

var _STAR_flush_on_newline_STAR_32782_32789 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_32782_32789;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__32783){
var map__32784 = p__32783;
var map__32784__$1 = ((((!((map__32784 == null)))?((((map__32784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32784.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32784):map__32784);
var m = map__32784__$1;
var gen_line = cljs.core.get.call(null,map__32784__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq32781){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32781));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__28222__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_32790_32792 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_32791_32793 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_32790_32792,_STAR_print_fn_STAR_32791_32793,sb__28222__auto__){
return (function (x__28223__auto__){
return sb__28222__auto__.append(x__28223__auto__);
});})(_STAR_print_newline_STAR_32790_32792,_STAR_print_fn_STAR_32791_32793,sb__28222__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32791_32793;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_32790_32792;
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
var vec__32794 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__32794,(0),null);
var flags = cljs.core.nth.call(null,vec__32794,(1),null);
var pattern = cljs.core.nth.call(null,vec__32794,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__32798){
var map__32799 = p__32798;
var map__32799__$1 = ((((!((map__32799 == null)))?((((map__32799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32799):map__32799);
var ast = map__32799__$1;
var info = cljs.core.get.call(null,map__32799__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__32799__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__32799__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__4655__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__4655__auto__)){
var const_expr = temp__4655__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__32801 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__32801__$1 = ((((!((map__32801 == null)))?((((map__32801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32801.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32801):map__32801);
var cenv = map__32801__$1;
var options = cljs.core.get.call(null,map__32801__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__32803 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__27183__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__27183__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__27183__auto__;
}
})())){
return clojure.set.difference.call(null,G__32803,cljs.analyzer.es5_allowed);
} else {
return G__32803;
}
})();
var env__32684__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__32804 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__32804,reserved);
} else {
return G__32804;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__32805){
var map__32806 = p__32805;
var map__32806__$1 = ((((!((map__32806 == null)))?((((map__32806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32806):map__32806);
var arg = map__32806__$1;
var env = cljs.core.get.call(null,map__32806__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__32806__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__32806__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__32806__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__32808 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__32808__$1 = ((((!((map__32808 == null)))?((((map__32808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32808):map__32808);
var name = cljs.core.get.call(null,map__32808__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__32684__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__32810){
var map__32811 = p__32810;
var map__32811__$1 = ((((!((map__32811 == null)))?((((map__32811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32811):map__32811);
var expr = cljs.core.get.call(null,map__32811__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__32811__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__32811__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32684__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__32813_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__32813_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__32814){
var map__32815 = p__32814;
var map__32815__$1 = ((((!((map__32815 == null)))?((((map__32815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32815):map__32815);
var env = cljs.core.get.call(null,map__32815__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__32815__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__32815__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__32684__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__32817){
var map__32818 = p__32817;
var map__32818__$1 = ((((!((map__32818 == null)))?((((map__32818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32818):map__32818);
var items = cljs.core.get.call(null,map__32818__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__32818__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32684__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__32820){
var map__32821 = p__32820;
var map__32821__$1 = ((((!((map__32821 == null)))?((((map__32821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32821):map__32821);
var items = cljs.core.get.call(null,map__32821__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__32821__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32684__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_32823 = cljs.core.count.call(null,items);
if((cnt_32823 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_32823,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__32824_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__32824_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__32825){
var map__32826 = p__32825;
var map__32826__$1 = ((((!((map__32826 == null)))?((((map__32826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32826):map__32826);
var items = cljs.core.get.call(null,map__32826__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__32826__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32684__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__32828){
var map__32829 = p__32828;
var map__32829__$1 = ((((!((map__32829 == null)))?((((map__32829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32829):map__32829);
var items = cljs.core.get.call(null,map__32829__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__32829__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__32829__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32684__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___32847 = cljs.core.seq.call(null,items);
if(temp__4657__auto___32847){
var items_32848__$1 = temp__4657__auto___32847;
var vec__32831_32849 = items_32848__$1;
var seq__32832_32850 = cljs.core.seq.call(null,vec__32831_32849);
var first__32833_32851 = cljs.core.first.call(null,seq__32832_32850);
var seq__32832_32852__$1 = cljs.core.next.call(null,seq__32832_32850);
var vec__32834_32853 = first__32833_32851;
var k_32854 = cljs.core.nth.call(null,vec__32834_32853,(0),null);
var v_32855 = cljs.core.nth.call(null,vec__32834_32853,(1),null);
var r_32856 = seq__32832_32852__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_32854),"\": ",v_32855);

var seq__32837_32857 = cljs.core.seq.call(null,r_32856);
var chunk__32838_32858 = null;
var count__32839_32859 = (0);
var i__32840_32860 = (0);
while(true){
if((i__32840_32860 < count__32839_32859)){
var vec__32841_32861 = cljs.core._nth.call(null,chunk__32838_32858,i__32840_32860);
var k_32862__$1 = cljs.core.nth.call(null,vec__32841_32861,(0),null);
var v_32863__$1 = cljs.core.nth.call(null,vec__32841_32861,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_32862__$1),"\": ",v_32863__$1);

var G__32864 = seq__32837_32857;
var G__32865 = chunk__32838_32858;
var G__32866 = count__32839_32859;
var G__32867 = (i__32840_32860 + (1));
seq__32837_32857 = G__32864;
chunk__32838_32858 = G__32865;
count__32839_32859 = G__32866;
i__32840_32860 = G__32867;
continue;
} else {
var temp__4657__auto___32868__$1 = cljs.core.seq.call(null,seq__32837_32857);
if(temp__4657__auto___32868__$1){
var seq__32837_32869__$1 = temp__4657__auto___32868__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32837_32869__$1)){
var c__28034__auto___32870 = cljs.core.chunk_first.call(null,seq__32837_32869__$1);
var G__32871 = cljs.core.chunk_rest.call(null,seq__32837_32869__$1);
var G__32872 = c__28034__auto___32870;
var G__32873 = cljs.core.count.call(null,c__28034__auto___32870);
var G__32874 = (0);
seq__32837_32857 = G__32871;
chunk__32838_32858 = G__32872;
count__32839_32859 = G__32873;
i__32840_32860 = G__32874;
continue;
} else {
var vec__32844_32875 = cljs.core.first.call(null,seq__32837_32869__$1);
var k_32876__$1 = cljs.core.nth.call(null,vec__32844_32875,(0),null);
var v_32877__$1 = cljs.core.nth.call(null,vec__32844_32875,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_32876__$1),"\": ",v_32877__$1);

var G__32878 = cljs.core.next.call(null,seq__32837_32869__$1);
var G__32879 = null;
var G__32880 = (0);
var G__32881 = (0);
seq__32837_32857 = G__32878;
chunk__32838_32858 = G__32879;
count__32839_32859 = G__32880;
i__32840_32860 = G__32881;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__32882){
var map__32883 = p__32882;
var map__32883__$1 = ((((!((map__32883 == null)))?((((map__32883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32883.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32883):map__32883);
var items = cljs.core.get.call(null,map__32883__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__32883__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__32883__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__32883__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32684__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__32885){
var map__32886 = p__32885;
var map__32886__$1 = ((((!((map__32886 == null)))?((((map__32886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32886.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32886):map__32886);
var form = cljs.core.get.call(null,map__32886__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__32886__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__32684__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__32888){
var map__32889 = p__32888;
var map__32889__$1 = ((((!((map__32889 == null)))?((((map__32889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32889.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32889):map__32889);
var op = cljs.core.get.call(null,map__32889__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__32889__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__32889__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__32891){
var map__32892 = p__32891;
var map__32892__$1 = ((((!((map__32892 == null)))?((((map__32892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32892):map__32892);
var op = cljs.core.get.call(null,map__32892__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__32892__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__32892__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__32894){
var map__32895 = p__32894;
var map__32895__$1 = ((((!((map__32895 == null)))?((((map__32895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32895.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32895):map__32895);
var test = cljs.core.get.call(null,map__32895__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__32895__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__32895__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__32895__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__32895__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__32897){
var map__32898 = p__32897;
var map__32898__$1 = ((((!((map__32898 == null)))?((((map__32898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32898):map__32898);
var v = cljs.core.get.call(null,map__32898__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__32898__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__32898__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__32898__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__32898__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__32900_32918 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__32901_32919 = null;
var count__32902_32920 = (0);
var i__32903_32921 = (0);
while(true){
if((i__32903_32921 < count__32902_32920)){
var vec__32904_32922 = cljs.core._nth.call(null,chunk__32901_32919,i__32903_32921);
var ts_32923 = cljs.core.nth.call(null,vec__32904_32922,(0),null);
var then_32924 = cljs.core.nth.call(null,vec__32904_32922,(1),null);
var seq__32907_32925 = cljs.core.seq.call(null,ts_32923);
var chunk__32908_32926 = null;
var count__32909_32927 = (0);
var i__32910_32928 = (0);
while(true){
if((i__32910_32928 < count__32909_32927)){
var test_32929 = cljs.core._nth.call(null,chunk__32908_32926,i__32910_32928);
cljs.compiler.emitln.call(null,"case ",test_32929,":");

var G__32930 = seq__32907_32925;
var G__32931 = chunk__32908_32926;
var G__32932 = count__32909_32927;
var G__32933 = (i__32910_32928 + (1));
seq__32907_32925 = G__32930;
chunk__32908_32926 = G__32931;
count__32909_32927 = G__32932;
i__32910_32928 = G__32933;
continue;
} else {
var temp__4657__auto___32934 = cljs.core.seq.call(null,seq__32907_32925);
if(temp__4657__auto___32934){
var seq__32907_32935__$1 = temp__4657__auto___32934;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32907_32935__$1)){
var c__28034__auto___32936 = cljs.core.chunk_first.call(null,seq__32907_32935__$1);
var G__32937 = cljs.core.chunk_rest.call(null,seq__32907_32935__$1);
var G__32938 = c__28034__auto___32936;
var G__32939 = cljs.core.count.call(null,c__28034__auto___32936);
var G__32940 = (0);
seq__32907_32925 = G__32937;
chunk__32908_32926 = G__32938;
count__32909_32927 = G__32939;
i__32910_32928 = G__32940;
continue;
} else {
var test_32941 = cljs.core.first.call(null,seq__32907_32935__$1);
cljs.compiler.emitln.call(null,"case ",test_32941,":");

var G__32942 = cljs.core.next.call(null,seq__32907_32935__$1);
var G__32943 = null;
var G__32944 = (0);
var G__32945 = (0);
seq__32907_32925 = G__32942;
chunk__32908_32926 = G__32943;
count__32909_32927 = G__32944;
i__32910_32928 = G__32945;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_32924);
} else {
cljs.compiler.emitln.call(null,then_32924);
}

cljs.compiler.emitln.call(null,"break;");

var G__32946 = seq__32900_32918;
var G__32947 = chunk__32901_32919;
var G__32948 = count__32902_32920;
var G__32949 = (i__32903_32921 + (1));
seq__32900_32918 = G__32946;
chunk__32901_32919 = G__32947;
count__32902_32920 = G__32948;
i__32903_32921 = G__32949;
continue;
} else {
var temp__4657__auto___32950 = cljs.core.seq.call(null,seq__32900_32918);
if(temp__4657__auto___32950){
var seq__32900_32951__$1 = temp__4657__auto___32950;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32900_32951__$1)){
var c__28034__auto___32952 = cljs.core.chunk_first.call(null,seq__32900_32951__$1);
var G__32953 = cljs.core.chunk_rest.call(null,seq__32900_32951__$1);
var G__32954 = c__28034__auto___32952;
var G__32955 = cljs.core.count.call(null,c__28034__auto___32952);
var G__32956 = (0);
seq__32900_32918 = G__32953;
chunk__32901_32919 = G__32954;
count__32902_32920 = G__32955;
i__32903_32921 = G__32956;
continue;
} else {
var vec__32911_32957 = cljs.core.first.call(null,seq__32900_32951__$1);
var ts_32958 = cljs.core.nth.call(null,vec__32911_32957,(0),null);
var then_32959 = cljs.core.nth.call(null,vec__32911_32957,(1),null);
var seq__32914_32960 = cljs.core.seq.call(null,ts_32958);
var chunk__32915_32961 = null;
var count__32916_32962 = (0);
var i__32917_32963 = (0);
while(true){
if((i__32917_32963 < count__32916_32962)){
var test_32964 = cljs.core._nth.call(null,chunk__32915_32961,i__32917_32963);
cljs.compiler.emitln.call(null,"case ",test_32964,":");

var G__32965 = seq__32914_32960;
var G__32966 = chunk__32915_32961;
var G__32967 = count__32916_32962;
var G__32968 = (i__32917_32963 + (1));
seq__32914_32960 = G__32965;
chunk__32915_32961 = G__32966;
count__32916_32962 = G__32967;
i__32917_32963 = G__32968;
continue;
} else {
var temp__4657__auto___32969__$1 = cljs.core.seq.call(null,seq__32914_32960);
if(temp__4657__auto___32969__$1){
var seq__32914_32970__$1 = temp__4657__auto___32969__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32914_32970__$1)){
var c__28034__auto___32971 = cljs.core.chunk_first.call(null,seq__32914_32970__$1);
var G__32972 = cljs.core.chunk_rest.call(null,seq__32914_32970__$1);
var G__32973 = c__28034__auto___32971;
var G__32974 = cljs.core.count.call(null,c__28034__auto___32971);
var G__32975 = (0);
seq__32914_32960 = G__32972;
chunk__32915_32961 = G__32973;
count__32916_32962 = G__32974;
i__32917_32963 = G__32975;
continue;
} else {
var test_32976 = cljs.core.first.call(null,seq__32914_32970__$1);
cljs.compiler.emitln.call(null,"case ",test_32976,":");

var G__32977 = cljs.core.next.call(null,seq__32914_32970__$1);
var G__32978 = null;
var G__32979 = (0);
var G__32980 = (0);
seq__32914_32960 = G__32977;
chunk__32915_32961 = G__32978;
count__32916_32962 = G__32979;
i__32917_32963 = G__32980;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_32959);
} else {
cljs.compiler.emitln.call(null,then_32959);
}

cljs.compiler.emitln.call(null,"break;");

var G__32981 = cljs.core.next.call(null,seq__32900_32951__$1);
var G__32982 = null;
var G__32983 = (0);
var G__32984 = (0);
seq__32900_32918 = G__32981;
chunk__32901_32919 = G__32982;
count__32902_32920 = G__32983;
i__32903_32921 = G__32984;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__32985){
var map__32986 = p__32985;
var map__32986__$1 = ((((!((map__32986 == null)))?((((map__32986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32986.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32986):map__32986);
var throw$ = cljs.core.get.call(null,map__32986__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__32986__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__32989 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__32989,(0),null);
var rstr = cljs.core.nth.call(null,vec__32989,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__32989,fstr,rstr,ret_t,axstr){
return (function (p1__32988_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__32988_SHARP_);
});})(idx,vec__32989,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__32992 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32992),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__32992;
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
return (function (p1__32993_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__32993_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__32994 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__32995 = cljs.core.seq.call(null,vec__32994);
var first__32996 = cljs.core.first.call(null,seq__32995);
var seq__32995__$1 = cljs.core.next.call(null,seq__32995);
var p = first__32996;
var first__32996__$1 = cljs.core.first.call(null,seq__32995__$1);
var seq__32995__$2 = cljs.core.next.call(null,seq__32995__$1);
var ts = first__32996__$1;
var first__32996__$2 = cljs.core.first.call(null,seq__32995__$2);
var seq__32995__$3 = cljs.core.next.call(null,seq__32995__$2);
var n = first__32996__$2;
var xs = seq__32995__$3;
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
var vec__32997 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__32998 = cljs.core.seq.call(null,vec__32997);
var first__32999 = cljs.core.first.call(null,seq__32998);
var seq__32998__$1 = cljs.core.next.call(null,seq__32998);
var p = first__32999;
var first__32999__$1 = cljs.core.first.call(null,seq__32998__$1);
var seq__32998__$2 = cljs.core.next.call(null,seq__32998__$1);
var ts = first__32999__$1;
var xs = seq__32998__$2;
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
var G__33002 = arguments.length;
switch (G__33002) {
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
var vec__33010 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__33000_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__33000_SHARP_);
} else {
return p1__33000_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__33011 = cljs.core.seq.call(null,vec__33010);
var first__33012 = cljs.core.first.call(null,seq__33011);
var seq__33011__$1 = cljs.core.next.call(null,seq__33011);
var x = first__33012;
var ys = seq__33011__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__33013 = cljs.core.seq.call(null,ys);
var chunk__33014 = null;
var count__33015 = (0);
var i__33016 = (0);
while(true){
if((i__33016 < count__33015)){
var next_line = cljs.core._nth.call(null,chunk__33014,i__33016);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__33022 = seq__33013;
var G__33023 = chunk__33014;
var G__33024 = count__33015;
var G__33025 = (i__33016 + (1));
seq__33013 = G__33022;
chunk__33014 = G__33023;
count__33015 = G__33024;
i__33016 = G__33025;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33013);
if(temp__4657__auto__){
var seq__33013__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33013__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__33013__$1);
var G__33026 = cljs.core.chunk_rest.call(null,seq__33013__$1);
var G__33027 = c__28034__auto__;
var G__33028 = cljs.core.count.call(null,c__28034__auto__);
var G__33029 = (0);
seq__33013 = G__33026;
chunk__33014 = G__33027;
count__33015 = G__33028;
i__33016 = G__33029;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__33013__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__33030 = cljs.core.next.call(null,seq__33013__$1);
var G__33031 = null;
var G__33032 = (0);
var G__33033 = (0);
seq__33013 = G__33030;
chunk__33014 = G__33031;
count__33015 = G__33032;
i__33016 = G__33033;
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

var seq__33017_33034 = cljs.core.seq.call(null,docs__$2);
var chunk__33018_33035 = null;
var count__33019_33036 = (0);
var i__33020_33037 = (0);
while(true){
if((i__33020_33037 < count__33019_33036)){
var e_33038 = cljs.core._nth.call(null,chunk__33018_33035,i__33020_33037);
if(cljs.core.truth_(e_33038)){
print_comment_lines.call(null,e_33038);
} else {
}

var G__33039 = seq__33017_33034;
var G__33040 = chunk__33018_33035;
var G__33041 = count__33019_33036;
var G__33042 = (i__33020_33037 + (1));
seq__33017_33034 = G__33039;
chunk__33018_33035 = G__33040;
count__33019_33036 = G__33041;
i__33020_33037 = G__33042;
continue;
} else {
var temp__4657__auto___33043 = cljs.core.seq.call(null,seq__33017_33034);
if(temp__4657__auto___33043){
var seq__33017_33044__$1 = temp__4657__auto___33043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33017_33044__$1)){
var c__28034__auto___33045 = cljs.core.chunk_first.call(null,seq__33017_33044__$1);
var G__33046 = cljs.core.chunk_rest.call(null,seq__33017_33044__$1);
var G__33047 = c__28034__auto___33045;
var G__33048 = cljs.core.count.call(null,c__28034__auto___33045);
var G__33049 = (0);
seq__33017_33034 = G__33046;
chunk__33018_33035 = G__33047;
count__33019_33036 = G__33048;
i__33020_33037 = G__33049;
continue;
} else {
var e_33050 = cljs.core.first.call(null,seq__33017_33044__$1);
if(cljs.core.truth_(e_33050)){
print_comment_lines.call(null,e_33050);
} else {
}

var G__33051 = cljs.core.next.call(null,seq__33017_33044__$1);
var G__33052 = null;
var G__33053 = (0);
var G__33054 = (0);
seq__33017_33034 = G__33051;
chunk__33018_33035 = G__33052;
count__33019_33036 = G__33053;
i__33020_33037 = G__33054;
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
return (function (p1__33056_SHARP_){
return goog.string.startsWith(p1__33056_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__33057){
var map__33058 = p__33057;
var map__33058__$1 = ((((!((map__33058 == null)))?((((map__33058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33058):map__33058);
var name = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__33060){
var map__33061 = p__33060;
var map__33061__$1 = ((((!((map__33061 == null)))?((((map__33061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33061):map__33061);
var name = cljs.core.get.call(null,map__33061__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__33061__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__33061__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__33063_33081 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__33064_33082 = null;
var count__33065_33083 = (0);
var i__33066_33084 = (0);
while(true){
if((i__33066_33084 < count__33065_33083)){
var vec__33067_33085 = cljs.core._nth.call(null,chunk__33064_33082,i__33066_33084);
var i_33086 = cljs.core.nth.call(null,vec__33067_33085,(0),null);
var param_33087 = cljs.core.nth.call(null,vec__33067_33085,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_33087);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__33088 = seq__33063_33081;
var G__33089 = chunk__33064_33082;
var G__33090 = count__33065_33083;
var G__33091 = (i__33066_33084 + (1));
seq__33063_33081 = G__33088;
chunk__33064_33082 = G__33089;
count__33065_33083 = G__33090;
i__33066_33084 = G__33091;
continue;
} else {
var temp__4657__auto___33092 = cljs.core.seq.call(null,seq__33063_33081);
if(temp__4657__auto___33092){
var seq__33063_33093__$1 = temp__4657__auto___33092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33063_33093__$1)){
var c__28034__auto___33094 = cljs.core.chunk_first.call(null,seq__33063_33093__$1);
var G__33095 = cljs.core.chunk_rest.call(null,seq__33063_33093__$1);
var G__33096 = c__28034__auto___33094;
var G__33097 = cljs.core.count.call(null,c__28034__auto___33094);
var G__33098 = (0);
seq__33063_33081 = G__33095;
chunk__33064_33082 = G__33096;
count__33065_33083 = G__33097;
i__33066_33084 = G__33098;
continue;
} else {
var vec__33070_33099 = cljs.core.first.call(null,seq__33063_33093__$1);
var i_33100 = cljs.core.nth.call(null,vec__33070_33099,(0),null);
var param_33101 = cljs.core.nth.call(null,vec__33070_33099,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_33101);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__33102 = cljs.core.next.call(null,seq__33063_33093__$1);
var G__33103 = null;
var G__33104 = (0);
var G__33105 = (0);
seq__33063_33081 = G__33102;
chunk__33064_33082 = G__33103;
count__33065_33083 = G__33104;
i__33066_33084 = G__33105;
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

var seq__33073_33106 = cljs.core.seq.call(null,params);
var chunk__33074_33107 = null;
var count__33075_33108 = (0);
var i__33076_33109 = (0);
while(true){
if((i__33076_33109 < count__33075_33108)){
var param_33110 = cljs.core._nth.call(null,chunk__33074_33107,i__33076_33109);
cljs.compiler.emit.call(null,param_33110);

if(cljs.core._EQ_.call(null,param_33110,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33111 = seq__33073_33106;
var G__33112 = chunk__33074_33107;
var G__33113 = count__33075_33108;
var G__33114 = (i__33076_33109 + (1));
seq__33073_33106 = G__33111;
chunk__33074_33107 = G__33112;
count__33075_33108 = G__33113;
i__33076_33109 = G__33114;
continue;
} else {
var temp__4657__auto___33115 = cljs.core.seq.call(null,seq__33073_33106);
if(temp__4657__auto___33115){
var seq__33073_33116__$1 = temp__4657__auto___33115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33073_33116__$1)){
var c__28034__auto___33117 = cljs.core.chunk_first.call(null,seq__33073_33116__$1);
var G__33118 = cljs.core.chunk_rest.call(null,seq__33073_33116__$1);
var G__33119 = c__28034__auto___33117;
var G__33120 = cljs.core.count.call(null,c__28034__auto___33117);
var G__33121 = (0);
seq__33073_33106 = G__33118;
chunk__33074_33107 = G__33119;
count__33075_33108 = G__33120;
i__33076_33109 = G__33121;
continue;
} else {
var param_33122 = cljs.core.first.call(null,seq__33073_33116__$1);
cljs.compiler.emit.call(null,param_33122);

if(cljs.core._EQ_.call(null,param_33122,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33123 = cljs.core.next.call(null,seq__33073_33116__$1);
var G__33124 = null;
var G__33125 = (0);
var G__33126 = (0);
seq__33073_33106 = G__33123;
chunk__33074_33107 = G__33124;
count__33075_33108 = G__33125;
i__33076_33109 = G__33126;
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

var seq__33077_33127 = cljs.core.seq.call(null,params);
var chunk__33078_33128 = null;
var count__33079_33129 = (0);
var i__33080_33130 = (0);
while(true){
if((i__33080_33130 < count__33079_33129)){
var param_33131 = cljs.core._nth.call(null,chunk__33078_33128,i__33080_33130);
cljs.compiler.emit.call(null,param_33131);

if(cljs.core._EQ_.call(null,param_33131,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33132 = seq__33077_33127;
var G__33133 = chunk__33078_33128;
var G__33134 = count__33079_33129;
var G__33135 = (i__33080_33130 + (1));
seq__33077_33127 = G__33132;
chunk__33078_33128 = G__33133;
count__33079_33129 = G__33134;
i__33080_33130 = G__33135;
continue;
} else {
var temp__4657__auto___33136 = cljs.core.seq.call(null,seq__33077_33127);
if(temp__4657__auto___33136){
var seq__33077_33137__$1 = temp__4657__auto___33136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33077_33137__$1)){
var c__28034__auto___33138 = cljs.core.chunk_first.call(null,seq__33077_33137__$1);
var G__33139 = cljs.core.chunk_rest.call(null,seq__33077_33137__$1);
var G__33140 = c__28034__auto___33138;
var G__33141 = cljs.core.count.call(null,c__28034__auto___33138);
var G__33142 = (0);
seq__33077_33127 = G__33139;
chunk__33078_33128 = G__33140;
count__33079_33129 = G__33141;
i__33080_33130 = G__33142;
continue;
} else {
var param_33143 = cljs.core.first.call(null,seq__33077_33137__$1);
cljs.compiler.emit.call(null,param_33143);

if(cljs.core._EQ_.call(null,param_33143,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33144 = cljs.core.next.call(null,seq__33077_33137__$1);
var G__33145 = null;
var G__33146 = (0);
var G__33147 = (0);
seq__33077_33127 = G__33144;
chunk__33078_33128 = G__33145;
count__33079_33129 = G__33146;
i__33080_33130 = G__33147;
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
var seq__33148 = cljs.core.seq.call(null,params);
var chunk__33149 = null;
var count__33150 = (0);
var i__33151 = (0);
while(true){
if((i__33151 < count__33150)){
var param = cljs.core._nth.call(null,chunk__33149,i__33151);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33152 = seq__33148;
var G__33153 = chunk__33149;
var G__33154 = count__33150;
var G__33155 = (i__33151 + (1));
seq__33148 = G__33152;
chunk__33149 = G__33153;
count__33150 = G__33154;
i__33151 = G__33155;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33148);
if(temp__4657__auto__){
var seq__33148__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33148__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__33148__$1);
var G__33156 = cljs.core.chunk_rest.call(null,seq__33148__$1);
var G__33157 = c__28034__auto__;
var G__33158 = cljs.core.count.call(null,c__28034__auto__);
var G__33159 = (0);
seq__33148 = G__33156;
chunk__33149 = G__33157;
count__33150 = G__33158;
i__33151 = G__33159;
continue;
} else {
var param = cljs.core.first.call(null,seq__33148__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33160 = cljs.core.next.call(null,seq__33148__$1);
var G__33161 = null;
var G__33162 = (0);
var G__33163 = (0);
seq__33148 = G__33160;
chunk__33149 = G__33161;
count__33150 = G__33162;
i__33151 = G__33163;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__33164){
var map__33165 = p__33164;
var map__33165__$1 = ((((!((map__33165 == null)))?((((map__33165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33165):map__33165);
var type = cljs.core.get.call(null,map__33165__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__33165__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__33165__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__33165__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__33165__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__33165__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__33165__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__33165__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__32684__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__33167){
var map__33168 = p__33167;
var map__33168__$1 = ((((!((map__33168 == null)))?((((map__33168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33168.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33168):map__33168);
var f = map__33168__$1;
var type = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__33168__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__32684__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_33178__$1 = (function (){var or__27195__auto__ = name;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_33179 = cljs.compiler.munge.call(null,name_33178__$1);
var delegate_name_33180 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_33179),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_33180," = function (");

var seq__33170_33181 = cljs.core.seq.call(null,params);
var chunk__33171_33182 = null;
var count__33172_33183 = (0);
var i__33173_33184 = (0);
while(true){
if((i__33173_33184 < count__33172_33183)){
var param_33185 = cljs.core._nth.call(null,chunk__33171_33182,i__33173_33184);
cljs.compiler.emit.call(null,param_33185);

if(cljs.core._EQ_.call(null,param_33185,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33186 = seq__33170_33181;
var G__33187 = chunk__33171_33182;
var G__33188 = count__33172_33183;
var G__33189 = (i__33173_33184 + (1));
seq__33170_33181 = G__33186;
chunk__33171_33182 = G__33187;
count__33172_33183 = G__33188;
i__33173_33184 = G__33189;
continue;
} else {
var temp__4657__auto___33190 = cljs.core.seq.call(null,seq__33170_33181);
if(temp__4657__auto___33190){
var seq__33170_33191__$1 = temp__4657__auto___33190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33170_33191__$1)){
var c__28034__auto___33192 = cljs.core.chunk_first.call(null,seq__33170_33191__$1);
var G__33193 = cljs.core.chunk_rest.call(null,seq__33170_33191__$1);
var G__33194 = c__28034__auto___33192;
var G__33195 = cljs.core.count.call(null,c__28034__auto___33192);
var G__33196 = (0);
seq__33170_33181 = G__33193;
chunk__33171_33182 = G__33194;
count__33172_33183 = G__33195;
i__33173_33184 = G__33196;
continue;
} else {
var param_33197 = cljs.core.first.call(null,seq__33170_33191__$1);
cljs.compiler.emit.call(null,param_33197);

if(cljs.core._EQ_.call(null,param_33197,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33198 = cljs.core.next.call(null,seq__33170_33191__$1);
var G__33199 = null;
var G__33200 = (0);
var G__33201 = (0);
seq__33170_33181 = G__33198;
chunk__33171_33182 = G__33199;
count__33172_33183 = G__33200;
i__33173_33184 = G__33201;
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

cljs.compiler.emitln.call(null,"var ",mname_33179," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_33202 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_33202,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_33180,".call(this,");

var seq__33174_33203 = cljs.core.seq.call(null,params);
var chunk__33175_33204 = null;
var count__33176_33205 = (0);
var i__33177_33206 = (0);
while(true){
if((i__33177_33206 < count__33176_33205)){
var param_33207 = cljs.core._nth.call(null,chunk__33175_33204,i__33177_33206);
cljs.compiler.emit.call(null,param_33207);

if(cljs.core._EQ_.call(null,param_33207,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33208 = seq__33174_33203;
var G__33209 = chunk__33175_33204;
var G__33210 = count__33176_33205;
var G__33211 = (i__33177_33206 + (1));
seq__33174_33203 = G__33208;
chunk__33175_33204 = G__33209;
count__33176_33205 = G__33210;
i__33177_33206 = G__33211;
continue;
} else {
var temp__4657__auto___33212 = cljs.core.seq.call(null,seq__33174_33203);
if(temp__4657__auto___33212){
var seq__33174_33213__$1 = temp__4657__auto___33212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33174_33213__$1)){
var c__28034__auto___33214 = cljs.core.chunk_first.call(null,seq__33174_33213__$1);
var G__33215 = cljs.core.chunk_rest.call(null,seq__33174_33213__$1);
var G__33216 = c__28034__auto___33214;
var G__33217 = cljs.core.count.call(null,c__28034__auto___33214);
var G__33218 = (0);
seq__33174_33203 = G__33215;
chunk__33175_33204 = G__33216;
count__33176_33205 = G__33217;
i__33177_33206 = G__33218;
continue;
} else {
var param_33219 = cljs.core.first.call(null,seq__33174_33213__$1);
cljs.compiler.emit.call(null,param_33219);

if(cljs.core._EQ_.call(null,param_33219,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33220 = cljs.core.next.call(null,seq__33174_33213__$1);
var G__33221 = null;
var G__33222 = (0);
var G__33223 = (0);
seq__33174_33203 = G__33220;
chunk__33175_33204 = G__33221;
count__33176_33205 = G__33222;
i__33177_33206 = G__33223;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_33179,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_33179,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_33178__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_33179,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_33180,";");

cljs.compiler.emitln.call(null,"return ",mname_33179,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__33227){
var map__33228 = p__33227;
var map__33228__$1 = ((((!((map__33228 == null)))?((((map__33228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33228.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33228):map__33228);
var name = cljs.core.get.call(null,map__33228__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__33228__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__33228__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__33228__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__33228__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__33228__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__33228__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__33228,map__33228__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__33224_SHARP_){
var and__27183__auto__ = p1__33224_SHARP_;
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__33224_SHARP_));
} else {
return and__27183__auto__;
}
});})(map__33228,map__33228__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_33263__$1 = (function (){var or__27195__auto__ = name;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_33264 = cljs.compiler.munge.call(null,name_33263__$1);
var maxparams_33265 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_33266 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_33263__$1,mname_33264,maxparams_33265,loop_locals,map__33228,map__33228__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_33264),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_33263__$1,mname_33264,maxparams_33265,loop_locals,map__33228,map__33228__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_33267 = cljs.core.sort_by.call(null,((function (name_33263__$1,mname_33264,maxparams_33265,mmap_33266,loop_locals,map__33228,map__33228__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__33225_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__33225_SHARP_)));
});})(name_33263__$1,mname_33264,maxparams_33265,mmap_33266,loop_locals,map__33228,map__33228__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_33266));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_33264," = null;");

var seq__33230_33268 = cljs.core.seq.call(null,ms_33267);
var chunk__33231_33269 = null;
var count__33232_33270 = (0);
var i__33233_33271 = (0);
while(true){
if((i__33233_33271 < count__33232_33270)){
var vec__33234_33272 = cljs.core._nth.call(null,chunk__33231_33269,i__33233_33271);
var n_33273 = cljs.core.nth.call(null,vec__33234_33272,(0),null);
var meth_33274 = cljs.core.nth.call(null,vec__33234_33272,(1),null);
cljs.compiler.emits.call(null,"var ",n_33273," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_33274))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_33274);
} else {
cljs.compiler.emit_fn_method.call(null,meth_33274);
}

cljs.compiler.emitln.call(null,";");

var G__33275 = seq__33230_33268;
var G__33276 = chunk__33231_33269;
var G__33277 = count__33232_33270;
var G__33278 = (i__33233_33271 + (1));
seq__33230_33268 = G__33275;
chunk__33231_33269 = G__33276;
count__33232_33270 = G__33277;
i__33233_33271 = G__33278;
continue;
} else {
var temp__4657__auto___33279 = cljs.core.seq.call(null,seq__33230_33268);
if(temp__4657__auto___33279){
var seq__33230_33280__$1 = temp__4657__auto___33279;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33230_33280__$1)){
var c__28034__auto___33281 = cljs.core.chunk_first.call(null,seq__33230_33280__$1);
var G__33282 = cljs.core.chunk_rest.call(null,seq__33230_33280__$1);
var G__33283 = c__28034__auto___33281;
var G__33284 = cljs.core.count.call(null,c__28034__auto___33281);
var G__33285 = (0);
seq__33230_33268 = G__33282;
chunk__33231_33269 = G__33283;
count__33232_33270 = G__33284;
i__33233_33271 = G__33285;
continue;
} else {
var vec__33237_33286 = cljs.core.first.call(null,seq__33230_33280__$1);
var n_33287 = cljs.core.nth.call(null,vec__33237_33286,(0),null);
var meth_33288 = cljs.core.nth.call(null,vec__33237_33286,(1),null);
cljs.compiler.emits.call(null,"var ",n_33287," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_33288))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_33288);
} else {
cljs.compiler.emit_fn_method.call(null,meth_33288);
}

cljs.compiler.emitln.call(null,";");

var G__33289 = cljs.core.next.call(null,seq__33230_33280__$1);
var G__33290 = null;
var G__33291 = (0);
var G__33292 = (0);
seq__33230_33268 = G__33289;
chunk__33231_33269 = G__33290;
count__33232_33270 = G__33291;
i__33233_33271 = G__33292;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_33264," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_33265),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_33265)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_33265));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__33240_33293 = cljs.core.seq.call(null,ms_33267);
var chunk__33241_33294 = null;
var count__33242_33295 = (0);
var i__33243_33296 = (0);
while(true){
if((i__33243_33296 < count__33242_33295)){
var vec__33244_33297 = cljs.core._nth.call(null,chunk__33241_33294,i__33243_33296);
var n_33298 = cljs.core.nth.call(null,vec__33244_33297,(0),null);
var meth_33299 = cljs.core.nth.call(null,vec__33244_33297,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_33299))){
cljs.compiler.emitln.call(null,"default:");

var restarg_33300 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_33300," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_33301 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_33300," = new cljs.core.IndexedSeq(",a_33301,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_33298,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_33265)),(((cljs.core.count.call(null,maxparams_33265) > (1)))?", ":null),restarg_33300,");");
} else {
var pcnt_33302 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_33299));
cljs.compiler.emitln.call(null,"case ",pcnt_33302,":");

cljs.compiler.emitln.call(null,"return ",n_33298,".call(this",(((pcnt_33302 === (0)))?null:cljs.core._conj.call(null,(function (){var x__28057__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_33302,maxparams_33265));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),",")),");");
}

var G__33303 = seq__33240_33293;
var G__33304 = chunk__33241_33294;
var G__33305 = count__33242_33295;
var G__33306 = (i__33243_33296 + (1));
seq__33240_33293 = G__33303;
chunk__33241_33294 = G__33304;
count__33242_33295 = G__33305;
i__33243_33296 = G__33306;
continue;
} else {
var temp__4657__auto___33307 = cljs.core.seq.call(null,seq__33240_33293);
if(temp__4657__auto___33307){
var seq__33240_33308__$1 = temp__4657__auto___33307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33240_33308__$1)){
var c__28034__auto___33309 = cljs.core.chunk_first.call(null,seq__33240_33308__$1);
var G__33310 = cljs.core.chunk_rest.call(null,seq__33240_33308__$1);
var G__33311 = c__28034__auto___33309;
var G__33312 = cljs.core.count.call(null,c__28034__auto___33309);
var G__33313 = (0);
seq__33240_33293 = G__33310;
chunk__33241_33294 = G__33311;
count__33242_33295 = G__33312;
i__33243_33296 = G__33313;
continue;
} else {
var vec__33247_33314 = cljs.core.first.call(null,seq__33240_33308__$1);
var n_33315 = cljs.core.nth.call(null,vec__33247_33314,(0),null);
var meth_33316 = cljs.core.nth.call(null,vec__33247_33314,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_33316))){
cljs.compiler.emitln.call(null,"default:");

var restarg_33317 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_33317," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_33318 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_33317," = new cljs.core.IndexedSeq(",a_33318,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_33315,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_33265)),(((cljs.core.count.call(null,maxparams_33265) > (1)))?", ":null),restarg_33317,");");
} else {
var pcnt_33319 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_33316));
cljs.compiler.emitln.call(null,"case ",pcnt_33319,":");

cljs.compiler.emitln.call(null,"return ",n_33315,".call(this",(((pcnt_33319 === (0)))?null:cljs.core._conj.call(null,(function (){var x__28057__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_33319,maxparams_33265));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto__);
})(),",")),");");
}

var G__33320 = cljs.core.next.call(null,seq__33240_33308__$1);
var G__33321 = null;
var G__33322 = (0);
var G__33323 = (0);
seq__33240_33293 = G__33320;
chunk__33241_33294 = G__33321;
count__33242_33295 = G__33322;
i__33243_33296 = G__33323;
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
cljs.compiler.emitln.call(null,mname_33264,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_33264,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_33263__$1,mname_33264,maxparams_33265,mmap_33266,ms_33267,loop_locals,map__33228,map__33228__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__33226_SHARP_){
var vec__33250 = p1__33226_SHARP_;
var n = cljs.core.nth.call(null,vec__33250,(0),null);
var m = cljs.core.nth.call(null,vec__33250,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_33263__$1,mname_33264,maxparams_33265,mmap_33266,ms_33267,loop_locals,map__33228,map__33228__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_33267),".cljs$lang$applyTo;");
} else {
}

var seq__33253_33324 = cljs.core.seq.call(null,ms_33267);
var chunk__33254_33325 = null;
var count__33255_33326 = (0);
var i__33256_33327 = (0);
while(true){
if((i__33256_33327 < count__33255_33326)){
var vec__33257_33328 = cljs.core._nth.call(null,chunk__33254_33325,i__33256_33327);
var n_33329 = cljs.core.nth.call(null,vec__33257_33328,(0),null);
var meth_33330 = cljs.core.nth.call(null,vec__33257_33328,(1),null);
var c_33331 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_33330));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_33330))){
cljs.compiler.emitln.call(null,mname_33264,".cljs$core$IFn$_invoke$arity$variadic = ",n_33329,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_33264,".cljs$core$IFn$_invoke$arity$",c_33331," = ",n_33329,";");
}

var G__33332 = seq__33253_33324;
var G__33333 = chunk__33254_33325;
var G__33334 = count__33255_33326;
var G__33335 = (i__33256_33327 + (1));
seq__33253_33324 = G__33332;
chunk__33254_33325 = G__33333;
count__33255_33326 = G__33334;
i__33256_33327 = G__33335;
continue;
} else {
var temp__4657__auto___33336 = cljs.core.seq.call(null,seq__33253_33324);
if(temp__4657__auto___33336){
var seq__33253_33337__$1 = temp__4657__auto___33336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33253_33337__$1)){
var c__28034__auto___33338 = cljs.core.chunk_first.call(null,seq__33253_33337__$1);
var G__33339 = cljs.core.chunk_rest.call(null,seq__33253_33337__$1);
var G__33340 = c__28034__auto___33338;
var G__33341 = cljs.core.count.call(null,c__28034__auto___33338);
var G__33342 = (0);
seq__33253_33324 = G__33339;
chunk__33254_33325 = G__33340;
count__33255_33326 = G__33341;
i__33256_33327 = G__33342;
continue;
} else {
var vec__33260_33343 = cljs.core.first.call(null,seq__33253_33337__$1);
var n_33344 = cljs.core.nth.call(null,vec__33260_33343,(0),null);
var meth_33345 = cljs.core.nth.call(null,vec__33260_33343,(1),null);
var c_33346 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_33345));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_33345))){
cljs.compiler.emitln.call(null,mname_33264,".cljs$core$IFn$_invoke$arity$variadic = ",n_33344,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_33264,".cljs$core$IFn$_invoke$arity$",c_33346," = ",n_33344,";");
}

var G__33347 = cljs.core.next.call(null,seq__33253_33337__$1);
var G__33348 = null;
var G__33349 = (0);
var G__33350 = (0);
seq__33253_33324 = G__33347;
chunk__33254_33325 = G__33348;
count__33255_33326 = G__33349;
i__33256_33327 = G__33350;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_33264,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__33351){
var map__33352 = p__33351;
var map__33352__$1 = ((((!((map__33352 == null)))?((((map__33352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33352.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33352):map__33352);
var statements = cljs.core.get.call(null,map__33352__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__33352__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__33352__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__33354_33358 = cljs.core.seq.call(null,statements);
var chunk__33355_33359 = null;
var count__33356_33360 = (0);
var i__33357_33361 = (0);
while(true){
if((i__33357_33361 < count__33356_33360)){
var s_33362 = cljs.core._nth.call(null,chunk__33355_33359,i__33357_33361);
cljs.compiler.emitln.call(null,s_33362);

var G__33363 = seq__33354_33358;
var G__33364 = chunk__33355_33359;
var G__33365 = count__33356_33360;
var G__33366 = (i__33357_33361 + (1));
seq__33354_33358 = G__33363;
chunk__33355_33359 = G__33364;
count__33356_33360 = G__33365;
i__33357_33361 = G__33366;
continue;
} else {
var temp__4657__auto___33367 = cljs.core.seq.call(null,seq__33354_33358);
if(temp__4657__auto___33367){
var seq__33354_33368__$1 = temp__4657__auto___33367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33354_33368__$1)){
var c__28034__auto___33369 = cljs.core.chunk_first.call(null,seq__33354_33368__$1);
var G__33370 = cljs.core.chunk_rest.call(null,seq__33354_33368__$1);
var G__33371 = c__28034__auto___33369;
var G__33372 = cljs.core.count.call(null,c__28034__auto___33369);
var G__33373 = (0);
seq__33354_33358 = G__33370;
chunk__33355_33359 = G__33371;
count__33356_33360 = G__33372;
i__33357_33361 = G__33373;
continue;
} else {
var s_33374 = cljs.core.first.call(null,seq__33354_33368__$1);
cljs.compiler.emitln.call(null,s_33374);

var G__33375 = cljs.core.next.call(null,seq__33354_33368__$1);
var G__33376 = null;
var G__33377 = (0);
var G__33378 = (0);
seq__33354_33358 = G__33375;
chunk__33355_33359 = G__33376;
count__33356_33360 = G__33377;
i__33357_33361 = G__33378;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__33379){
var map__33380 = p__33379;
var map__33380__$1 = ((((!((map__33380 == null)))?((((map__33380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33380):map__33380);
var env = cljs.core.get.call(null,map__33380__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__33380__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__33380__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__33380__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__33380__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__33382,is_loop){
var map__33383 = p__33382;
var map__33383__$1 = ((((!((map__33383 == null)))?((((map__33383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33383.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33383):map__33383);
var bindings = cljs.core.get.call(null,map__33383__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__33383__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__33383__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_33385_33394 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_33385_33394,context,map__33383,map__33383__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_33385_33394,context,map__33383,map__33383__$1,bindings,expr,env))
,bindings):null));

try{var seq__33386_33395 = cljs.core.seq.call(null,bindings);
var chunk__33387_33396 = null;
var count__33388_33397 = (0);
var i__33389_33398 = (0);
while(true){
if((i__33389_33398 < count__33388_33397)){
var map__33390_33399 = cljs.core._nth.call(null,chunk__33387_33396,i__33389_33398);
var map__33390_33400__$1 = ((((!((map__33390_33399 == null)))?((((map__33390_33399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33390_33399.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33390_33399):map__33390_33399);
var binding_33401 = map__33390_33400__$1;
var init_33402 = cljs.core.get.call(null,map__33390_33400__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_33401);

cljs.compiler.emitln.call(null," = ",init_33402,";");

var G__33403 = seq__33386_33395;
var G__33404 = chunk__33387_33396;
var G__33405 = count__33388_33397;
var G__33406 = (i__33389_33398 + (1));
seq__33386_33395 = G__33403;
chunk__33387_33396 = G__33404;
count__33388_33397 = G__33405;
i__33389_33398 = G__33406;
continue;
} else {
var temp__4657__auto___33407 = cljs.core.seq.call(null,seq__33386_33395);
if(temp__4657__auto___33407){
var seq__33386_33408__$1 = temp__4657__auto___33407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33386_33408__$1)){
var c__28034__auto___33409 = cljs.core.chunk_first.call(null,seq__33386_33408__$1);
var G__33410 = cljs.core.chunk_rest.call(null,seq__33386_33408__$1);
var G__33411 = c__28034__auto___33409;
var G__33412 = cljs.core.count.call(null,c__28034__auto___33409);
var G__33413 = (0);
seq__33386_33395 = G__33410;
chunk__33387_33396 = G__33411;
count__33388_33397 = G__33412;
i__33389_33398 = G__33413;
continue;
} else {
var map__33392_33414 = cljs.core.first.call(null,seq__33386_33408__$1);
var map__33392_33415__$1 = ((((!((map__33392_33414 == null)))?((((map__33392_33414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33392_33414.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33392_33414):map__33392_33414);
var binding_33416 = map__33392_33415__$1;
var init_33417 = cljs.core.get.call(null,map__33392_33415__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_33416);

cljs.compiler.emitln.call(null," = ",init_33417,";");

var G__33418 = cljs.core.next.call(null,seq__33386_33408__$1);
var G__33419 = null;
var G__33420 = (0);
var G__33421 = (0);
seq__33386_33395 = G__33418;
chunk__33387_33396 = G__33419;
count__33388_33397 = G__33420;
i__33389_33398 = G__33421;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_33385_33394;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__33422){
var map__33423 = p__33422;
var map__33423__$1 = ((((!((map__33423 == null)))?((((map__33423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33423):map__33423);
var frame = cljs.core.get.call(null,map__33423__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__33423__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__33423__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__28140__auto___33425 = cljs.core.count.call(null,exprs);
var i_33426 = (0);
while(true){
if((i_33426 < n__28140__auto___33425)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_33426)," = ",exprs.call(null,i_33426),";");

var G__33427 = (i_33426 + (1));
i_33426 = G__33427;
continue;
} else {
}
break;
}

var n__28140__auto___33428 = cljs.core.count.call(null,exprs);
var i_33429 = (0);
while(true){
if((i_33429 < n__28140__auto___33428)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_33429))," = ",temps.call(null,i_33429),";");

var G__33430 = (i_33429 + (1));
i_33429 = G__33430;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__33431){
var map__33432 = p__33431;
var map__33432__$1 = ((((!((map__33432 == null)))?((((map__33432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33432):map__33432);
var bindings = cljs.core.get.call(null,map__33432__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__33432__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__33432__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__33434_33442 = cljs.core.seq.call(null,bindings);
var chunk__33435_33443 = null;
var count__33436_33444 = (0);
var i__33437_33445 = (0);
while(true){
if((i__33437_33445 < count__33436_33444)){
var map__33438_33446 = cljs.core._nth.call(null,chunk__33435_33443,i__33437_33445);
var map__33438_33447__$1 = ((((!((map__33438_33446 == null)))?((((map__33438_33446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33438_33446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33438_33446):map__33438_33446);
var binding_33448 = map__33438_33447__$1;
var init_33449 = cljs.core.get.call(null,map__33438_33447__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_33448)," = ",init_33449,";");

var G__33450 = seq__33434_33442;
var G__33451 = chunk__33435_33443;
var G__33452 = count__33436_33444;
var G__33453 = (i__33437_33445 + (1));
seq__33434_33442 = G__33450;
chunk__33435_33443 = G__33451;
count__33436_33444 = G__33452;
i__33437_33445 = G__33453;
continue;
} else {
var temp__4657__auto___33454 = cljs.core.seq.call(null,seq__33434_33442);
if(temp__4657__auto___33454){
var seq__33434_33455__$1 = temp__4657__auto___33454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33434_33455__$1)){
var c__28034__auto___33456 = cljs.core.chunk_first.call(null,seq__33434_33455__$1);
var G__33457 = cljs.core.chunk_rest.call(null,seq__33434_33455__$1);
var G__33458 = c__28034__auto___33456;
var G__33459 = cljs.core.count.call(null,c__28034__auto___33456);
var G__33460 = (0);
seq__33434_33442 = G__33457;
chunk__33435_33443 = G__33458;
count__33436_33444 = G__33459;
i__33437_33445 = G__33460;
continue;
} else {
var map__33440_33461 = cljs.core.first.call(null,seq__33434_33455__$1);
var map__33440_33462__$1 = ((((!((map__33440_33461 == null)))?((((map__33440_33461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33440_33461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33440_33461):map__33440_33461);
var binding_33463 = map__33440_33462__$1;
var init_33464 = cljs.core.get.call(null,map__33440_33462__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_33463)," = ",init_33464,";");

var G__33465 = cljs.core.next.call(null,seq__33434_33455__$1);
var G__33466 = null;
var G__33467 = (0);
var G__33468 = (0);
seq__33434_33442 = G__33465;
chunk__33435_33443 = G__33466;
count__33436_33444 = G__33467;
i__33437_33445 = G__33468;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__33471){
var map__33472 = p__33471;
var map__33472__$1 = ((((!((map__33472 == null)))?((((map__33472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33472.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33472):map__33472);
var expr = map__33472__$1;
var f = cljs.core.get.call(null,map__33472__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__33472__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__33472__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__33474 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33472,map__33472__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33472,map__33472__$1,expr,f,args,env){
return (function (p1__33469_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__33469_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33472,map__33472__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33472,map__33472__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33472,map__33472__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33472,map__33472__$1,expr,f,args,env){
return (function (p1__33470_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__33470_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33472,map__33472__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__33472,map__33472__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__33474,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__33474,(1),null);
var env__32684__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_33477 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_33477,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_33478 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_33478,args)),(((mfa_33478 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_33478,args)),"], 0))");
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
var fprop_33479 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_33479," ? ",f__$1,fprop_33479,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_33479," ? ",f__$1,fprop_33479,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__33480){
var map__33481 = p__33480;
var map__33481__$1 = ((((!((map__33481 == null)))?((((map__33481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33481.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33481):map__33481);
var ctor = cljs.core.get.call(null,map__33481__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__33481__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__33481__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32684__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__33483){
var map__33484 = p__33483;
var map__33484__$1 = ((((!((map__33484 == null)))?((((map__33484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33484.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33484):map__33484);
var target = cljs.core.get.call(null,map__33484__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__33484__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__33484__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32684__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__33486 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__33486__$1 = ((((!((map__33486 == null)))?((((map__33486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33486):map__33486);
var options = cljs.core.get.call(null,map__33486__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__33486__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__33487 = options;
var map__33487__$1 = ((((!((map__33487 == null)))?((((map__33487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33487.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33487):map__33487);
var target = cljs.core.get.call(null,map__33487__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__33487__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__33488 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__33494 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__33494__$1 = ((((!((map__33494 == null)))?((((map__33494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33494.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33494):map__33494);
var node_libs = cljs.core.get.call(null,map__33494__$1,true);
var libs_to_load = cljs.core.get.call(null,map__33494__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__33488,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__33488,(1),null);
var map__33491 = cljs.core.group_by.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__33491__$1 = ((((!((map__33491 == null)))?((((map__33491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33491):map__33491);
var global_exports_libs = cljs.core.get.call(null,map__33491__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__33491__$1,false);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__33497_33513 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__33498_33514 = null;
var count__33499_33515 = (0);
var i__33500_33516 = (0);
while(true){
if((i__33500_33516 < count__33499_33515)){
var lib_33517 = cljs.core._nth.call(null,chunk__33498_33514,i__33500_33516);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_33517)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__27195__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_33517),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_33517),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__27195__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_33517),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_33517),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_33517),"');");

}
}
}

var G__33518 = seq__33497_33513;
var G__33519 = chunk__33498_33514;
var G__33520 = count__33499_33515;
var G__33521 = (i__33500_33516 + (1));
seq__33497_33513 = G__33518;
chunk__33498_33514 = G__33519;
count__33499_33515 = G__33520;
i__33500_33516 = G__33521;
continue;
} else {
var temp__4657__auto___33522 = cljs.core.seq.call(null,seq__33497_33513);
if(temp__4657__auto___33522){
var seq__33497_33523__$1 = temp__4657__auto___33522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33497_33523__$1)){
var c__28034__auto___33524 = cljs.core.chunk_first.call(null,seq__33497_33523__$1);
var G__33525 = cljs.core.chunk_rest.call(null,seq__33497_33523__$1);
var G__33526 = c__28034__auto___33524;
var G__33527 = cljs.core.count.call(null,c__28034__auto___33524);
var G__33528 = (0);
seq__33497_33513 = G__33525;
chunk__33498_33514 = G__33526;
count__33499_33515 = G__33527;
i__33500_33516 = G__33528;
continue;
} else {
var lib_33529 = cljs.core.first.call(null,seq__33497_33523__$1);
if((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_33529)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))){
} else {
if(cljs.core.truth_((function (){var or__27195__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_33529),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_33529),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__27195__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_33529),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_33529),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_33529),"');");

}
}
}

var G__33530 = cljs.core.next.call(null,seq__33497_33523__$1);
var G__33531 = null;
var G__33532 = (0);
var G__33533 = (0);
seq__33497_33513 = G__33530;
chunk__33498_33514 = G__33531;
count__33499_33515 = G__33532;
i__33500_33516 = G__33533;
continue;
}
} else {
}
}
break;
}

var seq__33501_33534 = cljs.core.seq.call(null,node_libs);
var chunk__33502_33535 = null;
var count__33503_33536 = (0);
var i__33504_33537 = (0);
while(true){
if((i__33504_33537 < count__33503_33536)){
var lib_33538 = cljs.core._nth.call(null,chunk__33502_33535,i__33504_33537);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_33538)," = require('",lib_33538,"');");

var G__33539 = seq__33501_33534;
var G__33540 = chunk__33502_33535;
var G__33541 = count__33503_33536;
var G__33542 = (i__33504_33537 + (1));
seq__33501_33534 = G__33539;
chunk__33502_33535 = G__33540;
count__33503_33536 = G__33541;
i__33504_33537 = G__33542;
continue;
} else {
var temp__4657__auto___33543 = cljs.core.seq.call(null,seq__33501_33534);
if(temp__4657__auto___33543){
var seq__33501_33544__$1 = temp__4657__auto___33543;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33501_33544__$1)){
var c__28034__auto___33545 = cljs.core.chunk_first.call(null,seq__33501_33544__$1);
var G__33546 = cljs.core.chunk_rest.call(null,seq__33501_33544__$1);
var G__33547 = c__28034__auto___33545;
var G__33548 = cljs.core.count.call(null,c__28034__auto___33545);
var G__33549 = (0);
seq__33501_33534 = G__33546;
chunk__33502_33535 = G__33547;
count__33503_33536 = G__33548;
i__33504_33537 = G__33549;
continue;
} else {
var lib_33550 = cljs.core.first.call(null,seq__33501_33544__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_33550)," = require('",lib_33550,"');");

var G__33551 = cljs.core.next.call(null,seq__33501_33544__$1);
var G__33552 = null;
var G__33553 = (0);
var G__33554 = (0);
seq__33501_33534 = G__33551;
chunk__33502_33535 = G__33552;
count__33503_33536 = G__33553;
i__33504_33537 = G__33554;
continue;
}
} else {
}
}
break;
}

var seq__33505_33555 = cljs.core.seq.call(null,global_exports_libs);
var chunk__33506_33556 = null;
var count__33507_33557 = (0);
var i__33508_33558 = (0);
while(true){
if((i__33508_33558 < count__33507_33557)){
var lib_33559 = cljs.core._nth.call(null,chunk__33506_33556,i__33508_33558);
var map__33509_33560 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_33559));
var map__33509_33561__$1 = ((((!((map__33509_33560 == null)))?((((map__33509_33560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33509_33560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33509_33560):map__33509_33560);
var global_exports_33562 = cljs.core.get.call(null,map__33509_33561__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_33559)," = goog.global.",cljs.core.get.call(null,global_exports_33562,cljs.core.symbol.call(null,lib_33559)),";");

var G__33563 = seq__33505_33555;
var G__33564 = chunk__33506_33556;
var G__33565 = count__33507_33557;
var G__33566 = (i__33508_33558 + (1));
seq__33505_33555 = G__33563;
chunk__33506_33556 = G__33564;
count__33507_33557 = G__33565;
i__33508_33558 = G__33566;
continue;
} else {
var temp__4657__auto___33567 = cljs.core.seq.call(null,seq__33505_33555);
if(temp__4657__auto___33567){
var seq__33505_33568__$1 = temp__4657__auto___33567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33505_33568__$1)){
var c__28034__auto___33569 = cljs.core.chunk_first.call(null,seq__33505_33568__$1);
var G__33570 = cljs.core.chunk_rest.call(null,seq__33505_33568__$1);
var G__33571 = c__28034__auto___33569;
var G__33572 = cljs.core.count.call(null,c__28034__auto___33569);
var G__33573 = (0);
seq__33505_33555 = G__33570;
chunk__33506_33556 = G__33571;
count__33507_33557 = G__33572;
i__33508_33558 = G__33573;
continue;
} else {
var lib_33574 = cljs.core.first.call(null,seq__33505_33568__$1);
var map__33511_33575 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_33574));
var map__33511_33576__$1 = ((((!((map__33511_33575 == null)))?((((map__33511_33575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33511_33575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33511_33575):map__33511_33575);
var global_exports_33577 = cljs.core.get.call(null,map__33511_33576__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_33574)," = goog.global.",cljs.core.get.call(null,global_exports_33577,cljs.core.symbol.call(null,lib_33574)),";");

var G__33578 = cljs.core.next.call(null,seq__33505_33568__$1);
var G__33579 = null;
var G__33580 = (0);
var G__33581 = (0);
seq__33505_33555 = G__33578;
chunk__33506_33556 = G__33579;
count__33507_33557 = G__33580;
i__33508_33558 = G__33581;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__33582){
var map__33583 = p__33582;
var map__33583__$1 = ((((!((map__33583 == null)))?((((map__33583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33583):map__33583);
var name = cljs.core.get.call(null,map__33583__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__33583__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__33583__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__33583__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__33583__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__33583__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__33583__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__33585){
var map__33586 = p__33585;
var map__33586__$1 = ((((!((map__33586 == null)))?((((map__33586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33586):map__33586);
var name = cljs.core.get.call(null,map__33586__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__33586__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__33586__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__33586__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__33586__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__33586__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__33586__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__33588){
var map__33589 = p__33588;
var map__33589__$1 = ((((!((map__33589 == null)))?((((map__33589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33589.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33589):map__33589);
var t = cljs.core.get.call(null,map__33589__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__33589__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__33589__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__33589__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__33589__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__33591_33609 = cljs.core.seq.call(null,protocols);
var chunk__33592_33610 = null;
var count__33593_33611 = (0);
var i__33594_33612 = (0);
while(true){
if((i__33594_33612 < count__33593_33611)){
var protocol_33613 = cljs.core._nth.call(null,chunk__33592_33610,i__33594_33612);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_33613)].join('')),"}");

var G__33614 = seq__33591_33609;
var G__33615 = chunk__33592_33610;
var G__33616 = count__33593_33611;
var G__33617 = (i__33594_33612 + (1));
seq__33591_33609 = G__33614;
chunk__33592_33610 = G__33615;
count__33593_33611 = G__33616;
i__33594_33612 = G__33617;
continue;
} else {
var temp__4657__auto___33618 = cljs.core.seq.call(null,seq__33591_33609);
if(temp__4657__auto___33618){
var seq__33591_33619__$1 = temp__4657__auto___33618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33591_33619__$1)){
var c__28034__auto___33620 = cljs.core.chunk_first.call(null,seq__33591_33619__$1);
var G__33621 = cljs.core.chunk_rest.call(null,seq__33591_33619__$1);
var G__33622 = c__28034__auto___33620;
var G__33623 = cljs.core.count.call(null,c__28034__auto___33620);
var G__33624 = (0);
seq__33591_33609 = G__33621;
chunk__33592_33610 = G__33622;
count__33593_33611 = G__33623;
i__33594_33612 = G__33624;
continue;
} else {
var protocol_33625 = cljs.core.first.call(null,seq__33591_33619__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_33625)].join('')),"}");

var G__33626 = cljs.core.next.call(null,seq__33591_33619__$1);
var G__33627 = null;
var G__33628 = (0);
var G__33629 = (0);
seq__33591_33609 = G__33626;
chunk__33592_33610 = G__33627;
count__33593_33611 = G__33628;
i__33594_33612 = G__33629;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__33595_33630 = cljs.core.seq.call(null,fields__$1);
var chunk__33596_33631 = null;
var count__33597_33632 = (0);
var i__33598_33633 = (0);
while(true){
if((i__33598_33633 < count__33597_33632)){
var fld_33634 = cljs.core._nth.call(null,chunk__33596_33631,i__33598_33633);
cljs.compiler.emitln.call(null,"this.",fld_33634," = ",fld_33634,";");

var G__33635 = seq__33595_33630;
var G__33636 = chunk__33596_33631;
var G__33637 = count__33597_33632;
var G__33638 = (i__33598_33633 + (1));
seq__33595_33630 = G__33635;
chunk__33596_33631 = G__33636;
count__33597_33632 = G__33637;
i__33598_33633 = G__33638;
continue;
} else {
var temp__4657__auto___33639 = cljs.core.seq.call(null,seq__33595_33630);
if(temp__4657__auto___33639){
var seq__33595_33640__$1 = temp__4657__auto___33639;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33595_33640__$1)){
var c__28034__auto___33641 = cljs.core.chunk_first.call(null,seq__33595_33640__$1);
var G__33642 = cljs.core.chunk_rest.call(null,seq__33595_33640__$1);
var G__33643 = c__28034__auto___33641;
var G__33644 = cljs.core.count.call(null,c__28034__auto___33641);
var G__33645 = (0);
seq__33595_33630 = G__33642;
chunk__33596_33631 = G__33643;
count__33597_33632 = G__33644;
i__33598_33633 = G__33645;
continue;
} else {
var fld_33646 = cljs.core.first.call(null,seq__33595_33640__$1);
cljs.compiler.emitln.call(null,"this.",fld_33646," = ",fld_33646,";");

var G__33647 = cljs.core.next.call(null,seq__33595_33640__$1);
var G__33648 = null;
var G__33649 = (0);
var G__33650 = (0);
seq__33595_33630 = G__33647;
chunk__33596_33631 = G__33648;
count__33597_33632 = G__33649;
i__33598_33633 = G__33650;
continue;
}
} else {
}
}
break;
}

var seq__33599_33651 = cljs.core.seq.call(null,pmasks);
var chunk__33600_33652 = null;
var count__33601_33653 = (0);
var i__33602_33654 = (0);
while(true){
if((i__33602_33654 < count__33601_33653)){
var vec__33603_33655 = cljs.core._nth.call(null,chunk__33600_33652,i__33602_33654);
var pno_33656 = cljs.core.nth.call(null,vec__33603_33655,(0),null);
var pmask_33657 = cljs.core.nth.call(null,vec__33603_33655,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_33656,"$ = ",pmask_33657,";");

var G__33658 = seq__33599_33651;
var G__33659 = chunk__33600_33652;
var G__33660 = count__33601_33653;
var G__33661 = (i__33602_33654 + (1));
seq__33599_33651 = G__33658;
chunk__33600_33652 = G__33659;
count__33601_33653 = G__33660;
i__33602_33654 = G__33661;
continue;
} else {
var temp__4657__auto___33662 = cljs.core.seq.call(null,seq__33599_33651);
if(temp__4657__auto___33662){
var seq__33599_33663__$1 = temp__4657__auto___33662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33599_33663__$1)){
var c__28034__auto___33664 = cljs.core.chunk_first.call(null,seq__33599_33663__$1);
var G__33665 = cljs.core.chunk_rest.call(null,seq__33599_33663__$1);
var G__33666 = c__28034__auto___33664;
var G__33667 = cljs.core.count.call(null,c__28034__auto___33664);
var G__33668 = (0);
seq__33599_33651 = G__33665;
chunk__33600_33652 = G__33666;
count__33601_33653 = G__33667;
i__33602_33654 = G__33668;
continue;
} else {
var vec__33606_33669 = cljs.core.first.call(null,seq__33599_33663__$1);
var pno_33670 = cljs.core.nth.call(null,vec__33606_33669,(0),null);
var pmask_33671 = cljs.core.nth.call(null,vec__33606_33669,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_33670,"$ = ",pmask_33671,";");

var G__33672 = cljs.core.next.call(null,seq__33599_33663__$1);
var G__33673 = null;
var G__33674 = (0);
var G__33675 = (0);
seq__33599_33651 = G__33672;
chunk__33600_33652 = G__33673;
count__33601_33653 = G__33674;
i__33602_33654 = G__33675;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__33676){
var map__33677 = p__33676;
var map__33677__$1 = ((((!((map__33677 == null)))?((((map__33677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33677.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33677):map__33677);
var t = cljs.core.get.call(null,map__33677__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__33677__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__33677__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__33677__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__33677__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__33679_33697 = cljs.core.seq.call(null,protocols);
var chunk__33680_33698 = null;
var count__33681_33699 = (0);
var i__33682_33700 = (0);
while(true){
if((i__33682_33700 < count__33681_33699)){
var protocol_33701 = cljs.core._nth.call(null,chunk__33680_33698,i__33682_33700);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_33701)].join('')),"}");

var G__33702 = seq__33679_33697;
var G__33703 = chunk__33680_33698;
var G__33704 = count__33681_33699;
var G__33705 = (i__33682_33700 + (1));
seq__33679_33697 = G__33702;
chunk__33680_33698 = G__33703;
count__33681_33699 = G__33704;
i__33682_33700 = G__33705;
continue;
} else {
var temp__4657__auto___33706 = cljs.core.seq.call(null,seq__33679_33697);
if(temp__4657__auto___33706){
var seq__33679_33707__$1 = temp__4657__auto___33706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33679_33707__$1)){
var c__28034__auto___33708 = cljs.core.chunk_first.call(null,seq__33679_33707__$1);
var G__33709 = cljs.core.chunk_rest.call(null,seq__33679_33707__$1);
var G__33710 = c__28034__auto___33708;
var G__33711 = cljs.core.count.call(null,c__28034__auto___33708);
var G__33712 = (0);
seq__33679_33697 = G__33709;
chunk__33680_33698 = G__33710;
count__33681_33699 = G__33711;
i__33682_33700 = G__33712;
continue;
} else {
var protocol_33713 = cljs.core.first.call(null,seq__33679_33707__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_33713)].join('')),"}");

var G__33714 = cljs.core.next.call(null,seq__33679_33707__$1);
var G__33715 = null;
var G__33716 = (0);
var G__33717 = (0);
seq__33679_33697 = G__33714;
chunk__33680_33698 = G__33715;
count__33681_33699 = G__33716;
i__33682_33700 = G__33717;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__33683_33718 = cljs.core.seq.call(null,fields__$1);
var chunk__33684_33719 = null;
var count__33685_33720 = (0);
var i__33686_33721 = (0);
while(true){
if((i__33686_33721 < count__33685_33720)){
var fld_33722 = cljs.core._nth.call(null,chunk__33684_33719,i__33686_33721);
cljs.compiler.emitln.call(null,"this.",fld_33722," = ",fld_33722,";");

var G__33723 = seq__33683_33718;
var G__33724 = chunk__33684_33719;
var G__33725 = count__33685_33720;
var G__33726 = (i__33686_33721 + (1));
seq__33683_33718 = G__33723;
chunk__33684_33719 = G__33724;
count__33685_33720 = G__33725;
i__33686_33721 = G__33726;
continue;
} else {
var temp__4657__auto___33727 = cljs.core.seq.call(null,seq__33683_33718);
if(temp__4657__auto___33727){
var seq__33683_33728__$1 = temp__4657__auto___33727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33683_33728__$1)){
var c__28034__auto___33729 = cljs.core.chunk_first.call(null,seq__33683_33728__$1);
var G__33730 = cljs.core.chunk_rest.call(null,seq__33683_33728__$1);
var G__33731 = c__28034__auto___33729;
var G__33732 = cljs.core.count.call(null,c__28034__auto___33729);
var G__33733 = (0);
seq__33683_33718 = G__33730;
chunk__33684_33719 = G__33731;
count__33685_33720 = G__33732;
i__33686_33721 = G__33733;
continue;
} else {
var fld_33734 = cljs.core.first.call(null,seq__33683_33728__$1);
cljs.compiler.emitln.call(null,"this.",fld_33734," = ",fld_33734,";");

var G__33735 = cljs.core.next.call(null,seq__33683_33728__$1);
var G__33736 = null;
var G__33737 = (0);
var G__33738 = (0);
seq__33683_33718 = G__33735;
chunk__33684_33719 = G__33736;
count__33685_33720 = G__33737;
i__33686_33721 = G__33738;
continue;
}
} else {
}
}
break;
}

var seq__33687_33739 = cljs.core.seq.call(null,pmasks);
var chunk__33688_33740 = null;
var count__33689_33741 = (0);
var i__33690_33742 = (0);
while(true){
if((i__33690_33742 < count__33689_33741)){
var vec__33691_33743 = cljs.core._nth.call(null,chunk__33688_33740,i__33690_33742);
var pno_33744 = cljs.core.nth.call(null,vec__33691_33743,(0),null);
var pmask_33745 = cljs.core.nth.call(null,vec__33691_33743,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_33744,"$ = ",pmask_33745,";");

var G__33746 = seq__33687_33739;
var G__33747 = chunk__33688_33740;
var G__33748 = count__33689_33741;
var G__33749 = (i__33690_33742 + (1));
seq__33687_33739 = G__33746;
chunk__33688_33740 = G__33747;
count__33689_33741 = G__33748;
i__33690_33742 = G__33749;
continue;
} else {
var temp__4657__auto___33750 = cljs.core.seq.call(null,seq__33687_33739);
if(temp__4657__auto___33750){
var seq__33687_33751__$1 = temp__4657__auto___33750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33687_33751__$1)){
var c__28034__auto___33752 = cljs.core.chunk_first.call(null,seq__33687_33751__$1);
var G__33753 = cljs.core.chunk_rest.call(null,seq__33687_33751__$1);
var G__33754 = c__28034__auto___33752;
var G__33755 = cljs.core.count.call(null,c__28034__auto___33752);
var G__33756 = (0);
seq__33687_33739 = G__33753;
chunk__33688_33740 = G__33754;
count__33689_33741 = G__33755;
i__33690_33742 = G__33756;
continue;
} else {
var vec__33694_33757 = cljs.core.first.call(null,seq__33687_33751__$1);
var pno_33758 = cljs.core.nth.call(null,vec__33694_33757,(0),null);
var pmask_33759 = cljs.core.nth.call(null,vec__33694_33757,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_33758,"$ = ",pmask_33759,";");

var G__33760 = cljs.core.next.call(null,seq__33687_33751__$1);
var G__33761 = null;
var G__33762 = (0);
var G__33763 = (0);
seq__33687_33739 = G__33760;
chunk__33688_33740 = G__33761;
count__33689_33741 = G__33762;
i__33690_33742 = G__33763;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__33764){
var map__33765 = p__33764;
var map__33765__$1 = ((((!((map__33765 == null)))?((((map__33765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33765.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33765):map__33765);
var target = cljs.core.get.call(null,map__33765__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__33765__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__33765__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__33765__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__33765__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__32684__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__33767){
var map__33768 = p__33767;
var map__33768__$1 = ((((!((map__33768 == null)))?((((map__33768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33768.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33768):map__33768);
var op = cljs.core.get.call(null,map__33768__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__33768__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__33768__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__33768__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__33768__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__27183__auto__ = code;
if(cljs.core.truth_(and__27183__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__27183__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__32684__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__32684__auto__))){
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

var seq__33773 = cljs.core.seq.call(null,table);
var chunk__33774 = null;
var count__33775 = (0);
var i__33776 = (0);
while(true){
if((i__33776 < count__33775)){
var vec__33777 = cljs.core._nth.call(null,chunk__33774,i__33776);
var sym = cljs.core.nth.call(null,vec__33777,(0),null);
var value = cljs.core.nth.call(null,vec__33777,(1),null);
var ns_33783 = cljs.core.namespace.call(null,sym);
var name_33784 = cljs.core.name.call(null,sym);
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

var G__33785 = seq__33773;
var G__33786 = chunk__33774;
var G__33787 = count__33775;
var G__33788 = (i__33776 + (1));
seq__33773 = G__33785;
chunk__33774 = G__33786;
count__33775 = G__33787;
i__33776 = G__33788;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33773);
if(temp__4657__auto__){
var seq__33773__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33773__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__33773__$1);
var G__33789 = cljs.core.chunk_rest.call(null,seq__33773__$1);
var G__33790 = c__28034__auto__;
var G__33791 = cljs.core.count.call(null,c__28034__auto__);
var G__33792 = (0);
seq__33773 = G__33789;
chunk__33774 = G__33790;
count__33775 = G__33791;
i__33776 = G__33792;
continue;
} else {
var vec__33780 = cljs.core.first.call(null,seq__33773__$1);
var sym = cljs.core.nth.call(null,vec__33780,(0),null);
var value = cljs.core.nth.call(null,vec__33780,(1),null);
var ns_33793 = cljs.core.namespace.call(null,sym);
var name_33794 = cljs.core.name.call(null,sym);
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

var G__33795 = cljs.core.next.call(null,seq__33773__$1);
var G__33796 = null;
var G__33797 = (0);
var G__33798 = (0);
seq__33773 = G__33795;
chunk__33774 = G__33796;
count__33775 = G__33797;
i__33776 = G__33798;
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
var G__33800 = arguments.length;
switch (G__33800) {
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
var k_33805 = cljs.core.first.call(null,ks);
var vec__33801_33806 = cljs.core.conj.call(null,prefix,k_33805);
var top_33807 = cljs.core.nth.call(null,vec__33801_33806,(0),null);
var prefix_SINGLEQUOTE__33808 = vec__33801_33806;
if((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_33805)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__33808) == null))){
if(!((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_33807)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_33807)))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__33808)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_33807);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__33808)),";");
}
} else {
}

var m_33809 = cljs.core.get.call(null,externs,k_33805);
if(cljs.core.empty_QMARK_.call(null,m_33809)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__33808,m_33809,top_level,known_externs);
}

var G__33810 = cljs.core.next.call(null,ks);
ks = G__33810;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
