# Making Horello dynamic

Today we're going to make the Horello site we built yesterday
dynamic using jQuery. This means you will be able to add
cards, add lists and edit cards just like you can on the
og Trello. There's a catch though, since our application has
no backend, all the cards and lists we create will disappear
when we refresh the page. We will fix that tomorrow!

Here are the parts of this exercise:

1. Add list
1. Add card
1. Edit card
1. Drag and drop cards
1. **Bonus:** Delete card by hovering and hitting <kbd>c</kbd>
1. **Double bonus:** Random theme selector
1. **Triple bonus:** Theme selector with dropdown

## Part 1: Add list

### Goal

The goal of this step to be able to add new lists to our board with
the *Add a list...* button.

When you're done, your app should look like this:

![](https://cl.ly/1c2h2Q3v3U0P/Screen%20Recording%202017-01-08%20at%2009.44%20PM.gif)

### Steps

1. When the `.add-list` button is clicked, make the `.add-list-form-wrapper` div
    visible by removing the `collapse` CSS class from it. `collapse` is a CSS
    class provided by Bootstrap for easily setting `display: none` on an element.

    You can remove CSS classes using `$.removeClass()`:

    ```javascript
    $('YOUR SELECTOR HERE').removeClass('collapse')
    ```

1. When the `.add-list-cancel` button is clicked, hide the
    `.add-list-form-wrapper` div by adding the `collapse` CSS class
    back to it.

    You can add CSS classes using
    [jQuery `.addClass()`](https://api.jquery.com/addclass/):

    ```javascript
    $('YOUR SELECTOR HERE').addClass('collapse')
    ```

1. When the `.add-list-save` button is clicked:
    1. Read the user provided *title* from the `input` element inside
    `.add-list-form-wrapper` using
    [jQuery `.val()`](https://api.jquery.com/val/).
    1. Create a list element with the *title* containing no cards and insert it
    before the `.list-container` elements using
    [jQuery `.before()`](https://api.jquery.com/before/).

        List HTML should be like:

        ```html
        <div class="list-container">
          <div class="list">
            <div class="list-header">
              <span class="list-title">LIST TITLE GOES HERE</span>
            </div>
            <div class="list-cards"></div>
            <div class="list-footer">
              <button class="add-card">Add a card...</button>
              <div class="collapse add-card-form-wrapper">
                <div class="well add-card-form">
                  <input type="text" class="form-control" placeholder="Card title">
                  <button type="button" class="btn btn-default add-card-save">
                    Save
                  </button>
                  <button type="button" class="btn btn-default add-card-cancel">
                    <span class="glyphicon glyphicon-remove"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        ```
    1. Empty the value for the input box you accessed in step 1 by using jQuery `.val('')` (the empty string here represents the value you want to assign to the input box).
    1. Hide the
    `.add-list-form-wrapper` div by adding the `collapse` CSS class
    back to it.

## Part 2: Add card

### Goal

The goal of Part 2 is to be able to add new cards to each list with the *Add
a card...* buttons.

When you're done, your app should look like this:

![](https://cl.ly/2s1W2M2I1Y0t/Screen%20Recording%202017-01-08%20at%2009.46%20PM.gif)

Note: Make sure all click handlers for `.add-card`, `.add-card-cancel` and `.add-card-save` work for newly created lists. Use event delegates for achieve this goal:

```javascript
$('.board').on('click', 'TARGET SELECTOR HERE', function() {
})
```

### Steps

1. When any `.add-card` button is clicked, find the `.add-card-form-wrapper`
element for the **current list** and make it appear by removing the
`collapse` CSS class.

    Just like we did with comment threads we're going to use `$(this)` to find the
    right element relative to the current button. This time around we'll use
    [$.siblings()](https://api.jquery.com/siblings/).

    You can remove CSS classes using
    [jQuery `.removeClass()`](https://api.jquery.com/removeclass/):

    ```javascript
    $(this).siblings('YOUR SELECTOR HERE')
    .removeClass('CSS CLASS TO REMOVE HERE')
    ```

1. When any `.add-card-cancel` button is clicked, hide the
    `.add-card-form-wrapper` div for the **current list** by adding the
    `collapse` CSS class back to it.

    Inspect the page to figure out how to traverse from the `.add-card-cancel`
    to the `.add-card-form-wrapper`.

    You can add CSS classes using
    [jQuery `.addClass()`](https://api.jquery.com/addclass/):
1. When the `.add-card-save` button is clicked:
    1. Read the user provided *card title* from the `input` element inside
    the **current** `.add-card-form-wrapper` using
    [jQuery `.val()`](https://api.jquery.com/val/).
    1. Create a new card element with the *card title* and append it to the
        **current** `.list-cards` element with
        [$.append()](http://api.jquery.com/append/)

        Card HTML should be like:

        ```html
        <div class="card">
          <span class="card-more">
            <span class="glyphicon glyphicon-align-left"></span>
          </span>
          <div class="card-body">CARD TITLE HERE</div>
        </div>`
        ```
      1. Now that the card has been created, hide the `.add-card-form-wrapper` div
         for the **current list** by adding the `collapse` CSS class back to it.

## Part 3: Edit card

### Goal

The goal of this part is to make it possible to change card titles
by clicking on each card and using a modal form.

When you're done, your app should look like this:

![](https://cl.ly/2E3J2x320r3B/Screen%20Recording%202017-01-08%20at%2009.48%20PM.gif)

### Steps

1. Create a global variable called `cardBeingEdited` and
  set it to `null`. We're going to use this to remember
  which card the user clicked on in order to edit it.
  
1. Add a delegated event handler to `.board` that
  listens to clicks on `.card` elements. This event
  handler should:

      1. Save the currently clicked card (i.e. `this`) in
        the global variable `cardBeingEdited`.
        
      1. Open the card editing modal (i.e. dialog) by finding
        `#card-edit` via jQuery and calling `.modal()` on it.
        
      1. Make sure the text box in the dialog contains the
        text of the current card being edited. Update the value
        of `#card-edit-body` using `.val()`, set it to
        the text of the card that was clicked on.
        You can get the extract the text contents of
        the card by finding the `.card-body` div inside
        the current `.card`. You will need `$(this).find()`
        and `.text()`.

1. Make the save button in the modal change the text on the `cardBeingEdited` and dismiss the modal using `.modal('toggle')`.


## Part 4: Reorder cards using drag and drop

### Goal

Make it possible to reorder and move cards between
lists by dragging and dropping. We're going to
use the popular [jQuery UI](https://jqueryui.com/)
library, that adds useful functionality not contained
in vanilla jQuery.

When you're done, your app should look like this:

![](https://cl.ly/300r1W3G1D3G/Screen%20Recording%202017-01-08%20at%2009.53%20PM.gif)

### Steps

jQuery UI makes it easy to reorder using drag and drop.
There is a feature called `sortable` that can be
added to lists like this:

```javascript
$('LIST SELECTOR HERE').sortable({
  // Configuration parameters here
  });
```

Documentation:

- [jQuery UI Sortable](https://jqueryui.com/sortable/)
- [Connecting multiple lists](https://jqueryui.com/sortable/#connect-lists)


Make sure that:

- You **can not** place a card after the `Add a card...` button
- You can move newly created cards to any list
- You can movely cards to and from newly created lists

## Part 5: Bonus: Delete cards using the keyboard

Make it possible to hover your mouse over one of the cards
and hit the <kbd>c</kbd> key on your keyboard to delete it.

You will need to:

1. Listen to keyboard events with `keydown` on `$(document)` which represents the whole page.
1. Inside the event handler, put `event` as the parameter, and use `event.key` to determine which key has been pressed.
1. Find the currently hovered card with the `:hover`
  pseudoselector.
1. Remove the `.card` element from the page with `.remove()`

## Part 6: Double Bonus: Theme Selector

Add an easter egg to your Horello page by
switching the color scheme of the board hen a user
clicks on the Horello logo on the top of the page.
When theming your page, cycle through various colors
for the top bar, the background, the lists and the cards.
Try replacing the background of the board with an image.

## Part 7: Triple Bonus: Theme Selector Dropdown

Add a dropdown menu next to the Horello logo that
allows the user to pick one of several themes that
you built for the Double Bonus.
