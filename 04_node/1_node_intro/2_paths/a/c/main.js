// Modify only this file

// The code below runs the functions exported by five.js
// five.js sits in the same directory so './five.js' is 
// my relative path from main.js (current file)

// let five = require('./five.js')
// five.logger(five.value);

let one = require('../../b/one.js');
one.first(one.value);
one.second(one.value);
let two = require('../two');
two.twoFunc(two.value);
let three = require('../../b/three.js');
let four = require('./four.js');
three.logger(four.horizons);

// Output should look like
//     *
//    *
//   *
//  *