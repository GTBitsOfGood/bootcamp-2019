# Node Introduction

Today we will take the first step to building backend servers! In order to accomplish this feat we will first focus on being able to run javascript outside the web browsers.

This day focusses on NodeJS a popular web technology that lets you run javascript without firing up a browser.


## Contents

1. Section 1: Introduction to NodeJS
2. Section 2. Builtin `global` and `process` objects
3. Section 3. Builtin `require` keyword
4. Section 4. File Input/Output

---

## Section 1: Introduction to NodeJS

1. [Install NodeJS](https://nodejs.org/en/)
2. Run the following code snippet using node.

    When you are successful you will see the text "Hello NodeJS" in your terminal window.

    ```bash
        $ node
        > console.log("Hello NodeJS");
        > Hello NodeJS  <- expected output
    ```

---

## Section 2. Builtin `global` and `process` objects

The goal of this exercise to implement your very own command line
tool `sum/sum.js`

- `sum.js` should take optional command line arguments, parse the
  arguments into numbers and return their sum. Use
  **`process.argv`** to read command line arguments.

  ```bash
  node sum.js 1 2
  > 3
  node sum.js 2 3 4 5
  > 14
  node sum.js 2 -5 3
  > 0
  ```

Bonus:

- If no command line arguments are specified, you should ask the user for 2 numbers and print their sum.

  ```bash
  node sum.js
  > Enter first number?
  > 1
  > Enter second number?
  > 4
  > 5
  ```

[Reading input from terminal](https://nodejs.org/api/readline.html#readline_readline)

```javascript
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
```

---

## Section 3. Builtin `require` keyword

Using `module.exports`, `require`, and your knowledge of relative paths run the functions in the functions across in ascending numeric order. You are only allowed to modify `/4_node/1_node_intro/paths/a/c/main.js` and you are not allowed to type `console.log`. You also should not move any folders around.

1. Navigate to `/4_node/1_node_intro/paths`: This is the folder you will be working in
2. Look through the folder structure to identify where the scripts `main.js`, `one.js`, `two.js`, `three.js`, and `four.js` are located.
3. Modify only `main.js` so that you run all the functions in `one.js`, then the function in `two.js`, and finally the function in `three.js` with the first argument as value exported by `four.js` under the key `horizons`. The output should be a diagonal line.
4. Note: the example code in `main.js` uses `five.js` to help illustrate the directions.

---

## Section 4. File Input/Output

Using `process.argv`, and your knowledge of `fs` modify `main.js` in the `countio` folder so that it supports the following:

1. running the `/4_node/1_node_intro/countio/main.js` script adds a line to the `/4_node/1_node_intro/countio/log.txt` file with a timestamp for the current time.
2. running `main.js -s` or `main.js --stats` returns the total number of times the `main.js` program has been run along with the first and last time it was run. Note: running with `-s` or `--stats` flag should not add a timestamp or increment any counters. 

3. Navigate to `/4_node/1_node_intro/countio`: This is the folder you will be working in

