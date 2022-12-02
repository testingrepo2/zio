"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[37377],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),f=s,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:s,a[1]=o;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79846:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(87462),s=(r(67294),r(3905));const i={id:"restoring-state-of-test-services",title:"Restoring State of Test Services"},a=void 0,o={unversionedId:"reference/test/aspects/restoring-state-of-test-services",id:"reference/test/aspects/restoring-state-of-test-services",title:"Restoring State of Test Services",description:"ZIO Test has some test aspects which restore the state of given restorable test services, such as TestClock, TestConsole, TestRandom and TestSystem, to their starting state after the test is run. Note that these test aspects are only useful when we are repeating tests.",source:"@site/docs/reference/test/aspects/restoring-state-of-test-services.md",sourceDirName:"reference/test/aspects",slug:"/reference/test/aspects/restoring-state-of-test-services",permalink:"/reference/test/aspects/restoring-state-of-test-services",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/aspects/restoring-state-of-test-services.md",tags:[],version:"current",frontMatter:{id:"restoring-state-of-test-services",title:"Restoring State of Test Services"},sidebar:"reference-sidebar",previous:{title:"Repeat and Retry",permalink:"/reference/test/aspects/repeat-and-retry"},next:{title:"Changing the Size of Sized Generators",permalink:"/reference/test/aspects/sized"}},c={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"ZIO Test has some test aspects which restore the state of given restorable test services, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"TestClock"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"TestConsole"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"TestRandom")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"TestSystem"),", to their starting state after the test is run. Note that these test aspects are only useful when we are repeating tests."),(0,s.kt)("p",null,"Here is a list of restore methods:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"TestAspect.restore")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"TestAspect.restoreTestClock")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"TestAspect.restoreTestConsole")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"TestAspect.restoreTestRandom")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"TestAspect.restoreTestSystem")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"TestAspect.restoreTestEnvironment"))),(0,s.kt)("p",null,"Let's try an example. Assume we have written the following test aspect, which repeats the test 5 times:"),(0,s.kt)("p",null,"When we run a test with this testing aspect, on each try, we have a polluted test environment:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{ test, _ }\nimport java.util.concurrent.TimeUnit\n\nsuite("clock suite")(\n  test("adjusting clock") {\n    for {\n      clock <- ZIO.clock\n      _     <- TestClock.adjust(1.second)\n      time  <- clock.currentTime(TimeUnit.SECONDS).debug("current time")\n    } yield assertTrue(time == 1)\n  } @@ repeat5\n)\n')),(0,s.kt)("p",null,"This test fails in the second retry:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"current time: 1\ncurrent time: 2\n- some suite\n  - clock suite\n    - adjusting clock\n      \u2717 2 was not equal to 1\n      time == 1\n      time = 2\n")),(0,s.kt)("p",null,"It failed because of the first run of the test changed the state of the ",(0,s.kt)("inlineCode",{parentName:"p"},"TestClock")," service, so on the next run, the initial state of the test is not zero. In such a situation, when we are repeating a test, after each run we can restore the state of the test to its initial state, using ",(0,s.kt)("inlineCode",{parentName:"p"},"TestAspect.restore*")," test aspects:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{ test, _ }\nimport java.util.concurrent.TimeUnit\n\nsuite("clock suite")(\n  test("adjusting clock") {\n    for {\n      clock <- ZIO.clock\n      _     <- TestClock.adjust(1.second)\n      time  <- clock.currentTime(TimeUnit.SECONDS).debug("current time")\n    } yield assertTrue(time == 1)\n  } @@ TestAspect.restoreTestClock @@ repeat5\n)\n')),(0,s.kt)("p",null,"The output of running this test would be as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"current time: 1\ncurrent time: 1\ncurrent time: 1\ncurrent time: 1\ncurrent time: 1\ncurrent time: 1\n+ clock suite\n  + adjusting clock\n  Ran 1 test in 470 ms: 1 succeeded, 0 ignored, 0 failed\n")))}u.isMDXComponent=!0}}]);