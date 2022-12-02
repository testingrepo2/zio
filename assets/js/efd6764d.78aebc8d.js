"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[59840],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},92064:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const i={id:"refined",title:"Refined Interop"},a=void 0,s={unversionedId:"zio-json/interop/refined",id:"zio-json/interop/refined",title:"Refined Interop",description:"Installation",source:"@site/docs/zio-json/interop/refined.md",sourceDirName:"zio-json/interop",slug:"/zio-json/interop/refined",permalink:"/zio-json/interop/refined",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-json/interop/refined.md",tags:[],version:"current",frontMatter:{id:"refined",title:"Refined Interop"},sidebar:"ecosystem-sidebar",previous:{title:"HTTP4s Interop",permalink:"/zio-json/interop/http4s"},next:{title:"Scalaz 7.x Interop",permalink:"/zio-json/interop/scalaz-7x"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  "dev.zio" % "zio-json-interop-refined" % "0.3.0"\n)\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.json._\nimport zio.json.interop.refined._\n\nimport eu.timepit.refined.api.Refined\nimport eu.timepit.refined.collection.NonEmpty\n\ncase class Person(name: String Refined NonEmpty)\n\nobject Person {\n  implicit val decoder: JsonDecoder[Person] = DeriveJsonDecoder.gen\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'"""{ "name": "" }""".fromJson[Person]\n// res0: Either[String, Person] = Left(\n//   value = ".name(Predicate isEmpty() did not fail.)"\n// )\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'"""{ "name": "Aurora" }""".fromJson[Person]\n// res1: Either[String, Person] = Right(value = Person(name = Aurora))\n')))}u.isMDXComponent=!0}}]);