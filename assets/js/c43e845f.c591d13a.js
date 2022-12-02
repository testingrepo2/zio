"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[76318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={id:"semaphore",title:"Semaphore"},o=void 0,s={unversionedId:"datatypes/concurrency/semaphore",id:"version-1.x/datatypes/concurrency/semaphore",title:"Semaphore",description:"A Semaphore datatype which allows synchronization between fibers with the withPermit operation, which safely acquires and releases a permit.",source:"@site/versioned_docs/version-1.x/datatypes/concurrency/semaphore.md",sourceDirName:"datatypes/concurrency",slug:"/datatypes/concurrency/semaphore",permalink:"/version-1.x/datatypes/concurrency/semaphore",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/concurrency/semaphore.md",tags:[],version:"1.x",frontMatter:{id:"semaphore",title:"Semaphore"},sidebar:"datatypes-sidebar",previous:{title:"Hub",permalink:"/version-1.x/datatypes/concurrency/hub"},next:{title:"Introduction",permalink:"/version-1.x/datatypes/stm/"}},p={},c=[{value:"Operations",id:"operations",level:2}],l={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Semaphore")," datatype which allows synchronization between fibers with the ",(0,a.kt)("inlineCode",{parentName:"p"},"withPermit")," operation, which safely acquires and releases a permit.\n",(0,a.kt)("inlineCode",{parentName:"p"},"Semaphore")," is based on ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref[A]")," datatype."),(0,a.kt)("h2",{id:"operations"},"Operations"),(0,a.kt)("p",null,"For example a synchronization of asynchronous tasks can\nbe done via acquiring and releasing a semaphore with given number of permits it can spend.\nWhen the acquire operation cannot be performed, due to insufficient ",(0,a.kt)("inlineCode",{parentName:"p"},"permits")," value in the semaphore, such task\nis placed in internal suspended fibers queue and will be awaken when ",(0,a.kt)("inlineCode",{parentName:"p"},"permits")," value is sufficient:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import java.util.concurrent.TimeUnit\nimport zio._\nimport zio.console._\nimport zio.duration.Duration\n\nval task = for {\n  _ <- putStrLn("start")\n  _ <- ZIO.sleep(Duration(2, TimeUnit.SECONDS))\n  _ <- putStrLn("end")\n} yield ()\n\nval semTask = (sem: Semaphore) => for {\n  _ <- sem.withPermit(task)\n} yield ()\n\nval semTaskSeq = (sem: Semaphore) => (1 to 3).map(_ => semTask(sem))\n\nval program = for {\n\n  sem <- Semaphore.make(permits = 1)\n\n  seq <- ZIO.effectTotal(semTaskSeq(sem))\n\n  _ <- ZIO.collectAllPar(seq)\n\n} yield ()\n')),(0,a.kt)("p",null,"As the binary semaphore is a special case of counting semaphore\nwe can acquire and release any value, regarding semaphore's permits:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val semTaskN = (sem: Semaphore) => for {\n  _ <- sem.withPermits(5)(task)\n} yield ()\n")),(0,a.kt)("p",null,"The guarantee of ",(0,a.kt)("inlineCode",{parentName:"p"},"withPermit")," (and its corresponding counting version ",(0,a.kt)("inlineCode",{parentName:"p"},"withPermits"),") is that acquisition will be followed by equivalent release, regardless of whether the task succeeds, fails, or is interrupted."))}m.isMDXComponent=!0}}]);