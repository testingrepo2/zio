"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[44332],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),f=a,m=s["".concat(c,".").concat(f)]||s[f]||y[f]||o;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26871:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const o={id:"rlayer",title:"RLayer"},i=void 0,l={unversionedId:"reference/contextual/rlayer",id:"reference/contextual/rlayer",title:"RLayer",description:"RLayer[-RIn, +ROut] is a type alias for ZLayer[RIn, Throwable, ROut], which represents a layer that requires RIn as its input, it may fail with Throwable value, or returns ROut as its output.",source:"@site/docs/reference/contextual/rlayer.md",sourceDirName:"reference/contextual",slug:"/reference/contextual/rlayer",permalink:"/reference/contextual/rlayer",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/contextual/rlayer.md",tags:[],version:"current",frontMatter:{id:"rlayer",title:"RLayer"},sidebar:"reference-sidebar",previous:{title:"ZLayer",permalink:"/reference/contextual/zlayer"},next:{title:"ULayer",permalink:"/reference/contextual/ulayer"}},c={},u=[],p={toc:u};function s(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RLayer[-RIn, +ROut]")," is a type alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"ZLayer[RIn, Throwable, ROut]"),", which represents a layer that requires ",(0,a.kt)("inlineCode",{parentName:"p"},"RIn")," as its input, it may fail with ",(0,a.kt)("inlineCode",{parentName:"p"},"Throwable")," value, or returns ",(0,a.kt)("inlineCode",{parentName:"p"},"ROut")," as its output."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"type RLayer[-RIn, +ROut]  = ZLayer[RIn, Throwable, ROut]\n")))}s.isMDXComponent=!0}}]);