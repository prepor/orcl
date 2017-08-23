// Compiled by ClojureScript 1.9.908 {}
goog.provide('orcl_demo.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
orcl_demo.routes.hook_browser_navigation_BANG_ = (function orcl_demo$routes$hook_browser_navigation_BANG_(){
var G__42987 = (new goog.History());
goog.events.listen(G__42987,goog.history.EventType.NAVIGATE,((function (G__42987){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__42987))
);

G__42987.setEnabled(true);

return G__42987;
});
orcl_demo.routes.app_routes = (function orcl_demo$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

return orcl_demo.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map
