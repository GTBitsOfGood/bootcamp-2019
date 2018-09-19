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


function getInputAndCalc() {
  // Example code for getting input from the user
  var readline = require('readline');

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Number 1? ", function(n1) {
    rl.question("Number 2? ", function(n2) {
      console.log(parseFloat(n1) + parseFloat(n2));
      rl.close();
    });
  });
}

function sum(nums) {
  var tot = 0;
  for (var i = 0; i < nums.length; i++) {
    tot += parseFloat(nums[i]);
  }
  return tot;
}

if (process.argv.length === 2) {
  getInputAndCalc();
} else {
  console.log(sum(process.argv.slice(2)));
}
