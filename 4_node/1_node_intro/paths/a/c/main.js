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
fileContent = fs.writeFileSync('./countio/log.txt')
fs.appendFile('./countio/log.txt', new Date(), (err)=> {
    if (err) throw err;
})
five.logger(five.value)
