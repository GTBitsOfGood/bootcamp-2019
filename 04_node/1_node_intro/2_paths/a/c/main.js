// Modify only this file

// The code below runs the functions exported by five.js
// five.js sits in the same directory so './five.js' is
// my relative path from main.js (current file)

// var five = require('./five.js')
// five.logger(five.value);

// YOUR CODE HERE
const one = require('../../b/one.js')
const two = require('../two.js')
const three = require('../../b/three.js')
const four = require('./four.js')

one.first();
one.second();
two.twoFunc();
three.logger(four.horizons);


// Output should look like
//     *
//    *
//   *
//  *
