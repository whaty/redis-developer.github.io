(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{127:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return u})),t.d(r,"metadata",(function(){return a})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return d}));var n=t(3),o=t(7),c=(t(0),t(203)),u=(t(204),{id:"index-coursewrapup",title:"Course Wrap Up",sidebar_label:"Wrap Up",slug:"/develop/node/nodecrashcourse/coursewrapup"}),a={unversionedId:"develop/node/node-crash-course/coursewrapup/index-coursewrapup",id:"develop/node/node-crash-course/coursewrapup/index-coursewrapup",isDocsHomePage:!1,title:"Course Wrap Up",description:"TODO content.",source:"@site/docs/develop/node/node-crash-course/coursewrapup/index-coursewrapup.mdx",slug:"/develop/node/nodecrashcourse/coursewrapup",permalink:"/develop/node/nodecrashcourse/coursewrapup",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/node-crash-course/coursewrapup/index-coursewrapup.mdx",version:"current",sidebar_label:"Wrap Up",sidebar:"docs",previous:{title:"Preventing Duplicate Checkins with RedisBloom",permalink:"/develop/node/nodecrashcourse/redisbloom"},next:{title:"Python and Redis",permalink:"/develop/python/"}},i=[{value:"TODO Subheader",id:"todo-subheader",children:[{value:"TODO Another Subheader",id:"todo-another-subheader",children:[]},{value:"Further References",id:"further-references",children:[]}]}],p={toc:i};function d(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("div",{class:"text--center"},Object(c.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/CgsglxiuSGc",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(c.b)("p",null,"TODO content."),Object(c.b)("h2",{id:"todo-subheader"},"TODO Subheader"),Object(c.b)("p",null,"TODO content."),Object(c.b)("h3",{id:"todo-another-subheader"},"TODO Another Subheader"),Object(c.b)("p",null,"TODO content."),Object(c.b)("h3",{id:"further-references"},"Further References"),Object(c.b)("p",null,"TODO content."))}d.isMDXComponent=!0},203:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),d=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=d(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(t),f=n,b=s["".concat(u,".").concat(f)]||s[f]||l[f]||c;return t?o.a.createElement(b,a(a({ref:r},p),{},{components:t})):o.a.createElement(b,a({ref:r},p))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,u=new Array(c);u[0]=f;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:n,u[1]=a;for(var p=2;p<c;p++)u[p]=t[p];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},204:function(e,r,t){"use strict";t.d(r,"b",(function(){return c})),t.d(r,"a",(function(){return u}));var n=t(21),o=t(212);function c(){var e=Object(n.default)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,t=void 0===r?"/":r,c=e.url;return{withBaseUrl:function(e,r){return function(e,r,t,n){var c=void 0===n?{}:n,u=c.forcePrependBaseUrl,a=void 0!==u&&u,i=c.absolute,p=void 0!==i&&i;if(!t)return t;if(t.startsWith("#"))return t;if(Object(o.b)(t))return t;if(a)return r+t;var d=t.startsWith(r)?t:r+t.replace(/^\//,"");return p?e+d:d}(c,t,e,r)}}}function u(e,r){return void 0===r&&(r={}),(0,c().withBaseUrl)(e,r)}},212:function(e,r,t){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}t.d(r,"b",(function(){return n})),t.d(r,"a",(function(){return o}))}}]);