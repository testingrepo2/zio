"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3543],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=l,k=s["".concat(d,".").concat(m)]||s[m]||c[m]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={id:"schedule",title:"Schedule"},i=void 0,o={unversionedId:"datatypes/misc/schedule",id:"version-1.x/datatypes/misc/schedule",title:"Schedule",description:"A Schedule[Env, In, Out] is an immutable value that describes a recurring effectful schedule, which runs in some environment Env, after consuming values of type In (errors in the case of retry, or values in the case of repeat) produces values of type Out, and in every step based on input values and the internal state decides to halt or continue after some delay d.",source:"@site/versioned_docs/version-1.x/datatypes/misc/schedule.md",sourceDirName:"datatypes/misc",slug:"/datatypes/misc/schedule",permalink:"/version-1.x/datatypes/misc/schedule",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/misc/schedule.md",tags:[],version:"1.x",frontMatter:{id:"schedule",title:"Schedule"},sidebar:"datatypes-sidebar",previous:{title:"Chunk",permalink:"/version-1.x/datatypes/misc/chunk"},next:{title:"Supervisor",permalink:"/version-1.x/datatypes/misc/supervisor"}},d={},p=[{value:"Repeat and Retry",id:"repeat-and-retry",level:2},{value:"Repeat",id:"repeat",level:3},{value:"Retry",id:"retry",level:3},{value:"Base Schedules",id:"base-schedules",level:2},{value:"stop",id:"stop",level:3},{value:"once",id:"once",level:3},{value:"forever",id:"forever",level:3},{value:"recurs",id:"recurs",level:3},{value:"spaced",id:"spaced",level:3},{value:"fixed",id:"fixed",level:3},{value:"exponential",id:"exponential",level:3},{value:"fibonacci",id:"fibonacci",level:3},{value:"identity",id:"identity",level:3},{value:"unfold",id:"unfold",level:3},{value:"succeed",id:"succeed",level:3},{value:"fromFunction",id:"fromfunction",level:3},{value:"Schedule Combinators",id:"schedule-combinators",level:2},{value:"Composition",id:"composition",level:3},{value:"Union",id:"union",level:4},{value:"Intersection",id:"intersection",level:4},{value:"Sequence",id:"sequence",level:4},{value:"Piping",id:"piping",level:3},{value:"Jittering",id:"jittering",level:3},{value:"Collecting",id:"collecting",level:3},{value:"Filtering",id:"filtering",level:3},{value:"Mapping",id:"mapping",level:3},{value:"Left/Right Ap",id:"leftright-ap",level:3},{value:"Modifying",id:"modifying",level:3},{value:"Tapping",id:"tapping",level:3},{value:"Examples",id:"examples",level:2}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"Schedule[Env, In, Out]")," is an ",(0,l.kt)("strong",{parentName:"p"},"immutable value")," that ",(0,l.kt)("strong",{parentName:"p"},"describes")," a recurring effectful schedule, which runs in some environment ",(0,l.kt)("inlineCode",{parentName:"p"},"Env"),", after consuming values of type ",(0,l.kt)("inlineCode",{parentName:"p"},"In")," (errors in the case of ",(0,l.kt)("inlineCode",{parentName:"p"},"retry"),", or values in the case of ",(0,l.kt)("inlineCode",{parentName:"p"},"repeat"),") produces values of type ",(0,l.kt)("inlineCode",{parentName:"p"},"Out"),", and in every step based on input values and the internal state decides to halt or continue after some delay ",(0,l.kt)("strong",{parentName:"p"},"d"),"."),(0,l.kt)("p",null,"Schedules are defined as a possibly infinite set of intervals spread out over time. Each interval defines a window in which recurrence is possible."),(0,l.kt)("p",null,"When schedules are used to repeat or retry effects, the starting boundary of each interval produced by a schedule is used as the moment when the effect will be executed again."),(0,l.kt)("p",null,"A variety of other operators exist for transforming and combining schedules, and the companion object for ",(0,l.kt)("inlineCode",{parentName:"p"},"Schedule")," contains all common types of schedules, both for performing retrying, as well as performing repetition."),(0,l.kt)("h2",{id:"repeat-and-retry"},"Repeat and Retry"),(0,l.kt)("p",null,"Schedules allow us to define and compose flexible recurrence schedules, which can be used to ",(0,l.kt)("strong",{parentName:"p"},"repeat")," actions, or ",(0,l.kt)("strong",{parentName:"p"},"retry")," actions in the event of errors."),(0,l.kt)("p",null,"Repetition and retrying are two similar concepts in the domain of scheduling. It is the same concept and idea, only one of them looks for successes and the other one looks for failures. "),(0,l.kt)("h3",{id:"repeat"},"Repeat"),(0,l.kt)("p",null,"In the case of repetition, ZIO has a ",(0,l.kt)("inlineCode",{parentName:"p"},"ZIO#repeat")," function, which takes a schedule as a repetition policy and returns another effect that describes an effect with repetition strategy according to that policy."),(0,l.kt)("p",null,"Repeat policies are used in the following functions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ZIO#repeat")," \u2014 Repeats an effect until the schedule is done."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ZIO#repeatOrElse")," \u2014 Repeats an effect until the schedule is done, with a fallback for errors.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Note:"))),(0,l.kt)("p",{parentName:"blockquote"},"Scheduled recurrences are in addition to the first execution, so that ",(0,l.kt)("inlineCode",{parentName:"p"},"io.repeat(Schedule.once)")," yields an effect that executes ",(0,l.kt)("inlineCode",{parentName:"p"},"io"),", and then if that succeeds, executes ",(0,l.kt)("inlineCode",{parentName:"p"},"io")," an additional time.")),(0,l.kt)("p",null,"Let's see how we can create a repeated effect by using ",(0,l.kt)("inlineCode",{parentName:"p"},"ZIO#repeat")," function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val action:      ZIO[R, E, A] = ???\nval policy: Schedule[R1, A, B] = ???\n\nval repeated = action repeat policy\n")),(0,l.kt)("p",null,"There is another version of ",(0,l.kt)("inlineCode",{parentName:"p"},"repeat")," that helps us to have a fallback strategy in case of erros, if something goes wrong we can handle that by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"ZIO#repeatOrElse")," function, which helps up to add an ",(0,l.kt)("inlineCode",{parentName:"p"},"orElse")," callback that will run in case of repetition failure:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val action:       ZIO[R, E, A] = ???\nval policy: Schedule[R1, A, B] = ???\n\nval orElse: (E, Option[B]) => ZIO[R1, E2, B] = ???\n\nval repeated = action repeatOrElse (policy, orElse)\n")),(0,l.kt)("h3",{id:"retry"},"Retry"),(0,l.kt)("p",null,"In the case of retrying, ZIO has a ",(0,l.kt)("inlineCode",{parentName:"p"},"ZIO#retry")," function, which takes a schedule as a repetition policy and returns another effect that describes an effect with repetition strategy which will retry following the failure of the original effect."),(0,l.kt)("p",null,"Repeat policies are used in the following functions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ZIO#retry")," \u2013 Retries an effect until it succeeds."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ZIO#retryOrElse")," \u2014 Retries an effect until it succeeds, with a fallback for errors.")),(0,l.kt)("p",null,"Let's see how we can create a repeated effect by using ",(0,l.kt)("inlineCode",{parentName:"p"},"ZIO#retry")," function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val action:       ZIO[R, E, A] = ???\nval policy: Schedule[R1, E, S] = ???\n\nval repeated = action retry policy\n\n")),(0,l.kt)("p",null,"There is another version of ",(0,l.kt)("inlineCode",{parentName:"p"},"retry")," that helps us to have a fallback strategy in case of erros, if something goes wrong we can handle that by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"ZIO#retryOrElse")," function, which helps up to add an ",(0,l.kt)("inlineCode",{parentName:"p"},"orElse")," callback that will run in case of failure of repetition failure:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val action:       ZIO[R, E, A] = ???\nval policy: Schedule[R1, A, B] = ???\n\nval orElse: (E, S) => ZIO[R1, E1, A1] = ???\n\nval repeated = action retryOrElse (policy, orElse)\n")),(0,l.kt)("h2",{id:"base-schedules"},"Base Schedules"),(0,l.kt)("h3",{id:"stop"},"stop"),(0,l.kt)("p",null,"A schedule that does not recur, just stops and returns one ",(0,l.kt)("inlineCode",{parentName:"p"},"Unit")," element:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val stop = Schedule.stop\n")),(0,l.kt)("h3",{id:"once"},"once"),(0,l.kt)("p",null,"A schedule that recurs one time an returns one ",(0,l.kt)("inlineCode",{parentName:"p"},"Unit")," element:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val once = Schedule.once\n")),(0,l.kt)("h3",{id:"forever"},"forever"),(0,l.kt)("p",null,"A schedule that always recurs and produces number of recurrence at each run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val forever = Schedule.forever\n")),(0,l.kt)("h3",{id:"recurs"},"recurs"),(0,l.kt)("p",null,"A schedule that only recurs the specified number of times:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val recurs = Schedule.recurs(5)\n")),(0,l.kt)("h3",{id:"spaced"},"spaced"),(0,l.kt)("p",null,"A schedule that recurs continuously, each repetition spaced the specified duration from the last run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val spaced = Schedule.spaced(10.milliseconds)\n")),(0,l.kt)("h3",{id:"fixed"},"fixed"),(0,l.kt)("p",null,"A schedule that recurs on a fixed interval. Returns the number of repetitions of the schedule so far:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val fixed = Schedule.fixed(10.seconds)\n")),(0,l.kt)("h3",{id:"exponential"},"exponential"),(0,l.kt)("p",null,"A schedule that recurs using exponential backoff:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val exponential = Schedule.exponential(10.milliseconds)\n")),(0,l.kt)("h3",{id:"fibonacci"},"fibonacci"),(0,l.kt)("p",null,"A schedule that always recurs, increasing delays by summing the preceding two delays (similar to the fibonacci sequence). Returns the current duration between recurrences:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val fibonacci = Schedule.fibonacci(10.milliseconds)\n")),(0,l.kt)("h3",{id:"identity"},"identity"),(0,l.kt)("p",null,"A schedule that always decides to continue. It recurs forever, without any delay. ",(0,l.kt)("inlineCode",{parentName:"p"},"identity")," schedule consumes input, and emit the same as output (",(0,l.kt)("inlineCode",{parentName:"p"},"Schedule[Any, A, A]"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val identity = Schedule.identity[Int]\n")),(0,l.kt)("h3",{id:"unfold"},"unfold"),(0,l.kt)("p",null,"A schedule that repeats one time from the specified state and iterator:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val unfold = Schedule.unfold(0)(_ + 1)\n")),(0,l.kt)("h3",{id:"succeed"},"succeed"),(0,l.kt)("p",null,"Returns a schedule that repeats one time, producing the specified constant value:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val constant = Schedule.succeed(5)\n")),(0,l.kt)("h3",{id:"fromfunction"},"fromFunction"),(0,l.kt)("p",null,"A schedule that always recurs, mapping input values through the specified function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val inc = Schedule.fromFunction[Int, Int](_ + 1)\n")),(0,l.kt)("h2",{id:"schedule-combinators"},"Schedule Combinators"),(0,l.kt)("p",null,"Schedules define stateful, possibly effectful, recurring schedules of events, and compose in a variety of ways. Combinators allow us to take schedules and combine them together to get other schedules and if we have combinators with just the right properties. Then in theory we should be able to solve an infinite number of problems, with only a few combinators and few base schedules."),(0,l.kt)("h3",{id:"composition"},"Composition"),(0,l.kt)("p",null,"Schedules compose in the following primary ways:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Union"),". This performs the union of the intervals of two schedules."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Intersection"),". This performs the intersection of the intervals of two schedules."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Sequence"),". This concatenates the intervals of one schedule onto another.")),(0,l.kt)("h4",{id:"union"},"Union"),(0,l.kt)("p",null,"Combines two schedules through union, by recurring if either schedule wants to\nrecur, using the minimum of the two delays between recurrences."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"s1")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"s2")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"s1")," ","|"," ","|"," ",(0,l.kt)("inlineCode",{parentName:"th"},"s2")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Schedule[R, A, B]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Schedule[R, A, C]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Schedule[R, A, (B, C)]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Continute: ",(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b1")," ","|"," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"b2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Delay: ",(0,l.kt)("inlineCode",{parentName:"td"},"Duration")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d1.min(d2)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Emit: ",(0,l.kt)("inlineCode",{parentName:"td"},"(A, B)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(a, b)"))))),(0,l.kt)("p",null,"We can combine two schedule through union with ",(0,l.kt)("inlineCode",{parentName:"p"},"||")," operator:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val expCapped = Schedule.exponential(100.milliseconds) || Schedule.spaced(1.second)\n")),(0,l.kt)("h4",{id:"intersection"},"Intersection"),(0,l.kt)("p",null,"Combines two schedules through the intersection, by recurring only if both schedules want to recur, using the maximum of the two delays between recurrences."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"s1")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"s2")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"s1 && s2")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Schedule[R, A, B]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Schedule[R, A, C]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Schedule[R, A, (B, C)]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Continute: ",(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b1 && b2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Delay: ",(0,l.kt)("inlineCode",{parentName:"td"},"Duration")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d1.max(d2)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Emit: ",(0,l.kt)("inlineCode",{parentName:"td"},"(A, B)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(a, b)"))))),(0,l.kt)("p",null,"We can intersect two schedule with ",(0,l.kt)("inlineCode",{parentName:"p"},"&&")," operator:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val expUpTo10 = Schedule.exponential(1.second) && Schedule.recurs(10)\n")),(0,l.kt)("h4",{id:"sequence"},"Sequence"),(0,l.kt)("p",null,"Combines two schedules sequentially, by following the first policy until it ends, and then following the second policy."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"s1")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"s2")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"s1 andThen s2")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Schedule[R, A, B]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Schedule[R, A, C]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Schedule[R, A, C]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Delay: ",(0,l.kt)("inlineCode",{parentName:"td"},"Duration")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d1 + d2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Emit: ",(0,l.kt)("inlineCode",{parentName:"td"},"B")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b"))))),(0,l.kt)("p",null,"We can sequence two schedule by using ",(0,l.kt)("inlineCode",{parentName:"p"},"andThen"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val sequential = Schedule.recurs(10) andThen Schedule.spaced(1.second)\n")),(0,l.kt)("h3",{id:"piping"},"Piping"),(0,l.kt)("p",null,"Combine two schedules by piping the output of the first schedule to the input of the other. Effects described by the first schedule will always be executed before the effects described by the second schedule."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"s1")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"s2")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"s1 >>> s2")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Schedule[R, A, B]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Schedule[R, B, C]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Schedule[R, A, C]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Delay: ",(0,l.kt)("inlineCode",{parentName:"td"},"Duration")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d1 + d2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Emit: ",(0,l.kt)("inlineCode",{parentName:"td"},"B")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b"))))),(0,l.kt)("p",null,"We can pipe two schedule by using ",(0,l.kt)("inlineCode",{parentName:"p"},">>>")," operator:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val totalElapsed = Schedule.spaced(1.second) <* Schedule.recurs(5) >>> Schedule.elapsed\n")),(0,l.kt)("h3",{id:"jittering"},"Jittering"),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"jittered")," is a combinator that takes one schedule and returns another schedule of the same type except for the delay which is applied randomly:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Input Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"jittered")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Schedule[Env with Random, In, Out]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"jittered")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"min: Double, max: Double")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Schedule[Env with Random, In, Out]"))))),(0,l.kt)("p",null,"We can jitter any schedule by calling ",(0,l.kt)("inlineCode",{parentName:"p"},"jittered")," on it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val jitteredExp = Schedule.exponential(10.milliseconds).jittered\n")),(0,l.kt)("p",null,"When a resource is out of service due to overload or contention, retrying and backing off doesn't help us. If all failed API calls are backed off to the same point of time, they cause another overload or contention. Jitter adds some amount of randomness to the delay of the schedule. This helps us to avoid ending up accidentally synchronizing and taking the service down by accident."),(0,l.kt)("h3",{id:"collecting"},"Collecting"),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"collectAll")," is a combinator that when we call it on a schedule, produces a new schedule that collects the outputs of the first schedule into a chunk."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Input Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"collectAll")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Schedule[Env, In, Out]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Schedule[Env, In, Chunk[Out]]"))))),(0,l.kt)("p",null,"In the following example, we are catching all recurrence of schedule into ",(0,l.kt)("inlineCode",{parentName:"p"},"Chunk"),", so at the end, it would contain ",(0,l.kt)("inlineCode",{parentName:"p"},"Chunk(0, 1, 2, 3, 4)"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val collect = Schedule.recurs(5).collectAll\n")),(0,l.kt)("h3",{id:"filtering"},"Filtering"),(0,l.kt)("p",null,"We can filter inputs or outputs of a schedule with ",(0,l.kt)("inlineCode",{parentName:"p"},"whileInput")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"whileOutput"),". Alse ZIO schedule has an effectful version of these two functions, ",(0,l.kt)("inlineCode",{parentName:"p"},"whileInputM")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"whileOutputM"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Input Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"whileInput")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"In1 => Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Schedule[Env, In1, Out]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"whileOutput")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Out => Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Schedule[Env, In, Out]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"whileInputM")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"In1 => URIO[Env1, Boolean]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Schedule[Env1, In1, Out]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"whileOutputM")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Out => URIO[Env1, Boolean]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Schedule[Env1, In, Out]"))))),(0,l.kt)("p",null,"In following example we collect all emiting outputs before reaching the 5 output, so it would return ",(0,l.kt)("inlineCode",{parentName:"p"},"Chunk(0, 1, 2, 3, 4)"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val res = Schedule.unfold(0)(_ + 1).whileOutput(_ < 5).collectAll\n")),(0,l.kt)("h3",{id:"mapping"},"Mapping"),(0,l.kt)("p",null,"There are two versions for mapping schedules, ",(0,l.kt)("inlineCode",{parentName:"p"},"map")," and its effectful version ",(0,l.kt)("inlineCode",{parentName:"p"},"mapM"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Input Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"map")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f: Out => Out2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Schedule[Env, In, Out2]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mapM")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f: Out => URIO[Env1, Out2]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Schedule[Env1, In, Out2]"))))),(0,l.kt)("h3",{id:"leftright-ap"},"Left/Right Ap"),(0,l.kt)("p",null,"Sometimes when we intersect two schedules with the ",(0,l.kt)("inlineCode",{parentName:"p"},"&&")," operator, we just need to ignore the left or the right output. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*>")," ignore the left output "))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<*")," ignore the right output")))),(0,l.kt)("h3",{id:"modifying"},"Modifying"),(0,l.kt)("p",null,"Modifies the delay of a schedule:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val boosted = Schedule.spaced(1.second).delayed(_ => 100.milliseconds)\n")),(0,l.kt)("h3",{id:"tapping"},"Tapping"),(0,l.kt)("p",null,"Whenever we need to effectfully process each schedule input/output, we can use ",(0,l.kt)("inlineCode",{parentName:"p"},"tapInput")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"tapOutput"),"."),(0,l.kt)("p",null,"We can use these two functions for logging purposes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'val tappedSchedule = Schedule.count.whileOutput(_ < 5).tapOutput(o => putStrLn(s"retrying $o").orDie)\n')),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Stops retrying after a specified amount of time has elapsed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val expMaxElapsed = (Schedule.exponential(10.milliseconds) >>> Schedule.elapsed).whileOutput(_ < 30.seconds)\n")),(0,l.kt)("p",null,"Retry only when a specific exception occurs:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"import scala.concurrent.TimeoutException\n\nval whileTimeout = Schedule.exponential(10.milliseconds) && Schedule.recurWhile[Throwable] {\n  case _: TimeoutException => true\n  case _ => false\n}\n")))}s.isMDXComponent=!0}}]);