!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/js/",e(e.s=140)}([function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(58))},function(t,n,e){var r=e(1),o=e(36),i=e(3),c=e(26),u=e(40),a=e(66),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(0);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(4),o=e(8),i=e(16);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(5);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(4),o=e(33),i=e(7),c=e(25),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(1),o=e(31).f,i=e(6),c=e(10),u=e(19),a=e(60),f=e(44);t.exports=function(t,n){var e,s,l,p,d,v=t.target,g=t.global,h=t.stat;if(e=g?r:h?r[v]||u(v,{}):(r[v]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(d=o(e,s))&&d.value:e[s],!f(g?s:v+(h?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,s,p,t)}}},function(t,n,e){var r=e(1),o=e(6),i=e(3),c=e(19),u=e(34),a=e(20),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,e,u){var a=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),s(e).source=l.join("string"==typeof n?n:"")),t!==r?(a?!p&&t[n]&&(f=!0):delete t[n],f?t[n]=e:o(t,n,e)):f?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,n,e){var r=e(24),o=e(12);t.exports=function(t){return r(o(t))}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(14),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(12);t.exports=function(t){return Object(r(t))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports={}},function(t,n,e){var r=e(1),o=e(6);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r,o,i,c=e(59),u=e(1),a=e(5),f=e(6),s=e(3),l=e(29),p=e(18),d=u.WeakMap;if(c){var v=new d,g=v.get,h=v.has,x=v.set;r=function(t,n){return x.call(v,t,n),n},o=function(t){return g.call(v,t)||{}},i=function(t){return h.call(v,t)}}else{var y=l("state");p[y]=!0,r=function(t,n){return f(t,y,n),n},o=function(t){return s(t,y)?t[y]:{}},i=function(t){return s(t,y)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(62),o=e(1),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r={};r[e(2)("toStringTag")]="z",t.exports="[object z]"===String(r)},,function(t,n,e){var r=e(0),o=e(17),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(5);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},,function(t,n,e){var r=e(36),o=e(26),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports=!1},function(t,n,e){var r=e(4),o=e(32),i=e(16),c=e(11),u=e(25),a=e(3),f=e(33),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(4),o=e(0),i=e(42);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(35),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(1),o=e(19),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(30),o=e(35);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(3),o=e(11),i=e(43).indexOf,c=e(18);t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)!r(c,e)&&r(u,e)&&f.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(4),o=e(0),i=e(3),c=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,n){if(i(u,t))return u[t];n||(n={});var e=[][t],f=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:a,l=i(n,1)?n[1]:void 0;return u[t]=!!e&&!o((function(){if(f&&!r)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:a}):t[1]=1,e.call(t,s,l)}))}},function(t,n,e){var r=e(0);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){"use strict";
/**
 * @copyright Copyright (c) 2020 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var r=document.getElementById("hideDownload");n.a=function(){return!r||r&&"true"!==r.value}},function(t,n,e){var r=e(1),o=e(5),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,e){var r=e(11),o=e(13),i=e(64),c=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(0),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(37),o=e(27);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(22),o=e(17),i=e(2)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:c?o(n):"Object"==(r=o(n))&&"function"==typeof n.callee?"Arguments":r}},function(t,n,e){"use strict";var r,o,i=e(69),c=e(91),u=RegExp.prototype.exec,a=String.prototype.replace,f=u,s=(r=/a/,o=/b*/g,u.call(r,"a"),u.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=c.UNSUPPORTED_Y||c.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(s||p||l)&&(f=function(t){var n,e,r,o,c=this,f=l&&c.sticky,d=i.call(c),v=c.source,g=0,h=t;return f&&(-1===(d=d.replace("y","")).indexOf("g")&&(d+="g"),h=String(t).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==t[c.lastIndex-1])&&(v="(?: "+v+")",h=" "+h,g++),e=new RegExp("^(?:"+v+")",d)),p&&(e=new RegExp("^"+v+"$(?!\\s)",d)),s&&(n=c.lastIndex),r=u.call(f?e:c,h),f?r?(r.input=r.input.slice(g),r[0]=r[0].slice(g),r.index=c.lastIndex,c.lastIndex+=r[0].length):c.lastIndex=0:s&&r&&(c.lastIndex=c.global?r.index+r[0].length:n),p&&r&&r.length>1&&a.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=f},,,,,,function(t,n,e){"use strict";var r=e(0);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){var r=e(9),o=e(65);r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},function(t,n,e){var r=e(22),o=e(10),i=e(67);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,n,e){var r=e(14),o=e(12),i=function(t){return function(n,e){var i,c,u=String(o(n)),a=r(e),f=u.length;return a<0||a>=f?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===f||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,e){"use strict";e(90),e(54),e(55),e(68),e(92),e(93),Object.defineProperty(n,"__esModule",{value:!0}),n.getRootUrl=n.generateFilePath=n.imagePath=n.generateUrl=n.generateOcsUrl=n.generateRemoteUrl=n.linkTo=void 0;n.linkTo=function(t,n){return r(t,"",n)};n.generateRemoteUrl=function(t){return window.location.protocol+"//"+window.location.host+function(t){return o()+"/remote.php/"+t}(t)};n.generateOcsUrl=function(t,n){return n=2!==n?1:2,window.location.protocol+"//"+window.location.host+o()+"/ocs/v"+n+".php/"+t+"/"};n.generateUrl=function(t,n,e){var r=Object.assign({escape:!0,noRewrite:!1},e||{}),i=function(t,n){return n=n||{},t.replace(/{([^{}]*)}/g,(function(t,e){var o=n[e];return r.escape?"string"==typeof o||"number"==typeof o?encodeURIComponent(o.toString()):encodeURIComponent(t):"string"==typeof o||"number"==typeof o?o.toString():t}))};return"/"!==t.charAt(0)&&(t="/"+t),!0!==OC.config.modRewriteWorking||r.noRewrite?o()+"/index.php"+i(t,n||{}):o()+i(t,n||{})};n.imagePath=function(t,n){return-1===n.indexOf(".")?r(t,"img",n+".svg"):r(t,"img",n)};var r=function(t,n,e){var r=-1!==OC.coreApps.indexOf(t),i=o();return"php"!==e.substring(e.length-3)||r?"php"===e.substring(e.length-3)||r?(i+="settings"!==t&&"core"!==t&&"search"!==t||"ajax"!==n?"/":"/index.php/",r||(i+="apps/"),""!==t&&(i+=t+="/"),n&&(i+=n+"/"),i+=e):(i=OC.appswebroots[t],n&&(i+="/"+n+"/"),"/"!==i.substring(i.length-1)&&(i+="/"),i+=e):(i+="/index.php/apps/"+t,"index.php"!==e&&(i+="/",n&&(i+=encodeURI(n+"/")),i+=e)),i};n.generateFilePath=r;var o=function(){return OC.webroot};n.getRootUrl=o},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(1),o=e(34),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(3),o=e(61),i=e(31),c=e(8);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||u(t,s,a(n,s))}}},function(t,n,e){var r=e(21),o=e(63),i=e(38),c=e(7);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(1);t.exports=r},function(t,n,e){var r=e(37),o=e(27).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(14),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n,e){"use strict";var r=e(4),o=e(0),i=e(45),c=e(38),u=e(32),a=e(15),f=e(24),s=Object.assign,l=Object.defineProperty;t.exports=!s||o((function(){if(r&&1!==s({b:1},s(l({},"a",{enumerable:!0,get:function(){l(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},n={},e=Symbol();return t[e]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),7!=s({},t)[e]||"abcdefghijklmnopqrst"!=i(s({},n)).join("")}))?function(t,n){for(var e=a(t),o=arguments.length,s=1,l=c.f,p=u.f;o>s;)for(var d,v=f(arguments[s++]),g=l?i(v).concat(l(v)):i(v),h=g.length,x=0;h>x;)d=g[x++],r&&!p.call(v,d)||(e[d]=v[d]);return e}:s},function(t,n,e){var r=e(40);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){"use strict";var r=e(22),o=e(46);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,n,e){"use strict";var r=e(9),o=e(47);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,n,e){"use strict";var r=e(7);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";var r=e(9),o=e(43).indexOf,i=e(53),c=e(39),u=[].indexOf,a=!!u&&1/[1].indexOf(1,-0)<0,f=i("indexOf"),s=c("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:a||!f||!s},{indexOf:function(t){return a?u.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){"use strict";var r=e(0);function o(t,n){return RegExp(t,n)}n.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,n,e){"use strict";var r=e(10),o=e(7),i=e(0),c=e(69),u=RegExp.prototype,a=u.toString,f=i((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),s="toString"!=a.name;(f||s)&&r(RegExp.prototype,"toString",(function(){var t=o(this),n=String(t.source),e=t.flags;return"/"+n+"/"+String(void 0===e&&t instanceof RegExp&&!("flags"in u)?c.call(t):e)}),{unsafe:!0})},function(t,n,e){"use strict";var r=e(94),o=e(7),i=e(15),c=e(13),u=e(14),a=e(12),f=e(95),s=e(96),l=Math.max,p=Math.min,d=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(t,n,e,r){var h=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,x=r.REPLACE_KEEPS_$0,y=h?"$":"$0";return[function(e,r){var o=a(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,r):n.call(String(o),e,r)},function(t,r){if(!h&&x||"string"==typeof r&&-1===r.indexOf(y)){var i=e(n,t,this,r);if(i.done)return i.value}var a=o(t),d=String(this),v="function"==typeof r;v||(r=String(r));var g=a.global;if(g){var m=a.unicode;a.lastIndex=0}for(var S=[];;){var O=s(a,d);if(null===O)break;if(S.push(O),!g)break;""===String(O[0])&&(a.lastIndex=f(d,c(a.lastIndex),m))}for(var E,w="",j=0,_=0;_<S.length;_++){O=S[_];for(var R=String(O[0]),C=l(p(u(O.index),d.length),0),P=[],T=1;T<O.length;T++)P.push(void 0===(E=O[T])?E:String(E));var U=O.groups;if(v){var I=[R].concat(P,C,d);void 0!==U&&I.push(U);var A=String(r.apply(void 0,I))}else A=b(R,d,C,P,U,r);C>=j&&(w+=d.slice(j,C)+A,j=C+R.length)}return w+d.slice(j)}];function b(t,e,r,o,c,u){var a=r+t.length,f=o.length,s=g;return void 0!==c&&(c=i(c),s=v),n.call(u,s,(function(n,i){var u;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(a);case"<":u=c[i.slice(1,-1)];break;default:var s=+i;if(0===s)return n;if(s>f){var l=d(s/10);return 0===l?n:l<=f?void 0===o[l-1]?i.charAt(1):o[l-1]+i.charAt(1):n}u=o[s-1]}return void 0===u?"":u}))}}))},function(t,n,e){"use strict";e(68);var r=e(10),o=e(0),i=e(2),c=e(47),u=e(6),a=i("species"),f=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s="$0"==="a".replace(/./,"$0"),l=i("replace"),p=!!/./[l]&&""===/./[l]("a","$0"),d=!o((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,n,e,l){var v=i(t),g=!o((function(){var n={};return n[v]=function(){return 7},7!=""[t](n)})),h=g&&!o((function(){var n=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[a]=function(){return e},e.flags="",e[v]=/./[v]),e.exec=function(){return n=!0,null},e[v](""),!n}));if(!g||!h||"replace"===t&&(!f||!s||p)||"split"===t&&!d){var x=/./[v],y=e(v,""[t],(function(t,n,e,r,o){return n.exec===c?g&&!o?{done:!0,value:x.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),b=y[0],m=y[1];r(String.prototype,t,b),r(RegExp.prototype,v,2==n?function(t,n){return m.call(t,this,n)}:function(t){return m.call(t,this)})}l&&u(RegExp.prototype[v],"sham",!0)}},function(t,n,e){"use strict";var r=e(56).charAt;t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},function(t,n,e){var r=e(17),o=e(47);t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){var r=e(138);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,e(143).default)("6760f158",r,!0,{})},function(t,n,e){"use strict";e(136)},function(t,n,e){(n=e(139)(!1)).push([t.i,"iframe[data-v-7229e1f8]{width:100%;top:50px;position:absolute;height:calc(100vh - 50px)}\n",""]),t.exports=n},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var o=(c=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(a," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[e].concat(i).concat([o]).join("\n")}var c,u,a;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var u=0;u<t.length;u++){var a=[].concat(t[u]);r&&o[a[0]]||(e&&(a[2]?a[2]="".concat(e," and ").concat(a[2]):a[2]=e),n.push(a))}},n}},function(t,n,e){"use strict";e.r(n);var r=e(57),o=e(41);function i(t,n,e,r,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void e(t)}u.done?n(a):Promise.resolve(a).then(r,o)}var c={name:"PDFView",computed:{iframeSrc:function(){return Object(r.generateUrl)("/apps/files_pdfviewer/?file={file}&canDownload={canDownload}",{canDownload:Object(o.a)()?1:0,file:this.davPath})}},mounted:function(){var t,n=this;return(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.doneLoading(),n.$nextTick((function(){this.$el.focus()}));case 2:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var c=t.apply(n,e);function u(t){i(c,r,o,u,a,"next",t)}function a(t){i(c,r,o,u,a,"throw",t)}u(void 0)}))})()}};e(137);var u=function(t,n,e,r,o,i,c,u){var a,f="function"==typeof t?t.options:t;if(n&&(f.render=n,f.staticRenderFns=e,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),c?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},f._ssrRegister=a):o&&(a=u?function(){o.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot)}:o),a)if(f.functional){f._injectStyles=a;var s=f.render;f.render=function(t,n){return a.call(n),s(t,n)}}else{var l=f.beforeCreate;f.beforeCreate=l?[].concat(l,a):[a]}return{exports:t,options:f}}(c,(function(){var t=this.$createElement;return(this._self._c||t)("iframe",{attrs:{src:this.iframeSrc}})}),[],!1,null,"7229e1f8",null).exports;
/**
 * @copyright Copyright (c) 2020 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
window.addEventListener("DOMContentLoaded",(function(){OCA.Viewer.registerHandler({id:"pdf",mimes:["application/pdf","application/illustrator"],component:u})}))},,,function(t,n,e){"use strict";function r(t,n){for(var e=[],r={},o=0;o<n.length;o++){var i=n[o],c=i[0],u={id:t+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[c]?r[c].parts.push(u):e.push(r[c]={id:c,parts:[u]})}return e}e.r(n),e.d(n,"default",(function(){return d}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},c=o&&(document.head||document.getElementsByTagName("head")[0]),u=null,a=0,f=!1,s=function(){},l=null,p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(t,n,e,o){f=e,l=o||{};var c=r(t,n);return v(c),function(n){for(var e=[],o=0;o<c.length;o++){var u=c[o];(a=i[u.id]).refs--,e.push(a)}n?v(c=r(t,n)):c=[];for(o=0;o<e.length;o++){var a;if(0===(a=e[o]).refs){for(var f=0;f<a.parts.length;f++)a.parts[f]();delete i[a.id]}}}}function v(t){for(var n=0;n<t.length;n++){var e=t[n],r=i[e.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](e.parts[o]);for(;o<e.parts.length;o++)r.parts.push(h(e.parts[o]));r.parts.length>e.parts.length&&(r.parts.length=e.parts.length)}else{var c=[];for(o=0;o<e.parts.length;o++)c.push(h(e.parts[o]));i[e.id]={id:e.id,refs:1,parts:c}}}}function g(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function h(t){var n,e,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(f)return s;r.parentNode.removeChild(r)}if(p){var o=a++;r=u||(u=g()),n=b.bind(null,r,o,!1),e=b.bind(null,r,o,!0)}else r=g(),n=m.bind(null,r),e=function(){r.parentNode.removeChild(r)};return n(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;n(t=r)}else e()}}var x,y=(x=[],function(t,n){return x[t]=n,x.filter(Boolean).join("\n")});function b(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(n,o);else{var i=document.createTextNode(o),c=t.childNodes;c[n]&&t.removeChild(c[n]),c.length?t.insertBefore(i,c[n]):t.appendChild(i)}}function m(t,n){var e=n.css,r=n.media,o=n.sourceMap;if(r&&t.setAttribute("media",r),l.ssrId&&t.setAttribute("data-vue-ssr-id",n.id),o&&(e+="\n/*# sourceURL="+o.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}]);
//# sourceMappingURL=files_pdfviewer-main.js.map?v=3df9c6f06dc0a6ed4907