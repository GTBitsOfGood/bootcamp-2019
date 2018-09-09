"use strict";

window.varArgs = {};

// Exercise 0.A varArgs.numArgs(args...)
// Write a function that takes any number of arguments and returns the number
// of arguments you gave it.
// This is done for you, give it a look-see.
// ex. varArgs.numArgs(1, 5, 'a', { 'x': 13}) -> 4
// ex. varArgs.numArgs(1, 8) -> 2
// ex. varArgs.numArgs() -> 0
//
// Try to insert, pop or push another 'argument' inside the function into the
// list of arguements. What happens?
// Hint: see <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments>
// for details about the `arguments` data structure.
varArgs.numArgs = function() {
  return arguments.length;
};

// Exercise 0.B varArgs.numArgs(args...)
// Write a function that creates a user object. It takes a name and age and
// returns it as an object with keys 'name' and keys 'age' to the respective arguments.

// We've done this for you, check it out.
// ex. varArgs.makeUser('Rex',34) -> { 'name' : 'Rex', 'age' : 34 }
// ex. varArgs.makeUser('Bob') -> { 'name': 'Bob', 'age' : 12 }
// ex. varArgs.makeUser() -> { 'name': 'John Doe', 'age' : 24 }
//
// Look at test case 2 and 3. Huh? Describe what's happening there.
varArgs.makeUser = function(name, age) {
  // Lookie here
  if (arguments.length == 1) {
    // args are sequential so if 1 arg was given, that means only the first (name) was given
    age = 12;
  } else if (arguments.length === 0) {
    // didn't give it anything, man.
    name = "John Doe";
    age = 24;
  }
  return { 'name': name, 'age': age };
};

// Exercise 1. varArgs.sum(args...)
// Write a function that takes any number of integers as arguments and computes their sum.

// ex. varArgs.sum() -> 0
// ex. varArgs.sum(1) -> 1
// ex. varArgs.sum(1, 2, 4) -> 7
// ex. varArgs.sum(1, -2, 4) -> 3
varArgs.sum = function() {
  // TODO: YOUR CODE HERE
};

// Exercise 2. varArgs.product(args...)
// Write a function that takes any number of integers as arguments and computes their product.

// ex. varArgs.product(1) -> 1
// ex. varArgs.product(1, 2, 4) -> 8
// ex. varArgs.product(1, -2, 4) -> -8
// ex. varArgs.product() -> 1
varArgs.product = function() {
  // TODO: YOUR CODE HERE
};

// Exercise 3. varArgs.joinWith(args...)
// Write a function that takes a delimiter as the first argument and any number of
// strings for the rest of the arguments, and joins the distinct strings together
// in order with the delimiter in between.

// ex. varArgs.joinWith(',') -> ''
// ex. varArgs.joinWith(',', 'a', 'b') -> 'a,b'
// ex. varArgs.joinWith('.', '192', '168', '1', '1') -> '192.168.1.1'
varArgs.joinWith = function() {
  // TODO: YOUR CODE HERE
};
