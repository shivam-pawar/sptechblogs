"use strict";(self.webpackChunksptechblogs=self.webpackChunksptechblogs||[]).push([[681],{345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var r=n(5816),a=n(4848),i=n(8453);const l={slug:"replaceAll-in-javascript",title:"FIX - replaceAll() is not a Function In JavaScript",description:'Learn how to fix the "replaceAll() is not a function" error in JavaScript by understanding its cause and implementing a workaround using the replace() method.',authors:"shivam-pawar",tags:["JavaScript","node","alternative","programming"]},o=void 0,s={authorsImageUrls:[void 0]},c=[{value:"Why is this error occurring?",id:"why-is-this-error-occurring",level:2},{value:"How To Fix thee Issue?\u200b",id:"how-to-fix-thee-issue",level:2},{value:"What if you need to use replaceAll() at multiple places?",id:"what-if-you-need-to-use-replaceall-at-multiple-places",level:2},{value:"Conclusion",id:"conclusion",level:2}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"why-is-this-error-occurring",children:"Why is this error occurring?"}),"\n",(0,a.jsx)(t.p,{children:"You will get error something like this: TypeError: replaceAll is not a function while using replaceAll() function because whatever version of node js or browser does not support this function."}),"\n",(0,a.jsx)(t.p,{children:"replaceAll method was added es2012 or es12 so if you are using ECMAScript version below 12 then definitely you will see this error as there is not implementation for replaceAll in earlier versions."}),"\n",(0,a.jsx)(t.h2,{id:"how-to-fix-thee-issue",children:"How To Fix thee Issue?\u200b"}),"\n",(0,a.jsx)(t.p,{children:"As a workaround for this problem, you can use replace() method with a regular expression that has the global (\u201cg\u201d) flag set which had a strong support for all ES version and browsers."}),"\n",(0,a.jsx)(t.p,{children:"Lets try with an example:"}),"\n",(0,a.jsx)(t.p,{children:"Below example will replace all whitespaces(\u201d \u201c) with hyphen \u201c-\u201c."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'function testReplace(sentence) {\r\n  return sentence.replace(/[" "]/g, "-");\r\n}\r\n\r\nconsole.log(testReplace("This is Test"));\n'})}),"\n",(0,a.jsx)(t.h2,{id:"what-if-you-need-to-use-replaceall-at-multiple-places",children:"What if you need to use replaceAll() at multiple places?"}),"\n",(0,a.jsx)(t.p,{children:"Alternatively, You can create a function which will resemble the behavior of replaceAll() method."}),"\n",(0,a.jsx)(t.p,{children:"Like in this example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'function someFunction(blogName) {\r\n  return replaceAll(blogName, /[" "]/g, "-");\r\n}\r\n\r\n\r\nfunction replaceAll(sentence, regx, replaceBy) {\r\n  return sentence.replace(regx, replaceBy);\r\n}\r\n\r\nconsole.log(someFunction("This is my blog"));\n'})}),"\n",(0,a.jsx)(t.p,{children:"Now you are good to use replaceAll() method anywhere but with different implementation. Note that we are passing 3 parameters to our replaceAll() method which is different than the actual replaceAll() method but both will give desired output."}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(t.p,{children:"There is no implementation of replaceAll() present in version of ECMAScript12 that\u2019s why we get this error. To fix this, we had a workaround which will use replace() method to do exact thing which replaceAll() does."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"If you found this article useful, please share it with your friends and colleagues!\u2764\ufe0f"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["This article was originally published ",(0,a.jsx)(t.a,{href:"https://dev.to/shivampawar/fix-replaceall-is-not-a-function-in-javascript-3klp",children:"here"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},5816:e=>{e.exports=JSON.parse('{"permalink":"/sptechblogs/blog/replaceAll-in-javascript","editUrl":"https://github.com/shivam-pawar/sptechblogs/tree/master/blog/2022-04-16-replaceAll-In-JavaScript.md","source":"@site/blog/2022-04-16-replaceAll-In-JavaScript.md","title":"FIX - replaceAll() is not a Function In JavaScript","description":"Learn how to fix the \\"replaceAll() is not a function\\" error in JavaScript by understanding its cause and implementing a workaround using the replace() method.","date":"2022-04-16T00:00:00.000Z","tags":[{"inline":true,"label":"JavaScript","permalink":"/sptechblogs/blog/tags/java-script"},{"inline":true,"label":"node","permalink":"/sptechblogs/blog/tags/node"},{"inline":true,"label":"alternative","permalink":"/sptechblogs/blog/tags/alternative"},{"inline":true,"label":"programming","permalink":"/sptechblogs/blog/tags/programming"}],"readingTime":1.435,"hasTruncateMarker":true,"authors":[{"name":"Shivam Pawar","title":"Senior Software Developer @Bridgenext","url":"https://github.com/shivam-pawar/","socials":{"github":"https://github.com/shivam-pawar","linkedin":"https://www.linkedin.com/in/shivam-prakash-pawar/"},"imageURL":"https://github.com/shivam-pawar.png","key":"shivam-pawar","page":null}],"frontMatter":{"slug":"replaceAll-in-javascript","title":"FIX - replaceAll() is not a Function In JavaScript","description":"Learn how to fix the \\"replaceAll() is not a function\\" error in JavaScript by understanding its cause and implementing a workaround using the replace() method.","authors":"shivam-pawar","tags":["JavaScript","node","alternative","programming"]},"unlisted":false,"prevItem":{"title":"Setup Webpack And Babel for a React JS Application","permalink":"/sptechblogs/blog/setup-react-app-babel-webpack"}}')},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(6540);const a={},i=r.createContext(a);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);