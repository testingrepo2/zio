"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[4814],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(t),d=i,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[m]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27801:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const a={id:"examples",title:"Examples"},s="Examples",o={unversionedId:"zio-aws/examples",id:"zio-aws/examples",title:"Examples",description:"The following example uses the ElasticBeanstalk and EC2 APIs to print some info.",source:"@site/docs/zio-aws/examples.md",sourceDirName:"zio-aws",slug:"/zio-aws/examples",permalink:"/zio-aws/examples",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-aws/examples.md",tags:[],version:"current",frontMatter:{id:"examples",title:"Examples"},sidebar:"ecosystem-sidebar",previous:{title:"Aspects",permalink:"/zio-aws/aspects"},next:{title:"Changelog",permalink:"/zio-aws/changelog"}},c={},l=[],p={toc:l};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"examples"},"Examples"),(0,i.kt)("p",null,"The following example uses the ElasticBeanstalk and EC2 APIs to print some info. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'object Main extends ZIOAppDefault {\n  val program: ZIO[Ec2 & ElasticBeanstalk, AwsError, Unit] =\n    for {\n      appsResult <- ElasticBeanstalk.describeApplications(\n        DescribeApplicationsRequest(applicationNames = Some(List(ApplicationName("my-service"))))\n      )\n      app <- appsResult.getApplications.map(_.headOption)\n      _ <- app match {\n        case Some(appDescription) =>\n          for {\n            applicationName <- appDescription.getApplicationName\n            _ <- Console\n              .printLine(\n                s"Got application description for $applicationName"\n              )\n              .ignore\n\n            envStream = ElasticBeanstalk.describeEnvironments(\n              DescribeEnvironmentsRequest(applicationName =\n                Some(applicationName)\n              )\n            )\n\n            _ <- envStream.run(ZSink.foreach { env =>\n              env.getEnvironmentName.flatMap { environmentName =>\n                (for {\n                  environmentId <- env.getEnvironmentId\n                  _ <- Console\n                    .printLine(\n                      s"Getting the EB resources of $environmentName"\n                    )\n                    .ignore\n\n                  resourcesResult <-\n                    ElasticBeanstalk.describeEnvironmentResources(\n                      DescribeEnvironmentResourcesRequest(environmentId =\n                        Some(environmentId)\n                      )\n                    )\n                  resources <- resourcesResult.getEnvironmentResources\n                  _ <- Console\n                    .printLine(\n                      s"Getting the EC2 instances in $environmentName"\n                    )\n                    .ignore\n                  instances <- resources.getInstances\n                  instanceIds <- ZIO.foreach(instances)(_.getId)\n                  _ <- Console\n                    .printLine(\n                      s"Instance IDs are ${instanceIds.mkString(", ")}"\n                    )\n                    .ignore\n\n                  reservationsStream = Ec2.describeInstances(\n                    DescribeInstancesRequest(instanceIds = Some(instanceIds.map(id => zio.aws.ec2.model.primitives.InstanceId(ResourceId.unwrap(id)))))\n                  )\n                  _ <- reservationsStream.run(ZSink.foreach { reservation =>\n                    reservation.getInstances\n                      .flatMap { instances =>\n                        ZIO.foreach(instances) { instance =>\n                          for {\n                            id <- instance.getInstanceId\n                            typ <- instance.getInstanceType\n                            launchTime <- instance.getLaunchTime\n                            _ <- Console.printLine(s"  instance $id:").ignore\n                            _ <- Console.printLine(s"    type: $typ").ignore\n                            _ <- Console\n                              .printLine(\n                                s"    launched at: $launchTime"\n                              )\n                              .ignore\n                          } yield ()\n                        }\n                      }\n                  })\n                } yield ()).catchAll { error =>\n                  Console\n                    .printLineError(\n                      s"Failed to get info for $environmentName: $error"\n                    )\n                    .ignore\n                }\n              }\n            })\n          } yield ()\n        case None =>\n          ZIO.unit\n      }\n    } yield ()\n\n  override def run: URIO[ZIOAppArgs with zio.Scope, ExitCode] = {\n    val httpClient = NettyHttpClient.default\n    val awsConfig = httpClient >>> AwsConfig.default\n    val aws = awsConfig >>> (Ec2.live ++ ElasticBeanstalk.live)\n\n    program\n      .provideLayer(aws)\n      .either\n      .flatMap {\n        case Left(error) =>\n          Console.printLineError(s"AWS error: $error").ignore.as(ExitCode.failure)\n        case Right(_) =>\n          ZIO.unit.as(ExitCode.success)\n      }\n  }\n}\n')))}m.isMDXComponent=!0}}]);