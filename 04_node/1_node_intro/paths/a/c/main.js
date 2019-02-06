// Modify only this file

// The code below runs the functions exported by five.js
// five.js sits in the same directory so './five.js' is
// my relative path from main.js (current file)

 //var five = require('./five.js')
 //five.logger(five.value);

// YOUR CODE HERE
var one = require(__dirname, "./one.js");
var two = require(__dirname, "./two.js");
var three = require(__dirname,"./three.js");
var four = require('./four.js');
four.logger(four.value);
one.logger(one.value);
two.logger(two.value);
three.logger(three.value);

// Output should look like
//     *
//    *
//   *
//  *