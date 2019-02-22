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

// Example code for getting input from the user
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let sum = 0;
if (process.argv.length-2 === 0) {
  let num1 = 0;
  let num2 = 0;
  rl.question("Enter first number? ", function(num) {
    num1 = parseInt(num);
    rl.question("Enter second number? ", function(num) {
      num2 = parseInt(num);
      sum = num1 + num2;
      console.log('the sum is ' + sum);
      rl.close();
    });
  });
} else {
  for (let i = 2; i < process.argv.length; i++) {
    sum += process.argv[i];
  };
};
