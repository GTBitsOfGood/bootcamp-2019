# React Videos

## Lists and Keys

### [Watch Me](https://vimeo.com/223236338)

	
1. Display array ```groceries``` as a list just like the picture. Use classes ```GroceryItem``` and ```ShoppingCart``` in a way that makes sense; use the item names as keys.

	Use Codepen [here](https://codepen.io/rick-shar/pen/xdeQxQ)
	
	![](./img/lists-1.png)

1. Display array ```roster``` as a nested list, as in the picture. Use the provided classes in a way that makes sense - make sure that you use keys for both mappings, and that the keys are unique!

	Use Codepen [here](https://codepen.io/rick-shar/pen/JNVejw)
	
	![](./img/lists-2.png)


## Forms in React

### [Watch Me](https://vimeo.com/223236408)

Use Codepen [here](https://codepen.io/rick-shar/pen/EmJGvP)

![](https://d3vv6lp55qjaqc.cloudfront.net/items/1O0q242P3x222U2E3G3V/Screen%20Shot%202017-05-26%20at%208.05.19%20PM.png?v=f4e5511c)

Create a React Form that enforces validation on the email and password fields. The email must have at least 3 characters before the '@' and the password must have a minimum of 4 characters that contain at least 1 number and at least 1 letter.

The goal: make it so that when the form is submitted:

1. If some test fails, `alert` the user with a usefule failure message
1. If all tests pass, `alert` the user with a success message

## State, Lifecycle Hooks

### [Watch Me 1](https://vimeo.com/223236502)
### [Watch Me 2](https://vimeo.com/223236748)

1. In the Codepen below utilize the correct lifecycle hook and ajax to grab data (using ajax GET) from URL: https://api.myjson.com/bins/rztih 

    Use Codepen [here](https://codepen.io/rick-shar/pen/BRezxW)

    <details>
    <summary>Should look like this (Warning: Cuteness overload) </summary>

    ![](https://d3vv6lp55qjaqc.cloudfront.net/items/3N3I0h3i3q1a3N43121G/Screen%20Recording%202017-05-27%20at%2006.51%20PM.gif?v=20b26c27)

    </details>
  

1. A local Squirrel sleeps or wakes up whenever it is poked. While it is awake, it collects nuts to survive. You are given a function, ```gather```, as a prop. Using only lifecycle functions and a timer, make it so that the Squirrel component only "gathers" nuts while it is awake (the Squirrel component is mounted when woken and unmounted when asleep).

	Use Codepen [here](https://codepen.io/josephch405/pen/qmwQmG?editors=1010)

	![](./img/lifecycle-2.gif)

## Immutability


### [Watch Me 1](https://vimeo.com/223237457)
### [Watch Me 2](https://vimeo.com/223237595)
### [Watch Me 3](https://vimeo.com/223237726)
### [Watch Me 4](https://vimeo.com/223237765)
### [Watch Me 5](https://vimeo.com/223237808)


Replace the commented pieces of code in each of the snippets below to no longer cause a mutation of `myVar`. Do so without changing the output of the program.

You may have to **make new variables** to hold results - then, you would `console.log` said new variable instead of `myVar` (after all, `myVar` should not be "touched"/"changed" in any way).

Note: The official MDN documentation for [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) has a handy list of available functions on the left sidebar.


1. Adding to an array
    ```javascript
      var myVar = [1, 2, 3];

      myVar.push(4); // Mutation

      console.log(myVar);
      // Output: [1, 2, 3, 4]
    ```
1. Removing from the end of an array
    ```javascript
      var myVar = [1, 2, 3];

      myVar.pop(); // Mutation

      console.log(myVar);
      // Output: [1, 2]
    ```
1. Removing from the middle of an array
    ```javascript
      var myVar = [1, 2, 3, 4, 5];

      myVar.splice(2, 1); // Mutation

      console.log(myVar);
      // Output: [1, 2, 4, 5]
    ```
1. Changing each entry in an array
    ```javascript
      var myVar = [1, 2, 3];

      for (var i = 0; i < myVar.length; i++) {
        myVar[i] = myVar[i] * 10
      } // Mutation

      console.log(myVar);
      // Output: [10, 20, 30]
    ```
1. Array of arrays (2D array)
    ```javascript
      // Be careful not to mutate the outer array
      // OR any of the inner arrays
      var myVar = [
        [1, 2, 3],
        [4, 0, 6],
        [7, 8, 9]
      ];

      myVar[1][1] = 5; // Mutation

      console.log(myVar);
      // Output: [
      //  [1, 2, 3],
      //  [4, 5, 6],
      //  [7, 8, 9]
      // ]
    ```
1. Add/change an object key
    ```javascript
      var myVar = { a: 10, b: 15 };

      myVar.b = 20; // Mutation
      myVar.c = 30; // Mutation

      console.log(myVar);
      // Output: { a: 10, b: 20 , c: 30 }
    ```
1. Remove an object key
    ```javascript
      // This one might be tricky
      var myVar = { a: 10, b: 15 };

      delete myVar.b;

      console.log(myVar);
      // Output: { a: 10 }
    ```
