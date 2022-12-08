"use strict";(self.webpackChunksptechblogs=self.webpackChunksptechblogs||[]).push([[584],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=l,g=u["".concat(s,".").concat(m)]||u[m]||h[m]||n;return r?a.createElement(g,o(o({ref:t},p),{},{components:r})):a.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,o=new Array(n);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=r(7462),l=(r(7294),r(3905));const n={slug:"replaceAll-in-javascript",title:"FIX - replaceAll() is not a Function In JavaScript",authors:"shivam-pawar",tags:["JavaScript","node","alternative","programming"]},o=void 0,i={permalink:"/sptechblogs/blog/replaceAll-in-javascript",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-04-16-replaceAll-In-JavaScript.md",source:"@site/blog/2022-04-16-replaceAll-In-JavaScript.md",title:"FIX - replaceAll() is not a Function In JavaScript",description:"Why is this error occurring?",date:"2022-04-16T00:00:00.000Z",formattedDate:"April 16, 2022",tags:[{label:"JavaScript",permalink:"/sptechblogs/blog/tags/java-script"},{label:"node",permalink:"/sptechblogs/blog/tags/node"},{label:"alternative",permalink:"/sptechblogs/blog/tags/alternative"},{label:"programming",permalink:"/sptechblogs/blog/tags/programming"}],readingTime:1.435,hasTruncateMarker:!0,authors:[{name:"Shivam Pawar",title:"Software Developer @Emtec Inc.",url:"https://github.com/endiliey",imageURL:"https://github.com/shivam-pawar.png",key:"shivam-pawar"}],frontMatter:{slug:"replaceAll-in-javascript",title:"FIX - replaceAll() is not a Function In JavaScript",authors:"shivam-pawar",tags:["JavaScript","node","alternative","programming"]}},s={authorsImageUrls:[void 0]},c=[{value:"Why is this error occurring?",id:"why-is-this-error-occurring",level:2},{value:"How To Fix thee Issue?\u200b",id:"how-to-fix-thee-issue",level:2},{value:"What if you need to use replaceAll() at multiple places?",id:"what-if-you-need-to-use-replaceall-at-multiple-places",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"why-is-this-error-occurring"},"Why is this error occurring?"),(0,l.kt)("p",null,"You will get error something like this: TypeError: replaceAll is not a function while using replaceAll() function because whatever version of node js or browser does not support this function."),(0,l.kt)("p",null,"replaceAll method was added es2012 or es12 so if you are using ECMAScript version below 12 then definitely you will see this error as there is not implementation for replaceAll in earlier versions."),(0,l.kt)("h2",{id:"how-to-fix-thee-issue"},"How To Fix thee Issue?\u200b"),(0,l.kt)("p",null,"As a workaround for this problem, you can use replace() method with a regular expression that has the global (\u201cg\u201d) flag set which had a strong support for all ES version and browsers."),(0,l.kt)("p",null,"Lets try with an example:"),(0,l.kt)("p",null,"Below example will replace all whitespaces(\u201d \u201c) with hyphen \u201c-\u201c."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'function testReplace(sentence) {\n  return sentence.replace(/[" "]/g, "-");\n}\n\nconsole.log(testReplace("This is Test"));\n')),(0,l.kt)("h2",{id:"what-if-you-need-to-use-replaceall-at-multiple-places"},"What if you need to use replaceAll() at multiple places?"),(0,l.kt)("p",null,"Alternatively, You can create a function which will resemble the behavior of replaceAll() method."),(0,l.kt)("p",null,"Like in this example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'function someFunction(blogName) {\n  return replaceAll(blogName, /[" "]/g, "-");\n}\n\n\nfunction replaceAll(sentence, regx, replaceBy) {\n  return sentence.replace(regx, replaceBy);\n}\n\nconsole.log(someFunction("This is my blog"));\n')),(0,l.kt)("p",null,"Now you are good to use replaceAll() method anywhere but with different implementation. Note that we are passing 3 parameters to our replaceAll() method which is different than the actual replaceAll() method but both will give desired output."),(0,l.kt)("h2",{id:"conclusion"},"Conclusion"),(0,l.kt)("p",null,"There is no implementation of replaceAll() present in version of ECMAScript12 that\u2019s why we get this error. To fix this, we had a workaround which will use replace() method to do exact thing which replaceAll() does."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If you found this article useful, please share it with your friends and colleagues!\u2764\ufe0f")),(0,l.kt)("p",null,"This article was originally published ",(0,l.kt)("a",{parentName:"p",href:"https://dev.to/shivampawar/fix-replaceall-is-not-a-function-in-javascript-3klp"},"here")))}u.isMDXComponent=!0}}]);