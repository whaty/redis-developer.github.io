(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{165:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(166),c=t(22),o=t(27),i=t(182),s=t(3),m=t(7),u=t(170),b=t(175),d=t(169),f=t(192),E=t(193),v=t(224),h=t(176),g=t(181),p=(t(198),function(e){return l.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),l.a.createElement("g",{fill:"#7a7a7a"},l.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),l.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}),k=t(194),O=t(86),_=t.n(O),j=t(167);var N=function e(a,t){return"link"===a.type?Object(b.isSamePath)(a.href,t):"category"===a.type&&a.items.some((function(a){return e(a,t)}))};function C(e){var a,t,r,c=e.item,o=e.onItemClick,i=e.collapsible,b=e.activePath,d=Object(m.a)(e,["item","onItemClick","collapsible","activePath"]),f=c.items,E=c.label,v=N(c,b),h=(t=v,r=Object(n.useRef)(t),Object(n.useEffect)((function(){r.current=t}),[t]),r.current),g=Object(n.useState)((function(){return!!i&&(!v&&c.collapsed)})),p=g[0],k=g[1],O=Object(n.useRef)(null),j=Object(n.useState)(void 0),C=j[0],y=j[1],S=function(e){var a;void 0===e&&(e=!0),y(e?(null===(a=O.current)||void 0===a?void 0:a.scrollHeight)+"px":void 0)};Object(n.useEffect)((function(){v&&!h&&p&&k(!1)}),[v,h,p]);var F=Object(n.useCallback)((function(e){e.preventDefault(),C||S(),setTimeout((function(){return k((function(e){return!e}))}),100)}),[C]);return 0===f.length?null:l.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":p}),key:E},l.a.createElement("a",Object(s.a)({className:Object(u.a)("menu__link",(a={"menu__link--sublist":i,"menu__link--active":i&&v},a[_.a.menuLinkText]=!i,a)),onClick:i?F:void 0,href:i?"#!":void 0},d),E),l.a.createElement("ul",{className:"menu__list",ref:O,style:{height:C},onTransitionEnd:function(){p||S(!1)}},f.map((function(e){return l.a.createElement(w,{tabIndex:p?"-1":"0",key:e.label,item:e,onItemClick:o,collapsible:i,activePath:b})}))))}function y(e){var a=e.item,t=e.onItemClick,n=e.activePath,r=(e.collapsible,Object(m.a)(e,["item","onItemClick","activePath","collapsible"])),c=a.href,o=a.label,i=N(a,n);return l.a.createElement("li",{className:"menu__list-item",key:o},l.a.createElement(h.a,Object(s.a)({className:Object(u.a)("menu__link",{"menu__link--active":i}),to:c},Object(g.a)(c)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},r),o))}function w(e){switch(e.item.type){case"category":return l.a.createElement(C,e);case"link":default:return l.a.createElement(y,e)}}var S=function(e){var a,t,r=e.path,c=e.sidebar,o=e.sidebarCollapsible,i=void 0===o||o,s=e.onCollapse,m=e.isHidden,h=Object(n.useState)(!1),g=h[0],O=h[1],N=Object(b.useThemeConfig)(),C=N.navbar.hideOnScroll,y=N.hideableSidebar,S=Object(d.a)().isAnnouncementBarClosed,F=Object(v.a)().scrollY;Object(f.a)(g);var x=Object(E.a)();return Object(n.useEffect)((function(){x===E.b.desktop&&O(!1)}),[x]),l.a.createElement("div",{className:Object(u.a)(_.a.sidebar,(a={},a[_.a.sidebarWithHideableNavbar]=C,a[_.a.sidebarHidden]=m,a))},C&&l.a.createElement("div",{className:"sidebar-logo"},l.a.createElement("a",{href:Object(j.a)("/")},l.a.createElement("img",{src:Object(j.a)("/img/logo-1-dark.png"),tabIndex:-1}))),l.a.createElement("div",{className:Object(u.a)("menu","menu--responsive","thin-scrollbar",_.a.menu,(t={"menu--show":g},t[_.a.menuWithAnnouncementBar]=!S&&0===F,t))},l.a.createElement("button",{"aria-label":g?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){O(!g)}},g?l.a.createElement("span",{className:Object(u.a)(_.a.sidebarMenuIcon,_.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement(k.a,{className:_.a.sidebarMenuIcon,height:24,width:24})),l.a.createElement("ul",{className:"menu__list"},c.map((function(e){return l.a.createElement(w,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),O(!1)},collapsible:i,activePath:r})})))),y&&l.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(u.a)("button button--secondary button--outline",_.a.collapseSidebarButton),onClick:s},l.a.createElement(p,{className:_.a.collapseSidebarButtonIcon})))},F=t(174),x=t(220),I=t(179),M=t(87),T=t.n(M);function L(e){var a,t,o,s,m=e.currentDocRoute,d=e.versionMetadata,f=e.children,E=Object(c.default)(),v=E.siteConfig,h=E.isClient,g=d.pluginId,k=d.permalinkToSidebar,O=d.docsSidebars,_=d.version,j=k[m.path],N=O[j],C=Object(n.useState)(!1),y=C[0],w=C[1],x=Object(n.useState)(!1),I=x[0],M=x[1],L=Object(n.useCallback)((function(){I&&M(!1),w(!y)}),[I]);return l.a.createElement(i.a,{key:h,searchMetadatas:{version:_,tag:Object(b.docVersionSearchTag)(g,_)}},l.a.createElement("div",{className:T.a.docPage},N&&l.a.createElement("div",{className:Object(u.a)(T.a.docSidebarContainer,(a={},a[T.a.docSidebarContainerHidden]=y,a)),onTransitionEnd:function(e){e.currentTarget.classList.contains(T.a.docSidebarContainer)&&y&&M(!0)},role:"complementary"},l.a.createElement(S,{key:j,sidebar:N,path:m.path,sidebarCollapsible:null===(t=null===(o=v.themeConfig)||void 0===o?void 0:o.sidebarCollapsible)||void 0===t||t,onCollapse:L,isHidden:I}),I&&l.a.createElement("div",{className:T.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:L,onClick:L},l.a.createElement(p,null))),l.a.createElement("main",{className:T.a.docMainContainer},l.a.createElement("div",{className:Object(u.a)("container padding-vert--lg",T.a.docItemWrapper,(s={},s[T.a.docItemWrapperEnhanced]=y,s))},l.a.createElement(r.a,{components:F.a},f)))))}a.default=function(e){var a=e.route.routes,t=e.versionMetadata,n=e.location,r=a.find((function(e){return Object(I.matchPath)(n.pathname,e)}));return r?l.a.createElement(L,{currentDocRoute:r,versionMetadata:t},Object(o.a)(a)):l.a.createElement(x.default,e)}},182:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(170),c=t(199),o=t(175),i=t(169),s=(t(57),t(3)),m=t(7),u=function(e){var a=e.color,t=void 0===a?"#161F31":a,n=Object(m.a)(e,["color"]);return l.a.createElement("svg",Object(s.a)({width:"13",height:"13",xmlns:"http://www.w3.org/2000/svg"},n),l.a.createElement("path",{d:"M11.807 12.578a.744.744 0 00.547-.224.744.744 0 00.224-.547.698.698 0 00-.234-.537L7.383 6.29l4.96-4.981a.698.698 0 00.235-.538.744.744 0 00-.224-.546.744.744 0 00-.547-.225.698.698 0 00-.537.234L6.29 5.195 1.308.235A.698.698 0 00.77 0a.744.744 0 00-.546.225A.744.744 0 000 .77c0 .215.078.394.234.538l4.961 4.98-4.96 4.98a.698.698 0 00-.235.538c0 .214.075.397.225.547.15.15.332.224.546.224a.698.698 0 00.538-.234l4.98-4.98 4.98 4.98a.698.698 0 00.538.234z",fill:t,fillRule:"nonzero"}))};var b=function(){var e,a=Object(i.a)(),t=a.isAnnouncementBarClosed,n=a.closeAnnouncementBar,c=Object(o.useThemeConfig)().announcementBar;if(!c)return null;var s=c.content,m=(c.backgroundColor,c.textColor,c.isCloseable);return!s||m&&t?null:l.a.createElement("div",{className:"announcementBar",role:"banner"},l.a.createElement("div",{className:Object(r.a)("announcementBarContent",(e={},e.announcementBarCloseable=m,e)),dangerouslySetInnerHTML:{__html:s}}),m?l.a.createElement("button",{type:"button",className:"announcementBarClose",onClick:n,"aria-label":"Close"},l.a.createElement(u,{color:"#FFFFFF"})):null)},d=t(218),f=t(200),E=t(178),v=t(201),h=t(192),g=t(193),p=t(219),k=t(198),O=(t(194),t(58)),_=t.n(O),j=function(e){var a=e.color,t=void 0===a?"#161F31":a,n=Object(m.a)(e,["color"]);return l.a.createElement("svg",Object(s.a)({width:"24",height:"18",xmlns:"http://www.w3.org/2000/svg"},n),l.a.createElement("g",{stroke:t,strokeWidth:"1.65",fill:"none",fillRule:"evenodd",strokeDasharray:"4.4",strokeLinecap:"round",strokeLinejoin:"round"},l.a.createElement("path",{d:"M1 16.95h24.2M1 9.25h24.2M1 1.55h24.2"})))},N="right";var C=function(){var e,a,t=Object(o.useThemeConfig)(),c=t.navbar,i=c.items,m=c.hideOnScroll,u=c.style,b=t.colorMode.disableSwitch,O=Object(n.useState)(!1),C=O[0],y=O[1],w=Object(n.useState)(!1),S=w[0],F=w[1],x=Object(E.a)(),I=x.isDarkTheme,M=x.setLightTheme,T=x.setDarkTheme,L=Object(v.a)(m),B=L.navbarRef,H=L.isNavbarVisible;Object(h.a)(C);var D=Object(n.useCallback)((function(){y(!0)}),[y]),A=Object(n.useCallback)((function(){y(!1)}),[y]),P=Object(n.useCallback)((function(e){return e.target.checked?T():M()}),[M,T]),R=Object(g.a)();Object(n.useEffect)((function(){R===g.b.desktop&&y(!1)}),[R]);var U=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:N)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:N)}))}}(i),z=U.leftItems,W=U.rightItems;return l.a.createElement("nav",{ref:B,className:Object(r.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===u,"navbar--primary":"primary"===u,"navbar-sidebar--show":C},e[_.a.navbarHideable]=m,e[_.a.navbarHidden]=!H,e))},l.a.createElement("div",{className:"navbar__inner"},l.a.createElement("div",{className:"navbar__items"},null!=i&&0!==i.length&&l.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:D,onKeyDown:D},l.a.createElement(j,{color:"#FFFFFF"})),l.a.createElement(k.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(r.a)("navbar__title",(a={},a[_.a.hideLogoText]=S,a))}),z.map((function(e,a){return l.a.createElement(p.a,Object(s.a)({},e,{key:a}))}))),l.a.createElement("div",{className:"navbar__items navbar__items--right"},W.map((function(e,a){return l.a.createElement(p.a,Object(s.a)({},e,{key:a}))})),!b&&l.a.createElement(f.a,{className:_.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:I,onChange:P}),l.a.createElement(d.a,{handleSearchBarToggle:F,isSearchBarExpanded:S}))),l.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:A}),l.a.createElement("div",{className:"navbar-sidebar"},l.a.createElement("div",{className:"navbar-sidebar__brand"},l.a.createElement(k.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:A}),!b&&C&&l.a.createElement(f.a,{"aria-label":"Dark mode toggle in sidebar",checked:I,onChange:P})),l.a.createElement("div",{className:"navbar-sidebar__items"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},i.map((function(e,a){return l.a.createElement(p.a,Object(s.a)({mobile:!0},e,{onClick:A,key:a}))})))))))},y=t(176),w=t(167),S=t(59),F=t.n(S),x=function(e){var a=e.color,t=void 0===a?"#465282":a,n=Object(m.a)(e,["color"]);return l.a.createElement("svg",Object(s.a)({width:"785",height:"158",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},n),l.a.createElement("defs",null,l.a.createElement("path",{d:"M786.344 392.459c-41.822 22.164-258.313 110.84-305.056 135.477-46.742 24.637-72.163 23.812-108.246 6.57-36.082-17.24-267.334-111.664-309.156-131.377-41.822-19.713-42.642-33.657-1.64-49.271C103.25 338.265 332.86 247.94 381.243 229.875c48.383-18.065 65.604-18.065 106.605-2.473 41.003 15.614 256.674 100.996 297.676 115.785 41.002 14.791 42.642 27.912.82 49.273v-.001z",id:"a"}),l.a.createElement("mask",{id:"b",maskContentUnits:"userSpaceOnUse",maskUnits:"objectBoundingBox",x:"0",y:"0",width:"785",height:"331",fill:"#fff"},l.a.createElement("use",{xlinkHref:"#a"}))),l.a.createElement("use",{mask:"url(#b)",xlinkHref:"#a",transform:"translate(-32 -216)",stroke:t,strokeWidth:"4",fill:"none",fillRule:"evenodd",strokeDasharray:"3.637"}))};function I(e){var a=e.to,t=e.href,n=e.label,r=e.prependBaseUrlToHref,c=Object(m.a)(e,["to","href","label","prependBaseUrlToHref"]),o=Object(w.a)(a),i=Object(w.a)(t,{forcePrependBaseUrl:!0});return l.a.createElement(y.a,Object(s.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:r?i:t}:{to:o},c),n)}var M=function(e){var a=e.url,t=e.alt;return l.a.createElement("img",{loading:"lazy",className:"footer__logo",alt:t,src:a})};var T=function(){var e=Object(o.useThemeConfig)().footer,a=e||{},t=a.copyright,n=a.links,c=void 0===n?[]:n,i=a.logo,s=void 0===i?{}:i,m=Object(w.a)(s.src);return e?l.a.createElement("footer",{className:Object(r.a)("footer",{"footer--dark":"dark"===e.style})},l.a.createElement("div",{className:"container"},l.a.createElement(x,{className:"shape"}),l.a.createElement("img",{src:Object(w.a)("/img/code-2.png"),className:"code",alt:""}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--3"},s&&s.src&&l.a.createElement("div",{class:"footer__logo-ctr"},l.a.createElement("span",{class:"footer__logo-tagline"},"Made with </> by"),s.href?l.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener",className:F.a.footerLogoLink},l.a.createElement(M,{alt:s.alt,url:m})):l.a.createElement(M,{alt:s.alt,url:m}))),l.a.createElement("div",{className:"col col--9"},c&&c.length>0&&l.a.createElement("div",{className:"row footer__links"},c.map((function(e,a){return l.a.createElement("div",{key:a,className:"col col--4 footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?l.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement(I,e))}))):null)}))))),t?l.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null)):null},L=t(217),B=t(23),H=t(22),D=t(202);function A(e){var a=Object(H.default)(),t=a.siteConfig,n=a.i18n.currentLocale,r=t.favicon,c=t.themeConfig,i=c.image,m=c.metadatas,u=t.url,b=e.title,d=e.description,f=e.image,E=e.keywords,v=e.permalink,h=e.searchMetadatas,g=Object(o.useTitleFormatter)(b),p=f||i,k=Object(w.a)(p,{absolute:!0}),O=Object(w.a)(r),_=n.split("-")[0];return l.a.createElement(l.a.Fragment,null,l.a.createElement(B.a,null,l.a.createElement("html",{lang:_}),g&&l.a.createElement("title",null,g),g&&l.a.createElement("meta",{property:"og:title",content:g}),r&&l.a.createElement("link",{rel:"shortcut icon",href:O}),d&&l.a.createElement("meta",{name:"description",content:d}),d&&l.a.createElement("meta",{property:"og:description",content:d}),E&&E.length&&l.a.createElement("meta",{name:"keywords",content:E.join(",")}),p&&l.a.createElement("meta",{property:"og:image",content:k}),p&&l.a.createElement("meta",{name:"twitter:image",content:k}),p&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+g}),v&&l.a.createElement("meta",{property:"og:url",content:u+v}),v&&l.a.createElement("link",{rel:"canonical",href:u+v}),l.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.a.createElement("meta",{property:"og:image",content:Object(w.a)("/img/share.png")}),l.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto+Mono:wght@400;500;600;700&display=swap",rel:"stylesheet"})),l.a.createElement(D.a,Object(s.a)({tag:o.DEFAULT_SEARCH_TAG,locale:n},h)),l.a.createElement(B.a,null,m.map((function(e,a){return l.a.createElement("meta",Object(s.a)({key:"metadata_"+a},e))}))))}var P=t(203);t(60);a.a=function(e){var a=e.children,t=e.noFooter,n=e.wrapperClassName;return Object(P.a)(),l.a.createElement(L.a,null,l.a.createElement(A,e),l.a.createElement(c.a,null),l.a.createElement(b,null),l.a.createElement(C,null),l.a.createElement("div",{className:Object(r.a)("main-wrapper",n)},a),!t&&l.a.createElement(T,null))}},185:function(e,a,t){"use strict";var n=t(3),l=t(7),r=t(0),c=t.n(r);a.a=function(e){var a=e.color,t=Object(l.a)(e,["color"]);return c.a.createElement("svg",Object(n.a)({width:"47",height:"11",xmlns:"http://www.w3.org/2000/svg"},t),c.a.createElement("g",{fill:"none",fillRule:"evenodd"},c.a.createElement("circle",{fill:a||"#CF5815",cx:"5.5",cy:"5.5",r:"5.5"}),c.a.createElement("circle",{fill:a||"#5961FF",cx:"23.5",cy:"5.5",r:"5.5"}),c.a.createElement("circle",{fill:a||"#14708D",cx:"41.5",cy:"5.5",r:"5.5"})))}},220:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(182),c=t(167),o=t(204),i=t.n(o),s=t(185);a.default=function(){return l.a.createElement(r.a,{title:"Page Not Found"},l.a.createElement("main",{className:"rds-404"},l.a.createElement("img",{src:Object(c.a)("/img/code-3.png"),className:"code",alt:""}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--8 col--offset-2"},l.a.createElement("div",{class:"terminal"},l.a.createElement("div",{className:"terminal-header"},l.a.createElement(s.a,{color:"#FFFFFF"})),l.a.createElement("div",{className:"terminal-body"},"404")),l.a.createElement("h1",{className:"title"},l.a.createElement(i.a,{strings:[">_ Page not found"],typeSpeed:75})),l.a.createElement("a",{href:"/",className:"link"},"Back to homepage"))))))}}}]);