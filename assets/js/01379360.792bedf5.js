"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[28891],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>m});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=t.createContext({}),p=function(e){var n=t.useContext(g),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(g.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,g=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(a),u=r,m=s["".concat(g,".").concat(u)]||s[u]||d[u]||o;return a?t.createElement(m,i(i({ref:n},c),{},{components:a})):t.createElement(m,i({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var g in n)hasOwnProperty.call(n,g)&&(l[g]=n[g]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},23751:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=a(87462),r=(a(67294),a(3905));const o={id:"slf4j1",title:"SLF4J v1"},i=void 0,l={unversionedId:"zio-logging/slf4j1",id:"zio-logging/slf4j1",title:"SLF4J v1",description:"The Simple Logging Facade for Java (SLF4J v1 - working with JDK8) serves as a simple facade or abstraction for various logging frameworks (e.g. java.util.logging, logback, log4j).",source:"@site/docs/zio-logging/slf4j1.md",sourceDirName:"zio-logging",slug:"/zio-logging/slf4j1",permalink:"/zio-logging/slf4j1",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-logging/slf4j1.md",tags:[],version:"current",frontMatter:{id:"slf4j1",title:"SLF4J v1"},sidebar:"ecosystem-sidebar",previous:{title:"SLF4J v2",permalink:"/zio-logging/slf4j2"},next:{title:"SLF4J v2 bridge",permalink:"/zio-logging/slf4j2-bridge"}},g={},p=[{value:"Examples",id:"examples",level:2},{value:"SLF4J logger name and annotations",id:"slf4j-logger-name-and-annotations",level:3},{value:"Custom tracing annotation",id:"custom-tracing-annotation",level:3},{value:"Feature changes",id:"feature-changes",level:2},{value:"Version 2.2.0",id:"version-220",level:3}],c={toc:p},s="wrapper";function d(e){let{components:n,...a}=e;return(0,r.kt)(s,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Simple Logging Facade for Java (",(0,r.kt)("a",{parentName:"p",href:"https://www.slf4j.org/"},(0,r.kt)("inlineCode",{parentName:"a"},"SLF4J v1"))," - working with JDK8) serves as a simple facade or abstraction for various logging frameworks (e.g. java.util.logging, logback, log4j)."),(0,r.kt)("p",null,"In order to use this logging backend, we need to add the following line in our build.sbt file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-logging-slf4j" % "2.2.0"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:"))," SLF4J v1 implementation is similar to ",(0,r.kt)("a",{parentName:"p",href:"/zio-logging/slf4j2"},"v2"),",\nhowever there are some differences, v1 using ",(0,r.kt)("a",{parentName:"p",href:"https://logback.qos.ch/manual/mdc.html"},"MDC context"),", working with JDK8,\nv2 using ",(0,r.kt)("a",{parentName:"p",href:"https://www.slf4j.org/manual.html#fluent"},"key-value pairs"),", working with JDK9+.\nIt is recommended to use v2, as it is the latest version\nand also there may be MDC (using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/ThreadLocal.html"},"ThreadLocal"),") issues,\nwhere in the case of parallel executions it can happen that MDC will be reset by different Fiber before the message is logged.")),(0,r.kt)("p",null,"Logger layer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.logging.backend.SLF4J\n\nval logger = Runtime.removeDefaultLoggers >>> SLF4J.slf4j\n")),(0,r.kt)("p",null,"Default ",(0,r.kt)("inlineCode",{parentName:"p"},"SLF4J")," logger setup:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"logger name (by default)  is extracted from ",(0,r.kt)("inlineCode",{parentName:"li"},"zio.Trace"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"for example, trace ",(0,r.kt)("inlineCode",{parentName:"li"},"zio.logging.example.Slf4jSimpleApp.run(Slf4jSimpleApp.scala:17)")," will have ",(0,r.kt)("inlineCode",{parentName:"li"},"zio.logging.example.Slf4jSimpleApp")," as logger name"),(0,r.kt)("li",{parentName:"ul"},"NOTE: custom logger name may be set by ",(0,r.kt)("inlineCode",{parentName:"li"},"zio.logging.loggerName")," aspect"))),(0,r.kt)("li",{parentName:"ul"},"all annotations (logger name and log marker name annotations are excluded) are placed into ",(0,r.kt)("a",{parentName:"li",href:"https://logback.qos.ch/manual/mdc.html"},"MDC context")),(0,r.kt)("li",{parentName:"ul"},"cause is logged as throwable")),(0,r.kt)("p",null,"See also ",(0,r.kt)("a",{parentName:"p",href:"/zio-logging/formatting-log-records#logformat-and-logappender"},"LogFormat and LogAppender")),(0,r.kt)("p",null,"Custom logger name set by aspect:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'ZIO.logInfo("Starting user operation") @@ zio.logging.loggerName("zio.logging.example.UserOperation")\n')),(0,r.kt)("p",null,"Log marker name set by aspect:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'ZIO.logInfo("Confidential user operation") @@ SLF4J.logMarkerName("CONFIDENTIAL")\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"You can find the source code ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-logging/tree/master/examples"},"here")),(0,r.kt)("h3",{id:"slf4j-logger-name-and-annotations"},"SLF4J logger name and annotations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'package zio.logging.example\n\nimport zio.logging.LogAnnotation\nimport zio.logging.backend.SLF4J\nimport zio.{ ExitCode, Runtime, Scope, ZIO, ZIOAppDefault, _ }\n\nimport java.util.UUID\n\nobject Slf4jSimpleApp extends ZIOAppDefault {\n\n  override val bootstrap: ZLayer[ZIOAppArgs, Any, Any] = Runtime.removeDefaultLoggers >>> SLF4J.slf4j\n\n  private val users = List.fill(2)(UUID.randomUUID())\n\n  override def run: ZIO[Scope, Any, ExitCode] =\n    for {\n      _       <- ZIO.logInfo("Start")\n      traceId <- ZIO.succeed(UUID.randomUUID())\n      _       <- ZIO.foreachPar(users) { uId =>\n        {\n          ZIO.logInfo("Starting user operation") *>\n            ZIO.logInfo("Confidential user operation") @@ SLF4J.logMarkerName("CONFIDENTIAL") *>\n            ZIO.sleep(500.millis) *>\n            ZIO.logInfo("Stopping user operation")\n        } @@ ZIOAspect.annotated("user", uId.toString)\n      } @@ LogAnnotation.TraceId(traceId) @@ zio.logging.loggerName("zio.logging.example.UserOperation")\n      _       <- ZIO.logInfo("Done")\n    } yield ExitCode.success\n\n}\n')),(0,r.kt)("p",null,"Logback configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<configuration>\n    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">\n        <layout class="ch.qos.logback.classic.PatternLayout">\n            <Pattern>%d{HH:mm:ss.SSS} [%thread] [%mdc] %-5level %logger{36} %msg%n</Pattern>\n        </layout>\n    </appender>\n    <turboFilter class="ch.qos.logback.classic.turbo.MarkerFilter">\n        <Name>CONFIDENTIAL_FILTER</Name>\n        <Marker>CONFIDENTIAL</Marker>\n        <OnMatch>DENY</OnMatch>\n    </turboFilter>\n    <root level="debug">\n        <appender-ref ref="STDOUT" />\n    </root>\n</configuration>\n')),(0,r.kt)("p",null,"Expected Console Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"12:16:21.951 [ZScheduler-Worker-8] [] INFO  zio.logging.example.Slf4jSimpleApp Start\n12:16:22.024 [ZScheduler-Worker-12] [user=0e3bd69c-ee62-4096-82b2-593760d3fb19, trace_id=6e956bcf-d534-4c16-9402-fb6bca13c9ab] INFO  zio.logging.example.UserOperation Starting user operation\n12:16:22.024 [ZScheduler-Worker-10] [user=869ed4c7-924d-4c02-ab5c-c30c1996a139, trace_id=6e956bcf-d534-4c16-9402-fb6bca13c9ab] INFO  zio.logging.example.UserOperation Starting user operation\n12:16:22.592 [ZScheduler-Worker-14] [user=869ed4c7-924d-4c02-ab5c-c30c1996a139, trace_id=6e956bcf-d534-4c16-9402-fb6bca13c9ab] INFO  zio.logging.example.UserOperation Stopping user operation\n12:16:22.592 [ZScheduler-Worker-1] [user=0e3bd69c-ee62-4096-82b2-593760d3fb19, trace_id=6e956bcf-d534-4c16-9402-fb6bca13c9ab] INFO  zio.logging.example.UserOperation Stopping user operation\n12:16:22.598 [ZScheduler-Worker-14] [] INFO  zio.logging.example.Slf4jSimpleApp Done\n")),(0,r.kt)("h3",{id:"custom-tracing-annotation"},"Custom tracing annotation"),(0,r.kt)("p",null,"Following application has custom aspect ",(0,r.kt)("inlineCode",{parentName:"p"},"currentTracingSpanAspect")," implementation which taking current span from ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracing")," service\nwhich then is added to logs by log annotation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'package zio.logging.example\n\nimport zio.logging.backend.SLF4J\nimport zio.{ ExitCode, Runtime, Scope, ZIO, ZIOAppDefault, _ }\n\nimport java.util.UUID\n\ntrait Tracing {\n  def getCurrentSpan(): UIO[String]\n}\n\nfinal class LiveTracing extends Tracing {\n  override def getCurrentSpan(): UIO[String] = ZIO.succeed(UUID.randomUUID().toString)\n}\n\nobject LiveTracing {\n  val layer: ULayer[Tracing] = ZLayer.succeed(new LiveTracing)\n}\n\nobject CustomTracingAnnotationApp extends ZIOAppDefault {\n\n  private def currentTracingSpanAspect(key: String): ZIOAspect[Nothing, Tracing, Nothing, Any, Nothing, Any] =\n    new ZIOAspect[Nothing, Tracing, Nothing, Any, Nothing, Any] {\n      def apply[R <: Tracing, E, A](zio: ZIO[R, E, A])(implicit trace: Trace): ZIO[R, E, A] =\n        ZIO.serviceWithZIO[Tracing] { tracing =>\n          tracing.getCurrentSpan().flatMap { span =>\n            ZIO.logAnnotate(key, span)(zio)\n          }\n        }\n    }\n\n  override val bootstrap: ZLayer[ZIOAppArgs, Any, Any] = Runtime.removeDefaultLoggers >>> SLF4J.slf4j\n\n  private val users = List.fill(2)(UUID.randomUUID())\n\n  override def run: ZIO[Scope, Any, ExitCode] =\n    (for {\n      _ <- ZIO.foreachPar(users) { uId =>\n        {\n          ZIO.logInfo("Starting operation") *>\n            ZIO.sleep(500.millis) *>\n            ZIO.logInfo("Stopping operation")\n        } @@ ZIOAspect.annotated("user", uId.toString)\n      } @@ currentTracingSpanAspect("trace_id")\n      _ <- ZIO.logInfo("Done")\n    } yield ExitCode.success).provide(LiveTracing.layer)\n\n}\n')),(0,r.kt)("p",null,"Expected Console Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"15:53:20.145 [ZScheduler-Worker-9] [user=1abd8458-aefd-4780-88ec-cccd1310d4c8, trace_id=71436dd4-22d5-4e06-aaa7-f3ff7b108037] INFO  z.l.e.CustomTracingAnnotationApp Starting operation\n15:53:20.145 [ZScheduler-Worker-13] [user=878689e0-da30-49f8-8923-ed915c00db9c, trace_id=71436dd4-22d5-4e06-aaa7-f3ff7b108037] INFO  z.l.e.CustomTracingAnnotationApp Starting operation\n15:53:20.688 [ZScheduler-Worker-15] [user=1abd8458-aefd-4780-88ec-cccd1310d4c8, trace_id=71436dd4-22d5-4e06-aaa7-f3ff7b108037] INFO  z.l.e.CustomTracingAnnotationApp Stopping operation\n15:53:20.688 [ZScheduler-Worker-11] [user=878689e0-da30-49f8-8923-ed915c00db9c, trace_id=71436dd4-22d5-4e06-aaa7-f3ff7b108037] INFO  z.l.e.CustomTracingAnnotationApp Stopping operation\n15:53:20.691 [ZScheduler-Worker-15] [] INFO  z.l.e.CustomTracingAnnotationApp Done\n")),(0,r.kt)("h2",{id:"feature-changes"},"Feature changes"),(0,r.kt)("h3",{id:"version-220"},"Version 2.2.0"),(0,r.kt)("p",null,"Deprecated log annotation with key ",(0,r.kt)("inlineCode",{parentName:"p"},"slf4j_logger_name")," (",(0,r.kt)("inlineCode",{parentName:"p"},"SLF4J.loggerNameAnnotationKey"),") removed,\nonly common log annotation with key ",(0,r.kt)("inlineCode",{parentName:"p"},"logger_name")," (",(0,r.kt)("inlineCode",{parentName:"p"},"zio.logging.loggerNameAnnotationKey"),") for logger name is supported now."))}d.isMDXComponent=!0}}]);