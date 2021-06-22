(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{194:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return a})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return d}));var n=t(3),c=t(7),o=(t(0),t(203)),i=(t(204),{id:"index-checkinswithstreams",title:"Processing Checkins with Redis Streams",sidebar_label:"Checkins with Streams",slug:"/develop/node/nodecrashcourse/checkinswithstreams"}),a={unversionedId:"develop/node/node-crash-course/checkinswithstreams/index-checkinswithstreams",id:"develop/node/node-crash-course/checkinswithstreams/index-checkinswithstreams",isDocsHomePage:!1,title:"Processing Checkins with Redis Streams",description:"TODO content.",source:"@site/docs/develop/node/node-crash-course/checkinswithstreams/index-checkinswithstreams.mdx",slug:"/develop/node/nodecrashcourse/checkinswithstreams",permalink:"/develop/node/nodecrashcourse/checkinswithstreams",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/node-crash-course/checkinswithstreams/index-checkinswithstreams.mdx",version:"current",sidebar_label:"Checkins with Streams",sidebar:"docs",previous:{title:"Indexing and Querying with RediSearch",permalink:"/develop/node/nodecrashcourse/redisearch"},next:{title:"Managing Success with Redis",permalink:"/develop/node/nodecrashcourse/managingsuccess"}},s=[{value:"TODO Subheader",id:"todo-subheader",children:[{value:"TODO Another Subheader",id:"todo-another-subheader",children:[]},{value:"Further References",id:"further-references",children:[]}]}],u={toc:s};function d(e){var r=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("div",{class:"text--center"},Object(o.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/19gPDwmXNWc",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("p",null,"TODO content."),Object(o.b)("h2",{id:"todo-subheader"},"TODO Subheader"),Object(o.b)("p",null,"TODO content."),Object(o.b)("h3",{id:"todo-another-subheader"},"TODO Another Subheader"),Object(o.b)("p",null,"TODO content."),Object(o.b)("h3",{id:"further-references"},"Further References"),Object(o.b)("p",null,"TODO content."))}d.isMDXComponent=!0},203:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return f}));var n=t(0),c=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var u=c.a.createContext({}),d=function(e){var r=c.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=d(e.components);return c.a.createElement(u.Provider,{value:r},e.children)},h={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},p=c.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=d(t),p=n,f=l["".concat(i,".").concat(p)]||l[p]||h[p]||o;return t?c.a.createElement(f,a(a({ref:r},u),{},{components:t})):c.a.createElement(f,a({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=p;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var u=2;u<o;u++)i[u]=t[u];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},204:function(e,r,t){"use strict";t.d(r,"b",(function(){return o})),t.d(r,"a",(function(){return i}));var n=t(21),c=t(212);function o(){var e=Object(n.default)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,t=void 0===r?"/":r,o=e.url;return{withBaseUrl:function(e,r){return function(e,r,t,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,a=void 0!==i&&i,s=o.absolute,u=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if(Object(c.b)(t))return t;if(a)return r+t;var d=t.startsWith(r)?t:r+t.replace(/^\//,"");return u?e+d:d}(o,t,e,r)}}}function i(e,r){return void 0===r&&(r={}),(0,o().withBaseUrl)(e,r)}},212:function(e,r,t){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function c(e){return void 0!==e&&!n(e)}t.d(r,"b",(function(){return n})),t.d(r,"a",(function(){return c}))}}]);