// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__37833 = arguments.length;
switch (G__37833) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async37834 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37834 = (function (f,blockable,meta37835){
this.f = f;
this.blockable = blockable;
this.meta37835 = meta37835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37836,meta37835__$1){
var self__ = this;
var _37836__$1 = this;
return (new cljs.core.async.t_cljs$core$async37834(self__.f,self__.blockable,meta37835__$1));
});

cljs.core.async.t_cljs$core$async37834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37836){
var self__ = this;
var _37836__$1 = this;
return self__.meta37835;
});

cljs.core.async.t_cljs$core$async37834.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37834.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37834.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async37834.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async37834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37835","meta37835",-64976768,null)], null);
});

cljs.core.async.t_cljs$core$async37834.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37834";

cljs.core.async.t_cljs$core$async37834.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async37834");
});

cljs.core.async.__GT_t_cljs$core$async37834 = (function cljs$core$async$__GT_t_cljs$core$async37834(f__$1,blockable__$1,meta37835){
return (new cljs.core.async.t_cljs$core$async37834(f__$1,blockable__$1,meta37835));
});

}

return (new cljs.core.async.t_cljs$core$async37834(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__37840 = arguments.length;
switch (G__37840) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__37843 = arguments.length;
switch (G__37843) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__37846 = arguments.length;
switch (G__37846) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_37848 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37848);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37848,ret){
return (function (){
return fn1.call(null,val_37848);
});})(val_37848,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__37850 = arguments.length;
switch (G__37850) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__28140__auto___37852 = n;
var x_37853 = (0);
while(true){
if((x_37853 < n__28140__auto___37852)){
(a[x_37853] = (0));

var G__37854 = (x_37853 + (1));
x_37853 = G__37854;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__37855 = (i + (1));
i = G__37855;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37856 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37856 = (function (flag,meta37857){
this.flag = flag;
this.meta37857 = meta37857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37858,meta37857__$1){
var self__ = this;
var _37858__$1 = this;
return (new cljs.core.async.t_cljs$core$async37856(self__.flag,meta37857__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37856.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37858){
var self__ = this;
var _37858__$1 = this;
return self__.meta37857;
});})(flag))
;

cljs.core.async.t_cljs$core$async37856.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37856.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37856.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37856.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37856.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37857","meta37857",774324837,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37856.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37856.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37856";

cljs.core.async.t_cljs$core$async37856.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async37856");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async37856 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37856(flag__$1,meta37857){
return (new cljs.core.async.t_cljs$core$async37856(flag__$1,meta37857));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37856(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37859 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37859 = (function (flag,cb,meta37860){
this.flag = flag;
this.cb = cb;
this.meta37860 = meta37860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37861,meta37860__$1){
var self__ = this;
var _37861__$1 = this;
return (new cljs.core.async.t_cljs$core$async37859(self__.flag,self__.cb,meta37860__$1));
});

cljs.core.async.t_cljs$core$async37859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37861){
var self__ = this;
var _37861__$1 = this;
return self__.meta37860;
});

cljs.core.async.t_cljs$core$async37859.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37859.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37859.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37859.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37859.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37860","meta37860",-994846651,null)], null);
});

cljs.core.async.t_cljs$core$async37859.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37859";

cljs.core.async.t_cljs$core$async37859.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async37859");
});

cljs.core.async.__GT_t_cljs$core$async37859 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37859(flag__$1,cb__$1,meta37860){
return (new cljs.core.async.t_cljs$core$async37859(flag__$1,cb__$1,meta37860));
});

}

