(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{203:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(t),b=r,f=d["".concat(a,".").concat(b)]||d[b]||s[b]||i;return t?o.a.createElement(f,c(c({ref:n},p),{},{components:t})):o.a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},204:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return a}));var r=t(21),o=t(212);function i(){var e=Object(r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,u=i.absolute,p=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if(Object(o.b)(t))return t;if(c)return n+t;var l=t.startsWith(n)?t:n+t.replace(/^\//,"");return p?e+l:l}(i,t,e,n)}}}function a(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},212:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return o}))},85:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),i=(t(0),t(203)),a=(t(204),{id:"index-runningtheapplication",title:"Up and Running with the Sample Application",sidebar_label:"Running the Application",slug:"/develop/node/nodecrashcourse/runningtheapplication"}),c={unversionedId:"develop/node/node-crash-course/runningtheapplication/index-runningtheapplication",id:"develop/node/node-crash-course/runningtheapplication/index-runningtheapplication",isDocsHomePage:!1,title:"Up and Running with the Sample Application",description:"TODO content.",source:"@site/docs/develop/node/node-crash-course/runningtheapplication/index-runningtheapplication.mdx",slug:"/develop/node/nodecrashcourse/runningtheapplication",permalink:"/develop/node/nodecrashcourse/runningtheapplication",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/node-crash-course/runningtheapplication/index-runningtheapplication.mdx",version:"current",sidebar_label:"Running the Application",sidebar:"docs",previous:{title:"Sample Application Overview",permalink:"/develop/node/nodecrashcourse/sampleapplicationoverview"},next:{title:"Managing Domain Objects with Redis Hashes",permalink:"/develop/node/nodecrashcourse/domainobjectswithhashes"}},u=[{value:"TODO Subheader",id:"todo-subheader",children:[{value:"TODO Another Subheader",id:"todo-another-subheader",children:[]},{value:"Further References",id:"further-references",children:[]}]}],p={toc:u};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("div",{class:"text--center"},Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/5XymCb7b7XE",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(i.b)("p",null,"TODO content."),Object(i.b)("h2",{id:"todo-subheader"},"TODO Subheader"),Object(i.b)("p",null,"TODO content."),Object(i.b)("h3",{id:"todo-another-subheader"},"TODO Another Subheader"),Object(i.b)("p",null,"TODO content."),Object(i.b)("h3",{id:"further-references"},"Further References"),Object(i.b)("p",null,"TODO content."))}l.isMDXComponent=!0}}]);