"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={id:"instrumentation-examples",title:"Instrumentation Examples"},i=void 0,s={unversionedId:"zio-metrics-connectors/metrics/instrumentation-examples",id:"zio-metrics-connectors/metrics/instrumentation-examples",title:"Instrumentation Examples",description:"The trait below is used in the ZMX sample application just to show how the individual aspects",source:"@site/docs/zio-metrics-connectors/metrics/instrumentation-examples.md",sourceDirName:"zio-metrics-connectors/metrics",slug:"/zio-metrics-connectors/metrics/instrumentation-examples",permalink:"/zio-metrics-connectors/metrics/instrumentation-examples",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-metrics-connectors/metrics/instrumentation-examples.md",tags:[],version:"current",frontMatter:{id:"instrumentation-examples",title:"Instrumentation Examples"},sidebar:"ecosystem-sidebar",previous:{title:"Prometheus Client",permalink:"/zio-metrics-connectors/metrics/prometheus-client"},next:{title:"ZIO Mock",permalink:"/zio-mock/"}},c={},l=[],m={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The trait below is used in the ZMX sample application just to show how the individual aspects\ncan be configured and used. "),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"/zio-metrics-connectors/metrics/statsd-client"},"StatsD")," and ",(0,a.kt)("a",{parentName:"p",href:"/zio-metrics-connectors/metrics/prometheus-client"},"Prometheus")," to see how the captured\nmetrics can be visualized in the supported back ends. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'trait InstrumentedSample {\n\n  // Create a gauge, it can be applied to effects yielding a Double\n  val aspGauge1 = Metric.gauge("gauge1")\n\n  val aspGauge2 = Metric.gauge("gauge2")\n\n  // Create a histogram with 12 buckets: 0..100 in steps of 10, Infinite\n  // It also can be applied to effects yielding a Double\n  val aspHistogram =\n    Metric.histogram("zmxHistogram", MetricKeyType.Histogram.Boundaries.linear(0.0d, 10.0d, 11))\n\n  // Create a summary that can hold 100 samples, the max age of the samples is 1 day.\n  // The summary should report th 10%, 50% and 90% Quantile\n  // It can be applied to effects yielding an Int\n  val aspSummary =\n    Metric.summary("mySummary", 1.day, 100, 0.03d, Chunk(0.1, 0.5, 0.9)).contramap[Int](_.toDouble)\n\n  // Create a Set to observe the occurrences of unique Strings\n  // It can be applied to effects yielding a String\n  val aspSet = Metric.frequency("mySet")\n\n  // Create a counter applicable to any effect\n  val aspCountAll = Metric.counter("countAll").contramap[Any](_ => 1L)\n\n  private lazy val gaugeSomething = for {\n    _ <- Random.nextDoubleBetween(0.0d, 100.0d) @@ aspGauge1 @@ aspCountAll\n    _ <- Random.nextDoubleBetween(-50d, 50d) @@ aspGauge2 @@ aspCountAll\n  } yield ()\n\n  // Just record something into a histogram\n  private lazy val observeNumbers = for {\n    _ <- Random.nextDoubleBetween(0.0d, 120.0d) @@ aspHistogram @@ aspCountAll\n    _ <- Random.nextIntBetween(100, 500) @@ aspSummary @@ aspCountAll\n  } yield ()\n\n  // Observe Strings in order to capture unique values\n  private lazy val observeKey = for {\n    _ <- Random.nextIntBetween(10, 20).map(v => s"myKey-$v") @@ aspSet @@ aspCountAll\n  } yield ()\n\n  def program: ZIO[Any, Nothing, Unit] = for {\n    _ <- gaugeSomething.schedule(Schedule.spaced(200.millis)).forkDaemon\n    _ <- observeNumbers.schedule(Schedule.spaced(150.millis)).forkDaemon\n    _ <- observeKey.schedule(Schedule.spaced(300.millis)).forkDaemon\n  } yield ()\n}\n')))}u.isMDXComponent=!0}}]);