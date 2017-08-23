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
var G__37315 = arguments.length;
switch (G__37315) {
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
if(typeof cljs.core.async.t_cljs$core$async37316 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37316 = (function (f,blockable,meta37317){
this.f = f;
this.blockable = blockable;
this.meta37317 = meta37317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37318,meta37317__$1){
var self__ = this;
var _37318__$1 = this;
return (new cljs.core.async.t_cljs$core$async37316(self__.f,self__.blockable,meta37317__$1));
});

cljs.core.async.t_cljs$core$async37316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37318){
var self__ = this;
var _37318__$1 = this;
return self__.meta37317;
});

cljs.core.async.t_cljs$core$async37316.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37316.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37316.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async37316.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async37316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37317","meta37317",-350096097,null)], null);
});

cljs.core.async.t_cljs$core$async37316.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37316";

cljs.core.async.t_cljs$core$async37316.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async37316");
});

cljs.core.async.__GT_t_cljs$core$async37316 = (function cljs$core$async$__GT_t_cljs$core$async37316(f__$1,blockable__$1,meta37317){
return (new cljs.core.async.t_cljs$core$async37316(f__$1,blockable__$1,meta37317));
});

}

return (new cljs.core.async.t_cljs$core$async37316(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37322 = arguments.length;
switch (G__37322) {
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
var G__37325 = arguments.length;
switch (G__37325) {
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
var G__37328 = arguments.length;
switch (G__37328) {
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
var val_37330 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37330);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37330,ret){
return (function (){
return fn1.call(null,val_37330);
});})(val_37330,ret))
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
var G__37332 = arguments.length;
switch (G__37332) {
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
var n__28140__auto___37334 = n;
var x_37335 = (0);
while(true){
if((x_37335 < n__28140__auto___37334)){
(a[x_37335] = (0));

var G__37336 = (x_37335 + (1));
x_37335 = G__37336;
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

var G__37337 = (i + (1));
i = G__37337;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37338 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37338 = (function (flag,meta37339){
this.flag = flag;
this.meta37339 = meta37339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37340,meta37339__$1){
var self__ = this;
var _37340__$1 = this;
return (new cljs.core.async.t_cljs$core$async37338(self__.flag,meta37339__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37338.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37340){
var self__ = this;
var _37340__$1 = this;
return self__.meta37339;
});})(flag))
;

cljs.core.async.t_cljs$core$async37338.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37338.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37338.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37338.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37338.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37339","meta37339",-1700188511,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37338.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37338";

cljs.core.async.t_cljs$core$async37338.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async37338");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async37338 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37338(flag__$1,meta37339){
return (new cljs.core.async.t_cljs$core$async37338(flag__$1,meta37339));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37338(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37341 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37341 = (function (flag,cb,meta37342){
this.flag = flag;
this.cb = cb;
this.meta37342 = meta37342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37343,meta37342__$1){
var self__ = this;
var _37343__$1 = this;
return (new cljs.core.async.t_cljs$core$async37341(self__.flag,self__.cb,meta37342__$1));
});

cljs.core.async.t_cljs$core$async37341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37343){
var self__ = this;
var _37343__$1 = this;
return self__.meta37342;
});

cljs.core.async.t_cljs$core$async37341.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37341.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37341.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37341.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37342","meta37342",-661119865,null)], null);
});

cljs.core.async.t_cljs$core$async37341.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37341";

cljs.core.async.t_cljs$core$async37341.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async37341");
});

cljs.core.async.__GT_t_cljs$core$async37341 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37341(flag__$1,cb__$1,meta37342){
return (new cljs.core.async.t_cljs$core$async37341(flag__$1,cb__$1,meta37342));
});

}

