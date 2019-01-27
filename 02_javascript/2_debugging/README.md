# Debugging

## Goal

The goal of this exercise is to learn how to do advanced debugging with Chrome Developer Tools (DevTools).

## Part 1: Jumping to Source

1. Open `02_javascript/2_debugging/debug.html`
2. Open DevTools Console with <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>J</kbd> on Mac, <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>J</kbd> on Windows
3. Click on the file name `debug.js` next to the error
  ![debug console](img/debug%20console.png)
4. This opens the **Source Tab**, inspect your code and find the error.
5. Open `02_javascript/2_debugging/debug.js` in your favorite editor and fix the syntax error.

Tip: You can jump to Source for `console.log()` lines too!

## Part 2: Debugging with break points

**Break points** stop time and let you inspect the state of your program in the
middle of running! Often times, we know that a function is returning an unexpected
value, but we don't know why. By going inside problem functions and setting break
points is a great way of investigating why.

There's a logical error in function `firstWord()` lets investigate with
break points.

1. Open `02_javascript/2_debugging/debug.js`
2. Add a `debugger;` statement to the first line after the for loop in `firstWord()`. It should look like this.

    ```javascript
    function firstWord(string) {
      for (var i = 0; i < string.length; i++) {
        debugger; // NEW DEBUGGER STATEMENT
        if (string[0] === ' ') {
          return string.substring(0, i);
        }
      }
      return string;
    }
    ```

3. Open `02_javascript/2_debugging/debug.html` and click on the first failing test.
  ![debug click failingf](img/debug%20click%20failing.png)
4. Open DevTools console and refresh the page.
5. Breakpoint is triggered :boom: Code stops executing at the `debugger` statement! Note the line where code stopped next to the red arrow.
  ![debug break](img/debug%20break%20point.png)
6. You can open and close the console with <kbd>Esc</kbd>. Make sure your console is open.
7. Check the value of the local variable `i` by typing `i` and hitting <kbd>Enter</kbd> in the console.
  ![debug break point](img/debug%20break%20point%20console.png)
8. Resume code execution by clicking the Resume button. When you click resume, code keeps executing until it hits the next break point. Delete breakpoints if you don't need them any longer.
  ![debug resume](img/debug%20resume.png)
9. Check the value of `i` again. Has it changed?
10. You can also step through code line by line using the Step Over button.
  ![debug step](img/debug%20step.png)
11. Use the debugger to find out why this test is failing!

Questions to answer:

* When does the code reach `return string.substring(0, i);`?
* When does the code reach `return string;`?

Congrats, you're now an advanced debugger!
