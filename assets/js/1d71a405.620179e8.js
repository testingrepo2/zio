"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[71617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(n),k=o,u=h["".concat(c,".").concat(k)]||h[k]||d[k]||r;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[h]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},49993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={title:"Socket",sidebar_label:"Socket"},i=void 0,l={unversionedId:"zio-http/v1.x/dsl/socket/socket",id:"zio-http/v1.x/dsl/socket/socket",title:"Socket",description:"Websocket support can be added to your Http application using the same Http domain, something like this \u2014",source:"@site/docs/zio-http/v1.x/dsl/socket/socket.md",sourceDirName:"zio-http/v1.x/dsl/socket",slug:"/zio-http/v1.x/dsl/socket/",permalink:"/zio-http/v1.x/dsl/socket/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/v1.x/dsl/socket/socket.md",tags:[],version:"current",frontMatter:{title:"Socket",sidebar_label:"Socket"}},c={},s=[{value:"Channel",id:"channel",level:2},{value:"ChannelEvents",id:"channelevents",level:2},{value:"Using <code>Http</code>",id:"using-http",level:2},{value:"SocketApp",id:"socketapp",level:2}],p={toc:s};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Websocket support can be added to your Http application using the same ",(0,o.kt)("inlineCode",{parentName:"p"},"Http")," domain, something like this \u2014"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\nimport zio.socket._\n\nval socket = Http.collectZIO[WebSocketChannelEvent] {\n  case ChannelEvent(ch, ChannelRead(WebSocketFrame.Text("foo"))) =>\n    ch.writeAndFlush(WebSocketFrame.text("bar"))\n}\n\nval http = Http.collectZIO[Request] {\n  case Method.GET -> !! / "subscriptions" => socket.toSocketApp.toResponse\n}\n')),(0,o.kt)("p",null,"The WebSocket API leverages the already powerful ",(0,o.kt)("inlineCode",{parentName:"p"},"Http")," domain to write web socket apps. The difference is that instead\nof collecting ",(0,o.kt)("inlineCode",{parentName:"p"},"Request")," we collect ",(0,o.kt)("inlineCode",{parentName:"p"},"ChannelEvent")," or more specifically ",(0,o.kt)("inlineCode",{parentName:"p"},"WebSocketChannelEvent"),". And, instead of\nreturning\na ",(0,o.kt)("inlineCode",{parentName:"p"},"Response")," we return ",(0,o.kt)("inlineCode",{parentName:"p"},"Unit"),", because we use the channel (which is available in the event) to write content directly."),(0,o.kt)("h2",{id:"channel"},"Channel"),(0,o.kt)("p",null,"Essentially whenever there is a connection created between a server and client a channel is created on both sides. The\nchannel is a low level api that allows us to send and receive arbitrary messages."),(0,o.kt)("p",null,"When we upgrade a Http connection to WebSocket, we create a specialized channel that only allows websocket frames to be\nsent and received. The access to channel is available thru the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChannelEvent")," api."),(0,o.kt)("h2",{id:"channelevents"},"ChannelEvents"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"ChannelEvent")," is an immutable, type-safe representation of an event that's happened on a channel and it looks like\nthis \u2014"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"case class ChannelEvent[A, B](channel: Channel[A], event: Event[B])\n")),(0,o.kt)("p",null,"It contains two elements \u2014 The ",(0,o.kt)("strong",{parentName:"p"},"Channel")," on which the event was triggered and the actual ",(0,o.kt)("strong",{parentName:"p"},"Event")," that was triggered.\nThe\ntype param ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," on the Channel represents the kind of message one can ",(0,o.kt)("strong",{parentName:"p"},"write")," using the channel and the type param ",(0,o.kt)("inlineCode",{parentName:"p"},"B"),"\nrepresents the kind of messages that can be received on the channel."),(0,o.kt)("p",null,"The type ",(0,o.kt)("inlineCode",{parentName:"p"},"WebSocketChannelEvent")," is a type alias to ",(0,o.kt)("inlineCode",{parentName:"p"},"ChannelEvent[WebsocketFrame, WebSocketFrame]"),". Meaning a channel\nthat only accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"WebSocketFrame")," and produces ",(0,o.kt)("inlineCode",{parentName:"p"},"WebSocketFrame")," type of messages."),(0,o.kt)("h2",{id:"using-http"},"Using ",(0,o.kt)("inlineCode",{parentName:"h2"},"Http")),(0,o.kt)("p",null,"We can use ",(0,o.kt)("inlineCode",{parentName:"p"},"Http.collect")," to select the events that we care about for our use case, like in the above example we are\nonly interested in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChannelRead")," event. There are other life cycle events such as ",(0,o.kt)("inlineCode",{parentName:"p"},"ChannelRegistered"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"ChannelUnregistered")," that one might want to hook onto for some other use cases."),(0,o.kt)("p",null,"The main benefit of using ",(0,o.kt)("inlineCode",{parentName:"p"},"Http")," is that one can write custom middlewares that can process incoming and outgoing\nmessages easily, for eg:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val userAction = Http.collect[ChannelEvent[Action, Command]] {\n  case CreateAccount(name, password) => ???\n  case DeleteAccount(id) => ???\n}\n\nval codec: Middleware[Any, Nothing, ChannelEvent[Action, Command], Unit, WebSocketChannelEvent, Unit]\n\nval socket = userAction @@ codec\n")),(0,o.kt)("h2",{id:"socketapp"},"SocketApp"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Http")," that accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"WebSocketChannelEvent")," isn't enough to create a websocket connection. There some other settings\nthat one might need to configure in a websocket connection, things such as ",(0,o.kt)("inlineCode",{parentName:"p"},"handshakeTimeout")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"subProtocol")," etc. For\nthose purposes a Http of the type ",(0,o.kt)("inlineCode",{parentName:"p"},"Http[R, E, WebSocketChannelEvent, Unit]")," needs to converted into a ",(0,o.kt)("inlineCode",{parentName:"p"},"SocketApp")," using\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"toSocketApp")," method first, before it can be sent as a response. Consider the following example where we set a few\nadditional properties for the websocket connection."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'socket\n  .toSocketApp\n  .withDecoder(SocketDecoder.skipUTF8Validation)\n  .withEncoder(SocketProtocol.subProtocol("json") ++ SocketProtocol.handshakeTimeout(5 seconds))\n  .toResponse\n')))}h.isMDXComponent=!0}}]);