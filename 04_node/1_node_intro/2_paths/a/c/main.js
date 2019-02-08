// Modify only this file

// The code below runs the functions exported by five.js
// five.js sits in the same directory so './five.js' is 
// my relative path from main.js (current file)

// let five = require('./five.js')
// five.logger(five.value);

let one = require('./one.js');
one.logger(one.value);
let two = require('../a/two.js');
two.logger(two.value);
let three = require('../b/three.js');
let four = require('./four.js');
three.logger(four.value);

// Output should look like
//     *
//    *
//   *
//  *