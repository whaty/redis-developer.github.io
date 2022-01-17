(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{263:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(7),s=(n(0),n(316)),o={id:"index-windows",title:"How to Install Redis on Windows 10",sidebar_label:"Redis on Windows",slug:"/create/windows",authors:["ajeet"]},a={unversionedId:"create/windows/index-windows",id:"create/windows/index-windows",isDocsHomePage:!1,title:"How to Install Redis on Windows 10",description:"You can install Redis on Windows 10 using Windows Subsystem for Linux(a.k.a WSL2).",source:"@site/docs/create/windows/index-windows.mdx",slug:"/create/windows",permalink:"/create/windows",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/windows/index-windows.mdx",version:"current",sidebar_label:"Redis on Windows",sidebar:"docs",previous:{title:"Create Redis database on Mac",permalink:"/create/homebrew/"},next:{title:"Create Redis database from Source",permalink:"/create/from-source/"}},c=[{value:"Step 1: Turn on Windows Subsystem for Linux",id:"step-1-turn-on-windows-subsystem-for-linux",children:[]},{value:"Step 2: Launch Microsoft Windows Store",id:"step-2-launch-microsoft-windows-store",children:[]},{value:"Step 3: Install Redis",id:"step-3-install-redis",children:[]},{value:"Step 4: Restart the Redis server",id:"step-4-restart-the-redis-server",children:[]},{value:"Step 5: Verify if your Redis server is running",id:"step-5-verify-if-your-redis-server-is-running",children:[]},{value:"Step 6: Stop the Redis Server",id:"step-6-stop-the-redis-server",children:[]},{value:"References",id:"references",children:[]},{value:"Redis University",id:"redis-university",children:[]}],l={toc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"You can install Redis on Windows 10 using Windows Subsystem for Linux(a.k.a WSL2).\nWSL2 is a compatibility layer for running Linux binary executables natively on Windows 10 and Windows Server 2019.\nWSL2 lets developers run a GNU/Linux environment(that includes command-line tools, utilities, and applications) directly on Windows."),Object(s.b)("p",null,"Follow the below steps to create Redis database on Microsoft Windows 10."),Object(s.b)("h3",{id:"step-1-turn-on-windows-subsystem-for-linux"},"Step 1: Turn on Windows Subsystem for Linux"),Object(s.b)("p",null,"In Windows 10, Microsoft replaces Command Prompt with PowerShell as the default shell. Open PowerShell as Administrator and run this command to enable Windows Subsystem for Linux (WSL):"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-powershell"})," Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux\n")),Object(s.b)("p",null,"Reboot Windows after making the change\u2014note that you only need to do this one time."),Object(s.b)("h3",{id:"step-2-launch-microsoft-windows-store"},"Step 2: Launch Microsoft Windows Store"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-powershell"})," start ms-windows-store:\n")),Object(s.b)("h3",{id:"step-3-install-redis"},"Step 3: Install Redis"),Object(s.b)("p",null,"The following example works with Ubuntu (you\u2019ll need to wait for initialization and create a login upon first use):"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," sudo apt-add-repository ppa:redislabs/redis\n sudo apt-get update\n sudo apt-get upgrade\n sudo apt-get install redis-server\n")),Object(s.b)("h3",{id:"step-4-restart-the-redis-server"},"Step 4: Restart the Redis server"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," sudo service redis-server restart\n")),Object(s.b)("h3",{id:"step-5-verify-if-your-redis-server-is-running"},"Step 5: Verify if your Redis server is running"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),' $ redis-cli \n 127.0.0.1:6379> set user:1 "Jane"\n 127.0.0.1:6379> get user:1\n"Jane"\n')),Object(s.b)("p",null,"Please note: By default, Redis has 0-15 indexes for databases, you can change that number databases NUMBER in redis.conf."),Object(s.b)("h3",{id:"step-6-stop-the-redis-server"},"Step 6: Stop the Redis Server"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," sudo service redis-server stop\n")),Object(s.b)("h3",{id:"references"},"References"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://redis.com/lp/redis-windows/"}),"Redis Enterprise For Windows")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://redis.io/clients#c"}),"List of .Net Clients")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/StackExchange/StackExchange.Redis"}),"Redis client for .NET languages"))),Object(s.b)("h3",{id:"redis-university"},"Redis University"),Object(s.b)("p",null,"Check out this video if you want to see Redis on Windows 10 Home Edition in action."),Object(s.b)("div",{class:"text--center"},Object(s.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/qTN0GqF_Gq8",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}d.isMDXComponent=!0},316:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return w}));var r=n(0),i=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,w=u["".concat(o,".").concat(b)]||u[b]||p[b]||s;return n?i.a.createElement(w,a(a({ref:t},l),{},{components:n})):i.a.createElement(w,a({ref:t},l))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var l=2;l<s;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);