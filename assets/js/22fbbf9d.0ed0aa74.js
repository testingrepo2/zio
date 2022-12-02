"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[19416],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=c(n),d=s,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[f]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const a={id:"passing-failed-tests",title:"Passing Failed Tests"},i=void 0,o={unversionedId:"reference/test/aspects/passing-failed-tests",id:"reference/test/aspects/passing-failed-tests",title:"Passing Failed Tests",description:"The failing aspect makes a test that failed for any reason pass.",source:"@site/docs/reference/test/aspects/passing-failed-tests.md",sourceDirName:"reference/test/aspects",slug:"/reference/test/aspects/passing-failed-tests",permalink:"/reference/test/aspects/passing-failed-tests",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/aspects/passing-failed-tests.md",tags:[],version:"current",frontMatter:{id:"passing-failed-tests",title:"Passing Failed Tests"},sidebar:"reference-sidebar",previous:{title:"Non-deterministic Test Data",permalink:"/reference/test/aspects/non-deterministic-test-data"},next:{title:"Repeat and Retry",permalink:"/reference/test/aspects/repeat-and-retry"}},l={},c=[],p={toc:c};function f(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"failing")," aspect makes a test that failed for any reason pass."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\n\ntest("failing a passing test") {\n  assertTrue(true)\n} @@ TestAspect.failing\n')),(0,s.kt)("p",null,"If the test passes this aspect will make it fail:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\n\ntest("passing a failing test") {\n  assertTrue(false)\n} @@ TestAspect.failing\n')),(0,s.kt)("p",null,"It is also possible to pass a failing test on a specified failure:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\n\ntest("a test that will only pass on a specified failure") {\n  ZIO.fail("Boom!").map(_ => assertTrue(true))\n} @@ TestAspect.failing[String] {\n  case TestFailure.Assertion(_, _) => true\n  case TestFailure.Runtime(cause: Cause[String], _) => cause match {\n    case Cause.Fail(value, _)\n      if value == "Boom!" => true\n    case _ => false\n  }\n}\n')))}f.isMDXComponent=!0}}]);