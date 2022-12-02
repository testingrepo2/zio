"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[24603],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return t?n.createElement(f,a(a({ref:r},c),{},{components:t})):n.createElement(f,a({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},64683:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const i={id:"supervision",title:"Supervision"},a=void 0,s={unversionedId:"zio-actors/supervision",id:"zio-actors/supervision",title:"Supervision",description:"A Supervisors responsibility is to manage actors failure policies.",source:"@site/docs/zio-actors/supervision.md",sourceDirName:"zio-actors",slug:"/zio-actors/supervision",permalink:"/zio-actors/supervision",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-actors/supervision.md",tags:[],version:"current",frontMatter:{id:"supervision",title:"Supervision"},sidebar:"ecosystem-sidebar",previous:{title:"Basics",permalink:"/zio-actors/basics"},next:{title:"Remoting",permalink:"/zio-actors/remoting"}},p={},l=[],c={toc:l};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Supervisors")," responsibility is to manage actors failure policies."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," provides us a comprehensive and composable set of  ",(0,o.kt)("inlineCode",{parentName:"p"},"Schedules")," that can be used to define complex supervising policy."),(0,o.kt)("p",null,"There are three supervision scenarios available. Let's look at short examples.\nFirst do the imports:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.actors._\nimport zio.{ Supervisor => _, _ }\nimport java.util.concurrent.TimeUnit\n")),(0,o.kt)("p",null,"To provide no supervision use ",(0,o.kt)("inlineCode",{parentName:"p"},"none"),". Remember that this provide no error recovery for actor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"Supervisor.none\n")),(0,o.kt)("p",null,"Retrying is provided via ",(0,o.kt)("inlineCode",{parentName:"p"},"retry")," with specified ",(0,o.kt)("inlineCode",{parentName:"p"},"Schedule")," like ",(0,o.kt)("inlineCode",{parentName:"p"},"recurs"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"Supervisor.retry(Schedule.recurs(10))\n")),(0,o.kt)("p",null,"The general method also requires effect that will be executed on ",(0,o.kt)("inlineCode",{parentName:"p"},"Schedule")," end:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'Supervisor.retryOrElse[Any, Long](Schedule.recurs(10), (e, a) => Console.printLine("nothing can be done").orDie)\n')))}u.isMDXComponent=!0}}]);