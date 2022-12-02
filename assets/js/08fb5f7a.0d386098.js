"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[44431],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),y=i,m=p["".concat(s,".").concat(y)]||p[y]||d[y]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},44881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const a={id:"index",title:"Introduction to ZIO Query",sidebar_label:"ZIO Query"},o=void 0,l={unversionedId:"zio-query/index",id:"zio-query/index",title:"Introduction to ZIO Query",description:"A ZQuery[R, E, A] is a purely functional description of an effectual query that may contain requests from one or more data sources, requires an environment R, and may fail with an E or succeed with an A.",source:"@site/docs/zio-query/index.md",sourceDirName:"zio-query",slug:"/zio-query/",permalink:"/zio-query/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-query/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO Query",sidebar_label:"ZIO Query"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO Profiling",permalink:"/zio-profiling/"},next:{title:"Creating Data Sources",permalink:"/zio-query/creating-data-sources"}},s={},u=[{value:"Installation",id:"installation",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"ZQuery[R, E, A]")," is a purely functional description of an effectual query that may contain requests from one or more data sources, requires an environment ",(0,i.kt)("inlineCode",{parentName:"p"},"R"),", and may fail with an ",(0,i.kt)("inlineCode",{parentName:"p"},"E")," or succeed with an ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,i.kt)("p",null,"Requests that can be performed in parallel, as expressed by ",(0,i.kt)("inlineCode",{parentName:"p"},"zipWithPar")," and combinators derived from it, will automatically be batched. Requests that must be performed sequentially, as expressed by ",(0,i.kt)("inlineCode",{parentName:"p"},"zipWith")," and combinators derived from it, will automatically be pipelined. This allows for aggressive data source specific optimizations. Requests can also be deduplicated and cached."),(0,i.kt)("p",null,"This allows for writing queries in a high level, compositional style, with confidence that they will automatically be optimized. For example, consider the following query from a user service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"lazy val getAllUserIds: ZQuery[Any, Nothing, List[Int]]    = ???\ndef getUserNameById(id: Int): ZQuery[Any, Nothing, String] = ???\n\nlazy val userQuery: ZQuery[Any, Nothing, List[String]] = for {\n  userIds   <- getAllUserIds\n  userNames <- ZQuery.foreachPar(userIds)(getUserNameById)\n} yield userNames\n")),(0,i.kt)("p",null,"This would normally require N + 1 queries, one for ",(0,i.kt)("inlineCode",{parentName:"p"},"getAllUserIds")," and one for each call to ",(0,i.kt)("inlineCode",{parentName:"p"},"getUserNameById"),". In contrast, ",(0,i.kt)("inlineCode",{parentName:"p"},"ZQuery")," will automatically optimize this to two queries, one for ",(0,i.kt)("inlineCode",{parentName:"p"},"userIds")," and one for ",(0,i.kt)("inlineCode",{parentName:"p"},"userNames"),"."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Include ZIO Query in your project by adding the following to your ",(0,i.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-query" % "0.3.2"\n')))}p.isMDXComponent=!0}}]);