"use strict";(self.webpackChunksptechblogs=self.webpackChunksptechblogs||[]).push([[7359],{2138:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var s=r(8289),i=r(4848),t=r(8453);const c={slug:"practice-javascript-for-interview",title:"Practice JavaScript for Interview",description:"A comprehensive guide to practicing JavaScript concepts, techniques, and problem-solving strategies for coding interviews. This guide is designed to help developers strengthen their understanding of JavaScript fundamentals, advanced topics, and common interview patterns.",authors:"shivam-pawar",image:"../static/img/JavaScript-logo.png",tags:["javascript","interview-prep","coding"]},o="Practice JavaScript for Interview",a={authorsImageUrls:[void 0]},l=[{value:"Basic Concepts",id:"basic-concepts",level:2}];function d(e){const n={br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"JavaScript is one of the most popular programming languages, widely used for web development, server-side scripting, and even mobile app development. Preparing for JavaScript-related interview questions can help you strengthen your understanding of core concepts and improve your problem-solving skills."}),"\n",(0,i.jsx)(n.p,{children:"In this guide, we will cover essential JavaScript topics and provide examples to help you practice effectively."}),"\n",(0,i.jsx)(n.h2,{id:"basic-concepts",children:"Basic Concepts"}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"What is JavaScript?"}),(0,i.jsxs)(n.p,{children:["JavaScript is a ",(0,i.jsx)(n.strong,{children:"lightweight"}),", ",(0,i.jsx)(n.strong,{children:"interpreted"})," scripting language primarily used for creating ",(0,i.jsx)(n.strong,{children:"interactive web pages"}),"."]}),(0,i.jsxs)(n.p,{children:["It is ",(0,i.jsx)(n.strong,{children:"single-threaded"})," with asynchronous capabilities using callbacks, promises, and ",(0,i.jsx)(n.strong,{children:"async/await"}),"."]})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"What are the different data types in JavaScript?"}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:["Primitive types: ",(0,i.jsx)("code",{children:"String"}),", ",(0,i.jsx)("code",{children:"Number"}),", ",(0,i.jsx)("code",{children:"Boolean"}),", ",(0,i.jsx)("code",{children:"Null"}),", ",(0,i.jsx)("code",{children:"Undefined"}),", ",(0,i.jsx)("code",{children:"Symbol"}),", ",(0,i.jsx)("code",{children:"BigInt"}),"."]}),(0,i.jsxs)("li",{children:["Non-primitive: ",(0,i.jsx)("code",{children:"Object"})," (including Arrays and Functions)."]})]})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"What is Hoisting?"}),(0,i.jsx)(n.p,{children:"Hoisting is a JavaScript mechanism where variables and functions are moved to the top of their containing scope (either function or global scope) during the compilation phase, before the code is executed."}),(0,i.jsx)(n.p,{children:"This means you can use certain variables and functions before they are actually declared in the code."}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Function Hoisting"})}),(0,i.jsx)(n.p,{children:"Function declarations are hoisted with their full definition, so they can be called before they're written in the code."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'sayHello(); // Output: Hello!\r\n\r\nfunction sayHello() {\r\n  console.log("Hello!");\r\n}\n'})}),(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Variable Hoisting - ",(0,i.jsx)(n.code,{children:"var"})]})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"var"})," declarations are hoisted, but only the declaration, not the initialization. Its value remains ",(0,i.jsx)(n.code,{children:"undefined"})," until the assignment is reached."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"console.log(x); // Output: undefined\r\nvar x = 10;\n"})}),(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Variable Hoisting - ",(0,i.jsx)(n.code,{children:"let"})," or ",(0,i.jsx)(n.code,{children:"const"})]})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"let"})," and ",(0,i.jsx)(n.code,{children:"const"})," are also hoisted, but they are in the ",(0,i.jsx)(n.strong,{children:"Temporal Dead Zone (TDZ)"})," from the start of the block until the declaration is encountered, so accessing them before that throws an error (",(0,i.jsx)(n.code,{children:"ReferenceError"}),")."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"console.log(y); // \u274c ReferenceError: Cannot access 'y' before initialization.\r\nlet y = 20;\n"})})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"What are var, let, and const?"}),(0,i.jsx)(n.p,{children:"These are the three ways to declare variables in JavaScript:"}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"var"})}),(0,i.jsx)(n.br,{}),"\n","Function-scoped.",(0,i.jsx)(n.br,{}),"\n","Can be re-declared and updated.",(0,i.jsx)(n.br,{}),"\n","Hoisted but initialized with ",(0,i.jsx)(n.code,{children:"undefined"}),".",(0,i.jsx)(n.br,{}),"\n","Not recommended due to potential scoping issues."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"var x = 10;\r\nconsole.log(x); // Output: 10\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"let"})}),(0,i.jsx)(n.br,{}),"\n","Block-scoped.",(0,i.jsx)(n.br,{}),"\n","Cannot be re-declared in the same scope but can be updated.",(0,i.jsx)(n.br,{}),"\n","Hoisted but in the Temporal Dead Zone (TDZ) until declared."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"let y = 20;\r\ny = 30; // Allowed\r\nconsole.log(y); // Output: 30\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"const"})}),(0,i.jsx)(n.br,{}),"\n","Block-scoped.",(0,i.jsx)(n.br,{}),"\n","Cannot be re-declared or updated (immutable reference).",(0,i.jsx)(n.br,{}),"\n","Hoisted but in the Temporal Dead Zone (TDZ) until declared."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const z = 40;\r\n// z = 50; // \u274c TypeError: Assignment to constant variable.\r\nconsole.log(z); // Output: 40\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Key Differences"}),(0,i.jsx)(n.br,{}),"\n","Use ",(0,i.jsx)(n.code,{children:"let"})," for variables that will change.",(0,i.jsx)(n.br,{}),"\n","Use ",(0,i.jsx)(n.code,{children:"const"})," for variables that won't change.",(0,i.jsx)(n.br,{}),"\n","Avoid ",(0,i.jsx)(n.code,{children:"var"})," unless necessary for legacy code."]})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"What is the difference between == and ===?"}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"=="})," (Equality Operator)"]}),(0,i.jsx)(n.br,{}),"\n","Compares two values for equality after converting both values to a common type (",(0,i.jsx)(n.code,{children:"type coercion"}),")."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'console.log(5 == "5"); // Output: true\r\nconsole.log(null == undefined); // Output: true\n'})}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"==="})," (Strict Equality Operator)"]}),(0,i.jsx)(n.br,{}),"\n","Compares two values for equality without performing ",(0,i.jsx)(n.code,{children:"type coercion"}),".",(0,i.jsx)(n.br,{}),"\n","Both the value and the type must be the same."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'console.log(5 === "5"); // Output: false\r\nconsole.log(null === undefined); // Output: false\n'})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Key Difference"}),(0,i.jsx)(n.br,{}),"\n","Use ",(0,i.jsx)(n.code,{children:"==="})," to avoid unexpected results caused by type coercion.",(0,i.jsx)(n.br,{}),"\n","Prefer ",(0,i.jsx)(n.code,{children:"==="})," over ",(0,i.jsx)(n.code,{children:"=="})," for stricter and more predictable comparisons."]})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"What is the difference between null and undefined?"}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"null"})}),(0,i.jsx)(n.br,{}),"\n","Represents the intentional absence of any object value.",(0,i.jsx)(n.br,{}),"\n",'It is an assignment value that can be explicitly set to indicate "no value."']}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"let a = null;\r\nconsole.log(a); // Output: null\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"undefined"})}),(0,i.jsx)(n.br,{}),"\n","Represents a variable that has been declared but not yet assigned a value.",(0,i.jsx)(n.br,{}),"\n","It is the default value for uninitialized variables."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"let b;\r\nconsole.log(b); // Output: undefined\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Key Differences"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"null"})," is an object, while ",(0,i.jsx)(n.code,{children:"undefined"})," is a type.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"null"})," must be explicitly assigned, whereas ",(0,i.jsx)(n.code,{children:"undefined"})," is the default state of uninitialized variables.",(0,i.jsx)(n.br,{}),"\n","Use ",(0,i.jsx)(n.code,{children:"null"}),' when you want to explicitly indicate "no value."',(0,i.jsx)(n.br,{}),"\n","Avoid assigning ",(0,i.jsx)(n.code,{children:"undefined"})," manually; let JavaScript handle it."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Comparison"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"console.log(null == undefined); // Output: true (loose equality)\r\nconsole.log(null === undefined); // Output: false (strict equality)\n"})})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"How to check type of a variable?"}),(0,i.jsxs)(n.p,{children:["You can check the type of a variable in JavaScript using the ",(0,i.jsx)(n.code,{children:"typeof"})," operator. It returns a string indicating the type of the operand."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'console.log(typeof "Hello"); // Output: "string"\r\nconsole.log(typeof 42); // Output: "number"\r\nconsole.log(typeof true); // Output: "boolean"\r\nconsole.log(typeof undefined); // Output: "undefined"\r\nconsole.log(typeof null); // Output: "object" \r\nconsole.log(typeof {}); // Output: "object"\r\nconsole.log(typeof []); // Output: "object" // Arrays are also objects\r\nconsole.log(typeof function() {}); // Output: "function"\n'})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Special Cases"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"null"})," is considered an object due to a bug in the initial implementation of JavaScript. Use ",(0,i.jsx)(n.code,{children:"x === null"})," to check for ",(0,i.jsx)(n.code,{children:"null"})," explicitly.",(0,i.jsx)(n.br,{}),"\n","To differentiate between arrays and objects, use ",(0,i.jsx)(n.code,{children:"Array.isArray()"}),":"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"console.log(Array.isArray([])); // Output: true\r\nconsole.log(Array.isArray({})); // Output: false\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Best Practices"}),(0,i.jsx)(n.br,{}),"\n","Use ",(0,i.jsx)(n.code,{children:"typeof"})," for primitive types.",(0,i.jsx)(n.br,{}),"\n","Use ",(0,i.jsx)(n.code,{children:"Array.isArray()"})," to check for arrays.",(0,i.jsx)(n.br,{}),"\n","Use ",(0,i.jsx)(n.code,{children:"instanceof"})," to check for specific object types:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"console.log([] instanceof Array); // Output: true\r\nconsole.log({} instanceof Object); // Output: true\n"})})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"What are the different ways to declare a function?"}),(0,i.jsx)(n.p,{children:"JavaScript provides several ways to declare functions:"}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"1. Function Declaration"}),(0,i.jsx)(n.br,{}),"\n","A named function that can be called before its declaration due to hoisting."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'function greet() {\r\n  console.log("Hello!");\r\n}\r\ngreet(); // Output: Hello!\n'})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2. Function Expression"}),(0,i.jsx)(n.br,{}),"\n","A function assigned to a variable. It is not hoisted, so it cannot be called before its definition."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'const greet = function() {\r\n  console.log("Hello!");\r\n};\r\ngreet(); // Output: Hello!\n'})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"3. Arrow Function"}),(0,i.jsx)(n.br,{}),"\n","A concise syntax introduced in ES6. It does not have its own ",(0,i.jsx)(n.code,{children:"this"})," or ",(0,i.jsx)(n.code,{children:"arguments"}),"."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'const greet = () => {\r\n  console.log("Hello!");\r\n};\r\ngreet(); // Output: Hello!\n'})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"4. Immediately Invoked Function Expression (IIFE)"}),(0,i.jsx)(n.br,{}),"\n","A function that is executed immediately after its definition."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'(function() {\r\n  console.log("Hello!");\r\n})(); // Output: Hello!\n'})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"5. Constructor Function"}),(0,i.jsx)(n.br,{}),"\n","A function used to create objects. It is invoked using the ",(0,i.jsx)(n.code,{children:"new"})," keyword."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'function Person(name) {\r\n  this.name = name;\r\n}\r\nconst person = new Person("John");\r\nconsole.log(person.name); // Output: John\n'})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"6. Generator Function"}),(0,i.jsx)(n.br,{}),"\n","A function that can pause and resume its execution using the ",(0,i.jsx)(n.code,{children:"yield"})," keyword."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"function* generator() {\r\n  yield 1;\r\n  yield 2;\r\n  yield 3;\r\n}\r\nconst gen = generator();\r\nconsole.log(gen.next().value); // Output: 1\n"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Key Differences"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use function declarations for reusable named functions."}),"\n",(0,i.jsx)(n.li,{children:"Use function expressions or arrow functions for inline or callback functions."}),"\n",(0,i.jsx)(n.li,{children:"Use IIFE for code that needs to run immediately."}),"\n",(0,i.jsx)(n.li,{children:"Use constructor functions or classes for object creation."}),"\n",(0,i.jsx)(n.li,{children:"Use generator functions for managing asynchronous or iterative processes."}),"\n"]})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"What are different types of loops?"}),(0,i.jsx)(n.p,{children:"JavaScript provides several types of loops to iterate over data or execute a block of code multiple times:"}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["1. ",(0,i.jsx)(n.code,{children:"for"})," Loop"]}),(0,i.jsx)(n.br,{}),"\n","Used when the number of iterations is known beforehand."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"for (let i = 0; i < 5; i++) {\r\n  console.log(i); // Output: 0, 1, 2, 3, 4\r\n}\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["2. ",(0,i.jsx)(n.code,{children:"while"})," Loop"]}),(0,i.jsx)(n.br,{}),"\n","Executes as long as the condition is ",(0,i.jsx)(n.code,{children:"true"}),". Use when the number of iterations is not known."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"let i = 0;\r\nwhile (i < 5) {\r\n  console.log(i); // Output: 0, 1, 2, 3, 4\r\n  i++;\r\n}\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["3. ",(0,i.jsx)(n.code,{children:"do...while"})," Loop"]}),(0,i.jsx)(n.br,{}),"\n","Executes the block at least once before checking the condition."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"let i = 0;\r\ndo {\r\n  console.log(i); // Output: 0, 1, 2, 3, 4\r\n  i++;\r\n} while (i < 5);\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["4. ",(0,i.jsx)(n.code,{children:"for...in"})," Loop"]}),(0,i.jsx)(n.br,{}),"\n","Iterates over the enumerable properties of an object."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const obj = { a: 1, b: 2, c: 3 };\r\nfor (let key in obj) {\r\n  console.log(key, obj[key]); // Output: a 1, b 2, c 3\r\n}\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["5. ",(0,i.jsx)(n.code,{children:"for...of"})," Loop"]}),(0,i.jsx)(n.br,{}),"\n","Iterates over iterable objects like arrays, strings, or sets."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const arr = [10, 20, 30];\r\nfor (let value of arr) {\r\n  console.log(value); // Output: 10, 20, 30\r\n}\n"})}),(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["6. ",(0,i.jsx)(n.code,{children:"break"})," and ",(0,i.jsx)(n.code,{children:"continue"})," Statements"]})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"break"}),": Exits the loop immediately."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"continue"}),": Skips the current iteration and moves to the next one."]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"for (let i = 0; i < 5; i++) {\r\n  if (i === 3) break; // Stops the loop when i is 3\r\n  console.log(i); // Output: 0, 1, 2\r\n}\r\n\r\nfor (let i = 0; i < 5; i++) {\r\n  if (i === 3) continue; // Skips the iteration when i is 3\r\n  console.log(i); // Output: 0, 1, 2, 4\r\n}\n"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Key Differences"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"for"})," when the number of iterations is known."]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"while"})," or ",(0,i.jsx)(n.code,{children:"do...while"})," when the number of iterations is unknown."]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"for...in"})," for objects and ",(0,i.jsx)(n.code,{children:"for...of"})," for arrays or other iterables."]}),"\n"]})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Common array methods?"}),(0,i.jsx)(n.p,{children:"JavaScript provides a variety of methods to work with arrays. Here are some commonly used ones:"}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["1. ",(0,i.jsx)(n.code,{children:"push()"})]}),(0,i.jsx)(n.br,{}),"\n","Adds one or more elements to the end of an array and returns the new length of the array."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const arr = [1, 2, 3];\r\narr.push(4);\r\nconsole.log(arr); // Output: [1, 2, 3, 4]\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["2. ",(0,i.jsx)(n.code,{children:"pop()"})]}),(0,i.jsx)(n.br,{}),"\n","Removes the last element from an array and returns it."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const arr = [1, 2, 3];\r\nconst last = arr.pop();\r\nconsole.log(last); // Output: 3\r\nconsole.log(arr); // Output: [1, 2]\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["3. ",(0,i.jsx)(n.code,{children:"shift()"})]}),(0,i.jsx)(n.br,{}),"\n","Removes the first element from an array and returns it."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const arr = [1, 2, 3];\r\nconst first = arr.shift();\r\nconsole.log(first); // Output: 1\r\nconsole.log(arr); // Output: [2, 3]\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["4. ",(0,i.jsx)(n.code,{children:"unshift()"})]}),(0,i.jsx)(n.br,{}),"\n","Adds one or more elements to the beginning of an array and returns the new length of the array."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const arr = [2, 3];\r\narr.unshift(1);\r\nconsole.log(arr); // Output: [1, 2, 3]\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["5. ",(0,i.jsx)(n.code,{children:"slice()"})]}),(0,i.jsx)(n.br,{}),"\n","Returns a shallow copy of a portion of an array into a new array."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const arr = [1, 2, 3, 4];\r\nconst sliced = arr.slice(1, 3);\r\nconsole.log(sliced); // Output: [2, 3]\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["6. ",(0,i.jsx)(n.code,{children:"splice()"})]}),(0,i.jsx)(n.br,{}),"\n","Adds, removes, or replaces elements in an array."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"array.splice(start, deleteCount, item1, item2, ...);\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"start"}),": Index at which to start changing the array.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"deleteCount"}),": Number of elements to remove.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"item1, item2, ..."}),": Elements to add (optional)."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'const arr = [1, 2, 3, 4];\r\narr.splice(1, 2, "a", "b");\r\nconsole.log(arr); // Output: [1, "a", "b", 4]\n'})}),(0,i.jsx)(n.p,{children:'In this example, 2 elements starting from index 1 are removed, and "a" and "b" are added in their place.'}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["7. ",(0,i.jsx)(n.code,{children:"concat()"})]}),(0,i.jsx)(n.br,{}),"\n","Merges two or more arrays into a new array."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const arr1 = [1, 2];\r\nconst arr2 = [3, 4];\r\nconst merged = arr1.concat(arr2);\r\nconsole.log(merged); // Output: [1, 2, 3, 4]\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["8. ",(0,i.jsx)(n.code,{children:"indexOf()"})]}),(0,i.jsx)(n.br,{}),"\n","Returns the first index of a specified element, or ",(0,i.jsx)(n.code,{children:"-1"})," if not found."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const arr = [1, 2, 3];\r\nconsole.log(arr.indexOf(2)); // Output: 1\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["9. ",(0,i.jsx)(n.code,{children:"includes()"})]}),(0,i.jsx)(n.br,{}),"\n","Checks if an array contains a specified element."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const arr = [1, 2, 3];\r\nconsole.log(arr.includes(2)); // Output: true\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["10. ",(0,i.jsx)(n.code,{children:"forEach()"})]}),(0,i.jsx)(n.br,{}),"\n","Executes a provided function once for each array element."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const arr = [1, 2, 3];\r\narr.forEach((num) => console.log(num)); // Output: 1, 2, 3\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["11. ",(0,i.jsx)(n.code,{children:"map()"})]}),(0,i.jsx)(n.br,{}),"\n","Creates a new array by applying a function to each element."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const arr = [1, 2, 3];\r\nconst doubled = arr.map((num) => num * 2);\r\nconsole.log(doubled); // Output: [2, 4, 6]\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["12. ",(0,i.jsx)(n.code,{children:"filter()"})]}),(0,i.jsx)(n.br,{}),"\n","Creates a new array with elements that pass a test."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const arr = [1, 2, 3, 4];\r\nconst even = arr.filter((num) => num % 2 === 0);\r\nconsole.log(even); // Output: [2, 4]\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["13. ",(0,i.jsx)(n.code,{children:"reduce()"})]}),(0,i.jsx)(n.br,{}),"\n","Reduces an array to a single value by applying a function."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const arr = [1, 2, 3, 4];\r\nconst sum = arr.reduce((acc, num) => acc + num, 0);\r\nconsole.log(sum); // Output: 10\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["14. ",(0,i.jsx)(n.code,{children:"find()"})]}),(0,i.jsx)(n.br,{}),"\n","Returns the first element that satisfies a condition."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const arr = [1, 2, 3, 4];\r\nconst found = arr.find((num) => num > 2);\r\nconsole.log(found); // Output: 3\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["15. ",(0,i.jsx)(n.code,{children:"findIndex()"})]}),(0,i.jsx)(n.br,{}),"\n","Returns the index of the first element that satisfies a condition."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const arr = [1, 2, 3, 4];\r\nconst index = arr.findIndex((num) => num > 2);\r\nconsole.log(index); // Output: 2\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["16. ",(0,i.jsx)(n.code,{children:"sort()"})]}),(0,i.jsx)(n.br,{}),"\n","Sorts the elements of an array in place."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const arr = [3, 1, 4, 2];\r\narr.sort();\r\nconsole.log(arr); // Output: [1, 2, 3, 4]\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["17. ",(0,i.jsx)(n.code,{children:"reverse()"})]}),(0,i.jsx)(n.br,{}),"\n","Reverses the order of elements in an array."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const arr = [1, 2, 3];\r\narr.reverse();\r\nconsole.log(arr); // Output: [3, 2, 1]\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["18. ",(0,i.jsx)(n.code,{children:"join()"})]}),(0,i.jsx)(n.br,{}),"\n","Joins all elements of an array into a string."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'const arr = [1, 2, 3];\r\nconst str = arr.join("-");\r\nconsole.log(str); // Output: "1-2-3"\n'})}),(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["19. ",(0,i.jsx)(n.code,{children:"split()"})]}),(0,i.jsx)(n.br,{}),"\n","Although not an array method, ",(0,i.jsx)(n.code,{children:"split()"})," is often used with strings to create arrays."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'const str = "1,2,3";\r\nconst arr = str.split(",");\r\nconsole.log(arr); // Output: ["1", "2", "3"]\n'})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Key Differences"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"map()"}),", ",(0,i.jsx)(n.code,{children:"filter()"}),", and ",(0,i.jsx)(n.code,{children:"reduce()"})," for functional programming."]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"push()"})," and ",(0,i.jsx)(n.code,{children:"pop()"})," for stack-like behavior."]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"sort()"})," and ",(0,i.jsx)(n.code,{children:"reverse()"})," for ordering elements."]}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8289:e=>{e.exports=JSON.parse('{"permalink":"/sptechblogs/blog/practice-javascript-for-interview","editUrl":"https://github.com/shivam-pawar/sptechblogs/tree/master/blog/2025-04-12-practice-javascript-for-interview.md","source":"@site/blog/2025-04-12-practice-javascript-for-interview.md","title":"Practice JavaScript for Interview","description":"A comprehensive guide to practicing JavaScript concepts, techniques, and problem-solving strategies for coding interviews. This guide is designed to help developers strengthen their understanding of JavaScript fundamentals, advanced topics, and common interview patterns.","date":"2025-04-12T00:00:00.000Z","tags":[{"inline":true,"label":"javascript","permalink":"/sptechblogs/blog/tags/javascript"},{"inline":true,"label":"interview-prep","permalink":"/sptechblogs/blog/tags/interview-prep"},{"inline":true,"label":"coding","permalink":"/sptechblogs/blog/tags/coding"}],"readingTime":10.605,"hasTruncateMarker":true,"authors":[{"name":"Shivam Pawar","title":"Senior Software Developer @Bridgenext","url":"https://github.com/shivam-pawar/","socials":{"github":"https://github.com/shivam-pawar","linkedin":"https://www.linkedin.com/in/shivam-prakash-pawar/"},"imageURL":"https://github.com/shivam-pawar.png","key":"shivam-pawar","page":null}],"frontMatter":{"slug":"practice-javascript-for-interview","title":"Practice JavaScript for Interview","description":"A comprehensive guide to practicing JavaScript concepts, techniques, and problem-solving strategies for coding interviews. This guide is designed to help developers strengthen their understanding of JavaScript fundamentals, advanced topics, and common interview patterns.","authors":"shivam-pawar","image":"../static/img/JavaScript-logo.png","tags":["javascript","interview-prep","coding"]},"unlisted":false,"nextItem":{"title":"How to Publish Your React App on Azure Static Web App Using Azure CI/CD","permalink":"/sptechblogs/blog/publish-react-app-to-azure-static-web-app-using-azure-devops"}}')},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var s=r(6540);const i={},t=s.createContext(i);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);