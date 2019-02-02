"use strict";
window.toolbox = window.toolbox || {};

// Exercise 3. Arrays and Function Functions
// Now that we know how to use Arrays and Functions Functions, let's try using
// them at the same time.

// Example 3.1 sum(array)
// This is a function that takes an array of numbers and returns the sum of
// those numbers.
//
// Notice the call to forEach().  forEach() is a more concise alternative to
// using regular for-loops for stepping through all items in an array.  We call
// forEach **on** an array array using the dot notation.
// (Functions that are called on things are also known as methods.)
//
// ex.
//  [].forEach();
//
// forEach() is a function that takes a function as its argument. By now,
// you're familiar with this concept. forEach() will call this function for
// each item of the array. When forEach calls this function, it will pass in
// the item as the first argument and the index of the item as the second
// argument.
//
//
// ex.
//  for (let index = 0; index < array.length; index++) {
//    let item = array[index];
//    // your code here
//  }
//  Becomes
//  array.forEach(function(item, index) {
//    // your code here
//  });
//
//
// More info on forEach():
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//
// ex.
//  sum([]) -> 0
// ex.
//  sum([1]) -> 1
// ex.
//  sum([1, 2, -3]) -> 0
toolbox.sum = function(array) {
  /*
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
  */
  let sum = 0;
  array.forEach(function(element) {
    sum+=element;
  });
  return sum;

};

// Exercise 3.2 product(array)
// Write a function that takes an array of numbers and returns the product of
// those numbers.
//
// You should use forEach() to iterate over the items of the array like in sum().
//
// ex.
//  product([]) -> 1
// ex.
//  product([2]) -> 2
// ex.
//  product([2, 0]) -> 0
// ex.
//  product([2, -3]) -> -6
toolbox.product = function(array) {
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    product *= array[i];
  }
  return product;
};

// Example 3.3 transform(array, fn)
// This function produces a new array of values by calling fn with each item in given array.
//
// ex.
//  function double(n) {
//    return n * 2;
//  }
//  transform([1, 2], double) -> [2, 4]
// ex. same as above, but more concise
//  transform([1, 2], function(n) { return n * 2; }) -> [2, 4]
toolbox.transform = function(array, fn) {
  for (let i = 0; i < array.length; i++) {
    array[i] = fn(array[i]);
  }
  return array;
};

// Exercise 3.4 filter(array, fn)
// Write a function that produces a new array of values by only including items
// where fn(item) is true (thruthy).
//
// ex.
//  function isEven(n) {
//    return (num % 2) == 0;
//  }
//  filter([1, 2, 3, 4, 5, 6], isEven) -> [2, 4, 6]
// ex.
//  function isLong(string) {
//    return string.length > 8;
//  }
//  filter(['a', 'abc', 'abcdefghijk'], isLong) -> ['abcdefghijk']
toolbox.filter = function(array, fn) {
  let newArray = [];
  array.forEach(function(element) {
    if (fn(element)) newArray.push(element);
  });
  return newArray;
};

// Exercise 3.5 every(array, fn)
// Write a function that returns true only if for all of the items in array
// fn(item) is true (truthy).
//
// If you have difficulty using Array.forEach() here, it's ok to use a regular
// for loop.
//
// ex.
//  function isEven(n) {
//    return (num % 2) == 0;
//  }
//  every([], isEven) -> true
//  every([2, 4], isEven) -> true
//  every([1, 2, 3, 4, 5, 6], isEven) -> false
// ex.
//  function isLong(string) {
//    return string.length > 8;
//  }
//  every([], isLong) -> true
//  every(['abcdefghijk'], isLong) -> true
//  every(['a', 'abc', 'abcdefghijk'], isLong) -> false
toolbox.every = function(array, fn) {
  for (let i = 0; i < array.length; i++) {
    if (!fn(array[i])) return false;
  }
  return true;
};

// Exercise 3.6 find(array, fn)
// Write a function that returns the index of the first item in array that
// returns true (truthy) for fn(item). If item is not found, function should
// return -1.
//
// If you have difficulty using Array.forEach() here, it's ok to use a regular
// for loop.
//
// ex.
//  function isEven(n) {
//    return (n % 2) == 0;
//  }
//  find([], isEven) -> -1
//  find([2, 4], isEven) -> 0
//  find([1, 3, 5], isEven) -> -1
//  find([1, 2, 3, 4, 5, 6], isEven) -> 1
toolbox.find = function(array, fn) {
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) return i;
  }
  return -1;
};

// Bonus Exercise! zip(array1, array2)
// Implement the zip() function from the underscore library: http://underscorejs.org/#zip
// "Merges together the values of array1 and array2 with the values at
// the corresponding position."
//
// ex.
//  zip(['moe', 'larry', 'curly'], [30, 40, 50]) ->
//    [["moe", 30], ["larry", 40], ["curly", 50]]
toolbox.zip = function(array1, array2) {
  let myArray = [];
  for (let i = 0; i < array1.length; i++) {
    myArray.push([array1[i], array2[i]]);
  }
  return myArray;
};
