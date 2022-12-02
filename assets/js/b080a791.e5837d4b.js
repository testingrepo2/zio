"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[35889],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54283:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},i="HTTP Client",p={unversionedId:"zio-http/v1.x/examples/zio-http-basic-examples/http_client",id:"zio-http/v1.x/examples/zio-http-basic-examples/http_client",title:"HTTP Client",description:"",source:"@site/docs/zio-http/v1.x/examples/zio-http-basic-examples/http_client.md",sourceDirName:"zio-http/v1.x/examples/zio-http-basic-examples",slug:"/zio-http/v1.x/examples/zio-http-basic-examples/http_client",permalink:"/zio-http/v1.x/examples/zio-http-basic-examples/http_client",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/v1.x/examples/zio-http-basic-examples/http_client.md",tags:[],version:"current",frontMatter:{}},l={},c=[],s={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"http-client"},"HTTP Client"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.http.model.headers.Headers\nimport zio.http.service.{ChannelFactory, Client, EventLoopGroup}\nimport zio._\n\nobject SimpleClient extends App {\n  val env     = ChannelFactory.auto ++ EventLoopGroup.auto()\n  val url     = "http://sports.api.decathlon.com/groups/water-aerobics"\n  val headers = Headers.host("sports.api.decathlon.com")\n\n  val program = for {\n    res  <- Client.request(url, headers)\n    data <- res.bodyAsString\n    _    <- console.putStrLn { data }\n  } yield ()\n\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    program.exitCode.provideCustomLayer(env)\n\n}\n')))}u.isMDXComponent=!0}}]);