// Modify only this file

// The code below runs the functions exported by five.js
// five.js sits in the same directory so './five.js' is
// my relative path from main.js (current file)

// var five = require('./five.js')
// five.logger(five.value);

// YOUR CODE HERE
let obj1 = require('C:/Users/alimi/OneDrive/Desktop/Bits of Good/bootcamp/04_node/1_node_intro/paths/b/one.js');
obj1.first();
obj1.second();
let obj2 = require('C:/Users/alimi/OneDrive/Desktop/Bits of Good/bootcamp/04_node/1_node_intro/paths/a/two.js');
obj2.twoFunc();
let obj3 = require('C:/Users/alimi/OneDrive/Desktop/Bits of Good/bootcamp/04_node/1_node_intro/paths/b/three.js');
let obj4 = require('C:/Users/alimi/OneDrive/Desktop/Bits of Good/bootcamp/04_node/1_node_intro/paths/a/c/four.js');
obj3.logger(obj4.horizons);
// Output should look like
//     *
//    *
//   *
//  *
