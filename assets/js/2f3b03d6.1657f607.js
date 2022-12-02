"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[56790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,d=m["".concat(p,".").concat(k)]||m[k]||u[k]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},58491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={id:"akka-http",title:"Akka Http Interop"},i=void 0,l={unversionedId:"zio-json/interop/akka-http",id:"zio-json/interop/akka-http",title:"Akka Http Interop",description:"An interop module is provided for Akka Http 10.2.4",source:"@site/docs/zio-json/interop/akka-http.md",sourceDirName:"zio-json/interop",slug:"/zio-json/interop/akka-http",permalink:"/zio-json/interop/akka-http",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-json/interop/akka-http.md",tags:[],version:"current",frontMatter:{id:"akka-http",title:"Akka Http Interop"},sidebar:"ecosystem-sidebar",previous:{title:"Interop modules",permalink:"/zio-json/interop/"},next:{title:"HTTP4s Interop",permalink:"/zio-json/interop/http4s"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Example project",id:"example-project",level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An interop module is provided for ",(0,a.kt)("a",{parentName:"p",href:"https://doc.akka.io/docs/akka-http/10.2.4/index.html"},"Akka Http 10.2.4")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  "de.heikoseeberger" %% "akka-http-zio-json" % "1.36.0",\n)\n')),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import akka.actor.ActorSystem\nimport akka.http.scaladsl.marshalling.Marshal\nimport akka.http.scaladsl.model.HttpEntity\nimport akka.http.scaladsl.unmarshalling.Unmarshal\nimport de.heikoseeberger.akkahttpziojson.ZioJsonSupport\nimport zio.{ Task, ZIO }\nimport zio.json._\n\nfinal case class Greeting(greeting: String)\n\nobject Greeting {\n  import ZioJsonSupport._\n\n  implicit val decoder: JsonDecoder[Greeting] =\n    DeriveJsonDecoder.gen[Greeting]\n\n  implicit val encoder: JsonEncoder[Greeting] =\n    DeriveJsonEncoder.gen[Greeting]\n\n  //    automatically derived from the zio-json codecs\n\n  //    implicit val akkaMarshaller: ToEntityMarshaller[Greeting] =\n  //      implicitly[ToEntityMarshaller[Greeting]]\n  //\n  //    implicit val akkaUnmarshaller: FromEntityUnmarshaller[Greeting] =\n  //      implicitly[FromEntityUnmarshaller[Greeting]]\n\n  implicit val system = ActorSystem()\n\n  // under the hood, Akka Http uses marshallers and unmarshallers for Json http entities\n\n  def marshallGreeting(greeting: Greeting): Task[HttpEntity] =\n    ZIO.fromFuture(implicit ec => Marshal(greeting).to[HttpEntity])\n\n  def unmarshallGreeting(entity: HttpEntity): Task[Greeting] =\n    ZIO.fromFuture(implicit ec => Unmarshal(entity).to[Greeting])\n}\n")),(0,a.kt)("h2",{id:"example-project"},"Example project"),(0,a.kt)("p",null,"A fully working example ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hseeberger/akka-http-json/blob/master/akka-http-zio-json/src/test/scala/de/heikoseeberger/akkahttpziojson/ExampleApp.scala"},"can be found here"),"."))}m.isMDXComponent=!0}}]);