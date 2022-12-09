---
slug: improve-your-js-code-part-1
title: Improve your JavaScript Code Part - 1
authors: shivam-pawar
tags: [JavaScript, tricks, alternative, programming]
---

## Avoid too many nested If Else

Nested if-else statements should be avoided. Maintain the code's linearity and simplicity.

Consider using an if-else statement that is nested and does not take advantage of the power of the return statement.

<!--truncate-->

```js
function getNameById(id) {
  if (id === "M57") {
    return "Harry";
  } else if (id === "U11") {
    return "Prince";
  } else if (id === "S57") {
    return "Jack";
  } else if (id === "G46") {
    return "John";
  } else if (id === "B93") {
    return "Scott";
  }
}
```

The code above needs to be refactored in order to increase performance, and many people are considering using switch case statements. However, let me share one tricky technique to handle this type of code in order to take performance improvement into consideration.

You just need to create one object with key as a condition of if statement and value as return statement of if.

```js
const nameIdMap = {
  M57: "Harry",
  U11: "Prince",
  S57: "Jack",
  G46: "John",
  B93: "Scott",
};

function getNameById(id) {
    return nameIdMap[id];
}
```

The code above is more readable and flexible.

## Avoid bulky If Else block

Suppose you want to check user permissions based on roles and write code like this:

```js
function checkAccess(role) {
  if (
    role === "Admin" ||
    role === "Manager" ||
    role === "Director" ||
    role === "Owner"
  ) {
    return true;
  } else return false;
}
```

The above code will obviously work, but we can improve it by using array's method.

We will declare one array which contains all the accessible roles and apply includes() method of array.

```js
allowedAccess = ["Admin", "Manager", "Director", "Owner"];

function checkAccess(role) {
  return allowedAccess.includes(role);
}
```

## Avoid If Else Use Ternary Operator

We can sometimes reduce the number of lines of code by using the ternary operator.

Suppose you want to refactor this code with ternary operators. Here's a simple example.

```js
function checkResult(marks) {
  if (marks >= 50) {
    return "Pass";
  } else {
    return "Fail";
  }
}
```

We can re-write this code as:

```js
function checkResult(marks) {
  return marks >= 50 ? "Pass" : "Fail";
}
```

## Avoid If Else when return value is Boolean

Sometime our function return boolean values then in this can we don't need if else blocks.

```js
function isValid(value) {
  if (value >= 50) {
    return true;
  } else {
    return false;
  }
}
```

We can write code like this:

```js
function isValid(value) {
  return value >= 50;
}
```

## Conclusion

Any programming language must include decision constructs. However, we end up coding a huge number of nested if statements, making our code more complex and difficult to maintain.

In this post, we learned how to use effective design patterns to replace if statements.

> If you found this article useful, please share it with your friends and colleagues!❤️
