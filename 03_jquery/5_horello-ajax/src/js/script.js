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
  // YOUR CODE HERE
  $.ajax('https://api.Trello.com/1/boards/5ba18d21b67b6863027e8018', {
  data: {
    key: "1306e81ac6ed2da51e29904b2a3ed1fb",
    token: "df2cccb52a5bf99d2cb63ecb3d9d856b4a58eedb10366aab7b2c6db6f178d89f",
    cards: 'all',
    lists: 'all'
  },
  success: function(data) { renderBoard(data) }
});
}

function renderBoard(board) {
  // YOUR CODE HERE
  $("#boardAnchor").empty()
  $("#boardAnchor").append('<div id="${boardId}" class="board"></div>')
  board.lists.foreach(e => renderList(e))
  board.cards.foreach(e => renderCard(e))
}

function renderList(list) {
  // YOUR CODE HERE
  let html = '<div class="list-container">
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
</div>'
}

function renderCard(card) {
  // YOUR CODE HERE
}
