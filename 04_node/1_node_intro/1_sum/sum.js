// In this exercise we will build a command line utility for
// summing numbers.
//
// sum.js should take optional command line arguments, parse the
// arguments into numbers and return their sum. Use
// **`process.argv`** to read command line arguments.
//
// ex. node sum.js 1 2
// > 3
// ex. node sum.js 2 3 4 5
// > 14
// ex. node sum.js 2 -5 3
// > 0
//
// If no command line arguments are specified, you should ask the
// user for 2 numbers and print their sum.
//
// ex. node sum.js
// > Enter first number?
// > 1
// > Enter second number?
// > 4
// > 5
//

// Example code for reading command line arguments:
// console.log('Command line arguments', process.argv.slice(2));

let args = process.argv;
if (args.length > 2) {
  let list = args.slice(2);
  let sum = 0;
  list.forEach(e => {
    sum += Number(e);
  });
  console.log(sum);
} else {
  let readline = require('readline');
  let a = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });
  a.question("1st Number \n", (num1) => {
    a.question("2nd Number \n", (num2) => {
      let sum = Number(num1) + Number(num2);
      console.log(sum);
      a.close();
    });
  });
}

// Example code for getting input from the user
var readline = require("readline");

// Example code for getting input from the user
// let readline = require('readline');
//
// let rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// rl.question("Hi! What's your name? ", function(name) {
//   console.log('Nice to meet you', name);
//   rl.close();
// });
rl.question("Hi! What's your name? ", function(name) {
  console.log("Nice to meet you", name);
  rl.question("qu2", resp => console.log("ty", resp));
});
