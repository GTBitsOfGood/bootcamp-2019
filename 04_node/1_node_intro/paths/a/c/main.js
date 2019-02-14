// Modify only this file

// The code below runs the functions exported by five.js
// five.js sits in the same directory so './five.js' is 
// my relative path from main.js (current file)

//var five = require('./five.js')
//five.logger(five.value);
let four = require('C:/Users/dheer/Documents/bootcamp/04_node/1_node_intro/paths/a/c/four.js');

let one = require('C:/Users/dheer/Documents/bootcamp/04_node/1_node_intro/paths/b/one.js');
one.first(one.value);
one.second(one.value);

let two = require('C:/Users/dheer/Documents/bootcamp/04_node/1_node_intro/paths/a/two.js');
two.twoFunc(two.value);

let three = require('C:/Users/dheer/Documents/bootcamp/04_node/1_node_intro/paths/b/three.js');
three.logger(four.horizons);





// Output should look like
//     *
//    *
//   *
//  *