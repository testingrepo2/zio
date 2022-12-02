"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[17380],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return r?i.createElement(m,a(a({ref:t},l),{},{components:r})):i.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:n,a[1]=p;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},40014:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var i=r(87462),n=(r(67294),r(3905));const o={id:"effectual-optics",title:"Effectual Optics"},a=void 0,p={unversionedId:"zio-optics/effectual-optics",id:"zio-optics/effectual-optics",title:"Effectual Optics",description:'In addition to "pure" optics like the ones discussed so far ZIO Optics supports optics where getting and setting involve ZIO or STM effects. This allows using optics to work with ZIO data structures such as TMap.',source:"@site/docs/zio-optics/effectual-optics.md",sourceDirName:"zio-optics",slug:"/zio-optics/effectual-optics",permalink:"/zio-optics/effectual-optics",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-optics/effectual-optics.md",tags:[],version:"current",frontMatter:{id:"effectual-optics",title:"Effectual Optics"},sidebar:"ecosystem-sidebar",previous:{title:"Using Optics",permalink:"/zio-optics/using-optics"},next:{title:"Introduction to ZIO Parser",permalink:"/zio-parser/"}},s={},c=[],l={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'In addition to "pure" optics like the ones discussed so far ZIO Optics supports optics where getting and setting involve ',(0,n.kt)("inlineCode",{parentName:"p"},"ZIO")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"STM")," effects. This allows using optics to work with ZIO data structures such as ",(0,n.kt)("inlineCode",{parentName:"p"},"TMap"),"."),(0,n.kt)("p",null,"These optics work exactly the same way as pure optics except that instead of the getter and setter returning an ",(0,n.kt)("inlineCode",{parentName:"p"},"Either")," they return a ",(0,n.kt)("inlineCode",{parentName:"p"},"ZIO")," or an ",(0,n.kt)("inlineCode",{parentName:"p"},"STM")," value."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\ntrait Optic[-GetWhole, -SetWholeBefore, -SetPiece, +GetError, +SetError, +GetPiece, +SetWholeAfter] {\n  def getOptic(whole: GetWhole): IO[GetError, GetPiece]\n  def setOptic(piece: SetPiece)(whole: SetWholeBefore): IO[SetError, SetWholeAfter]\n}\n")),(0,n.kt)("p",null,"To work with these optics, import ",(0,n.kt)("inlineCode",{parentName:"p"},"zio.optics.opticsm._")," for optics where the result type is a ",(0,n.kt)("inlineCode",{parentName:"p"},"ZIO")," value or ",(0,n.kt)("inlineCode",{parentName:"p"},"zio.optics.toptics._")," for optics where the result type is an ",(0,n.kt)("inlineCode",{parentName:"p"},"STM")," value. This will automatically bring the appropriate version of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Optic")," data type as well as its constructors and syntax into scope."),(0,n.kt)("p",null,"For example, here is how we could define an optic to work with a nested value inside a ",(0,n.kt)("inlineCode",{parentName:"p"},"TMap"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.stm._\nimport zio.optics.toptics._\n\nval optic: Optional[TMap[String, Either[String, Int]], Int] =\n  TOptics.key("key") >>> Optic.right\n')),(0,n.kt)("p",null,"Note that optics specific to STM data structures are defined in the ",(0,n.kt)("inlineCode",{parentName:"p"},"TOptics")," object. Otherwise everything works the same way."),(0,n.kt)("p",null,"Just like with ",(0,n.kt)("inlineCode",{parentName:"p"},"Ref"),", ZIO Optics provides special support for working with STM data types such as ",(0,n.kt)("inlineCode",{parentName:"p"},"TMap"),", so we can update our ",(0,n.kt)("inlineCode",{parentName:"p"},"TMap"),' using "dot" syntax like this:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala:mdoc"},'tMap.key("key").right.at(0).update(_ + 1)\n')))}u.isMDXComponent=!0}}]);