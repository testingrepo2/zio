"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[94932],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||i;return r?a.createElement(d,o(o({ref:t},u),{},{components:r})):a.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},91397:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={id:"resourceful-streams",title:"Resourceful Streams"},o=void 0,s={unversionedId:"reference/stream/zstream/resourceful-streams",id:"reference/stream/zstream/resourceful-streams",title:"Resourceful Streams",description:"Most of the constructors of ZStream have a special variant to lift a scoped resource to a Stream (e.g. ZStream.fromReaderScoped). By using these constructors, we are creating streams that are resource-safe. Before creating a stream, they acquire the resource, and after usage; they close the stream.",source:"@site/docs/reference/stream/zstream/resourceful-streams.md",sourceDirName:"reference/stream/zstream",slug:"/reference/stream/zstream/resourceful-streams",permalink:"/reference/stream/zstream/resourceful-streams",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/stream/zstream/resourceful-streams.md",tags:[],version:"current",frontMatter:{id:"resourceful-streams",title:"Resourceful Streams"},sidebar:"reference-sidebar",previous:{title:"Creating ZIO Streams",permalink:"/reference/stream/zstream/creating-zio-streams"},next:{title:"Operations",permalink:"/reference/stream/zstream/operations"}},l={},c=[{value:"Acquire Release",id:"acquire-release",level:2},{value:"Finalization",id:"finalization",level:2},{value:"Ensuring",id:"ensuring",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Most of the constructors of ",(0,n.kt)("inlineCode",{parentName:"p"},"ZStream")," have a special variant to lift a scoped resource to a Stream (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"ZStream.fromReaderScoped"),"). By using these constructors, we are creating streams that are resource-safe. Before creating a stream, they acquire the resource, and after usage; they close the stream."),(0,n.kt)("p",null,"ZIO Stream also has ",(0,n.kt)("inlineCode",{parentName:"p"},"acquireRelease")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"finalizer")," constructors which are similar to ",(0,n.kt)("inlineCode",{parentName:"p"},"ZIO.acquireRelease"),". They allow us to clean up or finalizing before the stream ends:"),(0,n.kt)("h2",{id:"acquire-release"},"Acquire Release"),(0,n.kt)("p",null,"We can provide ",(0,n.kt)("inlineCode",{parentName:"p"},"acquire")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"release")," actions to ",(0,n.kt)("inlineCode",{parentName:"p"},"ZStream.acquireReleaseWith")," to create a resourceful stream:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"object ZStream {\n  def acquireReleaseWith[R, E, A](\n    acquire: ZIO[R, E, A]\n  )(\n    release: A => URIO[R, Any]\n  ): ZStream[R, E, A] = ???\n")),(0,n.kt)("p",null,"Let's see an example of using an acquire release when reading a file. In this example, by providing ",(0,n.kt)("inlineCode",{parentName:"p"},"acquire")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"release")," actions to ",(0,n.kt)("inlineCode",{parentName:"p"},"ZStream.acquireReleaseWith"),", it gives us a scoped stream of ",(0,n.kt)("inlineCode",{parentName:"p"},"BufferedSource"),". As this stream is scoped, we can convert that ",(0,n.kt)("inlineCode",{parentName:"p"},"BufferedSource")," to a stream of its lines and then run it, without worrying about resource leakage:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'val lines: ZStream[Any, Throwable, String] =\n  ZStream\n    .acquireReleaseWith(\n      ZIO.attempt(Source.fromFile("file.txt")) <* printLine("The file was opened.")\n    )(x => ZIO.succeed(x.close()) <* printLine("The file was closed.").orDie)\n    .flatMap { is =>\n      ZStream.fromIterator(is.getLines())\n    }\n')),(0,n.kt)("h2",{id:"finalization"},"Finalization"),(0,n.kt)("p",null,"We can also create a stream that never fails and define a finalizer for it, so that finalizer will be executed before that stream ends."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"object ZStream {\n  def finalizer[R](\n    finalizer: URIO[R, Any]\n  ): ZStream[R, Nothing, Any] = ???\n}\n")),(0,n.kt)("p",null,"It is useful when need to add a finalizer to an existing stream. Assume we need to clean up the temporary directory after our streaming application ends:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.Console._\n\ndef application: ZStream[Any, IOException, Unit] = ZStream.fromZIO(printLine("Application Logic."))\ndef deleteDir(dir: Path): ZIO[Any, IOException, Unit] = printLine("Deleting file.")\n\nval myApp: ZStream[Any, IOException, Any] =\n  application ++ ZStream.finalizer(\n    (deleteDir(Paths.get("tmp")) *>\n      printLine("Temporary directory was deleted.")).orDie\n  )\n')),(0,n.kt)("h2",{id:"ensuring"},"Ensuring"),(0,n.kt)("p",null,"We might want to run some code after the execution of the stream's finalization. To do so, we can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"ZStream#ensuring")," operator:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'ZStream\n  .finalizer(Console.printLine("Finalizing the stream").orDie)\n  .ensuring(\n    printLine("Doing some other works after stream\'s finalization").orDie\n  )\n  \n// Output:\n// Finalizing the stream\n// Doing some other works after stream\'s finalization\n')))}p.isMDXComponent=!0}}]);