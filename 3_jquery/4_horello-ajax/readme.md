# Horello continued: APIs and AJAX

## Introduction

During the first half of this week, you have been creating a functioning version
of Trello in HTML without a connection to any server. You can add cards, but
they will get deleted if you refresh the page. Today, we are going to use the
Trello API as a backend for our app so our changes are stored for posterity.

Every action like `adding a card` or `changing a title` needs to be sent to the
backend now, so it can save our changes. If a user deletes a card, we have to
remove it from our front-end and from the backend too, making a `DELETE` request
to the API.

By the end of the day, making a change in Trello should update our site and the other way around! Here you can see a side by side capture of both sites. If you add a card on Trello and refresh your site, you should be able to see it in Horello. On this image you can see how data is shared between the two.

![Updating](screenshots/capture10.jpeg)

## Reference

When you access the Trello API you will have to deal with __three__ different types of objects (board, single list, and single card). Below are examples of what your AJAX request should expect to recieve.

### Board Object
```js
{
  "cards": [...], // ARRAY OF CARD OBJECTS
  "lists": [...], // ARRAY OF LIST OBJECTS
  "id": "588577bb8423080722cabe8c",
  "name": "Trello Test",
  "desc": "",
  "url": "https://Trello.com/b/xFsMS0DK/Trello-test",
  "shortUrl": "https://Trello.com/b/xFsMS0DK",
  "prefs": {}
}
```

### List Object
```js
{
  closed: true,
  id: "5885963ac15ad6bf1e892155",
  idBoard: "588577bb8423080722cabe8c",
  name: "I just created a new list!",
  pos: 16383.75,
  subscribed: false
}
```

### Card Object
```js
{
  "id": "588944b18f80bcdc5e06a1c6",
  "checkItemStates": null,
  "closed": false,
  "dateLastActivity": "2017-01-26T00:37:05.858Z",
  "desc": "Using the Trello API is fun and easy!",
  "descData": null,
  "idBoard": "588577bb8423080722cabe8c",
  "idList": "5885963ac15ad6bf1e892155",
  "idMembersVoted": [...],
  "idShort": 23,
  "idAttachmentCover": null,
  "manualCoverAttachment": false,
  "idLabels": [...],
  "name": "I just created a new card!",
  "pos": 2,
  "shortLink": "qDQGAFNh",
  "badges": {...}
}
```


## Part 1: Setting up Trello

To be able to use Trello and save your board data to their backend, you need to
create an account, and get a `KEY` and `TOKEN` for our application. This allows
Trello to identify your app and know what boards it has access to.

