# Comment Threads

## Introduction

In this exercise we're going to build threaded comments *a la* Reddit or
Facebook. It will be possible to reply to individual comments and show or hide
all replies to a given comment.

We've been provided with a static HTML page, we're going to add dynamic
functionality to that page using jQuery event handlers and DOM traversal
functions.

**Files:**

- `comment_threads.html`: HTML source for the exercise. jQuery and Bootstrap are
  already included on the page.
- `comment_threads.js`: JavaScript source for the exercise.

## Part 1: Post a new comment

### Goal

![](https://cl.ly/0L1R3a133T3v/Screen%20Recording%202016-12-22%20at%2012.18%20PM.gif)

### Steps

1. Add a click handler to the `Post Comment` button. Inside the click handler:

    1. Ask the user to enter an *author* and a *comment* using the
      [`prompt()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
      function.
    1. Create a new `div` element by using the *author* and *comment* the user has provided with the following contents:

        ```html
        <div class="comment">
          <div class="author">"AUTHOR NAME HERE" says:</div>
          <div class="message">COMMENT HERE</div>
          <div class="controls">
            <button class="hide-replies btn btn-default">Hide Replies</button>
            <button class="show-replies btn btn-default">Show Replies</button>
            <button class="reply btn btn-default">Reply</button>
          </div>
          <div class="replies"></div>
        </div>
        ```

        Note: you can create elements by giving jQuery a string that contains
        HTML like:

        ```javascript
        $('<div class="some-class">')
        ```

    1. Append the new comment element to the end of the `div` with the class
      `comments`:

        ```javascript
        $('YOUR SELECTOR HERE').append(newElement)
        ```

## Part 2.a: Reply to a comment

### Goal

![](https://cl.ly/0F3k402I0N12/Screen%20Recording%202016-12-22%20at%2002.45%20PM.gif)

### Steps

1. Add a click handler to every `.reply` button on the page.  Inside the event handler you should:

    1. Prompt the user for an *author* and a *comment* and create a new comment
      element like you did in *Part 1*.

    1. Append the new comment to the `.replies` div inside the current
      comment.

          You **can't** just do `$('.replies')`. This would be equivalent to replying
          too all the comments at once. Which, while fun, is not the behavior we're
          looking for.

          Instead we have to start from the current element (the `.reply` button
          that was clicked) go up to the parent `.comment` div then go back down
          one level to the `.replies` divs.
          This process of walking through the DOM is called
          [DOM traversal](http://api.jquery.com/category/traversing/).

          To go up and find the parent `.comment` div we're going to use
          [`$.closest()`](http://api.jquery.com/closest/).
          To go back down and find the `.replies` div we're going to use
          [`$.children()`](http://api.jquery.com/children/).

          Your event hander should look like:

          ```javascript
          function() {
            // `this` points to the current `.reply` button that was clicked
            var $this = $(this);
            var commentDiv = $this.closest('PARENT SELECTOR HERE');
            var repliesDiv = commentDiv.children('REPLIES DIV SELECTOR');
            repliesDiv.append(NEW COMMENT DIV HERE);
          }
          ```

1. Note that replying to a newly created comment does not work. Why is that?

## Part 2.b: Better reply to a comment

### Goal

![](https://cl.ly/303i0Y3d1637/Screen%20Recording%202016-12-22%20at%2002.47%20PM.gif)

### Steps

Now let's fix the issue of not being able to respond to newly created
comments.

Use the same format as the click handler from Part 2.a with
[a delegated event handler](http://api.jquery.com/on/#on-events-selector-data-handler)
attached to the top the `.comments` div. <br>
The syntax for delegated event handlers takes a parent element selector (in
this case `.comments`), an event type (in this case `click`) and a child
element selector (in this case `.reply`) like so:

```javascript
$('PARENT ELEMENT SELECTOR').on('EVENT TYPE', 'CHILD ELEMENT SELECTOR',
  function() { ... });
```

Your event handler should work the same as before.

## Part 3: Show/hide replies

### Goal

![](https://cl.ly/362T0F0s0C2p/Screen%20Recording%202016-12-22%20at%2002.55%20PM.gif)

### Steps

1. Create a delegated event handler attached to the top `.comments` div
  which is waiting for `click` events on the `.hide-replies` button to be
  clicked.

    When the event handler is triggered, traverse the DOM and find the `.replies` div as you did in *Part 2* but make it disappear with `$.hide()`.
1. Create a delegated event handler attached to the top `.comments` div
  which is waiting for `click` events on the `.show-replies` button to be
  clicked.

    When the event handler is triggered, traverse the DOM and find the `.replies`
    div as you did in *Part 2* but make it appear with `$.show()`.

## Bonus 1: Better show/hide replies

We should display the *Show/Hide Replies* buttons only when they are useful.
If replies are already being shown, there is no need to display the
*Show Replies* button. Similarly, if replies are already being hidden then
there's no need to show the *Hide Replies* button.

### Goal

![](https://cl.ly/251y3Z2Y3M12/Screen%20Recording%202016-12-22%20at%2006.38%20PM.gif)

### Steps

1. Hide all the *Show Replies* buttons on the page when the page first
  loads.
1. Update your *Show Replies* click handler to `$.hide()` the current
  *Show Replies* button and `$.show()` the *Hide Replies* button.
1. Update your *Hide Replies* click handler to `$.hide()` the current
  *Hide Replies* button and `$.show()` the *Show Replies* button.

## Double Bonus: Display count of replies

When the *Hide Replies* button is used, hide the comments and display the
total number of comments that have been hidden in their place.
