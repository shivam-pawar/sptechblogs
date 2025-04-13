---
slug: practice-javascript-for-interview
title: Practice JavaScript for Interview
description: A comprehensive guide to practicing JavaScript concepts, techniques, and problem-solving strategies for coding interviews. This guide is designed to help developers strengthen their understanding of JavaScript fundamentals, advanced topics, and common interview patterns.
authors: shivam-pawar
image: ../static/img/JavaScript-logo.png
tags: [javascript, interview-prep, coding]
---

# Practice JavaScript for Interview

JavaScript is one of the most popular programming languages, widely used for web development, server-side scripting, and even mobile app development. Preparing for JavaScript-related interview questions can help you strengthen your understanding of core concepts and improve your problem-solving skills.

In this guide, we will cover essential JavaScript topics and provide examples to help you practice effectively.

<!--truncate-->

## Basic Concepts
<details>
  <summary>What is JavaScript?</summary>

  JavaScript is a **lightweight**, **interpreted** scripting language primarily used for creating **interactive web pages**.

  It is **single-threaded** with asynchronous capabilities using callbacks, promises, and **async/await**.
</details>

<details>
  <summary>What are the different data types in JavaScript?</summary>

  <ul>
    <li>Primitive types: <code>String</code>, <code>Number</code>, <code>Boolean</code>, <code>Null</code>, <code>Undefined</code>, <code>Symbol</code>, <code>BigInt</code>.</li>
    <li>Non-primitive: <code>Object</code> (including Arrays and Functions).</li>
  </ul>
</details>

<details>
  <summary>What is Hoisting?</summary>

  Hoisting is a JavaScript mechanism where variables and functions are moved to the top of their containing scope (either function or global scope) during the compilation phase, before the code is executed.

  This means you can use certain variables and functions before they are actually declared in the code.

  **Function Hoisting**  

  Function declarations are hoisted with their full definition, so they can be called before they're written in the code. 

  ```javascript
  sayHello(); // Output: Hello!

  function sayHello() {
    console.log("Hello!");
  }
  ```

  **Variable Hoisting - `var`**  

  `var` declarations are hoisted, but only the declaration, not the initialization. Its value remains `undefined` until the assignment is reached.
  ```javascript
  console.log(x); // Output: undefined
  var x = 10;
  ```

  **Variable Hoisting - `let` or `const`**  

  `let` and `const` are also hoisted, but they are in the **Temporal Dead Zone (TDZ)** from the start of the block until the declaration is encountered, so accessing them before that throws an error (`ReferenceError`).
  ```javascript
  console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization.
  let y = 20;
  ```
</details>

<details>
  <summary>What are var, let, and const?</summary>

  These are the three ways to declare variables in JavaScript:

  **`var`**  
  Function-scoped.  
  Can be re-declared and updated.  
  Hoisted but initialized with `undefined`.  
  Not recommended due to potential scoping issues.  

  ```javascript
  var x = 10;
  console.log(x); // Output: 10
  ```

  **`let`**   
  Block-scoped.  
  Cannot be re-declared in the same scope but can be updated.  
  Hoisted but in the Temporal Dead Zone (TDZ) until declared.

  ```javascript
  let y = 20;
  y = 30; // Allowed
  console.log(y); // Output: 30
  ```

  **`const`**  
    Block-scoped.  
    Cannot be re-declared or updated (immutable reference).  
    Hoisted but in the Temporal Dead Zone (TDZ) until declared.

  ```javascript
  const z = 40;
  // z = 50; // ❌ TypeError: Assignment to constant variable.
  console.log(z); // Output: 40
  ```

  **Key Differences**  
    Use `let` for variables that will change.  
    Use `const` for variables that won't change.  
    Avoid `var` unless necessary for legacy code.  
</details>

<details>
  <summary>What is the difference between == and ===?</summary>
  
  **`==` (Equality Operator)**  
  Compares two values for equality after converting both values to a common type (`type coercion`).  
  ```javascript
  console.log(5 == "5"); // Output: true
  console.log(null == undefined); // Output: true
  ```

  **`===` (Strict Equality Operator)**  
  Compares two values for equality without performing `type coercion`.  
  Both the value and the type must be the same.  
  ```javascript
  console.log(5 === "5"); // Output: false
  console.log(null === undefined); // Output: false
  ```

  **Key Difference**  
  Use `===` to avoid unexpected results caused by type coercion.  
  Prefer `===` over `==` for stricter and more predictable comparisons.
