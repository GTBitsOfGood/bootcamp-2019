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

let numbers = process.argv.slice(2);
if (numbers.length == 0) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question("Please enter the first number :", (answer1) => {
    rl.question("Please enter the second number :", (answer2) => {
        let sum = (+answer1) + (+answer2);
        console.log("Sum = " + sum);
        rl.close();
    });
  });
} else {
  let sum = 0;
  numbers.forEach(function(element) {
    sum+=parseFloat(element);
  });
  console.log("Sum = " + sum);
}


// Example code for reading command line arguments:
/*
console.log('Command line arguments', process.argv.slice(2));

// Example code for getting input from the user
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Hi! What's your name? ", function(name) {
  console.log('Nice to meet you', name);
  rl.close();
});
*/
