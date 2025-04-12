---
slug: practice-javascript-for-interview
title: Practice JavaScript for Interview
description: A comprehensive guide to practicing JavaScript concepts and techniques for coding interviews.
authors: shivam-pawar
tags: [javascript, interview-prep, coding]
---

# Practice JavaScript for Interview

## Basic Concepts
<details>
  <summary>1. What is JavaScript?</summary>

  JavaScript is a **lightweight**, **interpreted** scripting language primarily used for creating **interactive web pages**.

  It is **single-threaded** with asynchronous capabilities using callbacks, promises, and **async/await**.
</details>

<details>
  <summary>2. What are the different data types in JavaScript?</summary>

  <ul>
    <li>Primitive types: <code>String</code>, <code>Number</code>, <code>Boolean</code>, <code>Null</code>, <code>Undefined</code>, <code>Symbol</code>, <code>BigInt</code>.</li>
    <li>Non-primitive: <code>Object</code> (including Arrays and Functions).</li>
  </ul>
</details>

<details>
  <summary>3. What is Hoisting?</summary>

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
