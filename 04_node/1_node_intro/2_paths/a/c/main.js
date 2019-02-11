// Modify only this file

// The code below runs the functions exported by five.js
// five.js sits in the same directory so './five.js' is 
// my relative path from main.js (current file)

var five = require('./five.js')
five.logger(five.value);
const one = require('../../b/one.js')
one.first();
one.second();
const two = require('../two.js')
two.twoFunc();
const three = require('../../b/three.js')
three.logger('*');

// Output should look like
//     *
//    *
//   *
//  *