# React

Today you will be making your first big leap into developing more dynamic frontends. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”

There can be a bit of a steep learning curve when you start learning React, but don't let this discourage you! Proactively ask questions when you encounter things that don't make sense!

## Outline

1. React Intro
2. JSX
3. Rendering Elements
4. Components & Props
5. State & Lifecycle
6. Handling Events
7. Conditional Rendering
8. Lists & Keys
9. Forms
10. Lifting State Up
11. Composition vs. Inheritance
12. Tic-Tac-Toe Exercise

---

**[Note: The slides used in the videos can be found here](https://goo.gl/w7zRMr)**

## Section 1: React Intro

What is React and why do we use it?

TODO:

- **[Watch Video][intro]**

## Section 2: JSX

One of the unique features of React (as opposed to Angular and Vue) is JSX. JSX allows us to use the power of JavaScript to create dynamic HTML.

TODO:

- **[Watch Video][jsx]**

## Section 3: Rendering Elements

React is a very efficient view library because it only updates DOM elements that need to be changed rather than re-rendering the whole page.

TODO:

- **[Watch Video][rendering]**

## Section 4: Components & Props

React is a very efficient view library because it only updates DOM elements that need to be changed rather than re-rendering the whole page.

TODO:

- **[Watch Video][components]**
- [Open this CodePen][ex1]. Update the code so that the `<Welcome />` component uses another prop called `age` and displays `age` as part of the rendered HTML.
  - Example output: "Hello, Andre. You are 22."
- [Open this CodePen][ex2]. Currently there is a `<PetContainer />` component that shows all 4 of my pets. Unfortunately I had to repeat a lot of code in `<PetContainer />`. Your task is to create **ONE** new component and use it inside of `<PetContainer />` to reduce the code repition.
  - Hints:
    - The HTML output should look the same, you should just be making the code better.
    - Think of how your new component should use props to get data.
    - You should use your new component exactly 4 times in `<PetContainer />`.

## Section 5: State & Lifecycle

## Section 6: Handling Events

## Section 7: Conditional Rendering

## Section 8: Lists & Keys

## Section 9: Forms

## Section 10: Lifting State Up

## Section 11: Composition vs. Inheritance

## Section 12: Tic-Tac-Toe Exercise

[intro]: https://www.youtube.com/watch?v=d5n-XBpNhzI
[jsx]: https://www.youtube.com/watch?v=CoU7sK9_Joo
[rendering]: https://www.youtube.com/watch?v=jOMQ2Z0wH4A
[components]: https://www.youtube.com/watch?v=uHV8gXn3ljo
[ex1]: https://codepen.io/BitsofGood/pen/mzNrrL?&editors=0010
[ex2]: https://codepen.io/BitsofGood/pen/ZwNxBY?editors=0010


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