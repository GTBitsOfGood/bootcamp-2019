# React

Today you will be making your first big leap into developing more dynamic frontends. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”

There can be a bit of a steep learning curve when you start learning React, but don't let this discourage you! Proactively ask questions when you encounter things that don't make sense!

For all the exercises today we will be using CodePen to run our React Code. Next time we will teach you how to run React projets from your terminal.

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

What is React anyways and why do we use it?

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

State is an integral part of dynamic frontends and React, Angular, and Vue all have slightly different ways of handling state. Another key idea is the component lifecycle. React gives us many lifecycle hooks we can plug into to create more dynamic experiences.

TODO:

- **[Watch Video][state]**
- [Open this CodePen][ex3]. The `<Clock />` component is currently defined as a functional component. Convert `<Clock />` to be defined as a class component.
- [Open this CodePen][ex4]. The goal here is to build a timer using React component lifecycle methods.
  1. Implement the `update` function. This function should call `this.setState()` and update `this.state.secondsLeft` to be `(this.state.end - Date.now()) / 1000`.
  2. Implement the `componentDidMount` function. Set `this.state.end` to be `this.props.mins` added to the current time, and use `setInterval()` to call `this.update` periodically.
    ![component did mount hint](img/setInterval.png)
  3. Implement the `componentWillUnmount` function. Use `clearInterval()` to cancel the background update process.
  4. There are two timers on the page, verify that they count down from 1 and 5 minutes respectively.
       - Don't worry if the timers go below zero!

## Section 6: Handling Events

Web application wouldn't be very interesting if we had no way to handle user interactions. We do this using "events". In React, we leverage the power of JavaScript to handle events.

TODO:

- **[Watch Video][events]**
- [Open this CodePen][ex5]. The goal here is to build a basic counter by bringing together the concepts of state and event handlers.
  1. Implement the `increase()` function such that it increases the value of `this.state.counter` by 1 every time it is executed.
     - Hint: make sure you are using `this.setState()` properly since you cannot directly modify the `state`.
     - Hint: remember that `this.setState()` takes either an object, **OR** a callback function `cb(state,props)` which returns an object.
  2. Implement the `decrease()` function such that it decreases the value of `this.state.counter` by 1 every time it is executed.
  3. Add event handlers to the "Increase" and "Decrease" buttons in the `render()` function.
       - Hint: remember that you need to bind `increase()` and `decrease()` so that `this` is set properly. There are many ways to do this.
  4. Test out your counter!

## Section 7: Conditional Rendering

Often times we want to be able to show different content based on dynamic conditions. Conditional rendering is how we decide what gets shown dynamically.

TODO:

- **[Watch Video][conditional]**
- [Open this CodePen][ex5]. The goal here is to create a basic React app that allows us to control whether an image is shown on the screen. You will need to combine your knowledge of conditional rendering, handling events, and state management.
   1. Implement the `toggleDog()` function such that it sets `this.state.showDog = !this.state.showDog` every time it is clicked.
       - Hint: make sure you are using `this.setState()` properly since you cannot directly modify the `state`.
       - Hint: remember that `this.setState()` takes either an object, **OR** a callback function `cb(state,props)` which returns an object.
   2. Implement the `toggleCat()` function such that it sets `this.state.showCat = !this.state.showCat` every time it is clicked.
   3. Add event handlers to the "Toggle Dog" and "Toggle Cat" buttons in the `render()` function.
       - Hint: remember that you need to bind `toggleDog()` and `toggleCat()` so that `this` is set properly. There are many ways to do this. Try using a different approach than you used in the last section.
   4. Implement conditional rendering using the corrosponding parts of the state and the `&&` operator to control when the dog and cat image are shown.
   5. Test out your app! When you click the "Toggle Dog" button the dog picture should disapear from the DOM. It should reappear if you click the "Toggle Dog" button again. The "Toggle Cat" button should work in the same way.

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
[state]: https://www.youtube.com/watch?v=hew-Zgk5C60
[ex3]: https://codepen.io/BitsofGood/pen/MLdLqL?editors=0010
[ex4]: https://codepen.io/BitsofGood/pen/qQOVvy
[events]: https://www.youtube.com/watch?v=Z2U1xfPLMb4
[ex5]: https://codepen.io/BitsofGood/pen/yZWwVm?editors=0010
[conditional]: https://www.youtube.com/watch?v=G1C6L5FgM2k
[ex6]: https://codepen.io/BitsofGood/pen/RvmOrv?editors=0010

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



## Exercise 4: Tic Tac Toe

For this exercise you will be making Tic Tac Toe in React!
[Click Here](tic-tac-toe/) to get started!