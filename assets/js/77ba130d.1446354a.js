"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[90861],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),f=a,d=s["".concat(l,".").concat(f)]||s[f]||y[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9980:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={id:"urlayer",title:"URLayer"},i=void 0,c={unversionedId:"reference/contextual/urlayer",id:"reference/contextual/urlayer",title:"URLayer",description:"URLayer[-RIn, +ROut] is a type alias for ZLayer[RIn, Nothing, ROut], which represents a layer that requires RIn as its input, it can't fail, and returns ROut as its output.",source:"@site/docs/reference/contextual/urlayer.md",sourceDirName:"reference/contextual",slug:"/reference/contextual/urlayer",permalink:"/reference/contextual/urlayer",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/contextual/urlayer.md",tags:[],version:"current",frontMatter:{id:"urlayer",title:"URLayer"},sidebar:"reference-sidebar",previous:{title:"Layer",permalink:"/reference/contextual/layer"},next:{title:"TaskLayer",permalink:"/reference/contextual/tasklayer"}},l={},u=[],p={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"URLayer[-RIn, +ROut]")," is a type alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"ZLayer[RIn, Nothing, ROut]"),", which represents a layer that requires ",(0,a.kt)("inlineCode",{parentName:"p"},"RIn")," as its input, it can't fail, and returns ",(0,a.kt)("inlineCode",{parentName:"p"},"ROut")," as its output."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"type URLayer[-RIn, +ROut] = ZLayer[RIn, Nothing, ROut]\n")))}s.isMDXComponent=!0}}]);