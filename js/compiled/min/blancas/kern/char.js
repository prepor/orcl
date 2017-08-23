// Compiled by ClojureScript 1.9.908 {}
goog.provide('blancas.kern.char$');
goog.require('cljs.core');
goog.require('clojure.string');
blancas.kern.char$.is_letter = (function blancas$kern$char$is_letter(c){
return cljs.core.re_find.call(null,/^[a-zA-Z]$/,c);
});
blancas.kern.char$.is_lower_case = (function blancas$kern$char$is_lower_case(c){
return cljs.core.re_find.call(null,/^[a-z]$/,c);
});
blancas.kern.char$.is_upper_case = (function blancas$kern$char$is_upper_case(c){
return cljs.core.re_find.call(null,/^[A-Z]$/,c);
});
blancas.kern.char$.is_white_space = (function blancas$kern$char$is_white_space(c){
return cljs.core.re_find.call(null,/^\s$/,c);
});
blancas.kern.char$.is_space = (function blancas$kern$char$is_space(c){
return cljs.core._EQ_.call(null,c," ");
});
blancas.kern.char$.is_tab = (function blancas$kern$char$is_tab(c){
return cljs.core._EQ_.call(null,c,"\t");
});
blancas.kern.char$.is_digit = (function blancas$kern$char$is_digit(c){
return cljs.core.re_find.call(null,/^[0-9]$/,c);
});
blancas.kern.char$.is_letter_or_digit = (function blancas$kern$char$is_letter_or_digit(c){
return cljs.core.re_find.call(null,/^[a-zA-Z0-9]$/,c);
});
blancas.kern.char$.upper_case = (function blancas$kern$char$upper_case(c){
return clojure.string.upper_case.call(null,c);
});

//# sourceMappingURL=char.js.map
