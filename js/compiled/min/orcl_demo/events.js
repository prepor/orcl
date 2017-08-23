// Compiled by ClojureScript 1.9.908 {}
goog.provide('orcl_demo.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('orcl_demo.db');
goog.require('orcl.analyzer');
goog.require('orcl.parser');
goog.require('orcl.target.naive');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return orcl_demo.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-program","change-program",836896381),(function (db,p__42791){
var vec__42792 = p__42791;
var _ = cljs.core.nth.call(null,vec__42792,(0),null);
var text = cljs.core.nth.call(null,vec__42792,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"program","program",781564284),text);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"run","run",-1821166653),(function (db,_){
cljs.core.prn.call(null,"---RUN",new cljs.core.Keyword(null,"program","program",781564284).cljs$core$IFn$_invoke$arity$1(db));

var compiled = orcl.target.naive.compile.call(null,orcl.analyzer.full.call(null,orcl.parser.parse.call(null,new cljs.core.Keyword(null,"program","program",781564284).cljs$core$IFn$_invoke$arity$1(db))));
var map__42795 = orcl.target.naive.run.call(null,compiled);
var map__42795__$1 = ((((!((map__42795 == null)))?((((map__42795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42795.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42795):map__42795);
var values = cljs.core.get.call(null,map__42795__$1,new cljs.core.Keyword(null,"values","values",372645556));
var state = cljs.core.get.call(null,map__42795__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var coeffects = cljs.core.get.call(null,map__42795__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
var G__42797 = cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"compiled","compiled",850043082),compiled,new cljs.core.Keyword(null,"values","values",372645556),values,new cljs.core.Keyword(null,"coeffects","coeffects",497912985),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,coeffects),new cljs.core.Keyword(null,"realized","realized",-153188123),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"program-state","program-state",-1752148088),state,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"running","running",1554969103));
if(cljs.core.empty_QMARK_.call(null,coeffects)){
return cljs.core.assoc.call(null,G__42797,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"completed","completed",-486056503));
} else {
return G__42797;
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"unblock","unblock",-483196342),(function (db,p__42799){
var vec__42800 = p__42799;
var _ = cljs.core.nth.call(null,vec__42800,(0),null);
var id = cljs.core.nth.call(null,vec__42800,(1),null);
var value = cljs.core.nth.call(null,vec__42800,(2),null);
var map__42803 = orcl.target.naive.unblock.call(null,new cljs.core.Keyword(null,"compiled","compiled",850043082).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"program-state","program-state",-1752148088).cljs$core$IFn$_invoke$arity$1(db),id,JSON.parse(value));
var map__42803__$1 = ((((!((map__42803 == null)))?((((map__42803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42803):map__42803);
var values = cljs.core.get.call(null,map__42803__$1,new cljs.core.Keyword(null,"values","values",372645556));
var state = cljs.core.get.call(null,map__42803__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var coeffects = cljs.core.get.call(null,map__42803__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword(null,"realized","realized",-153188123),((function (map__42803,map__42803__$1,values,state,coeffects,vec__42800,_,id,value){
return (function (p1__42798_SHARP_){
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"definition","definition",-1198729982),cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),id], null)),new cljs.core.Keyword(null,"value","value",305978217),value], null),p1__42798_SHARP_);
});})(map__42803,map__42803__$1,values,state,coeffects,vec__42800,_,id,value))
),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),cljs.core.dissoc,id),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),cljs.core.merge,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,coeffects)),new cljs.core.Keyword(null,"program-state","program-state",-1752148088),state,new cljs.core.Keyword(null,"values","values",372645556),values);
}));

//# sourceMappingURL=events.js.map
