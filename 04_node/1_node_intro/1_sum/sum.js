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
//console.log('Command line arguments', process.argv.slice(2));

// Example code for getting input from the user
var readline = require('readline');

/* var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Hi! What's your name? ", function(name) {
  console.log('Nice to meet you', name, '!');
  rl.close();
}); */

let r2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = process.argv.slice(2);

function doSum2(number1, number2) {
  let sum = parseInt(number1) + parseInt(number2);
  console.log('The sum of ' + number1 + ' and ' + number2 + ' is', sum);
}

function doSum(number) {
  console.log('The sum of two numbers is', number);
}

if (arr.length !== 0) {
  doSum2(arr[0], arr[1]);
  r2.close();
} else {
  r2.question('Enter the first number: ', function (x) {
    r2.question('Enter the second number: ', function (y) {
        let sum = parseInt(x) + parseInt(y);
        
        doSum(sum);

        r2.close();
    });
  });
}
