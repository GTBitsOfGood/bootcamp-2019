// Modify only this file

// The code below runs the functions exported by five.js
// five.js sits in the same directory so './five.js' is 
// my relative path from main.js (current file)

// var five = require('./five.js')
// five.logger(five.value);

var one = require('./one.js');
one.logger(one.value);
var two = require('../a/two.js');
two.logger(two.value);
var three = require('../b/three.js');
var four = require('./four.js');
three.logger(four.value);

// Output should look like
//     *
//    *
//   *
//  *