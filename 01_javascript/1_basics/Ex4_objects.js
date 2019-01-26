"use strict";
window.toolbox = window.toolbox || {};

// Exercise 4. Objects

// Objects are a way of grouping useful data and functions in JavaScript.
// Everything stored in an object has a "key" associated with it. We can
// quickly read and update things stored in objects using this key.

// You can create new objects with {}
toolbox.emptyObject = {};
// New objects start with nothing in them
console.log("Empty object", toolbox.emptyObject);
// We can also create objects that have something inside them from the start
toolbox.object = { something: 10 };
console.log("Object with something inside it", toolbox.object);

// We can read things inside objects using dot notation:
console.log(
  "The value stored inside the object is (dot notation)",
  toolbox.object.something
);

// We can also read things inside objects using bracket notation, like we do with arrays
console.log(
  "The value stored inside the object is (bracket notation)",
  toolbox.object["something"]
);
// Note how we put quotes around "something" when we use bracket notation. Take
// a moment to think about why this is necessary.

// We can use both dot notation and bracket notation to put new things inside
// an object or change things that are already there
toolbox.object.something = 11;
toolbox.object["something"] = 12;

// Let's write some functions that operate on objects.

// Example keys(object)
// This is a function that takes an object and returns an array containing all
// the keys in the object. Everything stored in the object has a "key" that's
// the name that it's stored under.
// ex. toolbox.keys({}) -> []
// ex. toolbox.keys({a: 1}) -> ["a"]
// ex. toolbox.keys({a: 1, b: 1}) -> ["a", "b"]
toolbox.keys = function(object) {
  const returnArray = [];
  for (let key in object) {
    // a for-in loop lets us iterate over keys in objects
    // but for-in loops can generate keys that don't belong to our object.
    // object.hasOwnProperty(key) will only be true if key belongs to our object.
    // we use that to filter out keys that don't belong.
    // You should always include a hasOwnProperty() check when you use a for-in loop.
    if (object.hasOwnProperty(key)) {
      returnArray.push(key);
    }
  }
  return returnArray;
};

// Exercise 4.1 values(object)
// Write a function that takes an object and returns an array containing all
// the values in the object. These are the values that keys in the object map
// to.
// ex. toolbox.values({}) -> []
// ex. toolbox.values({a: 1}) -> [1]
// ex. toolbox.values({a: 1, b: 1}) -> [1, 1]
// ex. toolbox.values({a: 1, b: 1, c: 2}) -> [1, 1, 2]
toolbox.values = function(object) {
  // YOUR CODE HERE
  const temp = [];
  for (let key in object) {
    if(object.hasOwnProperty(key)) {
      temp.push(object[key])
    }
  }
  return temp;
};

// Exercise 4.2 pairs(object)
// Write a function that takes an object and returns an array containing all
// the key-value pairs in the object. Each pair should be represented as
// an array.
// ex. toolbox.values({}) -> []
// ex. toolbox.values({a: 1}) -> [[a, 1]]
// ex. toolbox.values({a: 1, b: 1}) -> [[a, 1], [b, 1]]
// ex. toolbox.values({a: 1, b: 1, c: 2}) -> [[a, 1], [b, 1], [c, 2]]
toolbox.pairs = function(object) {
  const temp =[];
  for(let key in object) {
    if(object.hasOwnProperty(key)) {
      temp.push([key, object[key]]);
    }
  }
  return temp;
  // YOUR CODE HERE
};

// Example 4.3 filterKey(object, fun)
// Write a function that takes an object and a function "fun" and returns a new
// object that only contains keys where fun(key) is true.
// Like toolbox.filter() but for objects instead of arrays.
// ex.
//  function startsWithA(string) {
//    return string.indexOf('a') === 0;
//  }
//  filterKey({aa: 1, ab: 2, ba: 3}, startsWithA) -> {aa: 1, ab: 2}
toolbox.filterKey = function(object, fun) {
  // YOUR CODE HERE
  const temp = {};
  for(let key in object) {
    if (fun(key)) {
      temp[key] = object[key];
    }
  }
  return temp;
};

// Exercise 4.4 pick(object, keysArray)
// Build using: toolbox.filterKey()
// Write a function that takes an object and an array of keys and returns a new object
// that only contains keys listed in the key array. Useful for
// ex. pick({}, []) -> {}
// ex. pick({a: 1}, []) -> {}
// ex. pick({a: 1}, ['b']) -> {}
// ex. pick({a: 1}, ['a', 'b']) -> {a: 1}
// ex. pick({a: 1, b: 2}, ['a', 'b']) -> {a: 1, b: 2}
toolbox.pick = function(object, keysArray) {
  // YOUR CODE HERE
  const temp = {};
  for(let key in object) {
    if (keysArray.indexOf(key) != -1) {
      temp[key] = object[key];
    }
  }
  return temp;
};

// Bonus Exercise 4.5! toolbox.propertyOf(object)
// Write a function that takes an object and returns a function "returnFunction."
// When you call returnFunction with a key, it will return the value of that
// key in object.
// From underscore.js:
// http://underscorejs.org/#propertyOf
// ex.
//  let propertyGetter = toolbox.propertyOf({a: 1, b: 2})
//  propertyGetter('a') -> 1
//  propertyGetter('b') -> 2
// ex. toolbox.propertyOf({a: 1})('a') -> 1
toolbox.propertyOf = function(object) {
  return function(key) {
    return object[key];
  }
  // YOUR CODE HERE
};
