# Inline Exercise: Command Line Sum

## Time Limit: 10 minutes

## Instructions

The goal of this exercise to implement your very own command line
tool `sum.js`

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
  
- If no command line arguments are specified, you should ask the
  user for 2 numbers and print their sum.

  ```bash
  node sum.js
  > Enter first number?
  > 1
  > Enter second number?
  > 4
  > 5
  ```

