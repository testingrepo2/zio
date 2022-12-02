"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[67347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={id:"contravariant",title:"Contravariant"},o=void 0,p={unversionedId:"zio-prelude/functionalabstractions/parameterizedtypes/contravariant",id:"zio-prelude/functionalabstractions/parameterizedtypes/contravariant",title:"Contravariant",description:"Contravariant describes a parameterized type F[A] that potentially consumes but never produces A values.",source:"@site/docs/zio-prelude/functionalabstractions/parameterizedtypes/contravariant.md",sourceDirName:"zio-prelude/functionalabstractions/parameterizedtypes",slug:"/zio-prelude/functionalabstractions/parameterizedtypes/contravariant",permalink:"/zio-prelude/functionalabstractions/parameterizedtypes/contravariant",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-prelude/functionalabstractions/parameterizedtypes/contravariant.md",tags:[],version:"current",frontMatter:{id:"contravariant",title:"Contravariant"},sidebar:"ecosystem-sidebar",previous:{title:"CommutativeEither",permalink:"/zio-prelude/functionalabstractions/parameterizedtypes/commutativeeither"},next:{title:"Covariant",permalink:"/zio-prelude/functionalabstractions/parameterizedtypes/covariant"}},s={},l=[],c={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Contravariant")," describes a parameterized type ",(0,r.kt)("inlineCode",{parentName:"p"},"F[A]")," that potentially consumes but never produces ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," values."),(0,r.kt)("p",null,"Its signature is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait Invariant[F[_]] {\n  def invmap[A, B](f: A <=> B): F[A] <=> F[B]\n}\n\ntrait Contravariant[F[-_]] extends Invariant[F] {\n  def contramap[A, B](f: B => A): F[A] => F[B]\n  final def invmap[A, B](f: A <=> B): F[A] <=> F[B] =\n    Equivalence(contramap(f.from), contramap(f.to))\n}\n\ntype <=>[A, B] = Equivalence[A, B]\n\ncase class Equivalence[A, B](to: A => B, from: B => A)\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"contramap")," operator says we can lift a function ",(0,r.kt)("inlineCode",{parentName:"p"},"B => A")," to a function ",(0,r.kt)("inlineCode",{parentName:"p"},"F[A]")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"F[B]"),". If we import ",(0,r.kt)("inlineCode",{parentName:"p"},"zio.prelude._")," we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"contramap")," to transform a ",(0,r.kt)("inlineCode",{parentName:"p"},"F[A]")," to a ",(0,r.kt)("inlineCode",{parentName:"p"},"F[B]")," with a function ",(0,r.kt)("inlineCode",{parentName:"p"},"B => A"),"."),(0,r.kt)("p",null,"Notice that the arrows go in the opposite direction here. To transform a ",(0,r.kt)("inlineCode",{parentName:"p"},"F[A]")," into a ",(0,r.kt)("inlineCode",{parentName:"p"},"F[B]")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"contramap")," operator we provide a function ",(0,r.kt)("inlineCode",{parentName:"p"},"B => A")," rather than a function ",(0,r.kt)("inlineCode",{parentName:"p"},"A => B")," like with the ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," operator. "),(0,r.kt)("p",null,"This can be a little counterintuitive because we are used to primarily working with data types that produce values and transforming their outputs. We will build a better sense for the ",(0,r.kt)("inlineCode",{parentName:"p"},"contramap")," operator later in this section."),(0,r.kt)("p",null,"The other thing to notice here is the ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," that appears in brackets in the definition of ",(0,r.kt)("inlineCode",{parentName:"p"},"Contravariant"),". This tells the Scala compiler that ",(0,r.kt)("inlineCode",{parentName:"p"},"F")," is contravariant with respect to the ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," type parameter."),(0,r.kt)("p",null,"Doing this improves type inference because the Scala compiler knows that if ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," is a subtype of ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," then an ",(0,r.kt)("inlineCode",{parentName:"p"},"F[B]")," is a subtype of an ",(0,r.kt)("inlineCode",{parentName:"p"},"F[A]"),", since an ",(0,r.kt)("inlineCode",{parentName:"p"},"F[B]")," can accept ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," inputs and every ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),". It also allows the compiler to check that ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," really does only appear as an input to ",(0,r.kt)("inlineCode",{parentName:"p"},"F"),"."),(0,r.kt)("p",null,"Other functional programming libraries don't take advantage of contravariance here and so have to define a ",(0,r.kt)("inlineCode",{parentName:"p"},"narrow")," operator, which essentially forces users to do this type casting manually."),(0,r.kt)("p",null,"The law is that the lifting of the function ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"contramap")," can transform ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," values into ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," values but cannot otherwise change the structure of ",(0,r.kt)("inlineCode",{parentName:"p"},"F"),", so using ",(0,r.kt)("inlineCode",{parentName:"p"},"contramap")," with the identity function is an identity and separately using ",(0,r.kt)("inlineCode",{parentName:"p"},"contrmap")," with two functions is the same as doing it with the composition of those functions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"fa.contramap(identity) === fa\nfa.contramap(f).contramap(g) === fa.contramap(f.compose(g)))\n")),(0,r.kt)("p",null,"Examples of data types that are contravariant include functions with respect to their inputs, ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," with respect to its environment type, and ",(0,r.kt)("inlineCode",{parentName:"p"},"ZSink")," with respect to its input type."),(0,r.kt)("p",null,"To get a better sense of what it means for a data type to be contravariant let's look at a ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONCodec"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait JsonCodec[A] {\n  def decode(json: String): Either[String, A]\n  def encode(a: A): String\n}\n")),(0,r.kt)("p",null,"This data type doesn't have either a ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," before the ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," type parameter, indicating that it is invariant with respect to the ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," type parameter. If we try to make ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonCodec")," contravariant by adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," before the ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," type parameter we get a compilation error telling us that ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," appears in covariant position in the ",(0,r.kt)("inlineCode",{parentName:"p"},"decode")," operator."),(0,r.kt)("p",null,"This is accurate because ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," does indeed appear as an output of the ",(0,r.kt)("inlineCode",{parentName:"p"},"decode")," operator whereas it is only supposed to appear as an input to a contravariant type. To fix this we need to break the ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonCodec")," up into separate ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonDecoder")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonEncoder")," types that are covariant and contravariant respectively."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait JsonDecoder[+A] {\n  def decode(json: String): Either[String, A]\n}\n\ntrait JsonEncoder[-A] {\n  def encode(a: A): String\n}\n\ntrait JsonCodec[A] extends JsonDecoder[A] with JsonEncoder[A]\n")),(0,r.kt)("p",null,"Now we can define a ",(0,r.kt)("inlineCode",{parentName:"p"},"Contravariant")," instance for the ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonEncoder"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait JsonEncoder[-A] { self =>\n  def encode(a: A): String\n  def contramap[B](f: B => A): JsonEncoder[B] =\n    new JsonEncoder[B] {\n      def encode(b: B): String =\n        self.encode(f(b))\n    }\n}\n\nobject JsonEncoder {\n  implicit val JsonEncoderContravariant: Contravariant[JsonEncoder] =\n    new Contravariant[JsonEncoder] {\n      def contramap[A, B](f: B => A): JsonEncoder[A] => JsonEncoder[B] =\n        jsonEncoder => jsonEncoder.contramap(f)\n    }\n}\n")),(0,r.kt)("p",null,"Let's think about what this means."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonEncoder")," is something that knows how to encode values of type ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),". It says we can give it any value of type ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," and it will encode it."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"contramap")," operator says if we have a function ",(0,r.kt)("inlineCode",{parentName:"p"},"B => A")," we can transform a ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonEncode[A]")," into a ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonEncoder[B]"),". We can do that by taking any ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," values and transforming them into ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," values with the function ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," before sending them to the original encoder."),(0,r.kt)("p",null,"The pattern works the same way for any contravariant type. The ",(0,r.kt)("inlineCode",{parentName:"p"},"contramap")," operator lets us adapt the inputs to the data type with a function, for example transforming a sink that writes bytes to a file to a sink that writes strings to a file by providing a function to transform strings to bytes."),(0,r.kt)("p",null,"While we may be less familiar with it, the ",(0,r.kt)("inlineCode",{parentName:"p"},"contramap"),' operator is quite useful for working with contravariant types and lets us "work backwards" from the input type we need to the input type we have. So it can be useful to implement a ',(0,r.kt)("inlineCode",{parentName:"p"},"Contravariant")," instance for our own data types just for that."),(0,r.kt)("p",null,"In addition, some operators in ZIO Prelude are only defined on data types that have a ",(0,r.kt)("inlineCode",{parentName:"p"},"Contravariant")," instance along with instances of one or more other functional abstractions. So it is useful to define instances of all functional abstractions that are applicable for your own data types so that you can use these operators when you need them."),(0,r.kt)("p",null,"Finally, if you are writing your own generic code in terms of the abstractions in ZIO Prelude a ",(0,r.kt)("inlineCode",{parentName:"p"},"Contravariant")," instance can be important to define certain classes of operators."))}d.isMDXComponent=!0}}]);