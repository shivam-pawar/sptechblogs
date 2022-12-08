---
slug: replaceAll-in-javascript
title: FIX - replaceAll() is not a Function In JavaScript
authors: shivam-pawar
tags: [JavaScript, node, alternative, programming]
---

## Why is this error occurring?

You will get error something like this: TypeError: replaceAll is not a function while using replaceAll() function because whatever version of node js or browser does not support this function.
<!--truncate-->
replaceAll method was added es2012 or es12 so if you are using ECMAScript version below 12 then definitely you will see this error as there is not implementation for replaceAll in earlier versions.

## How To Fix thee Issue?​

As a workaround for this problem, you can use replace() method with a regular expression that has the global (“g”) flag set which had a strong support for all ES version and browsers.

Lets try with an example:

Below example will replace all whitespaces(” “) with hyphen “-“.

```javascript
function testReplace(sentence) {
  return sentence.replace(/[" "]/g, "-");
}

console.log(testReplace("This is Test"));
```

## What if you need to use replaceAll() at multiple places?

Alternatively, You can create a function which will resemble the behavior of replaceAll() method.

Like in this example:

```javascript
function someFunction(blogName) {
  return replaceAll(blogName, /[" "]/g, "-");
}


function replaceAll(sentence, regx, replaceBy) {
  return sentence.replace(regx, replaceBy);
}

console.log(someFunction("This is my blog"));
```

Now you are good to use replaceAll() method anywhere but with different implementation. Note that we are passing 3 parameters to our replaceAll() method which is different than the actual replaceAll() method but both will give desired output.

## Conclusion

There is no implementation of replaceAll() present in version of ECMAScript12 that’s why we get this error. To fix this, we had a workaround which will use replace() method to do exact thing which replaceAll() does.

> If you found this article useful, please share it with your friends and colleagues!❤️

This article was originally published [here](https://dev.to/shivampawar/fix-replaceall-is-not-a-function-in-javascript-3klp)
