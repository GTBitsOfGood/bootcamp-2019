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
let needSum = process.argv.slice(2);
//console.log(needSum);

// Example code for getting input from the user

if(needSum.length == 0) {
  let readline = require('readline');

  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


  rl.question("Enter first number?", function(firstNumber) {
    r1.question("Enter second number?", function(secondNumber){
      needSum.push(firstNumber);
      needSum.push(secondNumber);
    });

    r1.close();




  });



}
let result = 0;

needSum.forEach(function(item){
  result += parseInt(item);
});
console.log(result);







