"use strict";(self.webpackChunksptechblogs=self.webpackChunksptechblogs||[]).push([[1616],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),l=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(a),m=n,g=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return a?r.createElement(g,p(p({ref:t},s),{},{components:a})):r.createElement(g,p({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[b]="string"==typeof e?e:n,p[1]=c;for(var l=2;l<o;l++)p[l]=a[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2944:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={slug:"setup-react-app-babel-webpack",title:"Setup Webpack And Babel for a React JS Application",description:"Learn how to set up Webpack and Babel for a React JS application with step-by-step instructions.",authors:"shivam-pawar",tags:["JavaScript","webpack","reactjs","babel","programming"]},p=void 0,c={permalink:"/sptechblogs/blog/setup-react-app-babel-webpack",editUrl:"https://github.com/shivam-pawar/sptechblogs/tree/master/blog/2022-10-09-setup-babel-webpack-react.md",source:"@site/blog/2022-10-09-setup-babel-webpack-react.md",title:"Setup Webpack And Babel for a React JS Application",description:"Learn how to set up Webpack and Babel for a React JS application with step-by-step instructions.",date:"2022-10-09T00:00:00.000Z",formattedDate:"October 9, 2022",tags:[{label:"JavaScript",permalink:"/sptechblogs/blog/tags/java-script"},{label:"webpack",permalink:"/sptechblogs/blog/tags/webpack"},{label:"reactjs",permalink:"/sptechblogs/blog/tags/reactjs"},{label:"babel",permalink:"/sptechblogs/blog/tags/babel"},{label:"programming",permalink:"/sptechblogs/blog/tags/programming"}],readingTime:6.07,hasTruncateMarker:!0,authors:[{name:"Shivam Pawar",title:"Senior Software Developer @Emtec Inc.",url:"https://github.com/shivam-pawar/",imageURL:"https://github.com/shivam-pawar.png",key:"shivam-pawar"}],frontMatter:{slug:"setup-react-app-babel-webpack",title:"Setup Webpack And Babel for a React JS Application",description:"Learn how to set up Webpack and Babel for a React JS application with step-by-step instructions.",authors:"shivam-pawar",tags:["JavaScript","webpack","reactjs","babel","programming"]},prevItem:{title:"Setup React Application using Typescript and Webpack",permalink:"/sptechblogs/blog/setup-react-app-webpack-typescript"},nextItem:{title:"FIX - replaceAll() is not a Function In JavaScript",permalink:"/sptechblogs/blog/replaceAll-in-javascript"}},i={authorsImageUrls:[void 0]},l=[{value:"Introduction",id:"introduction",level:2}],s={toc:l};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"As a beginner in React.js, I used to setting up my react application using a single command line tool called create-react-app (CRA) which is a open source project developed by developers at Facebook for bootstrapping your react application and serve a simple boilerplate. But as a developer I\u2019m always curious to understand what actually this command does ? What are the other dependencies required to serve a react application ? As a beginner I was thinking like react-scripts is the only dependency that required to build and run react app. But as I drill down more in React I get to know more about transpiler and bundler."))}b.isMDXComponent=!0}}]);