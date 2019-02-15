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


// // Example code for reading command line arguments:
// console.log('Command line arguments', process.argv.slice(2));

// // // Example code for getting input from the user
function sumArgs() {
    var readline = require('readline');


    var r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });


    r1.question("Enter 1st number. ", function(number1) {
        r1.question("Enter 2nd number. ", function(number2) {
            console.log(parseFloat(number1) + parseFloat(number2));
            r1.close();
        });
    });
}

function addUp(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += parseFloat(numbers[i]);
    }
    return total;
}

if (process.argv.length === 2) {
    sumArgs();
} else {
    console.log(addUp(process.argv.slice(2)))
}

