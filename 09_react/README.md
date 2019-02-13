# React

Today we will learn about React.

## What is React?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”

## Exercise 1: Controlled Form Fields

### Goal

The goal of this exercises is to use controlled form fields to tie the values of two text input fields together in React.

#### Instructions

1. [Open CodePen for this exercise.](https://codepen.io/BitsofGood/pen/VVvrGE?editors=1000#0)

2. There are two text input fields here. We want them to display the same data at all times, with one being all uppercase characters, and another being all lowercase characters. If you change one, the other one should change instantly.

3. Create a new function `change` inside the class. This function should take an `event` argument and update `this.state.text` using `this.setState` to `event.target.value`.

    ![](img/change.png)

4. Add the `onChange={(e) => this.change(e)}` event handler to both form fields.

5. Try changing input fields, they should update at the same time.

6. Now, modify input fields so that one shows uppercase characters whereas another one shows lowercase characters.


## Exercise 2: Fizz Buzz React Edition

### Goal

The goal of this exercise is to solve a very common  programming interview question using React.

### Instructions

FizzBuzz is a basic programming question asked in many interviews. It involves
printing an increasing sequence of numbers and if statements in React.

1. Open [this CodePen project](https://codepen.io/BitsofGood/pen/wQKPOa), fork it so you can save your work.

2. Make `<FizzBuzz />` display a bulleted list (`<ul>`) of `n` numbers (n is a prop).

3. If a given number is divisible by 3 paint it red (CSS `color: red`), if it's divisible by 2 paint it blue, if it's divisible by both 2 and 3 paint it purple. If a number neither divisible by 2 or 3, then display it in black.

4. Your solution should look like this:

    ![](img/codepen-fizz.png)

## Exercise 3: Component Lifecycle: Timer

### Goal

The goal of this exercise is to build a timer by using React
component lifecycle methods.

### Instructions

1. [Open CodePen for this exercise.](https://codepen.io/BitsofGood/pen/qQOVvy)

2. Implement the `update` function. This function should call `this.setState()` and update `this.state.secondsLeft` to be `(this.state.end - Date.now()) / 1000`.

3. Implement the `componentDidMount` function. Set `this.state.end` to be `this.props.mins` added to the current time, and use `setInterval()` to call `this.update` periodically.

    ![](img/setInterval.png)

4. Implement the `componentWillUnmount` function. Use `clearInterval()` to cancel the background update process.

5. There are two timers on the page, verify that they count down from 1 and 5 minutes respectively.

> Do not worry if the numbers go below zero!

## Exercise 4: Tic Tac Toe

For this exercise you will be making Tic Tac Toe in React!
[Click Here](tic-tac-toe/) to get started!