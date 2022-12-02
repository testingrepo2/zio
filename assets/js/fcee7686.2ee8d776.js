"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[7277],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=i,h=d["".concat(s,".").concat(f)]||d[f]||c[f]||o;return t?r.createElement(h,a(a({ref:n},u),{},{components:t})):r.createElement(h,a({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},78113:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const o={id:"index",title:"Introduction to ZIO's Interruption Model",sidebar_label:"Interruption Model"},a=void 0,l={unversionedId:"reference/interruption/index",id:"reference/interruption/index",title:"Introduction to ZIO's Interruption Model",description:"While developing concurrent applications, there are several cases that we need to interrupt the execution of other fibers, for example:",source:"@site/docs/reference/interruption/index.md",sourceDirName:"reference/interruption",slug:"/reference/interruption/",permalink:"/reference/interruption/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/interruption/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO's Interruption Model",sidebar_label:"Interruption Model"},sidebar:"reference-sidebar",previous:{title:"Examples",permalink:"/reference/error-management/examples"},next:{title:"Introduction to ZIO's Built-in Services",permalink:"/reference/services/"}},s={},p=[{value:"Polling vs. Asynchronous Interruption",id:"polling-vs-asynchronous-interruption",level:2},{value:"When Does a Fiber Get Interrupted?",id:"when-does-a-fiber-get-interrupted",level:2},{value:"Calling <code>Fiber#interrupt</code> Operator",id:"calling-fiberinterrupt-operator",level:3},{value:"Interruption of Parallel Effects",id:"interruption-of-parallel-effects",level:3},{value:"Child Fibers Are Scoped to Their Parents",id:"child-fibers-are-scoped-to-their-parents",level:3},{value:"Blocking Operations",id:"blocking-operations",level:2},{value:"Interruption of Blocking Operations",id:"interruption-of-blocking-operations",level:3},{value:"Cancellation of Blocking Operation",id:"cancellation-of-blocking-operation",level:3},{value:"Disabling Interruption of Fibers",id:"disabling-interruption-of-fibers",level:2}],u={toc:p};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"While developing concurrent applications, there are several cases that we need to ",(0,i.kt)("em",{parentName:"p"},"interrupt")," the execution of other fibers, for example:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A parent fiber might start some child fibers to perform a task, and later the parent might decide that, it doesn't need the result of some or all of the child fibers."),(0,i.kt)("li",{parentName:"ol"},"Two or more fibers start race with each other. The fiber whose result is computed first wins, and all other fibers are no longer needed, and should be interrupted."),(0,i.kt)("li",{parentName:"ol"},'In interactive applications, a user may want to stop some already running tasks, such as clicking on the "stop" button to prevent downloading more files.'),(0,i.kt)("li",{parentName:"ol"},"Computations that run longer than expected should be aborted by using timeout operations."),(0,i.kt)("li",{parentName:"ol"},"When we have an application that perform compute-intensive tasks based on the user inputs, if the user changes the input we should cancel the current task and perform another one.")),(0,i.kt)("h2",{id:"polling-vs-asynchronous-interruption"},"Polling vs. Asynchronous Interruption"),(0,i.kt)("p",null,"A simple and naive way to implement fiber interruption is to provide a mechanism that one fiber can ",(0,i.kt)("em",{parentName:"p"},"kill/terminate")," another fiber. This is not a correct solution, because if the target fiber is in the middle of changing a shared state, it leads to an inconsistent state. So this solution doesn't guarantee to leave the shared mutable state in an internally consistent state."),(0,i.kt)("p",null,"Other than the very simple kill solution, there are two popular valid solutions to this problem:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Semi-asynchronous Interruption (Polling for Interruption)"),"\u2014 Imperative languages often use polling to implement a semi-asynchronous signaling mechanism, such as Java. In this model, a fiber sends a request for interruption of other fiber. The target fiber keep polling the interrupt status, and based on the interrupt status will find out that weather there is an interruption request from other fibers received or not. Then it should terminate itself as soon as possible."),(0,i.kt)("p",{parentName:"li"},"Using this solution, the fiber itself takes care of critical sections. So while a fiber is in the middle of a critical section, if it receives an interruption request, it should ignore the interruption and postpone the delivery of interruption during the critical section."),(0,i.kt)("p",{parentName:"li"},"The drawback of this solution is that, if the programmer forget to poll regularly enough, then the target fiber become unresponsive and cause deadlocks. Another problem with this solution is that polling a global flag is not a functional operation, that doesn't fit with ZIO's paradigm.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Asynchronous Interruption"),"\u2014 In asynchronous interruption a fiber allows to terminate another fiber. So the target fiber is not responsible for polling the status, instead in critical sections the target fiber disable the interruptibility of these regions. This is a purely-functional solution and doesn't require to poll a global state. ZIO uses this solution for its interruption model. It is a fully asynchronous signalling mechanism."),(0,i.kt)("p",{parentName:"li"},"This mechanism doesn't have the drawback of forgetting to poll regularly. And also its fully compatible with functional paradigm because in a purely-functional computation, at any point we can abort the computation, except for critical sections."))),(0,i.kt)("h2",{id:"when-does-a-fiber-get-interrupted"},"When Does a Fiber Get Interrupted?"),(0,i.kt)("p",null,"There are several ways and situations that fibers can be interrupted. In this section we will introduce each one with an example of how to reproduce these situations:"),(0,i.kt)("h3",{id:"calling-fiberinterrupt-operator"},"Calling ",(0,i.kt)("inlineCode",{parentName:"h3"},"Fiber#interrupt")," Operator"),(0,i.kt)("p",null,"A fiber can be interrupted by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"Fiber#interrupt")," on that fiber."),(0,i.kt)("p",null,"Let's try to make a fiber and then interrupt it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  def task = {\n    for {\n      fn <- ZIO.fiberId.map(_.threadName)\n      _ <- ZIO.debug(s"$fn starts a long running task")\n      _ <- ZIO.sleep(1.minute)\n      _ <- ZIO.debug("done!")\n    } yield ()\n  }\n\n  def run =\n    for {\n      f <-\n        task.onInterrupt(\n          ZIO.debug(s"Task interrupted while running")\n        ).fork\n      _ <- f.interrupt\n    } yield ()\n}\n')),(0,i.kt)("p",null,"Here is the output of running this peace of code, which denotes that the task was interrupted:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Task interrupted while running\n")),(0,i.kt)("h3",{id:"interruption-of-parallel-effects"},"Interruption of Parallel Effects"),(0,i.kt)("p",null,"When composing multiple parallel effects, when one of them interrupted, other fibers will be interrupted. So if we have two parallel tasks, if one of them failed or interrupted, another will be interrupted:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n\n  def debugInterruption(taskName: String) = (fibers: Set[FiberId]) =>\n    for {\n      fn <- ZIO.fiberId.map(_.threadName)\n      _ <- ZIO.debug(\n        s"The $fn fiber which is the underlying fiber of the $taskName task " +\n          s"interrupted by ${fibers.map(_.threadName).mkString(", ")}"\n      )\n    } yield ()\n\n  def task[R, E, A](name: String)(zio: ZIO[R, E, A]): ZIO[R, E, A] =\n    zio.onInterrupt(debugInterruption(name))\n\n  def debugMainFiber =\n    for {\n      fn <- ZIO.fiberId.map(_.threadName)\n      _ <- ZIO.debug(s"Main fiber ($fn) starts executing the whole application.")\n    } yield ()\n\n  def run = {\n    // self interrupting fiber \n    val first = task("first")(ZIO.interrupt)\n\n    // never ending fiber\n    val second = task("second")(ZIO.never)\n\n    debugMainFiber *> {\n      // uncomment each line and run the code to see the result\n\n      // first fiber will be interrupted \n      first *> second\n\n      // never ending application\n      // second *> first\n\n      // first fiber will be interrupted\n      // first <*> second\n\n      // never ending application\n      // second <*> first\n\n      // first and second will be interrupted\n      // first <&> second\n\n      // first and second will be interrupted \n      // second <&> first\n    }\n  }\n\n}\n')),(0,i.kt)("p",null,"In the above code the ",(0,i.kt)("inlineCode",{parentName:"p"},"first <&> second")," is a parallel composition of two ",(0,i.kt)("inlineCode",{parentName:"p"},"first")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"second")," tasks. so when we run them together, the ",(0,i.kt)("inlineCode",{parentName:"p"},"zipwithpar"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"<&>")," operator will run these two tasks in two parallel fibers. if either side of this operator fails or is interrupted the other side will be interrupted."),(0,i.kt)("h3",{id:"child-fibers-are-scoped-to-their-parents"},"Child Fibers Are Scoped to Their Parents"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If a child fiber does not complete its job or does not join its parent before the parent has completed its job, the child fiber will be interrupted:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  def debugInterruption(taskName: String) = (fibers: Set[FiberId]) =>\n    for {\n      fn <- ZIO.fiberId.map(_.threadName)\n      _  <- ZIO.debug(\n              s"the $fn fiber which is the underlying fiber of the $taskName task " +\n              s"interrupted by ${fibers.map(_.threadName).mkString(", ")}"\n            )\n    } yield ()\n\n  def run =\n    for {\n      fn <- ZIO.fiberId.map(_.threadName)\n      _  <- ZIO.debug(s"$fn starts working.")\n      child =\n        for {\n          cfn <- ZIO.fiberId.map(_.threadName)\n          _   <- ZIO.debug(s"$cfn starts working by forking from its parent ($fn)")\n          _   <- ZIO.never\n        } yield ()\n      _  <- child.onInterrupt(debugInterruption("child")).fork\n      _  <- ZIO.sleep(1.second)\n      _  <- ZIO.debug(s"$fn finishes its job and is going go exit.")\n    } yield ()\n    \n}\n')),(0,i.kt)("p",null,"Here is the result of one of the executions of this sample code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"zio-fiber-2 starts working.\nzio-fiber-7 starts working by forking from its parent (zio-fiber-2)\nzio-fiber-2 finishes its job and is going to exit.\nthe zio-fiber-7 fiber which is the underlying fiber of the child task interrupted by zio-fiber-2\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"If a parent fiber is interrupted, all its children will be interrupted:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n\n  def debugInterruption(taskName: String) = (fibers: Set[FiberId]) =>\n    for {\n      fn <- ZIO.fiberId.map(_.threadName)\n      _ <- ZIO.debug(\n        s"The $fn fiber which is the underlying fiber of the $taskName task " +\n          s"interrupted by ${fibers.map(_.threadName).mkString(", ")}"\n      )\n    } yield ()\n\n  def task =\n    for {\n      fn <- ZIO.fiberId.map(_.threadName)\n      _ <- ZIO.debug(s"$fn starts running that will print random numbers and booleans")\n      f1 <- Random.nextIntBounded(100)\n        .debug("random number ")\n        .schedule(Schedule.spaced(1.second).forever)\n        .onInterrupt(debugInterruption("random number"))\n        .fork\n      f2 <- Random.nextBoolean\n        .debug("random boolean ")\n        .schedule(Schedule.spaced(2.second).forever)\n        .onInterrupt(debugInterruption("random boolean"))\n        .fork\n        _ <- f1.join\n        _ <- f2.join\n    } yield ()\n\n  def run =\n    for {\n      f <- task.fork\n      _ <- ZIO.sleep(5.second)\n      _ <- f.interrupt\n    } yield ()\n}\n')),(0,i.kt)("p",null,"Here is one sample output for this program:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"zio-fiber-7 starts running that will print random numbers and booleans\nrandom number : 65\nrandom boolean : true\nrandom number : 51\nrandom number : 46\nrandom boolean : true\nrandom number : 30\nThe zio-fiber-9 fiber which is the underlying fiber of the random boolean task interrupted by zio-fiber-7\nThe zio-fiber-8 fiber which is the underlying fiber of the random number task interrupted by zio-fiber-7\n")),(0,i.kt)("h2",{id:"blocking-operations"},"Blocking Operations"),(0,i.kt)("h3",{id:"interruption-of-blocking-operations"},"Interruption of Blocking Operations"),(0,i.kt)("p",null,"By default, when we convert a blocking operation into the ZIO effects using ",(0,i.kt)("inlineCode",{parentName:"p"},"attemptBlocking"),", there is no guarantee that if that effect is interrupted the underlying effect will be interrupted."),(0,i.kt)("p",null,"Let's create a blocking effect from an endless loop:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nfor {\n  _ <- Console.printLine("Starting a blocking operation")\n  fiber <- ZIO.attemptBlocking {\n    while (true) {\n      Thread.sleep(1000)\n      println("Doing some blocking operation")\n    }\n  }.ensuring(\n    Console.printLine("End of a blocking operation").orDie\n  ).fork\n  _ <- fiber.interrupt.schedule(\n    Schedule.delayed(\n      Schedule.duration(1.seconds)\n    )\n  )\n} yield ()\n')),(0,i.kt)("p",null,"When we interrupt this loop after one second, it will still not stop. It will only stop when the entire JVM stops. So the ",(0,i.kt)("inlineCode",{parentName:"p"},"attemptBlocking")," doesn't translate the ZIO interruption into thread interruption (",(0,i.kt)("inlineCode",{parentName:"p"},"Thread.interrupt"),")."),(0,i.kt)("p",null,"Instead, we should use ",(0,i.kt)("inlineCode",{parentName:"p"},"attemptBlockingInterrupt")," to create interruptible blocking effects:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nfor {\n  _ <- Console.printLine("Starting a blocking operation")\n  fiber <- ZIO.attemptBlockingInterrupt {\n    while(true) {\n      Thread.sleep(1000)\n      println("Doing some blocking operation")\n    }\n  }.ensuring(\n     Console.printLine("End of the blocking operation").orDie\n   ).fork\n  _ <- fiber.interrupt.schedule(\n    Schedule.delayed(\n      Schedule.duration(3.seconds)\n    )\n  )\n} yield ()\n')),(0,i.kt)("p",null,"Notes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If we are converting a blocking I/O to the ZIO effect, it would be better to use ",(0,i.kt)("inlineCode",{parentName:"p"},"attemptBlockingIO")," which refines the error type to the ",(0,i.kt)("inlineCode",{parentName:"p"},"java.io.IOException"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"attemptBlockingInterrupt")," method adds significant overhead. So for performance-sensitive applications, it is better to handle interruptions manually using ",(0,i.kt)("inlineCode",{parentName:"p"},"attemptBlockingCancelable"),"."))),(0,i.kt)("h3",{id:"cancellation-of-blocking-operation"},"Cancellation of Blocking Operation"),(0,i.kt)("p",null,"Some blocking operations do not respect ",(0,i.kt)("inlineCode",{parentName:"p"},"Thread#interrupt")," by swallowing ",(0,i.kt)("inlineCode",{parentName:"p"},"InterruptedException"),". So, they will not be interrupted via ",(0,i.kt)("inlineCode",{parentName:"p"},"attemptBlockingInterrupt"),". Instead, they may provide us an API to signal them to ",(0,i.kt)("em",{parentName:"p"},"cancel")," their operation."),(0,i.kt)("p",null,"The following ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockingService")," will not be interrupted in case of ",(0,i.kt)("inlineCode",{parentName:"p"},"Thread#interrupt")," call, but it checks the ",(0,i.kt)("inlineCode",{parentName:"p"},"released")," flag constantly. If this flag becomes true, the blocking service will finish its job:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport java.util.concurrent.atomic.AtomicReference\n\nfinal case class BlockingService() {\n  private val released = new AtomicReference(false)\n\n  def start(): Unit = {\n    while (!released.get()) {\n      println("Doing some blocking operation")\n      try Thread.sleep(1000)\n      catch {\n        case _: InterruptedException => () // Swallowing InterruptedException\n      }\n    }\n    println("Blocking operation closed.")\n  }\n\n  def close(): Unit = {\n    println("Releasing resources and ready to be closed.")\n    released.getAndSet(true)\n  }\n}\n')),(0,i.kt)("p",null,"So, to translate ZIO interruption into cancellation of these types of blocking operations we should use ",(0,i.kt)("inlineCode",{parentName:"p"},"attemptBlockingCancelable"),". This method takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"cancel")," effect which is responsible to signal the blocking code to close itself when ZIO interruption occurs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nval myApp =\n  for {\n    service <- ZIO.attempt(BlockingService())\n    fiber   <- ZIO.attemptBlockingCancelable(\n      effect = service.start()\n    )(\n      cancel = ZIO.succeed(service.close())\n    ).fork\n    _       <- fiber.interrupt.schedule(\n      Schedule.delayed(\n        Schedule.duration(3.seconds)\n      )\n    )\n  } yield ()\n")),(0,i.kt)("p",null,"Here is another example of the cancellation of a blocking operation. When we ",(0,i.kt)("inlineCode",{parentName:"p"},"accept")," a server socket, this blocking operation will never be interrupted until we close that using ",(0,i.kt)("inlineCode",{parentName:"p"},"ServerSocket#close")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import java.net.{Socket, ServerSocket}\nimport zio._\n\ndef accept(ss: ServerSocket): Task[Socket] =\n  ZIO.attemptBlockingCancelable(ss.accept())(ZIO.succeed(ss.close()))\n")),(0,i.kt)("h2",{id:"disabling-interruption-of-fibers"},"Disabling Interruption of Fibers"),(0,i.kt)("p",null,"As we discussed earlier, it is dangerous for fibers to interrupt others. The danger with such an interruption is that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the interruption occurs during the execution of an operation that must be ",(0,i.kt)("em",{parentName:"p"},"finalized"),", the finalization will not be executed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If this interruption occurs in the middle of a ",(0,i.kt)("em",{parentName:"p"},"critical section"),", it will cause an application state to become inconsistent.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It is also a threat to ",(0,i.kt)("em",{parentName:"p"},"resource safety"),". If the fiber is in the middle of acquiring a resource and is interrupted, the application will leak resources."))),(0,i.kt)("p",null,"ZIO introduces the ",(0,i.kt)("inlineCode",{parentName:"p"},"uninterruptible")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"uninterruptibleMask")," operations for this purpose. The former creates a region of code uninterruptible and the latter has the same functionality but gives us a ",(0,i.kt)("inlineCode",{parentName:"p"},"restore")," function that can be applied to any region of code, to restore the interruptibility of that region."),(0,i.kt)("p",null,"These operators are advanced and very low-level; so we don't use them in regularly in application development unless we know what we are as library designers. If you find yourself using these operators, think again to refactor your code using high-level operators like ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO#onInterrupt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO#onDone"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO#ensuring"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO.requireRelease*")," and many other concurrent operators like ",(0,i.kt)("inlineCode",{parentName:"p"},"race"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"foreachPar"),", etc."))}d.isMDXComponent=!0}}]);