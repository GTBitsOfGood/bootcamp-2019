"use strict";
window.toolbox = window.toolbox || {};
//hello
// Exercise 1. Arrays

// Open this file (Exercise1 arrays.js) in your favorite text editor.  Your solution
// code should go where it says YOUR CODE HERE.
// We recommend Visual Studio Code

// We can create empty arrays with []
const emptyArray = [];

// Or we can create arrays with stuff already in them
const array = [1, 4, 5];

// Items in arrays are numbered starting at 0, we can read the first item in an array like this
array[0];

// We can change things in arrays too. This will change the first item in the array to be 2.
array[0] = 2;

// We can add things to the end of an array with .push(item)
array.push(10);
array; // -> [2, 4, 5, 10]

// We can check how many items are stored in an array using .length
array.length; // -> outputs 4

// Let's write some functions that operate on arrays.
//
// 1.1 count(n)
// Write a function that takes a non-negative integer n and
// returns an array counting up from 0 to n - 1.
// If n is 0, the function should return an empty array.
//
// ex. count(0)  -> []
// ex. count(1)  -> [0]
// ex. count(10) -> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
toolbox.count = function(n) {
  // YOUR CODE HERE
  let num;
  let numArray = [];
  if (n != 0){
    for (num = 0; num < n; num++) {
        numArray[num] = num;
    }
    return numArray;
}
  else {
    return numArray;
  }
};

// 1.2 first(array)
// Write a function that takes an array and returns the first item of the
// array.
// ex. first([0]) -> 0
// ex. first([1, 2, 3]) -> 1
// ex. first(['a', 'b', 'c']) -> 'a'
toolbox.first = function(array) {
  // YOUR CODE HERE
  return array[0];
};

// 1.3 last(array)
// Write a function that takes an array and returns the last item of the
// array.
// ex. last([0]) -> 0
// ex. last([1, 2, 3]) -> 3
// ex. last(['a', 'b', 'c']) -> 'c'
toolbox.last = function(array) {
  // YOUR CODE HERE
  return array[array.length-1];
};

// 1.4 repeat(n, array)
// Write a function that takes a non-negative integer n and an array and returns a new
// array that contains the contents of given array repeated n times.
// ex. repeat(0, [1]) -> []
// ex. repeat(10, []) -> []
// ex. repeat(1, [1, 2, 3]) -> [1, 2, 3]
// ex. repeat(3, [1, 2, 3]) -> [1, 2, 3, 1, 2, 3, 1, 2, 3]
toolbox.repeat = function(n, array) {
  // YOUR CODE HERE
  let newArray = [];
  let count;
  let counter2;
  for (count = 0; count < n; count++){
    for (counter2 = 0; counter2 < array.length; counter2++){
        newArray.push(array[counter2]);
    }
  }
  return newArray;
};

// 1.5 reverse(array)
// Write a function that takes an array and returns that array with it's elements reversed.
// ex. reverse([]) -> []
// ex. reverse([1]) -> [1]
// ex. reverse([1, 2, 3]) -> [3, 2, 1]
toolbox.reverse = function(array) {
  // YOUR CODE HERE
  let newArray = [];
  let count;
  for (count = 0; count < array.length; count++) {
    newArray.push(array[array.length - 1 - count]);
}
  return newArray;
};

// Strings represent text. They behave a lot like arrays of letters. You can
// read the first letter of a string:
const string = "hello";
string[0]; // -> "h" (arrays start counting at 0)

// You can check how long a string is
string.length; // -> 5

// So you can even use functions that operate on arrays on strings:
toolbox.first(string); // -> also "h"
toolbox.last(string); // -> also "o"

// Unlike arrays, strings CANNOT be changed. Once created, they stay the same.
// string[0] = 'x'; // generates error!
string[0]; // still "h"

// Strings come with useful built-in functions (sometimes called methods).

// Built-in function: string.slice(start, end)
// Returns a slice of the array starting at "start" (inclusive) ending at "end" (exclusive)
"hello".slice(0, 0); // -> ""
"hello".slice(0, 1); // -> "h"
"hello".slice(1, 3); // -> "el"

// 1.6 firstN(string, n)
// Write a function using .substring that takes a string and a number "n", and
// returns the first n letters in the string.
// ex. firstN("hello", 0) -> ""
// ex. firstN("hello", 2) -> "he"
toolbox.firstN = function(string, n) {
  // YOUR CODE HERE
  return string.substring(0,n);
};

// 1.7 lastN(string, n)
// Like firstN() but returns the last "n" letters in string instead.
// You can use substring for this too.
// ex. lastN("hello", 0) -> ""
// ex. lastN("hello", 2) -> "lo"
toolbox.lastN = function(string, n) {
  // YOUR CODE HERE
  return string.substring(string.length-n,string.length);
};

// Built-in function: string.indexOf(substring)
// Returns the index of (the position of) the first occurrence of substring in string.
// Returns -1 if substring is not found. It's case sensitive.
"hello".indexOf("x"); // -> -1 (not found)
"hello".indexOf("h"); // -> 0
"hello".indexOf("hx"); // -> -1 (not found)
"hello".indexOf("l"); // -> 2 (index of first l)
"hello".indexOf("lo"); // -> 3
"hello".indexOf("H"); // -> -1 (case sensitive)

// 1.8 startsWith(string, substring)
// Write a function that takes a string and a substring and returns true if
// string starts with substring.
// You can use string.indexOf()
//
// ex. startsWith("hello", "") -> true
// ex. startsWith("hello", "h") -> true
// ex. startsWith("hello", "hello") -> true
// ex. startsWith("hello", "hellos") -> false
// ex. startsWith("hello", "e") -> false
// ex. startsWith("hello", "x") -> false
toolbox.startsWith = function(string, substring) {
  // YOUR CODE HERE
  return string.substring(0,substring.length)===substring;
};

// Built-in function: string.split(separator)
// Split the string into an array of strings using separator.
"hello world".split(" "); // -> ["hello", "world"]
"hello world".split("l"); // -> ["he", "", "o wor", "d"]
"a, b,c,d".split(","); // -> ["a", " b", "c", "d"]

// Built-in function: array.join(separator)
// Join an array into a string by putting separator between items.
[].join(" "); // -> ""
[1].join(" "); // -> "1"
[1, 2].join(" "); // -> "1 2"

// 1.9 replaceAll(string, substring, newSubstring)
// Write a function that replaces all instances of substring with newSubstring.
// ex. replaceAll("hello world", "hello", "goodbye") -> "goodbye world"
// ex. replaceAll("hello", "l", "x") -> "hexxo"
toolbox.replaceAll = function(string, substring, newSubstring) {
  // YOUR CODE HERE
  return string.split(substring).join(newSubstring);
};
