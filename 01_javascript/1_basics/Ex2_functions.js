"use strict";
window.toolbox = window.toolbox || {};

// Exercise 2. Function Functions
// Before you attempt these read Eloquent JavaScript's chapter "Higher Order Functions:"
// http://eloquentjavascript.net/05_higher_order.html

// JavaScript is a functional language. This means we can do with functions
// many of the things we can do with numbers, strings or arrays. We can assign
// functions to variables, pass functions as arguments to other functions and
// return functions from functions.
//
// Using functions inside other functions is confusing at first and gets easier
// with practice.

// Example getDoubler()
// This is a function that returns a function that takes a number n
// and returns n * 2.
// Note how we have two return statements in the code! Why is that?
// Try adding console.log() statements to find out.
// ex.
//  var doubler = getDoubler();
//  doubler(2) -> 4
// ex.
//  getDoubler()(2) -> 4
// ex.
//  getDoubler()(7) -> 14
// toolbox.getDoubler = function() {
//   // first return
//   return function(m) {
//     return m * 2; // second return
//   };
// };

// Exercise 2.1 getMultiplier(n)
// Write a function that takes a number n and returns a function that takes a
// number m and returns n * m.
// Your solution will probably look similar to getDoubler().
// ex.
//  var multiplyBy2 = getMultiplier(2);
//  multiplyBy2(3) -> 6
// ex.
//  getMultiplier(3)(4) -> 12
toolbox.getMultiplier = function(n) {
  return function(m) {
    return m * n;
  }


};

// Example once(f)
// This is a function that takes a function f and returns a function g.
// When you call g() it calls f() once and only once. No matter how many times you call
// g(), f() should only be called once.
// ex.
//  function log() {
//    console.log('called log');
//  }
//  var onceLog = once(log);
//  onceLog(); -> outputs 'called log' to console
//  onceLog(); -> does nothing
//  onceLog(); -> does nothing
toolbox.once = function(f) {
  let called = false; // Let's create a local variable to track if f has been called
  return function() {
    if (!called) {
      // if f hasn't been called yet
      f(); // call f
      called = true; // mark f as called
    }
  };
};

// Exercise 2.2 only(n, f)
// Write a function that takes a number n and a function f, and returns a function g.
// When you call g() it calls f() at most n times.
// So if n is 1, then this behaves exactly the same as once().
// Your solution will probably look similar to once().
// ex.
//  function log() {
//    console.log('called log');
//  }
//  let onlyLog = only(3, log);
//  onlyLog(); -> outputs 'called log' to console
//  onlyLog(); -> outputs 'called log' to console
//  onlyLog(); -> outputs 'called log' to console
//  onlyLog(); -> does nothing
//  onlyLog(); -> does nothing
toolbox.only = function(n, f) {
  let nCheck = 0;
  return function() {
    if (nCheck < n) {
      f();
      nCheck += 1;
    }

  };

};
