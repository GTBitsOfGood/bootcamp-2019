// Modify only this file

// The code below runs the functions exported by five.js
// five.js sits in the same directory so './five.js' is 
// my relative path from main.js (current file)

// var five = require('./five.js')
// five.logger(five.value);

// YOUR CODE HERE

// Output should look like
//     *
//    *
//   *
//  *
let five = require('./five.js')
let fs = require('fs')
let fileContent = fs.readFileSync('./main.js', 'utf8')
console.log(fileContent)
fs.writeFileSync('./main.js', 'console.log("AHHH")')
five.logger(five.value)
