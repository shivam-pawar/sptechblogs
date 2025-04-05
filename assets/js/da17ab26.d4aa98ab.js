"use strict";(self.webpackChunksptechblogs=self.webpackChunksptechblogs||[]).push([[1609],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},A="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),A=l(a),g=r,m=A["".concat(s,".").concat(g)]||A[g]||u[g]||p;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,i=new Array(p);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[A]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<p;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>A,frontMatter:()=>p,metadata:()=>o,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const p={slug:"setup-react-app-webpack-typescript",title:"Setup React Application using Typescript and Webpack",description:"Learn how to configure TypeScript in a React application with Webpack and Babel for better type safety and development efficiency.",authors:"shivam-pawar",tags:["React.js","typescript","webpack","javascript","programming"]},i=void 0,o={permalink:"/sptechblogs/blog/setup-react-app-webpack-typescript",editUrl:"https://github.com/shivam-pawar/sptechblogs/tree/master/blog/2022-10-12-setup-react-app-webpack-typescript.md",source:"@site/blog/2022-10-12-setup-react-app-webpack-typescript.md",title:"Setup React Application using Typescript and Webpack",description:"Learn how to configure TypeScript in a React application with Webpack and Babel for better type safety and development efficiency.",date:"2022-10-12T00:00:00.000Z",formattedDate:"October 12, 2022",tags:[{label:"React.js",permalink:"/sptechblogs/blog/tags/react-js"},{label:"typescript",permalink:"/sptechblogs/blog/tags/typescript"},{label:"webpack",permalink:"/sptechblogs/blog/tags/webpack"},{label:"javascript",permalink:"/sptechblogs/blog/tags/javascript"},{label:"programming",permalink:"/sptechblogs/blog/tags/programming"}],readingTime:3.015,hasTruncateMarker:!0,authors:[{name:"Shivam Pawar",title:"Senior Software Developer @Emtec Inc.",url:"https://github.com/shivam-pawar/",imageURL:"https://github.com/shivam-pawar.png",key:"shivam-pawar"}],frontMatter:{slug:"setup-react-app-webpack-typescript",title:"Setup React Application using Typescript and Webpack",description:"Learn how to configure TypeScript in a React application with Webpack and Babel for better type safety and development efficiency.",authors:"shivam-pawar",tags:["React.js","typescript","webpack","javascript","programming"]},prevItem:{title:"Improve your JavaScript Code Part - 1",permalink:"/sptechblogs/blog/improve-your-js-code-part-1"},nextItem:{title:"Setup Webpack And Babel for a React JS Application",permalink:"/sptechblogs/blog/setup-react-app-babel-webpack"}},s={authorsImageUrls:[void 0]},l=[{value:"Why Typescript?",id:"why-typescript",level:2},{value:"Installations",id:"installations",level:2},{value:"Configuring Typescript",id:"configuring-typescript",level:2},{value:"Configuring Webpack",id:"configuring-webpack",level:2},{value:"Testing Working for Typescript with React",id:"testing-working-for-typescript-with-react",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:l};function A(e){let{components:t,...p}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this post we will learn how to add support of TypeScript to your React Js application having webpack and babel configured."),(0,r.kt)("p",null,"Please note that in this post I\u2019m going to modify previously setup React Js application to add support for TypeScript. If you haven\u2019t yet gone through that post then please start with ",(0,r.kt)("a",{parentName:"p",href:"https://dev.to/shivampawar/setup-webpack-and-babel-for-a-react-js-application-24f5"},"Setup Webpack and Babel for a React Js")," Application and come back to this post."),(0,r.kt)("h2",{id:"why-typescript"},"Why Typescript?"),(0,r.kt)("p",null,"According to ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"official documentation"),", TypeScript is a strongly typed superset of JavaScript which uses TypeScript Compiler to compile it into plain JavaScript. TypeScript provide pure Object Oriented implementation to use classes, interfaces and inheritance."),(0,r.kt)("p",null,"TypeScript check error in code at compile time and if any error found, then it shows the mistakes before the script is run. Also it support all existing JavaScript library as it is a superset of JavaScript. It make development quick and easy as possible and developers can save lot of time."),(0,r.kt)("h2",{id:"installations"},"Installations"),(0,r.kt)("p",null,"We need to install some packages which are essential to configure TypeScript in React application."),(0,r.kt)("p",null,"Run below commands to install required packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"npm install -D typescript ts-loader @types/node @types/react @types/react-dom\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"typescript")," package is main engine for TypeScript."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ts-loader")," is loader for Webpack that integrates TypeScript in Webpack. This will convert files with .ts extension into .js files and bundle it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"@types/node"),", ",(0,r.kt)("strong",{parentName:"li"},"@types/react")," and ",(0,r.kt)("strong",{parentName:"li"},"@types/react-dom")," contains the type definitions required for node, react and react dom.")),(0,r.kt)("h2",{id:"configuring-typescript"},"Configuring Typescript"),(0,r.kt)("p",null,"Add tsconfig.json file to the root directory location where package.json exists. Name should be exact same as mentioned and the below configurations into it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'//tsconfig.json\n\n{\n  "compilerOptions": {\n    "outDir": "./dist/",\n    "noImplicitAny": true,\n    "module": "es6",\n    "target": "es5",\n    "jsx": "react",\n    "allowJs": true,\n    "allowSyntheticDefaultImports": true,\n    "moduleResolution": "Node"\n  }\n}\n')),(0,r.kt)("h2",{id:"configuring-webpack"},"Configuring Webpack"),(0,r.kt)("p",null,"Webpack need to be configured to have support for TypeScript files. Here is small change you need to add in webpack.config.js"),(0,r.kt)("p",null,"Add ts-loader (loader) and test for ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"ts"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"tsx"))," files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//webpack.config.js\n{\n   test: /\\.tsx?$/,\n   exclude: /node_modules/,\n   loader: 'ts-loader'\n}\n")),(0,r.kt)("p",null,"add Test for ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"ts"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"tsx"))," extension to resolve:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//webpack.config.js\n...\nresolve:\n{\n   extensions: [ '.tsx', '.ts', '.js' ],\n}\n...\n")),(0,r.kt)("p",null,"And one final change in webpack config is to rename the ","_","js ","_","files to ","_","tsx ","_","in your react application and update the entry point"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'//webpack.config.js\n...\nentry: "./src/index.tsx",\n...\n')),(0,r.kt)("h2",{id:"testing-working-for-typescript-with-react"},"Testing Working for Typescript with React"),(0,r.kt)("p",null,"To test the application, we create one component App which will take one prop of type number which will get passed by index.tsx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'//index.tsx\n\nimport React from "react";\nimport ReactDOM from "react-dom";\nimport "./style.css";\nimport { App } from "./components/App";\n\nReactDOM.render(<App num={1234} />, document.getElementById("root"));\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'//components/App.tsx\n\nimport React from "react";\n\ntype AppProps = { num: number };\n\nexport const App = ({ num }: AppProps) => <h1>Total Number: {num}</h1>;\n')),(0,r.kt)("p",null,"Boo-yah!\ud83d\ude0d We are all set with TypeScript\u2764\ufe0f."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Demo",src:a(9954).Z,title:"Demo",width:"404",height:"212"})),(0,r.kt)("p",null,"Now just try to change the value which we were passing through props."),(0,r.kt)("p",null,"For example I\u2019ll just change number 1234 to string \u201c1234\u201d and check what will happen."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"error-message",src:a(3140).Z,title:"error-message",width:"880",height:"312"})),(0,r.kt)("p",null,"As expected, Intellisense will show error like this so that we will identify it before building application. Isn\u2019t it a great thing!"),(0,r.kt)("p",null,"Also if we try to build it, command prompt will show error like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"error-console",src:a(3296).Z,title:"error-console",width:"536",height:"144"})),(0,r.kt)("p",null,"Error are self explanatory so that we can easily identify mistakes and correct it."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this blog post we successfully configured TypeScript with React application and tested if it works properly or not."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you found this article useful, please share it with your friends and colleagues!\u2764\ufe0f")),(0,r.kt)("p",null,"This article was originally published ",(0,r.kt)("a",{parentName:"p",href:"https://dev.to/shivampawar/setup-react-application-using-typescript-and-webpack-2kn6"},"here")))}A.isMDXComponent=!0},3296:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhgAAACQCAMAAAB9JuK+AAABWVBMVEUMDAwyDQ3nNig7LUsNDRsNDTQ8DQ3nSFbMzMyFP1by8vLHLRt2sczMk1c0drHnPzTMsXZhNlZh1tanIg09i9Dyr2UOV5MMNXoNDSaFGA0NIkANDT2L0PIeDQ2xdjSnSFEdfLlXk8xhm1uTVw3y0IvnSEU7udZ2dXY7Ng3HR0qLPQ0NPYsNGDRhuXxlDQ0NDVvQiz12NA1hDQ1XDQ6vZQ0NZa9lr/JIWw0NDVcNDWUUxg1VfDZmRiIsm9YNW5sLMlh1VzQiRmZI1rkODQ2v8tDNzZIWxgxW1ZvQ8q9N1tbMzLGTzKyTzMwOVA0NDQ00V3Vd1rl0ZUby8q/Q8uNXPxwPMw0Vqw1h1puxzJdIaHYGLs6v8vIRqw0QkA1PZ1vy8tCxzMwOcw1wdlqnIih9pKcUcw2TV1d/LzdVuXyxsXadk4qwaGLy0K+v0PKTZzQ7ubnNkXJXNHYNGRwDGiDWAAAQdElEQVR42u1d+19TRxa/SQyEVzThEYgKCRQRnzyKUpCHZbWFQtCK3WIrrdbWbbvb7f7/v+zMmTnzvslNSCLR8/20Hu68Z853zpyZO1yiiEAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgdQXb4SipBsgdL4fCxwcFxU7Zajhd/9dpnfU7cmhdCSIxMP8NQdGmAict9SsIP8yv6uQExbn99L4q++MctHfCkLxjOKDFuS8zwIqhGWU4sVHyzxGjEuE+eGGkQlwY4OdKGZOGZy3343AgeAa5e+7w5Yoz9fXgrULAsJxb14okY7SEGEoHLMrMWLHAUn1X6fC43Anbjt8PcwXKAGDhzhVZ0+IPBQRFhE+PqtcHBb++BgseWuPjzh8GfbimptMvTDTIOjC2xRYjrdG1QSlmqWJp0PlYfVCjqvf2CpX3AK1Ir2iDkkOW68QSDGJMzQ0qK4MIQPhvIC2IwVsBPccQQZkKFP2BKeDDuEePqNaaQMa65r+9xFTM9fc6fUSpzo3IxNd9+cSta+0naF2WOZHksfEzWxQvEelkens2zGFiuF08+BsOo8CVGIyULihji2SfGXBRNaG/j9gs+A3/ylgwMB/UBS2xiKOKwJy5gZWA/oFTpx+Rs5mQBoi0FlybIxwgBWVFCJWP//s9SYCnBcr14shjKYnAyoDQtRiGdgBi+LwFBGG4Qx1IkLARMm6BQpqsAMQSdcK2QuQ3XQsbbxIBALlW9rnOKzMLtUcB5JWIIQtxZHFWyzN2KyZlRfG6BGDD0GG5EBS2GUCBfQj6HQJSmCq9eGzeIsRRcFCxijEmLIaMfjIedTyjXiydiaOezIJ1PJsGvMJ6TE0PPvDXhOmgfI2j6udP3WR9YDrbIC8sxHqG0Nhdj40Zu7SiuGU4tEoOXuzYofQxI9O29L37gVuaLH0TOMW0geE4VT3DOMRgBmGlAyayFPNeQz+oUI5fj+5IkxOBKUuHg/Y8LYUimJ9g1wPxl2pTJMLkqB555wWqTOyZ3JUb84LgiBnduPssLb5aHr/EdDfyDxOAR46pcHU8IoFazpRveJFo4eUTfwTqeaFROML7FNhMuJoLEIBCIGAQCgUAgfIRIdPeB7j18csCz5frx7b73UPvx6dNfjccN+Vj7cWMvCoRHLze+2yNldRNjSy3Gn4cYLzeOrOfXRyzoZRQdbbyxiIHhjDCviRhdhXitEHvvAd91tvnew+tfleVAfdd+/JX9v3e0sefaFp72zXdHRIzuGgz7toR778F9x9Geew+1jTdPn0pLoIghjIhPDB7OzAYRo6uQR0qx9x7UkVNb7z3UNl57FJBLhUcMCGcWhojRVaCjEHfvwXrH2bZ7DzVuLeAfhTfySRDjJXM6BUMgnJOCiPGB9qrhew8qvq33HmB5sIiBvHAthgh//RRwRPrqvM8pXkObe9XQvQcd3957D3x9eMNNgPQxjhRJbGLocLIYXSWGshAx9x7M+Hbee+DHGKBoQQx+XAFrx2spjWMMfCZidH2v2ko83XsgEAgEAoFAIBAI58PjhYXn14PBu1xOni4sPDpP+ZcGLie5rbG1GQ6vFIuzpmy1HC8+e+Ou2+3tu9db6WHpXwmyZf97s9eIsSvk8aOYCDum6e9phIlR+ioVRfe/vOmOrhfOKDFrS8ywH1RjIy2p+GaJEcu4+/sPRXnF4qYZKh5RRtv/TH3cxGjP9zQ8AmRvPGyOGJWz4ByU5cTP3DrxrRFDRJT27XK3HkalZze19NrfI8RgK8cCLB586Vg4SUSMRN/TYBYmDel/memfnwoQA2eu0IoO3yoWRYRNDD4x+dxjCq5scnG2X2QDj1Jpl6crMl1VNitiym4XpZSliqVJ52P1QYWi3tI+S7ulJzlLXoQcslwdDy0O8iZ7Y9OUNt17zmIoOjQmRsLvaWQEMRgrMuk6xBDjpsK3mBK2Zj1iwCBXuOa+SnEVMz095M8o1firXEzNfMpuP5NqUfqR5bHwiqyLF4j1sjylZzd9i4HlqngRcP/LfLH47GZojVGykftzwYnxNtXYx2jqexqSGCywrC1JaZ/PwGfekoHhoD4xGS1iKOKwJy5gZWA/oFTpK3K2c7IA0TaDSxPkY4SArCihksrdG5uBpQTLxXg0B/uznhuxJVcmlJXWfNuL4mPgdqSxxUj4PY0wMXxfAoIw3CCOpUhYCJg2QaFMVwFiSNsu1wqZ23AtZLxNDAjkUtXrOqfILNweyXhZMFTt+EaS9ihb3fRcHOdz8nQ3ETESfk8jKTFg6DHciApaDKFAvoQ8hECUpgqzN2YNYmwGFwWLGBVpMWT01mzY+YRyMV5ZjIdOfzxe9Jr3ifp/rE8zHicjRsLvaTQghp6Z28J10D5G0PRvgm2G2ccWeWE5ZiOU1syszBq5tZnfNpxaJAYvd7sofQy5uxS+wf19kdNYCCqzRrysgK8XwscR6dGn2dbLZY/6GHw7sis2JYwiIOWaEj7HSPY9DfA5+tOJiMGVpMLB+58VwpBwLsD1J9d3mQyTq3LgmRespmmliOcMKr44q4jBnZu70pvl4dt8RwP/IDF4xKwqV8dLM8UjREe2OBXug0Xj5BGyh3cl8TiOPfls8/c0WliE0XewjicalRMX39r9H9cQVGJOsnrzHKM1Ynx4BInRXdy3jrZK+zG86L2Tz/C7Eu2JnvNdyUdPjI/1XQmBQCAQCB8pGt3jiIt3wxPeB2lTu2BbLrf16Q8wLqr+psfznLizyM8l5qfEAcVQBOcX/J1ZQTyqZ5Rx+RvDOVkvDCXsqJMv6YAUhtqsmEy6qXqS1u/2Lykx6uc7P2qiB3CQBdWNMmULPU/OjOpnIzyU//zEiNo8AInLb0CbT5UYsgdAAtWYIatv+CykN8MgFZCG/aPvaRScm1+qcHhdCweu3DhnhjJgitx7HuKI1R8VNOnOa18r3/yKLl83E8K918hWef2jVvvhBtvogDSIkhh2v1Q9sl43POm4YDyeKJcvD/T/MjM/peuX+XC8ugCh/oIeZSTJncUV61nIMDHEhR5+VM61zlJwPoc4readZF2GdVeYIvueRyGtCRoqIeMuMCKfvljkzNjMqHjng/l0fvkiGW+vyfpleugP3FrS6ex+iXq8C01WeONx0e2XxOgfLcxP8YtSsn7Mp8erS8SIymqCiXdmBUVMfIdWCC/GIn+ZD+Ko6NjkzBT7TzPLUhBOKyQGKxQS2y/nQIaNtyTG/Ipncst8zFYiUV7AlPN3O5hP59f1Zpx3QNgOo31+v0Q9ul53WJONi9VvsBh9mTRjlZdPj1e3iMHrhwHJKFeyIFUwFUVWeCg/a+ydxT41APFOKdpuJIY9c5ViGlkMZ5tgDKh8cIgBDQJbLPOp/I7FkPXL9C4x/H6peeE4BLL+hOPSiBgqXyYddQt6BMFEGfqH3jbiBeYvDGWGZAcZs+uRWlwubkSM/rj9ocphXlJuZDGAZNISYD4pJTHQVUAFDcVbjED3Yy1GwnFJZDHquMCdJQY3U2Wtfxg4fFbhYR+D93pxBSdrur7PDJ2TC3IMMSZnVurmdgfJUiisedaCD/6RtIiR42dIha9Y5WB61R/Tx7CbA4X691aw/mTjYlrKO4sOMcx8HjEmZ+ZXOkgMtLT8uIK71+axBn9GGU8MMf8gn/VDYFMih1LsStI63LznkemPzw/p7N93UfnkPRJVvrJ+rPXvF/vc35/B8rA+VY6ZPq3r9fsl61H1OuGJx0UvYfMriwYxnHwuMWqdIwaeR7Rlx19n393kwduUvYfuMDpXX7PjUmtSFxf+cyZoUtsztrBydWlb1tn62jsuPYeMPN1p2wBkkp60Rxe6vraPC4FAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCISPEtnhufoJqtNda8kV/jWzfC434kZNXEnFpk/aj1bbQ8RISAymuFzOCFs/xMfSz+ZIVu1kTSgi3xwxRAP9flwaON/vU8QRIzv8ZFX3t/QzHw/2gzsunx4xnOfqXFT6fhlK+sMZyfXDlmZxQmLYDfT6UZ5/35FftJk4WBDEMPpbHfHHpdcgRp0PZhWInh3+azh3sMzkb4dcQjj0fELMAJY0OwwRYWLAEPGw/BVPfxapZHnZYSh/4u/h3G+HB8uqXr2ESGKI9gnTowtW7ZfpYaKyn7AfErVL71fKNjGc70egxO9WuN+VkOXrcZF9fbc6IYih+7v+zbI3Ltg/6G9u7uITQ3SGTXPO8iofUNZq1lWQeW4SWSeqTE7I0ahOZ4dH6lgMtAzMbLjEKH2/as60ZUUiVs9Ebq568H54TtWrLYXU/Yj+3yhYtV8TSFoMXo5uaG2vZhPD/X6ElOq7Ff53JfKCGKzdtg0TxDD6C9EuMWT/AvbvYqL0eyrPVD0HLGeaAxPMHlCq0cfZXv3T4gVMUYcAnEc8vU2Mqr3kyvKALKweljY/wlhi1GsRA9sH0igY2+8TY85dcixieN+PkFL9Frr/XQlJDK9cQQzdX9l6e1ywf1H+yWpPEGP9m9V3f2TfLQun6WDZIwZEXEmpNbtqGlKTCXoAD6Tu/KVkxPNlIA17aEQMbB8QySgY298sMbzvR0ipvlvhfz6gLjGM/uZVbNWybIIYwW3WhSTG//6qDnyzisbBIgZYkGnolfAbYNwnPGZMmLMgj55JzltMjQHF8oIWQ6w5vsXA9HmTGKL9LVkMgxAotcVojhi6v4aLbYyLJgYvoweYkX33bm7ij99TOJuh4+BrCMm7uX7IfQ3ZSe7nOcwQHV0/FD6qjhTjJ8PdAcmjLz8NM8sihmiL72PI9BOGjVbtV+kFaxoRw/t+hPN3WJolhu6vZq3ZX5MYveFnVJ+srh+OiN0BePMglOSbh4MFPvB5tSthP85pUuB2XRCAH2PIbYxFDJ3OdE6mRQZhhiUxjPqxPWaD2Jpibndqsv0qHfw04iuwgN/rUMca9vcjUOJ3Kxxi6PY45Vad/pZ+nrPHxSYGhPfySVn7Tw7bWO/eXkQgYgSIQfohYhAIBAKBQOhVb+JVqVGSnect/InhZu9TtLF8Qjtw1SLGzgLgURwxgvF4LGEdVCS9T9HqzZ865RPaAuvDjzug8vJJLDFC8fXV0yFiJKiZcA68evVqxyLGzsLbVPlE/DVW/hdXj+FPN+88P104OX3bh/HejSalHnl/I+l9ipxxsmm9eGz1vgahbdTYcSxGebd8IozE8Ul0vAsWY2fh5Pht3+kJxscSA+9vJLxPoV96TVsvx1q+r0HoFDEmmWkon5SfX3/MfjzJnvUJYrDn3cnTRxgf9jHmzKUi0X0KJAa+ZXVXmGbva5A6O2gxuA+RPUudnV0/6yu/TTnEaOBjyPsbUcL7FMgAvJehXcvW7muQOjtGDE4FTozMyXHmLAXEeGwSQ8THEQPvb0QJ71PEWYxW72sQOmwxJs/OmJ/x/DrjAtuihixG2MdQ9zcS3qfQ9yem7ZtgLd7XMO9/EM51vPXK2peoc4rjt6nsKXM8y2xPYi4l6hwjxvmU9zeS3qfA+xN4L8N2Wlq4r0HEaNMhhkAgZi/aw3sPe22+AHGO4ujtazep0e0qz0EzIgaBiEEgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCM3i/6BdWI4xf/zbAAAAAElFTkSuQmCC"},3140:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/error-message-256b59ab69bb3f51f280f184efcee1f7.png"},9954:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);