</details>

<details>
  <summary>What is the difference between null and undefined?</summary>

  **`null`**  
  Represents the intentional absence of any object value.  
  It is an assignment value that can be explicitly set to indicate "no value."  
  ```javascript
  let a = null;
  console.log(a); // Output: null
  ```

  **`undefined`**  
  Represents a variable that has been declared but not yet assigned a value.  
  It is the default value for uninitialized variables.  
  ```javascript
  let b;
  console.log(b); // Output: undefined
  ```

  **Key Differences**    
  `null` is an object, while `undefined` is a type.  
  `null` must be explicitly assigned, whereas `undefined` is the default state of uninitialized variables.    
  Use `null` when you want to explicitly indicate "no value."    
  Avoid assigning `undefined` manually; let JavaScript handle it.

  **Comparison**  
  ```javascript
  console.log(null == undefined); // Output: true (loose equality)
  console.log(null === undefined); // Output: false (strict equality)
  ```
</details>

<details>
<summary>How to check type of a variable?</summary>

You can check the type of a variable in JavaScript using the `typeof` operator. It returns a string indicating the type of the operand.

**Examples**  
```javascript
console.log(typeof "Hello"); // Output: "string"
console.log(typeof 42); // Output: "number"
console.log(typeof true); // Output: "boolean"
console.log(typeof undefined); // Output: "undefined"
console.log(typeof null); // Output: "object" 
console.log(typeof {}); // Output: "object"
console.log(typeof []); // Output: "object" // Arrays are also objects
console.log(typeof function() {}); // Output: "function"
```

**Special Cases**    
  `null` is considered an object due to a bug in the initial implementation of JavaScript. Use `x === null` to check for `null` explicitly.  
  To differentiate between arrays and objects, use `Array.isArray()`:
  ```javascript
  console.log(Array.isArray([])); // Output: true
  console.log(Array.isArray({})); // Output: false
  ```

**Best Practices**  
Use `typeof` for primitive types.  
Use `Array.isArray()` to check for arrays.  
Use `instanceof` to check for specific object types:
```javascript
console.log([] instanceof Array); // Output: true
console.log({} instanceof Object); // Output: true
```
</details>

<details>
  <summary>What are the different ways to declare a function?</summary>

  JavaScript provides several ways to declare functions:

  **1. Function Declaration**  
  A named function that can be called before its declaration due to hoisting.
  ```javascript
  function greet() {
    console.log("Hello!");
  }
  greet(); // Output: Hello!
  ```

  **2. Function Expression**  
  A function assigned to a variable. It is not hoisted, so it cannot be called before its definition.
  ```javascript
  const greet = function() {
    console.log("Hello!");
  };
  greet(); // Output: Hello!
  ```

  **3. Arrow Function**  
  A concise syntax introduced in ES6. It does not have its own `this` or `arguments`.
  ```javascript
  const greet = () => {
    console.log("Hello!");
  };
  greet(); // Output: Hello!
  ```

  **4. Immediately Invoked Function Expression (IIFE)**  
  A function that is executed immediately after its definition.
  ```javascript
  (function() {
    console.log("Hello!");
  })(); // Output: Hello!
  ```

  **5. Constructor Function**  
  A function used to create objects. It is invoked using the `new` keyword.
  ```javascript
  function Person(name) {
    this.name = name;
  }
  const person = new Person("John");
  console.log(person.name); // Output: John
  ```

  **6. Generator Function**  
  A function that can pause and resume its execution using the `yield` keyword.
  ```javascript
  function* generator() {
    yield 1;
    yield 2;
    yield 3;
  }
  const gen = generator();
  console.log(gen.next().value); // Output: 1
  ```

  **Key Differences**  
  - Use function declarations for reusable named functions.
  - Use function expressions or arrow functions for inline or callback functions.
  - Use IIFE for code that needs to run immediately.
  - Use constructor functions or classes for object creation.
  - Use generator functions for managing asynchronous or iterative processes.
</details>

