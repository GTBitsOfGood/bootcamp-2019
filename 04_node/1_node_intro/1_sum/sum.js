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
// console.log('Command line arguments', process.argv.slice(2))

// Example code for getting input from the user

// 'use strict'

let readline = require('readline')

if (process.argv.length > 2) {
  let sum = 0
  for (let i = 2; i < process.argv.length; i++) {
    sum += parseInt(process.argv[i])
  }
  console.log(sum)
}

else {
  let sum = 0
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const question1 = () => {
    return new Promise((resolve, reject) => {
      rl.question('Enter first number: ', (num1) => {
        sum = parseInt(num1)
        resolve()
      })
    })
  }

  const question2 = () => {
    return new Promise((resolve, reject) => {
      rl.question('Enter second number: ', (num2) => {
        sum += parseInt(num2)
        resolve()
      })
    })
  }

  const prompts = async() => {
    await question1()
    await question2()
    rl.close()
    console.log(sum)
  }

  prompts()
}