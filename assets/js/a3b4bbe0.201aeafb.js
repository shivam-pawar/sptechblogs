"use strict";(self.webpackChunksptechblogs=self.webpackChunksptechblogs||[]).push([[2059],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},b=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),b=l,m=u["".concat(p,".").concat(b)]||u[b]||d[b]||r;return t?n.createElement(m,i(i({ref:a},c),{},{components:t})):n.createElement(m,i({ref:a},c))}));function m(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=b;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},8875:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=t(7462),l=(t(7294),t(3905));const r={slug:"setup-react-app-babel-webpack",title:"Setup Webpack And Babel for a React JS Application",authors:"shivam-pawar",tags:["JavaScript","webpack","reactjs","babel","programming"]},i=void 0,o={permalink:"/sptechblogs/blog/setup-react-app-babel-webpack",editUrl:"https://github.com/shivam-pawar/sptechblogs/tree/master/blog/2022-10-09-setup-babel-webpack-react.md",source:"@site/blog/2022-10-09-setup-babel-webpack-react.md",title:"Setup Webpack And Babel for a React JS Application",description:"Introduction",date:"2022-10-09T00:00:00.000Z",formattedDate:"October 9, 2022",tags:[{label:"JavaScript",permalink:"/sptechblogs/blog/tags/java-script"},{label:"webpack",permalink:"/sptechblogs/blog/tags/webpack"},{label:"reactjs",permalink:"/sptechblogs/blog/tags/reactjs"},{label:"babel",permalink:"/sptechblogs/blog/tags/babel"},{label:"programming",permalink:"/sptechblogs/blog/tags/programming"}],readingTime:6.07,hasTruncateMarker:!0,authors:[{name:"Shivam Pawar",title:"Software Developer @Emtec Inc.",url:"https://github.com/shivam-pawar/",imageURL:"https://github.com/shivam-pawar.png",key:"shivam-pawar"}],frontMatter:{slug:"setup-react-app-babel-webpack",title:"Setup Webpack And Babel for a React JS Application",authors:"shivam-pawar",tags:["JavaScript","webpack","reactjs","babel","programming"]},prevItem:{title:"Setup React Application using Typescript and Webpack",permalink:"/sptechblogs/blog/setup-react-app-webpack-typescript"},nextItem:{title:"FIX - replaceAll() is not a Function In JavaScript",permalink:"/sptechblogs/blog/replaceAll-in-javascript"}},p={authorsImageUrls:[void 0]},s=[{value:"Introduction",id:"introduction",level:2},{value:"Why do we use Babel?",id:"why-do-we-use-babel",level:2},{value:"What exactly is webpack?",id:"what-exactly-is-webpack",level:2},{value:"Creating a folder structure",id:"creating-a-folder-structure",level:2},{value:"Installations",id:"installations",level:2},{value:"Configuring Babel",id:"configuring-babel",level:2},{value:"Configuring Webpack",id:"configuring-webpack",level:2},{value:"Setting Scripts in <em>package.json</em>",id:"setting-scripts-in-packagejson",level:2},{value:"Creating a React Component",id:"creating-a-react-component",level:2},{value:"Run the app",id:"run-the-app",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:s};function u(e){let{components:a,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"As a beginner in React.js, I used to setting up my react application using a single command line tool called create-react-app (CRA) which is a open source project developed by developers at Facebook for bootstrapping your react application and serve a simple boilerplate. But as a developer I\u2019m always curious to understand what actually this command does ? What are the other dependencies required to serve a react application ? As a beginner I was thinking like react-scripts is the only dependency that required to build and run react app. But as I drill down more in React I get to know more about transpiler and bundler."),(0,l.kt)("p",null,"I get to know that there were various ways to create a React app. create-react-app is abstract way of creating a react app as it hide all the configurations and not provide us a flexibility to add a custom build configs. So I moved to configure Webpack and Babel by my own configuration which is actually used in create-react-app but it\u2019s configuration is abstract."),(0,l.kt)("p",null,"I\u2019m assuming that you know about React.js and you are here to learn configuration of Webpack and Babel in your project."),(0,l.kt)("h2",{id:"why-do-we-use-babel"},"Why do we use Babel?"),(0,l.kt)("p",null,"Well answer is simple enough, Our browser is not compatible for the latest ECMAScript syntax and hence Babel will help us to trans-compile (transpile) latest ECMAScript syntax into ES5 or ES6 code which is browser compatible or transform code into backward compatibility."),(0,l.kt)("p",null,"If you don\u2019t want to use Babel, you need to have knowledge of ES5 or ES6 syntax for React.js app development."),(0,l.kt)("h2",{id:"what-exactly-is-webpack"},"What exactly is webpack?"),(0,l.kt)("p",null,"In simple word, Webpack is a bundler of your application. In your project you are likely to create many components and these components will be written in separate files right !. Now imagine the case, you have 10 components in you app and that\u2019s why obviously 10 script files. Now if you want to deploy you application, you need to keep track of all these files and also their dependencies. So, here Webpack will come in picture."),(0,l.kt)("p",null,"Webpack will keep track of your all files and create a dependency graph for you application and most probably create a single file which will bundle all your files along with you dependencies. Isn\u2019t it a great thing!"),(0,l.kt)("h2",{id:"creating-a-folder-structure"},"Creating a folder structure"),(0,l.kt)("p",null,"Now we will see how to maintain files in folders. This structure may be get vary according to you choice. I\u2019ll show you structure which I personally prefer. Choice is yours!"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a folder and name it as per your application name."),(0,l.kt)("li",{parentName:"ol"},"Open folder in command prompt (cmd)."),(0,l.kt)("li",{parentName:"ol"},"Run the following command in cmd:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"npm init\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"This will ask you some basic information like package name, author name. description, and license. With this info it will create a file called package.json"),(0,l.kt)("li",{parentName:"ol"},"Create a src folder inside your project folder and add empty files named as index.js and index.html and create two config files at your project level called .babelrc and webpack.config.js like this:")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"folder-structure",src:t(5590).Z,title:"folder-structure",width:"267",height:"198"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," File name for .babelrc and webpack.config.js should be exactly same as mentioned."),(0,l.kt)("h2",{id:"installations"},"Installations"),(0,l.kt)("p",null,"Now we need to install some packages which are essentially required for configuring React application with Babel and Webpack."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install our main dependency package, React and React DOM.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"npm i -S react react-dom\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Install Babel as a dev dependency for your application.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"npm i -D babel-core babel-loader babel-preset-env babel-preset-react\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"babel-core"),": It is the main engine package for the babel."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"babel-loader"),": Loader will transpiles the react JSX code in backward compatible js code with the help of babel and webpack."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"babel-preset-env"),": Add support to ES5/ES6 JavaScript."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"babel-preset-react"),": Add support for React JSX code. ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": babel-loader8.",(0,l.kt)("em",{parentName:"p"}," requires babel7.. If you\u2019d like to use babel6.. You should install babel-loader.7.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"npm install --save-dev babel-loader@7.0.0\n")),(0,l.kt)("p",null,"OR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"npm install --save-dev @babel/core\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install Webpack as a dev dependency for your application.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"webpack"),": Main engine for the webpack plugins."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"webpack-cli"),": Provides a command line tool for setting up webpack and it\u2019s plugins."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"webpack-dev-server"),": This will help us to develop a live server for your application."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"html-webpack-plugin"),": Help to create a HTML template for your application.")),(0,l.kt)("p",null,"These are the minimal required packages which you need to install. Now, let\u2019s move for adding configurations in config files."),(0,l.kt)("h2",{id:"configuring-babel"},"Configuring Babel"),(0,l.kt)("p",null,"In .",(0,l.kt)("em",{parentName:"p"},"babelrc")," file we will define the presets which we will be using in your application."),(0,l.kt)("p",null,"Paste the below content in your ",(0,l.kt)("em",{parentName:"p"},".babelrc")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"presets":["env", "react"]}\n')),(0,l.kt)("h2",{id:"configuring-webpack"},"Configuring Webpack"),(0,l.kt)("p",null,"In ",(0,l.kt)("em",{parentName:"p"},"webpack.config.js")," you need to add following configs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"//webpack.config.js\nconst path = require('path');\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\nmodule.exports = {\n   entry: './src/index.js',\n   output: {\n      path: path.join(__dirname, '/dist'),\n      filename: 'bundle.js'\n   },\n   devServer: {\n      port: 8080\n   },\n   module: {\n      rules: [\n         {\n            test: /\\.jsx?$/,\n            exclude: /node_modules/,\n            loader: 'babel-loader',\n         },\n         {\n            test: /\\.css$/,\n            use: [ 'style-loader', 'css-loader' ]\n        }\n      ]\n   },\n   plugins:[\n       new HtmlWebpackPlugin({\n            template: path.join(__dirname,'/src/index.html')\n       }) \n   ]\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"entry"),": Here we will define entry point of our application. From this point webpack will start bundling."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"output"),": We will define the location where the bundled file will reside. i.e., at /dist/bundle.js"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"devServer"),": Here development server related configurations present like we provided port number 8080 for development server."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"test"),": We define some regular expression that define which files will pass through which loader."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"exclude"),": Define files that should be excluded by loader."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"loader"),": Define the loaders here which we are going to use.")),(0,l.kt)("h2",{id:"setting-scripts-in-packagejson"},"Setting Scripts in ",(0,l.kt)("em",{parentName:"h2"},"package.json")),(0,l.kt)("p",null,"We require some script command to run and build application, for that we need to define some script in package.json."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"start": "webpack serve --mode development --open --hot",\n"build": "webpack --mode production"\n')),(0,l.kt)("p",null,"Now your package.json will look like this:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"packageJson",src:t(7948).Z,title:"packageJson",width:"573",height:"538"})),(0,l.kt)("h2",{id:"creating-a-react-component"},"Creating a React Component"),(0,l.kt)("p",null,"Now let\u2019s add a simple hello world component in your application. Your index.js and index.html files will look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'//index.js\n\nimport React from "react";\nimport ReactDOM from "react-dom";\n\nconst App = () => {\n  return (\n    <div>\n      <h1>Hello!!</h1>\n      <h2>Welcome to your First React App..!</h2>\n    </div>\n  );\n};\n\nReactDOM.render(<App />, document.getElementById("root"));\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- index.html --\x3e\n\n<!DOCTYPE html>\n<html lang = "en">\n   <head>\n      <meta charset = "UTF-8">\n      <title>React Web</title>\n   </head>\n   <body>\n      <div id = "root"></div>\n      <script src = \'bundle.js\'><\/script>\n   </body>\n</html>\n')),(0,l.kt)("h2",{id:"run-the-app"},"Run the app"),(0,l.kt)("p",null,"I\u2019m very excited to run our application and check if it is working properly. Run below command and it will open your application in browser."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"npm start\n")),(0,l.kt)("p",null,"Your application will open at http://localhost:8080/"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"runReactApp",src:t(7449).Z,title:"runReactApp",width:"436",height:"172"})),(0,l.kt)("p",null,"To generate the production bundle you should run below command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"npm run build\n")),(0,l.kt)("p",null,"Above command will create a dist folder and inside that it will create two files called bundle.js and index.html which are production ready files."),(0,l.kt)("p",null,"Congratulations!! You have successfully configured your react application with Webpack and Babel."),(0,l.kt)("h2",{id:"conclusion"},"Conclusion"),(0,l.kt)("p",null,"In this blog we understood the use of webpack, babel and how to develop a react application by configuring webpack and babel."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Thanks for reading this blog post. Hope it\u2019s been useful for you.\nIf you found this article useful, please share it with your friends and colleagues!\u2764\ufe0f")),(0,l.kt)("p",null," This article was originally published ",(0,l.kt)("a",{parentName:"p",href:"https://dev.to/shivampawar/setup-webpack-and-babel-for-a-react-js-application-24f5"},"here")))}u.isMDXComponent=!0},5590:(e,a,t)=>{t.d(a,{Z:()=>n});const n="data:image/png;base64,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"},7948:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/packageJson-0d32cf02a43fded14d73fc4e8fc13fcd.png"},7449:(e,a,t)=>{t.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);