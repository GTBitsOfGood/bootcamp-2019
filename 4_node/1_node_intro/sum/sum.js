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

//Example code for reading command line arguments:
console.log('Command line arguments', process.argv.slice(2));

// Example code for getting input from the user
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

if (process.argv.slice(2).length == 0) {
	let first = 0;
	let second = 0;
	r1.question("Enter first number? ", firstNum => {
		first = firstNum;
	})
	r1.question("Enter second number? ", secondNum => {
		second = secondNum;
	})
	console.log(+first + second);
	r1.close();

}
rl.question("Hi! What's your name? ", function(name) {
  console.log('Nice to meet you', name);
  rl.close();
});
let num = 0
for (let i = 2; i <process.argv.length;i++) {
	num += +process.argv[i]
}
console.log(num)
