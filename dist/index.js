"use strict";var i=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var u=i(function(b,v){
var c=require('@stdlib/blas-ext-base-sindex-of-truthy/dist').ndarray;function l(r,e,a,s){var t;return r<=0?-1:(s+=(r-1)*a,a*=-1,t=c(r,e,a,s),t<0?t:r-1-t)}v.exports=l
});var y=i(function(g,q){
var O=require('@stdlib/strided-base-stride2offset/dist'),h=u();function p(r,e,a){return h(r,e,a,O(r,a))}q.exports=p
});var x=i(function(k,f){
var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=y(),I=u();T(d,"ndarray",I);f.exports=d
});var j=require("path").join,m=require('@stdlib/utils-try-require/dist'),R=require('@stdlib/assert-is-error/dist'),_=x(),n,o=m(j(__dirname,"./native.js"));R(o)?n=_:n=o;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
