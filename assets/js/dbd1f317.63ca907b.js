"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[26203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const o={id:"zio-redis",title:"ZIO Redis"},a=void 0,l={unversionedId:"ecosystem/officials/zio-redis",id:"ecosystem/officials/zio-redis",title:"ZIO Redis",description:"ZIO Redis is a ZIO native Redis client.",source:"@site/docs/ecosystem/officials/zio-redis.md",sourceDirName:"ecosystem/officials",slug:"/ecosystem/officials/zio-redis",permalink:"/ecosystem/officials/zio-redis",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/ecosystem/officials/zio-redis.md",tags:[],version:"current",frontMatter:{id:"zio-redis",title:"ZIO Redis"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2},{value:"Resources",id:"resources",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-redis"},"ZIO Redis")," is a ZIO native Redis client."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"ZIO Redis is in the experimental phase of development, but its goals are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type Safety")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Performance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Minimum Dependency")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ZIO Native"))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Since the ZIO Redis is in the experimental phase, it is not released yet."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"To execute our ZIO Redis effect, we should provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"RedisExecutor")," layer to that effect. To create this layer we should also provide the following layers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Logging")," \u2014 For simplicity, we ignored the logging functionality."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RedisConfig")," \u2014 Using default one, will connect to the ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:6379")," Redis instance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Codec")," \u2014 In this example, we are going to use the built-in ",(0,r.kt)("inlineCode",{parentName:"li"},"StringUtf8Codec")," codec.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.console.{Console, putStrLn}\nimport zio.duration._\nimport zio.logging.Logging\nimport zio.redis._\nimport zio.redis.codec.StringUtf8Codec\nimport zio.schema.codec.Codec\nimport zio.{ExitCode, URIO, ZIO, ZLayer}\n\nobject ZIORedisExample extends zio.App {\n\n  val myApp: ZIO[Console with RedisExecutor, RedisError, Unit] = for {\n    _ <- set("myKey", 8L, Some(1.minutes))\n    v <- get[String, Long]("myKey")\n    _ <- putStrLn(s"Value of myKey: $v").orDie\n    _ <- hSet("myHash", ("k1", 6), ("k2", 2))\n    _ <- rPush("myList", 1, 2, 3, 4)\n    _ <- sAdd("mySet", "a", "b", "a", "c")\n  } yield ()\n\n  val layer: ZLayer[Any, RedisError.IOError, RedisExecutor] =\n    Logging.ignore ++ ZLayer.succeed(RedisConfig.Default) ++ ZLayer.succeed(StringUtf8Codec) >>> RedisExecutor.live\n\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    myApp.provideCustom(layer).exitCode\n}\n')),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=yqFt3b3RBkI"},"ZIO Redis")," by Dejan Mijic \u2014 Redis is one of the most commonly used in-memory data structure stores. In this talk, Dejan will introduce ZIO Redis, a purely functional, strongly typed client library backed by ZIO, with excellent performance and extensive support for nearly all of Redis' features. He will explain the library design using the bottom-up approach - from communication protocol to public APIs. Finally, he will wrap the talk by demonstrating the client's usage and discussing its performance characteristics.")))}u.isMDXComponent=!0}}]);