1. Head over to http://www.trello.com and sign-up/log-in to your Trello account.
1. Navigate to the [Trello Developers Page](https://developers.Trello.com/get-started/start-building).
1. Click the `Get your Application Key` button in the first section of the page. Copy this key and paste it into
   `week02/day4/horello-ajax/js/config.js`.

	  ![API KEY](screenshots/capture6.jpeg)

    An API key is a way of identifying your app. Every time you make a request, you
    will have to send it and Trello will know its your app trying to access the backend.

1. Generate a token manually by clicking on the `Token` link on that page. A Token allows Trello to verify that it is really your app is making the request and not someone else. Why is the API KEY not enough? Because the API KEY is public and the TOKEN is private.

	![Getting the token](screenshots/capture7.jpeg)

1. Click "Allow" on the authentication screen.
1. Set your local API token in the `config.js` file. (`var apiToken = "YOUR API TOKEN HERE";`)

    By now, this is how your `config.js` file should look.

    ![Config File](screenshots/capture8.jpeg)

### Generating Test Data

In this section, we start by creating some data manually on Trello. After creating the data, we check that we can retrieve it using AJAX.

1. Head back to http://www.trello.com
1. Create a new board and manually add some lists and cards to it.
1. Copy the URL from your browser. The current url you are on should look something like this `https://Trello.com/b/xFsMS0DK/Trello-test` (The part highlighted in red in the following picture)

    ![Trello Test Board](screenshots/capture9.jpeg)

1. Add `.json` at the end of that url. (It should look like `https://Trello.com/b/xFsMS0DK/Trello-test.json`.) These are the results you should see:

	![Test Data](screenshots/capture2.jpeg)

	If your output looks different we recommend you install a [Chrome Extension](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en) that makes JSON files are easier to read.

1. Copy the id of the board that is listed at the very beginning of the JSON
   output. For example, the board id below is `588577bb8423080722cabe8c`:

	```javascript
	{"id":"588577bb8423080722cabe8c" ...}
	```

	Note: The id for the response in the picture above is "588577bb8423080722cabe8c";

## Part 2: Getting familiar with the API

We are finally ready to get real data from Trello. Open up your console
while on your trello board page and try the following `ajax` request: (Don't 
forget to insert your key, token and boardId in the corresponding places)

```
$.ajax('https://api.Trello.com/1/boards/YOURBOARDIDHERE', {
  data: {
    key: "YOUR KEY",
    token: "YOUR TOKEN",
    cards: 'all',
    lists: 'all'
  },
  success: function(data) { console.log(data) }
});
```

That request will `console.log()` an object like the one below, containing all
the information about the board, including its id, name, description, arrays of
lists and cards and much more.

```
{
  "cards": [...],
  "lists": [...],
  "id": "588577bb8423080722cabe8c",
  "name": "Trello Test",
  "desc": "",
  "url": "https://Trello.com/b/xFsMS0DK/Trello-test",
  "shortUrl": "https://Trello.com/b/xFsMS0DK",
  "prefs": {}
}
```

## Part 3: Read data from the Trello API

In this part we will take the response from the AJAX request and use it to render our Horello board.

Head over to the `render()` function in `src/js/script.js`.

Use the AJAX request you constructed in Part 2 and paste it into the `render()` function. Then on success you want to take the response data and pass this object into the `renderBoard` function.

## Part 4: Render the Board

In this part we are going to write three functions:

__NOTE__ that ALL CAPS are used throughout the sample `HTML` generation code to denote variables. For example, a list object has a key called `id`, so __LIST ID__ below would denote `list.id`.

1. __`renderBoard`__ - given a [board object](#board-object) create a board wrapper for your lists and cards.
    1. Let's start with a clean state _every_ time we render a new board. Use the [`.empty()`](http://api.jquery.com/empty/) method to remove everything from `#boardAnchor`.
	1. Append a `div` to element with id `#boardAnchor`. The `div` you append should have class `.board` and id `boardId`.
	   ```js
	   <div id="${boardId}" class="board"></div>
	   ```
    1. Iterate through `board.lists` and pass each list object through the `renderList` function.
	1. Iterate through `board.cards` and pass each card object through the `renderCard` function.
1. __`renderList`__ - given a [list object](#list-object) create a list wrapper for your cards.
    1. Generate the following `HTML` string to create a list (given a [List Object](#list-object))
	    ```html
		<div class="list-container">
          <div class="list" data-list-id="LISTIDHERE" id="LISTIDHERE">
            <div class="list-header">
              <span class="list-title">test123</span>
            </div>
            <div class="list-cards"></div>
            <div class="list-footer">
              <button class="add-card" addcardid="LISTIDHERE">Add a card...</button>
              <div class="collapse add-card-form-wrapper" id="addCardFormLISTIDHERE">
                <div class="well add-card-form">
                  <input type="text" class="form-control" placeholder="Card title" id="addCardTitleLISTIDHERE" />
                  <button type="button" class="btn btn-default add-card-save" id="addCardBtnLISTIDHERE">Save</button>
                  <button type="button" class="btn btn-default add-card-cancel"><span class="glyphicon glyphicon-remove" id="addCardCancelBtnLISTIDHERE"></span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
	    ```
        * Note: Replace all `LISTIDHERE` with your list's id
    1. Append the generated `HTML` to your board.
1. __`renderCard`__ - given a [card object](#card-object) create a card using `HTML`.
    1. Generate the following `HTML` string to create a card (given a [Card Object](#card-object))
	    ```html
		<div id="CARD ID" class="card" data-card-desc="CARD DESCRIPTION" data-card-name="CARD NAME" data-list-id="LIST ID" data-card-id="CARD ID">
          <div class="card-body">
            <!-- CARD NAME GOES HERE -->
          </div>
        </div>
		```
	1. Append the generated `HTML` to an element with a `.list-cards` class within an element of the corresponding `listId` for the specified list.

### Checkpoint

If you load your page and it loads lists and cards, you are good to go! It should contain the same data from your Trello board.

![Verifying 3](screenshots/capture14.jpeg)

## Part 5: Updating cards in Trello API

Head over to the `createList`, `createCard`, and `updateCard` functions in
`src/js/script.js`.

Now, we are going implement the code that sends updates to the server via AJAX
when a card is updated.

When you click on save on the edit card modal `updateCard` is called.

### `updateCard()`

This function takes in a title, description, and cardId
and makes a `PUT` request to the `/cards` endpoint to update the card in Trello

1. Make an AJAX `PUT` request to the `/cards` endpoint to update the card's
   title and description.

1. On the `success` callback call the `render()` function to update the
card on Horello with the new title/description.

#### Verifying your work
To check your code works click on a card, edit it and save it. Refresh the page. If the card was updated, you are good to go!

   ![Verifying 3](screenshots/capture13.jpeg)


## Part 6: Adding lists and cards
Now, we are going to implement the functionality to add new lists and cards to your Horello app. Whenever you create a new `list` or `card`, it should be sent to the backend and saved on the Trello API.

### `createList()`

This function is called whenever a user clicks on `add list`, gives it a name, and saves it. This function makes a POST request to the `/lists` endpoint, sending the new list's data to the backend to create a new `List`. On the success callback of this function, we call `render()` so all the lists are refreshed and your new list shows up on the page.

### `createCard()`

Implement `addCard` to take in a `name` and `listId` and send data to the Trello API and create a new Card. This function is very similar to the one above, but instead makes a POST request to the `/cards` endpoint and sends new data.

Remember to call `render()` after making the request to refresh all the cards on list and show the new card that was added to it.

### Verifying your work
To check your code works click on add-card, give it a name and save it. Refresh the page. If the card was created, you are good to go!

   ![Verifying 3](screenshots/capture13.jpeg)

## Bonus: Part 7: AJAX Improvements

- Rather than passing the authentication information with every single
  request, see if you can simplify this using
  [jQuery.ajaxSetup()](https://api.jquery.com/jquery.ajaxsetup/).
- Periodically "poll" the server for new data by using `setInterval()`.
  Fetch new data via AJAX and update the page every 30 seconds.
- Handle errors when calling the API. What happens if you update the text and
  the request fails? Does the card show the previous text? Does it show the
  updated one, even if a refresh will return to the original text? and so on.

## Double Bonus: Part 8: UI Improvements

- Delete card. To be able to delete a card, you should follow these steps:
    1. Add an [X] button to the right upper corner of each card.
    1. Add a listener for that button, so when a user clicks it, it triggers a function `deleteCard`
    1. Define and the function `deleteCard(cardId)` on your `events.js` file. This one should make the DELETE request to the Trello API.
    1. Refresh your data so the card disappears.
- Delete list. This one should work similarly to the previous one.
- Move card between lists
    1. A move is two operations: a `remove` followed by an `add`. One to remove the card from the actual list, and one to add it to the newly specified list.
- Move a card inside the list