return (new cljs.core.async.t_cljs$core$async37341(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__37344_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37344_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37345_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37345_SHARP_,port], null));
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
var G__37346 = (i + (1));
i = G__37346;
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
var len__28364__auto___37352 = arguments.length;
var i__28365__auto___37353 = (0);
while(true){
if((i__28365__auto___37353 < len__28364__auto___37352)){
args__28371__auto__.push((arguments[i__28365__auto___37353]));

var G__37354 = (i__28365__auto___37353 + (1));
i__28365__auto___37353 = G__37354;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37349){
var map__37350 = p__37349;
var map__37350__$1 = ((((!((map__37350 == null)))?((((map__37350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37350):map__37350);
var opts = map__37350__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37347){
var G__37348 = cljs.core.first.call(null,seq37347);
var seq37347__$1 = cljs.core.next.call(null,seq37347);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37348,seq37347__$1);
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
var G__37356 = arguments.length;
switch (G__37356) {
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
var c__37269__auto___37402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37269__auto___37402){
return (function (){
var f__37270__auto__ = (function (){var switch__37181__auto__ = ((function (c__37269__auto___37402){
return (function (state_37380){
var state_val_37381 = (state_37380[(1)]);
if((state_val_37381 === (7))){
var inst_37376 = (state_37380[(2)]);
var state_37380__$1 = state_37380;
var statearr_37382_37403 = state_37380__$1;
(statearr_37382_37403[(2)] = inst_37376);

(statearr_37382_37403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (1))){
var state_37380__$1 = state_37380;
var statearr_37383_37404 = state_37380__$1;
(statearr_37383_37404[(2)] = null);

(statearr_37383_37404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (4))){
var inst_37359 = (state_37380[(7)]);
var inst_37359__$1 = (state_37380[(2)]);
var inst_37360 = (inst_37359__$1 == null);
var state_37380__$1 = (function (){var statearr_37384 = state_37380;
(statearr_37384[(7)] = inst_37359__$1);

return statearr_37384;
})();
if(cljs.core.truth_(inst_37360)){
var statearr_37385_37405 = state_37380__$1;
(statearr_37385_37405[(1)] = (5));

} else {
var statearr_37386_37406 = state_37380__$1;
(statearr_37386_37406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (13))){
var state_37380__$1 = state_37380;
var statearr_37387_37407 = state_37380__$1;
(statearr_37387_37407[(2)] = null);

(statearr_37387_37407[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (6))){
var inst_37359 = (state_37380[(7)]);
var state_37380__$1 = state_37380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37380__$1,(11),to,inst_37359);
} else {
if((state_val_37381 === (3))){
var inst_37378 = (state_37380[(2)]);
var state_37380__$1 = state_37380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37380__$1,inst_37378);
} else {
if((state_val_37381 === (12))){
var state_37380__$1 = state_37380;
var statearr_37388_37408 = state_37380__$1;
(statearr_37388_37408[(2)] = null);

(statearr_37388_37408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (2))){
var state_37380__$1 = state_37380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37380__$1,(4),from);
} else {
if((state_val_37381 === (11))){
var inst_37369 = (state_37380[(2)]);
var state_37380__$1 = state_37380;
if(cljs.core.truth_(inst_37369)){
var statearr_37389_37409 = state_37380__$1;
(statearr_37389_37409[(1)] = (12));

} else {
var statearr_37390_37410 = state_37380__$1;
(statearr_37390_37410[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (9))){
var state_37380__$1 = state_37380;
var statearr_37391_37411 = state_37380__$1;
(statearr_37391_37411[(2)] = null);

(statearr_37391_37411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (5))){
var state_37380__$1 = state_37380;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37392_37412 = state_37380__$1;
(statearr_37392_37412[(1)] = (8));

} else {
var statearr_37393_37413 = state_37380__$1;
(statearr_37393_37413[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (14))){
var inst_37374 = (state_37380[(2)]);
var state_37380__$1 = state_37380;
var statearr_37394_37414 = state_37380__$1;
(statearr_37394_37414[(2)] = inst_37374);

(statearr_37394_37414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (10))){
var inst_37366 = (state_37380[(2)]);
var state_37380__$1 = state_37380;
var statearr_37395_37415 = state_37380__$1;
(statearr_37395_37415[(2)] = inst_37366);

(statearr_37395_37415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (8))){
var inst_37363 = cljs.core.async.close_BANG_.call(null,to);
var state_37380__$1 = state_37380;
var statearr_37396_37416 = state_37380__$1;
(statearr_37396_37416[(2)] = inst_37363);

(statearr_37396_37416[(1)] = (10));


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
});})(c__37269__auto___37402))
;
return ((function (switch__37181__auto__,c__37269__auto___37402){
return (function() {
var cljs$core$async$state_machine__37182__auto__ = null;
var cljs$core$async$state_machine__37182__auto____0 = (function (){
var statearr_37397 = [null,null,null,null,null,null,null,null];
(statearr_37397[(0)] = cljs$core$async$state_machine__37182__auto__);

(statearr_37397[(1)] = (1));

return statearr_37397;
});
var cljs$core$async$state_machine__37182__auto____1 = (function (state_37380){
while(true){
var ret_value__37183__auto__ = (function (){try{while(true){
var result__37184__auto__ = switch__37181__auto__.call(null,state_37380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37184__auto__;
}
break;
}
}catch (e37398){if((e37398 instanceof Object)){
var ex__37185__auto__ = e37398;
var statearr_37399_37417 = state_37380;
(statearr_37399_37417[(5)] = ex__37185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37418 = state_37380;
state_37380 = G__37418;
continue;
} else {
return ret_value__37183__auto__;
}
break;
}
});
cljs$core$async$state_machine__37182__auto__ = function(state_37380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37182__auto____1.call(this,state_37380);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37182__auto____0;
cljs$core$async$state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37182__auto____1;
return cljs$core$async$state_machine__37182__auto__;
})()
;})(switch__37181__auto__,c__37269__auto___37402))
})();
var state__37271__auto__ = (function (){var statearr_37400 = f__37270__auto__.call(null);
(statearr_37400[(6)] = c__37269__auto___37402);

return statearr_37400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37271__auto__);
});})(c__37269__auto___37402))
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
return (function (p__37419){
var vec__37420 = p__37419;
var v = cljs.core.nth.call(null,vec__37420,(0),null);
var p = cljs.core.nth.call(null,vec__37420,(1),null);
var job = vec__37420;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__37269__auto___37591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37269__auto___37591,res,vec__37420,v,p,job,jobs,results){
return (function (){
var f__37270__auto__ = (function (){var switch__37181__auto__ = ((function (c__37269__auto___37591,res,vec__37420,v,p,job,jobs,results){
return (function (state_37427){
var state_val_37428 = (state_37427[(1)]);
if((state_val_37428 === (1))){
var state_37427__$1 = state_37427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37427__$1,(2),res,v);
} else {
if((state_val_37428 === (2))){
var inst_37424 = (state_37427[(2)]);
var inst_37425 = cljs.core.async.close_BANG_.call(null,res);
var state_37427__$1 = (function (){var statearr_37429 = state_37427;
(statearr_37429[(7)] = inst_37424);

return statearr_37429;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37427__$1,inst_37425);
} else {
return null;
}
}
});})(c__37269__auto___37591,res,vec__37420,v,p,job,jobs,results))
;
return ((function (switch__37181__auto__,c__37269__auto___37591,res,vec__37420,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____0 = (function (){
var statearr_37430 = [null,null,null,null,null,null,null,null];
(statearr_37430[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__);

(statearr_37430[(1)] = (1));

return statearr_37430;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____1 = (function (state_37427){
while(true){
var ret_value__37183__auto__ = (function (){try{while(true){
var result__37184__auto__ = switch__37181__auto__.call(null,state_37427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37184__auto__;
}
break;
}
}catch (e37431){if((e37431 instanceof Object)){
var ex__37185__auto__ = e37431;
var statearr_37432_37592 = state_37427;
(statearr_37432_37592[(5)] = ex__37185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37593 = state_37427;
state_37427 = G__37593;
continue;
} else {
return ret_value__37183__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__ = function(state_37427){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____1.call(this,state_37427);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__;
})()
;})(switch__37181__auto__,c__37269__auto___37591,res,vec__37420,v,p,job,jobs,results))
})();
var state__37271__auto__ = (function (){var statearr_37433 = f__37270__auto__.call(null);
(statearr_37433[(6)] = c__37269__auto___37591);

return statearr_37433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37271__auto__);
});})(c__37269__auto___37591,res,vec__37420,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37434){
var vec__37435 = p__37434;
var v = cljs.core.nth.call(null,vec__37435,(0),null);
var p = cljs.core.nth.call(null,vec__37435,(1),null);
var job = vec__37435;
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
var n__28140__auto___37594 = n;
var __37595 = (0);
while(true){
if((__37595 < n__28140__auto___37594)){
var G__37438_37596 = type;
var G__37438_37597__$1 = (((G__37438_37596 instanceof cljs.core.Keyword))?G__37438_37596.fqn:null);
switch (G__37438_37597__$1) {
case "compute":
var c__37269__auto___37599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37595,c__37269__auto___37599,G__37438_37596,G__37438_37597__$1,n__28140__auto___37594,jobs,results,process,async){
return (function (){
var f__37270__auto__ = (function (){var switch__37181__auto__ = ((function (__37595,c__37269__auto___37599,G__37438_37596,G__37438_37597__$1,n__28140__auto___37594,jobs,results,process,async){
return (function (state_37451){
var state_val_37452 = (state_37451[(1)]);
if((state_val_37452 === (1))){
var state_37451__$1 = state_37451;
var statearr_37453_37600 = state_37451__$1;
(statearr_37453_37600[(2)] = null);

(statearr_37453_37600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (2))){
var state_37451__$1 = state_37451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37451__$1,(4),jobs);
} else {
if((state_val_37452 === (3))){
var inst_37449 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37451__$1,inst_37449);
} else {
if((state_val_37452 === (4))){
var inst_37441 = (state_37451[(2)]);
var inst_37442 = process.call(null,inst_37441);
var state_37451__$1 = state_37451;
if(cljs.core.truth_(inst_37442)){
var statearr_37454_37601 = state_37451__$1;
(statearr_37454_37601[(1)] = (5));

} else {
var statearr_37455_37602 = state_37451__$1;
(statearr_37455_37602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (5))){
var state_37451__$1 = state_37451;
var statearr_37456_37603 = state_37451__$1;
(statearr_37456_37603[(2)] = null);

(statearr_37456_37603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (6))){
var state_37451__$1 = state_37451;
var statearr_37457_37604 = state_37451__$1;
(statearr_37457_37604[(2)] = null);

(statearr_37457_37604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37452 === (7))){
var inst_37447 = (state_37451[(2)]);
var state_37451__$1 = state_37451;
var statearr_37458_37605 = state_37451__$1;
(statearr_37458_37605[(2)] = inst_37447);

(statearr_37458_37605[(1)] = (3));


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
});})(__37595,c__37269__auto___37599,G__37438_37596,G__37438_37597__$1,n__28140__auto___37594,jobs,results,process,async))
;
return ((function (__37595,switch__37181__auto__,c__37269__auto___37599,G__37438_37596,G__37438_37597__$1,n__28140__auto___37594,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____0 = (function (){
var statearr_37459 = [null,null,null,null,null,null,null];
(statearr_37459[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__);

(statearr_37459[(1)] = (1));

return statearr_37459;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____1 = (function (state_37451){
while(true){
var ret_value__37183__auto__ = (function (){try{while(true){
var result__37184__auto__ = switch__37181__auto__.call(null,state_37451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37184__auto__;
}
break;
}
}catch (e37460){if((e37460 instanceof Object)){
var ex__37185__auto__ = e37460;
var statearr_37461_37606 = state_37451;
(statearr_37461_37606[(5)] = ex__37185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37607 = state_37451;
state_37451 = G__37607;
continue;
} else {
return ret_value__37183__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__ = function(state_37451){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____1.call(this,state_37451);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__;
})()
;})(__37595,switch__37181__auto__,c__37269__auto___37599,G__37438_37596,G__37438_37597__$1,n__28140__auto___37594,jobs,results,process,async))
})();
var state__37271__auto__ = (function (){var statearr_37462 = f__37270__auto__.call(null);
(statearr_37462[(6)] = c__37269__auto___37599);

return statearr_37462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37271__auto__);
});})(__37595,c__37269__auto___37599,G__37438_37596,G__37438_37597__$1,n__28140__auto___37594,jobs,results,process,async))
);


break;
case "async":
var c__37269__auto___37608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37595,c__37269__auto___37608,G__37438_37596,G__37438_37597__$1,n__28140__auto___37594,jobs,results,process,async){
return (function (){
var f__37270__auto__ = (function (){var switch__37181__auto__ = ((function (__37595,c__37269__auto___37608,G__37438_37596,G__37438_37597__$1,n__28140__auto___37594,jobs,results,process,async){
return (function (state_37475){
var state_val_37476 = (state_37475[(1)]);
if((state_val_37476 === (1))){
var state_37475__$1 = state_37475;
var statearr_37477_37609 = state_37475__$1;
(statearr_37477_37609[(2)] = null);

(statearr_37477_37609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37476 === (2))){
var state_37475__$1 = state_37475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37475__$1,(4),jobs);
} else {
if((state_val_37476 === (3))){
var inst_37473 = (state_37475[(2)]);
var state_37475__$1 = state_37475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37475__$1,inst_37473);
} else {
if((state_val_37476 === (4))){
var inst_37465 = (state_37475[(2)]);
var inst_37466 = async.call(null,inst_37465);
var state_37475__$1 = state_37475;
if(cljs.core.truth_(inst_37466)){
var statearr_37478_37610 = state_37475__$1;
(statearr_37478_37610[(1)] = (5));

} else {
var statearr_37479_37611 = state_37475__$1;
(statearr_37479_37611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37476 === (5))){
var state_37475__$1 = state_37475;
var statearr_37480_37612 = state_37475__$1;
(statearr_37480_37612[(2)] = null);

(statearr_37480_37612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37476 === (6))){
var state_37475__$1 = state_37475;
var statearr_37481_37613 = state_37475__$1;
(statearr_37481_37613[(2)] = null);

(statearr_37481_37613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37476 === (7))){
var inst_37471 = (state_37475[(2)]);
var state_37475__$1 = state_37475;
var statearr_37482_37614 = state_37475__$1;
(statearr_37482_37614[(2)] = inst_37471);

(statearr_37482_37614[(1)] = (3));


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
});})(__37595,c__37269__auto___37608,G__37438_37596,G__37438_37597__$1,n__28140__auto___37594,jobs,results,process,async))
;
return ((function (__37595,switch__37181__auto__,c__37269__auto___37608,G__37438_37596,G__37438_37597__$1,n__28140__auto___37594,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____0 = (function (){
var statearr_37483 = [null,null,null,null,null,null,null];
(statearr_37483[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__);

(statearr_37483[(1)] = (1));

return statearr_37483;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____1 = (function (state_37475){
while(true){
var ret_value__37183__auto__ = (function (){try{while(true){
var result__37184__auto__ = switch__37181__auto__.call(null,state_37475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37184__auto__;
}
break;
}
}catch (e37484){if((e37484 instanceof Object)){
var ex__37185__auto__ = e37484;
var statearr_37485_37615 = state_37475;
(statearr_37485_37615[(5)] = ex__37185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37616 = state_37475;
state_37475 = G__37616;
continue;
} else {
return ret_value__37183__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__ = function(state_37475){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____1.call(this,state_37475);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__;
})()
;})(__37595,switch__37181__auto__,c__37269__auto___37608,G__37438_37596,G__37438_37597__$1,n__28140__auto___37594,jobs,results,process,async))
})();
var state__37271__auto__ = (function (){var statearr_37486 = f__37270__auto__.call(null);
(statearr_37486[(6)] = c__37269__auto___37608);

return statearr_37486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37271__auto__);
});})(__37595,c__37269__auto___37608,G__37438_37596,G__37438_37597__$1,n__28140__auto___37594,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37438_37597__$1)].join('')));

}

var G__37617 = (__37595 + (1));
__37595 = G__37617;
continue;
} else {
}
break;
}

var c__37269__auto___37618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37269__auto___37618,jobs,results,process,async){
return (function (){
var f__37270__auto__ = (function (){var switch__37181__auto__ = ((function (c__37269__auto___37618,jobs,results,process,async){
return (function (state_37508){
var state_val_37509 = (state_37508[(1)]);
if((state_val_37509 === (1))){
var state_37508__$1 = state_37508;
var statearr_37510_37619 = state_37508__$1;
(statearr_37510_37619[(2)] = null);

(statearr_37510_37619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37509 === (2))){
var state_37508__$1 = state_37508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37508__$1,(4),from);
} else {
if((state_val_37509 === (3))){
var inst_37506 = (state_37508[(2)]);
var state_37508__$1 = state_37508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37508__$1,inst_37506);
} else {
if((state_val_37509 === (4))){
var inst_37489 = (state_37508[(7)]);
var inst_37489__$1 = (state_37508[(2)]);
var inst_37490 = (inst_37489__$1 == null);
var state_37508__$1 = (function (){var statearr_37511 = state_37508;
(statearr_37511[(7)] = inst_37489__$1);

return statearr_37511;
})();
if(cljs.core.truth_(inst_37490)){
var statearr_37512_37620 = state_37508__$1;
(statearr_37512_37620[(1)] = (5));

} else {
var statearr_37513_37621 = state_37508__$1;
(statearr_37513_37621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37509 === (5))){
var inst_37492 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37508__$1 = state_37508;
var statearr_37514_37622 = state_37508__$1;
(statearr_37514_37622[(2)] = inst_37492);

(statearr_37514_37622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37509 === (6))){
var inst_37489 = (state_37508[(7)]);
var inst_37494 = (state_37508[(8)]);
var inst_37494__$1 = cljs.core.async.chan.call(null,(1));
var inst_37495 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37496 = [inst_37489,inst_37494__$1];
var inst_37497 = (new cljs.core.PersistentVector(null,2,(5),inst_37495,inst_37496,null));
var state_37508__$1 = (function (){var statearr_37515 = state_37508;
(statearr_37515[(8)] = inst_37494__$1);

return statearr_37515;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37508__$1,(8),jobs,inst_37497);
} else {
if((state_val_37509 === (7))){
var inst_37504 = (state_37508[(2)]);
var state_37508__$1 = state_37508;
var statearr_37516_37623 = state_37508__$1;
(statearr_37516_37623[(2)] = inst_37504);

(statearr_37516_37623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37509 === (8))){
var inst_37494 = (state_37508[(8)]);
var inst_37499 = (state_37508[(2)]);
var state_37508__$1 = (function (){var statearr_37517 = state_37508;
(statearr_37517[(9)] = inst_37499);

return statearr_37517;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37508__$1,(9),results,inst_37494);
} else {
if((state_val_37509 === (9))){
var inst_37501 = (state_37508[(2)]);
var state_37508__$1 = (function (){var statearr_37518 = state_37508;
(statearr_37518[(10)] = inst_37501);

return statearr_37518;
})();
var statearr_37519_37624 = state_37508__$1;
(statearr_37519_37624[(2)] = null);

(statearr_37519_37624[(1)] = (2));


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
});})(c__37269__auto___37618,jobs,results,process,async))
;
return ((function (switch__37181__auto__,c__37269__auto___37618,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____0 = (function (){
var statearr_37520 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37520[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__);

(statearr_37520[(1)] = (1));

return statearr_37520;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____1 = (function (state_37508){
while(true){
var ret_value__37183__auto__ = (function (){try{while(true){
var result__37184__auto__ = switch__37181__auto__.call(null,state_37508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37184__auto__;
}
break;
}
}catch (e37521){if((e37521 instanceof Object)){
var ex__37185__auto__ = e37521;
var statearr_37522_37625 = state_37508;
(statearr_37522_37625[(5)] = ex__37185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37626 = state_37508;
state_37508 = G__37626;
continue;
} else {
return ret_value__37183__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__ = function(state_37508){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____1.call(this,state_37508);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__;
})()
;})(switch__37181__auto__,c__37269__auto___37618,jobs,results,process,async))
})();
var state__37271__auto__ = (function (){var statearr_37523 = f__37270__auto__.call(null);
(statearr_37523[(6)] = c__37269__auto___37618);

return statearr_37523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37271__auto__);
});})(c__37269__auto___37618,jobs,results,process,async))
);


var c__37269__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37269__auto__,jobs,results,process,async){
return (function (){
var f__37270__auto__ = (function (){var switch__37181__auto__ = ((function (c__37269__auto__,jobs,results,process,async){
return (function (state_37561){
var state_val_37562 = (state_37561[(1)]);
if((state_val_37562 === (7))){
var inst_37557 = (state_37561[(2)]);
var state_37561__$1 = state_37561;
var statearr_37563_37627 = state_37561__$1;
(statearr_37563_37627[(2)] = inst_37557);

(statearr_37563_37627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (20))){
var state_37561__$1 = state_37561;
var statearr_37564_37628 = state_37561__$1;
(statearr_37564_37628[(2)] = null);

(statearr_37564_37628[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (1))){
var state_37561__$1 = state_37561;
var statearr_37565_37629 = state_37561__$1;
(statearr_37565_37629[(2)] = null);

(statearr_37565_37629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (4))){
var inst_37526 = (state_37561[(7)]);
var inst_37526__$1 = (state_37561[(2)]);
var inst_37527 = (inst_37526__$1 == null);
var state_37561__$1 = (function (){var statearr_37566 = state_37561;
(statearr_37566[(7)] = inst_37526__$1);

return statearr_37566;
})();
if(cljs.core.truth_(inst_37527)){
var statearr_37567_37630 = state_37561__$1;
(statearr_37567_37630[(1)] = (5));

} else {
var statearr_37568_37631 = state_37561__$1;
(statearr_37568_37631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (15))){
var inst_37539 = (state_37561[(8)]);
var state_37561__$1 = state_37561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37561__$1,(18),to,inst_37539);
} else {
if((state_val_37562 === (21))){
var inst_37552 = (state_37561[(2)]);
var state_37561__$1 = state_37561;
var statearr_37569_37632 = state_37561__$1;
(statearr_37569_37632[(2)] = inst_37552);

(statearr_37569_37632[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (13))){
var inst_37554 = (state_37561[(2)]);
var state_37561__$1 = (function (){var statearr_37570 = state_37561;
(statearr_37570[(9)] = inst_37554);

return statearr_37570;
})();
var statearr_37571_37633 = state_37561__$1;
(statearr_37571_37633[(2)] = null);

(statearr_37571_37633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (6))){
var inst_37526 = (state_37561[(7)]);
var state_37561__$1 = state_37561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37561__$1,(11),inst_37526);
} else {
if((state_val_37562 === (17))){
var inst_37547 = (state_37561[(2)]);
var state_37561__$1 = state_37561;
if(cljs.core.truth_(inst_37547)){
var statearr_37572_37634 = state_37561__$1;
(statearr_37572_37634[(1)] = (19));

} else {
var statearr_37573_37635 = state_37561__$1;
(statearr_37573_37635[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (3))){
var inst_37559 = (state_37561[(2)]);
var state_37561__$1 = state_37561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37561__$1,inst_37559);
} else {
if((state_val_37562 === (12))){
var inst_37536 = (state_37561[(10)]);
var state_37561__$1 = state_37561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37561__$1,(14),inst_37536);
} else {
if((state_val_37562 === (2))){
var state_37561__$1 = state_37561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37561__$1,(4),results);
} else {
if((state_val_37562 === (19))){
var state_37561__$1 = state_37561;
var statearr_37574_37636 = state_37561__$1;
(statearr_37574_37636[(2)] = null);

(statearr_37574_37636[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (11))){
var inst_37536 = (state_37561[(2)]);
var state_37561__$1 = (function (){var statearr_37575 = state_37561;
(statearr_37575[(10)] = inst_37536);

return statearr_37575;
})();
var statearr_37576_37637 = state_37561__$1;
(statearr_37576_37637[(2)] = null);

(statearr_37576_37637[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (9))){
var state_37561__$1 = state_37561;
var statearr_37577_37638 = state_37561__$1;
(statearr_37577_37638[(2)] = null);

(statearr_37577_37638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (5))){
var state_37561__$1 = state_37561;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37578_37639 = state_37561__$1;
(statearr_37578_37639[(1)] = (8));

} else {
var statearr_37579_37640 = state_37561__$1;
(statearr_37579_37640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (14))){
var inst_37539 = (state_37561[(8)]);
var inst_37541 = (state_37561[(11)]);
var inst_37539__$1 = (state_37561[(2)]);
var inst_37540 = (inst_37539__$1 == null);
var inst_37541__$1 = cljs.core.not.call(null,inst_37540);
var state_37561__$1 = (function (){var statearr_37580 = state_37561;
(statearr_37580[(8)] = inst_37539__$1);

(statearr_37580[(11)] = inst_37541__$1);

return statearr_37580;
})();
if(inst_37541__$1){
var statearr_37581_37641 = state_37561__$1;
(statearr_37581_37641[(1)] = (15));

} else {
var statearr_37582_37642 = state_37561__$1;
(statearr_37582_37642[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (16))){
var inst_37541 = (state_37561[(11)]);
var state_37561__$1 = state_37561;
var statearr_37583_37643 = state_37561__$1;
(statearr_37583_37643[(2)] = inst_37541);

(statearr_37583_37643[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (10))){
var inst_37533 = (state_37561[(2)]);
var state_37561__$1 = state_37561;
var statearr_37584_37644 = state_37561__$1;
(statearr_37584_37644[(2)] = inst_37533);

(statearr_37584_37644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (18))){
var inst_37544 = (state_37561[(2)]);
var state_37561__$1 = state_37561;
var statearr_37585_37645 = state_37561__$1;
(statearr_37585_37645[(2)] = inst_37544);

(statearr_37585_37645[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (8))){
var inst_37530 = cljs.core.async.close_BANG_.call(null,to);
var state_37561__$1 = state_37561;
var statearr_37586_37646 = state_37561__$1;
(statearr_37586_37646[(2)] = inst_37530);

(statearr_37586_37646[(1)] = (10));


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
});})(c__37269__auto__,jobs,results,process,async))
;
return ((function (switch__37181__auto__,c__37269__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____0 = (function (){
var statearr_37587 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37587[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__);

(statearr_37587[(1)] = (1));

return statearr_37587;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____1 = (function (state_37561){
while(true){
var ret_value__37183__auto__ = (function (){try{while(true){
var result__37184__auto__ = switch__37181__auto__.call(null,state_37561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37184__auto__;
}
break;
}
}catch (e37588){if((e37588 instanceof Object)){
var ex__37185__auto__ = e37588;
var statearr_37589_37647 = state_37561;
(statearr_37589_37647[(5)] = ex__37185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37648 = state_37561;
state_37561 = G__37648;
continue;
} else {
return ret_value__37183__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__ = function(state_37561){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____1.call(this,state_37561);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37182__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37182__auto__;
})()
;})(switch__37181__auto__,c__37269__auto__,jobs,results,process,async))
})();
var state__37271__auto__ = (function (){var statearr_37590 = f__37270__auto__.call(null);
(statearr_37590[(6)] = c__37269__auto__);

return statearr_37590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37271__auto__);
});})(c__37269__auto__,jobs,results,process,async))
);

return c__37269__auto__;
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
var G__37650 = arguments.length;
switch (G__37650) {
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
var G__37653 = arguments.length;
switch (G__37653) {
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
var G__37656 = arguments.length;
switch (G__37656) {
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
var c__37269__auto___37705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37269__auto___37705,tc,fc){
return (function (){
var f__37270__auto__ = (function (){var switch__37181__auto__ = ((function (c__37269__auto___37705,tc,fc){
return (function (state_37682){
var state_val_37683 = (state_37682[(1)]);
if((state_val_37683 === (7))){
var inst_37678 = (state_37682[(2)]);
var state_37682__$1 = state_37682;
var statearr_37684_37706 = state_37682__$1;
(statearr_37684_37706[(2)] = inst_37678);

(statearr_37684_37706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37683 === (1))){
var state_37682__$1 = state_37682;
var statearr_37685_37707 = state_37682__$1;
(statearr_37685_37707[(2)] = null);

(statearr_37685_37707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37683 === (4))){
var inst_37659 = (state_37682[(7)]);
var inst_37659__$1 = (state_37682[(2)]);
var inst_37660 = (inst_37659__$1 == null);
var state_37682__$1 = (function (){var statearr_37686 = state_37682;
(statearr_37686[(7)] = inst_37659__$1);

return statearr_37686;
})();
if(cljs.core.truth_(inst_37660)){
var statearr_37687_37708 = state_37682__$1;
(statearr_37687_37708[(1)] = (5));

} else {
var statearr_37688_37709 = state_37682__$1;
(statearr_37688_37709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37683 === (13))){
var state_37682__$1 = state_37682;
var statearr_37689_37710 = state_37682__$1;
(statearr_37689_37710[(2)] = null);

(statearr_37689_37710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37683 === (6))){
var inst_37659 = (state_37682[(7)]);
var inst_37665 = p.call(null,inst_37659);
var state_37682__$1 = state_37682;
if(cljs.core.truth_(inst_37665)){
var statearr_37690_37711 = state_37682__$1;
(statearr_37690_37711[(1)] = (9));

} else {
var statearr_37691_37712 = state_37682__$1;
(statearr_37691_37712[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37683 === (3))){
var inst_37680 = (state_37682[(2)]);
var state_37682__$1 = state_37682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37682__$1,inst_37680);
} else {
if((state_val_37683 === (12))){
var state_37682__$1 = state_37682;
var statearr_37692_37713 = state_37682__$1;
(statearr_37692_37713[(2)] = null);

(statearr_37692_37713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37683 === (2))){
var state_37682__$1 = state_37682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37682__$1,(4),ch);
} else {
if((state_val_37683 === (11))){
var inst_37659 = (state_37682[(7)]);
var inst_37669 = (state_37682[(2)]);
var state_37682__$1 = state_37682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37682__$1,(8),inst_37669,inst_37659);
} else {
if((state_val_37683 === (9))){
var state_37682__$1 = state_37682;
var statearr_37693_37714 = state_37682__$1;
(statearr_37693_37714[(2)] = tc);

(statearr_37693_37714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37683 === (5))){
var inst_37662 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37663 = cljs.core.async.close_BANG_.call(null,fc);
var state_37682__$1 = (function (){var statearr_37694 = state_37682;
(statearr_37694[(8)] = inst_37662);

return statearr_37694;
})();
var statearr_37695_37715 = state_37682__$1;
(statearr_37695_37715[(2)] = inst_37663);

(statearr_37695_37715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37683 === (14))){
var inst_37676 = (state_37682[(2)]);
var state_37682__$1 = state_37682;
var statearr_37696_37716 = state_37682__$1;
(statearr_37696_37716[(2)] = inst_37676);

(statearr_37696_37716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37683 === (10))){
var state_37682__$1 = state_37682;
var statearr_37697_37717 = state_37682__$1;
(statearr_37697_37717[(2)] = fc);

(statearr_37697_37717[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37683 === (8))){
var inst_37671 = (state_37682[(2)]);
var state_37682__$1 = state_37682;
if(cljs.core.truth_(inst_37671)){
var statearr_37698_37718 = state_37682__$1;
(statearr_37698_37718[(1)] = (12));

} else {
var statearr_37699_37719 = state_37682__$1;
(statearr_37699_37719[(1)] = (13));

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
});})(c__37269__auto___37705,tc,fc))
;
return ((function (switch__37181__auto__,c__37269__auto___37705,tc,fc){
return (function() {
var cljs$core$async$state_machine__37182__auto__ = null;
var cljs$core$async$state_machine__37182__auto____0 = (function (){
var statearr_37700 = [null,null,null,null,null,null,null,null,null];
(statearr_37700[(0)] = cljs$core$async$state_machine__37182__auto__);

(statearr_37700[(1)] = (1));

return statearr_37700;
});
var cljs$core$async$state_machine__37182__auto____1 = (function (state_37682){
while(true){
var ret_value__37183__auto__ = (function (){try{while(true){
var result__37184__auto__ = switch__37181__auto__.call(null,state_37682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37184__auto__;
}
break;
}
}catch (e37701){if((e37701 instanceof Object)){
var ex__37185__auto__ = e37701;
var statearr_37702_37720 = state_37682;
(statearr_37702_37720[(5)] = ex__37185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37721 = state_37682;
state_37682 = G__37721;
continue;
} else {
return ret_value__37183__auto__;
}
break;
}
});
cljs$core$async$state_machine__37182__auto__ = function(state_37682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37182__auto____1.call(this,state_37682);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37182__auto____0;
cljs$core$async$state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37182__auto____1;
return cljs$core$async$state_machine__37182__auto__;
})()
;})(switch__37181__auto__,c__37269__auto___37705,tc,fc))
})();
var state__37271__auto__ = (function (){var statearr_37703 = f__37270__auto__.call(null);
(statearr_37703[(6)] = c__37269__auto___37705);

return statearr_37703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37271__auto__);
});})(c__37269__auto___37705,tc,fc))
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
var c__37269__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37269__auto__){
return (function (){
var f__37270__auto__ = (function (){var switch__37181__auto__ = ((function (c__37269__auto__){
return (function (state_37742){
var state_val_37743 = (state_37742[(1)]);
if((state_val_37743 === (7))){
var inst_37738 = (state_37742[(2)]);
var state_37742__$1 = state_37742;
var statearr_37744_37762 = state_37742__$1;
(statearr_37744_37762[(2)] = inst_37738);

(statearr_37744_37762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (1))){
var inst_37722 = init;
var state_37742__$1 = (function (){var statearr_37745 = state_37742;
(statearr_37745[(7)] = inst_37722);

return statearr_37745;
})();
var statearr_37746_37763 = state_37742__$1;
(statearr_37746_37763[(2)] = null);

(statearr_37746_37763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (4))){
var inst_37725 = (state_37742[(8)]);
var inst_37725__$1 = (state_37742[(2)]);
var inst_37726 = (inst_37725__$1 == null);
var state_37742__$1 = (function (){var statearr_37747 = state_37742;
(statearr_37747[(8)] = inst_37725__$1);

return statearr_37747;
})();
if(cljs.core.truth_(inst_37726)){
var statearr_37748_37764 = state_37742__$1;
(statearr_37748_37764[(1)] = (5));

} else {
var statearr_37749_37765 = state_37742__$1;
(statearr_37749_37765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (6))){
var inst_37729 = (state_37742[(9)]);
var inst_37725 = (state_37742[(8)]);
var inst_37722 = (state_37742[(7)]);
var inst_37729__$1 = f.call(null,inst_37722,inst_37725);
var inst_37730 = cljs.core.reduced_QMARK_.call(null,inst_37729__$1);
var state_37742__$1 = (function (){var statearr_37750 = state_37742;
(statearr_37750[(9)] = inst_37729__$1);

return statearr_37750;
})();
if(inst_37730){
var statearr_37751_37766 = state_37742__$1;
(statearr_37751_37766[(1)] = (8));

} else {
var statearr_37752_37767 = state_37742__$1;
(statearr_37752_37767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (3))){
var inst_37740 = (state_37742[(2)]);
var state_37742__$1 = state_37742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37742__$1,inst_37740);
} else {
if((state_val_37743 === (2))){
var state_37742__$1 = state_37742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37742__$1,(4),ch);
} else {
if((state_val_37743 === (9))){
var inst_37729 = (state_37742[(9)]);
var inst_37722 = inst_37729;
var state_37742__$1 = (function (){var statearr_37753 = state_37742;
(statearr_37753[(7)] = inst_37722);

return statearr_37753;
})();
var statearr_37754_37768 = state_37742__$1;
(statearr_37754_37768[(2)] = null);

(statearr_37754_37768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (5))){
var inst_37722 = (state_37742[(7)]);
var state_37742__$1 = state_37742;
var statearr_37755_37769 = state_37742__$1;
(statearr_37755_37769[(2)] = inst_37722);

(statearr_37755_37769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (10))){
var inst_37736 = (state_37742[(2)]);
var state_37742__$1 = state_37742;
var statearr_37756_37770 = state_37742__$1;
(statearr_37756_37770[(2)] = inst_37736);

(statearr_37756_37770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (8))){
var inst_37729 = (state_37742[(9)]);
var inst_37732 = cljs.core.deref.call(null,inst_37729);
var state_37742__$1 = state_37742;
var statearr_37757_37771 = state_37742__$1;
(statearr_37757_37771[(2)] = inst_37732);

(statearr_37757_37771[(1)] = (10));


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
});})(c__37269__auto__))
;
return ((function (switch__37181__auto__,c__37269__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__37182__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37182__auto____0 = (function (){
var statearr_37758 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37758[(0)] = cljs$core$async$reduce_$_state_machine__37182__auto__);

(statearr_37758[(1)] = (1));

return statearr_37758;
});
var cljs$core$async$reduce_$_state_machine__37182__auto____1 = (function (state_37742){
while(true){
var ret_value__37183__auto__ = (function (){try{while(true){
var result__37184__auto__ = switch__37181__auto__.call(null,state_37742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37184__auto__;
}
break;
}
}catch (e37759){if((e37759 instanceof Object)){
var ex__37185__auto__ = e37759;
var statearr_37760_37772 = state_37742;
(statearr_37760_37772[(5)] = ex__37185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37773 = state_37742;
state_37742 = G__37773;
continue;
} else {
return ret_value__37183__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37182__auto__ = function(state_37742){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37182__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37182__auto____1.call(this,state_37742);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37182__auto____0;
cljs$core$async$reduce_$_state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37182__auto____1;
return cljs$core$async$reduce_$_state_machine__37182__auto__;
})()
;})(switch__37181__auto__,c__37269__auto__))
})();
var state__37271__auto__ = (function (){var statearr_37761 = f__37270__auto__.call(null);
(statearr_37761[(6)] = c__37269__auto__);

return statearr_37761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37271__auto__);
});})(c__37269__auto__))
);

return c__37269__auto__;
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
var G__37775 = arguments.length;
switch (G__37775) {
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
var c__37269__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37269__auto__){
return (function (){
var f__37270__auto__ = (function (){var switch__37181__auto__ = ((function (c__37269__auto__){
return (function (state_37800){
var state_val_37801 = (state_37800[(1)]);
if((state_val_37801 === (7))){
var inst_37782 = (state_37800[(2)]);
var state_37800__$1 = state_37800;
var statearr_37802_37823 = state_37800__$1;
(statearr_37802_37823[(2)] = inst_37782);

(statearr_37802_37823[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37801 === (1))){
var inst_37776 = cljs.core.seq.call(null,coll);
var inst_37777 = inst_37776;
var state_37800__$1 = (function (){var statearr_37803 = state_37800;
(statearr_37803[(7)] = inst_37777);

return statearr_37803;
})();
var statearr_37804_37824 = state_37800__$1;
(statearr_37804_37824[(2)] = null);

(statearr_37804_37824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37801 === (4))){
var inst_37777 = (state_37800[(7)]);
var inst_37780 = cljs.core.first.call(null,inst_37777);
var state_37800__$1 = state_37800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37800__$1,(7),ch,inst_37780);
} else {
if((state_val_37801 === (13))){
var inst_37794 = (state_37800[(2)]);
var state_37800__$1 = state_37800;
var statearr_37805_37825 = state_37800__$1;
(statearr_37805_37825[(2)] = inst_37794);

(statearr_37805_37825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37801 === (6))){
var inst_37785 = (state_37800[(2)]);
var state_37800__$1 = state_37800;
if(cljs.core.truth_(inst_37785)){
var statearr_37806_37826 = state_37800__$1;
(statearr_37806_37826[(1)] = (8));

} else {
var statearr_37807_37827 = state_37800__$1;
(statearr_37807_37827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37801 === (3))){
var inst_37798 = (state_37800[(2)]);
var state_37800__$1 = state_37800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37800__$1,inst_37798);
} else {
if((state_val_37801 === (12))){
var state_37800__$1 = state_37800;
var statearr_37808_37828 = state_37800__$1;
(statearr_37808_37828[(2)] = null);

(statearr_37808_37828[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37801 === (2))){
var inst_37777 = (state_37800[(7)]);
var state_37800__$1 = state_37800;
if(cljs.core.truth_(inst_37777)){
var statearr_37809_37829 = state_37800__$1;
(statearr_37809_37829[(1)] = (4));

} else {
var statearr_37810_37830 = state_37800__$1;
(statearr_37810_37830[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37801 === (11))){
var inst_37791 = cljs.core.async.close_BANG_.call(null,ch);
var state_37800__$1 = state_37800;
var statearr_37811_37831 = state_37800__$1;
(statearr_37811_37831[(2)] = inst_37791);

(statearr_37811_37831[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37801 === (9))){
var state_37800__$1 = state_37800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37812_37832 = state_37800__$1;
(statearr_37812_37832[(1)] = (11));

} else {
var statearr_37813_37833 = state_37800__$1;
(statearr_37813_37833[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37801 === (5))){
var inst_37777 = (state_37800[(7)]);
var state_37800__$1 = state_37800;
var statearr_37814_37834 = state_37800__$1;
(statearr_37814_37834[(2)] = inst_37777);

(statearr_37814_37834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37801 === (10))){
var inst_37796 = (state_37800[(2)]);
var state_37800__$1 = state_37800;
var statearr_37815_37835 = state_37800__$1;
(statearr_37815_37835[(2)] = inst_37796);

(statearr_37815_37835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37801 === (8))){
var inst_37777 = (state_37800[(7)]);
var inst_37787 = cljs.core.next.call(null,inst_37777);
var inst_37777__$1 = inst_37787;
var state_37800__$1 = (function (){var statearr_37816 = state_37800;
(statearr_37816[(7)] = inst_37777__$1);

return statearr_37816;
})();
var statearr_37817_37836 = state_37800__$1;
(statearr_37817_37836[(2)] = null);

(statearr_37817_37836[(1)] = (2));


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
});})(c__37269__auto__))
;
return ((function (switch__37181__auto__,c__37269__auto__){
return (function() {
var cljs$core$async$state_machine__37182__auto__ = null;
var cljs$core$async$state_machine__37182__auto____0 = (function (){
var statearr_37818 = [null,null,null,null,null,null,null,null];
(statearr_37818[(0)] = cljs$core$async$state_machine__37182__auto__);

(statearr_37818[(1)] = (1));

return statearr_37818;
});
var cljs$core$async$state_machine__37182__auto____1 = (function (state_37800){
while(true){
var ret_value__37183__auto__ = (function (){try{while(true){
var result__37184__auto__ = switch__37181__auto__.call(null,state_37800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37184__auto__;
}
break;
}
}catch (e37819){if((e37819 instanceof Object)){
var ex__37185__auto__ = e37819;
var statearr_37820_37837 = state_37800;
(statearr_37820_37837[(5)] = ex__37185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37838 = state_37800;
state_37800 = G__37838;
continue;
} else {
return ret_value__37183__auto__;
}
break;
}
});
cljs$core$async$state_machine__37182__auto__ = function(state_37800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37182__auto____1.call(this,state_37800);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37182__auto____0;
cljs$core$async$state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37182__auto____1;
return cljs$core$async$state_machine__37182__auto__;
})()
;})(switch__37181__auto__,c__37269__auto__))
})();
var state__37271__auto__ = (function (){var statearr_37821 = f__37270__auto__.call(null);
(statearr_37821[(6)] = c__37269__auto__);

return statearr_37821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37271__auto__);
});})(c__37269__auto__))
);

return c__37269__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async37839 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37839 = (function (ch,cs,meta37840){
this.ch = ch;
this.cs = cs;
this.meta37840 = meta37840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37841,meta37840__$1){
var self__ = this;
var _37841__$1 = this;
return (new cljs.core.async.t_cljs$core$async37839(self__.ch,self__.cs,meta37840__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async37839.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37841){
var self__ = this;
var _37841__$1 = this;
return self__.meta37840;
});})(cs))
;

cljs.core.async.t_cljs$core$async37839.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37839.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async37839.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37839.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37839.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37839.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37839.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37840","meta37840",1860035361,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async37839.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37839";

cljs.core.async.t_cljs$core$async37839.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async37839");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async37839 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async37839(ch__$1,cs__$1,meta37840){
return (new cljs.core.async.t_cljs$core$async37839(ch__$1,cs__$1,meta37840));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async37839(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__37269__auto___38061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37269__auto___38061,cs,m,dchan,dctr,done){
return (function (){
var f__37270__auto__ = (function (){var switch__37181__auto__ = ((function (c__37269__auto___38061,cs,m,dchan,dctr,done){
return (function (state_37976){
var state_val_37977 = (state_37976[(1)]);
if((state_val_37977 === (7))){
var inst_37972 = (state_37976[(2)]);
var state_37976__$1 = state_37976;
var statearr_37978_38062 = state_37976__$1;
(statearr_37978_38062[(2)] = inst_37972);

(statearr_37978_38062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (20))){
var inst_37875 = (state_37976[(7)]);
var inst_37887 = cljs.core.first.call(null,inst_37875);
var inst_37888 = cljs.core.nth.call(null,inst_37887,(0),null);
var inst_37889 = cljs.core.nth.call(null,inst_37887,(1),null);
var state_37976__$1 = (function (){var statearr_37979 = state_37976;
(statearr_37979[(8)] = inst_37888);

return statearr_37979;
})();
if(cljs.core.truth_(inst_37889)){
var statearr_37980_38063 = state_37976__$1;
(statearr_37980_38063[(1)] = (22));

} else {
var statearr_37981_38064 = state_37976__$1;
(statearr_37981_38064[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (27))){
var inst_37844 = (state_37976[(9)]);
var inst_37919 = (state_37976[(10)]);
var inst_37917 = (state_37976[(11)]);
var inst_37924 = (state_37976[(12)]);
var inst_37924__$1 = cljs.core._nth.call(null,inst_37917,inst_37919);
var inst_37925 = cljs.core.async.put_BANG_.call(null,inst_37924__$1,inst_37844,done);
var state_37976__$1 = (function (){var statearr_37982 = state_37976;
(statearr_37982[(12)] = inst_37924__$1);

return statearr_37982;
})();
if(cljs.core.truth_(inst_37925)){
var statearr_37983_38065 = state_37976__$1;
(statearr_37983_38065[(1)] = (30));

} else {
var statearr_37984_38066 = state_37976__$1;
(statearr_37984_38066[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (1))){
var state_37976__$1 = state_37976;
var statearr_37985_38067 = state_37976__$1;
(statearr_37985_38067[(2)] = null);

(statearr_37985_38067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (24))){
var inst_37875 = (state_37976[(7)]);
var inst_37894 = (state_37976[(2)]);
var inst_37895 = cljs.core.next.call(null,inst_37875);
var inst_37853 = inst_37895;
var inst_37854 = null;
var inst_37855 = (0);
var inst_37856 = (0);
var state_37976__$1 = (function (){var statearr_37986 = state_37976;
(statearr_37986[(13)] = inst_37854);

(statearr_37986[(14)] = inst_37894);

(statearr_37986[(15)] = inst_37853);

(statearr_37986[(16)] = inst_37856);

(statearr_37986[(17)] = inst_37855);

return statearr_37986;
})();
var statearr_37987_38068 = state_37976__$1;
(statearr_37987_38068[(2)] = null);

(statearr_37987_38068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (39))){
var state_37976__$1 = state_37976;
var statearr_37991_38069 = state_37976__$1;
(statearr_37991_38069[(2)] = null);

(statearr_37991_38069[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (4))){
var inst_37844 = (state_37976[(9)]);
var inst_37844__$1 = (state_37976[(2)]);
var inst_37845 = (inst_37844__$1 == null);
var state_37976__$1 = (function (){var statearr_37992 = state_37976;
(statearr_37992[(9)] = inst_37844__$1);

return statearr_37992;
})();
if(cljs.core.truth_(inst_37845)){
var statearr_37993_38070 = state_37976__$1;
(statearr_37993_38070[(1)] = (5));

} else {
var statearr_37994_38071 = state_37976__$1;
(statearr_37994_38071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (15))){
var inst_37854 = (state_37976[(13)]);
var inst_37853 = (state_37976[(15)]);
var inst_37856 = (state_37976[(16)]);
var inst_37855 = (state_37976[(17)]);
var inst_37871 = (state_37976[(2)]);
var inst_37872 = (inst_37856 + (1));
var tmp37988 = inst_37854;
var tmp37989 = inst_37853;
var tmp37990 = inst_37855;
var inst_37853__$1 = tmp37989;
var inst_37854__$1 = tmp37988;
var inst_37855__$1 = tmp37990;
var inst_37856__$1 = inst_37872;
var state_37976__$1 = (function (){var statearr_37995 = state_37976;
(statearr_37995[(18)] = inst_37871);

(statearr_37995[(13)] = inst_37854__$1);

(statearr_37995[(15)] = inst_37853__$1);

(statearr_37995[(16)] = inst_37856__$1);

(statearr_37995[(17)] = inst_37855__$1);

return statearr_37995;
})();
var statearr_37996_38072 = state_37976__$1;
(statearr_37996_38072[(2)] = null);

(statearr_37996_38072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (21))){
var inst_37898 = (state_37976[(2)]);
var state_37976__$1 = state_37976;
var statearr_38000_38073 = state_37976__$1;
(statearr_38000_38073[(2)] = inst_37898);

(statearr_38000_38073[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (31))){
var inst_37924 = (state_37976[(12)]);
var inst_37928 = done.call(null,null);
var inst_37929 = cljs.core.async.untap_STAR_.call(null,m,inst_37924);
var state_37976__$1 = (function (){var statearr_38001 = state_37976;
(statearr_38001[(19)] = inst_37928);

return statearr_38001;
})();
var statearr_38002_38074 = state_37976__$1;
(statearr_38002_38074[(2)] = inst_37929);

(statearr_38002_38074[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (32))){
var inst_37919 = (state_37976[(10)]);
var inst_37918 = (state_37976[(20)]);
var inst_37916 = (state_37976[(21)]);
var inst_37917 = (state_37976[(11)]);
var inst_37931 = (state_37976[(2)]);
var inst_37932 = (inst_37919 + (1));
var tmp37997 = inst_37918;
var tmp37998 = inst_37916;
var tmp37999 = inst_37917;
var inst_37916__$1 = tmp37998;
var inst_37917__$1 = tmp37999;
var inst_37918__$1 = tmp37997;
var inst_37919__$1 = inst_37932;
var state_37976__$1 = (function (){var statearr_38003 = state_37976;
(statearr_38003[(22)] = inst_37931);

(statearr_38003[(10)] = inst_37919__$1);

(statearr_38003[(20)] = inst_37918__$1);

(statearr_38003[(21)] = inst_37916__$1);

(statearr_38003[(11)] = inst_37917__$1);

return statearr_38003;
})();
var statearr_38004_38075 = state_37976__$1;
(statearr_38004_38075[(2)] = null);

(statearr_38004_38075[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (40))){
var inst_37944 = (state_37976[(23)]);
var inst_37948 = done.call(null,null);
var inst_37949 = cljs.core.async.untap_STAR_.call(null,m,inst_37944);
var state_37976__$1 = (function (){var statearr_38005 = state_37976;
(statearr_38005[(24)] = inst_37948);

return statearr_38005;
})();
var statearr_38006_38076 = state_37976__$1;
(statearr_38006_38076[(2)] = inst_37949);

(statearr_38006_38076[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (33))){
var inst_37935 = (state_37976[(25)]);
var inst_37937 = cljs.core.chunked_seq_QMARK_.call(null,inst_37935);
var state_37976__$1 = state_37976;
if(inst_37937){
var statearr_38007_38077 = state_37976__$1;
(statearr_38007_38077[(1)] = (36));

} else {
var statearr_38008_38078 = state_37976__$1;
(statearr_38008_38078[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (13))){
var inst_37865 = (state_37976[(26)]);
var inst_37868 = cljs.core.async.close_BANG_.call(null,inst_37865);
var state_37976__$1 = state_37976;
var statearr_38009_38079 = state_37976__$1;
(statearr_38009_38079[(2)] = inst_37868);

(statearr_38009_38079[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (22))){
var inst_37888 = (state_37976[(8)]);
var inst_37891 = cljs.core.async.close_BANG_.call(null,inst_37888);
var state_37976__$1 = state_37976;
var statearr_38010_38080 = state_37976__$1;
(statearr_38010_38080[(2)] = inst_37891);

(statearr_38010_38080[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (36))){
var inst_37935 = (state_37976[(25)]);
var inst_37939 = cljs.core.chunk_first.call(null,inst_37935);
var inst_37940 = cljs.core.chunk_rest.call(null,inst_37935);
var inst_37941 = cljs.core.count.call(null,inst_37939);
var inst_37916 = inst_37940;
var inst_37917 = inst_37939;
var inst_37918 = inst_37941;
var inst_37919 = (0);
var state_37976__$1 = (function (){var statearr_38011 = state_37976;
(statearr_38011[(10)] = inst_37919);

(statearr_38011[(20)] = inst_37918);

(statearr_38011[(21)] = inst_37916);

(statearr_38011[(11)] = inst_37917);

return statearr_38011;
})();
var statearr_38012_38081 = state_37976__$1;
(statearr_38012_38081[(2)] = null);

(statearr_38012_38081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (41))){
var inst_37935 = (state_37976[(25)]);
var inst_37951 = (state_37976[(2)]);
var inst_37952 = cljs.core.next.call(null,inst_37935);
var inst_37916 = inst_37952;
var inst_37917 = null;
var inst_37918 = (0);
var inst_37919 = (0);
var state_37976__$1 = (function (){var statearr_38013 = state_37976;
(statearr_38013[(10)] = inst_37919);

(statearr_38013[(20)] = inst_37918);

(statearr_38013[(27)] = inst_37951);

(statearr_38013[(21)] = inst_37916);

(statearr_38013[(11)] = inst_37917);

return statearr_38013;
})();
var statearr_38014_38082 = state_37976__$1;
(statearr_38014_38082[(2)] = null);

(statearr_38014_38082[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (43))){
var state_37976__$1 = state_37976;
var statearr_38015_38083 = state_37976__$1;
(statearr_38015_38083[(2)] = null);

(statearr_38015_38083[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (29))){
var inst_37960 = (state_37976[(2)]);
var state_37976__$1 = state_37976;
var statearr_38016_38084 = state_37976__$1;
(statearr_38016_38084[(2)] = inst_37960);

(statearr_38016_38084[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (44))){
var inst_37969 = (state_37976[(2)]);
var state_37976__$1 = (function (){var statearr_38017 = state_37976;
(statearr_38017[(28)] = inst_37969);

return statearr_38017;
})();
var statearr_38018_38085 = state_37976__$1;
(statearr_38018_38085[(2)] = null);

(statearr_38018_38085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (6))){
var inst_37908 = (state_37976[(29)]);
var inst_37907 = cljs.core.deref.call(null,cs);
var inst_37908__$1 = cljs.core.keys.call(null,inst_37907);
var inst_37909 = cljs.core.count.call(null,inst_37908__$1);
var inst_37910 = cljs.core.reset_BANG_.call(null,dctr,inst_37909);
var inst_37915 = cljs.core.seq.call(null,inst_37908__$1);
var inst_37916 = inst_37915;
var inst_37917 = null;
var inst_37918 = (0);
var inst_37919 = (0);
var state_37976__$1 = (function (){var statearr_38019 = state_37976;
(statearr_38019[(29)] = inst_37908__$1);

(statearr_38019[(30)] = inst_37910);

(statearr_38019[(10)] = inst_37919);

(statearr_38019[(20)] = inst_37918);

(statearr_38019[(21)] = inst_37916);

(statearr_38019[(11)] = inst_37917);

return statearr_38019;
})();
var statearr_38020_38086 = state_37976__$1;
(statearr_38020_38086[(2)] = null);

(statearr_38020_38086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (28))){
var inst_37935 = (state_37976[(25)]);
var inst_37916 = (state_37976[(21)]);
var inst_37935__$1 = cljs.core.seq.call(null,inst_37916);
var state_37976__$1 = (function (){var statearr_38021 = state_37976;
(statearr_38021[(25)] = inst_37935__$1);

return statearr_38021;
})();
if(inst_37935__$1){
var statearr_38022_38087 = state_37976__$1;
(statearr_38022_38087[(1)] = (33));

} else {
var statearr_38023_38088 = state_37976__$1;
(statearr_38023_38088[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (25))){
var inst_37919 = (state_37976[(10)]);
var inst_37918 = (state_37976[(20)]);
var inst_37921 = (inst_37919 < inst_37918);
var inst_37922 = inst_37921;
var state_37976__$1 = state_37976;
if(cljs.core.truth_(inst_37922)){
var statearr_38024_38089 = state_37976__$1;
(statearr_38024_38089[(1)] = (27));

} else {
var statearr_38025_38090 = state_37976__$1;
(statearr_38025_38090[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (34))){
var state_37976__$1 = state_37976;
var statearr_38026_38091 = state_37976__$1;
(statearr_38026_38091[(2)] = null);

(statearr_38026_38091[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (17))){
var state_37976__$1 = state_37976;
var statearr_38027_38092 = state_37976__$1;
(statearr_38027_38092[(2)] = null);

(statearr_38027_38092[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (3))){
var inst_37974 = (state_37976[(2)]);
var state_37976__$1 = state_37976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37976__$1,inst_37974);
} else {
if((state_val_37977 === (12))){
var inst_37903 = (state_37976[(2)]);
var state_37976__$1 = state_37976;
var statearr_38028_38093 = state_37976__$1;
(statearr_38028_38093[(2)] = inst_37903);

(statearr_38028_38093[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (2))){
var state_37976__$1 = state_37976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37976__$1,(4),ch);
} else {
if((state_val_37977 === (23))){
var state_37976__$1 = state_37976;
var statearr_38029_38094 = state_37976__$1;
(statearr_38029_38094[(2)] = null);

(statearr_38029_38094[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (35))){
var inst_37958 = (state_37976[(2)]);
var state_37976__$1 = state_37976;
var statearr_38030_38095 = state_37976__$1;
(statearr_38030_38095[(2)] = inst_37958);

(statearr_38030_38095[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (19))){
var inst_37875 = (state_37976[(7)]);
var inst_37879 = cljs.core.chunk_first.call(null,inst_37875);
var inst_37880 = cljs.core.chunk_rest.call(null,inst_37875);
var inst_37881 = cljs.core.count.call(null,inst_37879);
var inst_37853 = inst_37880;
var inst_37854 = inst_37879;
var inst_37855 = inst_37881;
var inst_37856 = (0);
var state_37976__$1 = (function (){var statearr_38031 = state_37976;
(statearr_38031[(13)] = inst_37854);

(statearr_38031[(15)] = inst_37853);

(statearr_38031[(16)] = inst_37856);

(statearr_38031[(17)] = inst_37855);

return statearr_38031;
})();
var statearr_38032_38096 = state_37976__$1;
(statearr_38032_38096[(2)] = null);

(statearr_38032_38096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (11))){
var inst_37853 = (state_37976[(15)]);
var inst_37875 = (state_37976[(7)]);
var inst_37875__$1 = cljs.core.seq.call(null,inst_37853);
var state_37976__$1 = (function (){var statearr_38033 = state_37976;
(statearr_38033[(7)] = inst_37875__$1);

return statearr_38033;
})();
if(inst_37875__$1){
var statearr_38034_38097 = state_37976__$1;
(statearr_38034_38097[(1)] = (16));

} else {
var statearr_38035_38098 = state_37976__$1;
(statearr_38035_38098[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (9))){
var inst_37905 = (state_37976[(2)]);
var state_37976__$1 = state_37976;
var statearr_38036_38099 = state_37976__$1;
(statearr_38036_38099[(2)] = inst_37905);

(statearr_38036_38099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (5))){
var inst_37851 = cljs.core.deref.call(null,cs);
var inst_37852 = cljs.core.seq.call(null,inst_37851);
var inst_37853 = inst_37852;
var inst_37854 = null;
var inst_37855 = (0);
var inst_37856 = (0);
var state_37976__$1 = (function (){var statearr_38037 = state_37976;
(statearr_38037[(13)] = inst_37854);

(statearr_38037[(15)] = inst_37853);

(statearr_38037[(16)] = inst_37856);

(statearr_38037[(17)] = inst_37855);

return statearr_38037;
})();
var statearr_38038_38100 = state_37976__$1;
(statearr_38038_38100[(2)] = null);

(statearr_38038_38100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (14))){
var state_37976__$1 = state_37976;
var statearr_38039_38101 = state_37976__$1;
(statearr_38039_38101[(2)] = null);

(statearr_38039_38101[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (45))){
var inst_37966 = (state_37976[(2)]);
var state_37976__$1 = state_37976;
var statearr_38040_38102 = state_37976__$1;
(statearr_38040_38102[(2)] = inst_37966);

(statearr_38040_38102[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (26))){
var inst_37908 = (state_37976[(29)]);
var inst_37962 = (state_37976[(2)]);
var inst_37963 = cljs.core.seq.call(null,inst_37908);
var state_37976__$1 = (function (){var statearr_38041 = state_37976;
(statearr_38041[(31)] = inst_37962);

return statearr_38041;
})();
if(inst_37963){
var statearr_38042_38103 = state_37976__$1;
(statearr_38042_38103[(1)] = (42));

} else {
var statearr_38043_38104 = state_37976__$1;
(statearr_38043_38104[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (16))){
var inst_37875 = (state_37976[(7)]);
var inst_37877 = cljs.core.chunked_seq_QMARK_.call(null,inst_37875);
var state_37976__$1 = state_37976;
if(inst_37877){
var statearr_38044_38105 = state_37976__$1;
(statearr_38044_38105[(1)] = (19));

} else {
var statearr_38045_38106 = state_37976__$1;
(statearr_38045_38106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (38))){
var inst_37955 = (state_37976[(2)]);
var state_37976__$1 = state_37976;
var statearr_38046_38107 = state_37976__$1;
(statearr_38046_38107[(2)] = inst_37955);

(statearr_38046_38107[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (30))){
var state_37976__$1 = state_37976;
var statearr_38047_38108 = state_37976__$1;
(statearr_38047_38108[(2)] = null);

(statearr_38047_38108[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (10))){
var inst_37854 = (state_37976[(13)]);
var inst_37856 = (state_37976[(16)]);
var inst_37864 = cljs.core._nth.call(null,inst_37854,inst_37856);
var inst_37865 = cljs.core.nth.call(null,inst_37864,(0),null);
var inst_37866 = cljs.core.nth.call(null,inst_37864,(1),null);
var state_37976__$1 = (function (){var statearr_38048 = state_37976;
(statearr_38048[(26)] = inst_37865);

return statearr_38048;
})();
if(cljs.core.truth_(inst_37866)){
var statearr_38049_38109 = state_37976__$1;
(statearr_38049_38109[(1)] = (13));

} else {
var statearr_38050_38110 = state_37976__$1;
(statearr_38050_38110[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (18))){
var inst_37901 = (state_37976[(2)]);
var state_37976__$1 = state_37976;
var statearr_38051_38111 = state_37976__$1;
(statearr_38051_38111[(2)] = inst_37901);

(statearr_38051_38111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (42))){
var state_37976__$1 = state_37976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37976__$1,(45),dchan);
} else {
if((state_val_37977 === (37))){
var inst_37844 = (state_37976[(9)]);
var inst_37944 = (state_37976[(23)]);
var inst_37935 = (state_37976[(25)]);
var inst_37944__$1 = cljs.core.first.call(null,inst_37935);
var inst_37945 = cljs.core.async.put_BANG_.call(null,inst_37944__$1,inst_37844,done);
var state_37976__$1 = (function (){var statearr_38052 = state_37976;
(statearr_38052[(23)] = inst_37944__$1);

return statearr_38052;
})();
if(cljs.core.truth_(inst_37945)){
var statearr_38053_38112 = state_37976__$1;
(statearr_38053_38112[(1)] = (39));

} else {
var statearr_38054_38113 = state_37976__$1;
(statearr_38054_38113[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (8))){
var inst_37856 = (state_37976[(16)]);
var inst_37855 = (state_37976[(17)]);
var inst_37858 = (inst_37856 < inst_37855);
var inst_37859 = inst_37858;
var state_37976__$1 = state_37976;
if(cljs.core.truth_(inst_37859)){
var statearr_38055_38114 = state_37976__$1;
(statearr_38055_38114[(1)] = (10));

} else {
var statearr_38056_38115 = state_37976__$1;
(statearr_38056_38115[(1)] = (11));

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
});})(c__37269__auto___38061,cs,m,dchan,dctr,done))
;
return ((function (switch__37181__auto__,c__37269__auto___38061,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37182__auto__ = null;
var cljs$core$async$mult_$_state_machine__37182__auto____0 = (function (){
var statearr_38057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38057[(0)] = cljs$core$async$mult_$_state_machine__37182__auto__);

(statearr_38057[(1)] = (1));

return statearr_38057;
});
var cljs$core$async$mult_$_state_machine__37182__auto____1 = (function (state_37976){
while(true){
var ret_value__37183__auto__ = (function (){try{while(true){
var result__37184__auto__ = switch__37181__auto__.call(null,state_37976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37184__auto__;
}
break;
}
}catch (e38058){if((e38058 instanceof Object)){
var ex__37185__auto__ = e38058;
var statearr_38059_38116 = state_37976;
(statearr_38059_38116[(5)] = ex__37185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38117 = state_37976;
state_37976 = G__38117;
continue;
} else {
return ret_value__37183__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37182__auto__ = function(state_37976){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37182__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37182__auto____1.call(this,state_37976);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37182__auto____0;
cljs$core$async$mult_$_state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37182__auto____1;
return cljs$core$async$mult_$_state_machine__37182__auto__;
})()
;})(switch__37181__auto__,c__37269__auto___38061,cs,m,dchan,dctr,done))
})();
var state__37271__auto__ = (function (){var statearr_38060 = f__37270__auto__.call(null);
(statearr_38060[(6)] = c__37269__auto___38061);

return statearr_38060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37271__auto__);
});})(c__37269__auto___38061,cs,m,dchan,dctr,done))
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
var G__38119 = arguments.length;
switch (G__38119) {
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
var len__28364__auto___38131 = arguments.length;
var i__28365__auto___38132 = (0);
while(true){
if((i__28365__auto___38132 < len__28364__auto___38131)){
args__28371__auto__.push((arguments[i__28365__auto___38132]));

var G__38133 = (i__28365__auto___38132 + (1));
i__28365__auto___38132 = G__38133;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38125){
var map__38126 = p__38125;
var map__38126__$1 = ((((!((map__38126 == null)))?((((map__38126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38126):map__38126);
var opts = map__38126__$1;
var statearr_38128_38134 = state;
(statearr_38128_38134[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__38126,map__38126__$1,opts){
return (function (val){
var statearr_38129_38135 = state;
(statearr_38129_38135[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38126,map__38126__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_38130_38136 = state;
(statearr_38130_38136[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38121){
var G__38122 = cljs.core.first.call(null,seq38121);
var seq38121__$1 = cljs.core.next.call(null,seq38121);
var G__38123 = cljs.core.first.call(null,seq38121__$1);
var seq38121__$2 = cljs.core.next.call(null,seq38121__$1);
var G__38124 = cljs.core.first.call(null,seq38121__$2);
var seq38121__$3 = cljs.core.next.call(null,seq38121__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38122,G__38123,G__38124,seq38121__$3);
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
if(typeof cljs.core.async.t_cljs$core$async38137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38137 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta38138){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta38138 = meta38138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38139,meta38138__$1){
var self__ = this;
var _38139__$1 = this;
return (new cljs.core.async.t_cljs$core$async38137(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta38138__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38139){
var self__ = this;
var _38139__$1 = this;
return self__.meta38138;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38137.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38137.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38137.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38137.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38137.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38137.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38137.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38137.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async38137.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta38138","meta38138",-2133977150,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38137";

cljs.core.async.t_cljs$core$async38137.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async38137");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async38137 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async38137(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta38138){
return (new cljs.core.async.t_cljs$core$async38137(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta38138));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async38137(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37269__auto___38301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37269__auto___38301,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__37270__auto__ = (function (){var switch__37181__auto__ = ((function (c__37269__auto___38301,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38241){
var state_val_38242 = (state_38241[(1)]);
if((state_val_38242 === (7))){
var inst_38156 = (state_38241[(2)]);
var state_38241__$1 = state_38241;
var statearr_38243_38302 = state_38241__$1;
(statearr_38243_38302[(2)] = inst_38156);

(statearr_38243_38302[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (20))){
var inst_38168 = (state_38241[(7)]);
var state_38241__$1 = state_38241;
var statearr_38244_38303 = state_38241__$1;
(statearr_38244_38303[(2)] = inst_38168);

(statearr_38244_38303[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (27))){
var state_38241__$1 = state_38241;
var statearr_38245_38304 = state_38241__$1;
(statearr_38245_38304[(2)] = null);

(statearr_38245_38304[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (1))){
var inst_38143 = (state_38241[(8)]);
var inst_38143__$1 = calc_state.call(null);
var inst_38145 = (inst_38143__$1 == null);
var inst_38146 = cljs.core.not.call(null,inst_38145);
var state_38241__$1 = (function (){var statearr_38246 = state_38241;
(statearr_38246[(8)] = inst_38143__$1);

return statearr_38246;
})();
if(inst_38146){
var statearr_38247_38305 = state_38241__$1;
(statearr_38247_38305[(1)] = (2));

} else {
var statearr_38248_38306 = state_38241__$1;
(statearr_38248_38306[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (24))){
var inst_38215 = (state_38241[(9)]);
var inst_38201 = (state_38241[(10)]);
var inst_38192 = (state_38241[(11)]);
var inst_38215__$1 = inst_38192.call(null,inst_38201);
var state_38241__$1 = (function (){var statearr_38249 = state_38241;
(statearr_38249[(9)] = inst_38215__$1);

return statearr_38249;
})();
if(cljs.core.truth_(inst_38215__$1)){
var statearr_38250_38307 = state_38241__$1;
(statearr_38250_38307[(1)] = (29));

} else {
var statearr_38251_38308 = state_38241__$1;
(statearr_38251_38308[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (4))){
var inst_38159 = (state_38241[(2)]);
var state_38241__$1 = state_38241;
if(cljs.core.truth_(inst_38159)){
var statearr_38252_38309 = state_38241__$1;
(statearr_38252_38309[(1)] = (8));

} else {
var statearr_38253_38310 = state_38241__$1;
(statearr_38253_38310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (15))){
var inst_38186 = (state_38241[(2)]);
var state_38241__$1 = state_38241;
if(cljs.core.truth_(inst_38186)){
var statearr_38254_38311 = state_38241__$1;
(statearr_38254_38311[(1)] = (19));

} else {
var statearr_38255_38312 = state_38241__$1;
(statearr_38255_38312[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (21))){
var inst_38191 = (state_38241[(12)]);
var inst_38191__$1 = (state_38241[(2)]);
var inst_38192 = cljs.core.get.call(null,inst_38191__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38193 = cljs.core.get.call(null,inst_38191__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38194 = cljs.core.get.call(null,inst_38191__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38241__$1 = (function (){var statearr_38256 = state_38241;
(statearr_38256[(12)] = inst_38191__$1);

(statearr_38256[(13)] = inst_38193);

(statearr_38256[(11)] = inst_38192);

return statearr_38256;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38241__$1,(22),inst_38194);
} else {
if((state_val_38242 === (31))){
var inst_38223 = (state_38241[(2)]);
var state_38241__$1 = state_38241;
if(cljs.core.truth_(inst_38223)){
var statearr_38257_38313 = state_38241__$1;
(statearr_38257_38313[(1)] = (32));

} else {
var statearr_38258_38314 = state_38241__$1;
(statearr_38258_38314[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (32))){
var inst_38200 = (state_38241[(14)]);
var state_38241__$1 = state_38241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38241__$1,(35),out,inst_38200);
} else {
if((state_val_38242 === (33))){
var inst_38191 = (state_38241[(12)]);
var inst_38168 = inst_38191;
var state_38241__$1 = (function (){var statearr_38259 = state_38241;
(statearr_38259[(7)] = inst_38168);

return statearr_38259;
})();
var statearr_38260_38315 = state_38241__$1;
(statearr_38260_38315[(2)] = null);

(statearr_38260_38315[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (13))){
var inst_38168 = (state_38241[(7)]);
var inst_38175 = inst_38168.cljs$lang$protocol_mask$partition0$;
var inst_38176 = (inst_38175 & (64));
var inst_38177 = inst_38168.cljs$core$ISeq$;
var inst_38178 = (cljs.core.PROTOCOL_SENTINEL === inst_38177);
var inst_38179 = (inst_38176) || (inst_38178);
var state_38241__$1 = state_38241;
if(cljs.core.truth_(inst_38179)){
var statearr_38261_38316 = state_38241__$1;
(statearr_38261_38316[(1)] = (16));

} else {
var statearr_38262_38317 = state_38241__$1;
(statearr_38262_38317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (22))){
var inst_38200 = (state_38241[(14)]);
var inst_38201 = (state_38241[(10)]);
var inst_38199 = (state_38241[(2)]);
var inst_38200__$1 = cljs.core.nth.call(null,inst_38199,(0),null);
var inst_38201__$1 = cljs.core.nth.call(null,inst_38199,(1),null);
var inst_38202 = (inst_38200__$1 == null);
var inst_38203 = cljs.core._EQ_.call(null,inst_38201__$1,change);
var inst_38204 = (inst_38202) || (inst_38203);
var state_38241__$1 = (function (){var statearr_38263 = state_38241;
(statearr_38263[(14)] = inst_38200__$1);

(statearr_38263[(10)] = inst_38201__$1);

return statearr_38263;
})();
if(cljs.core.truth_(inst_38204)){
var statearr_38264_38318 = state_38241__$1;
(statearr_38264_38318[(1)] = (23));

} else {
var statearr_38265_38319 = state_38241__$1;
(statearr_38265_38319[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (36))){
var inst_38191 = (state_38241[(12)]);
var inst_38168 = inst_38191;
var state_38241__$1 = (function (){var statearr_38266 = state_38241;
(statearr_38266[(7)] = inst_38168);

return statearr_38266;
})();
var statearr_38267_38320 = state_38241__$1;
(statearr_38267_38320[(2)] = null);

(statearr_38267_38320[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (29))){
var inst_38215 = (state_38241[(9)]);
var state_38241__$1 = state_38241;
var statearr_38268_38321 = state_38241__$1;
(statearr_38268_38321[(2)] = inst_38215);

(statearr_38268_38321[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (6))){
var state_38241__$1 = state_38241;
var statearr_38269_38322 = state_38241__$1;
(statearr_38269_38322[(2)] = false);

(statearr_38269_38322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (28))){
var inst_38211 = (state_38241[(2)]);
var inst_38212 = calc_state.call(null);
var inst_38168 = inst_38212;
var state_38241__$1 = (function (){var statearr_38270 = state_38241;
(statearr_38270[(7)] = inst_38168);

(statearr_38270[(15)] = inst_38211);

return statearr_38270;
})();
var statearr_38271_38323 = state_38241__$1;
(statearr_38271_38323[(2)] = null);

(statearr_38271_38323[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (25))){
var inst_38237 = (state_38241[(2)]);
var state_38241__$1 = state_38241;
var statearr_38272_38324 = state_38241__$1;
(statearr_38272_38324[(2)] = inst_38237);

(statearr_38272_38324[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (34))){
var inst_38235 = (state_38241[(2)]);
var state_38241__$1 = state_38241;
var statearr_38273_38325 = state_38241__$1;
(statearr_38273_38325[(2)] = inst_38235);

(statearr_38273_38325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (17))){
var state_38241__$1 = state_38241;
var statearr_38274_38326 = state_38241__$1;
(statearr_38274_38326[(2)] = false);

(statearr_38274_38326[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (3))){
var state_38241__$1 = state_38241;
var statearr_38275_38327 = state_38241__$1;
(statearr_38275_38327[(2)] = false);

(statearr_38275_38327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (12))){
var inst_38239 = (state_38241[(2)]);
var state_38241__$1 = state_38241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38241__$1,inst_38239);
} else {
if((state_val_38242 === (2))){
var inst_38143 = (state_38241[(8)]);
var inst_38148 = inst_38143.cljs$lang$protocol_mask$partition0$;
var inst_38149 = (inst_38148 & (64));
var inst_38150 = inst_38143.cljs$core$ISeq$;
var inst_38151 = (cljs.core.PROTOCOL_SENTINEL === inst_38150);
var inst_38152 = (inst_38149) || (inst_38151);
var state_38241__$1 = state_38241;
if(cljs.core.truth_(inst_38152)){
var statearr_38276_38328 = state_38241__$1;
(statearr_38276_38328[(1)] = (5));

} else {
var statearr_38277_38329 = state_38241__$1;
(statearr_38277_38329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (23))){
var inst_38200 = (state_38241[(14)]);
var inst_38206 = (inst_38200 == null);
var state_38241__$1 = state_38241;
if(cljs.core.truth_(inst_38206)){
var statearr_38278_38330 = state_38241__$1;
(statearr_38278_38330[(1)] = (26));

} else {
var statearr_38279_38331 = state_38241__$1;
(statearr_38279_38331[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (35))){
var inst_38226 = (state_38241[(2)]);
var state_38241__$1 = state_38241;
if(cljs.core.truth_(inst_38226)){
var statearr_38280_38332 = state_38241__$1;
(statearr_38280_38332[(1)] = (36));

} else {
var statearr_38281_38333 = state_38241__$1;
(statearr_38281_38333[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (19))){
var inst_38168 = (state_38241[(7)]);
var inst_38188 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38168);
var state_38241__$1 = state_38241;
var statearr_38282_38334 = state_38241__$1;
(statearr_38282_38334[(2)] = inst_38188);

(statearr_38282_38334[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (11))){
var inst_38168 = (state_38241[(7)]);
var inst_38172 = (inst_38168 == null);
var inst_38173 = cljs.core.not.call(null,inst_38172);
var state_38241__$1 = state_38241;
if(inst_38173){
var statearr_38283_38335 = state_38241__$1;
(statearr_38283_38335[(1)] = (13));

} else {
var statearr_38284_38336 = state_38241__$1;
(statearr_38284_38336[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (9))){
var inst_38143 = (state_38241[(8)]);
var state_38241__$1 = state_38241;
var statearr_38285_38337 = state_38241__$1;
(statearr_38285_38337[(2)] = inst_38143);

(statearr_38285_38337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (5))){
var state_38241__$1 = state_38241;
var statearr_38286_38338 = state_38241__$1;
(statearr_38286_38338[(2)] = true);

(statearr_38286_38338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (14))){
var state_38241__$1 = state_38241;
var statearr_38287_38339 = state_38241__$1;
(statearr_38287_38339[(2)] = false);

(statearr_38287_38339[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (26))){
var inst_38201 = (state_38241[(10)]);
var inst_38208 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38201);
var state_38241__$1 = state_38241;
var statearr_38288_38340 = state_38241__$1;
(statearr_38288_38340[(2)] = inst_38208);

(statearr_38288_38340[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (16))){
var state_38241__$1 = state_38241;
var statearr_38289_38341 = state_38241__$1;
(statearr_38289_38341[(2)] = true);

(statearr_38289_38341[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (38))){
var inst_38231 = (state_38241[(2)]);
var state_38241__$1 = state_38241;
var statearr_38290_38342 = state_38241__$1;
(statearr_38290_38342[(2)] = inst_38231);

(statearr_38290_38342[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (30))){
var inst_38193 = (state_38241[(13)]);
var inst_38201 = (state_38241[(10)]);
var inst_38192 = (state_38241[(11)]);
var inst_38218 = cljs.core.empty_QMARK_.call(null,inst_38192);
var inst_38219 = inst_38193.call(null,inst_38201);
var inst_38220 = cljs.core.not.call(null,inst_38219);
var inst_38221 = (inst_38218) && (inst_38220);
var state_38241__$1 = state_38241;
var statearr_38291_38343 = state_38241__$1;
(statearr_38291_38343[(2)] = inst_38221);

(statearr_38291_38343[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (10))){
var inst_38143 = (state_38241[(8)]);
var inst_38164 = (state_38241[(2)]);
var inst_38165 = cljs.core.get.call(null,inst_38164,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38166 = cljs.core.get.call(null,inst_38164,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38167 = cljs.core.get.call(null,inst_38164,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38168 = inst_38143;
var state_38241__$1 = (function (){var statearr_38292 = state_38241;
(statearr_38292[(7)] = inst_38168);

(statearr_38292[(16)] = inst_38167);

(statearr_38292[(17)] = inst_38166);

(statearr_38292[(18)] = inst_38165);

return statearr_38292;
})();
var statearr_38293_38344 = state_38241__$1;
(statearr_38293_38344[(2)] = null);

(statearr_38293_38344[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (18))){
var inst_38183 = (state_38241[(2)]);
var state_38241__$1 = state_38241;
var statearr_38294_38345 = state_38241__$1;
(statearr_38294_38345[(2)] = inst_38183);

(statearr_38294_38345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (37))){
var state_38241__$1 = state_38241;
var statearr_38295_38346 = state_38241__$1;
(statearr_38295_38346[(2)] = null);

(statearr_38295_38346[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38242 === (8))){
var inst_38143 = (state_38241[(8)]);
var inst_38161 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38143);
var state_38241__$1 = state_38241;
var statearr_38296_38347 = state_38241__$1;
(statearr_38296_38347[(2)] = inst_38161);

(statearr_38296_38347[(1)] = (10));


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
});})(c__37269__auto___38301,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37181__auto__,c__37269__auto___38301,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37182__auto__ = null;
var cljs$core$async$mix_$_state_machine__37182__auto____0 = (function (){
var statearr_38297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38297[(0)] = cljs$core$async$mix_$_state_machine__37182__auto__);

(statearr_38297[(1)] = (1));

return statearr_38297;
});
var cljs$core$async$mix_$_state_machine__37182__auto____1 = (function (state_38241){
while(true){
var ret_value__37183__auto__ = (function (){try{while(true){
var result__37184__auto__ = switch__37181__auto__.call(null,state_38241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37184__auto__;
}
break;
}
}catch (e38298){if((e38298 instanceof Object)){
var ex__37185__auto__ = e38298;
var statearr_38299_38348 = state_38241;
(statearr_38299_38348[(5)] = ex__37185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38349 = state_38241;
state_38241 = G__38349;
continue;
} else {
return ret_value__37183__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37182__auto__ = function(state_38241){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37182__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37182__auto____1.call(this,state_38241);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37182__auto____0;
cljs$core$async$mix_$_state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37182__auto____1;
return cljs$core$async$mix_$_state_machine__37182__auto__;
})()
;})(switch__37181__auto__,c__37269__auto___38301,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__37271__auto__ = (function (){var statearr_38300 = f__37270__auto__.call(null);
(statearr_38300[(6)] = c__37269__auto___38301);

return statearr_38300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37271__auto__);
});})(c__37269__auto___38301,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__38351 = arguments.length;
switch (G__38351) {
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
var G__38355 = arguments.length;
switch (G__38355) {
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
return (function (p1__38353_SHARP_){
if(cljs.core.truth_(p1__38353_SHARP_.call(null,topic))){
return p1__38353_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38353_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27195__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async38356 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38356 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38357){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38357 = meta38357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38358,meta38357__$1){
var self__ = this;
var _38358__$1 = this;
return (new cljs.core.async.t_cljs$core$async38356(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38357__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38356.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38358){
var self__ = this;
var _38358__$1 = this;
return self__.meta38357;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38356.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38356.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38356.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38356.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38356.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async38356.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38356.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38356.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38357","meta38357",-1042405843,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38356.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38356";

cljs.core.async.t_cljs$core$async38356.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async38356");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async38356 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async38356(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38357){
return (new cljs.core.async.t_cljs$core$async38356(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38357));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async38356(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37269__auto___38476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37269__auto___38476,mults,ensure_mult,p){
return (function (){
var f__37270__auto__ = (function (){var switch__37181__auto__ = ((function (c__37269__auto___38476,mults,ensure_mult,p){
return (function (state_38430){
var state_val_38431 = (state_38430[(1)]);
if((state_val_38431 === (7))){
var inst_38426 = (state_38430[(2)]);
var state_38430__$1 = state_38430;
var statearr_38432_38477 = state_38430__$1;
(statearr_38432_38477[(2)] = inst_38426);

(statearr_38432_38477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (20))){
var state_38430__$1 = state_38430;
var statearr_38433_38478 = state_38430__$1;
(statearr_38433_38478[(2)] = null);

(statearr_38433_38478[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (1))){
var state_38430__$1 = state_38430;
var statearr_38434_38479 = state_38430__$1;
(statearr_38434_38479[(2)] = null);

(statearr_38434_38479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (24))){
var inst_38409 = (state_38430[(7)]);
var inst_38418 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38409);
var state_38430__$1 = state_38430;
var statearr_38435_38480 = state_38430__$1;
(statearr_38435_38480[(2)] = inst_38418);

(statearr_38435_38480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (4))){
var inst_38361 = (state_38430[(8)]);
var inst_38361__$1 = (state_38430[(2)]);
var inst_38362 = (inst_38361__$1 == null);
var state_38430__$1 = (function (){var statearr_38436 = state_38430;
(statearr_38436[(8)] = inst_38361__$1);

return statearr_38436;
})();
if(cljs.core.truth_(inst_38362)){
var statearr_38437_38481 = state_38430__$1;
(statearr_38437_38481[(1)] = (5));

} else {
var statearr_38438_38482 = state_38430__$1;
(statearr_38438_38482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (15))){
var inst_38403 = (state_38430[(2)]);
var state_38430__$1 = state_38430;
var statearr_38439_38483 = state_38430__$1;
(statearr_38439_38483[(2)] = inst_38403);

(statearr_38439_38483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (21))){
var inst_38423 = (state_38430[(2)]);
var state_38430__$1 = (function (){var statearr_38440 = state_38430;
(statearr_38440[(9)] = inst_38423);

return statearr_38440;
})();
var statearr_38441_38484 = state_38430__$1;
(statearr_38441_38484[(2)] = null);

(statearr_38441_38484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (13))){
var inst_38385 = (state_38430[(10)]);
var inst_38387 = cljs.core.chunked_seq_QMARK_.call(null,inst_38385);
var state_38430__$1 = state_38430;
if(inst_38387){
var statearr_38442_38485 = state_38430__$1;
(statearr_38442_38485[(1)] = (16));

} else {
var statearr_38443_38486 = state_38430__$1;
(statearr_38443_38486[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (22))){
var inst_38415 = (state_38430[(2)]);
var state_38430__$1 = state_38430;
if(cljs.core.truth_(inst_38415)){
var statearr_38444_38487 = state_38430__$1;
(statearr_38444_38487[(1)] = (23));

} else {
var statearr_38445_38488 = state_38430__$1;
(statearr_38445_38488[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (6))){
var inst_38361 = (state_38430[(8)]);
var inst_38409 = (state_38430[(7)]);
var inst_38411 = (state_38430[(11)]);
var inst_38409__$1 = topic_fn.call(null,inst_38361);
var inst_38410 = cljs.core.deref.call(null,mults);
var inst_38411__$1 = cljs.core.get.call(null,inst_38410,inst_38409__$1);
var state_38430__$1 = (function (){var statearr_38446 = state_38430;
(statearr_38446[(7)] = inst_38409__$1);

(statearr_38446[(11)] = inst_38411__$1);

return statearr_38446;
})();
if(cljs.core.truth_(inst_38411__$1)){
var statearr_38447_38489 = state_38430__$1;
(statearr_38447_38489[(1)] = (19));

} else {
var statearr_38448_38490 = state_38430__$1;
(statearr_38448_38490[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (25))){
var inst_38420 = (state_38430[(2)]);
var state_38430__$1 = state_38430;
var statearr_38449_38491 = state_38430__$1;
(statearr_38449_38491[(2)] = inst_38420);

(statearr_38449_38491[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (17))){
var inst_38385 = (state_38430[(10)]);
var inst_38394 = cljs.core.first.call(null,inst_38385);
var inst_38395 = cljs.core.async.muxch_STAR_.call(null,inst_38394);
var inst_38396 = cljs.core.async.close_BANG_.call(null,inst_38395);
var inst_38397 = cljs.core.next.call(null,inst_38385);
var inst_38371 = inst_38397;
var inst_38372 = null;
var inst_38373 = (0);
var inst_38374 = (0);
var state_38430__$1 = (function (){var statearr_38450 = state_38430;
(statearr_38450[(12)] = inst_38373);

(statearr_38450[(13)] = inst_38396);

(statearr_38450[(14)] = inst_38372);

(statearr_38450[(15)] = inst_38374);

(statearr_38450[(16)] = inst_38371);

return statearr_38450;
})();
var statearr_38451_38492 = state_38430__$1;
(statearr_38451_38492[(2)] = null);

(statearr_38451_38492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (3))){
var inst_38428 = (state_38430[(2)]);
var state_38430__$1 = state_38430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38430__$1,inst_38428);
} else {
if((state_val_38431 === (12))){
var inst_38405 = (state_38430[(2)]);
var state_38430__$1 = state_38430;
var statearr_38452_38493 = state_38430__$1;
(statearr_38452_38493[(2)] = inst_38405);

(statearr_38452_38493[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (2))){
var state_38430__$1 = state_38430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38430__$1,(4),ch);
} else {
if((state_val_38431 === (23))){
var state_38430__$1 = state_38430;
var statearr_38453_38494 = state_38430__$1;
(statearr_38453_38494[(2)] = null);

(statearr_38453_38494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (19))){
var inst_38361 = (state_38430[(8)]);
var inst_38411 = (state_38430[(11)]);
var inst_38413 = cljs.core.async.muxch_STAR_.call(null,inst_38411);
var state_38430__$1 = state_38430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38430__$1,(22),inst_38413,inst_38361);
} else {
if((state_val_38431 === (11))){
var inst_38385 = (state_38430[(10)]);
var inst_38371 = (state_38430[(16)]);
var inst_38385__$1 = cljs.core.seq.call(null,inst_38371);
var state_38430__$1 = (function (){var statearr_38454 = state_38430;
(statearr_38454[(10)] = inst_38385__$1);

return statearr_38454;
})();
if(inst_38385__$1){
var statearr_38455_38495 = state_38430__$1;
(statearr_38455_38495[(1)] = (13));

} else {
var statearr_38456_38496 = state_38430__$1;
(statearr_38456_38496[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (9))){
var inst_38407 = (state_38430[(2)]);
var state_38430__$1 = state_38430;
var statearr_38457_38497 = state_38430__$1;
(statearr_38457_38497[(2)] = inst_38407);

(statearr_38457_38497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (5))){
var inst_38368 = cljs.core.deref.call(null,mults);
var inst_38369 = cljs.core.vals.call(null,inst_38368);
var inst_38370 = cljs.core.seq.call(null,inst_38369);
var inst_38371 = inst_38370;
var inst_38372 = null;
var inst_38373 = (0);
var inst_38374 = (0);
var state_38430__$1 = (function (){var statearr_38458 = state_38430;
(statearr_38458[(12)] = inst_38373);

(statearr_38458[(14)] = inst_38372);

(statearr_38458[(15)] = inst_38374);

(statearr_38458[(16)] = inst_38371);

return statearr_38458;
})();
var statearr_38459_38498 = state_38430__$1;
(statearr_38459_38498[(2)] = null);

(statearr_38459_38498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (14))){
var state_38430__$1 = state_38430;
var statearr_38463_38499 = state_38430__$1;
(statearr_38463_38499[(2)] = null);

(statearr_38463_38499[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (16))){
var inst_38385 = (state_38430[(10)]);
var inst_38389 = cljs.core.chunk_first.call(null,inst_38385);
var inst_38390 = cljs.core.chunk_rest.call(null,inst_38385);
var inst_38391 = cljs.core.count.call(null,inst_38389);
var inst_38371 = inst_38390;
var inst_38372 = inst_38389;
var inst_38373 = inst_38391;
var inst_38374 = (0);
var state_38430__$1 = (function (){var statearr_38464 = state_38430;
(statearr_38464[(12)] = inst_38373);

(statearr_38464[(14)] = inst_38372);

(statearr_38464[(15)] = inst_38374);

(statearr_38464[(16)] = inst_38371);

return statearr_38464;
})();
var statearr_38465_38500 = state_38430__$1;
(statearr_38465_38500[(2)] = null);

(statearr_38465_38500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (10))){
var inst_38373 = (state_38430[(12)]);
var inst_38372 = (state_38430[(14)]);
var inst_38374 = (state_38430[(15)]);
var inst_38371 = (state_38430[(16)]);
var inst_38379 = cljs.core._nth.call(null,inst_38372,inst_38374);
var inst_38380 = cljs.core.async.muxch_STAR_.call(null,inst_38379);
var inst_38381 = cljs.core.async.close_BANG_.call(null,inst_38380);
var inst_38382 = (inst_38374 + (1));
var tmp38460 = inst_38373;
var tmp38461 = inst_38372;
var tmp38462 = inst_38371;
var inst_38371__$1 = tmp38462;
var inst_38372__$1 = tmp38461;
var inst_38373__$1 = tmp38460;
var inst_38374__$1 = inst_38382;
var state_38430__$1 = (function (){var statearr_38466 = state_38430;
(statearr_38466[(12)] = inst_38373__$1);

(statearr_38466[(14)] = inst_38372__$1);

(statearr_38466[(15)] = inst_38374__$1);

(statearr_38466[(17)] = inst_38381);

(statearr_38466[(16)] = inst_38371__$1);

return statearr_38466;
})();
var statearr_38467_38501 = state_38430__$1;
(statearr_38467_38501[(2)] = null);

(statearr_38467_38501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (18))){
var inst_38400 = (state_38430[(2)]);
var state_38430__$1 = state_38430;
var statearr_38468_38502 = state_38430__$1;
(statearr_38468_38502[(2)] = inst_38400);

(statearr_38468_38502[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38431 === (8))){
var inst_38373 = (state_38430[(12)]);
var inst_38374 = (state_38430[(15)]);
var inst_38376 = (inst_38374 < inst_38373);
var inst_38377 = inst_38376;
var state_38430__$1 = state_38430;
if(cljs.core.truth_(inst_38377)){
var statearr_38469_38503 = state_38430__$1;
(statearr_38469_38503[(1)] = (10));

} else {
var statearr_38470_38504 = state_38430__$1;
(statearr_38470_38504[(1)] = (11));

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
});})(c__37269__auto___38476,mults,ensure_mult,p))
;
return ((function (switch__37181__auto__,c__37269__auto___38476,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37182__auto__ = null;
var cljs$core$async$state_machine__37182__auto____0 = (function (){
var statearr_38471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38471[(0)] = cljs$core$async$state_machine__37182__auto__);

(statearr_38471[(1)] = (1));

return statearr_38471;
});
var cljs$core$async$state_machine__37182__auto____1 = (function (state_38430){
while(true){
var ret_value__37183__auto__ = (function (){try{while(true){
var result__37184__auto__ = switch__37181__auto__.call(null,state_38430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37184__auto__;
}
break;
}
}catch (e38472){if((e38472 instanceof Object)){
var ex__37185__auto__ = e38472;
var statearr_38473_38505 = state_38430;
(statearr_38473_38505[(5)] = ex__37185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38506 = state_38430;
state_38430 = G__38506;
continue;
} else {
return ret_value__37183__auto__;
}
break;
}
});
cljs$core$async$state_machine__37182__auto__ = function(state_38430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37182__auto____1.call(this,state_38430);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37182__auto____0;
cljs$core$async$state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37182__auto____1;
return cljs$core$async$state_machine__37182__auto__;
})()
;})(switch__37181__auto__,c__37269__auto___38476,mults,ensure_mult,p))
})();
var state__37271__auto__ = (function (){var statearr_38474 = f__37270__auto__.call(null);
(statearr_38474[(6)] = c__37269__auto___38476);

return statearr_38474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37271__auto__);
});})(c__37269__auto___38476,mults,ensure_mult,p))
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
var G__38508 = arguments.length;
switch (G__38508) {
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
var G__38511 = arguments.length;
switch (G__38511) {
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
var G__38514 = arguments.length;
switch (G__38514) {
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
var c__37269__auto___38581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37269__auto___38581,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__37270__auto__ = (function (){var switch__37181__auto__ = ((function (c__37269__auto___38581,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38553){
var state_val_38554 = (state_38553[(1)]);
if((state_val_38554 === (7))){
var state_38553__$1 = state_38553;
var statearr_38555_38582 = state_38553__$1;
(statearr_38555_38582[(2)] = null);

(statearr_38555_38582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38554 === (1))){
var state_38553__$1 = state_38553;
var statearr_38556_38583 = state_38553__$1;
(statearr_38556_38583[(2)] = null);

(statearr_38556_38583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38554 === (4))){
var inst_38517 = (state_38553[(7)]);
var inst_38519 = (inst_38517 < cnt);
var state_38553__$1 = state_38553;
if(cljs.core.truth_(inst_38519)){
var statearr_38557_38584 = state_38553__$1;
(statearr_38557_38584[(1)] = (6));

} else {
var statearr_38558_38585 = state_38553__$1;
(statearr_38558_38585[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38554 === (15))){
var inst_38549 = (state_38553[(2)]);
var state_38553__$1 = state_38553;
var statearr_38559_38586 = state_38553__$1;
(statearr_38559_38586[(2)] = inst_38549);

(statearr_38559_38586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38554 === (13))){
var inst_38542 = cljs.core.async.close_BANG_.call(null,out);
var state_38553__$1 = state_38553;
var statearr_38560_38587 = state_38553__$1;
(statearr_38560_38587[(2)] = inst_38542);

(statearr_38560_38587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38554 === (6))){
var state_38553__$1 = state_38553;
var statearr_38561_38588 = state_38553__$1;
(statearr_38561_38588[(2)] = null);

(statearr_38561_38588[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38554 === (3))){
var inst_38551 = (state_38553[(2)]);
var state_38553__$1 = state_38553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38553__$1,inst_38551);
} else {
if((state_val_38554 === (12))){
var inst_38539 = (state_38553[(8)]);
var inst_38539__$1 = (state_38553[(2)]);
var inst_38540 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38539__$1);
var state_38553__$1 = (function (){var statearr_38562 = state_38553;
(statearr_38562[(8)] = inst_38539__$1);

return statearr_38562;
})();
if(cljs.core.truth_(inst_38540)){
var statearr_38563_38589 = state_38553__$1;
(statearr_38563_38589[(1)] = (13));

} else {
var statearr_38564_38590 = state_38553__$1;
(statearr_38564_38590[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38554 === (2))){
var inst_38516 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38517 = (0);
var state_38553__$1 = (function (){var statearr_38565 = state_38553;
(statearr_38565[(7)] = inst_38517);

(statearr_38565[(9)] = inst_38516);

return statearr_38565;
})();
var statearr_38566_38591 = state_38553__$1;
(statearr_38566_38591[(2)] = null);

(statearr_38566_38591[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38554 === (11))){
var inst_38517 = (state_38553[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38553,(10),Object,null,(9));
var inst_38526 = chs__$1.call(null,inst_38517);
var inst_38527 = done.call(null,inst_38517);
var inst_38528 = cljs.core.async.take_BANG_.call(null,inst_38526,inst_38527);
var state_38553__$1 = state_38553;
var statearr_38567_38592 = state_38553__$1;
(statearr_38567_38592[(2)] = inst_38528);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38553__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38554 === (9))){
var inst_38517 = (state_38553[(7)]);
var inst_38530 = (state_38553[(2)]);
var inst_38531 = (inst_38517 + (1));
var inst_38517__$1 = inst_38531;
var state_38553__$1 = (function (){var statearr_38568 = state_38553;
(statearr_38568[(7)] = inst_38517__$1);

(statearr_38568[(10)] = inst_38530);

return statearr_38568;
})();
var statearr_38569_38593 = state_38553__$1;
(statearr_38569_38593[(2)] = null);

(statearr_38569_38593[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38554 === (5))){
var inst_38537 = (state_38553[(2)]);
var state_38553__$1 = (function (){var statearr_38570 = state_38553;
(statearr_38570[(11)] = inst_38537);

return statearr_38570;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38553__$1,(12),dchan);
} else {
if((state_val_38554 === (14))){
var inst_38539 = (state_38553[(8)]);
var inst_38544 = cljs.core.apply.call(null,f,inst_38539);
var state_38553__$1 = state_38553;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38553__$1,(16),out,inst_38544);
} else {
if((state_val_38554 === (16))){
var inst_38546 = (state_38553[(2)]);
var state_38553__$1 = (function (){var statearr_38571 = state_38553;
(statearr_38571[(12)] = inst_38546);

return statearr_38571;
})();
var statearr_38572_38594 = state_38553__$1;
(statearr_38572_38594[(2)] = null);

(statearr_38572_38594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38554 === (10))){
var inst_38521 = (state_38553[(2)]);
var inst_38522 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38553__$1 = (function (){var statearr_38573 = state_38553;
(statearr_38573[(13)] = inst_38521);

return statearr_38573;
})();
var statearr_38574_38595 = state_38553__$1;
(statearr_38574_38595[(2)] = inst_38522);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38553__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38554 === (8))){
var inst_38535 = (state_38553[(2)]);
var state_38553__$1 = state_38553;
var statearr_38575_38596 = state_38553__$1;
(statearr_38575_38596[(2)] = inst_38535);

(statearr_38575_38596[(1)] = (5));


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
});})(c__37269__auto___38581,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37181__auto__,c__37269__auto___38581,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37182__auto__ = null;
var cljs$core$async$state_machine__37182__auto____0 = (function (){
var statearr_38576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38576[(0)] = cljs$core$async$state_machine__37182__auto__);

(statearr_38576[(1)] = (1));

return statearr_38576;
});
var cljs$core$async$state_machine__37182__auto____1 = (function (state_38553){
while(true){
var ret_value__37183__auto__ = (function (){try{while(true){
var result__37184__auto__ = switch__37181__auto__.call(null,state_38553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37184__auto__;
}
break;
}
}catch (e38577){if((e38577 instanceof Object)){
var ex__37185__auto__ = e38577;
var statearr_38578_38597 = state_38553;
(statearr_38578_38597[(5)] = ex__37185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38598 = state_38553;
state_38553 = G__38598;
continue;
} else {
return ret_value__37183__auto__;
}
break;
}
});
cljs$core$async$state_machine__37182__auto__ = function(state_38553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37182__auto____1.call(this,state_38553);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37182__auto____0;
cljs$core$async$state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37182__auto____1;
return cljs$core$async$state_machine__37182__auto__;
})()
;})(switch__37181__auto__,c__37269__auto___38581,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__37271__auto__ = (function (){var statearr_38579 = f__37270__auto__.call(null);
(statearr_38579[(6)] = c__37269__auto___38581);

return statearr_38579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37271__auto__);
});})(c__37269__auto___38581,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__38601 = arguments.length;
switch (G__38601) {
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
var c__37269__auto___38655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37269__auto___38655,out){
return (function (){
var f__37270__auto__ = (function (){var switch__37181__auto__ = ((function (c__37269__auto___38655,out){
return (function (state_38633){
var state_val_38634 = (state_38633[(1)]);
if((state_val_38634 === (7))){
var inst_38613 = (state_38633[(7)]);
var inst_38612 = (state_38633[(8)]);
var inst_38612__$1 = (state_38633[(2)]);
var inst_38613__$1 = cljs.core.nth.call(null,inst_38612__$1,(0),null);
var inst_38614 = cljs.core.nth.call(null,inst_38612__$1,(1),null);
var inst_38615 = (inst_38613__$1 == null);
var state_38633__$1 = (function (){var statearr_38635 = state_38633;
(statearr_38635[(9)] = inst_38614);

(statearr_38635[(7)] = inst_38613__$1);

(statearr_38635[(8)] = inst_38612__$1);

return statearr_38635;
})();
if(cljs.core.truth_(inst_38615)){
var statearr_38636_38656 = state_38633__$1;
(statearr_38636_38656[(1)] = (8));

} else {
var statearr_38637_38657 = state_38633__$1;
(statearr_38637_38657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38634 === (1))){
var inst_38602 = cljs.core.vec.call(null,chs);
var inst_38603 = inst_38602;
var state_38633__$1 = (function (){var statearr_38638 = state_38633;
(statearr_38638[(10)] = inst_38603);

return statearr_38638;
})();
var statearr_38639_38658 = state_38633__$1;
(statearr_38639_38658[(2)] = null);

(statearr_38639_38658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38634 === (4))){
var inst_38603 = (state_38633[(10)]);
var state_38633__$1 = state_38633;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38633__$1,(7),inst_38603);
} else {
if((state_val_38634 === (6))){
var inst_38629 = (state_38633[(2)]);
var state_38633__$1 = state_38633;
var statearr_38640_38659 = state_38633__$1;
(statearr_38640_38659[(2)] = inst_38629);

(statearr_38640_38659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38634 === (3))){
var inst_38631 = (state_38633[(2)]);
var state_38633__$1 = state_38633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38633__$1,inst_38631);
} else {
if((state_val_38634 === (2))){
var inst_38603 = (state_38633[(10)]);
var inst_38605 = cljs.core.count.call(null,inst_38603);
var inst_38606 = (inst_38605 > (0));
var state_38633__$1 = state_38633;
if(cljs.core.truth_(inst_38606)){
var statearr_38642_38660 = state_38633__$1;
(statearr_38642_38660[(1)] = (4));

} else {
var statearr_38643_38661 = state_38633__$1;
(statearr_38643_38661[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38634 === (11))){
var inst_38603 = (state_38633[(10)]);
var inst_38622 = (state_38633[(2)]);
var tmp38641 = inst_38603;
var inst_38603__$1 = tmp38641;
var state_38633__$1 = (function (){var statearr_38644 = state_38633;
(statearr_38644[(10)] = inst_38603__$1);

(statearr_38644[(11)] = inst_38622);

return statearr_38644;
})();
var statearr_38645_38662 = state_38633__$1;
(statearr_38645_38662[(2)] = null);

(statearr_38645_38662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38634 === (9))){
var inst_38613 = (state_38633[(7)]);
var state_38633__$1 = state_38633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38633__$1,(11),out,inst_38613);
} else {
if((state_val_38634 === (5))){
var inst_38627 = cljs.core.async.close_BANG_.call(null,out);
var state_38633__$1 = state_38633;
var statearr_38646_38663 = state_38633__$1;
(statearr_38646_38663[(2)] = inst_38627);

(statearr_38646_38663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38634 === (10))){
var inst_38625 = (state_38633[(2)]);
var state_38633__$1 = state_38633;
var statearr_38647_38664 = state_38633__$1;
(statearr_38647_38664[(2)] = inst_38625);

(statearr_38647_38664[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38634 === (8))){
var inst_38603 = (state_38633[(10)]);
var inst_38614 = (state_38633[(9)]);
var inst_38613 = (state_38633[(7)]);
var inst_38612 = (state_38633[(8)]);
var inst_38617 = (function (){var cs = inst_38603;
var vec__38608 = inst_38612;
var v = inst_38613;
var c = inst_38614;
return ((function (cs,vec__38608,v,c,inst_38603,inst_38614,inst_38613,inst_38612,state_val_38634,c__37269__auto___38655,out){
return (function (p1__38599_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38599_SHARP_);
});
;})(cs,vec__38608,v,c,inst_38603,inst_38614,inst_38613,inst_38612,state_val_38634,c__37269__auto___38655,out))
})();
var inst_38618 = cljs.core.filterv.call(null,inst_38617,inst_38603);
var inst_38603__$1 = inst_38618;
var state_38633__$1 = (function (){var statearr_38648 = state_38633;
(statearr_38648[(10)] = inst_38603__$1);

return statearr_38648;
})();
var statearr_38649_38665 = state_38633__$1;
(statearr_38649_38665[(2)] = null);

(statearr_38649_38665[(1)] = (2));


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
});})(c__37269__auto___38655,out))
;
return ((function (switch__37181__auto__,c__37269__auto___38655,out){
return (function() {
var cljs$core$async$state_machine__37182__auto__ = null;
var cljs$core$async$state_machine__37182__auto____0 = (function (){
var statearr_38650 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38650[(0)] = cljs$core$async$state_machine__37182__auto__);

(statearr_38650[(1)] = (1));

return statearr_38650;
});
var cljs$core$async$state_machine__37182__auto____1 = (function (state_38633){
while(true){
var ret_value__37183__auto__ = (function (){try{while(true){
var result__37184__auto__ = switch__37181__auto__.call(null,state_38633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37184__auto__;
}
break;
}
}catch (e38651){if((e38651 instanceof Object)){
var ex__37185__auto__ = e38651;
var statearr_38652_38666 = state_38633;
(statearr_38652_38666[(5)] = ex__37185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38667 = state_38633;
state_38633 = G__38667;
continue;
} else {
return ret_value__37183__auto__;
}
break;
}
});
cljs$core$async$state_machine__37182__auto__ = function(state_38633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37182__auto____1.call(this,state_38633);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37182__auto____0;
cljs$core$async$state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37182__auto____1;
return cljs$core$async$state_machine__37182__auto__;
})()
;})(switch__37181__auto__,c__37269__auto___38655,out))
})();
var state__37271__auto__ = (function (){var statearr_38653 = f__37270__auto__.call(null);
(statearr_38653[(6)] = c__37269__auto___38655);

return statearr_38653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37271__auto__);
});})(c__37269__auto___38655,out))
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
var G__38669 = arguments.length;
switch (G__38669) {
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
var c__37269__auto___38714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37269__auto___38714,out){
return (function (){
var f__37270__auto__ = (function (){var switch__37181__auto__ = ((function (c__37269__auto___38714,out){
return (function (state_38693){
var state_val_38694 = (state_38693[(1)]);
if((state_val_38694 === (7))){
var inst_38675 = (state_38693[(7)]);
var inst_38675__$1 = (state_38693[(2)]);
var inst_38676 = (inst_38675__$1 == null);
var inst_38677 = cljs.core.not.call(null,inst_38676);
var state_38693__$1 = (function (){var statearr_38695 = state_38693;
(statearr_38695[(7)] = inst_38675__$1);

return statearr_38695;
})();
if(inst_38677){
var statearr_38696_38715 = state_38693__$1;
(statearr_38696_38715[(1)] = (8));

} else {
var statearr_38697_38716 = state_38693__$1;
(statearr_38697_38716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (1))){
var inst_38670 = (0);
var state_38693__$1 = (function (){var statearr_38698 = state_38693;
(statearr_38698[(8)] = inst_38670);

return statearr_38698;
})();
var statearr_38699_38717 = state_38693__$1;
(statearr_38699_38717[(2)] = null);

(statearr_38699_38717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (4))){
var state_38693__$1 = state_38693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38693__$1,(7),ch);
} else {
if((state_val_38694 === (6))){
var inst_38688 = (state_38693[(2)]);
var state_38693__$1 = state_38693;
var statearr_38700_38718 = state_38693__$1;
(statearr_38700_38718[(2)] = inst_38688);

(statearr_38700_38718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (3))){
var inst_38690 = (state_38693[(2)]);
var inst_38691 = cljs.core.async.close_BANG_.call(null,out);
var state_38693__$1 = (function (){var statearr_38701 = state_38693;
(statearr_38701[(9)] = inst_38690);

return statearr_38701;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38693__$1,inst_38691);
} else {
if((state_val_38694 === (2))){
var inst_38670 = (state_38693[(8)]);
var inst_38672 = (inst_38670 < n);
var state_38693__$1 = state_38693;
if(cljs.core.truth_(inst_38672)){
var statearr_38702_38719 = state_38693__$1;
(statearr_38702_38719[(1)] = (4));

} else {
var statearr_38703_38720 = state_38693__$1;
(statearr_38703_38720[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (11))){
var inst_38670 = (state_38693[(8)]);
var inst_38680 = (state_38693[(2)]);
var inst_38681 = (inst_38670 + (1));
var inst_38670__$1 = inst_38681;
var state_38693__$1 = (function (){var statearr_38704 = state_38693;
(statearr_38704[(8)] = inst_38670__$1);

(statearr_38704[(10)] = inst_38680);

return statearr_38704;
})();
var statearr_38705_38721 = state_38693__$1;
(statearr_38705_38721[(2)] = null);

(statearr_38705_38721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (9))){
var state_38693__$1 = state_38693;
var statearr_38706_38722 = state_38693__$1;
(statearr_38706_38722[(2)] = null);

(statearr_38706_38722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (5))){
var state_38693__$1 = state_38693;
var statearr_38707_38723 = state_38693__$1;
(statearr_38707_38723[(2)] = null);

(statearr_38707_38723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (10))){
var inst_38685 = (state_38693[(2)]);
var state_38693__$1 = state_38693;
var statearr_38708_38724 = state_38693__$1;
(statearr_38708_38724[(2)] = inst_38685);

(statearr_38708_38724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38694 === (8))){
var inst_38675 = (state_38693[(7)]);
var state_38693__$1 = state_38693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38693__$1,(11),out,inst_38675);
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
});})(c__37269__auto___38714,out))
;
return ((function (switch__37181__auto__,c__37269__auto___38714,out){
return (function() {
var cljs$core$async$state_machine__37182__auto__ = null;
var cljs$core$async$state_machine__37182__auto____0 = (function (){
var statearr_38709 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38709[(0)] = cljs$core$async$state_machine__37182__auto__);

(statearr_38709[(1)] = (1));

return statearr_38709;
});
var cljs$core$async$state_machine__37182__auto____1 = (function (state_38693){
while(true){
var ret_value__37183__auto__ = (function (){try{while(true){
var result__37184__auto__ = switch__37181__auto__.call(null,state_38693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37184__auto__;
}
break;
}
}catch (e38710){if((e38710 instanceof Object)){
var ex__37185__auto__ = e38710;
var statearr_38711_38725 = state_38693;
(statearr_38711_38725[(5)] = ex__37185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38726 = state_38693;
state_38693 = G__38726;
continue;
} else {
return ret_value__37183__auto__;
}
break;
}
});
cljs$core$async$state_machine__37182__auto__ = function(state_38693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37182__auto____1.call(this,state_38693);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37182__auto____0;
cljs$core$async$state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37182__auto____1;
return cljs$core$async$state_machine__37182__auto__;
})()
;})(switch__37181__auto__,c__37269__auto___38714,out))
})();
var state__37271__auto__ = (function (){var statearr_38712 = f__37270__auto__.call(null);
(statearr_38712[(6)] = c__37269__auto___38714);

return statearr_38712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37271__auto__);
});})(c__37269__auto___38714,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38728 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38728 = (function (f,ch,meta38729){
this.f = f;
this.ch = ch;
this.meta38729 = meta38729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38730,meta38729__$1){
var self__ = this;
var _38730__$1 = this;
return (new cljs.core.async.t_cljs$core$async38728(self__.f,self__.ch,meta38729__$1));
});

cljs.core.async.t_cljs$core$async38728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38730){
var self__ = this;
var _38730__$1 = this;
return self__.meta38729;
});

cljs.core.async.t_cljs$core$async38728.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38728.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38728.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38728.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38728.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async38731 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38731 = (function (f,ch,meta38729,_,fn1,meta38732){
this.f = f;
this.ch = ch;
this.meta38729 = meta38729;
this._ = _;
this.fn1 = fn1;
this.meta38732 = meta38732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38733,meta38732__$1){
var self__ = this;
var _38733__$1 = this;
return (new cljs.core.async.t_cljs$core$async38731(self__.f,self__.ch,self__.meta38729,self__._,self__.fn1,meta38732__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async38731.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38733){
var self__ = this;
var _38733__$1 = this;
return self__.meta38732;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38731.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38731.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38731.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38731.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38727_SHARP_){
return f1.call(null,(((p1__38727_SHARP_ == null))?null:self__.f.call(null,p1__38727_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async38731.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38729","meta38729",686222986,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38728","cljs.core.async/t_cljs$core$async38728",561660566,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38732","meta38732",1455682376,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38731.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38731.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38731";

cljs.core.async.t_cljs$core$async38731.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async38731");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async38731 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38731(f__$1,ch__$1,meta38729__$1,___$2,fn1__$1,meta38732){
return (new cljs.core.async.t_cljs$core$async38731(f__$1,ch__$1,meta38729__$1,___$2,fn1__$1,meta38732));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async38731(self__.f,self__.ch,self__.meta38729,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async38728.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38728.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async38728.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38729","meta38729",686222986,null)], null);
});

cljs.core.async.t_cljs$core$async38728.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38728";

cljs.core.async.t_cljs$core$async38728.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async38728");
});

cljs.core.async.__GT_t_cljs$core$async38728 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38728(f__$1,ch__$1,meta38729){
return (new cljs.core.async.t_cljs$core$async38728(f__$1,ch__$1,meta38729));
});

}

return (new cljs.core.async.t_cljs$core$async38728(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38734 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38734 = (function (f,ch,meta38735){
this.f = f;
this.ch = ch;
this.meta38735 = meta38735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38736,meta38735__$1){
var self__ = this;
var _38736__$1 = this;
return (new cljs.core.async.t_cljs$core$async38734(self__.f,self__.ch,meta38735__$1));
});

cljs.core.async.t_cljs$core$async38734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38736){
var self__ = this;
var _38736__$1 = this;
return self__.meta38735;
});

cljs.core.async.t_cljs$core$async38734.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38734.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38734.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38734.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38734.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38734.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async38734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38735","meta38735",-1426230416,null)], null);
});

cljs.core.async.t_cljs$core$async38734.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38734";

cljs.core.async.t_cljs$core$async38734.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async38734");
});

cljs.core.async.__GT_t_cljs$core$async38734 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38734(f__$1,ch__$1,meta38735){
return (new cljs.core.async.t_cljs$core$async38734(f__$1,ch__$1,meta38735));
});

}

return (new cljs.core.async.t_cljs$core$async38734(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async38737 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38737 = (function (p,ch,meta38738){
this.p = p;
this.ch = ch;
this.meta38738 = meta38738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38739,meta38738__$1){
var self__ = this;
var _38739__$1 = this;
return (new cljs.core.async.t_cljs$core$async38737(self__.p,self__.ch,meta38738__$1));
});

cljs.core.async.t_cljs$core$async38737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38739){
var self__ = this;
var _38739__$1 = this;
return self__.meta38738;
});

cljs.core.async.t_cljs$core$async38737.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38737.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38737.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38737.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38737.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38737.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38737.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async38737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38738","meta38738",120815650,null)], null);
});

cljs.core.async.t_cljs$core$async38737.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38737";

cljs.core.async.t_cljs$core$async38737.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async38737");
});

cljs.core.async.__GT_t_cljs$core$async38737 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38737(p__$1,ch__$1,meta38738){
return (new cljs.core.async.t_cljs$core$async38737(p__$1,ch__$1,meta38738));
});

}

return (new cljs.core.async.t_cljs$core$async38737(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__38741 = arguments.length;
switch (G__38741) {
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
var c__37269__auto___38781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37269__auto___38781,out){
return (function (){
var f__37270__auto__ = (function (){var switch__37181__auto__ = ((function (c__37269__auto___38781,out){
return (function (state_38762){
var state_val_38763 = (state_38762[(1)]);
if((state_val_38763 === (7))){
var inst_38758 = (state_38762[(2)]);
var state_38762__$1 = state_38762;
var statearr_38764_38782 = state_38762__$1;
(statearr_38764_38782[(2)] = inst_38758);

(statearr_38764_38782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38763 === (1))){
var state_38762__$1 = state_38762;
var statearr_38765_38783 = state_38762__$1;
(statearr_38765_38783[(2)] = null);

(statearr_38765_38783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38763 === (4))){
var inst_38744 = (state_38762[(7)]);
var inst_38744__$1 = (state_38762[(2)]);
var inst_38745 = (inst_38744__$1 == null);
var state_38762__$1 = (function (){var statearr_38766 = state_38762;
(statearr_38766[(7)] = inst_38744__$1);

return statearr_38766;
})();
if(cljs.core.truth_(inst_38745)){
var statearr_38767_38784 = state_38762__$1;
(statearr_38767_38784[(1)] = (5));

} else {
var statearr_38768_38785 = state_38762__$1;
(statearr_38768_38785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38763 === (6))){
var inst_38744 = (state_38762[(7)]);
var inst_38749 = p.call(null,inst_38744);
var state_38762__$1 = state_38762;
if(cljs.core.truth_(inst_38749)){
var statearr_38769_38786 = state_38762__$1;
(statearr_38769_38786[(1)] = (8));

} else {
var statearr_38770_38787 = state_38762__$1;
(statearr_38770_38787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38763 === (3))){
var inst_38760 = (state_38762[(2)]);
var state_38762__$1 = state_38762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38762__$1,inst_38760);
} else {
if((state_val_38763 === (2))){
var state_38762__$1 = state_38762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38762__$1,(4),ch);
} else {
if((state_val_38763 === (11))){
var inst_38752 = (state_38762[(2)]);
var state_38762__$1 = state_38762;
var statearr_38771_38788 = state_38762__$1;
(statearr_38771_38788[(2)] = inst_38752);

(statearr_38771_38788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38763 === (9))){
var state_38762__$1 = state_38762;
var statearr_38772_38789 = state_38762__$1;
(statearr_38772_38789[(2)] = null);

(statearr_38772_38789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38763 === (5))){
var inst_38747 = cljs.core.async.close_BANG_.call(null,out);
var state_38762__$1 = state_38762;
var statearr_38773_38790 = state_38762__$1;
(statearr_38773_38790[(2)] = inst_38747);

(statearr_38773_38790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38763 === (10))){
var inst_38755 = (state_38762[(2)]);
var state_38762__$1 = (function (){var statearr_38774 = state_38762;
(statearr_38774[(8)] = inst_38755);

return statearr_38774;
})();
var statearr_38775_38791 = state_38762__$1;
(statearr_38775_38791[(2)] = null);

(statearr_38775_38791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38763 === (8))){
var inst_38744 = (state_38762[(7)]);
var state_38762__$1 = state_38762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38762__$1,(11),out,inst_38744);
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
});})(c__37269__auto___38781,out))
;
return ((function (switch__37181__auto__,c__37269__auto___38781,out){
return (function() {
var cljs$core$async$state_machine__37182__auto__ = null;
var cljs$core$async$state_machine__37182__auto____0 = (function (){
var statearr_38776 = [null,null,null,null,null,null,null,null,null];
(statearr_38776[(0)] = cljs$core$async$state_machine__37182__auto__);

(statearr_38776[(1)] = (1));

return statearr_38776;
});
var cljs$core$async$state_machine__37182__auto____1 = (function (state_38762){
while(true){
var ret_value__37183__auto__ = (function (){try{while(true){
var result__37184__auto__ = switch__37181__auto__.call(null,state_38762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37184__auto__;
}
break;
}
}catch (e38777){if((e38777 instanceof Object)){
var ex__37185__auto__ = e38777;
var statearr_38778_38792 = state_38762;
(statearr_38778_38792[(5)] = ex__37185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38793 = state_38762;
state_38762 = G__38793;
continue;
} else {
return ret_value__37183__auto__;
}
break;
}
});
cljs$core$async$state_machine__37182__auto__ = function(state_38762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37182__auto____1.call(this,state_38762);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37182__auto____0;
cljs$core$async$state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37182__auto____1;
return cljs$core$async$state_machine__37182__auto__;
})()
;})(switch__37181__auto__,c__37269__auto___38781,out))
})();
var state__37271__auto__ = (function (){var statearr_38779 = f__37270__auto__.call(null);
(statearr_38779[(6)] = c__37269__auto___38781);

return statearr_38779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37271__auto__);
});})(c__37269__auto___38781,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38795 = arguments.length;
switch (G__38795) {
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
var c__37269__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37269__auto__){
return (function (){
var f__37270__auto__ = (function (){var switch__37181__auto__ = ((function (c__37269__auto__){
return (function (state_38858){
var state_val_38859 = (state_38858[(1)]);
if((state_val_38859 === (7))){
var inst_38854 = (state_38858[(2)]);
var state_38858__$1 = state_38858;
var statearr_38860_38898 = state_38858__$1;
(statearr_38860_38898[(2)] = inst_38854);

(statearr_38860_38898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (20))){
var inst_38824 = (state_38858[(7)]);
var inst_38835 = (state_38858[(2)]);
var inst_38836 = cljs.core.next.call(null,inst_38824);
var inst_38810 = inst_38836;
var inst_38811 = null;
var inst_38812 = (0);
var inst_38813 = (0);
var state_38858__$1 = (function (){var statearr_38861 = state_38858;
(statearr_38861[(8)] = inst_38813);

(statearr_38861[(9)] = inst_38835);

(statearr_38861[(10)] = inst_38811);

(statearr_38861[(11)] = inst_38810);

(statearr_38861[(12)] = inst_38812);

return statearr_38861;
})();
var statearr_38862_38899 = state_38858__$1;
(statearr_38862_38899[(2)] = null);

(statearr_38862_38899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (1))){
var state_38858__$1 = state_38858;
var statearr_38863_38900 = state_38858__$1;
(statearr_38863_38900[(2)] = null);

(statearr_38863_38900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (4))){
var inst_38799 = (state_38858[(13)]);
var inst_38799__$1 = (state_38858[(2)]);
var inst_38800 = (inst_38799__$1 == null);
var state_38858__$1 = (function (){var statearr_38864 = state_38858;
(statearr_38864[(13)] = inst_38799__$1);

return statearr_38864;
})();
if(cljs.core.truth_(inst_38800)){
var statearr_38865_38901 = state_38858__$1;
(statearr_38865_38901[(1)] = (5));

} else {
var statearr_38866_38902 = state_38858__$1;
(statearr_38866_38902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (15))){
var state_38858__$1 = state_38858;
var statearr_38870_38903 = state_38858__$1;
(statearr_38870_38903[(2)] = null);

(statearr_38870_38903[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (21))){
var state_38858__$1 = state_38858;
var statearr_38871_38904 = state_38858__$1;
(statearr_38871_38904[(2)] = null);

(statearr_38871_38904[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (13))){
var inst_38813 = (state_38858[(8)]);
var inst_38811 = (state_38858[(10)]);
var inst_38810 = (state_38858[(11)]);
var inst_38812 = (state_38858[(12)]);
var inst_38820 = (state_38858[(2)]);
var inst_38821 = (inst_38813 + (1));
var tmp38867 = inst_38811;
var tmp38868 = inst_38810;
var tmp38869 = inst_38812;
var inst_38810__$1 = tmp38868;
var inst_38811__$1 = tmp38867;
var inst_38812__$1 = tmp38869;
var inst_38813__$1 = inst_38821;
var state_38858__$1 = (function (){var statearr_38872 = state_38858;
(statearr_38872[(8)] = inst_38813__$1);

(statearr_38872[(14)] = inst_38820);

(statearr_38872[(10)] = inst_38811__$1);

(statearr_38872[(11)] = inst_38810__$1);

(statearr_38872[(12)] = inst_38812__$1);

return statearr_38872;
})();
var statearr_38873_38905 = state_38858__$1;
(statearr_38873_38905[(2)] = null);

(statearr_38873_38905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (22))){
var state_38858__$1 = state_38858;
var statearr_38874_38906 = state_38858__$1;
(statearr_38874_38906[(2)] = null);

(statearr_38874_38906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (6))){
var inst_38799 = (state_38858[(13)]);
var inst_38808 = f.call(null,inst_38799);
var inst_38809 = cljs.core.seq.call(null,inst_38808);
var inst_38810 = inst_38809;
var inst_38811 = null;
var inst_38812 = (0);
var inst_38813 = (0);
var state_38858__$1 = (function (){var statearr_38875 = state_38858;
(statearr_38875[(8)] = inst_38813);

(statearr_38875[(10)] = inst_38811);

(statearr_38875[(11)] = inst_38810);

(statearr_38875[(12)] = inst_38812);

return statearr_38875;
})();
var statearr_38876_38907 = state_38858__$1;
(statearr_38876_38907[(2)] = null);

(statearr_38876_38907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (17))){
var inst_38824 = (state_38858[(7)]);
var inst_38828 = cljs.core.chunk_first.call(null,inst_38824);
var inst_38829 = cljs.core.chunk_rest.call(null,inst_38824);
var inst_38830 = cljs.core.count.call(null,inst_38828);
var inst_38810 = inst_38829;
var inst_38811 = inst_38828;
var inst_38812 = inst_38830;
var inst_38813 = (0);
var state_38858__$1 = (function (){var statearr_38877 = state_38858;
(statearr_38877[(8)] = inst_38813);

(statearr_38877[(10)] = inst_38811);

(statearr_38877[(11)] = inst_38810);

(statearr_38877[(12)] = inst_38812);

return statearr_38877;
})();
var statearr_38878_38908 = state_38858__$1;
(statearr_38878_38908[(2)] = null);

(statearr_38878_38908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (3))){
var inst_38856 = (state_38858[(2)]);
var state_38858__$1 = state_38858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38858__$1,inst_38856);
} else {
if((state_val_38859 === (12))){
var inst_38844 = (state_38858[(2)]);
var state_38858__$1 = state_38858;
var statearr_38879_38909 = state_38858__$1;
(statearr_38879_38909[(2)] = inst_38844);

(statearr_38879_38909[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (2))){
var state_38858__$1 = state_38858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38858__$1,(4),in$);
} else {
if((state_val_38859 === (23))){
var inst_38852 = (state_38858[(2)]);
var state_38858__$1 = state_38858;
var statearr_38880_38910 = state_38858__$1;
(statearr_38880_38910[(2)] = inst_38852);

(statearr_38880_38910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (19))){
var inst_38839 = (state_38858[(2)]);
var state_38858__$1 = state_38858;
var statearr_38881_38911 = state_38858__$1;
(statearr_38881_38911[(2)] = inst_38839);

(statearr_38881_38911[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (11))){
var inst_38824 = (state_38858[(7)]);
var inst_38810 = (state_38858[(11)]);
var inst_38824__$1 = cljs.core.seq.call(null,inst_38810);
var state_38858__$1 = (function (){var statearr_38882 = state_38858;
(statearr_38882[(7)] = inst_38824__$1);

return statearr_38882;
})();
if(inst_38824__$1){
var statearr_38883_38912 = state_38858__$1;
(statearr_38883_38912[(1)] = (14));

} else {
var statearr_38884_38913 = state_38858__$1;
(statearr_38884_38913[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (9))){
var inst_38846 = (state_38858[(2)]);
var inst_38847 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38858__$1 = (function (){var statearr_38885 = state_38858;
(statearr_38885[(15)] = inst_38846);

return statearr_38885;
})();
if(cljs.core.truth_(inst_38847)){
var statearr_38886_38914 = state_38858__$1;
(statearr_38886_38914[(1)] = (21));

} else {
var statearr_38887_38915 = state_38858__$1;
(statearr_38887_38915[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (5))){
var inst_38802 = cljs.core.async.close_BANG_.call(null,out);
var state_38858__$1 = state_38858;
var statearr_38888_38916 = state_38858__$1;
(statearr_38888_38916[(2)] = inst_38802);

(statearr_38888_38916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (14))){
var inst_38824 = (state_38858[(7)]);
var inst_38826 = cljs.core.chunked_seq_QMARK_.call(null,inst_38824);
var state_38858__$1 = state_38858;
if(inst_38826){
var statearr_38889_38917 = state_38858__$1;
(statearr_38889_38917[(1)] = (17));

} else {
var statearr_38890_38918 = state_38858__$1;
(statearr_38890_38918[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (16))){
var inst_38842 = (state_38858[(2)]);
var state_38858__$1 = state_38858;
var statearr_38891_38919 = state_38858__$1;
(statearr_38891_38919[(2)] = inst_38842);

(statearr_38891_38919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38859 === (10))){
var inst_38813 = (state_38858[(8)]);
var inst_38811 = (state_38858[(10)]);
var inst_38818 = cljs.core._nth.call(null,inst_38811,inst_38813);
var state_38858__$1 = state_38858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38858__$1,(13),out,inst_38818);
} else {
if((state_val_38859 === (18))){
var inst_38824 = (state_38858[(7)]);
var inst_38833 = cljs.core.first.call(null,inst_38824);
var state_38858__$1 = state_38858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38858__$1,(20),out,inst_38833);
} else {
if((state_val_38859 === (8))){
var inst_38813 = (state_38858[(8)]);
var inst_38812 = (state_38858[(12)]);
var inst_38815 = (inst_38813 < inst_38812);
var inst_38816 = inst_38815;
var state_38858__$1 = state_38858;
if(cljs.core.truth_(inst_38816)){
var statearr_38892_38920 = state_38858__$1;
(statearr_38892_38920[(1)] = (10));

} else {
var statearr_38893_38921 = state_38858__$1;
(statearr_38893_38921[(1)] = (11));

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
});})(c__37269__auto__))
;
return ((function (switch__37181__auto__,c__37269__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37182__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37182__auto____0 = (function (){
var statearr_38894 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38894[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37182__auto__);

(statearr_38894[(1)] = (1));

return statearr_38894;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37182__auto____1 = (function (state_38858){
while(true){
var ret_value__37183__auto__ = (function (){try{while(true){
var result__37184__auto__ = switch__37181__auto__.call(null,state_38858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37184__auto__;
}
break;
}
}catch (e38895){if((e38895 instanceof Object)){
var ex__37185__auto__ = e38895;
var statearr_38896_38922 = state_38858;
(statearr_38896_38922[(5)] = ex__37185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38923 = state_38858;
state_38858 = G__38923;
continue;
} else {
return ret_value__37183__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37182__auto__ = function(state_38858){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37182__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37182__auto____1.call(this,state_38858);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37182__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37182__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37182__auto__;
})()
;})(switch__37181__auto__,c__37269__auto__))
})();
var state__37271__auto__ = (function (){var statearr_38897 = f__37270__auto__.call(null);
(statearr_38897[(6)] = c__37269__auto__);

return statearr_38897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37271__auto__);
});})(c__37269__auto__))
);

return c__37269__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38925 = arguments.length;
switch (G__38925) {
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
var G__38928 = arguments.length;
switch (G__38928) {
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
var G__38931 = arguments.length;
switch (G__38931) {
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
var c__37269__auto___38978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37269__auto___38978,out){
return (function (){
var f__37270__auto__ = (function (){var switch__37181__auto__ = ((function (c__37269__auto___38978,out){
return (function (state_38955){
var state_val_38956 = (state_38955[(1)]);
if((state_val_38956 === (7))){
var inst_38950 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
var statearr_38957_38979 = state_38955__$1;
(statearr_38957_38979[(2)] = inst_38950);

(statearr_38957_38979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (1))){
var inst_38932 = null;
var state_38955__$1 = (function (){var statearr_38958 = state_38955;
(statearr_38958[(7)] = inst_38932);

return statearr_38958;
})();
var statearr_38959_38980 = state_38955__$1;
(statearr_38959_38980[(2)] = null);

(statearr_38959_38980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (4))){
var inst_38935 = (state_38955[(8)]);
var inst_38935__$1 = (state_38955[(2)]);
var inst_38936 = (inst_38935__$1 == null);
var inst_38937 = cljs.core.not.call(null,inst_38936);
var state_38955__$1 = (function (){var statearr_38960 = state_38955;
(statearr_38960[(8)] = inst_38935__$1);

return statearr_38960;
})();
if(inst_38937){
var statearr_38961_38981 = state_38955__$1;
(statearr_38961_38981[(1)] = (5));

} else {
var statearr_38962_38982 = state_38955__$1;
(statearr_38962_38982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (6))){
var state_38955__$1 = state_38955;
var statearr_38963_38983 = state_38955__$1;
(statearr_38963_38983[(2)] = null);

(statearr_38963_38983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (3))){
var inst_38952 = (state_38955[(2)]);
var inst_38953 = cljs.core.async.close_BANG_.call(null,out);
var state_38955__$1 = (function (){var statearr_38964 = state_38955;
(statearr_38964[(9)] = inst_38952);

return statearr_38964;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38955__$1,inst_38953);
} else {
if((state_val_38956 === (2))){
var state_38955__$1 = state_38955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38955__$1,(4),ch);
} else {
if((state_val_38956 === (11))){
var inst_38935 = (state_38955[(8)]);
var inst_38944 = (state_38955[(2)]);
var inst_38932 = inst_38935;
var state_38955__$1 = (function (){var statearr_38965 = state_38955;
(statearr_38965[(7)] = inst_38932);

(statearr_38965[(10)] = inst_38944);

return statearr_38965;
})();
var statearr_38966_38984 = state_38955__$1;
(statearr_38966_38984[(2)] = null);

(statearr_38966_38984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (9))){
var inst_38935 = (state_38955[(8)]);
var state_38955__$1 = state_38955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38955__$1,(11),out,inst_38935);
} else {
if((state_val_38956 === (5))){
var inst_38935 = (state_38955[(8)]);
var inst_38932 = (state_38955[(7)]);
var inst_38939 = cljs.core._EQ_.call(null,inst_38935,inst_38932);
var state_38955__$1 = state_38955;
if(inst_38939){
var statearr_38968_38985 = state_38955__$1;
(statearr_38968_38985[(1)] = (8));

} else {
var statearr_38969_38986 = state_38955__$1;
(statearr_38969_38986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (10))){
var inst_38947 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
var statearr_38970_38987 = state_38955__$1;
(statearr_38970_38987[(2)] = inst_38947);

(statearr_38970_38987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (8))){
var inst_38932 = (state_38955[(7)]);
var tmp38967 = inst_38932;
var inst_38932__$1 = tmp38967;
var state_38955__$1 = (function (){var statearr_38971 = state_38955;
(statearr_38971[(7)] = inst_38932__$1);

return statearr_38971;
})();
var statearr_38972_38988 = state_38955__$1;
(statearr_38972_38988[(2)] = null);

(statearr_38972_38988[(1)] = (2));


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
});})(c__37269__auto___38978,out))
;
return ((function (switch__37181__auto__,c__37269__auto___38978,out){
return (function() {
var cljs$core$async$state_machine__37182__auto__ = null;
var cljs$core$async$state_machine__37182__auto____0 = (function (){
var statearr_38973 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38973[(0)] = cljs$core$async$state_machine__37182__auto__);

(statearr_38973[(1)] = (1));

return statearr_38973;
});
var cljs$core$async$state_machine__37182__auto____1 = (function (state_38955){
while(true){
var ret_value__37183__auto__ = (function (){try{while(true){
var result__37184__auto__ = switch__37181__auto__.call(null,state_38955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37184__auto__;
}
break;
}
}catch (e38974){if((e38974 instanceof Object)){
var ex__37185__auto__ = e38974;
var statearr_38975_38989 = state_38955;
(statearr_38975_38989[(5)] = ex__37185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38990 = state_38955;
state_38955 = G__38990;
continue;
} else {
return ret_value__37183__auto__;
}
break;
}
});
cljs$core$async$state_machine__37182__auto__ = function(state_38955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37182__auto____1.call(this,state_38955);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37182__auto____0;
cljs$core$async$state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37182__auto____1;
return cljs$core$async$state_machine__37182__auto__;
})()
;})(switch__37181__auto__,c__37269__auto___38978,out))
})();
var state__37271__auto__ = (function (){var statearr_38976 = f__37270__auto__.call(null);
(statearr_38976[(6)] = c__37269__auto___38978);

return statearr_38976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37271__auto__);
});})(c__37269__auto___38978,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38992 = arguments.length;
switch (G__38992) {
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
var c__37269__auto___39058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37269__auto___39058,out){
return (function (){
var f__37270__auto__ = (function (){var switch__37181__auto__ = ((function (c__37269__auto___39058,out){
return (function (state_39030){
var state_val_39031 = (state_39030[(1)]);
if((state_val_39031 === (7))){
var inst_39026 = (state_39030[(2)]);
var state_39030__$1 = state_39030;
var statearr_39032_39059 = state_39030__$1;
(statearr_39032_39059[(2)] = inst_39026);

(statearr_39032_39059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39031 === (1))){
var inst_38993 = (new Array(n));
var inst_38994 = inst_38993;
var inst_38995 = (0);
var state_39030__$1 = (function (){var statearr_39033 = state_39030;
(statearr_39033[(7)] = inst_38995);

(statearr_39033[(8)] = inst_38994);

return statearr_39033;
})();
var statearr_39034_39060 = state_39030__$1;
(statearr_39034_39060[(2)] = null);

(statearr_39034_39060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39031 === (4))){
var inst_38998 = (state_39030[(9)]);
var inst_38998__$1 = (state_39030[(2)]);
var inst_38999 = (inst_38998__$1 == null);
var inst_39000 = cljs.core.not.call(null,inst_38999);
var state_39030__$1 = (function (){var statearr_39035 = state_39030;
(statearr_39035[(9)] = inst_38998__$1);

return statearr_39035;
})();
if(inst_39000){
var statearr_39036_39061 = state_39030__$1;
(statearr_39036_39061[(1)] = (5));

} else {
var statearr_39037_39062 = state_39030__$1;
(statearr_39037_39062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39031 === (15))){
var inst_39020 = (state_39030[(2)]);
var state_39030__$1 = state_39030;
var statearr_39038_39063 = state_39030__$1;
(statearr_39038_39063[(2)] = inst_39020);

(statearr_39038_39063[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39031 === (13))){
var state_39030__$1 = state_39030;
var statearr_39039_39064 = state_39030__$1;
(statearr_39039_39064[(2)] = null);

(statearr_39039_39064[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39031 === (6))){
var inst_38995 = (state_39030[(7)]);
var inst_39016 = (inst_38995 > (0));
var state_39030__$1 = state_39030;
if(cljs.core.truth_(inst_39016)){
var statearr_39040_39065 = state_39030__$1;
(statearr_39040_39065[(1)] = (12));

} else {
var statearr_39041_39066 = state_39030__$1;
(statearr_39041_39066[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39031 === (3))){
var inst_39028 = (state_39030[(2)]);
var state_39030__$1 = state_39030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39030__$1,inst_39028);
} else {
if((state_val_39031 === (12))){
var inst_38994 = (state_39030[(8)]);
var inst_39018 = cljs.core.vec.call(null,inst_38994);
var state_39030__$1 = state_39030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39030__$1,(15),out,inst_39018);
} else {
if((state_val_39031 === (2))){
var state_39030__$1 = state_39030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39030__$1,(4),ch);
} else {
if((state_val_39031 === (11))){
var inst_39010 = (state_39030[(2)]);
var inst_39011 = (new Array(n));
var inst_38994 = inst_39011;
var inst_38995 = (0);
var state_39030__$1 = (function (){var statearr_39042 = state_39030;
(statearr_39042[(10)] = inst_39010);

(statearr_39042[(7)] = inst_38995);

(statearr_39042[(8)] = inst_38994);

return statearr_39042;
})();
var statearr_39043_39067 = state_39030__$1;
(statearr_39043_39067[(2)] = null);

(statearr_39043_39067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39031 === (9))){
var inst_38994 = (state_39030[(8)]);
var inst_39008 = cljs.core.vec.call(null,inst_38994);
var state_39030__$1 = state_39030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39030__$1,(11),out,inst_39008);
} else {
if((state_val_39031 === (5))){
var inst_39003 = (state_39030[(11)]);
var inst_38995 = (state_39030[(7)]);
var inst_38994 = (state_39030[(8)]);
var inst_38998 = (state_39030[(9)]);
var inst_39002 = (inst_38994[inst_38995] = inst_38998);
var inst_39003__$1 = (inst_38995 + (1));
var inst_39004 = (inst_39003__$1 < n);
var state_39030__$1 = (function (){var statearr_39044 = state_39030;
(statearr_39044[(11)] = inst_39003__$1);

(statearr_39044[(12)] = inst_39002);

return statearr_39044;
})();
if(cljs.core.truth_(inst_39004)){
var statearr_39045_39068 = state_39030__$1;
(statearr_39045_39068[(1)] = (8));

} else {
var statearr_39046_39069 = state_39030__$1;
(statearr_39046_39069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39031 === (14))){
var inst_39023 = (state_39030[(2)]);
var inst_39024 = cljs.core.async.close_BANG_.call(null,out);
var state_39030__$1 = (function (){var statearr_39048 = state_39030;
(statearr_39048[(13)] = inst_39023);

return statearr_39048;
})();
var statearr_39049_39070 = state_39030__$1;
(statearr_39049_39070[(2)] = inst_39024);

(statearr_39049_39070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39031 === (10))){
var inst_39014 = (state_39030[(2)]);
var state_39030__$1 = state_39030;
var statearr_39050_39071 = state_39030__$1;
(statearr_39050_39071[(2)] = inst_39014);

(statearr_39050_39071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39031 === (8))){
var inst_39003 = (state_39030[(11)]);
var inst_38994 = (state_39030[(8)]);
var tmp39047 = inst_38994;
var inst_38994__$1 = tmp39047;
var inst_38995 = inst_39003;
var state_39030__$1 = (function (){var statearr_39051 = state_39030;
(statearr_39051[(7)] = inst_38995);

(statearr_39051[(8)] = inst_38994__$1);

return statearr_39051;
})();
var statearr_39052_39072 = state_39030__$1;
(statearr_39052_39072[(2)] = null);

(statearr_39052_39072[(1)] = (2));


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
});})(c__37269__auto___39058,out))
;
return ((function (switch__37181__auto__,c__37269__auto___39058,out){
return (function() {
var cljs$core$async$state_machine__37182__auto__ = null;
var cljs$core$async$state_machine__37182__auto____0 = (function (){
var statearr_39053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39053[(0)] = cljs$core$async$state_machine__37182__auto__);

(statearr_39053[(1)] = (1));

return statearr_39053;
});
var cljs$core$async$state_machine__37182__auto____1 = (function (state_39030){
while(true){
var ret_value__37183__auto__ = (function (){try{while(true){
var result__37184__auto__ = switch__37181__auto__.call(null,state_39030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37184__auto__;
}
break;
}
}catch (e39054){if((e39054 instanceof Object)){
var ex__37185__auto__ = e39054;
var statearr_39055_39073 = state_39030;
(statearr_39055_39073[(5)] = ex__37185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39074 = state_39030;
state_39030 = G__39074;
continue;
} else {
return ret_value__37183__auto__;
}
break;
}
});
cljs$core$async$state_machine__37182__auto__ = function(state_39030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37182__auto____1.call(this,state_39030);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37182__auto____0;
cljs$core$async$state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37182__auto____1;
return cljs$core$async$state_machine__37182__auto__;
})()
;})(switch__37181__auto__,c__37269__auto___39058,out))
})();
var state__37271__auto__ = (function (){var statearr_39056 = f__37270__auto__.call(null);
(statearr_39056[(6)] = c__37269__auto___39058);

return statearr_39056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37271__auto__);
});})(c__37269__auto___39058,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39076 = arguments.length;
switch (G__39076) {
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
var c__37269__auto___39146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37269__auto___39146,out){
return (function (){
var f__37270__auto__ = (function (){var switch__37181__auto__ = ((function (c__37269__auto___39146,out){
return (function (state_39118){
var state_val_39119 = (state_39118[(1)]);
if((state_val_39119 === (7))){
var inst_39114 = (state_39118[(2)]);
var state_39118__$1 = state_39118;
var statearr_39120_39147 = state_39118__$1;
(statearr_39120_39147[(2)] = inst_39114);

(statearr_39120_39147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39119 === (1))){
var inst_39077 = [];
var inst_39078 = inst_39077;
var inst_39079 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39118__$1 = (function (){var statearr_39121 = state_39118;
(statearr_39121[(7)] = inst_39079);

(statearr_39121[(8)] = inst_39078);

return statearr_39121;
})();
var statearr_39122_39148 = state_39118__$1;
(statearr_39122_39148[(2)] = null);

(statearr_39122_39148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39119 === (4))){
var inst_39082 = (state_39118[(9)]);
var inst_39082__$1 = (state_39118[(2)]);
var inst_39083 = (inst_39082__$1 == null);
var inst_39084 = cljs.core.not.call(null,inst_39083);
var state_39118__$1 = (function (){var statearr_39123 = state_39118;
(statearr_39123[(9)] = inst_39082__$1);

return statearr_39123;
})();
if(inst_39084){
var statearr_39124_39149 = state_39118__$1;
(statearr_39124_39149[(1)] = (5));

} else {
var statearr_39125_39150 = state_39118__$1;
(statearr_39125_39150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39119 === (15))){
var inst_39108 = (state_39118[(2)]);
var state_39118__$1 = state_39118;
var statearr_39126_39151 = state_39118__$1;
(statearr_39126_39151[(2)] = inst_39108);

(statearr_39126_39151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39119 === (13))){
var state_39118__$1 = state_39118;
var statearr_39127_39152 = state_39118__$1;
(statearr_39127_39152[(2)] = null);

(statearr_39127_39152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39119 === (6))){
var inst_39078 = (state_39118[(8)]);
var inst_39103 = inst_39078.length;
var inst_39104 = (inst_39103 > (0));
var state_39118__$1 = state_39118;
if(cljs.core.truth_(inst_39104)){
var statearr_39128_39153 = state_39118__$1;
(statearr_39128_39153[(1)] = (12));

} else {
var statearr_39129_39154 = state_39118__$1;
(statearr_39129_39154[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39119 === (3))){
var inst_39116 = (state_39118[(2)]);
var state_39118__$1 = state_39118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39118__$1,inst_39116);
} else {
if((state_val_39119 === (12))){
var inst_39078 = (state_39118[(8)]);
var inst_39106 = cljs.core.vec.call(null,inst_39078);
var state_39118__$1 = state_39118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39118__$1,(15),out,inst_39106);
} else {
if((state_val_39119 === (2))){
var state_39118__$1 = state_39118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39118__$1,(4),ch);
} else {
if((state_val_39119 === (11))){
var inst_39082 = (state_39118[(9)]);
var inst_39086 = (state_39118[(10)]);
var inst_39096 = (state_39118[(2)]);
var inst_39097 = [];
var inst_39098 = inst_39097.push(inst_39082);
var inst_39078 = inst_39097;
var inst_39079 = inst_39086;
var state_39118__$1 = (function (){var statearr_39130 = state_39118;
(statearr_39130[(7)] = inst_39079);

(statearr_39130[(11)] = inst_39098);

(statearr_39130[(12)] = inst_39096);

(statearr_39130[(8)] = inst_39078);

return statearr_39130;
})();
var statearr_39131_39155 = state_39118__$1;
(statearr_39131_39155[(2)] = null);

(statearr_39131_39155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39119 === (9))){
var inst_39078 = (state_39118[(8)]);
var inst_39094 = cljs.core.vec.call(null,inst_39078);
var state_39118__$1 = state_39118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39118__$1,(11),out,inst_39094);
} else {
if((state_val_39119 === (5))){
var inst_39079 = (state_39118[(7)]);
var inst_39082 = (state_39118[(9)]);
var inst_39086 = (state_39118[(10)]);
var inst_39086__$1 = f.call(null,inst_39082);
var inst_39087 = cljs.core._EQ_.call(null,inst_39086__$1,inst_39079);
var inst_39088 = cljs.core.keyword_identical_QMARK_.call(null,inst_39079,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39089 = (inst_39087) || (inst_39088);
var state_39118__$1 = (function (){var statearr_39132 = state_39118;
(statearr_39132[(10)] = inst_39086__$1);

return statearr_39132;
})();
if(cljs.core.truth_(inst_39089)){
var statearr_39133_39156 = state_39118__$1;
(statearr_39133_39156[(1)] = (8));

} else {
var statearr_39134_39157 = state_39118__$1;
(statearr_39134_39157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39119 === (14))){
var inst_39111 = (state_39118[(2)]);
var inst_39112 = cljs.core.async.close_BANG_.call(null,out);
var state_39118__$1 = (function (){var statearr_39136 = state_39118;
(statearr_39136[(13)] = inst_39111);

return statearr_39136;
})();
var statearr_39137_39158 = state_39118__$1;
(statearr_39137_39158[(2)] = inst_39112);

(statearr_39137_39158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39119 === (10))){
var inst_39101 = (state_39118[(2)]);
var state_39118__$1 = state_39118;
var statearr_39138_39159 = state_39118__$1;
(statearr_39138_39159[(2)] = inst_39101);

(statearr_39138_39159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39119 === (8))){
var inst_39082 = (state_39118[(9)]);
var inst_39078 = (state_39118[(8)]);
var inst_39086 = (state_39118[(10)]);
var inst_39091 = inst_39078.push(inst_39082);
var tmp39135 = inst_39078;
var inst_39078__$1 = tmp39135;
var inst_39079 = inst_39086;
var state_39118__$1 = (function (){var statearr_39139 = state_39118;
(statearr_39139[(7)] = inst_39079);

(statearr_39139[(8)] = inst_39078__$1);

(statearr_39139[(14)] = inst_39091);

return statearr_39139;
})();
var statearr_39140_39160 = state_39118__$1;
(statearr_39140_39160[(2)] = null);

(statearr_39140_39160[(1)] = (2));


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
});})(c__37269__auto___39146,out))
;
return ((function (switch__37181__auto__,c__37269__auto___39146,out){
return (function() {
var cljs$core$async$state_machine__37182__auto__ = null;
var cljs$core$async$state_machine__37182__auto____0 = (function (){
var statearr_39141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39141[(0)] = cljs$core$async$state_machine__37182__auto__);

(statearr_39141[(1)] = (1));

return statearr_39141;
});
var cljs$core$async$state_machine__37182__auto____1 = (function (state_39118){
while(true){
var ret_value__37183__auto__ = (function (){try{while(true){
var result__37184__auto__ = switch__37181__auto__.call(null,state_39118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37184__auto__;
}
break;
}
}catch (e39142){if((e39142 instanceof Object)){
var ex__37185__auto__ = e39142;
var statearr_39143_39161 = state_39118;
(statearr_39143_39161[(5)] = ex__37185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39162 = state_39118;
state_39118 = G__39162;
continue;
} else {
return ret_value__37183__auto__;
}
break;
}
});
cljs$core$async$state_machine__37182__auto__ = function(state_39118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37182__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37182__auto____1.call(this,state_39118);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37182__auto____0;
cljs$core$async$state_machine__37182__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37182__auto____1;
return cljs$core$async$state_machine__37182__auto__;
})()
;})(switch__37181__auto__,c__37269__auto___39146,out))
})();
var state__37271__auto__ = (function (){var statearr_39144 = f__37270__auto__.call(null);
(statearr_39144[(6)] = c__37269__auto___39146);

return statearr_39144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37271__auto__);
});})(c__37269__auto___39146,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
