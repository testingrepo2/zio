"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[27621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={id:"sharing-layers-between-multiple-files",title:"Sharing Layers Between Multiple Files"},i=void 0,l={unversionedId:"reference/test/sharing-layers-between-multiple-files",id:"reference/test/sharing-layers-between-multiple-files",title:"Sharing Layers Between Multiple Files",description:"In the previous example, we used the Spec#provideXYZShared methods to share layers between multiple specs in one file. In most cases, when the number of tests and specs grows, this is not a good idea. We want a way to share layers between multiple specs in different files.",source:"@site/docs/reference/test/sharing-layers-between-multiple-files.md",sourceDirName:"reference/test",slug:"/reference/test/sharing-layers-between-multiple-files",permalink:"/reference/test/sharing-layers-between-multiple-files",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/sharing-layers-between-multiple-files.md",tags:[],version:"current",frontMatter:{id:"sharing-layers-between-multiple-files",title:"Sharing Layers Between Multiple Files"},sidebar:"reference-sidebar",previous:{title:"Sharing Layers within the Same File",permalink:"/reference/test/sharing-layers-within-the-same-file"},next:{title:"Spec",permalink:"/reference/test/spec"}},o={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the previous example, we used the ",(0,a.kt)("inlineCode",{parentName:"p"},"Spec#provideXYZShared")," methods to share layers between multiple specs in one file. In most cases, when the number of tests and specs grows, this is not a good idea. We want a way to share layers between multiple specs in different files."),(0,a.kt)("p",null,"So in such situations, we can't use the previous pattern here, because specs are in entirely different files, and we don't want the boilerplate of creating a ",(0,a.kt)("em",{parentName:"p"},"master spec")," that references the other specs. ZIO has a solution to this problem. We can define the resource we want to share as part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap")," layer of ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIOApp"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap")," layer is responsible for creating and managing any services that our ZIO tests need. Using ",(0,a.kt)("inlineCode",{parentName:"p"},"boostrap")," we can have one shared layer across multiple test specs."),(0,a.kt)("p",null,"Before we start, let's remember the ",(0,a.kt)("inlineCode",{parentName:"p"},"Counter")," service in the previous ",(0,a.kt)("a",{parentName:"p",href:"/reference/test/sharing-layers-within-the-same-file"},"section"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\ncase class Counter(value: Ref[Int]) {\n  def inc: UIO[Unit] = value.update(_ + 1)\n  def get: UIO[Int] = value.get\n}\n\nobject Counter {\n  val layer =\n    ZLayer.scoped(\n      ZIO.acquireRelease(\n        Ref.make(0).map(Counter(_)) <* ZIO.debug("Counter initialized!")\n      )(c => c.get.debug("Number of tests executed"))\n    )\n  def inc = ZIO.service[Counter].flatMap(_.inc)\n}\n')),(0,a.kt)("p",null,"Now, let's assume we have two specs in different files, and we want to share the ",(0,a.kt)("inlineCode",{parentName:"p"},"Counter")," service between them. First, we need to create a base class that contains the shared bootstrap layer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.test._\n\nabstract class SharedCounterSpec extends ZIOSpec[Counter] {\n  override val bootstrap: ZLayer[Any, Nothing, Counter] = Counter.layer\n}\n")),(0,a.kt)("p",null,"Now it's time to create the specs. Each spec is extending the ",(0,a.kt)("inlineCode",{parentName:"p"},"SharedCounterSpec")," class."),(0,a.kt)("p",null,"Spec1.scala:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test._\n\nobject Spec1 extends SharedCounterSpec {\n  override def spec =\n    test("test1") {\n      assertTrue(true)\n    } @@ TestAspect.after(Counter.inc)\n}\n')),(0,a.kt)("p",null,"Spec2.scala:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test._\n\nobject Spec2 extends SharedCounterSpec {\n  override def spec: Spec[Scope with Counter, Any] =\n    test("test2") {\n      assertTrue(true)\n    } @@ TestAspect.after(Counter.inc)\n}\n')),(0,a.kt)("p",null,"Now, when we run all specs (",(0,a.kt)("inlineCode",{parentName:"p"},"sbt testOnly org.example.*"),"), we will see an output like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Counter initialized!\n+ test1\n+ test2\nNumber of tests executed: 2\n")),(0,a.kt)("p",null,"The ZIO test runner will execute all specs with the shared bootstrap layer. This means that the ",(0,a.kt)("inlineCode",{parentName:"p"},"Counter")," service will be created and managed only once, and will be shared between all specs."))}u.isMDXComponent=!0}}]);