return (new cljs.core.async.t_cljs$core$async37859(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37862_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37862_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37863_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37863_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27195__auto__ = wport;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37864 = (i + (1));
i = G__37864;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27195__auto__ = ret;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__27183__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27183__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___37870 = arguments.length;
var i__28365__auto___37871 = (0);
while(true){
if((i__28365__auto___37871 < len__28364__auto___37870)){
args__28371__auto__.push((arguments[i__28365__auto___37871]));

var G__37872 = (i__28365__auto___37871 + (1));
i__28365__auto___37871 = G__37872;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37867){
var map__37868 = p__37867;
var map__37868__$1 = ((((!((map__37868 == null)))?((((map__37868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37868):map__37868);
var opts = map__37868__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37865){
var G__37866 = cljs.core.first.call(null,seq37865);
var seq37865__$1 = cljs.core.next.call(null,seq37865);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37866,seq37865__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__37874 = arguments.length;
switch (G__37874) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37787__auto___37920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37787__auto___37920){
return (function (){
var f__37788__auto__ = (function (){var switch__37699__auto__ = ((function (c__37787__auto___37920){
return (function (state_37898){
var state_val_37899 = (state_37898[(1)]);
if((state_val_37899 === (7))){
var inst_37894 = (state_37898[(2)]);
var state_37898__$1 = state_37898;
var statearr_37900_37921 = state_37898__$1;
(statearr_37900_37921[(2)] = inst_37894);

(statearr_37900_37921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37899 === (1))){
var state_37898__$1 = state_37898;
var statearr_37901_37922 = state_37898__$1;
(statearr_37901_37922[(2)] = null);

(statearr_37901_37922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37899 === (4))){
var inst_37877 = (state_37898[(7)]);
var inst_37877__$1 = (state_37898[(2)]);
var inst_37878 = (inst_37877__$1 == null);
var state_37898__$1 = (function (){var statearr_37902 = state_37898;
(statearr_37902[(7)] = inst_37877__$1);

return statearr_37902;
})();
if(cljs.core.truth_(inst_37878)){
var statearr_37903_37923 = state_37898__$1;
(statearr_37903_37923[(1)] = (5));

} else {
var statearr_37904_37924 = state_37898__$1;
(statearr_37904_37924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37899 === (13))){
var state_37898__$1 = state_37898;
var statearr_37905_37925 = state_37898__$1;
(statearr_37905_37925[(2)] = null);

(statearr_37905_37925[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37899 === (6))){
var inst_37877 = (state_37898[(7)]);
var state_37898__$1 = state_37898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37898__$1,(11),to,inst_37877);
} else {
if((state_val_37899 === (3))){
var inst_37896 = (state_37898[(2)]);
var state_37898__$1 = state_37898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37898__$1,inst_37896);
} else {
if((state_val_37899 === (12))){
var state_37898__$1 = state_37898;
var statearr_37906_37926 = state_37898__$1;
(statearr_37906_37926[(2)] = null);

(statearr_37906_37926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37899 === (2))){
var state_37898__$1 = state_37898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37898__$1,(4),from);
} else {
if((state_val_37899 === (11))){
var inst_37887 = (state_37898[(2)]);
var state_37898__$1 = state_37898;
if(cljs.core.truth_(inst_37887)){
var statearr_37907_37927 = state_37898__$1;
(statearr_37907_37927[(1)] = (12));

} else {
var statearr_37908_37928 = state_37898__$1;
(statearr_37908_37928[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37899 === (9))){
var state_37898__$1 = state_37898;
var statearr_37909_37929 = state_37898__$1;
(statearr_37909_37929[(2)] = null);

(statearr_37909_37929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37899 === (5))){
var state_37898__$1 = state_37898;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37910_37930 = state_37898__$1;
(statearr_37910_37930[(1)] = (8));

} else {
var statearr_37911_37931 = state_37898__$1;
(statearr_37911_37931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37899 === (14))){
var inst_37892 = (state_37898[(2)]);
var state_37898__$1 = state_37898;
var statearr_37912_37932 = state_37898__$1;
(statearr_37912_37932[(2)] = inst_37892);

(statearr_37912_37932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37899 === (10))){
var inst_37884 = (state_37898[(2)]);
var state_37898__$1 = state_37898;
var statearr_37913_37933 = state_37898__$1;
(statearr_37913_37933[(2)] = inst_37884);

(statearr_37913_37933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37899 === (8))){
var inst_37881 = cljs.core.async.close_BANG_.call(null,to);
var state_37898__$1 = state_37898;
var statearr_37914_37934 = state_37898__$1;
(statearr_37914_37934[(2)] = inst_37881);

(statearr_37914_37934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37787__auto___37920))
;
return ((function (switch__37699__auto__,c__37787__auto___37920){
return (function() {
var cljs$core$async$state_machine__37700__auto__ = null;
var cljs$core$async$state_machine__37700__auto____0 = (function (){
var statearr_37915 = [null,null,null,null,null,null,null,null];
(statearr_37915[(0)] = cljs$core$async$state_machine__37700__auto__);

(statearr_37915[(1)] = (1));

return statearr_37915;
});
var cljs$core$async$state_machine__37700__auto____1 = (function (state_37898){
while(true){
var ret_value__37701__auto__ = (function (){try{while(true){
var result__37702__auto__ = switch__37699__auto__.call(null,state_37898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37702__auto__;
}
break;
}
}catch (e37916){if((e37916 instanceof Object)){
var ex__37703__auto__ = e37916;
var statearr_37917_37935 = state_37898;
(statearr_37917_37935[(5)] = ex__37703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37936 = state_37898;
state_37898 = G__37936;
continue;
} else {
return ret_value__37701__auto__;
}
break;
}
});
cljs$core$async$state_machine__37700__auto__ = function(state_37898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37700__auto____1.call(this,state_37898);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37700__auto____0;
cljs$core$async$state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37700__auto____1;
return cljs$core$async$state_machine__37700__auto__;
})()
;})(switch__37699__auto__,c__37787__auto___37920))
})();
var state__37789__auto__ = (function (){var statearr_37918 = f__37788__auto__.call(null);
(statearr_37918[(6)] = c__37787__auto___37920);

return statearr_37918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37789__auto__);
});})(c__37787__auto___37920))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__37937){
var vec__37938 = p__37937;
var v = cljs.core.nth.call(null,vec__37938,(0),null);
var p = cljs.core.nth.call(null,vec__37938,(1),null);
var job = vec__37938;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__37787__auto___38109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37787__auto___38109,res,vec__37938,v,p,job,jobs,results){
return (function (){
var f__37788__auto__ = (function (){var switch__37699__auto__ = ((function (c__37787__auto___38109,res,vec__37938,v,p,job,jobs,results){
return (function (state_37945){
var state_val_37946 = (state_37945[(1)]);
if((state_val_37946 === (1))){
var state_37945__$1 = state_37945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37945__$1,(2),res,v);
} else {
if((state_val_37946 === (2))){
var inst_37942 = (state_37945[(2)]);
var inst_37943 = cljs.core.async.close_BANG_.call(null,res);
var state_37945__$1 = (function (){var statearr_37947 = state_37945;
(statearr_37947[(7)] = inst_37942);

return statearr_37947;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37945__$1,inst_37943);
} else {
return null;
}
}
});})(c__37787__auto___38109,res,vec__37938,v,p,job,jobs,results))
;
return ((function (switch__37699__auto__,c__37787__auto___38109,res,vec__37938,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____0 = (function (){
var statearr_37948 = [null,null,null,null,null,null,null,null];
(statearr_37948[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__);

(statearr_37948[(1)] = (1));

return statearr_37948;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____1 = (function (state_37945){
while(true){
var ret_value__37701__auto__ = (function (){try{while(true){
var result__37702__auto__ = switch__37699__auto__.call(null,state_37945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37702__auto__;
}
break;
}
}catch (e37949){if((e37949 instanceof Object)){
var ex__37703__auto__ = e37949;
var statearr_37950_38110 = state_37945;
(statearr_37950_38110[(5)] = ex__37703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38111 = state_37945;
state_37945 = G__38111;
continue;
} else {
return ret_value__37701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__ = function(state_37945){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____1.call(this,state_37945);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__;
})()
;})(switch__37699__auto__,c__37787__auto___38109,res,vec__37938,v,p,job,jobs,results))
})();
var state__37789__auto__ = (function (){var statearr_37951 = f__37788__auto__.call(null);
(statearr_37951[(6)] = c__37787__auto___38109);

return statearr_37951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37789__auto__);
});})(c__37787__auto___38109,res,vec__37938,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37952){
var vec__37953 = p__37952;
var v = cljs.core.nth.call(null,vec__37953,(0),null);
var p = cljs.core.nth.call(null,vec__37953,(1),null);
var job = vec__37953;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__28140__auto___38112 = n;
var __38113 = (0);
while(true){
if((__38113 < n__28140__auto___38112)){
var G__37956_38114 = type;
var G__37956_38115__$1 = (((G__37956_38114 instanceof cljs.core.Keyword))?G__37956_38114.fqn:null);
switch (G__37956_38115__$1) {
case "compute":
var c__37787__auto___38117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38113,c__37787__auto___38117,G__37956_38114,G__37956_38115__$1,n__28140__auto___38112,jobs,results,process,async){
return (function (){
var f__37788__auto__ = (function (){var switch__37699__auto__ = ((function (__38113,c__37787__auto___38117,G__37956_38114,G__37956_38115__$1,n__28140__auto___38112,jobs,results,process,async){
return (function (state_37969){
var state_val_37970 = (state_37969[(1)]);
if((state_val_37970 === (1))){
var state_37969__$1 = state_37969;
var statearr_37971_38118 = state_37969__$1;
(statearr_37971_38118[(2)] = null);

(statearr_37971_38118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (2))){
var state_37969__$1 = state_37969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37969__$1,(4),jobs);
} else {
if((state_val_37970 === (3))){
var inst_37967 = (state_37969[(2)]);
var state_37969__$1 = state_37969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37969__$1,inst_37967);
} else {
if((state_val_37970 === (4))){
var inst_37959 = (state_37969[(2)]);
var inst_37960 = process.call(null,inst_37959);
var state_37969__$1 = state_37969;
if(cljs.core.truth_(inst_37960)){
var statearr_37972_38119 = state_37969__$1;
(statearr_37972_38119[(1)] = (5));

} else {
var statearr_37973_38120 = state_37969__$1;
(statearr_37973_38120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (5))){
var state_37969__$1 = state_37969;
var statearr_37974_38121 = state_37969__$1;
(statearr_37974_38121[(2)] = null);

(statearr_37974_38121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (6))){
var state_37969__$1 = state_37969;
var statearr_37975_38122 = state_37969__$1;
(statearr_37975_38122[(2)] = null);

(statearr_37975_38122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (7))){
var inst_37965 = (state_37969[(2)]);
var state_37969__$1 = state_37969;
var statearr_37976_38123 = state_37969__$1;
(statearr_37976_38123[(2)] = inst_37965);

(statearr_37976_38123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38113,c__37787__auto___38117,G__37956_38114,G__37956_38115__$1,n__28140__auto___38112,jobs,results,process,async))
;
return ((function (__38113,switch__37699__auto__,c__37787__auto___38117,G__37956_38114,G__37956_38115__$1,n__28140__auto___38112,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____0 = (function (){
var statearr_37977 = [null,null,null,null,null,null,null];
(statearr_37977[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__);

(statearr_37977[(1)] = (1));

return statearr_37977;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____1 = (function (state_37969){
while(true){
var ret_value__37701__auto__ = (function (){try{while(true){
var result__37702__auto__ = switch__37699__auto__.call(null,state_37969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37702__auto__;
}
break;
}
}catch (e37978){if((e37978 instanceof Object)){
var ex__37703__auto__ = e37978;
var statearr_37979_38124 = state_37969;
(statearr_37979_38124[(5)] = ex__37703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38125 = state_37969;
state_37969 = G__38125;
continue;
} else {
return ret_value__37701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__ = function(state_37969){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____1.call(this,state_37969);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__;
})()
;})(__38113,switch__37699__auto__,c__37787__auto___38117,G__37956_38114,G__37956_38115__$1,n__28140__auto___38112,jobs,results,process,async))
})();
var state__37789__auto__ = (function (){var statearr_37980 = f__37788__auto__.call(null);
(statearr_37980[(6)] = c__37787__auto___38117);

return statearr_37980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37789__auto__);
});})(__38113,c__37787__auto___38117,G__37956_38114,G__37956_38115__$1,n__28140__auto___38112,jobs,results,process,async))
);


break;
case "async":
var c__37787__auto___38126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38113,c__37787__auto___38126,G__37956_38114,G__37956_38115__$1,n__28140__auto___38112,jobs,results,process,async){
return (function (){
var f__37788__auto__ = (function (){var switch__37699__auto__ = ((function (__38113,c__37787__auto___38126,G__37956_38114,G__37956_38115__$1,n__28140__auto___38112,jobs,results,process,async){
return (function (state_37993){
var state_val_37994 = (state_37993[(1)]);
if((state_val_37994 === (1))){
var state_37993__$1 = state_37993;
var statearr_37995_38127 = state_37993__$1;
(statearr_37995_38127[(2)] = null);

(statearr_37995_38127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37994 === (2))){
var state_37993__$1 = state_37993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37993__$1,(4),jobs);
} else {
if((state_val_37994 === (3))){
var inst_37991 = (state_37993[(2)]);
var state_37993__$1 = state_37993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37993__$1,inst_37991);
} else {
if((state_val_37994 === (4))){
var inst_37983 = (state_37993[(2)]);
var inst_37984 = async.call(null,inst_37983);
var state_37993__$1 = state_37993;
if(cljs.core.truth_(inst_37984)){
var statearr_37996_38128 = state_37993__$1;
(statearr_37996_38128[(1)] = (5));

} else {
var statearr_37997_38129 = state_37993__$1;
(statearr_37997_38129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37994 === (5))){
var state_37993__$1 = state_37993;
var statearr_37998_38130 = state_37993__$1;
(statearr_37998_38130[(2)] = null);

(statearr_37998_38130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37994 === (6))){
var state_37993__$1 = state_37993;
var statearr_37999_38131 = state_37993__$1;
(statearr_37999_38131[(2)] = null);

(statearr_37999_38131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37994 === (7))){
var inst_37989 = (state_37993[(2)]);
var state_37993__$1 = state_37993;
var statearr_38000_38132 = state_37993__$1;
(statearr_38000_38132[(2)] = inst_37989);

(statearr_38000_38132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38113,c__37787__auto___38126,G__37956_38114,G__37956_38115__$1,n__28140__auto___38112,jobs,results,process,async))
;
return ((function (__38113,switch__37699__auto__,c__37787__auto___38126,G__37956_38114,G__37956_38115__$1,n__28140__auto___38112,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____0 = (function (){
var statearr_38001 = [null,null,null,null,null,null,null];
(statearr_38001[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__);

(statearr_38001[(1)] = (1));

return statearr_38001;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____1 = (function (state_37993){
while(true){
var ret_value__37701__auto__ = (function (){try{while(true){
var result__37702__auto__ = switch__37699__auto__.call(null,state_37993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37702__auto__;
}
break;
}
}catch (e38002){if((e38002 instanceof Object)){
var ex__37703__auto__ = e38002;
var statearr_38003_38133 = state_37993;
(statearr_38003_38133[(5)] = ex__37703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38134 = state_37993;
state_37993 = G__38134;
continue;
} else {
return ret_value__37701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__ = function(state_37993){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____1.call(this,state_37993);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__;
})()
;})(__38113,switch__37699__auto__,c__37787__auto___38126,G__37956_38114,G__37956_38115__$1,n__28140__auto___38112,jobs,results,process,async))
})();
var state__37789__auto__ = (function (){var statearr_38004 = f__37788__auto__.call(null);
(statearr_38004[(6)] = c__37787__auto___38126);

return statearr_38004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37789__auto__);
});})(__38113,c__37787__auto___38126,G__37956_38114,G__37956_38115__$1,n__28140__auto___38112,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37956_38115__$1)].join('')));

}

var G__38135 = (__38113 + (1));
__38113 = G__38135;
continue;
} else {
}
break;
}

var c__37787__auto___38136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37787__auto___38136,jobs,results,process,async){
return (function (){
var f__37788__auto__ = (function (){var switch__37699__auto__ = ((function (c__37787__auto___38136,jobs,results,process,async){
return (function (state_38026){
var state_val_38027 = (state_38026[(1)]);
if((state_val_38027 === (1))){
var state_38026__$1 = state_38026;
var statearr_38028_38137 = state_38026__$1;
(statearr_38028_38137[(2)] = null);

(statearr_38028_38137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38027 === (2))){
var state_38026__$1 = state_38026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38026__$1,(4),from);
} else {
if((state_val_38027 === (3))){
var inst_38024 = (state_38026[(2)]);
var state_38026__$1 = state_38026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38026__$1,inst_38024);
} else {
if((state_val_38027 === (4))){
var inst_38007 = (state_38026[(7)]);
var inst_38007__$1 = (state_38026[(2)]);
var inst_38008 = (inst_38007__$1 == null);
var state_38026__$1 = (function (){var statearr_38029 = state_38026;
(statearr_38029[(7)] = inst_38007__$1);

return statearr_38029;
})();
if(cljs.core.truth_(inst_38008)){
var statearr_38030_38138 = state_38026__$1;
(statearr_38030_38138[(1)] = (5));

} else {
var statearr_38031_38139 = state_38026__$1;
(statearr_38031_38139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38027 === (5))){
var inst_38010 = cljs.core.async.close_BANG_.call(null,jobs);
var state_38026__$1 = state_38026;
var statearr_38032_38140 = state_38026__$1;
(statearr_38032_38140[(2)] = inst_38010);

(statearr_38032_38140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38027 === (6))){
var inst_38012 = (state_38026[(8)]);
var inst_38007 = (state_38026[(7)]);
var inst_38012__$1 = cljs.core.async.chan.call(null,(1));
var inst_38013 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38014 = [inst_38007,inst_38012__$1];
var inst_38015 = (new cljs.core.PersistentVector(null,2,(5),inst_38013,inst_38014,null));
var state_38026__$1 = (function (){var statearr_38033 = state_38026;
(statearr_38033[(8)] = inst_38012__$1);

return statearr_38033;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38026__$1,(8),jobs,inst_38015);
} else {
if((state_val_38027 === (7))){
var inst_38022 = (state_38026[(2)]);
var state_38026__$1 = state_38026;
var statearr_38034_38141 = state_38026__$1;
(statearr_38034_38141[(2)] = inst_38022);

(statearr_38034_38141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38027 === (8))){
var inst_38012 = (state_38026[(8)]);
var inst_38017 = (state_38026[(2)]);
var state_38026__$1 = (function (){var statearr_38035 = state_38026;
(statearr_38035[(9)] = inst_38017);

return statearr_38035;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38026__$1,(9),results,inst_38012);
} else {
if((state_val_38027 === (9))){
var inst_38019 = (state_38026[(2)]);
var state_38026__$1 = (function (){var statearr_38036 = state_38026;
(statearr_38036[(10)] = inst_38019);

return statearr_38036;
})();
var statearr_38037_38142 = state_38026__$1;
(statearr_38037_38142[(2)] = null);

(statearr_38037_38142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__37787__auto___38136,jobs,results,process,async))
;
return ((function (switch__37699__auto__,c__37787__auto___38136,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____0 = (function (){
var statearr_38038 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38038[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__);

(statearr_38038[(1)] = (1));

return statearr_38038;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____1 = (function (state_38026){
while(true){
var ret_value__37701__auto__ = (function (){try{while(true){
var result__37702__auto__ = switch__37699__auto__.call(null,state_38026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37702__auto__;
}
break;
}
}catch (e38039){if((e38039 instanceof Object)){
var ex__37703__auto__ = e38039;
var statearr_38040_38143 = state_38026;
(statearr_38040_38143[(5)] = ex__37703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38144 = state_38026;
state_38026 = G__38144;
continue;
} else {
return ret_value__37701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__ = function(state_38026){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____1.call(this,state_38026);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__;
})()
;})(switch__37699__auto__,c__37787__auto___38136,jobs,results,process,async))
})();
var state__37789__auto__ = (function (){var statearr_38041 = f__37788__auto__.call(null);
(statearr_38041[(6)] = c__37787__auto___38136);

return statearr_38041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37789__auto__);
});})(c__37787__auto___38136,jobs,results,process,async))
);


var c__37787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37787__auto__,jobs,results,process,async){
return (function (){
var f__37788__auto__ = (function (){var switch__37699__auto__ = ((function (c__37787__auto__,jobs,results,process,async){
return (function (state_38079){
var state_val_38080 = (state_38079[(1)]);
if((state_val_38080 === (7))){
var inst_38075 = (state_38079[(2)]);
var state_38079__$1 = state_38079;
var statearr_38081_38145 = state_38079__$1;
(statearr_38081_38145[(2)] = inst_38075);

(statearr_38081_38145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (20))){
var state_38079__$1 = state_38079;
var statearr_38082_38146 = state_38079__$1;
(statearr_38082_38146[(2)] = null);

(statearr_38082_38146[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (1))){
var state_38079__$1 = state_38079;
var statearr_38083_38147 = state_38079__$1;
(statearr_38083_38147[(2)] = null);

(statearr_38083_38147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (4))){
var inst_38044 = (state_38079[(7)]);
var inst_38044__$1 = (state_38079[(2)]);
var inst_38045 = (inst_38044__$1 == null);
var state_38079__$1 = (function (){var statearr_38084 = state_38079;
(statearr_38084[(7)] = inst_38044__$1);

return statearr_38084;
})();
if(cljs.core.truth_(inst_38045)){
var statearr_38085_38148 = state_38079__$1;
(statearr_38085_38148[(1)] = (5));

} else {
var statearr_38086_38149 = state_38079__$1;
(statearr_38086_38149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (15))){
var inst_38057 = (state_38079[(8)]);
var state_38079__$1 = state_38079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38079__$1,(18),to,inst_38057);
} else {
if((state_val_38080 === (21))){
var inst_38070 = (state_38079[(2)]);
var state_38079__$1 = state_38079;
var statearr_38087_38150 = state_38079__$1;
(statearr_38087_38150[(2)] = inst_38070);

(statearr_38087_38150[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (13))){
var inst_38072 = (state_38079[(2)]);
var state_38079__$1 = (function (){var statearr_38088 = state_38079;
(statearr_38088[(9)] = inst_38072);

return statearr_38088;
})();
var statearr_38089_38151 = state_38079__$1;
(statearr_38089_38151[(2)] = null);

(statearr_38089_38151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (6))){
var inst_38044 = (state_38079[(7)]);
var state_38079__$1 = state_38079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38079__$1,(11),inst_38044);
} else {
if((state_val_38080 === (17))){
var inst_38065 = (state_38079[(2)]);
var state_38079__$1 = state_38079;
if(cljs.core.truth_(inst_38065)){
var statearr_38090_38152 = state_38079__$1;
(statearr_38090_38152[(1)] = (19));

} else {
var statearr_38091_38153 = state_38079__$1;
(statearr_38091_38153[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (3))){
var inst_38077 = (state_38079[(2)]);
var state_38079__$1 = state_38079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38079__$1,inst_38077);
} else {
if((state_val_38080 === (12))){
var inst_38054 = (state_38079[(10)]);
var state_38079__$1 = state_38079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38079__$1,(14),inst_38054);
} else {
if((state_val_38080 === (2))){
var state_38079__$1 = state_38079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38079__$1,(4),results);
} else {
if((state_val_38080 === (19))){
var state_38079__$1 = state_38079;
var statearr_38092_38154 = state_38079__$1;
(statearr_38092_38154[(2)] = null);

(statearr_38092_38154[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (11))){
var inst_38054 = (state_38079[(2)]);
var state_38079__$1 = (function (){var statearr_38093 = state_38079;
(statearr_38093[(10)] = inst_38054);

return statearr_38093;
})();
var statearr_38094_38155 = state_38079__$1;
(statearr_38094_38155[(2)] = null);

(statearr_38094_38155[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (9))){
var state_38079__$1 = state_38079;
var statearr_38095_38156 = state_38079__$1;
(statearr_38095_38156[(2)] = null);

(statearr_38095_38156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (5))){
var state_38079__$1 = state_38079;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38096_38157 = state_38079__$1;
(statearr_38096_38157[(1)] = (8));

} else {
var statearr_38097_38158 = state_38079__$1;
(statearr_38097_38158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (14))){
var inst_38057 = (state_38079[(8)]);
var inst_38059 = (state_38079[(11)]);
var inst_38057__$1 = (state_38079[(2)]);
var inst_38058 = (inst_38057__$1 == null);
var inst_38059__$1 = cljs.core.not.call(null,inst_38058);
var state_38079__$1 = (function (){var statearr_38098 = state_38079;
(statearr_38098[(8)] = inst_38057__$1);

(statearr_38098[(11)] = inst_38059__$1);

return statearr_38098;
})();
if(inst_38059__$1){
var statearr_38099_38159 = state_38079__$1;
(statearr_38099_38159[(1)] = (15));

} else {
var statearr_38100_38160 = state_38079__$1;
(statearr_38100_38160[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (16))){
var inst_38059 = (state_38079[(11)]);
var state_38079__$1 = state_38079;
var statearr_38101_38161 = state_38079__$1;
(statearr_38101_38161[(2)] = inst_38059);

(statearr_38101_38161[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (10))){
var inst_38051 = (state_38079[(2)]);
var state_38079__$1 = state_38079;
var statearr_38102_38162 = state_38079__$1;
(statearr_38102_38162[(2)] = inst_38051);

(statearr_38102_38162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (18))){
var inst_38062 = (state_38079[(2)]);
var state_38079__$1 = state_38079;
var statearr_38103_38163 = state_38079__$1;
(statearr_38103_38163[(2)] = inst_38062);

(statearr_38103_38163[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (8))){
var inst_38048 = cljs.core.async.close_BANG_.call(null,to);
var state_38079__$1 = state_38079;
var statearr_38104_38164 = state_38079__$1;
(statearr_38104_38164[(2)] = inst_38048);

(statearr_38104_38164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37787__auto__,jobs,results,process,async))
;
return ((function (switch__37699__auto__,c__37787__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____0 = (function (){
var statearr_38105 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38105[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__);

(statearr_38105[(1)] = (1));

return statearr_38105;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____1 = (function (state_38079){
while(true){
var ret_value__37701__auto__ = (function (){try{while(true){
var result__37702__auto__ = switch__37699__auto__.call(null,state_38079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37702__auto__;
}
break;
}
}catch (e38106){if((e38106 instanceof Object)){
var ex__37703__auto__ = e38106;
var statearr_38107_38165 = state_38079;
(statearr_38107_38165[(5)] = ex__37703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38166 = state_38079;
state_38079 = G__38166;
continue;
} else {
return ret_value__37701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__ = function(state_38079){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____1.call(this,state_38079);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37700__auto__;
})()
;})(switch__37699__auto__,c__37787__auto__,jobs,results,process,async))
})();
var state__37789__auto__ = (function (){var statearr_38108 = f__37788__auto__.call(null);
(statearr_38108[(6)] = c__37787__auto__);

return statearr_38108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37789__auto__);
});})(c__37787__auto__,jobs,results,process,async))
);

return c__37787__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__38168 = arguments.length;
switch (G__38168) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__38171 = arguments.length;
switch (G__38171) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__38174 = arguments.length;
switch (G__38174) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__37787__auto___38223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37787__auto___38223,tc,fc){
return (function (){
var f__37788__auto__ = (function (){var switch__37699__auto__ = ((function (c__37787__auto___38223,tc,fc){
return (function (state_38200){
var state_val_38201 = (state_38200[(1)]);
if((state_val_38201 === (7))){
var inst_38196 = (state_38200[(2)]);
var state_38200__$1 = state_38200;
var statearr_38202_38224 = state_38200__$1;
(statearr_38202_38224[(2)] = inst_38196);

(statearr_38202_38224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38201 === (1))){
var state_38200__$1 = state_38200;
var statearr_38203_38225 = state_38200__$1;
(statearr_38203_38225[(2)] = null);

(statearr_38203_38225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38201 === (4))){
var inst_38177 = (state_38200[(7)]);
var inst_38177__$1 = (state_38200[(2)]);
var inst_38178 = (inst_38177__$1 == null);
var state_38200__$1 = (function (){var statearr_38204 = state_38200;
(statearr_38204[(7)] = inst_38177__$1);

return statearr_38204;
})();
if(cljs.core.truth_(inst_38178)){
var statearr_38205_38226 = state_38200__$1;
(statearr_38205_38226[(1)] = (5));

} else {
var statearr_38206_38227 = state_38200__$1;
(statearr_38206_38227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38201 === (13))){
var state_38200__$1 = state_38200;
var statearr_38207_38228 = state_38200__$1;
(statearr_38207_38228[(2)] = null);

(statearr_38207_38228[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38201 === (6))){
var inst_38177 = (state_38200[(7)]);
var inst_38183 = p.call(null,inst_38177);
var state_38200__$1 = state_38200;
if(cljs.core.truth_(inst_38183)){
var statearr_38208_38229 = state_38200__$1;
(statearr_38208_38229[(1)] = (9));

} else {
var statearr_38209_38230 = state_38200__$1;
(statearr_38209_38230[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38201 === (3))){
var inst_38198 = (state_38200[(2)]);
var state_38200__$1 = state_38200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38200__$1,inst_38198);
} else {
if((state_val_38201 === (12))){
var state_38200__$1 = state_38200;
var statearr_38210_38231 = state_38200__$1;
(statearr_38210_38231[(2)] = null);

(statearr_38210_38231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38201 === (2))){
var state_38200__$1 = state_38200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38200__$1,(4),ch);
} else {
if((state_val_38201 === (11))){
var inst_38177 = (state_38200[(7)]);
var inst_38187 = (state_38200[(2)]);
var state_38200__$1 = state_38200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38200__$1,(8),inst_38187,inst_38177);
} else {
if((state_val_38201 === (9))){
var state_38200__$1 = state_38200;
var statearr_38211_38232 = state_38200__$1;
(statearr_38211_38232[(2)] = tc);

(statearr_38211_38232[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38201 === (5))){
var inst_38180 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38181 = cljs.core.async.close_BANG_.call(null,fc);
var state_38200__$1 = (function (){var statearr_38212 = state_38200;
(statearr_38212[(8)] = inst_38180);

return statearr_38212;
})();
var statearr_38213_38233 = state_38200__$1;
(statearr_38213_38233[(2)] = inst_38181);

(statearr_38213_38233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38201 === (14))){
var inst_38194 = (state_38200[(2)]);
var state_38200__$1 = state_38200;
var statearr_38214_38234 = state_38200__$1;
(statearr_38214_38234[(2)] = inst_38194);

(statearr_38214_38234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38201 === (10))){
var state_38200__$1 = state_38200;
var statearr_38215_38235 = state_38200__$1;
(statearr_38215_38235[(2)] = fc);

(statearr_38215_38235[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38201 === (8))){
var inst_38189 = (state_38200[(2)]);
var state_38200__$1 = state_38200;
if(cljs.core.truth_(inst_38189)){
var statearr_38216_38236 = state_38200__$1;
(statearr_38216_38236[(1)] = (12));

} else {
var statearr_38217_38237 = state_38200__$1;
(statearr_38217_38237[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37787__auto___38223,tc,fc))
;
return ((function (switch__37699__auto__,c__37787__auto___38223,tc,fc){
return (function() {
var cljs$core$async$state_machine__37700__auto__ = null;
var cljs$core$async$state_machine__37700__auto____0 = (function (){
var statearr_38218 = [null,null,null,null,null,null,null,null,null];
(statearr_38218[(0)] = cljs$core$async$state_machine__37700__auto__);

(statearr_38218[(1)] = (1));

return statearr_38218;
});
var cljs$core$async$state_machine__37700__auto____1 = (function (state_38200){
while(true){
var ret_value__37701__auto__ = (function (){try{while(true){
var result__37702__auto__ = switch__37699__auto__.call(null,state_38200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37702__auto__;
}
break;
}
}catch (e38219){if((e38219 instanceof Object)){
var ex__37703__auto__ = e38219;
var statearr_38220_38238 = state_38200;
(statearr_38220_38238[(5)] = ex__37703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38239 = state_38200;
state_38200 = G__38239;
continue;
} else {
return ret_value__37701__auto__;
}
break;
}
});
cljs$core$async$state_machine__37700__auto__ = function(state_38200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37700__auto____1.call(this,state_38200);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37700__auto____0;
cljs$core$async$state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37700__auto____1;
return cljs$core$async$state_machine__37700__auto__;
})()
;})(switch__37699__auto__,c__37787__auto___38223,tc,fc))
})();
var state__37789__auto__ = (function (){var statearr_38221 = f__37788__auto__.call(null);
(statearr_38221[(6)] = c__37787__auto___38223);

return statearr_38221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37789__auto__);
});})(c__37787__auto___38223,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37787__auto__){
return (function (){
var f__37788__auto__ = (function (){var switch__37699__auto__ = ((function (c__37787__auto__){
return (function (state_38260){
var state_val_38261 = (state_38260[(1)]);
if((state_val_38261 === (7))){
var inst_38256 = (state_38260[(2)]);
var state_38260__$1 = state_38260;
var statearr_38262_38280 = state_38260__$1;
(statearr_38262_38280[(2)] = inst_38256);

(statearr_38262_38280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (1))){
var inst_38240 = init;
var state_38260__$1 = (function (){var statearr_38263 = state_38260;
(statearr_38263[(7)] = inst_38240);

return statearr_38263;
})();
var statearr_38264_38281 = state_38260__$1;
(statearr_38264_38281[(2)] = null);

(statearr_38264_38281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (4))){
var inst_38243 = (state_38260[(8)]);
var inst_38243__$1 = (state_38260[(2)]);
var inst_38244 = (inst_38243__$1 == null);
var state_38260__$1 = (function (){var statearr_38265 = state_38260;
(statearr_38265[(8)] = inst_38243__$1);

return statearr_38265;
})();
if(cljs.core.truth_(inst_38244)){
var statearr_38266_38282 = state_38260__$1;
(statearr_38266_38282[(1)] = (5));

} else {
var statearr_38267_38283 = state_38260__$1;
(statearr_38267_38283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (6))){
var inst_38247 = (state_38260[(9)]);
var inst_38240 = (state_38260[(7)]);
var inst_38243 = (state_38260[(8)]);
var inst_38247__$1 = f.call(null,inst_38240,inst_38243);
var inst_38248 = cljs.core.reduced_QMARK_.call(null,inst_38247__$1);
var state_38260__$1 = (function (){var statearr_38268 = state_38260;
(statearr_38268[(9)] = inst_38247__$1);

return statearr_38268;
})();
if(inst_38248){
var statearr_38269_38284 = state_38260__$1;
(statearr_38269_38284[(1)] = (8));

} else {
var statearr_38270_38285 = state_38260__$1;
(statearr_38270_38285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (3))){
var inst_38258 = (state_38260[(2)]);
var state_38260__$1 = state_38260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38260__$1,inst_38258);
} else {
if((state_val_38261 === (2))){
var state_38260__$1 = state_38260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38260__$1,(4),ch);
} else {
if((state_val_38261 === (9))){
var inst_38247 = (state_38260[(9)]);
var inst_38240 = inst_38247;
var state_38260__$1 = (function (){var statearr_38271 = state_38260;
(statearr_38271[(7)] = inst_38240);

return statearr_38271;
})();
var statearr_38272_38286 = state_38260__$1;
(statearr_38272_38286[(2)] = null);

(statearr_38272_38286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (5))){
var inst_38240 = (state_38260[(7)]);
var state_38260__$1 = state_38260;
var statearr_38273_38287 = state_38260__$1;
(statearr_38273_38287[(2)] = inst_38240);

(statearr_38273_38287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (10))){
var inst_38254 = (state_38260[(2)]);
var state_38260__$1 = state_38260;
var statearr_38274_38288 = state_38260__$1;
(statearr_38274_38288[(2)] = inst_38254);

(statearr_38274_38288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (8))){
var inst_38247 = (state_38260[(9)]);
var inst_38250 = cljs.core.deref.call(null,inst_38247);
var state_38260__$1 = state_38260;
var statearr_38275_38289 = state_38260__$1;
(statearr_38275_38289[(2)] = inst_38250);

(statearr_38275_38289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__37787__auto__))
;
return ((function (switch__37699__auto__,c__37787__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__37700__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37700__auto____0 = (function (){
var statearr_38276 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38276[(0)] = cljs$core$async$reduce_$_state_machine__37700__auto__);

(statearr_38276[(1)] = (1));

return statearr_38276;
});
var cljs$core$async$reduce_$_state_machine__37700__auto____1 = (function (state_38260){
while(true){
var ret_value__37701__auto__ = (function (){try{while(true){
var result__37702__auto__ = switch__37699__auto__.call(null,state_38260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37702__auto__;
}
break;
}
}catch (e38277){if((e38277 instanceof Object)){
var ex__37703__auto__ = e38277;
var statearr_38278_38290 = state_38260;
(statearr_38278_38290[(5)] = ex__37703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38291 = state_38260;
state_38260 = G__38291;
continue;
} else {
return ret_value__37701__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37700__auto__ = function(state_38260){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37700__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37700__auto____1.call(this,state_38260);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37700__auto____0;
cljs$core$async$reduce_$_state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37700__auto____1;
return cljs$core$async$reduce_$_state_machine__37700__auto__;
})()
;})(switch__37699__auto__,c__37787__auto__))
})();
var state__37789__auto__ = (function (){var statearr_38279 = f__37788__auto__.call(null);
(statearr_38279[(6)] = c__37787__auto__);

return statearr_38279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37789__auto__);
});})(c__37787__auto__))
);

return c__37787__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__38293 = arguments.length;
switch (G__38293) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37787__auto__){
return (function (){
var f__37788__auto__ = (function (){var switch__37699__auto__ = ((function (c__37787__auto__){
return (function (state_38318){
var state_val_38319 = (state_38318[(1)]);
if((state_val_38319 === (7))){
var inst_38300 = (state_38318[(2)]);
var state_38318__$1 = state_38318;
var statearr_38320_38341 = state_38318__$1;
(statearr_38320_38341[(2)] = inst_38300);

(statearr_38320_38341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38319 === (1))){
var inst_38294 = cljs.core.seq.call(null,coll);
var inst_38295 = inst_38294;
var state_38318__$1 = (function (){var statearr_38321 = state_38318;
(statearr_38321[(7)] = inst_38295);

return statearr_38321;
})();
var statearr_38322_38342 = state_38318__$1;
(statearr_38322_38342[(2)] = null);

(statearr_38322_38342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38319 === (4))){
var inst_38295 = (state_38318[(7)]);
var inst_38298 = cljs.core.first.call(null,inst_38295);
var state_38318__$1 = state_38318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38318__$1,(7),ch,inst_38298);
} else {
if((state_val_38319 === (13))){
var inst_38312 = (state_38318[(2)]);
var state_38318__$1 = state_38318;
var statearr_38323_38343 = state_38318__$1;
(statearr_38323_38343[(2)] = inst_38312);

(statearr_38323_38343[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38319 === (6))){
var inst_38303 = (state_38318[(2)]);
var state_38318__$1 = state_38318;
if(cljs.core.truth_(inst_38303)){
var statearr_38324_38344 = state_38318__$1;
(statearr_38324_38344[(1)] = (8));

} else {
var statearr_38325_38345 = state_38318__$1;
(statearr_38325_38345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38319 === (3))){
var inst_38316 = (state_38318[(2)]);
var state_38318__$1 = state_38318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38318__$1,inst_38316);
} else {
if((state_val_38319 === (12))){
var state_38318__$1 = state_38318;
var statearr_38326_38346 = state_38318__$1;
(statearr_38326_38346[(2)] = null);

(statearr_38326_38346[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38319 === (2))){
var inst_38295 = (state_38318[(7)]);
var state_38318__$1 = state_38318;
if(cljs.core.truth_(inst_38295)){
var statearr_38327_38347 = state_38318__$1;
(statearr_38327_38347[(1)] = (4));

} else {
var statearr_38328_38348 = state_38318__$1;
(statearr_38328_38348[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38319 === (11))){
var inst_38309 = cljs.core.async.close_BANG_.call(null,ch);
var state_38318__$1 = state_38318;
var statearr_38329_38349 = state_38318__$1;
(statearr_38329_38349[(2)] = inst_38309);

(statearr_38329_38349[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38319 === (9))){
var state_38318__$1 = state_38318;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38330_38350 = state_38318__$1;
(statearr_38330_38350[(1)] = (11));

} else {
var statearr_38331_38351 = state_38318__$1;
(statearr_38331_38351[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38319 === (5))){
var inst_38295 = (state_38318[(7)]);
var state_38318__$1 = state_38318;
var statearr_38332_38352 = state_38318__$1;
(statearr_38332_38352[(2)] = inst_38295);

(statearr_38332_38352[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38319 === (10))){
var inst_38314 = (state_38318[(2)]);
var state_38318__$1 = state_38318;
var statearr_38333_38353 = state_38318__$1;
(statearr_38333_38353[(2)] = inst_38314);

(statearr_38333_38353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38319 === (8))){
var inst_38295 = (state_38318[(7)]);
var inst_38305 = cljs.core.next.call(null,inst_38295);
var inst_38295__$1 = inst_38305;
var state_38318__$1 = (function (){var statearr_38334 = state_38318;
(statearr_38334[(7)] = inst_38295__$1);

return statearr_38334;
})();
var statearr_38335_38354 = state_38318__$1;
(statearr_38335_38354[(2)] = null);

(statearr_38335_38354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37787__auto__))
;
return ((function (switch__37699__auto__,c__37787__auto__){
return (function() {
var cljs$core$async$state_machine__37700__auto__ = null;
var cljs$core$async$state_machine__37700__auto____0 = (function (){
var statearr_38336 = [null,null,null,null,null,null,null,null];
(statearr_38336[(0)] = cljs$core$async$state_machine__37700__auto__);

(statearr_38336[(1)] = (1));

return statearr_38336;
});
var cljs$core$async$state_machine__37700__auto____1 = (function (state_38318){
while(true){
var ret_value__37701__auto__ = (function (){try{while(true){
var result__37702__auto__ = switch__37699__auto__.call(null,state_38318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37702__auto__;
}
break;
}
}catch (e38337){if((e38337 instanceof Object)){
var ex__37703__auto__ = e38337;
var statearr_38338_38355 = state_38318;
(statearr_38338_38355[(5)] = ex__37703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38356 = state_38318;
state_38318 = G__38356;
continue;
} else {
return ret_value__37701__auto__;
}
break;
}
});
cljs$core$async$state_machine__37700__auto__ = function(state_38318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37700__auto____1.call(this,state_38318);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37700__auto____0;
cljs$core$async$state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37700__auto____1;
return cljs$core$async$state_machine__37700__auto__;
})()
;})(switch__37699__auto__,c__37787__auto__))
})();
var state__37789__auto__ = (function (){var statearr_38339 = f__37788__auto__.call(null);
(statearr_38339[(6)] = c__37787__auto__);

return statearr_38339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37789__auto__);
});})(c__37787__auto__))
);

return c__37787__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__27878__auto__ = (((_ == null))?null:_);
var m__27879__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,_);
} else {
var m__27879__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27879__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m,ch);
} else {
var m__27879__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m);
} else {
var m__27879__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38357 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38357 = (function (ch,cs,meta38358){
this.ch = ch;
this.cs = cs;
this.meta38358 = meta38358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38359,meta38358__$1){
var self__ = this;
var _38359__$1 = this;
return (new cljs.core.async.t_cljs$core$async38357(self__.ch,self__.cs,meta38358__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38359){
var self__ = this;
var _38359__$1 = this;
return self__.meta38358;
});})(cs))
;

cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38357.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38358","meta38358",-2046943466,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38357.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38357";

cljs.core.async.t_cljs$core$async38357.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async38357");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async38357 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38357(ch__$1,cs__$1,meta38358){
return (new cljs.core.async.t_cljs$core$async38357(ch__$1,cs__$1,meta38358));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38357(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__37787__auto___38579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37787__auto___38579,cs,m,dchan,dctr,done){
return (function (){
var f__37788__auto__ = (function (){var switch__37699__auto__ = ((function (c__37787__auto___38579,cs,m,dchan,dctr,done){
return (function (state_38494){
var state_val_38495 = (state_38494[(1)]);
if((state_val_38495 === (7))){
var inst_38490 = (state_38494[(2)]);
var state_38494__$1 = state_38494;
var statearr_38496_38580 = state_38494__$1;
(statearr_38496_38580[(2)] = inst_38490);

(statearr_38496_38580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (20))){
var inst_38393 = (state_38494[(7)]);
var inst_38405 = cljs.core.first.call(null,inst_38393);
var inst_38406 = cljs.core.nth.call(null,inst_38405,(0),null);
var inst_38407 = cljs.core.nth.call(null,inst_38405,(1),null);
var state_38494__$1 = (function (){var statearr_38497 = state_38494;
(statearr_38497[(8)] = inst_38406);

return statearr_38497;
})();
if(cljs.core.truth_(inst_38407)){
var statearr_38498_38581 = state_38494__$1;
(statearr_38498_38581[(1)] = (22));

} else {
var statearr_38499_38582 = state_38494__$1;
(statearr_38499_38582[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (27))){
var inst_38437 = (state_38494[(9)]);
var inst_38362 = (state_38494[(10)]);
var inst_38435 = (state_38494[(11)]);
var inst_38442 = (state_38494[(12)]);
var inst_38442__$1 = cljs.core._nth.call(null,inst_38435,inst_38437);
var inst_38443 = cljs.core.async.put_BANG_.call(null,inst_38442__$1,inst_38362,done);
var state_38494__$1 = (function (){var statearr_38500 = state_38494;
(statearr_38500[(12)] = inst_38442__$1);

return statearr_38500;
})();
if(cljs.core.truth_(inst_38443)){
var statearr_38501_38583 = state_38494__$1;
(statearr_38501_38583[(1)] = (30));

} else {
var statearr_38502_38584 = state_38494__$1;
(statearr_38502_38584[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (1))){
var state_38494__$1 = state_38494;
var statearr_38503_38585 = state_38494__$1;
(statearr_38503_38585[(2)] = null);

(statearr_38503_38585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (24))){
var inst_38393 = (state_38494[(7)]);
var inst_38412 = (state_38494[(2)]);
var inst_38413 = cljs.core.next.call(null,inst_38393);
var inst_38371 = inst_38413;
var inst_38372 = null;
var inst_38373 = (0);
var inst_38374 = (0);
var state_38494__$1 = (function (){var statearr_38504 = state_38494;
(statearr_38504[(13)] = inst_38412);

(statearr_38504[(14)] = inst_38373);

(statearr_38504[(15)] = inst_38372);

(statearr_38504[(16)] = inst_38374);

(statearr_38504[(17)] = inst_38371);

return statearr_38504;
})();
var statearr_38505_38586 = state_38494__$1;
(statearr_38505_38586[(2)] = null);

(statearr_38505_38586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (39))){
var state_38494__$1 = state_38494;
var statearr_38509_38587 = state_38494__$1;
(statearr_38509_38587[(2)] = null);

(statearr_38509_38587[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (4))){
var inst_38362 = (state_38494[(10)]);
var inst_38362__$1 = (state_38494[(2)]);
var inst_38363 = (inst_38362__$1 == null);
var state_38494__$1 = (function (){var statearr_38510 = state_38494;
(statearr_38510[(10)] = inst_38362__$1);

return statearr_38510;
})();
if(cljs.core.truth_(inst_38363)){
var statearr_38511_38588 = state_38494__$1;
(statearr_38511_38588[(1)] = (5));

} else {
var statearr_38512_38589 = state_38494__$1;
(statearr_38512_38589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (15))){
var inst_38373 = (state_38494[(14)]);
var inst_38372 = (state_38494[(15)]);
var inst_38374 = (state_38494[(16)]);
var inst_38371 = (state_38494[(17)]);
var inst_38389 = (state_38494[(2)]);
var inst_38390 = (inst_38374 + (1));
var tmp38506 = inst_38373;
var tmp38507 = inst_38372;
var tmp38508 = inst_38371;
var inst_38371__$1 = tmp38508;
var inst_38372__$1 = tmp38507;
var inst_38373__$1 = tmp38506;
var inst_38374__$1 = inst_38390;
var state_38494__$1 = (function (){var statearr_38513 = state_38494;
(statearr_38513[(18)] = inst_38389);

(statearr_38513[(14)] = inst_38373__$1);

(statearr_38513[(15)] = inst_38372__$1);

(statearr_38513[(16)] = inst_38374__$1);

(statearr_38513[(17)] = inst_38371__$1);

return statearr_38513;
})();
var statearr_38514_38590 = state_38494__$1;
(statearr_38514_38590[(2)] = null);

(statearr_38514_38590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (21))){
var inst_38416 = (state_38494[(2)]);
var state_38494__$1 = state_38494;
var statearr_38518_38591 = state_38494__$1;
(statearr_38518_38591[(2)] = inst_38416);

(statearr_38518_38591[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (31))){
var inst_38442 = (state_38494[(12)]);
var inst_38446 = done.call(null,null);
var inst_38447 = cljs.core.async.untap_STAR_.call(null,m,inst_38442);
var state_38494__$1 = (function (){var statearr_38519 = state_38494;
(statearr_38519[(19)] = inst_38446);

return statearr_38519;
})();
var statearr_38520_38592 = state_38494__$1;
(statearr_38520_38592[(2)] = inst_38447);

(statearr_38520_38592[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (32))){
var inst_38437 = (state_38494[(9)]);
var inst_38435 = (state_38494[(11)]);
var inst_38434 = (state_38494[(20)]);
var inst_38436 = (state_38494[(21)]);
var inst_38449 = (state_38494[(2)]);
var inst_38450 = (inst_38437 + (1));
var tmp38515 = inst_38435;
var tmp38516 = inst_38434;
var tmp38517 = inst_38436;
var inst_38434__$1 = tmp38516;
var inst_38435__$1 = tmp38515;
var inst_38436__$1 = tmp38517;
var inst_38437__$1 = inst_38450;
var state_38494__$1 = (function (){var statearr_38521 = state_38494;
(statearr_38521[(9)] = inst_38437__$1);

(statearr_38521[(11)] = inst_38435__$1);

(statearr_38521[(20)] = inst_38434__$1);

(statearr_38521[(21)] = inst_38436__$1);

(statearr_38521[(22)] = inst_38449);

return statearr_38521;
})();
var statearr_38522_38593 = state_38494__$1;
(statearr_38522_38593[(2)] = null);

(statearr_38522_38593[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (40))){
var inst_38462 = (state_38494[(23)]);
var inst_38466 = done.call(null,null);
var inst_38467 = cljs.core.async.untap_STAR_.call(null,m,inst_38462);
var state_38494__$1 = (function (){var statearr_38523 = state_38494;
(statearr_38523[(24)] = inst_38466);

return statearr_38523;
})();
var statearr_38524_38594 = state_38494__$1;
(statearr_38524_38594[(2)] = inst_38467);

(statearr_38524_38594[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (33))){
var inst_38453 = (state_38494[(25)]);
var inst_38455 = cljs.core.chunked_seq_QMARK_.call(null,inst_38453);
var state_38494__$1 = state_38494;
if(inst_38455){
var statearr_38525_38595 = state_38494__$1;
(statearr_38525_38595[(1)] = (36));

} else {
var statearr_38526_38596 = state_38494__$1;
(statearr_38526_38596[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (13))){
var inst_38383 = (state_38494[(26)]);
var inst_38386 = cljs.core.async.close_BANG_.call(null,inst_38383);
var state_38494__$1 = state_38494;
var statearr_38527_38597 = state_38494__$1;
(statearr_38527_38597[(2)] = inst_38386);

(statearr_38527_38597[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (22))){
var inst_38406 = (state_38494[(8)]);
var inst_38409 = cljs.core.async.close_BANG_.call(null,inst_38406);
var state_38494__$1 = state_38494;
var statearr_38528_38598 = state_38494__$1;
(statearr_38528_38598[(2)] = inst_38409);

(statearr_38528_38598[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (36))){
var inst_38453 = (state_38494[(25)]);
var inst_38457 = cljs.core.chunk_first.call(null,inst_38453);
var inst_38458 = cljs.core.chunk_rest.call(null,inst_38453);
var inst_38459 = cljs.core.count.call(null,inst_38457);
var inst_38434 = inst_38458;
var inst_38435 = inst_38457;
var inst_38436 = inst_38459;
var inst_38437 = (0);
var state_38494__$1 = (function (){var statearr_38529 = state_38494;
(statearr_38529[(9)] = inst_38437);

(statearr_38529[(11)] = inst_38435);

(statearr_38529[(20)] = inst_38434);

(statearr_38529[(21)] = inst_38436);

return statearr_38529;
})();
var statearr_38530_38599 = state_38494__$1;
(statearr_38530_38599[(2)] = null);

(statearr_38530_38599[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (41))){
var inst_38453 = (state_38494[(25)]);
var inst_38469 = (state_38494[(2)]);
var inst_38470 = cljs.core.next.call(null,inst_38453);
var inst_38434 = inst_38470;
var inst_38435 = null;
var inst_38436 = (0);
var inst_38437 = (0);
var state_38494__$1 = (function (){var statearr_38531 = state_38494;
(statearr_38531[(27)] = inst_38469);

(statearr_38531[(9)] = inst_38437);

(statearr_38531[(11)] = inst_38435);

(statearr_38531[(20)] = inst_38434);

(statearr_38531[(21)] = inst_38436);

return statearr_38531;
})();
var statearr_38532_38600 = state_38494__$1;
(statearr_38532_38600[(2)] = null);

(statearr_38532_38600[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (43))){
var state_38494__$1 = state_38494;
var statearr_38533_38601 = state_38494__$1;
(statearr_38533_38601[(2)] = null);

(statearr_38533_38601[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (29))){
var inst_38478 = (state_38494[(2)]);
var state_38494__$1 = state_38494;
var statearr_38534_38602 = state_38494__$1;
(statearr_38534_38602[(2)] = inst_38478);

(statearr_38534_38602[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (44))){
var inst_38487 = (state_38494[(2)]);
var state_38494__$1 = (function (){var statearr_38535 = state_38494;
(statearr_38535[(28)] = inst_38487);

return statearr_38535;
})();
var statearr_38536_38603 = state_38494__$1;
(statearr_38536_38603[(2)] = null);

(statearr_38536_38603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (6))){
var inst_38426 = (state_38494[(29)]);
var inst_38425 = cljs.core.deref.call(null,cs);
var inst_38426__$1 = cljs.core.keys.call(null,inst_38425);
var inst_38427 = cljs.core.count.call(null,inst_38426__$1);
var inst_38428 = cljs.core.reset_BANG_.call(null,dctr,inst_38427);
var inst_38433 = cljs.core.seq.call(null,inst_38426__$1);
var inst_38434 = inst_38433;
var inst_38435 = null;
var inst_38436 = (0);
var inst_38437 = (0);
var state_38494__$1 = (function (){var statearr_38537 = state_38494;
(statearr_38537[(9)] = inst_38437);

(statearr_38537[(11)] = inst_38435);

(statearr_38537[(30)] = inst_38428);

(statearr_38537[(20)] = inst_38434);

(statearr_38537[(21)] = inst_38436);

(statearr_38537[(29)] = inst_38426__$1);

return statearr_38537;
})();
var statearr_38538_38604 = state_38494__$1;
(statearr_38538_38604[(2)] = null);

(statearr_38538_38604[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (28))){
var inst_38453 = (state_38494[(25)]);
var inst_38434 = (state_38494[(20)]);
var inst_38453__$1 = cljs.core.seq.call(null,inst_38434);
var state_38494__$1 = (function (){var statearr_38539 = state_38494;
(statearr_38539[(25)] = inst_38453__$1);

return statearr_38539;
})();
if(inst_38453__$1){
var statearr_38540_38605 = state_38494__$1;
(statearr_38540_38605[(1)] = (33));

} else {
var statearr_38541_38606 = state_38494__$1;
(statearr_38541_38606[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (25))){
var inst_38437 = (state_38494[(9)]);
var inst_38436 = (state_38494[(21)]);
var inst_38439 = (inst_38437 < inst_38436);
var inst_38440 = inst_38439;
var state_38494__$1 = state_38494;
if(cljs.core.truth_(inst_38440)){
var statearr_38542_38607 = state_38494__$1;
(statearr_38542_38607[(1)] = (27));

} else {
var statearr_38543_38608 = state_38494__$1;
(statearr_38543_38608[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (34))){
var state_38494__$1 = state_38494;
var statearr_38544_38609 = state_38494__$1;
(statearr_38544_38609[(2)] = null);

(statearr_38544_38609[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (17))){
var state_38494__$1 = state_38494;
var statearr_38545_38610 = state_38494__$1;
(statearr_38545_38610[(2)] = null);

(statearr_38545_38610[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (3))){
var inst_38492 = (state_38494[(2)]);
var state_38494__$1 = state_38494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38494__$1,inst_38492);
} else {
if((state_val_38495 === (12))){
var inst_38421 = (state_38494[(2)]);
var state_38494__$1 = state_38494;
var statearr_38546_38611 = state_38494__$1;
(statearr_38546_38611[(2)] = inst_38421);

(statearr_38546_38611[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (2))){
var state_38494__$1 = state_38494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38494__$1,(4),ch);
} else {
if((state_val_38495 === (23))){
var state_38494__$1 = state_38494;
var statearr_38547_38612 = state_38494__$1;
(statearr_38547_38612[(2)] = null);

(statearr_38547_38612[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (35))){
var inst_38476 = (state_38494[(2)]);
var state_38494__$1 = state_38494;
var statearr_38548_38613 = state_38494__$1;
(statearr_38548_38613[(2)] = inst_38476);

(statearr_38548_38613[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (19))){
var inst_38393 = (state_38494[(7)]);
var inst_38397 = cljs.core.chunk_first.call(null,inst_38393);
var inst_38398 = cljs.core.chunk_rest.call(null,inst_38393);
var inst_38399 = cljs.core.count.call(null,inst_38397);
var inst_38371 = inst_38398;
var inst_38372 = inst_38397;
var inst_38373 = inst_38399;
var inst_38374 = (0);
var state_38494__$1 = (function (){var statearr_38549 = state_38494;
(statearr_38549[(14)] = inst_38373);

(statearr_38549[(15)] = inst_38372);

(statearr_38549[(16)] = inst_38374);

(statearr_38549[(17)] = inst_38371);

return statearr_38549;
})();
var statearr_38550_38614 = state_38494__$1;
(statearr_38550_38614[(2)] = null);

(statearr_38550_38614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (11))){
var inst_38393 = (state_38494[(7)]);
var inst_38371 = (state_38494[(17)]);
var inst_38393__$1 = cljs.core.seq.call(null,inst_38371);
var state_38494__$1 = (function (){var statearr_38551 = state_38494;
(statearr_38551[(7)] = inst_38393__$1);

return statearr_38551;
})();
if(inst_38393__$1){
var statearr_38552_38615 = state_38494__$1;
(statearr_38552_38615[(1)] = (16));

} else {
var statearr_38553_38616 = state_38494__$1;
(statearr_38553_38616[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (9))){
var inst_38423 = (state_38494[(2)]);
var state_38494__$1 = state_38494;
var statearr_38554_38617 = state_38494__$1;
(statearr_38554_38617[(2)] = inst_38423);

(statearr_38554_38617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (5))){
var inst_38369 = cljs.core.deref.call(null,cs);
var inst_38370 = cljs.core.seq.call(null,inst_38369);
var inst_38371 = inst_38370;
var inst_38372 = null;
var inst_38373 = (0);
var inst_38374 = (0);
var state_38494__$1 = (function (){var statearr_38555 = state_38494;
(statearr_38555[(14)] = inst_38373);

(statearr_38555[(15)] = inst_38372);

(statearr_38555[(16)] = inst_38374);

(statearr_38555[(17)] = inst_38371);

return statearr_38555;
})();
var statearr_38556_38618 = state_38494__$1;
(statearr_38556_38618[(2)] = null);

(statearr_38556_38618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (14))){
var state_38494__$1 = state_38494;
var statearr_38557_38619 = state_38494__$1;
(statearr_38557_38619[(2)] = null);

(statearr_38557_38619[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (45))){
var inst_38484 = (state_38494[(2)]);
var state_38494__$1 = state_38494;
var statearr_38558_38620 = state_38494__$1;
(statearr_38558_38620[(2)] = inst_38484);

(statearr_38558_38620[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (26))){
var inst_38426 = (state_38494[(29)]);
var inst_38480 = (state_38494[(2)]);
var inst_38481 = cljs.core.seq.call(null,inst_38426);
var state_38494__$1 = (function (){var statearr_38559 = state_38494;
(statearr_38559[(31)] = inst_38480);

return statearr_38559;
})();
if(inst_38481){
var statearr_38560_38621 = state_38494__$1;
(statearr_38560_38621[(1)] = (42));

} else {
var statearr_38561_38622 = state_38494__$1;
(statearr_38561_38622[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (16))){
var inst_38393 = (state_38494[(7)]);
var inst_38395 = cljs.core.chunked_seq_QMARK_.call(null,inst_38393);
var state_38494__$1 = state_38494;
if(inst_38395){
var statearr_38562_38623 = state_38494__$1;
(statearr_38562_38623[(1)] = (19));

} else {
var statearr_38563_38624 = state_38494__$1;
(statearr_38563_38624[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (38))){
var inst_38473 = (state_38494[(2)]);
var state_38494__$1 = state_38494;
var statearr_38564_38625 = state_38494__$1;
(statearr_38564_38625[(2)] = inst_38473);

(statearr_38564_38625[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (30))){
var state_38494__$1 = state_38494;
var statearr_38565_38626 = state_38494__$1;
(statearr_38565_38626[(2)] = null);

(statearr_38565_38626[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (10))){
var inst_38372 = (state_38494[(15)]);
var inst_38374 = (state_38494[(16)]);
var inst_38382 = cljs.core._nth.call(null,inst_38372,inst_38374);
var inst_38383 = cljs.core.nth.call(null,inst_38382,(0),null);
var inst_38384 = cljs.core.nth.call(null,inst_38382,(1),null);
var state_38494__$1 = (function (){var statearr_38566 = state_38494;
(statearr_38566[(26)] = inst_38383);

return statearr_38566;
})();
if(cljs.core.truth_(inst_38384)){
var statearr_38567_38627 = state_38494__$1;
(statearr_38567_38627[(1)] = (13));

} else {
var statearr_38568_38628 = state_38494__$1;
(statearr_38568_38628[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (18))){
var inst_38419 = (state_38494[(2)]);
var state_38494__$1 = state_38494;
var statearr_38569_38629 = state_38494__$1;
(statearr_38569_38629[(2)] = inst_38419);

(statearr_38569_38629[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (42))){
var state_38494__$1 = state_38494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38494__$1,(45),dchan);
} else {
if((state_val_38495 === (37))){
var inst_38453 = (state_38494[(25)]);
var inst_38462 = (state_38494[(23)]);
var inst_38362 = (state_38494[(10)]);
var inst_38462__$1 = cljs.core.first.call(null,inst_38453);
var inst_38463 = cljs.core.async.put_BANG_.call(null,inst_38462__$1,inst_38362,done);
var state_38494__$1 = (function (){var statearr_38570 = state_38494;
(statearr_38570[(23)] = inst_38462__$1);

return statearr_38570;
})();
if(cljs.core.truth_(inst_38463)){
var statearr_38571_38630 = state_38494__$1;
(statearr_38571_38630[(1)] = (39));

} else {
var statearr_38572_38631 = state_38494__$1;
(statearr_38572_38631[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38495 === (8))){
var inst_38373 = (state_38494[(14)]);
var inst_38374 = (state_38494[(16)]);
var inst_38376 = (inst_38374 < inst_38373);
var inst_38377 = inst_38376;
var state_38494__$1 = state_38494;
if(cljs.core.truth_(inst_38377)){
var statearr_38573_38632 = state_38494__$1;
(statearr_38573_38632[(1)] = (10));

} else {
var statearr_38574_38633 = state_38494__$1;
(statearr_38574_38633[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37787__auto___38579,cs,m,dchan,dctr,done))
;
return ((function (switch__37699__auto__,c__37787__auto___38579,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37700__auto__ = null;
var cljs$core$async$mult_$_state_machine__37700__auto____0 = (function (){
var statearr_38575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38575[(0)] = cljs$core$async$mult_$_state_machine__37700__auto__);

(statearr_38575[(1)] = (1));

return statearr_38575;
});
var cljs$core$async$mult_$_state_machine__37700__auto____1 = (function (state_38494){
while(true){
var ret_value__37701__auto__ = (function (){try{while(true){
var result__37702__auto__ = switch__37699__auto__.call(null,state_38494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37702__auto__;
}
break;
}
}catch (e38576){if((e38576 instanceof Object)){
var ex__37703__auto__ = e38576;
var statearr_38577_38634 = state_38494;
(statearr_38577_38634[(5)] = ex__37703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38635 = state_38494;
state_38494 = G__38635;
continue;
} else {
return ret_value__37701__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37700__auto__ = function(state_38494){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37700__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37700__auto____1.call(this,state_38494);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37700__auto____0;
cljs$core$async$mult_$_state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37700__auto____1;
return cljs$core$async$mult_$_state_machine__37700__auto__;
})()
;})(switch__37699__auto__,c__37787__auto___38579,cs,m,dchan,dctr,done))
})();
var state__37789__auto__ = (function (){var statearr_38578 = f__37788__auto__.call(null);
(statearr_38578[(6)] = c__37787__auto___38579);

return statearr_38578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37789__auto__);
});})(c__37787__auto___38579,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__38637 = arguments.length;
switch (G__38637) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m,ch);
} else {
var m__27879__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m,ch);
} else {
var m__27879__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m);
} else {
var m__27879__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m,state_map);
} else {
var m__27879__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m,mode);
} else {
var m__27879__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___38649 = arguments.length;
var i__28365__auto___38650 = (0);
while(true){
if((i__28365__auto___38650 < len__28364__auto___38649)){
args__28371__auto__.push((arguments[i__28365__auto___38650]));

var G__38651 = (i__28365__auto___38650 + (1));
i__28365__auto___38650 = G__38651;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38643){
var map__38644 = p__38643;
var map__38644__$1 = ((((!((map__38644 == null)))?((((map__38644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38644.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38644):map__38644);
var opts = map__38644__$1;
var statearr_38646_38652 = state;
(statearr_38646_38652[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__38644,map__38644__$1,opts){
return (function (val){
var statearr_38647_38653 = state;
(statearr_38647_38653[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38644,map__38644__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_38648_38654 = state;
(statearr_38648_38654[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38639){
var G__38640 = cljs.core.first.call(null,seq38639);
var seq38639__$1 = cljs.core.next.call(null,seq38639);
var G__38641 = cljs.core.first.call(null,seq38639__$1);
var seq38639__$2 = cljs.core.next.call(null,seq38639__$1);
var G__38642 = cljs.core.first.call(null,seq38639__$2);
var seq38639__$3 = cljs.core.next.call(null,seq38639__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38640,G__38641,G__38642,seq38639__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38655 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38655 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta38656){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta38656 = meta38656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38657,meta38656__$1){
var self__ = this;
var _38657__$1 = this;
return (new cljs.core.async.t_cljs$core$async38655(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta38656__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38655.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38657){
var self__ = this;
var _38657__$1 = this;
return self__.meta38656;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38655.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38655.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38655.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38655.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38655.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38655.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38655.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38655.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38655.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta38656","meta38656",-2132327527,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38655.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38655.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38655";

cljs.core.async.t_cljs$core$async38655.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async38655");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async38655 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async38655(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta38656){
return (new cljs.core.async.t_cljs$core$async38655(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta38656));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async38655(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37787__auto___38819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37787__auto___38819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__37788__auto__ = (function (){var switch__37699__auto__ = ((function (c__37787__auto___38819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38759){
var state_val_38760 = (state_38759[(1)]);
if((state_val_38760 === (7))){
var inst_38674 = (state_38759[(2)]);
var state_38759__$1 = state_38759;
var statearr_38761_38820 = state_38759__$1;
(statearr_38761_38820[(2)] = inst_38674);

(statearr_38761_38820[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (20))){
var inst_38686 = (state_38759[(7)]);
var state_38759__$1 = state_38759;
var statearr_38762_38821 = state_38759__$1;
(statearr_38762_38821[(2)] = inst_38686);

(statearr_38762_38821[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (27))){
var state_38759__$1 = state_38759;
var statearr_38763_38822 = state_38759__$1;
(statearr_38763_38822[(2)] = null);

(statearr_38763_38822[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (1))){
var inst_38661 = (state_38759[(8)]);
var inst_38661__$1 = calc_state.call(null);
var inst_38663 = (inst_38661__$1 == null);
var inst_38664 = cljs.core.not.call(null,inst_38663);
var state_38759__$1 = (function (){var statearr_38764 = state_38759;
(statearr_38764[(8)] = inst_38661__$1);

return statearr_38764;
})();
if(inst_38664){
var statearr_38765_38823 = state_38759__$1;
(statearr_38765_38823[(1)] = (2));

} else {
var statearr_38766_38824 = state_38759__$1;
(statearr_38766_38824[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (24))){
var inst_38710 = (state_38759[(9)]);
var inst_38719 = (state_38759[(10)]);
var inst_38733 = (state_38759[(11)]);
var inst_38733__$1 = inst_38710.call(null,inst_38719);
var state_38759__$1 = (function (){var statearr_38767 = state_38759;
(statearr_38767[(11)] = inst_38733__$1);

return statearr_38767;
})();
if(cljs.core.truth_(inst_38733__$1)){
var statearr_38768_38825 = state_38759__$1;
(statearr_38768_38825[(1)] = (29));

} else {
var statearr_38769_38826 = state_38759__$1;
(statearr_38769_38826[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (4))){
var inst_38677 = (state_38759[(2)]);
var state_38759__$1 = state_38759;
if(cljs.core.truth_(inst_38677)){
var statearr_38770_38827 = state_38759__$1;
(statearr_38770_38827[(1)] = (8));

} else {
var statearr_38771_38828 = state_38759__$1;
(statearr_38771_38828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (15))){
var inst_38704 = (state_38759[(2)]);
var state_38759__$1 = state_38759;
if(cljs.core.truth_(inst_38704)){
var statearr_38772_38829 = state_38759__$1;
(statearr_38772_38829[(1)] = (19));

} else {
var statearr_38773_38830 = state_38759__$1;
(statearr_38773_38830[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (21))){
var inst_38709 = (state_38759[(12)]);
var inst_38709__$1 = (state_38759[(2)]);
var inst_38710 = cljs.core.get.call(null,inst_38709__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38711 = cljs.core.get.call(null,inst_38709__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38712 = cljs.core.get.call(null,inst_38709__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38759__$1 = (function (){var statearr_38774 = state_38759;
(statearr_38774[(9)] = inst_38710);

(statearr_38774[(12)] = inst_38709__$1);

(statearr_38774[(13)] = inst_38711);

return statearr_38774;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38759__$1,(22),inst_38712);
} else {
if((state_val_38760 === (31))){
var inst_38741 = (state_38759[(2)]);
var state_38759__$1 = state_38759;
if(cljs.core.truth_(inst_38741)){
var statearr_38775_38831 = state_38759__$1;
(statearr_38775_38831[(1)] = (32));

} else {
var statearr_38776_38832 = state_38759__$1;
(statearr_38776_38832[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (32))){
var inst_38718 = (state_38759[(14)]);
var state_38759__$1 = state_38759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38759__$1,(35),out,inst_38718);
} else {
if((state_val_38760 === (33))){
var inst_38709 = (state_38759[(12)]);
var inst_38686 = inst_38709;
var state_38759__$1 = (function (){var statearr_38777 = state_38759;
(statearr_38777[(7)] = inst_38686);

return statearr_38777;
})();
var statearr_38778_38833 = state_38759__$1;
(statearr_38778_38833[(2)] = null);

(statearr_38778_38833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (13))){
var inst_38686 = (state_38759[(7)]);
var inst_38693 = inst_38686.cljs$lang$protocol_mask$partition0$;
var inst_38694 = (inst_38693 & (64));
var inst_38695 = inst_38686.cljs$core$ISeq$;
var inst_38696 = (cljs.core.PROTOCOL_SENTINEL === inst_38695);
var inst_38697 = (inst_38694) || (inst_38696);
var state_38759__$1 = state_38759;
if(cljs.core.truth_(inst_38697)){
var statearr_38779_38834 = state_38759__$1;
(statearr_38779_38834[(1)] = (16));

} else {
var statearr_38780_38835 = state_38759__$1;
(statearr_38780_38835[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (22))){
var inst_38719 = (state_38759[(10)]);
var inst_38718 = (state_38759[(14)]);
var inst_38717 = (state_38759[(2)]);
var inst_38718__$1 = cljs.core.nth.call(null,inst_38717,(0),null);
var inst_38719__$1 = cljs.core.nth.call(null,inst_38717,(1),null);
var inst_38720 = (inst_38718__$1 == null);
var inst_38721 = cljs.core._EQ_.call(null,inst_38719__$1,change);
var inst_38722 = (inst_38720) || (inst_38721);
var state_38759__$1 = (function (){var statearr_38781 = state_38759;
(statearr_38781[(10)] = inst_38719__$1);

(statearr_38781[(14)] = inst_38718__$1);

return statearr_38781;
})();
if(cljs.core.truth_(inst_38722)){
var statearr_38782_38836 = state_38759__$1;
(statearr_38782_38836[(1)] = (23));

} else {
var statearr_38783_38837 = state_38759__$1;
(statearr_38783_38837[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (36))){
var inst_38709 = (state_38759[(12)]);
var inst_38686 = inst_38709;
var state_38759__$1 = (function (){var statearr_38784 = state_38759;
(statearr_38784[(7)] = inst_38686);

return statearr_38784;
})();
var statearr_38785_38838 = state_38759__$1;
(statearr_38785_38838[(2)] = null);

(statearr_38785_38838[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (29))){
var inst_38733 = (state_38759[(11)]);
var state_38759__$1 = state_38759;
var statearr_38786_38839 = state_38759__$1;
(statearr_38786_38839[(2)] = inst_38733);

(statearr_38786_38839[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (6))){
var state_38759__$1 = state_38759;
var statearr_38787_38840 = state_38759__$1;
(statearr_38787_38840[(2)] = false);

(statearr_38787_38840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (28))){
var inst_38729 = (state_38759[(2)]);
var inst_38730 = calc_state.call(null);
var inst_38686 = inst_38730;
var state_38759__$1 = (function (){var statearr_38788 = state_38759;
(statearr_38788[(15)] = inst_38729);

(statearr_38788[(7)] = inst_38686);

return statearr_38788;
})();
var statearr_38789_38841 = state_38759__$1;
(statearr_38789_38841[(2)] = null);

(statearr_38789_38841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (25))){
var inst_38755 = (state_38759[(2)]);
var state_38759__$1 = state_38759;
var statearr_38790_38842 = state_38759__$1;
(statearr_38790_38842[(2)] = inst_38755);

(statearr_38790_38842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (34))){
var inst_38753 = (state_38759[(2)]);
var state_38759__$1 = state_38759;
var statearr_38791_38843 = state_38759__$1;
(statearr_38791_38843[(2)] = inst_38753);

(statearr_38791_38843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (17))){
var state_38759__$1 = state_38759;
var statearr_38792_38844 = state_38759__$1;
(statearr_38792_38844[(2)] = false);

(statearr_38792_38844[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (3))){
var state_38759__$1 = state_38759;
var statearr_38793_38845 = state_38759__$1;
(statearr_38793_38845[(2)] = false);

(statearr_38793_38845[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (12))){
var inst_38757 = (state_38759[(2)]);
var state_38759__$1 = state_38759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38759__$1,inst_38757);
} else {
if((state_val_38760 === (2))){
var inst_38661 = (state_38759[(8)]);
var inst_38666 = inst_38661.cljs$lang$protocol_mask$partition0$;
var inst_38667 = (inst_38666 & (64));
var inst_38668 = inst_38661.cljs$core$ISeq$;
var inst_38669 = (cljs.core.PROTOCOL_SENTINEL === inst_38668);
var inst_38670 = (inst_38667) || (inst_38669);
var state_38759__$1 = state_38759;
if(cljs.core.truth_(inst_38670)){
var statearr_38794_38846 = state_38759__$1;
(statearr_38794_38846[(1)] = (5));

} else {
var statearr_38795_38847 = state_38759__$1;
(statearr_38795_38847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (23))){
var inst_38718 = (state_38759[(14)]);
var inst_38724 = (inst_38718 == null);
var state_38759__$1 = state_38759;
if(cljs.core.truth_(inst_38724)){
var statearr_38796_38848 = state_38759__$1;
(statearr_38796_38848[(1)] = (26));

} else {
var statearr_38797_38849 = state_38759__$1;
(statearr_38797_38849[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (35))){
var inst_38744 = (state_38759[(2)]);
var state_38759__$1 = state_38759;
if(cljs.core.truth_(inst_38744)){
var statearr_38798_38850 = state_38759__$1;
(statearr_38798_38850[(1)] = (36));

} else {
var statearr_38799_38851 = state_38759__$1;
(statearr_38799_38851[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (19))){
var inst_38686 = (state_38759[(7)]);
var inst_38706 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38686);
var state_38759__$1 = state_38759;
var statearr_38800_38852 = state_38759__$1;
(statearr_38800_38852[(2)] = inst_38706);

(statearr_38800_38852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (11))){
var inst_38686 = (state_38759[(7)]);
var inst_38690 = (inst_38686 == null);
var inst_38691 = cljs.core.not.call(null,inst_38690);
var state_38759__$1 = state_38759;
if(inst_38691){
var statearr_38801_38853 = state_38759__$1;
(statearr_38801_38853[(1)] = (13));

} else {
var statearr_38802_38854 = state_38759__$1;
(statearr_38802_38854[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (9))){
var inst_38661 = (state_38759[(8)]);
var state_38759__$1 = state_38759;
var statearr_38803_38855 = state_38759__$1;
(statearr_38803_38855[(2)] = inst_38661);

(statearr_38803_38855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (5))){
var state_38759__$1 = state_38759;
var statearr_38804_38856 = state_38759__$1;
(statearr_38804_38856[(2)] = true);

(statearr_38804_38856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (14))){
var state_38759__$1 = state_38759;
var statearr_38805_38857 = state_38759__$1;
(statearr_38805_38857[(2)] = false);

(statearr_38805_38857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (26))){
var inst_38719 = (state_38759[(10)]);
var inst_38726 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38719);
var state_38759__$1 = state_38759;
var statearr_38806_38858 = state_38759__$1;
(statearr_38806_38858[(2)] = inst_38726);

(statearr_38806_38858[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (16))){
var state_38759__$1 = state_38759;
var statearr_38807_38859 = state_38759__$1;
(statearr_38807_38859[(2)] = true);

(statearr_38807_38859[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (38))){
var inst_38749 = (state_38759[(2)]);
var state_38759__$1 = state_38759;
var statearr_38808_38860 = state_38759__$1;
(statearr_38808_38860[(2)] = inst_38749);

(statearr_38808_38860[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (30))){
var inst_38710 = (state_38759[(9)]);
var inst_38719 = (state_38759[(10)]);
var inst_38711 = (state_38759[(13)]);
var inst_38736 = cljs.core.empty_QMARK_.call(null,inst_38710);
var inst_38737 = inst_38711.call(null,inst_38719);
var inst_38738 = cljs.core.not.call(null,inst_38737);
var inst_38739 = (inst_38736) && (inst_38738);
var state_38759__$1 = state_38759;
var statearr_38809_38861 = state_38759__$1;
(statearr_38809_38861[(2)] = inst_38739);

(statearr_38809_38861[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (10))){
var inst_38661 = (state_38759[(8)]);
var inst_38682 = (state_38759[(2)]);
var inst_38683 = cljs.core.get.call(null,inst_38682,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38684 = cljs.core.get.call(null,inst_38682,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38685 = cljs.core.get.call(null,inst_38682,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38686 = inst_38661;
var state_38759__$1 = (function (){var statearr_38810 = state_38759;
(statearr_38810[(16)] = inst_38685);

(statearr_38810[(17)] = inst_38684);

(statearr_38810[(7)] = inst_38686);

(statearr_38810[(18)] = inst_38683);

return statearr_38810;
})();
var statearr_38811_38862 = state_38759__$1;
(statearr_38811_38862[(2)] = null);

(statearr_38811_38862[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (18))){
var inst_38701 = (state_38759[(2)]);
var state_38759__$1 = state_38759;
var statearr_38812_38863 = state_38759__$1;
(statearr_38812_38863[(2)] = inst_38701);

(statearr_38812_38863[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (37))){
var state_38759__$1 = state_38759;
var statearr_38813_38864 = state_38759__$1;
(statearr_38813_38864[(2)] = null);

(statearr_38813_38864[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (8))){
var inst_38661 = (state_38759[(8)]);
var inst_38679 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38661);
var state_38759__$1 = state_38759;
var statearr_38814_38865 = state_38759__$1;
(statearr_38814_38865[(2)] = inst_38679);

(statearr_38814_38865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37787__auto___38819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37699__auto__,c__37787__auto___38819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37700__auto__ = null;
var cljs$core$async$mix_$_state_machine__37700__auto____0 = (function (){
var statearr_38815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38815[(0)] = cljs$core$async$mix_$_state_machine__37700__auto__);

(statearr_38815[(1)] = (1));

return statearr_38815;
});
var cljs$core$async$mix_$_state_machine__37700__auto____1 = (function (state_38759){
while(true){
var ret_value__37701__auto__ = (function (){try{while(true){
var result__37702__auto__ = switch__37699__auto__.call(null,state_38759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37702__auto__;
}
break;
}
}catch (e38816){if((e38816 instanceof Object)){
var ex__37703__auto__ = e38816;
var statearr_38817_38866 = state_38759;
(statearr_38817_38866[(5)] = ex__37703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38867 = state_38759;
state_38759 = G__38867;
continue;
} else {
return ret_value__37701__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37700__auto__ = function(state_38759){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37700__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37700__auto____1.call(this,state_38759);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37700__auto____0;
cljs$core$async$mix_$_state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37700__auto____1;
return cljs$core$async$mix_$_state_machine__37700__auto__;
})()
;})(switch__37699__auto__,c__37787__auto___38819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__37789__auto__ = (function (){var statearr_38818 = f__37788__auto__.call(null);
(statearr_38818[(6)] = c__37787__auto___38819);

return statearr_38818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37789__auto__);
});})(c__37787__auto___38819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__27878__auto__ = (((p == null))?null:p);
var m__27879__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27879__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__27878__auto__ = (((p == null))?null:p);
var m__27879__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,p,v,ch);
} else {
var m__27879__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__38869 = arguments.length;
switch (G__38869) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27878__auto__ = (((p == null))?null:p);
var m__27879__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,p);
} else {
var m__27879__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__27878__auto__ = (((p == null))?null:p);
var m__27879__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,p,v);
} else {
var m__27879__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__38873 = arguments.length;
switch (G__38873) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__27195__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27195__auto__,mults){
return (function (p1__38871_SHARP_){
if(cljs.core.truth_(p1__38871_SHARP_.call(null,topic))){
return p1__38871_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38871_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27195__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async38874 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38874 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38875){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38875 = meta38875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38876,meta38875__$1){
var self__ = this;
var _38876__$1 = this;
return (new cljs.core.async.t_cljs$core$async38874(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38875__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38874.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38876){
var self__ = this;
var _38876__$1 = this;
return self__.meta38875;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38874.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38874.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38874.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38874.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38874.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38874.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38874.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38874.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38875","meta38875",-1734449453,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38874";

cljs.core.async.t_cljs$core$async38874.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async38874");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async38874 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async38874(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38875){
return (new cljs.core.async.t_cljs$core$async38874(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38875));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async38874(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37787__auto___38994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37787__auto___38994,mults,ensure_mult,p){
return (function (){
var f__37788__auto__ = (function (){var switch__37699__auto__ = ((function (c__37787__auto___38994,mults,ensure_mult,p){
return (function (state_38948){
var state_val_38949 = (state_38948[(1)]);
if((state_val_38949 === (7))){
var inst_38944 = (state_38948[(2)]);
var state_38948__$1 = state_38948;
var statearr_38950_38995 = state_38948__$1;
(statearr_38950_38995[(2)] = inst_38944);

(statearr_38950_38995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (20))){
var state_38948__$1 = state_38948;
var statearr_38951_38996 = state_38948__$1;
(statearr_38951_38996[(2)] = null);

(statearr_38951_38996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (1))){
var state_38948__$1 = state_38948;
var statearr_38952_38997 = state_38948__$1;
(statearr_38952_38997[(2)] = null);

(statearr_38952_38997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (24))){
var inst_38927 = (state_38948[(7)]);
var inst_38936 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38927);
var state_38948__$1 = state_38948;
var statearr_38953_38998 = state_38948__$1;
(statearr_38953_38998[(2)] = inst_38936);

(statearr_38953_38998[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (4))){
var inst_38879 = (state_38948[(8)]);
var inst_38879__$1 = (state_38948[(2)]);
var inst_38880 = (inst_38879__$1 == null);
var state_38948__$1 = (function (){var statearr_38954 = state_38948;
(statearr_38954[(8)] = inst_38879__$1);

return statearr_38954;
})();
if(cljs.core.truth_(inst_38880)){
var statearr_38955_38999 = state_38948__$1;
(statearr_38955_38999[(1)] = (5));

} else {
var statearr_38956_39000 = state_38948__$1;
(statearr_38956_39000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (15))){
var inst_38921 = (state_38948[(2)]);
var state_38948__$1 = state_38948;
var statearr_38957_39001 = state_38948__$1;
(statearr_38957_39001[(2)] = inst_38921);

(statearr_38957_39001[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (21))){
var inst_38941 = (state_38948[(2)]);
var state_38948__$1 = (function (){var statearr_38958 = state_38948;
(statearr_38958[(9)] = inst_38941);

return statearr_38958;
})();
var statearr_38959_39002 = state_38948__$1;
(statearr_38959_39002[(2)] = null);

(statearr_38959_39002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (13))){
var inst_38903 = (state_38948[(10)]);
var inst_38905 = cljs.core.chunked_seq_QMARK_.call(null,inst_38903);
var state_38948__$1 = state_38948;
if(inst_38905){
var statearr_38960_39003 = state_38948__$1;
(statearr_38960_39003[(1)] = (16));

} else {
var statearr_38961_39004 = state_38948__$1;
(statearr_38961_39004[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (22))){
var inst_38933 = (state_38948[(2)]);
var state_38948__$1 = state_38948;
if(cljs.core.truth_(inst_38933)){
var statearr_38962_39005 = state_38948__$1;
(statearr_38962_39005[(1)] = (23));

} else {
var statearr_38963_39006 = state_38948__$1;
(statearr_38963_39006[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (6))){
var inst_38879 = (state_38948[(8)]);
var inst_38929 = (state_38948[(11)]);
var inst_38927 = (state_38948[(7)]);
var inst_38927__$1 = topic_fn.call(null,inst_38879);
var inst_38928 = cljs.core.deref.call(null,mults);
var inst_38929__$1 = cljs.core.get.call(null,inst_38928,inst_38927__$1);
var state_38948__$1 = (function (){var statearr_38964 = state_38948;
(statearr_38964[(11)] = inst_38929__$1);

(statearr_38964[(7)] = inst_38927__$1);

return statearr_38964;
})();
if(cljs.core.truth_(inst_38929__$1)){
var statearr_38965_39007 = state_38948__$1;
(statearr_38965_39007[(1)] = (19));

} else {
var statearr_38966_39008 = state_38948__$1;
(statearr_38966_39008[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (25))){
var inst_38938 = (state_38948[(2)]);
var state_38948__$1 = state_38948;
var statearr_38967_39009 = state_38948__$1;
(statearr_38967_39009[(2)] = inst_38938);

(statearr_38967_39009[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (17))){
var inst_38903 = (state_38948[(10)]);
var inst_38912 = cljs.core.first.call(null,inst_38903);
var inst_38913 = cljs.core.async.muxch_STAR_.call(null,inst_38912);
var inst_38914 = cljs.core.async.close_BANG_.call(null,inst_38913);
var inst_38915 = cljs.core.next.call(null,inst_38903);
var inst_38889 = inst_38915;
var inst_38890 = null;
var inst_38891 = (0);
var inst_38892 = (0);
var state_38948__$1 = (function (){var statearr_38968 = state_38948;
(statearr_38968[(12)] = inst_38892);

(statearr_38968[(13)] = inst_38889);

(statearr_38968[(14)] = inst_38891);

(statearr_38968[(15)] = inst_38914);

(statearr_38968[(16)] = inst_38890);

return statearr_38968;
})();
var statearr_38969_39010 = state_38948__$1;
(statearr_38969_39010[(2)] = null);

(statearr_38969_39010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (3))){
var inst_38946 = (state_38948[(2)]);
var state_38948__$1 = state_38948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38948__$1,inst_38946);
} else {
if((state_val_38949 === (12))){
var inst_38923 = (state_38948[(2)]);
var state_38948__$1 = state_38948;
var statearr_38970_39011 = state_38948__$1;
(statearr_38970_39011[(2)] = inst_38923);

(statearr_38970_39011[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (2))){
var state_38948__$1 = state_38948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38948__$1,(4),ch);
} else {
if((state_val_38949 === (23))){
var state_38948__$1 = state_38948;
var statearr_38971_39012 = state_38948__$1;
(statearr_38971_39012[(2)] = null);

(statearr_38971_39012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (19))){
var inst_38879 = (state_38948[(8)]);
var inst_38929 = (state_38948[(11)]);
var inst_38931 = cljs.core.async.muxch_STAR_.call(null,inst_38929);
var state_38948__$1 = state_38948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38948__$1,(22),inst_38931,inst_38879);
} else {
if((state_val_38949 === (11))){
var inst_38889 = (state_38948[(13)]);
var inst_38903 = (state_38948[(10)]);
var inst_38903__$1 = cljs.core.seq.call(null,inst_38889);
var state_38948__$1 = (function (){var statearr_38972 = state_38948;
(statearr_38972[(10)] = inst_38903__$1);

return statearr_38972;
})();
if(inst_38903__$1){
var statearr_38973_39013 = state_38948__$1;
(statearr_38973_39013[(1)] = (13));

} else {
var statearr_38974_39014 = state_38948__$1;
(statearr_38974_39014[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (9))){
var inst_38925 = (state_38948[(2)]);
var state_38948__$1 = state_38948;
var statearr_38975_39015 = state_38948__$1;
(statearr_38975_39015[(2)] = inst_38925);

(statearr_38975_39015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (5))){
var inst_38886 = cljs.core.deref.call(null,mults);
var inst_38887 = cljs.core.vals.call(null,inst_38886);
var inst_38888 = cljs.core.seq.call(null,inst_38887);
var inst_38889 = inst_38888;
var inst_38890 = null;
var inst_38891 = (0);
var inst_38892 = (0);
var state_38948__$1 = (function (){var statearr_38976 = state_38948;
(statearr_38976[(12)] = inst_38892);

(statearr_38976[(13)] = inst_38889);

(statearr_38976[(14)] = inst_38891);

(statearr_38976[(16)] = inst_38890);

return statearr_38976;
})();
var statearr_38977_39016 = state_38948__$1;
(statearr_38977_39016[(2)] = null);

(statearr_38977_39016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (14))){
var state_38948__$1 = state_38948;
var statearr_38981_39017 = state_38948__$1;
(statearr_38981_39017[(2)] = null);

(statearr_38981_39017[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (16))){
var inst_38903 = (state_38948[(10)]);
var inst_38907 = cljs.core.chunk_first.call(null,inst_38903);
var inst_38908 = cljs.core.chunk_rest.call(null,inst_38903);
var inst_38909 = cljs.core.count.call(null,inst_38907);
var inst_38889 = inst_38908;
var inst_38890 = inst_38907;
var inst_38891 = inst_38909;
var inst_38892 = (0);
var state_38948__$1 = (function (){var statearr_38982 = state_38948;
(statearr_38982[(12)] = inst_38892);

(statearr_38982[(13)] = inst_38889);

(statearr_38982[(14)] = inst_38891);

(statearr_38982[(16)] = inst_38890);

return statearr_38982;
})();
var statearr_38983_39018 = state_38948__$1;
(statearr_38983_39018[(2)] = null);

(statearr_38983_39018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (10))){
var inst_38892 = (state_38948[(12)]);
var inst_38889 = (state_38948[(13)]);
var inst_38891 = (state_38948[(14)]);
var inst_38890 = (state_38948[(16)]);
var inst_38897 = cljs.core._nth.call(null,inst_38890,inst_38892);
var inst_38898 = cljs.core.async.muxch_STAR_.call(null,inst_38897);
var inst_38899 = cljs.core.async.close_BANG_.call(null,inst_38898);
var inst_38900 = (inst_38892 + (1));
var tmp38978 = inst_38889;
var tmp38979 = inst_38891;
var tmp38980 = inst_38890;
var inst_38889__$1 = tmp38978;
var inst_38890__$1 = tmp38980;
var inst_38891__$1 = tmp38979;
var inst_38892__$1 = inst_38900;
var state_38948__$1 = (function (){var statearr_38984 = state_38948;
(statearr_38984[(12)] = inst_38892__$1);

(statearr_38984[(13)] = inst_38889__$1);

(statearr_38984[(14)] = inst_38891__$1);

(statearr_38984[(17)] = inst_38899);

(statearr_38984[(16)] = inst_38890__$1);

return statearr_38984;
})();
var statearr_38985_39019 = state_38948__$1;
(statearr_38985_39019[(2)] = null);

(statearr_38985_39019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (18))){
var inst_38918 = (state_38948[(2)]);
var state_38948__$1 = state_38948;
var statearr_38986_39020 = state_38948__$1;
(statearr_38986_39020[(2)] = inst_38918);

(statearr_38986_39020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (8))){
var inst_38892 = (state_38948[(12)]);
var inst_38891 = (state_38948[(14)]);
var inst_38894 = (inst_38892 < inst_38891);
var inst_38895 = inst_38894;
var state_38948__$1 = state_38948;
if(cljs.core.truth_(inst_38895)){
var statearr_38987_39021 = state_38948__$1;
(statearr_38987_39021[(1)] = (10));

} else {
var statearr_38988_39022 = state_38948__$1;
(statearr_38988_39022[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37787__auto___38994,mults,ensure_mult,p))
;
return ((function (switch__37699__auto__,c__37787__auto___38994,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37700__auto__ = null;
var cljs$core$async$state_machine__37700__auto____0 = (function (){
var statearr_38989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38989[(0)] = cljs$core$async$state_machine__37700__auto__);

(statearr_38989[(1)] = (1));

return statearr_38989;
});
var cljs$core$async$state_machine__37700__auto____1 = (function (state_38948){
while(true){
var ret_value__37701__auto__ = (function (){try{while(true){
var result__37702__auto__ = switch__37699__auto__.call(null,state_38948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37702__auto__;
}
break;
}
}catch (e38990){if((e38990 instanceof Object)){
var ex__37703__auto__ = e38990;
var statearr_38991_39023 = state_38948;
(statearr_38991_39023[(5)] = ex__37703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39024 = state_38948;
state_38948 = G__39024;
continue;
} else {
return ret_value__37701__auto__;
}
break;
}
});
cljs$core$async$state_machine__37700__auto__ = function(state_38948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37700__auto____1.call(this,state_38948);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37700__auto____0;
cljs$core$async$state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37700__auto____1;
return cljs$core$async$state_machine__37700__auto__;
})()
;})(switch__37699__auto__,c__37787__auto___38994,mults,ensure_mult,p))
})();
var state__37789__auto__ = (function (){var statearr_38992 = f__37788__auto__.call(null);
(statearr_38992[(6)] = c__37787__auto___38994);

return statearr_38992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37789__auto__);
});})(c__37787__auto___38994,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__39026 = arguments.length;
switch (G__39026) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__39029 = arguments.length;
switch (G__39029) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__39032 = arguments.length;
switch (G__39032) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__37787__auto___39099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37787__auto___39099,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__37788__auto__ = (function (){var switch__37699__auto__ = ((function (c__37787__auto___39099,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39071){
var state_val_39072 = (state_39071[(1)]);
if((state_val_39072 === (7))){
var state_39071__$1 = state_39071;
var statearr_39073_39100 = state_39071__$1;
(statearr_39073_39100[(2)] = null);

(statearr_39073_39100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (1))){
var state_39071__$1 = state_39071;
var statearr_39074_39101 = state_39071__$1;
(statearr_39074_39101[(2)] = null);

(statearr_39074_39101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (4))){
var inst_39035 = (state_39071[(7)]);
var inst_39037 = (inst_39035 < cnt);
var state_39071__$1 = state_39071;
if(cljs.core.truth_(inst_39037)){
var statearr_39075_39102 = state_39071__$1;
(statearr_39075_39102[(1)] = (6));

} else {
var statearr_39076_39103 = state_39071__$1;
(statearr_39076_39103[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (15))){
var inst_39067 = (state_39071[(2)]);
var state_39071__$1 = state_39071;
var statearr_39077_39104 = state_39071__$1;
(statearr_39077_39104[(2)] = inst_39067);

(statearr_39077_39104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (13))){
var inst_39060 = cljs.core.async.close_BANG_.call(null,out);
var state_39071__$1 = state_39071;
var statearr_39078_39105 = state_39071__$1;
(statearr_39078_39105[(2)] = inst_39060);

(statearr_39078_39105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (6))){
var state_39071__$1 = state_39071;
var statearr_39079_39106 = state_39071__$1;
(statearr_39079_39106[(2)] = null);

(statearr_39079_39106[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (3))){
var inst_39069 = (state_39071[(2)]);
var state_39071__$1 = state_39071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39071__$1,inst_39069);
} else {
if((state_val_39072 === (12))){
var inst_39057 = (state_39071[(8)]);
var inst_39057__$1 = (state_39071[(2)]);
var inst_39058 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39057__$1);
var state_39071__$1 = (function (){var statearr_39080 = state_39071;
(statearr_39080[(8)] = inst_39057__$1);

return statearr_39080;
})();
if(cljs.core.truth_(inst_39058)){
var statearr_39081_39107 = state_39071__$1;
(statearr_39081_39107[(1)] = (13));

} else {
var statearr_39082_39108 = state_39071__$1;
(statearr_39082_39108[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (2))){
var inst_39034 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39035 = (0);
var state_39071__$1 = (function (){var statearr_39083 = state_39071;
(statearr_39083[(9)] = inst_39034);

(statearr_39083[(7)] = inst_39035);

return statearr_39083;
})();
var statearr_39084_39109 = state_39071__$1;
(statearr_39084_39109[(2)] = null);

(statearr_39084_39109[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (11))){
var inst_39035 = (state_39071[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39071,(10),Object,null,(9));
var inst_39044 = chs__$1.call(null,inst_39035);
var inst_39045 = done.call(null,inst_39035);
var inst_39046 = cljs.core.async.take_BANG_.call(null,inst_39044,inst_39045);
var state_39071__$1 = state_39071;
var statearr_39085_39110 = state_39071__$1;
(statearr_39085_39110[(2)] = inst_39046);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39071__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (9))){
var inst_39035 = (state_39071[(7)]);
var inst_39048 = (state_39071[(2)]);
var inst_39049 = (inst_39035 + (1));
var inst_39035__$1 = inst_39049;
var state_39071__$1 = (function (){var statearr_39086 = state_39071;
(statearr_39086[(7)] = inst_39035__$1);

(statearr_39086[(10)] = inst_39048);

return statearr_39086;
})();
var statearr_39087_39111 = state_39071__$1;
(statearr_39087_39111[(2)] = null);

(statearr_39087_39111[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (5))){
var inst_39055 = (state_39071[(2)]);
var state_39071__$1 = (function (){var statearr_39088 = state_39071;
(statearr_39088[(11)] = inst_39055);

return statearr_39088;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39071__$1,(12),dchan);
} else {
if((state_val_39072 === (14))){
var inst_39057 = (state_39071[(8)]);
var inst_39062 = cljs.core.apply.call(null,f,inst_39057);
var state_39071__$1 = state_39071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39071__$1,(16),out,inst_39062);
} else {
if((state_val_39072 === (16))){
var inst_39064 = (state_39071[(2)]);
var state_39071__$1 = (function (){var statearr_39089 = state_39071;
(statearr_39089[(12)] = inst_39064);

return statearr_39089;
})();
var statearr_39090_39112 = state_39071__$1;
(statearr_39090_39112[(2)] = null);

(statearr_39090_39112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (10))){
var inst_39039 = (state_39071[(2)]);
var inst_39040 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39071__$1 = (function (){var statearr_39091 = state_39071;
(statearr_39091[(13)] = inst_39039);

return statearr_39091;
})();
var statearr_39092_39113 = state_39071__$1;
(statearr_39092_39113[(2)] = inst_39040);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39071__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39072 === (8))){
var inst_39053 = (state_39071[(2)]);
var state_39071__$1 = state_39071;
var statearr_39093_39114 = state_39071__$1;
(statearr_39093_39114[(2)] = inst_39053);

(statearr_39093_39114[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37787__auto___39099,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37699__auto__,c__37787__auto___39099,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37700__auto__ = null;
var cljs$core$async$state_machine__37700__auto____0 = (function (){
var statearr_39094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39094[(0)] = cljs$core$async$state_machine__37700__auto__);

(statearr_39094[(1)] = (1));

return statearr_39094;
});
var cljs$core$async$state_machine__37700__auto____1 = (function (state_39071){
while(true){
var ret_value__37701__auto__ = (function (){try{while(true){
var result__37702__auto__ = switch__37699__auto__.call(null,state_39071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37702__auto__;
}
break;
}
}catch (e39095){if((e39095 instanceof Object)){
var ex__37703__auto__ = e39095;
var statearr_39096_39115 = state_39071;
(statearr_39096_39115[(5)] = ex__37703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39116 = state_39071;
state_39071 = G__39116;
continue;
} else {
return ret_value__37701__auto__;
}
break;
}
});
cljs$core$async$state_machine__37700__auto__ = function(state_39071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37700__auto____1.call(this,state_39071);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37700__auto____0;
cljs$core$async$state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37700__auto____1;
return cljs$core$async$state_machine__37700__auto__;
})()
;})(switch__37699__auto__,c__37787__auto___39099,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__37789__auto__ = (function (){var statearr_39097 = f__37788__auto__.call(null);
(statearr_39097[(6)] = c__37787__auto___39099);

return statearr_39097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37789__auto__);
});})(c__37787__auto___39099,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__39119 = arguments.length;
switch (G__39119) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37787__auto___39173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37787__auto___39173,out){
return (function (){
var f__37788__auto__ = (function (){var switch__37699__auto__ = ((function (c__37787__auto___39173,out){
return (function (state_39151){
var state_val_39152 = (state_39151[(1)]);
if((state_val_39152 === (7))){
var inst_39130 = (state_39151[(7)]);
var inst_39131 = (state_39151[(8)]);
var inst_39130__$1 = (state_39151[(2)]);
var inst_39131__$1 = cljs.core.nth.call(null,inst_39130__$1,(0),null);
var inst_39132 = cljs.core.nth.call(null,inst_39130__$1,(1),null);
var inst_39133 = (inst_39131__$1 == null);
var state_39151__$1 = (function (){var statearr_39153 = state_39151;
(statearr_39153[(7)] = inst_39130__$1);

(statearr_39153[(8)] = inst_39131__$1);

(statearr_39153[(9)] = inst_39132);

return statearr_39153;
})();
if(cljs.core.truth_(inst_39133)){
var statearr_39154_39174 = state_39151__$1;
(statearr_39154_39174[(1)] = (8));

} else {
var statearr_39155_39175 = state_39151__$1;
(statearr_39155_39175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39152 === (1))){
var inst_39120 = cljs.core.vec.call(null,chs);
var inst_39121 = inst_39120;
var state_39151__$1 = (function (){var statearr_39156 = state_39151;
(statearr_39156[(10)] = inst_39121);

return statearr_39156;
})();
var statearr_39157_39176 = state_39151__$1;
(statearr_39157_39176[(2)] = null);

(statearr_39157_39176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39152 === (4))){
var inst_39121 = (state_39151[(10)]);
var state_39151__$1 = state_39151;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39151__$1,(7),inst_39121);
} else {
if((state_val_39152 === (6))){
var inst_39147 = (state_39151[(2)]);
var state_39151__$1 = state_39151;
var statearr_39158_39177 = state_39151__$1;
(statearr_39158_39177[(2)] = inst_39147);

(statearr_39158_39177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39152 === (3))){
var inst_39149 = (state_39151[(2)]);
var state_39151__$1 = state_39151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39151__$1,inst_39149);
} else {
if((state_val_39152 === (2))){
var inst_39121 = (state_39151[(10)]);
var inst_39123 = cljs.core.count.call(null,inst_39121);
var inst_39124 = (inst_39123 > (0));
var state_39151__$1 = state_39151;
if(cljs.core.truth_(inst_39124)){
var statearr_39160_39178 = state_39151__$1;
(statearr_39160_39178[(1)] = (4));

} else {
var statearr_39161_39179 = state_39151__$1;
(statearr_39161_39179[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39152 === (11))){
var inst_39121 = (state_39151[(10)]);
var inst_39140 = (state_39151[(2)]);
var tmp39159 = inst_39121;
var inst_39121__$1 = tmp39159;
var state_39151__$1 = (function (){var statearr_39162 = state_39151;
(statearr_39162[(11)] = inst_39140);

(statearr_39162[(10)] = inst_39121__$1);

return statearr_39162;
})();
var statearr_39163_39180 = state_39151__$1;
(statearr_39163_39180[(2)] = null);

(statearr_39163_39180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39152 === (9))){
var inst_39131 = (state_39151[(8)]);
var state_39151__$1 = state_39151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39151__$1,(11),out,inst_39131);
} else {
if((state_val_39152 === (5))){
var inst_39145 = cljs.core.async.close_BANG_.call(null,out);
var state_39151__$1 = state_39151;
var statearr_39164_39181 = state_39151__$1;
(statearr_39164_39181[(2)] = inst_39145);

(statearr_39164_39181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39152 === (10))){
var inst_39143 = (state_39151[(2)]);
var state_39151__$1 = state_39151;
var statearr_39165_39182 = state_39151__$1;
(statearr_39165_39182[(2)] = inst_39143);

(statearr_39165_39182[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39152 === (8))){
var inst_39130 = (state_39151[(7)]);
var inst_39131 = (state_39151[(8)]);
var inst_39132 = (state_39151[(9)]);
var inst_39121 = (state_39151[(10)]);
var inst_39135 = (function (){var cs = inst_39121;
var vec__39126 = inst_39130;
var v = inst_39131;
var c = inst_39132;
return ((function (cs,vec__39126,v,c,inst_39130,inst_39131,inst_39132,inst_39121,state_val_39152,c__37787__auto___39173,out){
return (function (p1__39117_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39117_SHARP_);
});
;})(cs,vec__39126,v,c,inst_39130,inst_39131,inst_39132,inst_39121,state_val_39152,c__37787__auto___39173,out))
})();
var inst_39136 = cljs.core.filterv.call(null,inst_39135,inst_39121);
var inst_39121__$1 = inst_39136;
var state_39151__$1 = (function (){var statearr_39166 = state_39151;
(statearr_39166[(10)] = inst_39121__$1);

return statearr_39166;
})();
var statearr_39167_39183 = state_39151__$1;
(statearr_39167_39183[(2)] = null);

(statearr_39167_39183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37787__auto___39173,out))
;
return ((function (switch__37699__auto__,c__37787__auto___39173,out){
return (function() {
var cljs$core$async$state_machine__37700__auto__ = null;
var cljs$core$async$state_machine__37700__auto____0 = (function (){
var statearr_39168 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39168[(0)] = cljs$core$async$state_machine__37700__auto__);

(statearr_39168[(1)] = (1));

return statearr_39168;
});
var cljs$core$async$state_machine__37700__auto____1 = (function (state_39151){
while(true){
var ret_value__37701__auto__ = (function (){try{while(true){
var result__37702__auto__ = switch__37699__auto__.call(null,state_39151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37702__auto__;
}
break;
}
}catch (e39169){if((e39169 instanceof Object)){
var ex__37703__auto__ = e39169;
var statearr_39170_39184 = state_39151;
(statearr_39170_39184[(5)] = ex__37703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39185 = state_39151;
state_39151 = G__39185;
continue;
} else {
return ret_value__37701__auto__;
}
break;
}
});
cljs$core$async$state_machine__37700__auto__ = function(state_39151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37700__auto____1.call(this,state_39151);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37700__auto____0;
cljs$core$async$state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37700__auto____1;
return cljs$core$async$state_machine__37700__auto__;
})()
;})(switch__37699__auto__,c__37787__auto___39173,out))
})();
var state__37789__auto__ = (function (){var statearr_39171 = f__37788__auto__.call(null);
(statearr_39171[(6)] = c__37787__auto___39173);

return statearr_39171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37789__auto__);
});})(c__37787__auto___39173,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__39187 = arguments.length;
switch (G__39187) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37787__auto___39232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37787__auto___39232,out){
return (function (){
var f__37788__auto__ = (function (){var switch__37699__auto__ = ((function (c__37787__auto___39232,out){
return (function (state_39211){
var state_val_39212 = (state_39211[(1)]);
if((state_val_39212 === (7))){
var inst_39193 = (state_39211[(7)]);
var inst_39193__$1 = (state_39211[(2)]);
var inst_39194 = (inst_39193__$1 == null);
var inst_39195 = cljs.core.not.call(null,inst_39194);
var state_39211__$1 = (function (){var statearr_39213 = state_39211;
(statearr_39213[(7)] = inst_39193__$1);

return statearr_39213;
})();
if(inst_39195){
var statearr_39214_39233 = state_39211__$1;
(statearr_39214_39233[(1)] = (8));

} else {
var statearr_39215_39234 = state_39211__$1;
(statearr_39215_39234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39212 === (1))){
var inst_39188 = (0);
var state_39211__$1 = (function (){var statearr_39216 = state_39211;
(statearr_39216[(8)] = inst_39188);

return statearr_39216;
})();
var statearr_39217_39235 = state_39211__$1;
(statearr_39217_39235[(2)] = null);

(statearr_39217_39235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39212 === (4))){
var state_39211__$1 = state_39211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39211__$1,(7),ch);
} else {
if((state_val_39212 === (6))){
var inst_39206 = (state_39211[(2)]);
var state_39211__$1 = state_39211;
var statearr_39218_39236 = state_39211__$1;
(statearr_39218_39236[(2)] = inst_39206);

(statearr_39218_39236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39212 === (3))){
var inst_39208 = (state_39211[(2)]);
var inst_39209 = cljs.core.async.close_BANG_.call(null,out);
var state_39211__$1 = (function (){var statearr_39219 = state_39211;
(statearr_39219[(9)] = inst_39208);

return statearr_39219;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39211__$1,inst_39209);
} else {
if((state_val_39212 === (2))){
var inst_39188 = (state_39211[(8)]);
var inst_39190 = (inst_39188 < n);
var state_39211__$1 = state_39211;
if(cljs.core.truth_(inst_39190)){
var statearr_39220_39237 = state_39211__$1;
(statearr_39220_39237[(1)] = (4));

} else {
var statearr_39221_39238 = state_39211__$1;
(statearr_39221_39238[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39212 === (11))){
var inst_39188 = (state_39211[(8)]);
var inst_39198 = (state_39211[(2)]);
var inst_39199 = (inst_39188 + (1));
var inst_39188__$1 = inst_39199;
var state_39211__$1 = (function (){var statearr_39222 = state_39211;
(statearr_39222[(10)] = inst_39198);

(statearr_39222[(8)] = inst_39188__$1);

return statearr_39222;
})();
var statearr_39223_39239 = state_39211__$1;
(statearr_39223_39239[(2)] = null);

(statearr_39223_39239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39212 === (9))){
var state_39211__$1 = state_39211;
var statearr_39224_39240 = state_39211__$1;
(statearr_39224_39240[(2)] = null);

(statearr_39224_39240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39212 === (5))){
var state_39211__$1 = state_39211;
var statearr_39225_39241 = state_39211__$1;
(statearr_39225_39241[(2)] = null);

(statearr_39225_39241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39212 === (10))){
var inst_39203 = (state_39211[(2)]);
var state_39211__$1 = state_39211;
var statearr_39226_39242 = state_39211__$1;
(statearr_39226_39242[(2)] = inst_39203);

(statearr_39226_39242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39212 === (8))){
var inst_39193 = (state_39211[(7)]);
var state_39211__$1 = state_39211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39211__$1,(11),out,inst_39193);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37787__auto___39232,out))
;
return ((function (switch__37699__auto__,c__37787__auto___39232,out){
return (function() {
var cljs$core$async$state_machine__37700__auto__ = null;
var cljs$core$async$state_machine__37700__auto____0 = (function (){
var statearr_39227 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39227[(0)] = cljs$core$async$state_machine__37700__auto__);

(statearr_39227[(1)] = (1));

return statearr_39227;
});
var cljs$core$async$state_machine__37700__auto____1 = (function (state_39211){
while(true){
var ret_value__37701__auto__ = (function (){try{while(true){
var result__37702__auto__ = switch__37699__auto__.call(null,state_39211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37702__auto__;
}
break;
}
}catch (e39228){if((e39228 instanceof Object)){
var ex__37703__auto__ = e39228;
var statearr_39229_39243 = state_39211;
(statearr_39229_39243[(5)] = ex__37703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39244 = state_39211;
state_39211 = G__39244;
continue;
} else {
return ret_value__37701__auto__;
}
break;
}
});
cljs$core$async$state_machine__37700__auto__ = function(state_39211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37700__auto____1.call(this,state_39211);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37700__auto____0;
cljs$core$async$state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37700__auto____1;
return cljs$core$async$state_machine__37700__auto__;
})()
;})(switch__37699__auto__,c__37787__auto___39232,out))
})();
var state__37789__auto__ = (function (){var statearr_39230 = f__37788__auto__.call(null);
(statearr_39230[(6)] = c__37787__auto___39232);

return statearr_39230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37789__auto__);
});})(c__37787__auto___39232,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39246 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39246 = (function (f,ch,meta39247){
this.f = f;
this.ch = ch;
this.meta39247 = meta39247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39248,meta39247__$1){
var self__ = this;
var _39248__$1 = this;
return (new cljs.core.async.t_cljs$core$async39246(self__.f,self__.ch,meta39247__$1));
});

cljs.core.async.t_cljs$core$async39246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39248){
var self__ = this;
var _39248__$1 = this;
return self__.meta39247;
});

cljs.core.async.t_cljs$core$async39246.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39246.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39246.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39246.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39246.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async39249 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39249 = (function (f,ch,meta39247,_,fn1,meta39250){
this.f = f;
this.ch = ch;
this.meta39247 = meta39247;
this._ = _;
this.fn1 = fn1;
this.meta39250 = meta39250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39251,meta39250__$1){
var self__ = this;
var _39251__$1 = this;
return (new cljs.core.async.t_cljs$core$async39249(self__.f,self__.ch,self__.meta39247,self__._,self__.fn1,meta39250__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39249.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39251){
var self__ = this;
var _39251__$1 = this;
return self__.meta39250;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39249.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39249.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39249.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39249.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39245_SHARP_){
return f1.call(null,(((p1__39245_SHARP_ == null))?null:self__.f.call(null,p1__39245_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39249.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39247","meta39247",809295399,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39246","cljs.core.async/t_cljs$core$async39246",1141963346,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39250","meta39250",-1390480469,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39249.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39249";

cljs.core.async.t_cljs$core$async39249.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39249");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async39249 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39249(f__$1,ch__$1,meta39247__$1,___$2,fn1__$1,meta39250){
return (new cljs.core.async.t_cljs$core$async39249(f__$1,ch__$1,meta39247__$1,___$2,fn1__$1,meta39250));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39249(self__.f,self__.ch,self__.meta39247,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27183__auto__ = ret;
if(cljs.core.truth_(and__27183__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27183__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async39246.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39246.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39246.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39247","meta39247",809295399,null)], null);
});

cljs.core.async.t_cljs$core$async39246.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39246";

cljs.core.async.t_cljs$core$async39246.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39246");
});

cljs.core.async.__GT_t_cljs$core$async39246 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39246(f__$1,ch__$1,meta39247){
return (new cljs.core.async.t_cljs$core$async39246(f__$1,ch__$1,meta39247));
});

}

return (new cljs.core.async.t_cljs$core$async39246(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39252 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39252 = (function (f,ch,meta39253){
this.f = f;
this.ch = ch;
this.meta39253 = meta39253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39254,meta39253__$1){
var self__ = this;
var _39254__$1 = this;
return (new cljs.core.async.t_cljs$core$async39252(self__.f,self__.ch,meta39253__$1));
});

cljs.core.async.t_cljs$core$async39252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39254){
var self__ = this;
var _39254__$1 = this;
return self__.meta39253;
});

cljs.core.async.t_cljs$core$async39252.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39252.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39252.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39252.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39252.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39252.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async39252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39253","meta39253",1068997218,null)], null);
});

cljs.core.async.t_cljs$core$async39252.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39252";

cljs.core.async.t_cljs$core$async39252.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39252");
});

cljs.core.async.__GT_t_cljs$core$async39252 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39252(f__$1,ch__$1,meta39253){
return (new cljs.core.async.t_cljs$core$async39252(f__$1,ch__$1,meta39253));
});

}

return (new cljs.core.async.t_cljs$core$async39252(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async39255 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39255 = (function (p,ch,meta39256){
this.p = p;
this.ch = ch;
this.meta39256 = meta39256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39257,meta39256__$1){
var self__ = this;
var _39257__$1 = this;
return (new cljs.core.async.t_cljs$core$async39255(self__.p,self__.ch,meta39256__$1));
});

cljs.core.async.t_cljs$core$async39255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39257){
var self__ = this;
var _39257__$1 = this;
return self__.meta39256;
});

cljs.core.async.t_cljs$core$async39255.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39255.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39255.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39255.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39255.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39255.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39255.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39256","meta39256",-722877893,null)], null);
});

cljs.core.async.t_cljs$core$async39255.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39255";

cljs.core.async.t_cljs$core$async39255.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39255");
});

cljs.core.async.__GT_t_cljs$core$async39255 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39255(p__$1,ch__$1,meta39256){
return (new cljs.core.async.t_cljs$core$async39255(p__$1,ch__$1,meta39256));
});

}

return (new cljs.core.async.t_cljs$core$async39255(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__39259 = arguments.length;
switch (G__39259) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37787__auto___39299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37787__auto___39299,out){
return (function (){
var f__37788__auto__ = (function (){var switch__37699__auto__ = ((function (c__37787__auto___39299,out){
return (function (state_39280){
var state_val_39281 = (state_39280[(1)]);
if((state_val_39281 === (7))){
var inst_39276 = (state_39280[(2)]);
var state_39280__$1 = state_39280;
var statearr_39282_39300 = state_39280__$1;
(statearr_39282_39300[(2)] = inst_39276);

(statearr_39282_39300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (1))){
var state_39280__$1 = state_39280;
var statearr_39283_39301 = state_39280__$1;
(statearr_39283_39301[(2)] = null);

(statearr_39283_39301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (4))){
var inst_39262 = (state_39280[(7)]);
var inst_39262__$1 = (state_39280[(2)]);
var inst_39263 = (inst_39262__$1 == null);
var state_39280__$1 = (function (){var statearr_39284 = state_39280;
(statearr_39284[(7)] = inst_39262__$1);

return statearr_39284;
})();
if(cljs.core.truth_(inst_39263)){
var statearr_39285_39302 = state_39280__$1;
(statearr_39285_39302[(1)] = (5));

} else {
var statearr_39286_39303 = state_39280__$1;
(statearr_39286_39303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (6))){
var inst_39262 = (state_39280[(7)]);
var inst_39267 = p.call(null,inst_39262);
var state_39280__$1 = state_39280;
if(cljs.core.truth_(inst_39267)){
var statearr_39287_39304 = state_39280__$1;
(statearr_39287_39304[(1)] = (8));

} else {
var statearr_39288_39305 = state_39280__$1;
(statearr_39288_39305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (3))){
var inst_39278 = (state_39280[(2)]);
var state_39280__$1 = state_39280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39280__$1,inst_39278);
} else {
if((state_val_39281 === (2))){
var state_39280__$1 = state_39280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39280__$1,(4),ch);
} else {
if((state_val_39281 === (11))){
var inst_39270 = (state_39280[(2)]);
var state_39280__$1 = state_39280;
var statearr_39289_39306 = state_39280__$1;
(statearr_39289_39306[(2)] = inst_39270);

(statearr_39289_39306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (9))){
var state_39280__$1 = state_39280;
var statearr_39290_39307 = state_39280__$1;
(statearr_39290_39307[(2)] = null);

(statearr_39290_39307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (5))){
var inst_39265 = cljs.core.async.close_BANG_.call(null,out);
var state_39280__$1 = state_39280;
var statearr_39291_39308 = state_39280__$1;
(statearr_39291_39308[(2)] = inst_39265);

(statearr_39291_39308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (10))){
var inst_39273 = (state_39280[(2)]);
var state_39280__$1 = (function (){var statearr_39292 = state_39280;
(statearr_39292[(8)] = inst_39273);

return statearr_39292;
})();
var statearr_39293_39309 = state_39280__$1;
(statearr_39293_39309[(2)] = null);

(statearr_39293_39309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (8))){
var inst_39262 = (state_39280[(7)]);
var state_39280__$1 = state_39280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39280__$1,(11),out,inst_39262);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37787__auto___39299,out))
;
return ((function (switch__37699__auto__,c__37787__auto___39299,out){
return (function() {
var cljs$core$async$state_machine__37700__auto__ = null;
var cljs$core$async$state_machine__37700__auto____0 = (function (){
var statearr_39294 = [null,null,null,null,null,null,null,null,null];
(statearr_39294[(0)] = cljs$core$async$state_machine__37700__auto__);

(statearr_39294[(1)] = (1));

return statearr_39294;
});
var cljs$core$async$state_machine__37700__auto____1 = (function (state_39280){
while(true){
var ret_value__37701__auto__ = (function (){try{while(true){
var result__37702__auto__ = switch__37699__auto__.call(null,state_39280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37702__auto__;
}
break;
}
}catch (e39295){if((e39295 instanceof Object)){
var ex__37703__auto__ = e39295;
var statearr_39296_39310 = state_39280;
(statearr_39296_39310[(5)] = ex__37703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39311 = state_39280;
state_39280 = G__39311;
continue;
} else {
return ret_value__37701__auto__;
}
break;
}
});
cljs$core$async$state_machine__37700__auto__ = function(state_39280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37700__auto____1.call(this,state_39280);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37700__auto____0;
cljs$core$async$state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37700__auto____1;
return cljs$core$async$state_machine__37700__auto__;
})()
;})(switch__37699__auto__,c__37787__auto___39299,out))
})();
var state__37789__auto__ = (function (){var statearr_39297 = f__37788__auto__.call(null);
(statearr_39297[(6)] = c__37787__auto___39299);

return statearr_39297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37789__auto__);
});})(c__37787__auto___39299,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__39313 = arguments.length;
switch (G__39313) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37787__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37787__auto__){
return (function (){
var f__37788__auto__ = (function (){var switch__37699__auto__ = ((function (c__37787__auto__){
return (function (state_39376){
var state_val_39377 = (state_39376[(1)]);
if((state_val_39377 === (7))){
var inst_39372 = (state_39376[(2)]);
var state_39376__$1 = state_39376;
var statearr_39378_39416 = state_39376__$1;
(statearr_39378_39416[(2)] = inst_39372);

(statearr_39378_39416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39377 === (20))){
var inst_39342 = (state_39376[(7)]);
var inst_39353 = (state_39376[(2)]);
var inst_39354 = cljs.core.next.call(null,inst_39342);
var inst_39328 = inst_39354;
var inst_39329 = null;
var inst_39330 = (0);
var inst_39331 = (0);
var state_39376__$1 = (function (){var statearr_39379 = state_39376;
(statearr_39379[(8)] = inst_39331);

(statearr_39379[(9)] = inst_39330);

(statearr_39379[(10)] = inst_39329);

(statearr_39379[(11)] = inst_39328);

(statearr_39379[(12)] = inst_39353);

return statearr_39379;
})();
var statearr_39380_39417 = state_39376__$1;
(statearr_39380_39417[(2)] = null);

(statearr_39380_39417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39377 === (1))){
var state_39376__$1 = state_39376;
var statearr_39381_39418 = state_39376__$1;
(statearr_39381_39418[(2)] = null);

(statearr_39381_39418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39377 === (4))){
var inst_39317 = (state_39376[(13)]);
var inst_39317__$1 = (state_39376[(2)]);
var inst_39318 = (inst_39317__$1 == null);
var state_39376__$1 = (function (){var statearr_39382 = state_39376;
(statearr_39382[(13)] = inst_39317__$1);

return statearr_39382;
})();
if(cljs.core.truth_(inst_39318)){
var statearr_39383_39419 = state_39376__$1;
(statearr_39383_39419[(1)] = (5));

} else {
var statearr_39384_39420 = state_39376__$1;
(statearr_39384_39420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39377 === (15))){
var state_39376__$1 = state_39376;
var statearr_39388_39421 = state_39376__$1;
(statearr_39388_39421[(2)] = null);

(statearr_39388_39421[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39377 === (21))){
var state_39376__$1 = state_39376;
var statearr_39389_39422 = state_39376__$1;
(statearr_39389_39422[(2)] = null);

(statearr_39389_39422[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39377 === (13))){
var inst_39331 = (state_39376[(8)]);
var inst_39330 = (state_39376[(9)]);
var inst_39329 = (state_39376[(10)]);
var inst_39328 = (state_39376[(11)]);
var inst_39338 = (state_39376[(2)]);
var inst_39339 = (inst_39331 + (1));
var tmp39385 = inst_39330;
var tmp39386 = inst_39329;
var tmp39387 = inst_39328;
var inst_39328__$1 = tmp39387;
var inst_39329__$1 = tmp39386;
var inst_39330__$1 = tmp39385;
var inst_39331__$1 = inst_39339;
var state_39376__$1 = (function (){var statearr_39390 = state_39376;
(statearr_39390[(8)] = inst_39331__$1);

(statearr_39390[(14)] = inst_39338);

(statearr_39390[(9)] = inst_39330__$1);

(statearr_39390[(10)] = inst_39329__$1);

(statearr_39390[(11)] = inst_39328__$1);

return statearr_39390;
})();
var statearr_39391_39423 = state_39376__$1;
(statearr_39391_39423[(2)] = null);

(statearr_39391_39423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39377 === (22))){
var state_39376__$1 = state_39376;
var statearr_39392_39424 = state_39376__$1;
(statearr_39392_39424[(2)] = null);

(statearr_39392_39424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39377 === (6))){
var inst_39317 = (state_39376[(13)]);
var inst_39326 = f.call(null,inst_39317);
var inst_39327 = cljs.core.seq.call(null,inst_39326);
var inst_39328 = inst_39327;
var inst_39329 = null;
var inst_39330 = (0);
var inst_39331 = (0);
var state_39376__$1 = (function (){var statearr_39393 = state_39376;
(statearr_39393[(8)] = inst_39331);

(statearr_39393[(9)] = inst_39330);

(statearr_39393[(10)] = inst_39329);

(statearr_39393[(11)] = inst_39328);

return statearr_39393;
})();
var statearr_39394_39425 = state_39376__$1;
(statearr_39394_39425[(2)] = null);

(statearr_39394_39425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39377 === (17))){
var inst_39342 = (state_39376[(7)]);
var inst_39346 = cljs.core.chunk_first.call(null,inst_39342);
var inst_39347 = cljs.core.chunk_rest.call(null,inst_39342);
var inst_39348 = cljs.core.count.call(null,inst_39346);
var inst_39328 = inst_39347;
var inst_39329 = inst_39346;
var inst_39330 = inst_39348;
var inst_39331 = (0);
var state_39376__$1 = (function (){var statearr_39395 = state_39376;
(statearr_39395[(8)] = inst_39331);

(statearr_39395[(9)] = inst_39330);

(statearr_39395[(10)] = inst_39329);

(statearr_39395[(11)] = inst_39328);

return statearr_39395;
})();
var statearr_39396_39426 = state_39376__$1;
(statearr_39396_39426[(2)] = null);

(statearr_39396_39426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39377 === (3))){
var inst_39374 = (state_39376[(2)]);
var state_39376__$1 = state_39376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39376__$1,inst_39374);
} else {
if((state_val_39377 === (12))){
var inst_39362 = (state_39376[(2)]);
var state_39376__$1 = state_39376;
var statearr_39397_39427 = state_39376__$1;
(statearr_39397_39427[(2)] = inst_39362);

(statearr_39397_39427[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39377 === (2))){
var state_39376__$1 = state_39376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39376__$1,(4),in$);
} else {
if((state_val_39377 === (23))){
var inst_39370 = (state_39376[(2)]);
var state_39376__$1 = state_39376;
var statearr_39398_39428 = state_39376__$1;
(statearr_39398_39428[(2)] = inst_39370);

(statearr_39398_39428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39377 === (19))){
var inst_39357 = (state_39376[(2)]);
var state_39376__$1 = state_39376;
var statearr_39399_39429 = state_39376__$1;
(statearr_39399_39429[(2)] = inst_39357);

(statearr_39399_39429[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39377 === (11))){
var inst_39342 = (state_39376[(7)]);
var inst_39328 = (state_39376[(11)]);
var inst_39342__$1 = cljs.core.seq.call(null,inst_39328);
var state_39376__$1 = (function (){var statearr_39400 = state_39376;
(statearr_39400[(7)] = inst_39342__$1);

return statearr_39400;
})();
if(inst_39342__$1){
var statearr_39401_39430 = state_39376__$1;
(statearr_39401_39430[(1)] = (14));

} else {
var statearr_39402_39431 = state_39376__$1;
(statearr_39402_39431[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39377 === (9))){
var inst_39364 = (state_39376[(2)]);
var inst_39365 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39376__$1 = (function (){var statearr_39403 = state_39376;
(statearr_39403[(15)] = inst_39364);

return statearr_39403;
})();
if(cljs.core.truth_(inst_39365)){
var statearr_39404_39432 = state_39376__$1;
(statearr_39404_39432[(1)] = (21));

} else {
var statearr_39405_39433 = state_39376__$1;
(statearr_39405_39433[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39377 === (5))){
var inst_39320 = cljs.core.async.close_BANG_.call(null,out);
var state_39376__$1 = state_39376;
var statearr_39406_39434 = state_39376__$1;
(statearr_39406_39434[(2)] = inst_39320);

(statearr_39406_39434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39377 === (14))){
var inst_39342 = (state_39376[(7)]);
var inst_39344 = cljs.core.chunked_seq_QMARK_.call(null,inst_39342);
var state_39376__$1 = state_39376;
if(inst_39344){
var statearr_39407_39435 = state_39376__$1;
(statearr_39407_39435[(1)] = (17));

} else {
var statearr_39408_39436 = state_39376__$1;
(statearr_39408_39436[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39377 === (16))){
var inst_39360 = (state_39376[(2)]);
var state_39376__$1 = state_39376;
var statearr_39409_39437 = state_39376__$1;
(statearr_39409_39437[(2)] = inst_39360);

(statearr_39409_39437[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39377 === (10))){
var inst_39331 = (state_39376[(8)]);
var inst_39329 = (state_39376[(10)]);
var inst_39336 = cljs.core._nth.call(null,inst_39329,inst_39331);
var state_39376__$1 = state_39376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39376__$1,(13),out,inst_39336);
} else {
if((state_val_39377 === (18))){
var inst_39342 = (state_39376[(7)]);
var inst_39351 = cljs.core.first.call(null,inst_39342);
var state_39376__$1 = state_39376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39376__$1,(20),out,inst_39351);
} else {
if((state_val_39377 === (8))){
var inst_39331 = (state_39376[(8)]);
var inst_39330 = (state_39376[(9)]);
var inst_39333 = (inst_39331 < inst_39330);
var inst_39334 = inst_39333;
var state_39376__$1 = state_39376;
if(cljs.core.truth_(inst_39334)){
var statearr_39410_39438 = state_39376__$1;
(statearr_39410_39438[(1)] = (10));

} else {
var statearr_39411_39439 = state_39376__$1;
(statearr_39411_39439[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37787__auto__))
;
return ((function (switch__37699__auto__,c__37787__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37700__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37700__auto____0 = (function (){
var statearr_39412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39412[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37700__auto__);

(statearr_39412[(1)] = (1));

return statearr_39412;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37700__auto____1 = (function (state_39376){
while(true){
var ret_value__37701__auto__ = (function (){try{while(true){
var result__37702__auto__ = switch__37699__auto__.call(null,state_39376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37702__auto__;
}
break;
}
}catch (e39413){if((e39413 instanceof Object)){
var ex__37703__auto__ = e39413;
var statearr_39414_39440 = state_39376;
(statearr_39414_39440[(5)] = ex__37703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39441 = state_39376;
state_39376 = G__39441;
continue;
} else {
return ret_value__37701__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37700__auto__ = function(state_39376){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37700__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37700__auto____1.call(this,state_39376);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37700__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37700__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37700__auto__;
})()
;})(switch__37699__auto__,c__37787__auto__))
})();
var state__37789__auto__ = (function (){var statearr_39415 = f__37788__auto__.call(null);
(statearr_39415[(6)] = c__37787__auto__);

return statearr_39415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37789__auto__);
});})(c__37787__auto__))
);

return c__37787__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__39443 = arguments.length;
switch (G__39443) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__39446 = arguments.length;
switch (G__39446) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__39449 = arguments.length;
switch (G__39449) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37787__auto___39496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37787__auto___39496,out){
return (function (){
var f__37788__auto__ = (function (){var switch__37699__auto__ = ((function (c__37787__auto___39496,out){
return (function (state_39473){
var state_val_39474 = (state_39473[(1)]);
if((state_val_39474 === (7))){
var inst_39468 = (state_39473[(2)]);
var state_39473__$1 = state_39473;
var statearr_39475_39497 = state_39473__$1;
(statearr_39475_39497[(2)] = inst_39468);

(statearr_39475_39497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39474 === (1))){
var inst_39450 = null;
var state_39473__$1 = (function (){var statearr_39476 = state_39473;
(statearr_39476[(7)] = inst_39450);

return statearr_39476;
})();
var statearr_39477_39498 = state_39473__$1;
(statearr_39477_39498[(2)] = null);

(statearr_39477_39498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39474 === (4))){
var inst_39453 = (state_39473[(8)]);
var inst_39453__$1 = (state_39473[(2)]);
var inst_39454 = (inst_39453__$1 == null);
var inst_39455 = cljs.core.not.call(null,inst_39454);
var state_39473__$1 = (function (){var statearr_39478 = state_39473;
(statearr_39478[(8)] = inst_39453__$1);

return statearr_39478;
})();
if(inst_39455){
var statearr_39479_39499 = state_39473__$1;
(statearr_39479_39499[(1)] = (5));

} else {
var statearr_39480_39500 = state_39473__$1;
(statearr_39480_39500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39474 === (6))){
var state_39473__$1 = state_39473;
var statearr_39481_39501 = state_39473__$1;
(statearr_39481_39501[(2)] = null);

(statearr_39481_39501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39474 === (3))){
var inst_39470 = (state_39473[(2)]);
var inst_39471 = cljs.core.async.close_BANG_.call(null,out);
var state_39473__$1 = (function (){var statearr_39482 = state_39473;
(statearr_39482[(9)] = inst_39470);

return statearr_39482;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39473__$1,inst_39471);
} else {
if((state_val_39474 === (2))){
var state_39473__$1 = state_39473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39473__$1,(4),ch);
} else {
if((state_val_39474 === (11))){
var inst_39453 = (state_39473[(8)]);
var inst_39462 = (state_39473[(2)]);
var inst_39450 = inst_39453;
var state_39473__$1 = (function (){var statearr_39483 = state_39473;
(statearr_39483[(7)] = inst_39450);

(statearr_39483[(10)] = inst_39462);

return statearr_39483;
})();
var statearr_39484_39502 = state_39473__$1;
(statearr_39484_39502[(2)] = null);

(statearr_39484_39502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39474 === (9))){
var inst_39453 = (state_39473[(8)]);
var state_39473__$1 = state_39473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39473__$1,(11),out,inst_39453);
} else {
if((state_val_39474 === (5))){
var inst_39453 = (state_39473[(8)]);
var inst_39450 = (state_39473[(7)]);
var inst_39457 = cljs.core._EQ_.call(null,inst_39453,inst_39450);
var state_39473__$1 = state_39473;
if(inst_39457){
var statearr_39486_39503 = state_39473__$1;
(statearr_39486_39503[(1)] = (8));

} else {
var statearr_39487_39504 = state_39473__$1;
(statearr_39487_39504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39474 === (10))){
var inst_39465 = (state_39473[(2)]);
var state_39473__$1 = state_39473;
var statearr_39488_39505 = state_39473__$1;
(statearr_39488_39505[(2)] = inst_39465);

(statearr_39488_39505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39474 === (8))){
var inst_39450 = (state_39473[(7)]);
var tmp39485 = inst_39450;
var inst_39450__$1 = tmp39485;
var state_39473__$1 = (function (){var statearr_39489 = state_39473;
(statearr_39489[(7)] = inst_39450__$1);

return statearr_39489;
})();
var statearr_39490_39506 = state_39473__$1;
(statearr_39490_39506[(2)] = null);

(statearr_39490_39506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37787__auto___39496,out))
;
return ((function (switch__37699__auto__,c__37787__auto___39496,out){
return (function() {
var cljs$core$async$state_machine__37700__auto__ = null;
var cljs$core$async$state_machine__37700__auto____0 = (function (){
var statearr_39491 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39491[(0)] = cljs$core$async$state_machine__37700__auto__);

(statearr_39491[(1)] = (1));

return statearr_39491;
});
var cljs$core$async$state_machine__37700__auto____1 = (function (state_39473){
while(true){
var ret_value__37701__auto__ = (function (){try{while(true){
var result__37702__auto__ = switch__37699__auto__.call(null,state_39473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37702__auto__;
}
break;
}
}catch (e39492){if((e39492 instanceof Object)){
var ex__37703__auto__ = e39492;
var statearr_39493_39507 = state_39473;
(statearr_39493_39507[(5)] = ex__37703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39508 = state_39473;
state_39473 = G__39508;
continue;
} else {
return ret_value__37701__auto__;
}
break;
}
});
cljs$core$async$state_machine__37700__auto__ = function(state_39473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37700__auto____1.call(this,state_39473);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37700__auto____0;
cljs$core$async$state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37700__auto____1;
return cljs$core$async$state_machine__37700__auto__;
})()
;})(switch__37699__auto__,c__37787__auto___39496,out))
})();
var state__37789__auto__ = (function (){var statearr_39494 = f__37788__auto__.call(null);
(statearr_39494[(6)] = c__37787__auto___39496);

return statearr_39494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37789__auto__);
});})(c__37787__auto___39496,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__39510 = arguments.length;
switch (G__39510) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37787__auto___39576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37787__auto___39576,out){
return (function (){
var f__37788__auto__ = (function (){var switch__37699__auto__ = ((function (c__37787__auto___39576,out){
return (function (state_39548){
var state_val_39549 = (state_39548[(1)]);
if((state_val_39549 === (7))){
var inst_39544 = (state_39548[(2)]);
var state_39548__$1 = state_39548;
var statearr_39550_39577 = state_39548__$1;
(statearr_39550_39577[(2)] = inst_39544);

(statearr_39550_39577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39549 === (1))){
var inst_39511 = (new Array(n));
var inst_39512 = inst_39511;
var inst_39513 = (0);
var state_39548__$1 = (function (){var statearr_39551 = state_39548;
(statearr_39551[(7)] = inst_39512);

(statearr_39551[(8)] = inst_39513);

return statearr_39551;
})();
var statearr_39552_39578 = state_39548__$1;
(statearr_39552_39578[(2)] = null);

(statearr_39552_39578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39549 === (4))){
var inst_39516 = (state_39548[(9)]);
var inst_39516__$1 = (state_39548[(2)]);
var inst_39517 = (inst_39516__$1 == null);
var inst_39518 = cljs.core.not.call(null,inst_39517);
var state_39548__$1 = (function (){var statearr_39553 = state_39548;
(statearr_39553[(9)] = inst_39516__$1);

return statearr_39553;
})();
if(inst_39518){
var statearr_39554_39579 = state_39548__$1;
(statearr_39554_39579[(1)] = (5));

} else {
var statearr_39555_39580 = state_39548__$1;
(statearr_39555_39580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39549 === (15))){
var inst_39538 = (state_39548[(2)]);
var state_39548__$1 = state_39548;
var statearr_39556_39581 = state_39548__$1;
(statearr_39556_39581[(2)] = inst_39538);

(statearr_39556_39581[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39549 === (13))){
var state_39548__$1 = state_39548;
var statearr_39557_39582 = state_39548__$1;
(statearr_39557_39582[(2)] = null);

(statearr_39557_39582[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39549 === (6))){
var inst_39513 = (state_39548[(8)]);
var inst_39534 = (inst_39513 > (0));
var state_39548__$1 = state_39548;
if(cljs.core.truth_(inst_39534)){
var statearr_39558_39583 = state_39548__$1;
(statearr_39558_39583[(1)] = (12));

} else {
var statearr_39559_39584 = state_39548__$1;
(statearr_39559_39584[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39549 === (3))){
var inst_39546 = (state_39548[(2)]);
var state_39548__$1 = state_39548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39548__$1,inst_39546);
} else {
if((state_val_39549 === (12))){
var inst_39512 = (state_39548[(7)]);
var inst_39536 = cljs.core.vec.call(null,inst_39512);
var state_39548__$1 = state_39548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39548__$1,(15),out,inst_39536);
} else {
if((state_val_39549 === (2))){
var state_39548__$1 = state_39548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39548__$1,(4),ch);
} else {
if((state_val_39549 === (11))){
var inst_39528 = (state_39548[(2)]);
var inst_39529 = (new Array(n));
var inst_39512 = inst_39529;
var inst_39513 = (0);
var state_39548__$1 = (function (){var statearr_39560 = state_39548;
(statearr_39560[(7)] = inst_39512);

(statearr_39560[(8)] = inst_39513);

(statearr_39560[(10)] = inst_39528);

return statearr_39560;
})();
var statearr_39561_39585 = state_39548__$1;
(statearr_39561_39585[(2)] = null);

(statearr_39561_39585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39549 === (9))){
var inst_39512 = (state_39548[(7)]);
var inst_39526 = cljs.core.vec.call(null,inst_39512);
var state_39548__$1 = state_39548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39548__$1,(11),out,inst_39526);
} else {
if((state_val_39549 === (5))){
var inst_39521 = (state_39548[(11)]);
var inst_39512 = (state_39548[(7)]);
var inst_39513 = (state_39548[(8)]);
var inst_39516 = (state_39548[(9)]);
var inst_39520 = (inst_39512[inst_39513] = inst_39516);
var inst_39521__$1 = (inst_39513 + (1));
var inst_39522 = (inst_39521__$1 < n);
var state_39548__$1 = (function (){var statearr_39562 = state_39548;
(statearr_39562[(12)] = inst_39520);

(statearr_39562[(11)] = inst_39521__$1);

return statearr_39562;
})();
if(cljs.core.truth_(inst_39522)){
var statearr_39563_39586 = state_39548__$1;
(statearr_39563_39586[(1)] = (8));

} else {
var statearr_39564_39587 = state_39548__$1;
(statearr_39564_39587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39549 === (14))){
var inst_39541 = (state_39548[(2)]);
var inst_39542 = cljs.core.async.close_BANG_.call(null,out);
var state_39548__$1 = (function (){var statearr_39566 = state_39548;
(statearr_39566[(13)] = inst_39541);

return statearr_39566;
})();
var statearr_39567_39588 = state_39548__$1;
(statearr_39567_39588[(2)] = inst_39542);

(statearr_39567_39588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39549 === (10))){
var inst_39532 = (state_39548[(2)]);
var state_39548__$1 = state_39548;
var statearr_39568_39589 = state_39548__$1;
(statearr_39568_39589[(2)] = inst_39532);

(statearr_39568_39589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39549 === (8))){
var inst_39521 = (state_39548[(11)]);
var inst_39512 = (state_39548[(7)]);
var tmp39565 = inst_39512;
var inst_39512__$1 = tmp39565;
var inst_39513 = inst_39521;
var state_39548__$1 = (function (){var statearr_39569 = state_39548;
(statearr_39569[(7)] = inst_39512__$1);

(statearr_39569[(8)] = inst_39513);

return statearr_39569;
})();
var statearr_39570_39590 = state_39548__$1;
(statearr_39570_39590[(2)] = null);

(statearr_39570_39590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37787__auto___39576,out))
;
return ((function (switch__37699__auto__,c__37787__auto___39576,out){
return (function() {
var cljs$core$async$state_machine__37700__auto__ = null;
var cljs$core$async$state_machine__37700__auto____0 = (function (){
var statearr_39571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39571[(0)] = cljs$core$async$state_machine__37700__auto__);

(statearr_39571[(1)] = (1));

return statearr_39571;
});
var cljs$core$async$state_machine__37700__auto____1 = (function (state_39548){
while(true){
var ret_value__37701__auto__ = (function (){try{while(true){
var result__37702__auto__ = switch__37699__auto__.call(null,state_39548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37702__auto__;
}
break;
}
}catch (e39572){if((e39572 instanceof Object)){
var ex__37703__auto__ = e39572;
var statearr_39573_39591 = state_39548;
(statearr_39573_39591[(5)] = ex__37703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39592 = state_39548;
state_39548 = G__39592;
continue;
} else {
return ret_value__37701__auto__;
}
break;
}
});
cljs$core$async$state_machine__37700__auto__ = function(state_39548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37700__auto____1.call(this,state_39548);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37700__auto____0;
cljs$core$async$state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37700__auto____1;
return cljs$core$async$state_machine__37700__auto__;
})()
;})(switch__37699__auto__,c__37787__auto___39576,out))
})();
var state__37789__auto__ = (function (){var statearr_39574 = f__37788__auto__.call(null);
(statearr_39574[(6)] = c__37787__auto___39576);

return statearr_39574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37789__auto__);
});})(c__37787__auto___39576,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39594 = arguments.length;
switch (G__39594) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37787__auto___39664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37787__auto___39664,out){
return (function (){
var f__37788__auto__ = (function (){var switch__37699__auto__ = ((function (c__37787__auto___39664,out){
return (function (state_39636){
var state_val_39637 = (state_39636[(1)]);
if((state_val_39637 === (7))){
var inst_39632 = (state_39636[(2)]);
var state_39636__$1 = state_39636;
var statearr_39638_39665 = state_39636__$1;
(statearr_39638_39665[(2)] = inst_39632);

(statearr_39638_39665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39637 === (1))){
var inst_39595 = [];
var inst_39596 = inst_39595;
var inst_39597 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39636__$1 = (function (){var statearr_39639 = state_39636;
(statearr_39639[(7)] = inst_39597);

(statearr_39639[(8)] = inst_39596);

return statearr_39639;
})();
var statearr_39640_39666 = state_39636__$1;
(statearr_39640_39666[(2)] = null);

(statearr_39640_39666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39637 === (4))){
var inst_39600 = (state_39636[(9)]);
var inst_39600__$1 = (state_39636[(2)]);
var inst_39601 = (inst_39600__$1 == null);
var inst_39602 = cljs.core.not.call(null,inst_39601);
var state_39636__$1 = (function (){var statearr_39641 = state_39636;
(statearr_39641[(9)] = inst_39600__$1);

return statearr_39641;
})();
if(inst_39602){
var statearr_39642_39667 = state_39636__$1;
(statearr_39642_39667[(1)] = (5));

} else {
var statearr_39643_39668 = state_39636__$1;
(statearr_39643_39668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39637 === (15))){
var inst_39626 = (state_39636[(2)]);
var state_39636__$1 = state_39636;
var statearr_39644_39669 = state_39636__$1;
(statearr_39644_39669[(2)] = inst_39626);

(statearr_39644_39669[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39637 === (13))){
var state_39636__$1 = state_39636;
var statearr_39645_39670 = state_39636__$1;
(statearr_39645_39670[(2)] = null);

(statearr_39645_39670[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39637 === (6))){
var inst_39596 = (state_39636[(8)]);
var inst_39621 = inst_39596.length;
var inst_39622 = (inst_39621 > (0));
var state_39636__$1 = state_39636;
if(cljs.core.truth_(inst_39622)){
var statearr_39646_39671 = state_39636__$1;
(statearr_39646_39671[(1)] = (12));

} else {
var statearr_39647_39672 = state_39636__$1;
(statearr_39647_39672[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39637 === (3))){
var inst_39634 = (state_39636[(2)]);
var state_39636__$1 = state_39636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39636__$1,inst_39634);
} else {
if((state_val_39637 === (12))){
var inst_39596 = (state_39636[(8)]);
var inst_39624 = cljs.core.vec.call(null,inst_39596);
var state_39636__$1 = state_39636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39636__$1,(15),out,inst_39624);
} else {
if((state_val_39637 === (2))){
var state_39636__$1 = state_39636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39636__$1,(4),ch);
} else {
if((state_val_39637 === (11))){
var inst_39600 = (state_39636[(9)]);
var inst_39604 = (state_39636[(10)]);
var inst_39614 = (state_39636[(2)]);
var inst_39615 = [];
var inst_39616 = inst_39615.push(inst_39600);
var inst_39596 = inst_39615;
var inst_39597 = inst_39604;
var state_39636__$1 = (function (){var statearr_39648 = state_39636;
(statearr_39648[(7)] = inst_39597);

(statearr_39648[(11)] = inst_39614);

(statearr_39648[(12)] = inst_39616);

(statearr_39648[(8)] = inst_39596);

return statearr_39648;
})();
var statearr_39649_39673 = state_39636__$1;
(statearr_39649_39673[(2)] = null);

(statearr_39649_39673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39637 === (9))){
var inst_39596 = (state_39636[(8)]);
var inst_39612 = cljs.core.vec.call(null,inst_39596);
var state_39636__$1 = state_39636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39636__$1,(11),out,inst_39612);
} else {
if((state_val_39637 === (5))){
var inst_39600 = (state_39636[(9)]);
var inst_39597 = (state_39636[(7)]);
var inst_39604 = (state_39636[(10)]);
var inst_39604__$1 = f.call(null,inst_39600);
var inst_39605 = cljs.core._EQ_.call(null,inst_39604__$1,inst_39597);
var inst_39606 = cljs.core.keyword_identical_QMARK_.call(null,inst_39597,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39607 = (inst_39605) || (inst_39606);
var state_39636__$1 = (function (){var statearr_39650 = state_39636;
(statearr_39650[(10)] = inst_39604__$1);

return statearr_39650;
})();
if(cljs.core.truth_(inst_39607)){
var statearr_39651_39674 = state_39636__$1;
(statearr_39651_39674[(1)] = (8));

} else {
var statearr_39652_39675 = state_39636__$1;
(statearr_39652_39675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39637 === (14))){
var inst_39629 = (state_39636[(2)]);
var inst_39630 = cljs.core.async.close_BANG_.call(null,out);
var state_39636__$1 = (function (){var statearr_39654 = state_39636;
(statearr_39654[(13)] = inst_39629);

return statearr_39654;
})();
var statearr_39655_39676 = state_39636__$1;
(statearr_39655_39676[(2)] = inst_39630);

(statearr_39655_39676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39637 === (10))){
var inst_39619 = (state_39636[(2)]);
var state_39636__$1 = state_39636;
var statearr_39656_39677 = state_39636__$1;
(statearr_39656_39677[(2)] = inst_39619);

(statearr_39656_39677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39637 === (8))){
var inst_39600 = (state_39636[(9)]);
var inst_39604 = (state_39636[(10)]);
var inst_39596 = (state_39636[(8)]);
var inst_39609 = inst_39596.push(inst_39600);
var tmp39653 = inst_39596;
var inst_39596__$1 = tmp39653;
var inst_39597 = inst_39604;
var state_39636__$1 = (function (){var statearr_39657 = state_39636;
(statearr_39657[(14)] = inst_39609);

(statearr_39657[(7)] = inst_39597);

(statearr_39657[(8)] = inst_39596__$1);

return statearr_39657;
})();
var statearr_39658_39678 = state_39636__$1;
(statearr_39658_39678[(2)] = null);

(statearr_39658_39678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37787__auto___39664,out))
;
return ((function (switch__37699__auto__,c__37787__auto___39664,out){
return (function() {
var cljs$core$async$state_machine__37700__auto__ = null;
var cljs$core$async$state_machine__37700__auto____0 = (function (){
var statearr_39659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39659[(0)] = cljs$core$async$state_machine__37700__auto__);

(statearr_39659[(1)] = (1));

return statearr_39659;
});
var cljs$core$async$state_machine__37700__auto____1 = (function (state_39636){
while(true){
var ret_value__37701__auto__ = (function (){try{while(true){
var result__37702__auto__ = switch__37699__auto__.call(null,state_39636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37702__auto__;
}
break;
}
}catch (e39660){if((e39660 instanceof Object)){
var ex__37703__auto__ = e39660;
var statearr_39661_39679 = state_39636;
(statearr_39661_39679[(5)] = ex__37703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39680 = state_39636;
state_39636 = G__39680;
continue;
} else {
return ret_value__37701__auto__;
}
break;
}
});
cljs$core$async$state_machine__37700__auto__ = function(state_39636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37700__auto____1.call(this,state_39636);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37700__auto____0;
cljs$core$async$state_machine__37700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37700__auto____1;
return cljs$core$async$state_machine__37700__auto__;
})()
;})(switch__37699__auto__,c__37787__auto___39664,out))
})();
var state__37789__auto__ = (function (){var statearr_39662 = f__37788__auto__.call(null);
(statearr_39662[(6)] = c__37787__auto___39664);

return statearr_39662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37789__auto__);
});})(c__37787__auto___39664,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
