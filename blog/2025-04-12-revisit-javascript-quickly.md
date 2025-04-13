---
slug: revisit-javascript-quickly
title: Revisit JavaScript Quickly
description: A comprehensive guide to revisiting essential JavaScript concepts, complete with examples and explanations.
authors: shivam-pawar
image: ../static/img/JavaScript-logo.png
tags: [javascript, interview-prep, coding, web-development, programming-basics, es6, data-structures]
---

# Revisit JavaScript Quickly

JavaScript is a versatile and widely-used programming language that powers the dynamic behavior of websites and applications. This guide is crafted to help you revisit and reinforce your understanding of essential JavaScript concepts, whether you're preparing for technical interviews, enhancing your coding skills, or exploring modern web development practices. By delving into key topics such as data types, hoisting, variable declarations, and advanced features like ES6 syntax and asynchronous programming, you'll gain a deeper appreciation of JavaScript's capabilities. With practical examples and clear explanations, this guide aims to equip you with the knowledge and confidence to solve JavaScript challenges effectively.

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
<details>
  <summary>What are different types of loops?</summary>

  JavaScript provides several types of loops to iterate over data or execute a block of code multiple times:

  **1. `for` Loop**  
  Used when the number of iterations is known beforehand.
  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
  }
  ```

  **2. `while` Loop**  
  Executes as long as the condition is `true`. Use when the number of iterations is not known.
  ```javascript
  let i = 0;
  while (i < 5) {
    console.log(i); // Output: 0, 1, 2, 3, 4
    i++;
  }
  ```

  **3. `do...while` Loop**  
  Executes the block at least once before checking the condition.
  ```javascript
  let i = 0;
  do {
    console.log(i); // Output: 0, 1, 2, 3, 4
    i++;
  } while (i < 5);
  ```

  **4. `for...in` Loop**  
  Iterates over the enumerable properties of an object.
  ```javascript
  const obj = { a: 1, b: 2, c: 3 };
  for (let key in obj) {
    console.log(key, obj[key]); // Output: a 1, b 2, c 3
  }
  ```

  **5. `for...of` Loop**  
  Iterates over iterable objects like arrays, strings, or sets.
  ```javascript
  const arr = [10, 20, 30];
  for (let value of arr) {
    console.log(value); // Output: 10, 20, 30
  }
  ```

  **6. `break` and `continue` Statements**  
  - `break`: Exits the loop immediately.
  - `continue`: Skips the current iteration and moves to the next one.
  ```javascript
  for (let i = 0; i < 5; i++) {
    if (i === 3) break; // Stops the loop when i is 3
    console.log(i); // Output: 0, 1, 2
  }

  for (let i = 0; i < 5; i++) {
    if (i === 3) continue; // Skips the iteration when i is 3
    console.log(i); // Output: 0, 1, 2, 4
  }
  ```

  **Key Differences**  
  - Use `for` when the number of iterations is known.  
  - Use `while` or `do...while` when the number of iterations is unknown.  
  - Use `for...in` for objects and `for...of` for arrays or other iterables.

</details>

<details>
  <summary>Common array methods?</summary>

  JavaScript provides a variety of methods to work with arrays. Here are some commonly used ones:

  **1. `push()`**  
  Adds one or more elements to the end of an array and returns the new length of the array.  
  ```javascript
  const arr = [1, 2, 3];
  arr.push(4);
  console.log(arr); // Output: [1, 2, 3, 4]
  ```

  **2. `pop()`**  
  Removes the last element from an array and returns it.  
  ```javascript
  const arr = [1, 2, 3];
  const last = arr.pop();
  console.log(last); // Output: 3
  console.log(arr); // Output: [1, 2]
  ```

  **3. `shift()`**  
  Removes the first element from an array and returns it.  
  ```javascript
  const arr = [1, 2, 3];
  const first = arr.shift();
  console.log(first); // Output: 1
  console.log(arr); // Output: [2, 3]
  ```

  **4. `unshift()`**  
  Adds one or more elements to the beginning of an array and returns the new length of the array.  
  ```javascript
  const arr = [2, 3];
  arr.unshift(1);
  console.log(arr); // Output: [1, 2, 3]
  ```

  **5. `slice()`**  
  Returns a shallow copy of a portion of an array into a new array.  
  ```javascript
  const arr = [1, 2, 3, 4];
  const sliced = arr.slice(1, 3);
  console.log(sliced); // Output: [2, 3]
  ```

  **6. `splice()`**  
  Adds, removes, or replaces elements in an array.  

  **Syntax**  
  ```javascript
  array.splice(start, deleteCount, item1, item2, ...);
  ```  

  - `start`: Index at which to start changing the array.  
  - `deleteCount`: Number of elements to remove.  
  - `item1, item2, ...`: Elements to add (optional).
    

  **Example**  
  ```javascript
  const arr = [1, 2, 3, 4];
  arr.splice(1, 2, "a", "b");
  console.log(arr); // Output: [1, "a", "b", 4]
  ```
  In this example, 2 elements starting from index 1 are removed, and "a" and "b" are added in their place.  
  
  **7. `concat()`**  
  Merges two or more arrays into a new array.  
  ```javascript
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  const merged = arr1.concat(arr2);
  console.log(merged); // Output: [1, 2, 3, 4]
  ```

  **8. `indexOf()`**  
  Returns the first index of a specified element, or `-1` if not found.  
  ```javascript
  const arr = [1, 2, 3];
  console.log(arr.indexOf(2)); // Output: 1
  ```

  **9. `includes()`**  
  Checks if an array contains a specified element.  
  ```javascript
  const arr = [1, 2, 3];
  console.log(arr.includes(2)); // Output: true
  ```

  **10. `forEach()`**  
  Executes a provided function once for each array element.  
  ```javascript
  const arr = [1, 2, 3];
  arr.forEach((num) => console.log(num)); // Output: 1, 2, 3
  ```

  **11. `map()`**  
  Creates a new array by applying a function to each element.  
  ```javascript
  const arr = [1, 2, 3];
  const doubled = arr.map((num) => num * 2);
  console.log(doubled); // Output: [2, 4, 6]
  ```

  **12. `filter()`**  
  Creates a new array with elements that pass a test.  
  ```javascript
  const arr = [1, 2, 3, 4];
  const even = arr.filter((num) => num % 2 === 0);
  console.log(even); // Output: [2, 4]
  ```

  **13. `reduce()`**  
  Reduces an array to a single value by applying a function.  
  ```javascript
  const arr = [1, 2, 3, 4];
  const sum = arr.reduce((acc, num) => acc + num, 0);
  console.log(sum); // Output: 10
  ```

  **14. `find()`**  
  Returns the first element that satisfies a condition.  
  ```javascript
  const arr = [1, 2, 3, 4];
  const found = arr.find((num) => num > 2);
  console.log(found); // Output: 3
  ```

  **15. `findIndex()`**  
  Returns the index of the first element that satisfies a condition.  
  ```javascript
  const arr = [1, 2, 3, 4];
  const index = arr.findIndex((num) => num > 2);
  console.log(index); // Output: 2
  ```

  **16. `sort()`**  
  Sorts the elements of an array in place.  
  ```javascript
  const arr = [3, 1, 4, 2];
  arr.sort();
  console.log(arr); // Output: [1, 2, 3, 4]
  ```

  **17. `reverse()`**  
  Reverses the order of elements in an array.  
  ```javascript
  const arr = [1, 2, 3];
  arr.reverse();
  console.log(arr); // Output: [3, 2, 1]
  ```

  **18. `join()`**  
  Joins all elements of an array into a string.  
  ```javascript
  const arr = [1, 2, 3];
  const str = arr.join("-");
  console.log(str); // Output: "1-2-3"
  ```

  **19. `split()`**  
  Although not an array method, `split()` is often used with strings to create arrays.  
  ```javascript
  const str = "1,2,3";
  const arr = str.split(",");
  console.log(arr); // Output: ["1", "2", "3"]
  ```

  **Key Differences**  
  - Use `map()`, `filter()`, and `reduce()` for functional programming.    
  - Use `push()` and `pop()` for stack-like behavior.    
  - Use `sort()` and `reverse()` for ordering elements.
    
</details>

<details>
<summary>How to clone an object?</summary>

Cloning an object in JavaScript can be done in several ways, depending on the depth of the clone required (shallow or deep).

1. **Shallow Clone**  

   A shallow clone creates a new object, but nested objects or arrays are still referenced.

   **Using `Object.assign()`**
   ```javascript
   const obj = { a: 1, b: { c: 2 } };
   const shallowClone = Object.assign({}, obj);
   console.log(shallowClone); // Output: { a: 1, b: { c: 2 } }
   ```

   **Using Spread Operator (`...`)**
   ```javascript
   const obj = { a: 1, b: { c: 2 } };
   const shallowClone = { ...obj };
   console.log(shallowClone); // Output: { a: 1, b: { c: 2 } }
   ```  
2. **Deep Clone**  
   
   A deep clone creates a completely independent copy, including nested objects or arrays.

   **Using `JSON.parse()` and `JSON.stringify()`**
   ```javascript
   const obj = { a: 1, b: { c: 2 } };
   const deepClone = JSON.parse(JSON.stringify(obj));
   console.log(deepClone); // Output: { a: 1, b: { c: 2 } }
   ```
   *Limitations*: This method does not handle functions, `undefined`, `Symbol`, or circular references.

   **Using a Library (e.g., Lodash)**
   ```javascript
   const _ = require('lodash');
   const obj = { a: 1, b: { c: 2 } };
   const deepClone = _.cloneDeep(obj);
   console.log(deepClone); // Output: { a: 1, b: { c: 2 } }
   ```

   **Using Recursive Function**
   ```javascript
   function deepClone(obj) {
     if (obj === null || typeof obj !== "object") return obj;
     const clone = Array.isArray(obj) ? [] : {};
     for (const key in obj) {
       if (obj.hasOwnProperty(key)) {
         clone[key] = deepClone(obj[key]);
       }
     }
     return clone;
   }

   const obj = { a: 1, b: { c: 2 } };
   const deepClone = deepClone(obj);
   console.log(deepClone); // Output: { a: 1, b: { c: 2 } }
   ```  
  **Key Differences**
  - Use shallow cloning (`Object.assign` or spread operator) for simple objects without nested structures.
  - Use deep cloning (`JSON.parse`, libraries, or custom functions) for complex objects with nested structures.

</details>
