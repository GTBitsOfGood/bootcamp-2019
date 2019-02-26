# Inline exercise: AJAX Counter

## Time limit: 15 minutes

## Instructions

Let's implement the counter we built in the warmup exercise using a JSON
endpoint and AJAX.

1. Open `app.js` and `public/index.html` in your editor.
1. In `public/index.html` inside the `<script>` block:
  Add a click handler to the `#increment` button using jQuery. When clicked
  this button should trigger a POST AJAX request to `/increment` and update
  the page (i.e. update `#count`) based on its return value.
1. In `app.js` create a new endpoint for `POST /decrement` that decreases
  `count` by 1 and returns a JSON response indicating the new value of `count`.
1. In `public/index.html` inside the `<script>` block:
  Add a click handler to the `#increment` button using jQuery. When clicked
  this button should trigger a POST AJAX request to `/increment` and update
  the page (i.e. update `#count`) based on its return value.
1. Start your server and check that clicking `Increase` or `Decrease` increases
  or decreases the counter on the screen.
