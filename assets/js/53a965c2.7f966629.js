"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[78980],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2464:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={id:"thub",title:"THub"},i=void 0,s={unversionedId:"reference/stm/thub",id:"reference/stm/thub",title:"THub",description:"A THub is a transactional message hub. Publishers can publish messages to the hub and subscribers can subscribe to take messages from the hub.",source:"@site/docs/reference/stm/thub.md",sourceDirName:"reference/stm",slug:"/reference/stm/thub",permalink:"/reference/stm/thub",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/stm/thub.md",tags:[],version:"current",frontMatter:{id:"thub",title:"THub"},sidebar:"reference-sidebar",previous:{title:"TSemaphore",permalink:"/reference/stm/tsemaphore"},next:{title:"Introduction to Resource Management in ZIO",permalink:"/reference/resource/"}},c={},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"THub")," is a transactional message hub. Publishers can publish messages to the hub and subscribers can subscribe to take messages from the hub."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"THub")," is an asynchronous message hub like ",(0,a.kt)("inlineCode",{parentName:"p"},"Hub")," but it can participate in STM transactions. APIs are almost identical, but they are in the ",(0,a.kt)("inlineCode",{parentName:"p"},"STM")," world rather than the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," world."),(0,a.kt)("p",null,"The fundamental operators on a ",(0,a.kt)("inlineCode",{parentName:"p"},"THub")," are ",(0,a.kt)("inlineCode",{parentName:"p"},"publish")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait THub[A] {\n  def publish(a: A): USTM[Boolean]\n  def subscribe: USTM[TDequeue[B]]\n}\n")))}p.isMDXComponent=!0}}]);