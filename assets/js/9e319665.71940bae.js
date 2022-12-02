"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[73708],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3159:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={id:"cyclicbarrier",title:"CyclicBarrier"},o=void 0,l={unversionedId:"datatypes/sync/cyclicbarrier",id:"version-1.x/datatypes/sync/cyclicbarrier",title:"CyclicBarrier",description:"A synchronization aid that allows a set of fibers to all wait for each other to reach a common barrier point.",source:"@site/versioned_docs/version-1.x/datatypes/sync/cyclicbarrier.md",sourceDirName:"datatypes/sync",slug:"/datatypes/sync/cyclicbarrier",permalink:"/version-1.x/datatypes/sync/cyclicbarrier",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/sync/cyclicbarrier.md",tags:[],version:"1.x",frontMatter:{id:"cyclicbarrier",title:"CyclicBarrier"}},s={},c=[{value:"Operations",id:"operations",level:2},{value:"Creation",id:"creation",level:3},{value:"Use",id:"use",level:3},{value:"Example Usage",id:"example-usage",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A synchronization aid that allows a set of fibers to all wait for each other to reach a common barrier point."),(0,n.kt)("p",null,"CyclicBarriers are useful in programs involving a fixed sized party of fibers that must occasionally wait for each\nother. The barrier is called cyclic because it can be re-used after the waiting fibers are released."),(0,n.kt)("p",null,"A CyclicBarrier supports an optional action command that is run once per barrier point, after the last fiber in the\nparty arrives, but before any fibers are released. This barrier action is useful for updating shared-state before any of\nthe parties continue."),(0,n.kt)("h2",{id:"operations"},"Operations"),(0,n.kt)("h3",{id:"creation"},"Creation"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"make(parties: Int): UIO[CyclicBarrier]")),(0,n.kt)("td",{parentName:"tr",align:null},"Makes an ",(0,n.kt)("inlineCode",{parentName:"td"},"CyclicBarrier")," with n parties")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"make(parties: Int, action: UIO[Any]): UIO[CyclicBarrier]")),(0,n.kt)("td",{parentName:"tr",align:null},"Makes an ",(0,n.kt)("inlineCode",{parentName:"td"},"CyclicBarrier")," with parties and action")))),(0,n.kt)("h3",{id:"use"},"Use"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"parties: Int")),(0,n.kt)("td",{parentName:"tr",align:null},"The number of parties required to trip this barrier.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"waiting: UIO[Int]")),(0,n.kt)("td",{parentName:"tr",align:null},"The number of parties currently waiting at the barrier.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"await: IO[Unit, Int]")),(0,n.kt)("td",{parentName:"tr",align:null},"Waits until all parties have invoked await on this barrier. Fails if the barrier is broken.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"reset: UIO[Unit]")),(0,n.kt)("td",{parentName:"tr",align:null},"Resets the barrier to its initial state. Breaks any waiting party.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"isBroken: UIO[Boolean]")),(0,n.kt)("td",{parentName:"tr",align:null},"Queries if this barrier is in a broken state.")))),(0,n.kt)("h2",{id:"example-usage"},"Example Usage"),(0,n.kt)("p",null,"Construction:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.concurrent.CyclicBarrier\n\nfor {\n  barrier  <- CyclicBarrier.make(100)\n  isBroken <- barrier.isBroken  \n  waiting  <- barrier.waiting\n} yield assert(!isBroken && waiting == 0)\n")),(0,n.kt)("p",null,"Releasing the barrier:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.concurrent.CyclicBarrier\nimport zio._\n\nfor {\n  barrier <- CyclicBarrier.make(2)\n  f1      <- barrier.await.fork\n  _       <- f1.status.repeatWhile(!_.isInstanceOf[Fiber.Status.Suspended])\n  f2      <- barrier.await.fork\n  ticket1 <- f1.join\n  ticket2 <- f2.join\n} yield assert(ticket1 == 1 && ticket2 == 0)\n")),(0,n.kt)("p",null,"Releasing the barrier and performing the action:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.concurrent.CyclicBarrier\nimport zio._\n\nfor {\n  promise <- Promise.make[Nothing, Unit]\n  barrier <- CyclicBarrier.make(2, promise.succeed(()))\n  f1      <- barrier.await.fork\n  _       <- f1.status.repeatWhile(!_.isInstanceOf[Fiber.Status.Suspended])\n  f2      <- barrier.await.fork\n  _       <- f1.join\n  _       <- f2.join\n  isComplete <- promise.isDone\n} yield assert(isComplete)\n")),(0,n.kt)("p",null,"Releases the barrier and cycles:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.concurrent.CyclicBarrier\n\nfor {\n  barrier <- CyclicBarrier.make(2)\n  f1      <- barrier.await.fork\n  _       <- f1.status.repeatWhile(!_.isInstanceOf[Fiber.Status.Suspended])\n  f2      <- barrier.await.fork\n  ticket1 <- f1.join\n  ticket2 <- f2.join\n  f3      <- barrier.await.fork\n  _       <- f3.status.repeatWhile(!_.isInstanceOf[Fiber.Status.Suspended])\n  f4      <- barrier.await.fork\n  ticket3 <- f3.join\n  ticket4 <- f4.join\n} yield assert(ticket1 == 1 && ticket2 == 0 && ticket3 == 1 && ticket4 == 0)\n")),(0,n.kt)("p",null,"Breaks on reset:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.concurrent.CyclicBarrier\n\nfor {\n  barrier <- CyclicBarrier.make(100)\n  f1      <- barrier.await.fork\n  f2      <- barrier.await.fork\n  _       <- f1.status.repeatWhile(!_.isInstanceOf[Fiber.Status.Suspended])\n  _       <- f2.status.repeatWhile(!_.isInstanceOf[Fiber.Status.Suspended])\n  _       <- barrier.reset\n  res1    <- f1.await\n  res2    <- f2.await\n} yield ()\n")),(0,n.kt)("p",null,"Breaks on party interruption:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.concurrent.CyclicBarrier\nimport zio._\nimport zio.duration._\nimport zio.test.environment.TestClock\n\nfor {\n  barrier   <- CyclicBarrier.make(100)\n  f1        <- barrier.await.timeout(1.second).fork\n  f2        <- barrier.await.fork\n  _         <- f1.status.repeatWhile(!_.isInstanceOf[Fiber.Status.Suspended])\n  _         <- f2.status.repeatWhile(!_.isInstanceOf[Fiber.Status.Suspended])\n  isBroken1 <- barrier.isBroken\n  _         <- TestClock.adjust(1.second)\n  isBroken2 <- barrier.isBroken\n  res1      <- f1.await\n  res2      <- f2.await\n} yield assert(!isBroken1 && isBroken2)\n")))}u.isMDXComponent=!0}}]);