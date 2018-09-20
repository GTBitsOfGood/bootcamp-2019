// This is where you will write all your CODE
// for the Horello AJAX (DAY 4) exercise.

$(document).ready(function() {
  setEventListeners();
  render();
});

function createList(listName) {
  // YOUR CODE HERE
}

function createCard(name, listId) {
  // YOUR CODE HERE
}

function updateCard(title, desc, cardId) {
  // YOUR CODE HERE
}

function render() {
	$.ajax('https://api.Trello.com/1/boards/YOURBOARDIDHERE', {
  data: {
    key: "b353a7f928ccd7a2e9ed46939afd2982",
    token: "ad825767cff449acd88f94696914798bccf5dc8f407adf8eaaa45ad76ec54f09",
    cards: 'all',
    lists: 'all'
  },
  success: function(data) { renderBoard(data) }
});
}

function renderBoard(board) {
  // YOUR CODE HERE
}

function renderList(list) {
  // YOUR CODE HERE
}

function renderCard(card) {
  // YOUR CODE HERE
}
