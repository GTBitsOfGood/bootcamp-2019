// Modify only this file

// The code below runs the functions exported by five.js
// five.js sits in the same directory so './five.js' is 
// my relative path from main.js (current file)

let one = require('../../b/one');
let two = require('../two');
let three = require('../../b/three');
let four = require('./four.js');
let five = require('./five.js');
one.first();
one.second();
two.twoFunc();
three.logger(four.horizons);
five.logger(five.value);

// YOUR CODE HERE

// Output should look like
//     *
//    *
//   *
//  *