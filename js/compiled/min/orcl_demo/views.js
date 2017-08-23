// Compiled by ClojureScript 1.9.908 {}
goog.provide('orcl_demo.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('reagent.core');
orcl_demo.views.editor = (function orcl_demo$views$editor(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"3",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_textarea,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"rows","rows",850049680),(10),new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"program","program",781564284)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__42992_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-program","change-program",836896381),p1__42992_SHARP_], null));
})], null)], null);
});
orcl_demo.views.coeffect = (function orcl_demo$views$coeffect(id,definition){
var collapsed = reagent.core.atom.call(null,true);
var value = reagent.core.atom.call(null,"");
return ((function (collapsed,value){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,collapsed))){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.m-0.w-100","pre.m-0.w-100",-1761730416),definition], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-plus",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (collapsed,value){
return (function (){
return cljs.core.swap_BANG_.call(null,collapsed,cljs.core.not);
});})(collapsed,value))
], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"3px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.m-0.w-100","pre.m-0.w-100",-1761730416),definition], null),"=>",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"model","model",331153215),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (collapsed,value){
return (function (p1__42993_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__42993_SHARP_);
});})(collapsed,value))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Unblock",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (collapsed,value){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unblock","unblock",-483196342),id,cljs.core.deref.call(null,value)], null));
});})(collapsed,value))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (collapsed,value){
return (function (){
return cljs.core.swap_BANG_.call(null,collapsed,cljs.core.not);
});})(collapsed,value))
], null)], null)], null)], null)], null);
}
});
;})(collapsed,value))
});
orcl_demo.views.pending_coeffects_list = (function orcl_demo$views$pending_coeffects_list(){
var temp__4657__auto__ = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985)], null))));
if(temp__4657__auto__){
var data = temp__4657__auto__;
return re_com.core.v_box.call(null,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Coeffects",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),(function (){var iter__28003__auto__ = ((function (data,temp__4657__auto__){
return (function orcl_demo$views$pending_coeffects_list_$_iter__42994(s__42995){
return (new cljs.core.LazySeq(null,((function (data,temp__4657__auto__){
return (function (){
var s__42995__$1 = s__42995;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__42995__$1);
if(temp__4657__auto____$1){
var s__42995__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42995__$2)){
var c__28001__auto__ = cljs.core.chunk_first.call(null,s__42995__$2);
var size__28002__auto__ = cljs.core.count.call(null,c__28001__auto__);
var b__42997 = cljs.core.chunk_buffer.call(null,size__28002__auto__);
if((function (){var i__42996 = (0);
while(true){
if((i__42996 < size__28002__auto__)){
var vec__42998 = cljs.core._nth.call(null,c__28001__auto__,i__42996);
var id = cljs.core.nth.call(null,vec__42998,(0),null);
var v = cljs.core.nth.call(null,vec__42998,(1),null);
cljs.core.chunk_append.call(null,b__42997,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [orcl_demo.views.coeffect,id,v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__43004 = (i__42996 + (1));
i__42996 = G__43004;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42997),orcl_demo$views$pending_coeffects_list_$_iter__42994.call(null,cljs.core.chunk_rest.call(null,s__42995__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42997),null);
}
} else {
var vec__43001 = cljs.core.first.call(null,s__42995__$2);
var id = cljs.core.nth.call(null,vec__43001,(0),null);
var v = cljs.core.nth.call(null,vec__43001,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [orcl_demo.views.coeffect,id,v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),orcl_demo$views$pending_coeffects_list_$_iter__42994.call(null,cljs.core.rest.call(null,s__42995__$2)));
}
} else {
return null;
}
break;
}
});})(data,temp__4657__auto__))
,null,null));
});})(data,temp__4657__auto__))
;
return iter__28003__auto__.call(null,data);
})()], null));
} else {
return null;
}
});
orcl_demo.views.editor_side = (function orcl_demo$views$editor_side(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"2",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Run",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"run","run",-1821166653)], null));
})], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"running","running",1554969103),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099)], null)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [orcl_demo.views.pending_coeffects_list], null):null)], null)], null);
});
orcl_demo.views.values_list = (function orcl_demo$views$values_list(){
var temp__4657__auto__ = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556)], null))));
if(temp__4657__auto__){
var data = temp__4657__auto__;
return re_com.core.v_box.call(null,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.apply.call(null,cljs.core.vector,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Values",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),(function (){var iter__28003__auto__ = ((function (data,temp__4657__auto__){
return (function orcl_demo$views$values_list_$_iter__43005(s__43006){
return (new cljs.core.LazySeq(null,((function (data,temp__4657__auto__){
return (function (){
var s__43006__$1 = s__43006;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__43006__$1);
if(temp__4657__auto____$1){
var s__43006__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43006__$2)){
var c__28001__auto__ = cljs.core.chunk_first.call(null,s__43006__$2);
var size__28002__auto__ = cljs.core.count.call(null,c__28001__auto__);
var b__43008 = cljs.core.chunk_buffer.call(null,size__28002__auto__);
if((function (){var i__43007 = (0);
while(true){
if((i__43007 < size__28002__auto__)){
var vec__43009 = cljs.core._nth.call(null,c__28001__auto__,i__43007);
var i = cljs.core.nth.call(null,vec__43009,(0),null);
var v = cljs.core.nth.call(null,vec__43009,(1),null);
cljs.core.chunk_append.call(null,b__43008,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.m-0","pre.m-0",136708251),v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__43015 = (i__43007 + (1));
i__43007 = G__43015;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43008),orcl_demo$views$values_list_$_iter__43005.call(null,cljs.core.chunk_rest.call(null,s__43006__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43008),null);
}
} else {
var vec__43012 = cljs.core.first.call(null,s__43006__$2);
var i = cljs.core.nth.call(null,vec__43012,(0),null);
var v = cljs.core.nth.call(null,vec__43012,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.m-0","pre.m-0",136708251),v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),orcl_demo$views$values_list_$_iter__43005.call(null,cljs.core.rest.call(null,s__43006__$2)));
}
} else {
return null;
}
break;
}
});})(data,temp__4657__auto__))
,null,null));
});})(data,temp__4657__auto__))
;
return iter__28003__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,data));
})()));
} else {
return null;
}
});
orcl_demo.views.realized_coeffects_list = (function orcl_demo$views$realized_coeffects_list(){
var temp__4657__auto__ = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"realized","realized",-153188123)], null))));
if(temp__4657__auto__){
var data = temp__4657__auto__;
return re_com.core.v_box.call(null,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.apply.call(null,cljs.core.vector,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"Realized",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null),(function (){var iter__28003__auto__ = ((function (data,temp__4657__auto__){
return (function orcl_demo$views$realized_coeffects_list_$_iter__43016(s__43017){
return (new cljs.core.LazySeq(null,((function (data,temp__4657__auto__){
return (function (){
var s__43017__$1 = s__43017;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__43017__$1);
if(temp__4657__auto____$1){
var s__43017__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43017__$2)){
var c__28001__auto__ = cljs.core.chunk_first.call(null,s__43017__$2);
var size__28002__auto__ = cljs.core.count.call(null,c__28001__auto__);
var b__43019 = cljs.core.chunk_buffer.call(null,size__28002__auto__);
if((function (){var i__43018 = (0);
while(true){
if((i__43018 < size__28002__auto__)){
var vec__43020 = cljs.core._nth.call(null,c__28001__auto__,i__43018);
var i = cljs.core.nth.call(null,vec__43020,(0),null);
var map__43023 = cljs.core.nth.call(null,vec__43020,(1),null);
var map__43023__$1 = ((((!((map__43023 == null)))?((((map__43023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43023.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43023):map__43023);
var definition = cljs.core.get.call(null,map__43023__$1,new cljs.core.Keyword(null,"definition","definition",-1198729982));
var value = cljs.core.get.call(null,map__43023__$1,new cljs.core.Keyword(null,"value","value",305978217));
cljs.core.chunk_append.call(null,b__43019,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.m-0","pre.m-0",136708251),definition], null),"=>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.m-0","pre.m-0",136708251),value], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__43030 = (i__43018 + (1));
i__43018 = G__43030;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43019),orcl_demo$views$realized_coeffects_list_$_iter__43016.call(null,cljs.core.chunk_rest.call(null,s__43017__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43019),null);
}
} else {
var vec__43025 = cljs.core.first.call(null,s__43017__$2);
var i = cljs.core.nth.call(null,vec__43025,(0),null);
var map__43028 = cljs.core.nth.call(null,vec__43025,(1),null);
var map__43028__$1 = ((((!((map__43028 == null)))?((((map__43028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43028.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43028):map__43028);
var definition = cljs.core.get.call(null,map__43028__$1,new cljs.core.Keyword(null,"definition","definition",-1198729982));
var value = cljs.core.get.call(null,map__43028__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.m-0","pre.m-0",136708251),definition], null),"=>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.m-0","pre.m-0",136708251),value], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),orcl_demo$views$realized_coeffects_list_$_iter__43016.call(null,cljs.core.rest.call(null,s__43017__$2)));
}
} else {
return null;
}
break;
}
});})(data,temp__4657__auto__))
,null,null));
});})(data,temp__4657__auto__))
;
return iter__28003__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,data));
})()));
} else {
return null;
}
});
orcl_demo.views.editor_pane = (function orcl_demo$views$editor_pane(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [orcl_demo.views.editor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [orcl_demo.views.editor_side], null)], null)], null);
});
orcl_demo.views.main_panel = (function orcl_demo$views$main_panel(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"margin","margin",-995903681),"10px auto 0 auto",new cljs.core.Keyword(null,"width","width",-384071477),"1280px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [orcl_demo.views.editor_pane], null),(function (){var G__43031 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099)], null)));
var G__43031__$1 = (((G__43031 instanceof cljs.core.Keyword))?G__43031.fqn:null);
switch (G__43031__$1) {
case "running":
case "completed":
var x__28057__auto__ = cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [orcl_demo.views.values_list], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"values"], null));
return cljs.core._conj.call(null,(function (){var x__28057__auto____$1 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [orcl_demo.views.realized_coeffects_list], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"realized"], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28057__auto____$1);
})(),x__28057__auto__);

break;
case "editor":
return null;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43031__$1)].join('')));

}
})()], null)], null);
});

//# sourceMappingURL=views.js.map
