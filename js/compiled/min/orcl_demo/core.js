// Compiled by ClojureScript 1.9.908 {}
goog.provide('orcl_demo.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_frisk.core');
goog.require('orcl_demo.events');
goog.require('orcl_demo.subs');
goog.require('orcl_demo.routes');
goog.require('orcl_demo.views');
goog.require('orcl_demo.config');
cljs.core.enable_console_print_BANG_.call(null);
orcl_demo.core.dev_setup = (function orcl_demo$core$dev_setup(){
if(orcl_demo.config.debug_QMARK_){
re_frisk.core.enable_re_frisk_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
orcl_demo.core.mount_root = (function orcl_demo$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [orcl_demo.views.main_panel], null),document.getElementById("app"));
});
orcl_demo.core.init = (function orcl_demo$core$init(){
orcl_demo.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

orcl_demo.core.dev_setup.call(null);

return orcl_demo.core.mount_root.call(null);
});
goog.exportSymbol('orcl_demo.core.init', orcl_demo.core.init);

//# sourceMappingURL=core.js.map
