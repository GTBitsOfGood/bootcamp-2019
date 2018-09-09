"use strict";

// There's syntax error in this function, use the DevTools Console to find it.
function functionThatReturnsTrue() {
  return true;
}

// This function should return the first word of a string but it doesn't work.
// Let's find the bug in it and fix it
//
// ex. firstWord('') -> ''
// ex. firstWord(' ') -> ''
// ex. firstWord(' abc') -> ''
// ex. firstWord('abcd') -> 'abcd'
// ex. firstWord('abc d') -> 'abc'
// ex. firstWord('abc d  e') -> 'abc'
function firstWord(string) {
  for (var i = 0; i < string.length; i++) {
    debugger;
    if (string[i] === ' ') {
      return string.substring(0, i);
    }
  }

  return string;
}
