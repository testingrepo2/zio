"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[92751],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"umanaged",title:"UManaged"},i=void 0,s={unversionedId:"datatypes/resource/umanaged",id:"version-1.x/datatypes/resource/umanaged",title:"UManaged",description:"UManaged[A] is a type alias for ZManaged[Any, Nothing, A], which represents an unexceptional managed resource that doesn't require any specific environment, and cannot fail, but can succeed with an A.",source:"@site/versioned_docs/version-1.x/datatypes/resource/umanaged.md",sourceDirName:"datatypes/resource",slug:"/datatypes/resource/umanaged",permalink:"/version-1.x/datatypes/resource/umanaged",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/resource/umanaged.md",tags:[],version:"1.x",frontMatter:{id:"umanaged",title:"UManaged"},sidebar:"datatypes-sidebar",previous:{title:"RManaged",permalink:"/version-1.x/datatypes/resource/rmanaged"},next:{title:"URManaged",permalink:"/version-1.x/datatypes/resource/urmanaged"}},c={},p=[],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UManaged[A]")," is a type alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"ZManaged[Any, Nothing, A]"),", which represents an ",(0,a.kt)("strong",{parentName:"p"},"unexceptional")," managed resource that doesn't require any specific environment, and cannot fail, but can succeed with an ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"UMManaged")," type alias is defined as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"type UManaged[+A] = ZManaged[Any, Nothing, A]\n")))}d.isMDXComponent=!0}}]);