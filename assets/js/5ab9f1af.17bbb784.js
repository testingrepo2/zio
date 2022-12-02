"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[4441],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={id:"why-zio-test",title:"Why ZIO Test?"},o=void 0,s={unversionedId:"reference/test/why-zio-test",id:"reference/test/why-zio-test",title:"Why ZIO Test?",description:"In this section, we will discuss important features of the ZIO Test which help us to test our effectual code easily.",source:"@site/docs/reference/test/why-zio-test.md",sourceDirName:"reference/test",slug:"/reference/test/why-zio-test",permalink:"/reference/test/why-zio-test",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/why-zio-test.md",tags:[],version:"current",frontMatter:{id:"why-zio-test",title:"Why ZIO Test?"},sidebar:"reference-sidebar",previous:{title:"Introduction to ZIO Test",permalink:"/reference/test/"},next:{title:"Installation",permalink:"/reference/test/installation"}},l={},p=[{value:"Test Environment",id:"test-environment",level:2},{value:"Resource Management",id:"resource-management",level:2},{value:"Property Based Testing",id:"property-based-testing",level:2},{value:"Test Reporting",id:"test-reporting",level:2},{value:"Test Aspects",id:"test-aspects",level:2},{value:"Zero Dependencies",id:"zero-dependencies",level:2},{value:"JUnit integration",id:"junit-integration",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section, we will discuss important features of the ZIO Test which help us to test our effectual code easily."),(0,i.kt)("h2",{id:"test-environment"},"Test Environment"),(0,i.kt)("p",null,"The library includes built-in ",(0,i.kt)("em",{parentName:"p"},"testable versions")," of all the standard ZIO services (",(0,i.kt)("inlineCode",{parentName:"p"},"Clock"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Console"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"System"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Random"),"). For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"TestClock")," has some timing actions that enables us to control the passage of time. So instead of waiting for timeouts and passage of time, we can adjust the time in our test:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\nimport zio.test.Assertion._\n\ntest("timeout") {\n  for {\n    fiber  <- ZIO.sleep(5.minutes).timeout(1.minute).fork\n    _      <- TestClock.adjust(1.minute)\n    result <- fiber.join\n  } yield assertTrue(result.isEmpty)\n}\n')),(0,i.kt)("p",null,"In this example, to test the timeout function without waiting for one minute, we passed the time for one minute using the ",(0,i.kt)("inlineCode",{parentName:"p"},"adjust")," operation. Sometimes, we may want to run these kinds of tests with the ",(0,i.kt)("inlineCode",{parentName:"p"},"nonFlaky")," operator, which runs the test one hundred different times."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"TestRandom")," service has some extra functionality that enables us to test those functionalities with randomness. We can provide seed number to the ",(0,i.kt)("inlineCode",{parentName:"p"},"TestRandom"),", and then we can have an exact expectation of the random function results."),(0,i.kt)("p",null,"Each of these services, comes with a bunch of functionality that makes it very easy to test effects."),(0,i.kt)("p",null,"Whenever we need to access the ",(0,i.kt)("em",{parentName:"p"},"live")," environment, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"live")," method in the ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," package or test annotations like ",(0,i.kt)("inlineCode",{parentName:"p"},"withLiveConsole"),"."),(0,i.kt)("h2",{id:"resource-management"},"Resource Management"),(0,i.kt)("p",null,"We may need to set up and tear down some fixtures in our test code before and after running tests. ZIO Test manages this seamlessly for us. So, instead of providing ",(0,i.kt)("inlineCode",{parentName:"p"},"before"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"after"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeAll"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"afterAll")," hooks which are not composable, we can provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZLayer")," to each test or a test suite. The ZIO test takes care of acquiring, utilizing, and releasing that layer."),(0,i.kt)("p",null,"For example, if we have a Kafka layer, we can provide it to one test, or we can provide it to an entire suite of tests, just like the example below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'suite("a test suite with shared kafka layer")(test1, test2, test3)\n  .provideCustomLayerShared(kafkaLayer)\n')),(0,i.kt)("p",null,"This layer going to get acquired once, then we have access to that service within all these three tests within the suite and then it is guaranteed to be released at the end of our tests."),(0,i.kt)("p",null,"So in ZIO Test, we have nice resource management which enables us to have tests where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"They are resource safe"),(0,i.kt)("li",{parentName:"ul"},"Resources can be acquired and released per test or across a suite of tests"),(0,i.kt)("li",{parentName:"ul"},"Fully composable")),(0,i.kt)("h2",{id:"property-based-testing"},"Property Based Testing"),(0,i.kt)("p",null,"Support for property based testing is included out-of-the-box through the ",(0,i.kt)("inlineCode",{parentName:"p"},"check")," method and its variants and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Gen")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Sample")," classes. For example, here is how we could write a property to test that integer addition is associative."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.test._\n\nval associativity =\n  check(Gen.int, Gen.int, Gen.int) { (x, y, z) =>\n    assertTrue(((x + y) + z) == (x + (y + z)))\n  }\n")),(0,i.kt)("p",null,"If a property fails, the failure will be automatically shrunk to the smallest failing cases to make it easier for us to diagnose the problem. And shrinking is integrated with the generation of random variables, so we are guaranteed that any shrunk counter example will meet the conditions of our original generator."),(0,i.kt)("p",null,"ZIO Test also supports automatic derivation of generators using the ZIO Test Magnolia module:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.test._\nimport zio.test.magnolia._\n\ncase class Point(x: Double, y: Double)\n\nval genPoint: Gen[Any, Point] = DeriveGen[Point]\n \nsealed trait Color\ncase object Red   extends Color\ncase object Green extends Color\ncase object Blue  extends Color\n \nval genColor: Gen[Any, Color] = DeriveGen[Color]\n")),(0,i.kt)("h2",{id:"test-reporting"},"Test Reporting"),(0,i.kt)("p",null,"When tests do fail, it is easy to see what went wrong because the test reporter will show us the entire assertion that failed and the specific part of the assertion that failed. To facilitate this, a variety of assertion combinators are included in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Assertion")," class."),(0,i.kt)("h2",{id:"test-aspects"},"Test Aspects"),(0,i.kt)("p",null,"Test aspects are powerful tools for modifying behavior of individual tests or even entire suites that we have already written. Convenient syntax ",(0,i.kt)("inlineCode",{parentName:"p"},"@@")," is provided for applying test aspects."),(0,i.kt)("p",null,"For example, we can apply a timeout to a test by using ",(0,i.kt)("inlineCode",{parentName:"p"},"test @@ timeout(60.seconds)")," or only run a test on JavaScript by using ",(0,i.kt)("inlineCode",{parentName:"p"},"test @@ jsOnly"),"."),(0,i.kt)("p",null,"Test aspects are ",(0,i.kt)("em",{parentName:"p"},"highly composable"),", so we can combine multiple test aspects together:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.test._\nimport zio.test.TestAspect._\n\ntest("another zio test")(???) @@ timeout(60.seconds) @@ jvmOnly\n')),(0,i.kt)("h2",{id:"zero-dependencies"},"Zero Dependencies"),(0,i.kt)("p",null,"As a library with zero third party dependencies, this project is available on the JVM, ScalaJS, Dotty, and will be available on Scala Native in the near future. So we can write our tests once and make sure that our code works correctly across all platforms that we support."),(0,i.kt)("h2",{id:"junit-integration"},"JUnit integration"),(0,i.kt)("p",null,"A custom JUnit runner is provided for running ZIO Test specs under other build tools (like Maven, Gradle, Bazel, etc.) and under IDEs."),(0,i.kt)("p",null,"To get the runner, we need to add the equivalent of following dependency definition under our build tool:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'"dev.zio" %% "zio-test-junit" % zioVersion % "test"\n')),(0,i.kt)("p",null,"To make our spec appear as a JUnit test to build tools and IDEs, we should convert it to a ",(0,i.kt)("inlineCode",{parentName:"p"},"class")," (JUnit won't run scala objects) and annotate it with ",(0,i.kt)("inlineCode",{parentName:"p"},"@RunWith(classOf[zio.test.junit.ZTestJUnitRunner])")," or simply extend ",(0,i.kt)("inlineCode",{parentName:"p"},"zio.test.junit.JUnitRunnableSpec"),"."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zio/zio/blob/master/examples/jvm/src/test/scala/zio/examples/test/ExampleSpecWithJUnit.scala"},"ExampleSpecWithJUnit")),(0,i.kt)("p",null,"SBT (and thus Scala.JS) is not supported, as the JUnit Test Framework for SBT doesn't seem to support custom runners."))}u.isMDXComponent=!0}}]);