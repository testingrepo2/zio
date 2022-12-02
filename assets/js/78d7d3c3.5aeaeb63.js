"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[75063],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(r),d=i,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:i,a[1]=p;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70903:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const o={id:"with-twitter",title:"How to Interop with Twitter?"},a=void 0,p={unversionedId:"guides/interop/with-twitter",id:"version-1.x/guides/interop/with-twitter",title:"How to Interop with Twitter?",description:"interop-twitter module provides capability to convert Twitter Future into ZIO Task.",source:"@site/versioned_docs/version-1.x/guides/interop/with-twitter.md",sourceDirName:"guides/interop",slug:"/guides/interop/with-twitter",permalink:"/version-1.x/guides/interop/with-twitter",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/guides/interop/with-twitter.md",tags:[],version:"1.x",frontMatter:{id:"with-twitter",title:"How to Interop with Twitter?"}},l={},u=[{value:"Example",id:"example",level:3}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zio/interop-twitter"},(0,i.kt)("inlineCode",{parentName:"a"},"interop-twitter"))," module provides capability to convert ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.github.io/util/docs/com/twitter/util/Future.html"},"Twitter ",(0,i.kt)("inlineCode",{parentName:"a"},"Future"))," into ZIO ",(0,i.kt)("inlineCode",{parentName:"p"},"Task"),"."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import com.twitter.util.Future\nimport zio.{ App, Task }\nimport zio.console._\nimport zio.interop.twitter._\n\nobject Example extends App {\n  def run(args: List[String]) = {\n    val program =\n      for {\n        _        <- putStrLn("Hello! What is your name?")\n        name     <- getStrLn\n        greeting <- Task.fromTwitterFuture(Task(greet(name)))\n        _        <- putStrLn(greeting)\n      } yield ()\n\n    program.exitCode\n  }\n\n  private def greet(name: String): Future[String] = Future.value(s"Hello, $name!")\n}\n')))}s.isMDXComponent=!0}}]);