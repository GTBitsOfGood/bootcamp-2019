"use strict";

// Exercise 5. Libraries
// As you may have noticed we have been saving our functions into a global
// variable called 'toolbox'. A "global" variable is a variable that can be
// used by any code running on a page.
//
// This line at the beginning of other Exercise.js files initializes this
// global variable safely.  We place the variable under "window" because that
// variable represents the Browser Window shared by all JavaScript code.  This line
// creates the variable but only if it's missing:
window.toolbox = window.toolbox || {};

// Here's a more explicit way of saying the same thing:
if (!window.toolbox) {
  // things that are not defined are false-y
  window.toolbox = {}; // {} is short-hand for create new empty object
}

// What we have been doing is building a Library!
// A library is collection of useful functions and data. Functions defined in a
// library are designed to work well together.  By combining these functions
// with each other and with our code, we can solve new more complex problems
// without having to start from scratch. Learning how to combine basic building
// blocks into more complex structures is an essential skill in coding.
//
// Let's see what's in our library. Open up console in your Chrome
// Developer Tools and you will see a message "let's see what's in our toolbox
// ▶︎ Object {}".
// Click on "▶︎" to see everything inside "toolbox."
console.log("let's see what's in our toolbox:", toolbox);
// These are the functions we're going to use in this exercise.

// Example 5.1 countEven(n)
// Build using: toolbox.count() and toolbox.filter()
// Write a function that takes a non-negative integer n and
// returns an array counting even numbers up from 0 to n - 1.
// If n is 0, the function should return an empty array.
// ex. toolbox.countEven(0)  -> []
// ex. toolbox.countEven(1)  -> [0]
// ex. toolbox.countEven(10) -> [0, 2, 4, 6, 8]
toolbox.countEven = function(n) {
    function isEven(n) {
        return (num % 2) == 0;
    }
    let evenArray = [];
    evenArray = toolbox.filter(toolbox.count(n), isEven(n));
    return evenArray;
};

// Exercise 5.2 indexOf(array, item)
// Build using: toolbox.find()
// Write a function that takes an array and an item, returns the first index of
// the item in the array. If item is not found in array, return -1.
// ex. toolbox.indexOf([], 1) -> -1
// ex. toolbox.indexOf([1], 1) -> 0
// ex. toolbox.indexOf([2, 2, 1, 1], 1) -> 2
//
// See indexOf() from the underscore.js library:
// http://underscorejs.org/#indexOf
toolbox.indexOf = function(array, item) {
  // YOUR CODE HERE
};

// Exercise 5.3 lastIndexOf(array, fun)
// Build using: toolbox.find() array.reverse()
// Write a function that takes an array and an item, finds the last index of
// the item in the array.  If item is not found in array, return -1. Just like
// indexOf() but starts searching the array starting at the end of the array.
//
// You should use JavaScript's built-in array.reverse() function. You can call
// it on an array to reverse its contents.
// ex.
//  array = [1, 2, 3]
//  array.reverse()
//  console.log(array) -> outputs "[3, 2, 1]"
//
// Documentation on array.reverse():
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
//
// lastIndexOf() examples
// ex. toolbox.lastIndexOf([], 1) -> -1
// ex. toolbox.lastIndexOf([1, 1], 1) -> 1
// ex. toolbox.lastIndexOf([2, 2, 1, 1], 1) -> 3
//
// See lastIndexOf() from the underscore.js library:
// http://underscorejs.org/#lastIndexOf
toolbox.lastIndexOf = function(array, item) {
  // YOUR CODE HERE
};

// Exercise 5.4 negate(fun)
// Write a function that takes a function "fun" and returns a function "retFun"
// that is the opposite of "fun". That is to say, if "fun" returns true,
// "retFun" returns false and vice versa.
//
// "fun" can take 1 or 0 arguments. "retFun" should handle passing 1 or 0
// arguments into "fun".
//
// ex.
//  var isEven = function(n) {
//    return n % 2 == 0;
//  };
//  var isOdd = negate(isEven);
//  isEven(2) -> true
//  isOdd(2) -> false
//
// See negate() from the underscore.js library:
// http://underscorejs.org/#negate
toolbox.negate = function(fun) {
  // YOUR CODE HERE
};

// Exercise 5.5 reject(array, fun)
// Build using: toolbox.filter() toolbox.negate()
// Write a function that produces a new array of values by only including items
// where fn(item) is false (falsey). This function should do the opposite of
// toolbox.filter()
//
// ex.
//  function isEven(n) {
//    return (num % 2) == 0;
//  }
//  reject([2], isEven) -> []
//  reject([1, 2, 3, 4, 5, 6], isEven) -> [1, 3, 5]
// ex.
//  function isLong(string) {
//    return string.length > 8;
//  }
//  reject(['a', 'abc', 'abcdefghijk'], isLong) -> ['a', 'abc']
//
// See reject() from the underscore.js library:
// http://underscorejs.org/#reject
toolbox.reject = function(array, fun) {
  // YOUR CODE HERE
};

// Bonus Exercise! difference(array1, array2)
// Build using: toolbox.filter() (or toolbox.reject()) and toolbox.indexOf()
// Write a function that takes two arrays "array1" and "array2," and returns a
// new array with all items from "array1" that are NOT in "array2".
//
// ex. toolbox.difference([], []) -> []
// ex. toolbox.difference([1, 2, 3], [4]) -> [1, 2, 3]
// ex. toolbox.difference([1, 2, 3, 1], [3, 2, 1]) -> []
// ex. toolbox.difference([1, 2, 3, 4, 5], [5, 2, 10]) -> [1, 3, 4]
//
// See difference() from the underscore.js library:
// http://underscorejs.org/#difference
toolbox.difference = function(array1, array2) {
  // YOUR CODE HERE
};
