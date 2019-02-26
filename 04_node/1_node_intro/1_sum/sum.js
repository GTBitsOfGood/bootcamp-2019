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

let cmdArgs = process.argv;
if (cmdArgs.length > 2) {
  let numList = cmdArgs.slice(2);
  let sum = 0;
  numList.forEach(e => {
  sum = sum + Number (e);
});
  console.log(sum);
} else {
  let readLine1 = require('readline');
  let r2 = readLine1.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  r2.question("Enter first number: \n", function(num1) {
    r2.question("Enter second number: \n", function(num2) {
    let sum = Number (num1) + Number (num2);
    console.log(sum);
    r2.close();
  });
  });
}
