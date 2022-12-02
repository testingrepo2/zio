"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[47464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||s;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={id:"running-tests",title:"Running Tests"},o=void 0,i={unversionedId:"reference/test/running-tests",id:"reference/test/running-tests",title:"Running Tests",description:"We can run ZIO Tests in two ways:",source:"@site/docs/reference/test/running-tests.md",sourceDirName:"reference/test",slug:"/reference/test/running-tests",permalink:"/reference/test/running-tests",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/running-tests.md",tags:[],version:"current",frontMatter:{id:"running-tests",title:"Running Tests"},sidebar:"reference-sidebar",previous:{title:"Writing Our First Test",permalink:"/reference/test/writing-our-first-test"},next:{title:"Introduction",permalink:"/reference/test/assertions/"}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We can run ZIO Tests in two ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If we ",(0,a.kt)("a",{parentName:"li",href:"/reference/test/installation"},"added")," ",(0,a.kt)("inlineCode",{parentName:"li"},"zio.test.sbt.ZTestFramework")," to SBT's ",(0,a.kt)("inlineCode",{parentName:"li"},"testFrameworks"),", our tests should be automatically picked up by SBT on invocation of ",(0,a.kt)("inlineCode",{parentName:"li"},"test"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sbt Test/test                      // run all tests\nsbt Test/testOnly HelloWorldSpec   // run a specific test\n")),(0,a.kt)("p",null,"To run a specific test by their labels, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},'-t "<label>"')," option. Assume we have multiple tests like the below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.test._\n\nobject ExampleSpec extends ZIOSpecDefault {\n  def spec = suite("clock")(\n    test("foo") {\n      assertTrue(true)\n    },\n    test("foo bar") {\n      assertTrue(true)\n    },\n    test("foo bar baz") {\n      assertTrue(true)\n    }\n  )\n}\n')),(0,a.kt)("p",null,'We can run those test that contains the "bar" label using the following SBT command:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'sbt Test/runMain ExampleSpect -- -t "bar"\n')),(0,a.kt)("p",null,'It will print the following results after running all tests containing the "bar" label:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'sbt:zio-2.0> Test/testOnly ExampleSpec -- -t "bar"\n+ example suite\n  + foo bar\n  + foo bar baz\n3 tests passed. 0 tests failed. 0 tests ignored.\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"However, if we're not using SBT or have some other special needs, the ",(0,a.kt)("inlineCode",{parentName:"li"},"ZIOSpecDefault")," has a ",(0,a.kt)("inlineCode",{parentName:"li"},"main")," method which can be invoked directly or with SBTs ",(0,a.kt)("inlineCode",{parentName:"li"},"Test/run")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Test/runMain")," commands:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sbt Test/run                       // prompt to choose which test to run\nsbt Test/runMain HelloWorldSpec    // run a specific test\n")))}p.isMDXComponent=!0}}]);