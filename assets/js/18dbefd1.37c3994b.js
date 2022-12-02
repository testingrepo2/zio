"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[72772],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={id:"console",title:"Console"},i=void 0,l={unversionedId:"services/console",id:"version-1.x/services/console",title:"Console",description:"Console service contains simple I/O operations for reading/writing strings from/to the standard input, output, and error console.",source:"@site/versioned_docs/version-1.x/services/console.md",sourceDirName:"services",slug:"/services/console",permalink:"/version-1.x/services/console",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/services/console.md",tags:[],version:"1.x",frontMatter:{id:"console",title:"Console"},sidebar:"services-sidebar",previous:{title:"Introduction",permalink:"/version-1.x/services/"},next:{title:"Clock",permalink:"/version-1.x/services/clock"}},p={},s=[],c={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Console service contains simple I/O operations for reading/writing strings from/to the standard input, output, and error console."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Function"),(0,o.kt)("th",{parentName:"tr",align:null},"Input Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"putStr")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"line: => String")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"URIO[Console, Unit]"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"putStrErr")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"line: => String")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"URIO[Console, Unit]"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"putStrLn")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"line: => String")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"URIO[Console, Unit]"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"putStrLnErr")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"line: => String")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"URIO[Console, Unit]"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"getStrLn")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ZIO[Console, IOException, String]"))))),(0,o.kt)("p",null,"All functions of console service are effectful, this means they are just descriptions of reading/writing from/to the console. "),(0,o.kt)("p",null,"As ZIO data type support monadic operations, we can compose these functions with for-comprehension which helps us to write our program pretty much like an imperative program:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import java.io.IOException\n\nimport zio.ZIO\nimport zio.console._\n\nobject MyHelloApp extends zio.App {\n  val program: ZIO[Console, IOException, Unit] = for {\n    _ <- putStrLn("Hello, what is you name?")\n    name <- getStrLn\n    _ <- putStrLn(s"Hello $name, welcome to ZIO!")\n  } yield ()\n\n  override def run(args: List[String]) = program.exitCode\n}\n')),(0,o.kt)("p",null,"Note again, every line of our ",(0,o.kt)("inlineCode",{parentName:"p"},"program")," are descriptions, not statements. As we can see the type of our ",(0,o.kt)("inlineCode",{parentName:"p"},"program")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO[Console, IOException, Unit]"),", it means to run ",(0,o.kt)("inlineCode",{parentName:"p"},"program")," we need the ",(0,o.kt)("inlineCode",{parentName:"p"},"Console")," service as an environment, it may fail due to failure of ",(0,o.kt)("inlineCode",{parentName:"p"},"getStrLn")," and it will produce ",(0,o.kt)("inlineCode",{parentName:"p"},"Unit")," value."))}d.isMDXComponent=!0}}]);