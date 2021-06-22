(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{203:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),d=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=d(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=d(t),f=n,b=l["".concat(i,".").concat(f)]||l[f]||p[f]||s;return t?o.a.createElement(b,a(a({ref:r},u),{},{components:t})):o.a.createElement(b,a({ref:r},u))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=f;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var u=2;u<s;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},204:function(e,r,t){"use strict";t.d(r,"b",(function(){return s})),t.d(r,"a",(function(){return i}));var n=t(21),o=t(212);function s(){var e=Object(n.default)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,t=void 0===r?"/":r,s=e.url;return{withBaseUrl:function(e,r){return function(e,r,t,n){var s=void 0===n?{}:n,i=s.forcePrependBaseUrl,a=void 0!==i&&i,c=s.absolute,u=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if(Object(o.b)(t))return t;if(a)return r+t;var d=t.startsWith(r)?t:r+t.replace(/^\//,"");return u?e+d:d}(s,t,e,r)}}}function i(e,r){return void 0===r&&(r={}),(0,s().withBaseUrl)(e,r)}},212:function(e,r,t){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}t.d(r,"b",(function(){return n})),t.d(r,"a",(function(){return o}))},80:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return a})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return d}));var n=t(3),o=t(7),s=(t(0),t(203)),i=(t(204),{id:"index-sessionstorage",title:"Scaling an Express Application with Redis as a Session Store",sidebar_label:"Session Storage",slug:"/develop/node/nodecrashcourse/sessionstorage"}),a={unversionedId:"develop/node/node-crash-course/sessionstorage/index-sessionstorage",id:"develop/node/node-crash-course/sessionstorage/index-sessionstorage",isDocsHomePage:!1,title:"Scaling an Express Application with Redis as a Session Store",description:"TODO content.",source:"@site/docs/develop/node/node-crash-course/sessionstorage/index-sessionstorage.mdx",slug:"/develop/node/nodecrashcourse/sessionstorage",permalink:"/develop/node/nodecrashcourse/sessionstorage",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/node-crash-course/sessionstorage/index-sessionstorage.mdx",version:"current",sidebar_label:"Session Storage",sidebar:"docs",previous:{title:"Caching with Redis and Express Middleware",permalink:"/develop/node/nodecrashcourse/caching"},next:{title:"Advanced Streams: Parallel Processing Checkins with Consumer Groups",permalink:"/develop/node/nodecrashcourse/advancedstreams"}},c=[{value:"TODO Subheader",id:"todo-subheader",children:[{value:"TODO Another Subheader",id:"todo-another-subheader",children:[]},{value:"Further References",id:"further-references",children:[]}]}],u={toc:c};function d(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(s.b)("div",{class:"text--center"},Object(s.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/T8xay-l4HrM",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(s.b)("p",null,"TODO content."),Object(s.b)("h2",{id:"todo-subheader"},"TODO Subheader"),Object(s.b)("p",null,"TODO content."),Object(s.b)("h3",{id:"todo-another-subheader"},"TODO Another Subheader"),Object(s.b)("p",null,"TODO content."),Object(s.b)("h3",{id:"further-references"},"Further References"),Object(s.b)("p",null,"TODO content."))}d.isMDXComponent=!0}}]);