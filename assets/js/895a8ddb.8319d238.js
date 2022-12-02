"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[12808],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},29896:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const i={id:"index",title:"Introduction to ZSink"},o=void 0,l={unversionedId:"reference/stream/zsink/index",id:"reference/stream/zsink/index",title:"Introduction to ZSink",description:"A ZSink[R, E, I, L, Z] is used to consume elements produced by a ZStream. You can think of a sink as a function that will consume a variable amount of I elements (could be 0, 1, or many!), might fail with an error of type E, and will eventually yield a value of type Z together with a remainder of type L as leftover.",source:"@site/docs/reference/stream/zsink/index.md",sourceDirName:"reference/stream/zsink",slug:"/reference/stream/zsink/",permalink:"/reference/stream/zsink/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/stream/zsink/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZSink"},sidebar:"reference-sidebar",previous:{title:"ZPipeline",permalink:"/reference/stream/zpipeline"},next:{title:"Creating Sinks",permalink:"/reference/stream/zsink/creating-sinks"}},p={},s=[],c={toc:s};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"ZSink[R, E, I, L, Z]")," is used to consume elements produced by a ",(0,a.kt)("inlineCode",{parentName:"p"},"ZStream"),". You can think of a sink as a function that will consume a variable amount of ",(0,a.kt)("inlineCode",{parentName:"p"},"I")," elements (could be 0, 1, or many!), might fail with an error of type ",(0,a.kt)("inlineCode",{parentName:"p"},"E"),", and will eventually yield a value of type ",(0,a.kt)("inlineCode",{parentName:"p"},"Z")," together with a remainder of type ",(0,a.kt)("inlineCode",{parentName:"p"},"L")," as leftover."),(0,a.kt)("p",null,"To consume a stream using ",(0,a.kt)("inlineCode",{parentName:"p"},"ZSink")," we can pass ",(0,a.kt)("inlineCode",{parentName:"p"},"ZSink")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZStream#run")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stream._\n\nval stream = ZStream.fromIterable(1 to 1000)\nval sink   = ZSink.sum[Int]\nval sum    = stream.run(sink)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ZSink")," has one type alias called ",(0,a.kt)("inlineCode",{parentName:"p"},"Sink"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"Sink[E, A, L, B]")," is a type alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"ZSink[Any, E, A, L, B]"),". We can think of a ",(0,a.kt)("inlineCode",{parentName:"p"},"Sink")," as a function that does not require any services and will consume a variable amount of ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," elements (could be 0, 1, or many!), might fail with an error of type ",(0,a.kt)("inlineCode",{parentName:"p"},"E"),", and will eventually yield a value of type ",(0,a.kt)("inlineCode",{parentName:"p"},"B"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"L")," is the type of elements in the leftover."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"type Sink[+E, A, +L, +B] = ZSink[Any, E, A, L, B]\n")))}m.isMDXComponent=!0}}]);