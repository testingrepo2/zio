"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[59165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,k=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return n?i.createElement(k,r(r({ref:t},p),{},{components:n})):i.createElement(k,r({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},72332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={id:"deploy-a-zio-application-using-docker",title:"Tutorial: How to Deploy a ZIO Application Using Docker?",sidebar_label:"Deploying a ZIO Application Using Docker"},r=void 0,l={unversionedId:"guides/tutorials/deploy-a-zio-application-using-docker",id:"guides/tutorials/deploy-a-zio-application-using-docker",title:"Tutorial: How to Deploy a ZIO Application Using Docker?",description:"Introduction",source:"@site/docs/guides/tutorials/deploy-a-zio-application-using-docker.md",sourceDirName:"guides/tutorials",slug:"/guides/tutorials/deploy-a-zio-application-using-docker",permalink:"/guides/tutorials/deploy-a-zio-application-using-docker",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/guides/tutorials/deploy-a-zio-application-using-docker.md",tags:[],version:"current",frontMatter:{id:"deploy-a-zio-application-using-docker",title:"Tutorial: How to Deploy a ZIO Application Using Docker?",sidebar_label:"Deploying a ZIO Application Using Docker"},sidebar:"guides-sidebar",previous:{title:"Running Our First ZIO Project With IntelliJ IDEA",permalink:"/guides/tutorials/run-our-first-zio-project-with-intellij-idea"},next:{title:"Producing/Consuming Data To/From Kafka Topics",permalink:"/guides/tutorials/producing-consuming-data-from-kafka-topics"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Running The Examples",id:"running-the-examples",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Adding SBT Native Packager Plugin",id:"adding-sbt-native-packager-plugin",level:2},{value:"Building The Docker Image",id:"building-the-docker-image",level:2},{value:"Deploying The Docker Image",id:"deploying-the-docker-image",level:2},{value:"Configuring The Docker Image",id:"configuring-the-docker-image",level:2},{value:"Exposing Container Ports",id:"exposing-container-ports",level:3},{value:"Publishing The Docker Image to a Remote Registry",id:"publishing-the-docker-image-to-a-remote-registry",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Docker is a tool that allows us to package, ship, and run our applications in an isolated environment called a container. Using Docker, we can simplify the deployment process by isolating our applications in their own container and abstracting them from the host environment."),(0,a.kt)("p",null,"In this tutorial, we are going to learn how to build a Docker image for our ZIO application and then how to deploy it. Instead of writing the ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," from scratch, we will use the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://github.com/sbt/sbt-native-packager"},"sbt-native-packager"))," to build our Docker image."),(0,a.kt)("h2",{id:"running-the-examples"},"Running The Examples"),(0,a.kt)("p",null,"All the source code associated with this article is located on the ",(0,a.kt)("inlineCode",{parentName:"p"},"dockerize")," branch of this quickstart ",(0,a.kt)("a",{parentName:"p",href:"http://github.com/zio/zio-quickstart-restful-webservice"},"repository"),"."),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"/guides/quickstarts/restful-webservice"},"this quickstart"),", we developed a web service containing 4 different HTTP Applications. Now in this article, we want to dockerize this web application."),(0,a.kt)("p",null,"To access the code examples, you can clone the repository and switch to the ",(0,a.kt)("inlineCode",{parentName:"p"},"dockerize")," branch:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone git@github.com:zio/zio-quickstart-restful-webservice.git \n$ cd zio-quickstart-restful-webservice\n$ git checkout dockerize\n")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before we can dockerize our web service, we need to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"download and install Docker"),". So we assume that the reader has already installed Docker."),(0,a.kt)("h2",{id:"adding-sbt-native-packager-plugin"},"Adding SBT Native Packager Plugin"),(0,a.kt)("p",null,"The sbt-native-packager is an sbt plugin that enables us an easy way to package the application as a docker image and deploy that as a docker container."),(0,a.kt)("p",null,"First, we need to add the plugin to our ",(0,a.kt)("inlineCode",{parentName:"p"},"project/plugins.sbt")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'addSbtPlugin("com.github.sbt" % "sbt-native-packager" % "1.9.9")\n')),(0,a.kt)("p",null,"Now it's time to enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"JavaAppPackaging")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"DockerPlugin")," plugins. So we need to add the following lines in the ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"enablePlugins(JavaAppPackaging)\nenablePlugins(DockerPlugin)\n")),(0,a.kt)("h2",{id:"building-the-docker-image"},"Building The Docker Image"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"DockerPlugin")," plugin of ",(0,a.kt)("em",{parentName:"p"},"sbt-native-packager")," is responsible for configuring and building the docker image. We can run the following command to build the docker image:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sbt docker:publishLocal\n")),(0,a.kt)("p",null,"After the docker image is built, we can run the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker images")," command to see the list of images that are currently available in the local docker registry:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker images\nREPOSITORY                          TAG     IMAGE ID       CREATED        SIZE\nzio-quickstart-restful-webservice   0.1.0   c9ae81ee8fa6   17 hours ago   558MB\n")),(0,a.kt)("p",null,"Note that, to see the generated ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker:stage")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sbt docker:stage\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," will be generated in the ",(0,a.kt)("inlineCode",{parentName:"p"},"target/docker/stage")," directory."),(0,a.kt)("h2",{id:"deploying-the-docker-image"},"Deploying The Docker Image"),(0,a.kt)("p",null,"Now we can create a new container from this image by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run -p 80:800 zio-quickstart-restful-webservice:0.1.0\n")),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"-p")," flag, we can specify the port that the container will listen to. As the web service is running on port ",(0,a.kt)("inlineCode",{parentName:"p"},"8080"),", we bind this port to the host port ",(0,a.kt)("inlineCode",{parentName:"p"},"80"),". Therefore, we can access the web service from the host machine through the port ",(0,a.kt)("inlineCode",{parentName:"p"},"80"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i "http://localhost/greet?name=Jane&name=John"\nHTTP/1.1 200 OK\ncontent-type: text/plain\ncontent-length: 20\n\nHello Jane and John!\n')),(0,a.kt)("h2",{id:"configuring-the-docker-image"},"Configuring The Docker Image"),(0,a.kt)("p",null,"By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"sbt-native-packager")," plugin will build the docker image using some predefined settings. So without any configuration we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"sbt docker:publish")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"sbt docker:publishLocal")," commands to build and publish the docker image to the remote or local docker registry."),(0,a.kt)("p",null,"However, it is possible to configure the docker image, and it has lots of options to configure. We can find the list of available options in the ",(0,a.kt)("a",{parentName:"p",href:"https://www.scala-sbt.org/sbt-native-packager/formats/docker.html#configuration"},"sbt-native-packager documentation"),"."),(0,a.kt)("h3",{id:"exposing-container-ports"},"Exposing Container Ports"),(0,a.kt)("p",null,"For example, when we build a docker image, we can specify which ports the container will listen to, by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"EXPOSE")," instruction in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),". In the similar way, we can expose the ports using ",(0,a.kt)("em",{parentName:"p"},"sbt-native-packager"),", by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"dockerExposedPorts")," setting in the ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"dockerExposedPorts := Seq(8080)\n")),(0,a.kt)("p",null,"Now, when we build the docker image and create a container from it, the new container has the port ",(0,a.kt)("inlineCode",{parentName:"p"},"8080")," exposed. So when we run the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker ps")," command, we can see that the new container has the port ",(0,a.kt)("inlineCode",{parentName:"p"},"8080")," exposed under the ",(0,a.kt)("inlineCode",{parentName:"p"},"PORTS")," column:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ docker ps\nCONTAINER ID   IMAGE                                     COMMAND                  CREATED         STATUS         PORTS      NAMES\n29982b053379   zio-quickstart-restful-webservice:0.1.0   "/opt/docker/bin/zio\u2026"   3 seconds ago   Up 2 seconds   8080/tcp   bold_liskov\n')),(0,a.kt)("h3",{id:"publishing-the-docker-image-to-a-remote-registry"},"Publishing The Docker Image to a Remote Registry"),(0,a.kt)("p",null,"In a CI/CD pipeline, we might want to publish the docker image to a remote registry other than the local registry. We can do this by configuring the ",(0,a.kt)("inlineCode",{parentName:"p"},"dockerUsername")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"dockerRepository")," settings in the ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'dockerUsername := sys.props.get("docker.username")\ndockerRepository := sys.props.get("docker.registry")\n')),(0,a.kt)("p",null,"Now, we can use the following command to publish the docker image to the remote registry:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ export DOCKER_USERNAME=<username>  // e.g: johndoe\n$ export DOCKER_REGISTRY=<registry>  // e.g: docker.io\n$ sbt -Ddocker.username=$NAMESPACE -Ddocker.registry=$DOCKER_REGISTRY docker:publish\n")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this tutorial, we learned how to build a docker image using ",(0,a.kt)("em",{parentName:"p"},"sbt-native-packager"),", and how to deploy the docker image to the local or remote Docker registry."),(0,a.kt)("p",null,"The complete working example of this tutorial is available on the ",(0,a.kt)("inlineCode",{parentName:"p"},"dockerize")," branch of our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-quickstart-restful-webservice/tree/dockerize"},"ZIO Quickstart: Building RESTful Web Service")," quickstart on GitHub."))}d.isMDXComponent=!0}}]);