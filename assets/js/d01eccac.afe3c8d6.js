"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[28774],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return t?o.createElement(f,l(l({ref:n},s),{},{components:t})):o.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[u]="string"==typeof e?e:r,l[1]=a;for(var p=2;p<i;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},48411:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=t(87462),r=(t(67294),t(3905));const i={id:"environment",title:"Environment"},l=void 0,a={unversionedId:"zio-ftp/environment",id:"zio-ftp/environment",title:"Environment",description:"FtpClient & Blocking",source:"@site/docs/zio-ftp/environment.md",sourceDirName:"zio-ftp",slug:"/zio-ftp/environment",permalink:"/zio-ftp/environment",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-ftp/environment.md",tags:[],version:"current",frontMatter:{id:"environment",title:"Environment"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO FTP",permalink:"/zio-ftp/"},next:{title:"Overview",permalink:"/zio-flow/"}},c={},p=[{value:"FtpClient &amp; Blocking",id:"ftpclient--blocking",level:2},{value:"How to provide Blocking Environment ?",id:"how-to-provide-blocking-environment-",level:2},{value:"Resources",id:"resources",level:2}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ftpclient--blocking"},"FtpClient & Blocking"),(0,r.kt)("p",null,"ZIO Ftp use Environment type parameter to required a blocking context. Since (s)ftp java client don't provide any async client,\nwe are lifting all blocking (effectful) functions into a blocking execution context by using ",(0,r.kt)("inlineCode",{parentName:"p"},"zio.blocking.effectBlocking()"),"."),(0,r.kt)("p",null,"Since we never expose the underlying ftp client, you can only use a ZIO wrapper ",(0,r.kt)("inlineCode",{parentName:"p"},"FtpAccessors[_]")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait FtpAccessors[+A] {\n def stat(path: String): ZIO[Blocking, IOException, Option[FtpResource]]\n def ls(path: String): ZStream[Blocking, IOException, FtpResource]\n}\n")),(0,r.kt)("p",null,"All provided functions require a ",(0,r.kt)("inlineCode",{parentName:"p"},"Blocking")," context."),(0,r.kt)("p",null,"There is already predefined Blocking context defined in ZIO ",(0,r.kt)("inlineCode",{parentName:"p"},"zio.blocking.Blocking.live")),(0,r.kt)("h2",{id:"how-to-provide-blocking-environment-"},"How to provide Blocking Environment ?"),(0,r.kt)("p",null,"Your main entrypoint should extend ",(0,r.kt)("inlineCode",{parentName:"p"},"zio.App")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.App\nimport zio.ZIO\nimport zio.blocking.Blocking\nimport java.io.IOException\n\n// Provide default environment(s) context such as (Blocking, Clock, Console,...) since it is provided by zio.App which extend zio.DefaultRuntime\nobject MyApp extends App {\n    val program: ZIO[Blocking, IOException, Unit] = ???\n    \n    final def run(args: List[String]): ZIO[ZEnv, Nothing, Int] = program\n  }\n")),(0,r.kt)("p",null,"or you can simply provide your own blocking context "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.ZIO\nimport zio.blocking.Blocking\nimport java.io.IOException\n\nval program: ZIO[Blocking, IOException, Unit] = ???\n// Blocking environment is not anymore required\nval run: ZIO[Any, IOException, Unit] = program.provideLayer(Blocking.live)\n")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zio.dev/docs/overview/overview_creating_effects#blocking-synchronous-side-effects"},"ZIO Effect Blocking")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://degoes.net/articles/zio-environment"},"ZIO environment by John de goes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.softwaremill.com/zio-environment-meets-constructor-based-dependency-injection-6a13de6e000"},"ZIO environment meets constructor based-dependency injection"))))}u.isMDXComponent=!0}}]);