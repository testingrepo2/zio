"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[29942],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(a),p=r,h=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},14494:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={id:"statsd-client",title:"StatsD Client"},i=void 0,s={unversionedId:"zio-metrics-connectors/metrics/statsd-client",id:"zio-metrics-connectors/metrics/statsd-client",title:"StatsD Client",description:"In a normal StatsD setup we will find a StatsD agent with an open UDP port where applications send their",source:"@site/docs/zio-metrics-connectors/metrics/statsd-client.md",sourceDirName:"zio-metrics-connectors/metrics",slug:"/zio-metrics-connectors/metrics/statsd-client",permalink:"/zio-metrics-connectors/metrics/statsd-client",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-metrics-connectors/metrics/statsd-client.md",tags:[],version:"current",frontMatter:{id:"statsd-client",title:"StatsD Client"},sidebar:"ecosystem-sidebar",previous:{title:"ZMX Metric Reference",permalink:"/zio-metrics-connectors/metrics/zmx-metric-reference"},next:{title:"Prometheus Client",permalink:"/zio-metrics-connectors/metrics/prometheus-client"}},l={},d=[{value:"ZMX metrics in StatsD",id:"zmx-metrics-in-statsd",level:2},{value:"Counter",id:"counter",level:3},{value:"Gauge",id:"gauge",level:3},{value:"Histogram",id:"histogram",level:3},{value:"Summary",id:"summary",level:3},{value:"Sets",id:"sets",level:3},{value:"The ZMX StatsD example",id:"the-zmx-statsd-example",level:2},{value:"A simple StatsD / Datadog setup",id:"a-simple-statsd--datadog-setup",level:2},{value:"Get and run the docker based Datadog collector",id:"get-and-run-the-docker-based-datadog-collector",level:3},{value:"Run the Datadog example",id:"run-the-datadog-example",level:3},{value:"Visualize the metrics",id:"visualize-the-metrics",level:3},{value:"Datadog dashboard",id:"datadog-dashboard",level:3}],c={toc:d};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.metrics._\n")),(0,r.kt)("p",null,"In a normal StatsD setup we will find a StatsD agent with an open UDP port where applications send their\nmetrics to. The format of the metrics is defined in simple ",(0,r.kt)("a",{parentName:"p",href:"https://docs.datadoghq.com/developers/dogstatsd/datagram_shell/?tab=metrics"},"datagrams"),". "),(0,r.kt)("p",null,"With the StatsD client ZMX creates the relevant StatsD datagrams and sends them via UDP. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The instrumented code is exactly the as for the Prometheus instrumentation. The only difference is that\nanother client is provided when the App is configured. ")),(0,r.kt)("h2",{id:"zmx-metrics-in-statsd"},"ZMX metrics in StatsD"),(0,r.kt)("p",null,"StatsD normally has its own definition how histograms and summaries are configured. In the default setup this\nis defined in the config file of the statsd agent. Furthermore, a StatsD Histogram is more or less the\nequivalent of a Prometheus summary. "),(0,r.kt)("p",null,"However, whenever the desired quantiles need to change, the config must be adjusted and the agent restarted. "),(0,r.kt)("p",null,"Therefore, the ZMX client maps the more complex metrics to a set of related gauges. This allows us to achieve\nthe same visualization without the need to adjust any of the agents config files. "),(0,r.kt)("h3",{id:"counter"},"Counter"),(0,r.kt)("p",null,"Upon the change of a counter a datagram is sent with the delta to the previous value reported. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"countAll:1|c\n")),(0,r.kt)("h3",{id:"gauge"},"Gauge"),(0,r.kt)("p",null,"Whenever a gauge changes, a datagram with the current absolute value of the gauge is reported."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"adjustGauge:32.2787317766752|g\n")),(0,r.kt)("h3",{id:"histogram"},"Histogram"),(0,r.kt)("p",null,"A histogram is reported in a datagram built from related gauges. The individual records share the same name\nand the buckets are encoded in an extra label ",(0,r.kt)("inlineCode",{parentName:"p"},"le"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"zmxHistogram:0|g|#le:0.0\nzmxHistogram:3|g|#le:10.0\nzmxHistogram:6|g|#le:20.0\nzmxHistogram:10|g|#le:30.0\nzmxHistogram:13|g|#le:40.0\nzmxHistogram:16|g|#le:50.0\nzmxHistogram:19|g|#le:60.0\nzmxHistogram:22|g|#le:70.0\nzmxHistogram:24|g|#le:80.0\nzmxHistogram:27|g|#le:90.0\nzmxHistogram:29|g|#le:100.0\nzmxHistogram:37|g|#le:Inf\n")),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("p",null,"A summary is also reported as a set of related gauges. Each quantile will be reported within its own gauge.\nThe additional labels are ",(0,r.kt)("inlineCode",{parentName:"p"},"quantile")," to address the quantile and ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," to display the configured error margin. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mySummary:123|g|#quantile:0.1,error:0.03\nmySummary:254|g|#quantile:0.5,error:0.03\nmySummary:441|g|#quantile:0.9,error:0.03\n")),(0,r.kt)("h3",{id:"sets"},"Sets"),(0,r.kt)("p",null,"Sets are also reported as sets of related gauges. An additional label is used to differentiate the distinct\nvalues in the set. The name of the label is as configured in the aspect used to capture the set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mySet:6|g|#token:myKey-18\nmySet:1|g|#token:myKey-19\nmySet:2|g|#token:myKey-13\nmySet:3|g|#token:myKey-14\nmySet:1|g|#token:myKey-16\nmySet:3|g|#token:myKey-10\nmySet:2|g|#token:myKey-11\nmySet:1|g|#token:myKey-12\n")),(0,r.kt)("h2",{id:"the-zmx-statsd-example"},"The ZMX StatsD example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import java.net.InetSocketAddress\n\nimport zio._\nimport zio.console._\nimport zio.zmx.MetricSnapshot.Prometheus\nimport zio.zmx.statsd.StatsdClient\n\nimport zio.zmx.example.InstrumentedSample\n\nval instrumentedSample = new InstrumentedSample() {}\n")),(0,r.kt)("p",null,"For StatsD we do need to spin up our own server. Rather we need to provide a client that can send datagrams\nto a specified UDP destination. "),(0,r.kt)("p",null,"Again we need an effect that runs our instrumented code until the user presses any key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val execute =\n  for {\n   fiber <- instrumentedSample.program.fork\n    _ <- putStrLn("Press Any Key") *> getStrLn.orDie \n    _ <- fiber.interrupt\n  } yield ExitCode.success\n')),(0,r.kt)("p",null,"Now, we can override the ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," method of our ZIO ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," and simply provide a ",(0,r.kt)("inlineCode",{parentName:"p"},"StatsDListener"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def run(args: List[String]): URIO[ZEnv, ExitCode] =\n  execute.provideCustomLayer(StatsdClient.default).orDie\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"It is a listener because it listens to changes in the ZMX internal state and reports them\nto StatsD by sending out appropriate datagrams. ")),(0,r.kt)("h2",{id:"a-simple-statsd--datadog-setup"},"A simple StatsD / Datadog setup"),(0,r.kt)("p",null,"The following steps describe how to set up a ZIO ZMX application reporting to ",(0,r.kt)("a",{parentName:"p",href:"https://www.datadoghq.com/"},"Datadog")," using a free Datadog account\nwith limited functionality. The local setup is Windows 10 with WSL and Docker installed running Ubuntu 18.04 within WSL. "),(0,r.kt)("p",null,"In principle the setup is as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The ZIO application sends datagrams to ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:8125")," via UDP, so we need a component picking up those datagrams. "),(0,r.kt)("li",{parentName:"ol"},"Run a Datadog Collector within a docker image exposing a Unix socket for datagrams."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"socat")," to listen on the UDP socket 8125 and forward incoming traffic to the Unix socket. "),(0,r.kt)("li",{parentName:"ol"},"Configure a dashboard in Datadog to visualize the metrics.")),(0,r.kt)("h3",{id:"get-and-run-the-docker-based-datadog-collector"},"Get and run the docker based Datadog collector"),(0,r.kt)("p",null,"Upon registration with datadoghq.com you will get an API key which is required to configure the agents collecting data. If you are planning\nto experiment with different agents, take a note of your API key for further reference. In the steps below the API key will be referred to\nas ",(0,r.kt)("inlineCode",{parentName:"p"},"$APIKEY")),(0,r.kt)("p",null,"For our example we have chosen to use the docker based collector and use a unix socket to report our datagrams to that agent. "),(0,r.kt)("p",null,"You can start the agent from the command line with "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run --name dd-agent -e DD_API_KEY=$APIKEY -e DD_SITE=datadoghq.eu \\\n  -e DD_DOGSTATSD_SOCKET=/var/run/datadog/datadog.sock \\\n  -v /var/run/datadog:/var/run/datadog \\\n  -v /var/run/docker.sock:/var/run/docker.sock:ro \\\n  datadog/agent\n")),(0,r.kt)("p",null,"As you can see, we require that the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/run/datadog")," exists so that we can use it as a volume within the agent's docker container. The environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"DD_DOGSTATSD_SOCKET")," tells the agent to use a unix socket to listen for datagrams. The socket file must reside within the mounted volume. "),(0,r.kt)("p",null,"This will start the datadog collector within docker and we have a unix socket to report our datagrams to. "),(0,r.kt)("p",null,"The next step is to create a UDP socket where our application can report its datagrams to. For our example we have chosen ",(0,r.kt)("inlineCode",{parentName:"p"},"socat")," to forward\nUDP traffic to our unix socket:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo socat -s -u udp-recv:8125 unix-sendto:/var/run/datadog/datadog.sock\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You could add the ",(0,r.kt)("inlineCode",{parentName:"p"},"-v")," parameter to the socat call to run socat in verbose mode. That would print\nall traffic being forwarded to the console as well. This is useful to determine whether\ndatagrams are actually sent. ")),(0,r.kt)("h3",{id:"run-the-datadog-example"},"Run the Datadog example"),(0,r.kt)("p",null,"Now, the Datadog example can be started from within the ZMX checkout directory with "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sbt examples/run\n")),(0,r.kt)("h3",{id:"visualize-the-metrics"},"Visualize the metrics"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log in to your datadog account "),(0,r.kt)("li",{parentName:"ol"},"From the menu on left hand side select `Dashboards/New Dashboard'"),(0,r.kt)("li",{parentName:"ol"},"In the upper right corner, click on the dashboard settings and select 'Import Dashboard JSON' "),(0,r.kt)("li",{parentName:"ol"},"From the filesystem, select ",(0,r.kt)("inlineCode",{parentName:"li"},"$ZMXDIR/examples/statsd/ZIOZMXmetrics.json")),(0,r.kt)("li",{parentName:"ol"},"Confirm to override the dashboard configuration "),(0,r.kt)("li",{parentName:"ol"},"Save the just imported dashboard "),(0,r.kt)("li",{parentName:"ol"},"From the dashboard list select ",(0,r.kt)("em",{parentName:"li"},"ZIO ZMX metrics")),(0,r.kt)("li",{parentName:"ol"},"The Datadog dashboard is displayed")),(0,r.kt)("h3",{id:"datadog-dashboard"},"Datadog dashboard"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A simple Datadog Dashboard",src:a(15410).Z,width:"1892",height:"1144"})))}m.isMDXComponent=!0},15410:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ZIOZmx-Datadog-4688e7cee89ae0c3593cec628b18ab6f.png"}}]);