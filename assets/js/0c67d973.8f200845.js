"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[21288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={id:"creating-effects",title:"Creating Effects"},i=void 0,l={unversionedId:"overview/creating-effects",id:"overview/creating-effects",title:"Creating Effects",description:"This section explores some of the common ways to create ZIO effects from values, from computations, and from common Scala data types.",source:"@site/docs/overview/creating-effects.md",sourceDirName:"overview",slug:"/overview/creating-effects",permalink:"/overview/creating-effects",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/overview/creating-effects.md",tags:[],version:"current",frontMatter:{id:"creating-effects",title:"Creating Effects"},sidebar:"overview_sidebar",previous:{title:"Summary",permalink:"/overview/summary"},next:{title:"Basic Operations",permalink:"/overview/basic-operations"}},c={},s=[{value:"From Values",id:"from-values",level:2},{value:"From Failure Values",id:"from-failure-values",level:2},{value:"From Scala Values",id:"from-scala-values",level:2},{value:"Option",id:"option",level:3},{value:"Either",id:"either",level:3},{value:"Try",id:"try",level:3},{value:"Future",id:"future",level:3},{value:"From Code",id:"from-code",level:2},{value:"Synchronous Code",id:"synchronous-code",level:3},{value:"Asynchronous Code",id:"asynchronous-code",level:3},{value:"Blocking Synchronous Code",id:"blocking-synchronous-code",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section explores some of the common ways to create ZIO effects from values, from computations, and from common Scala data types."),(0,o.kt)("h2",{id:"from-values"},"From Values"),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.succeed")," method, you can create an effect that, when executed, will succeed with the specified value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val s1 = ZIO.succeed(42)\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"succeed")," method takes a so-called ",(0,o.kt)("em",{parentName:"p"},"by-name parameter"),", which ensures that if you pass the method some code to execute, that this code will be stored inside the ZIO effect so that it can be managed by ZIO, and benefit from features like retries, timeouts, and automatic error logging."),(0,o.kt)("h2",{id:"from-failure-values"},"From Failure Values"),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.fail")," method, you can create an effect that, when executed, will fail with the specified value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val f1 = ZIO.fail("Uh oh!")\n')),(0,o.kt)("p",null,"For the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," data type, there is no restriction on the error type. You may use strings, exceptions, or custom data types appropriate for your application."),(0,o.kt)("p",null,"Many applications will model failures with classes that extend ",(0,o.kt)("inlineCode",{parentName:"p"},"Throwable")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Exception"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val f2 = ZIO.fail(new Exception("Uh oh!"))\n')),(0,o.kt)("h2",{id:"from-scala-values"},"From Scala Values"),(0,o.kt)("p",null,"Scala's standard library contains a number of data types that can be converted into ZIO effects."),(0,o.kt)("h3",{id:"option"},"Option"),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"Option")," can be converted into a ZIO effect using ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.fromOption"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val zoption: IO[Option[Nothing], Int] = ZIO.fromOption(Some(2))\n")),(0,o.kt)("p",null,"The error type of the resulting effect is ",(0,o.kt)("inlineCode",{parentName:"p"},"Option[Nothing]"),", signifying that if such an effect fails, it will fail with the value ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," (which has type ",(0,o.kt)("inlineCode",{parentName:"p"},"Option[Nothing]"),")."),(0,o.kt)("p",null,"You can transform a failure into some other error value using ",(0,o.kt)("inlineCode",{parentName:"p"},"orElseFail"),", one of many methods that ZIO provides for error management:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val zoption2: ZIO[Any, String, Int] = zoption.orElseFail("It wasn\'t there!")\n')),(0,o.kt)("p",null,"ZIO has a variety of other operators designed to make interfacing with ",(0,o.kt)("inlineCode",{parentName:"p"},"Option")," code easier. In the following advanced example, the operators ",(0,o.kt)("inlineCode",{parentName:"p"},"some"),"  and ",(0,o.kt)("inlineCode",{parentName:"p"},"asSomeError")," are used to make it easier to interface with methods returning ",(0,o.kt)("inlineCode",{parentName:"p"},"Option"),", similar to the ",(0,o.kt)("inlineCode",{parentName:"p"},"OptionT")," type in some Scala libraries."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val maybeId: ZIO[Any, Option[Nothing], String] = ZIO.fromOption(Some("abc123"))\ndef getUser(userId: String): ZIO[Any, Throwable, Option[User]] = ???\ndef getTeam(teamId: String): ZIO[Any, Throwable, Team] = ???\n\n\nval result: ZIO[Any, Throwable, Option[(User, Team)]] = (for {\n  id   <- maybeId\n  user <- getUser(id).some\n  team <- getTeam(user.teamId).asSomeError \n} yield (user, team)).unsome \n')),(0,o.kt)("h3",{id:"either"},"Either"),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"Either")," can be converted into a ZIO effect using ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.fromEither"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val zeither: ZIO[Any, Nothing, String] = ZIO.fromEither(Right("Success!"))\n')),(0,o.kt)("p",null,"The error type of the resulting effect will be that of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Left")," case, while the success type will be that of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Right")," case."),(0,o.kt)("h3",{id:"try"},"Try"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Try")," value can be converted into a ZIO effect using ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.fromTry"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import scala.util.Try\n\nval ztry = ZIO.fromTry(Try(42 / 0))\n")),(0,o.kt)("p",null,"The error type of the resulting effect will always be ",(0,o.kt)("inlineCode",{parentName:"p"},"Throwable")," because ",(0,o.kt)("inlineCode",{parentName:"p"},"Try")," can only fail with values of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Throwable"),"."),(0,o.kt)("h3",{id:"future"},"Future"),(0,o.kt)("p",null,"A Scala ",(0,o.kt)("inlineCode",{parentName:"p"},"Future")," can be converted into a ZIO effect using ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.fromFuture"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import scala.concurrent.Future\n\nlazy val future = Future.successful("Hello!")\n\nval zfuture: ZIO[Any, Throwable, String] =\n  ZIO.fromFuture { implicit ec =>\n    future.map(_ => "Goodbye!")\n  }\n')),(0,o.kt)("p",null,"The function passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"fromFuture")," is provided an ",(0,o.kt)("inlineCode",{parentName:"p"},"ExecutionContext"),", which allows ZIO to manage where the ",(0,o.kt)("inlineCode",{parentName:"p"},"Future")," runs (of course, you can ignore this ",(0,o.kt)("inlineCode",{parentName:"p"},"ExecutionContext"),")."),(0,o.kt)("p",null,"The error type of the resulting effect will always be ",(0,o.kt)("inlineCode",{parentName:"p"},"Throwable"),", because ",(0,o.kt)("inlineCode",{parentName:"p"},"Future")," values can only fail with values of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Throwable"),"."),(0,o.kt)("h2",{id:"from-code"},"From Code"),(0,o.kt)("p",null,"ZIO can convert any code (such as a call to some method) into an effect, whether that code is so-called ",(0,o.kt)("em",{parentName:"p"},"synchronous")," (directly returning a value), or ",(0,o.kt)("em",{parentName:"p"},"asynchronous")," (passing a value to callbacks)."),(0,o.kt)("p",null,"If done properly, when you convert code into a ZIO effect, this code will be stored inside the effect so that it can be managed by ZIO, and benefit from features like retries, timeouts, and automatic error logging."),(0,o.kt)("p",null,"The conversion functions that ZIO has allow you to seamlessly use all features of ZIO with non-ZIO code written in Scala or Java, including third-party libraries."),(0,o.kt)("h3",{id:"synchronous-code"},"Synchronous Code"),(0,o.kt)("p",null,"Synchronous code can be converted into a ZIO effect using ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.attempt"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import scala.io.StdIn\n\nval readLine: ZIO[Any, Throwable, String] =\n  ZIO.attempt(StdIn.readLine())\n")),(0,o.kt)("p",null,"The error type of the resulting effect will always be ",(0,o.kt)("inlineCode",{parentName:"p"},"Throwable"),", because synchronous code may throw exceptions with any value of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Throwable"),"."),(0,o.kt)("p",null,"If you know for a fact that some code does not throw exceptions (except perhaps runtime exceptions), you can convert the code into a ZIO effect using ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.succeed"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def printLine(line: String): UIO[Unit] =\n  ZIO.succeed(println(line))\n")),(0,o.kt)("p",null,"Sometimes, you may know that code throws a specific exception type, and you may wish to reflect this in the error parameter of your ZIO effect."),(0,o.kt)("p",null,"For this purpose, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#refineToOrDie")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import java.io.IOException\n\nval readLine2: ZIO[Any, IOException, String] =\n  ZIO.attempt(StdIn.readLine()).refineToOrDie[IOException]\n")),(0,o.kt)("h3",{id:"asynchronous-code"},"Asynchronous Code"),(0,o.kt)("p",null,"Asynchronous code that exposes a callback-based API can be converted into a ZIO effect using ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.async"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"object legacy {\n  def login(\n    onSuccess: User => Unit,\n    onFailure: AuthError => Unit): Unit = ???\n}\n\nval login: ZIO[Any, AuthError, User] =\n  ZIO.async[Any, AuthError, User] { callback =>\n    legacy.login(\n      user => callback(ZIO.succeed(user)),\n      err  => callback(ZIO.fail(err))\n    )\n  }\n")),(0,o.kt)("p",null,"Asynchronous effects are much easier to use than callback-based APIs, and they benefit from ZIO features like interruption, resource-safety, and error management."),(0,o.kt)("h2",{id:"blocking-synchronous-code"},"Blocking Synchronous Code"),(0,o.kt)("p",null,"Some synchronous code may engage in so-called ",(0,o.kt)("em",{parentName:"p"},"blocking IO"),", which puts a thread into a waiting state, as it waits for some operating system call to complete. For maximum throughput, this code should not run on your application's primary thread pool, but rather, in a special thread pool that is dedicated to blocking operations."),(0,o.kt)("p",null,"ZIO has a blocking thread pool built into the runtime, and lets you execute effects there with ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.blocking"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import scala.io.{ Codec, Source }\n\ndef download(url: String) =\n  ZIO.attempt {\n    Source.fromURL(url)(Codec.UTF8).mkString\n  }\n\ndef safeDownload(url: String) =\n  ZIO.blocking(download(url))\n")),(0,o.kt)("p",null,"As an alternative, if you wish to convert blocking code directly into a ZIO effect, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.attemptBlocking")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val sleeping =\n  ZIO.attemptBlocking(Thread.sleep(Long.MaxValue))\n")),(0,o.kt)("p",null,"The resulting effect will be executed on ZIO's blocking thread pool."),(0,o.kt)("p",null,"If you have some synchronous code that will respond to Java's ",(0,o.kt)("inlineCode",{parentName:"p"},"Thread.interrupt")," (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Thread.sleep")," or lock-based code), then you can convert this code into an interruptible ZIO effect using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.attemptBlockingInterrupt")," method."),(0,o.kt)("p",null,"Some synchronous code can only be cancelled by invoking some other code, which is responsible for canceling the running computation. To convert such code into a ZIO effect, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.attemptBlockingCancelable")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import java.net.ServerSocket\nimport zio.UIO\n\ndef accept(l: ServerSocket) =\n  ZIO.attemptBlockingCancelable(l.accept())(ZIO.succeed(l.close()))\n")),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"If you are comfortable creating effects from values, converting from Scala types into effects, and converting synchronous and asynchronous code into effects, the next step is learning ",(0,o.kt)("a",{parentName:"p",href:"/overview/basic-operations"},"basic operations")," on effects."))}u.isMDXComponent=!0}}]);