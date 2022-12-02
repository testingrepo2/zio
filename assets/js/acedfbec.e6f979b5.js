"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[83251],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(t),k=i,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||r;return t?a.createElement(d,l(l({ref:n},u),{},{components:t})):a.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=k;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},1442:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const r={id:"zsink",title:"ZSink"},l=void 0,o={unversionedId:"datatypes/stream/zsink",id:"version-1.x/datatypes/stream/zsink",title:"ZSink",description:"Introduction",source:"@site/versioned_docs/version-1.x/datatypes/stream/zsink.md",sourceDirName:"datatypes/stream",slug:"/datatypes/stream/zsink",permalink:"/version-1.x/datatypes/stream/zsink",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/stream/zsink.md",tags:[],version:"1.x",frontMatter:{id:"zsink",title:"ZSink"},sidebar:"datatypes-sidebar",previous:{title:"Transducer",permalink:"/version-1.x/datatypes/stream/transducer"},next:{title:"Sink",permalink:"/version-1.x/datatypes/stream/sink"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Creating sinks",id:"creating-sinks",level:2},{value:"Common Constructors",id:"common-constructors",level:3},{value:"From Success and Failure",id:"from-success-and-failure",level:3},{value:"Collecting",id:"collecting",level:3},{value:"Folding",id:"folding",level:3},{value:"From Effect",id:"from-effect",level:3},{value:"From File",id:"from-file",level:3},{value:"From OutputStream",id:"from-outputstream",level:3},{value:"From Queue",id:"from-queue",level:3},{value:"From Hub",id:"from-hub",level:3},{value:"From Push",id:"from-push",level:3},{value:"ZSink&#39;s Encoding",id:"zsinks-encoding",level:4},{value:"Creating ZSink using Push",id:"creating-zsink-using-push",level:4},{value:"Operations",id:"operations",level:2},{value:"contramap",id:"contramap",level:3},{value:"dimap",id:"dimap",level:3},{value:"Concurrency and Parallelism",id:"concurrency-and-parallelism",level:2},{value:"Parallel Zipping",id:"parallel-zipping",level:3},{value:"Racing",id:"racing",level:3},{value:"Leftovers",id:"leftovers",level:2},{value:"Exposing Leftovers",id:"exposing-leftovers",level:3},{value:"Dropping Leftovers",id:"dropping-leftovers",level:3}],u={toc:p};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink[R, E, I, L, Z]")," is used to consume elements produced by a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZStream"),". You can think of a sink as a function that will consume a variable amount of ",(0,i.kt)("inlineCode",{parentName:"p"},"I")," elements (could be 0, 1, or many!), might fail with an error of type ",(0,i.kt)("inlineCode",{parentName:"p"},"E"),", and will eventually yield a value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Z")," together with a remainder of type ",(0,i.kt)("inlineCode",{parentName:"p"},"L")," as leftover."),(0,i.kt)("p",null,"To consume a stream using ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink")," we can pass ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZStream#run")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stream._\n\nval stream = ZStream.fromIterable(1 to 1000)\nval sink   = ZSink.sum[Int]\nval sum    = stream.run(sink)\n")),(0,i.kt)("h2",{id:"creating-sinks"},"Creating sinks"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"zio.stream")," provides numerous kinds of sinks to use."),(0,i.kt)("h3",{id:"common-constructors"},"Common Constructors"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ZSink.head")," \u2014 It creates a sink containing the first element, returns ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," for empty streams:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val sink: ZSink[Any, Nothing, Int, Int, Option[Int]] = ZSink.head[Int]\nval head: ZIO[Any, Nothing, Option[Int]]             = ZStream(1, 2, 3, 4).run(sink)\n// Result: Some(1)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ZSink.last")," \u2014 It consumes all elements of a stream and returns the last element of the stream:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val sink: ZSink[Any, Nothing, Int, Nothing, Option[Int]] = ZSink.last[Int]\nval last: ZIO[Any, Nothing, Option[Int]]                 = ZStream(1, 2, 3, 4).run(sink)\n// Result: Some(4)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ZSink.count")," \u2014 A sink that consumes all elements of the stream and counts the number of elements fed to it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val sink : ZSink[Any, Nothing, Int, Nothing, Int] = ZSink.sum[Int]\nval count: ZIO[Any, Nothing, Int]                 = ZStream(1, 2, 3, 4, 5).run(sink)\n// Result: 5\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ZSink.sum")," \u2014 A sink that consumes all elements of the stream and sums incoming numeric values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val sink : ZSink[Any, Nothing, Int, Nothing, Int] = ZSink.sum[Int]\nval sum: ZIO[Any, Nothing, Int]                 = ZStream(1, 2, 3, 4, 5).run(sink)\n// Result: 15\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ZSink.take")," \u2014 A sink that takes the specified number of values and result in a ",(0,i.kt)("inlineCode",{parentName:"p"},"Chunk")," data type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val sink  : ZSink[Any, Nothing, Int, Int, Chunk[Int]] = ZSink.take[Int](3)\nval stream: ZIO[Any, Nothing, Chunk[Int]]             = ZStream(1, 2, 3, 4, 5).run(sink)\n// Result: Chunk(1, 2, 3)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ZSink.drain")," \u2014 A sink that ignores its inputs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val drain: ZSink[Any, Nothing, Any, Nothing, Unit] = ZSink.drain\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ZSink.timed")," \u2014 A sink that executes the stream and times its execution:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val timed: ZSink[Clock, Nothing, Any, Nothing, Duration] = ZSink.timed\nval stream: ZIO[Clock, Nothing, Long] =\n  ZStream(1, 2, 3, 4, 5).fixed(2.seconds).run(timed).map(_.getSeconds)\n// Result: 10\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ZSink.foreach")," \u2014 A sink that executes the provided effectful function for every element fed to it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val printer: ZSink[Console, IOException, Int, Int, Unit] =\n  ZSink.foreach((i: Int) => zio.console.putStrLn(i.toString))\nval stream : ZIO[Console, IOException, Unit]             =\n  ZStream(1, 2, 3, 4, 5).run(printer)\n")),(0,i.kt)("h3",{id:"from-success-and-failure"},"From Success and Failure"),(0,i.kt)("p",null,"Similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZStream")," data type, we can create a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"fail")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"succeed")," methods."),(0,i.kt)("p",null,"A sink that doesn't consume any element of type ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," from its upstream and successes with a value of ",(0,i.kt)("inlineCode",{parentName:"p"},"Int")," type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val succeed: ZSink[Any, Nothing, String, String, Int] = ZSink.succeed[String, Int](5)\n")),(0,i.kt)("p",null,"A sink that doesn't consume any element of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Int")," from its upstream and intentionally fails with a message of ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val failed : ZSink[Any, String, Int, Int, Nothing] = ZSink.fail[String, Int]("fail!")\n')),(0,i.kt)("h3",{id:"collecting"},"Collecting"),(0,i.kt)("p",null,"To create a sink that collects all elements of a stream into a ",(0,i.kt)("inlineCode",{parentName:"p"},"Chunk[A]"),", we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink.collectAll"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val stream    : UStream[Int]    = UStream(1, 2, 3, 4, 5)\nval collection: UIO[Chunk[Int]] = stream.run(ZSink.collectAll[Int])\n// Output: Chunk(1, 2, 3, 4, 5)\n")),(0,i.kt)("p",null,"We can collect all elements into a ",(0,i.kt)("inlineCode",{parentName:"p"},"Set"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val collectAllToSet: ZSink[Any, Nothing, Int, Nothing, Set[Int]] = ZSink.collectAllToSet[Int]\nval stream: ZIO[Any, Nothing, Set[Int]] = ZStream(1, 3, 2, 3, 1, 5, 1).run(collectAllToSet)\n// Output: Set(1, 3, 2, 5)\n")),(0,i.kt)("p",null,"Or we can collect and merge them into a ",(0,i.kt)("inlineCode",{parentName:"p"},"Map[K, A]")," using a merge function. In the following example, we use ",(0,i.kt)("inlineCode",{parentName:"p"},"(_:Int) % 3")," to determine map keys and, we provide ",(0,i.kt)("inlineCode",{parentName:"p"},"_ + _")," function to merge multiple elements with the same key:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val collectAllToMap: ZSink[Any, Nothing, Int, Nothing, Map[Int, Int]] = ZSink.collectAllToMap((_: Int) % 3)(_ + _)\nval stream: ZIO[Any, Nothing, Map[Int, Int]] = ZStream(1, 3, 2, 3, 1, 5, 1).run(collectAllToMap)\n// Output: Map(1 -> 3, 0 -> 6, 2 -> 7)\n")),(0,i.kt)("h3",{id:"folding"},"Folding"),(0,i.kt)("p",null,"Basic fold accumulation of received elements:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"ZSink.foldLeft[Int, Int](0)(_ + _)\n")),(0,i.kt)("p",null,"A fold with short-circuiting has a termination predicate that determines the end of the folding process:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream.iterate(0)(_ + 1).run(\n  ZSink.fold(0)(sum => sum <= 10)((acc, n: Int) => acc + n)\n)\n// Output: 15\n")),(0,i.kt)("h3",{id:"from-effect"},"From Effect"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink.fromEffect")," creates a single-value sink produced from an effect:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val sink = ZSink.fromEffect(ZIO.succeed(1))\n")),(0,i.kt)("h3",{id:"from-file"},"From File"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink.fromFile")," creates a file sink that consumes byte chunks and writes them to the specified file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'def fileSink(path: Path): ZSink[Blocking, Throwable, String, Byte, Long] =\n  ZSink\n    .fromFile(path)\n    .contramapChunks[String](_.flatMap(_.getBytes))\n\nval result = ZStream("Hello", "ZIO", "World!")\n  .intersperse("\\n")\n  .run(fileSink(Paths.get("file.txt")))\n')),(0,i.kt)("h3",{id:"from-outputstream"},"From OutputStream"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink.fromOutputStream")," creates a sink that consumes byte chunks and write them to the ",(0,i.kt)("inlineCode",{parentName:"p"},"OutputStream"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'ZStream("Application", "Error", "Logs")\n  .intersperse("\\n")\n  .run(\n    ZSink\n      .fromOutputStream(System.err)\n      .contramapChunks[String](_.flatMap(_.getBytes))\n  )\n')),(0,i.kt)("h3",{id:"from-queue"},"From Queue"),(0,i.kt)("p",null,"A queue has a finite or infinite buffer size, so they are useful in situations where we need to consume streams as fast as we can, and then do some batching operations on consumed messages. By using ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink.fromQueue")," we can create a sink that is backed by a queue; it enqueues each element into the specified queue:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val myApp: ZIO[Console with Clock, IOException, Unit] =\n  for {\n    queue    <- ZQueue.bounded[Int](32)\n    producer <- ZStream\n      .iterate(1)(_ + 1)\n      .fixed(200.millis)\n      .run(ZSink.fromQueue(queue))\n      .fork\n    consumer <- queue.take.flatMap(x => putStrLn(x.toString)).forever\n    _        <- producer.zip(consumer).join\n  } yield ()\n")),(0,i.kt)("h3",{id:"from-hub"},"From Hub"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Hub")," is an asynchronous data type in which publisher can publish their messages to that and subscribers can subscribe to take messages from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Hub"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink.fromHub")," takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZHub")," and returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink")," which publishes each element to that ",(0,i.kt)("inlineCode",{parentName:"p"},"ZHub"),"."),(0,i.kt)("p",null,"In the following example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"sink")," consumes elements of the ",(0,i.kt)("inlineCode",{parentName:"p"},"producer")," stream and publishes them to the ",(0,i.kt)("inlineCode",{parentName:"p"},"hub"),". We have two consumers that are subscribed to that hub and they are taking its elements forever:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val myApp: ZIO[Console with Clock, IOException, Unit] =\n  for {\n    promise <- Promise.make[Nothing, Unit]\n    hub <- ZHub.bounded[Int](1)\n    sink <- ZIO.succeed(ZSink.fromHub(hub))\n    producer <- ZStream.iterate(0)(_ + 1).fixed(1.seconds).run(sink).fork\n    consumers <- hub.subscribe.zip(hub.subscribe).use { case (left, right) =>\n      for {\n        _ <- promise.succeed(())\n        f1 <- left.take.flatMap(e => putStrLn(s"Left Queue: $e")).forever.fork\n        f2 <- right.take.flatMap(e => putStrLn(s"Right Queue: $e")).forever.fork\n        _ <- f1.zip(f2).join\n      } yield ()\n    }.fork\n    _ <- promise.await\n    _ <- producer.zip(consumers).join\n  } yield ()\n')),(0,i.kt)("h3",{id:"from-push"},"From Push"),(0,i.kt)("p",null,"Before deepening into creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"Push")," data-type, we need to learn more about the implementation details of ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink"),". Note that this topic is for advanced users, and we do not require using ",(0,i.kt)("inlineCode",{parentName:"p"},"Push")," data-type to create ZIO sinks, most of the time."),(0,i.kt)("h4",{id:"zsinks-encoding"},"ZSink's Encoding"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ZSink")," is a wrapper data-type around ",(0,i.kt)("em",{parentName:"p"},"managed")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Push"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"abstract class ZSink[-R, +E, -I, +L, +Z] private (\n    val push: ZManaged[R, Nothing, ZSink.Push[R, E, I, L, Z]]\n) \n\nobject ZSink {\n  type Push[-R, +E, -I, +L, +Z] =\n    Option[Chunk[I]] => ZIO[R, (Either[E, Z], Chunk[L]), Unit]\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Push")," is a function from ",(0,i.kt)("inlineCode",{parentName:"p"},"Option[Chunk[I]]")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO[R, (Either[E, Z], Chunk[L]), Unit]"),". We can create four different data-types using its smart constructors:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Push.more")," \u2014 Using this constructor we create a ",(0,i.kt)("inlineCode",{parentName:"li"},"Push")," data-type that requires more values to consume (",(0,i.kt)("inlineCode",{parentName:"li"},"Option[Chunk[I]] => UIO[Unit]"),"):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"object Push {\n  val more: ZIO[Any, Nothing, Unit] = UIO.unit\n}\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Push.emit")," \u2014 By providing ",(0,i.kt)("inlineCode",{parentName:"li"},"z")," (as an ",(0,i.kt)("em",{parentName:"li"},"end")," value) and ",(0,i.kt)("inlineCode",{parentName:"li"},"leftover")," arguments to this constructor we can create a ",(0,i.kt)("inlineCode",{parentName:"li"},"Push")," data-type describing a sink that ends with ",(0,i.kt)("inlineCode",{parentName:"li"},"z")," value and emits its leftovers (",(0,i.kt)("inlineCode",{parentName:"li"},"Option[Chunk[I]] => IO[(Right[Nothing, Z], Chunk[I]), Nothing]"),"):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"object Push {\ndef emit[I, Z](\n    z: Z,\n    leftover: Chunk[I]\n): IO[(Right[Nothing, Z], Chunk[I]), Nothing] =\n  IO.fail((Right(z), leftover))\n}\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Push.fail")," \u2014 By providing an error message and leftover to this constructor, we can create a ",(0,i.kt)("inlineCode",{parentName:"li"},"Push")," data-type describing a sink that fails with ",(0,i.kt)("inlineCode",{parentName:"li"},"e")," and emits the leftover (",(0,i.kt)("inlineCode",{parentName:"li"},"Option[Chunk[I]] => IO[(Left[E, Nothing], Chunk[I]), Nothing]"),"):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def fail[I, E](\n    e: E,\n    leftover: Chunk[I]\n): IO[(Left[E, Nothing], Chunk[I]), Nothing] = \n  IO.fail((Left(e), leftover))\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Push.halt")," \u2014 By providing a ",(0,i.kt)("inlineCode",{parentName:"li"},"Cause")," we can create a ",(0,i.kt)("inlineCode",{parentName:"li"},"Push")," data-type describing a sink that halts the process of consuming elements (",(0,i.kt)("inlineCode",{parentName:"li"},"Option[Chunk[I]] => ZIO[Any, (Left[E, Nothing], Chunk[Nothing]), Nothing]"),"):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def halt[E](\n    c: Cause[E]\n): ZIO[Any, (Left[E, Nothing], Chunk[Nothing]), Nothing] =\n  IO.halt(c).mapError(e => (Left(e), Chunk.empty))\n")),(0,i.kt)("p",null,"Now, we are ready to see how the existing ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink.head")," sink is implemented using ",(0,i.kt)("inlineCode",{parentName:"p"},"Push")," data-type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def head[I]: ZSink[Any, Nothing, I, I, Option[I]] =\n  ZSink[Any, Nothing, I, I, Option[I]](ZManaged.succeed({\n    case Some(ch) =>\n      if (ch.isEmpty) { // If the chunk is empty, we require more elements\n        Push.more\n      } else {\n        Push.emit(Some(ch.head), ch.drop(1))\n      }\n    case None => Push.emit(None, Chunk.empty)\n  }))\n")),(0,i.kt)("h4",{id:"creating-zsink-using-push"},"Creating ZSink using Push"),(0,i.kt)("p",null,"To create a ZSink using ",(0,i.kt)("inlineCode",{parentName:"p"},"Push")," data-type, we should use ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink.fromPush")," constructor. This constructor is implemented as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"object ZSink {\n  def fromPush[R, E, I, L, Z](sink: Push[R, E, I, L, Z]): ZSink[R, E, I, L, Z] =\n    ZSink(Managed.succeed(sink))\n}\n")),(0,i.kt)("p",null,"So nothing special, it just creates us a new ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink")," containing a managed push. "),(0,i.kt)("p",null,"Let's rewrite ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink.succeed")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink.fail")," \u2014 the two existing ZIO sinks \u2014 using ",(0,i.kt)("inlineCode",{parentName:"p"},"fromPush"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def succeed[I, Z](z: => Z): ZSink[Any, Nothing, I, I, Z] =\n  ZSink.fromPush[Any, Nothing, I, I, Z] { c =>\n    val leftover = c.fold[Chunk[I]](Chunk.empty)(identity)\n    Push.emit(z, leftover)\n  }\n  \ndef fail[E, I](e: => E): ZSink[Any, E, I, I, Nothing] =\n  ZSink.fromPush[Any, E, I, I, Nothing] { c =>\n    val leftover = c.fold[Chunk[I]](Chunk.empty)(identity)\n    Push.fail(e, leftover)\n  }\n")),(0,i.kt)("h2",{id:"operations"},"Operations"),(0,i.kt)("p",null,"Having created the sink, we can transform it with provided operations."),(0,i.kt)("h3",{id:"contramap"},"contramap"),(0,i.kt)("p",null,"Contramap is a simple combinator to change the domain of an existing function. While ",(0,i.kt)("em",{parentName:"p"},"map")," changes the co-domain of a function, the ",(0,i.kt)("em",{parentName:"p"},"contramap")," changes the domain of a function. So the ",(0,i.kt)("em",{parentName:"p"},"contramap")," takes a function and maps over its input."),(0,i.kt)("p",null,"This is useful when we have a fixed output, and our existing function cannot consume those outputs. So we can use ",(0,i.kt)("em",{parentName:"p"},"contramap")," to create a new function that can consume that fixed output. Assume we have a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink.sum")," that sums incoming numeric values, but we have a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZStream")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," values. We can convert the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink.sum")," to a sink that can consume ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," values;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val numericSum: ZSink[Any, Nothing, Int, Nothing, Int]    = \n  ZSink.sum[Int]\nval stringSum : ZSink[Any, Nothing, String, Nothing, Int] = \n  numericSum.contramap((x: String) => x.toInt)\n\nval sum: ZIO[Any, Nothing, Int] =\n  ZStream("1", "2", "3", "4", "5").run(stringSum)\n// Output: 15\n')),(0,i.kt)("h3",{id:"dimap"},"dimap"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"dimap")," is an extended ",(0,i.kt)("inlineCode",{parentName:"p"},"contramap")," that additionally transforms sink's output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'// Convert its input to integers, do the computation and then convert them back to a string\nval sumSink: ZSink[Any, Nothing, String, Nothing, String] =\n  numericSum.dimap[String, String](_.toInt, _.toString)\n  \nval sum: ZIO[Any, Nothing, String] =\n  ZStream("1", "2", "3", "4", "5").run(sumSink)\n// Output: 15\n')),(0,i.kt)("h2",{id:"concurrency-and-parallelism"},"Concurrency and Parallelism"),(0,i.kt)("h3",{id:"parallel-zipping"},"Parallel Zipping"),(0,i.kt)("p",null,"Like ",(0,i.kt)("inlineCode",{parentName:"p"},"ZStream"),", two ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink")," can be zipped together. Both of them will be run in parallel, and their results will be combined in a tuple:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val kafkaSink: ZSink[Any, Throwable, Record, Record, Unit] =\n  ZSink.foreach[Any, Throwable, Record](record => ZIO.effect(???))\n\nval pulsarSink: ZSink[Any, Throwable, Record, Record, Unit] =\n  ZSink.foreach[Any, Throwable, Record](record => ZIO.effect(???))\n\nval stream: ZSink[Any, Throwable, Record, Record, (Unit, Unit)] =\n  kafkaSink zipPar pulsarSink \n")),(0,i.kt)("h3",{id:"racing"},"Racing"),(0,i.kt)("p",null,"We are able to ",(0,i.kt)("inlineCode",{parentName:"p"},"race")," multiple sinks, they will run in parallel, and the one that wins will provide the result of our program:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val stream: ZSink[Any, Throwable, Record, Record, Unit] =\n  kafkaSink race pulsarSink \n")),(0,i.kt)("p",null,"To determine which one succeeded, we should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink#raceBoth")," combinator, it returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"Either")," result."),(0,i.kt)("h2",{id:"leftovers"},"Leftovers"),(0,i.kt)("h3",{id:"exposing-leftovers"},"Exposing Leftovers"),(0,i.kt)("p",null,"A sink consumes a variable amount of ",(0,i.kt)("inlineCode",{parentName:"p"},"I")," elements (zero or more) from the upstream. If the upstream is finite, we can expose leftover values by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink#exposeLeftOver"),". It returns a tuple that contains the result of the previous sink and its leftovers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val s1: ZIO[Any, Nothing, (Chunk[Int], Chunk[Int])] =\n  ZStream(1, 2, 3, 4, 5).run(\n    ZSink.take(3).exposeLeftover\n  )\n// Output: (Chunk(1, 2, 3), Chunk(4, 5))\n\n\nval s2: ZIO[Any, Nothing, (Option[Int], Chunk[Int])] =\n  ZStream(1, 2, 3, 4, 5).run(\n    ZSink.head[Int].exposeLeftover\n  )\n// Output: (Some(1), Chunk(2, 3, 4, 5))\n")),(0,i.kt)("h3",{id:"dropping-leftovers"},"Dropping Leftovers"),(0,i.kt)("p",null,"If we don't need leftovers, we can drop them by using ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSink#dropLeftover"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"ZSink.take[Int](3).dropLeftover\n")))}m.isMDXComponent=!0}}]);