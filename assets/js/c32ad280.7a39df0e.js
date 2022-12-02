"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[86449],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},95696:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={id:"exposing-errors-in-the-success-channel",title:"Exposing Errors in The Success Channel"},o=void 0,l={unversionedId:"reference/error-management/operations/exposing-errors-in-the-success-channel",id:"reference/error-management/operations/exposing-errors-in-the-success-channel",title:"Exposing Errors in The Success Channel",description:"Before taking into ZIO#either and ZIO#absolve, let's see their signature:",source:"@site/docs/reference/error-management/operations/exposing-errors-in-the-success-channel.md",sourceDirName:"reference/error-management/operations",slug:"/reference/error-management/operations/exposing-errors-in-the-success-channel",permalink:"/reference/error-management/operations/exposing-errors-in-the-success-channel",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/error-management/operations/exposing-errors-in-the-success-channel.md",tags:[],version:"current",frontMatter:{id:"exposing-errors-in-the-success-channel",title:"Exposing Errors in The Success Channel"},sidebar:"reference-sidebar",previous:{title:"Tapping Errors",permalink:"/reference/error-management/operations/tapping-errors"},next:{title:"Exposing the Cause in The Success Channel",permalink:"/reference/error-management/operations/exposing-the-cause-in-the-success-channel"}},s={},c=[{value:"<code>ZIO#either</code>",id:"zioeither",level:2},{value:"<code>ZIO#absolve</code>/<code>ZIO.absolve</code>",id:"zioabsolvezioabsolve",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Before taking into ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#either")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#absolve"),", let's see their signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def either(implicit ev: CanFail[E]): URIO[R, Either[E, A]]\n  def absolve[E1 >: E, B](implicit ev: A IsSubtypeOfOutput Either[E1, B]): ZIO[R, E1, B]\n}\n")),(0,a.kt)("p",null,"Before continuing, let's take a look again at the ",(0,a.kt)("inlineCode",{parentName:"p"},"validate")," function we have written earlier:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nsealed trait AgeValidationException extends Exception\ncase class NegativeAgeException(age: Int) extends AgeValidationException\ncase class IllegalAgeException(age: Int)  extends AgeValidationException\n\ndef validate(age: Int): ZIO[Any, AgeValidationException, Int] =\n  if (age < 0)\n    ZIO.fail(NegativeAgeException(age))\n  else if (age < 18)\n    ZIO.fail(IllegalAgeException(age))\n  else ZIO.succeed(age)\n")),(0,a.kt)("p",null,"Now we are ready to use ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#either")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#absolve")," operations:"),(0,a.kt)("h2",{id:"zioeither"},(0,a.kt)("inlineCode",{parentName:"h2"},"ZIO#either")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#either")," convert a ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO[R, E, A]")," effect to another effect in which its failure (",(0,a.kt)("inlineCode",{parentName:"p"},"E"),") and success (",(0,a.kt)("inlineCode",{parentName:"p"},"A"),") channel have been lifted into an ",(0,a.kt)("inlineCode",{parentName:"p"},"Either[E, A]")," data type as success channel of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," data type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nval age: Int = ???\n\nval res: URIO[Any, Either[AgeValidationException, Int]] = validate(age).either\n")),(0,a.kt)("p",null,"The resulting effect is an unexceptional effect and cannot fail, because the failure case has been exposed as part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Either")," success case. The error parameter of the returned ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"Nothing"),", since it is guaranteed the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," effect does not model failure."),(0,a.kt)("p",null,"This method is useful for recovering from ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," effects that may fail:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport java.io.IOException\n\nval myApp: ZIO[Any, IOException, Unit] =\n  for {\n    _ <- Console.print("Please enter your age: ")\n    age <- Console.readLine.map(_.toInt)\n    res <- validate(age).either\n    _ <- res match {\n      case Left(error) => ZIO.debug(s"validation failed: $error")\n      case Right(age) => ZIO.debug(s"The $age validated!")\n    }\n  } yield ()\n')),(0,a.kt)("h2",{id:"zioabsolvezioabsolve"},(0,a.kt)("inlineCode",{parentName:"h2"},"ZIO#absolve"),"/",(0,a.kt)("inlineCode",{parentName:"h2"},"ZIO.absolve")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#abolve")," operator and the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO.absolve")," constructor perform the inverse. They submerge the error case of an ",(0,a.kt)("inlineCode",{parentName:"p"},"Either")," into the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nval age: Int = ???\nvalidate(age) // ZIO[Any, AgeValidationException, Int]\n  .either     // ZIO[Any, Either[AgeValidationException, Int]]\n  .absolve    // ZIO[Any, AgeValidationException, Int]\n")),(0,a.kt)("p",null,"Here is another example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\ndef sqrt(input: ZIO[Any, Nothing, Double]): ZIO[Any, String, Double] =\n  ZIO.absolve(\n    input.map { value =>\n      if (value < 0.0)\n        Left("Value must be >= 0.0")\n      else\n        Right(Math.sqrt(value))\n    }\n  )\n')))}u.isMDXComponent=!0}}]);