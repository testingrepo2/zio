"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[26890],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(r),v=s,y=u["".concat(p,".").concat(v)]||u[v]||m[v]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=v;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:s,i[1]=a;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},66491:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=r(87462),s=(r(67294),r(3905));const o={id:"system",title:"System"},i=void 0,a={unversionedId:"services/system",id:"version-1.x/services/system",title:"System",description:"System service contains several useful functions related to system environments and properties. Both of system environments and system properties are key/value pairs. They used to pass user-defined information to our application.",source:"@site/versioned_docs/version-1.x/services/system.md",sourceDirName:"services",slug:"/services/system",permalink:"/version-1.x/services/system",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/services/system.md",tags:[],version:"1.x",frontMatter:{id:"system",title:"System"},sidebar:"services-sidebar",previous:{title:"Blocking",permalink:"/version-1.x/services/blocking"}},p={},l=[{value:"System Environment",id:"system-environment",level:2},{value:"System Property",id:"system-property",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"System service contains several useful functions related to system environments and properties. Both of ",(0,s.kt)("strong",{parentName:"p"},"system environments")," and ",(0,s.kt)("strong",{parentName:"p"},"system properties")," are key/value pairs. They used to pass user-defined information to our application."),(0,s.kt)("p",null,"Environment variables are global operating system level variables available to all applications running on the same machine while the properties are application-level variables provided to our application."),(0,s.kt)("h2",{id:"system-environment"},"System Environment"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"env")," function retrieve the value of an environment variable:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.console._\nimport zio.system._\nfor {\n  user <- env("USER")\n  _ <- user match {\n    case Some(value) => putStr(s"The USER env is: $value")\n    case None => putStr("Oops! The USER env is not set")\n  }\n} yield ()\n')),(0,s.kt)("h2",{id:"system-property"},"System Property"),(0,s.kt)("p",null,"Also, the System service has a `property function to retrieve the value of a system property:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'for {\n  user <- property("LOG_LEVEL")\n  _ <- user match {\n    case Some(value) => putStr(s"The LOG_LEVEL property is: $value")\n    case None => putStr("Oops! The LOG_LEVEL property is not set")\n  }\n} yield ()\n')))}u.isMDXComponent=!0}}]);