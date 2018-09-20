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

    $.ajax('https://api.Trello.com/1/boards/5afa25c54429e91fe95b66d4', {
      data: {
        key: "12d9aa164ae61d54cc89b917c5c7abe0",
        token: "83bc34e05d4f2c1607666eea55f2ce16ccd69becbc6cd51503670be0e3629cc4",
        cards: 'all',
        lists: 'all'
      },  success: function(data) { renderBoard(data) }
    });

}

function renderBoard(board) {
 $('#boardAnchor').empty();
 $("#boardAnchor").append(`<div id=${boardId} class="board"> </div>`);
 board["lists"].forEach(function(list){
    renderList(list);
 });

 board["cards"].forEach(function(card){
    renderCard(card);
 });
}

function renderList(list) {
    $('#boardAnchor > .board').append(`<div class="list-container">
          <div class="list" data-list-id="${list["id"]}" id="${list["id"]}">
            <div class="list-header">
              <span class="list-title">test123</span>
            </div>
            <div class="list-cards"></div>
            <div class="list-footer">
              <button class="add-card" addcardid="${list["id"]}">Add a card...</button>
              <div class="collapse add-card-form-wrapper" id="addCardFormLISTIDHERE">
                <div class="well add-card-form">
                  <input type="text" class="form-control" placeholder="Card title" id="addCardTitle${list["id"]}" />
                  <button type="button" class="btn btn-default add-card-save" id="addCardBtn${list["id"]}">Save</button>
                  <button type="button" class="btn btn-default add-card-cancel"><span class="glyphicon glyphicon-remove" id="addCardCancelBtn${list["id"]}"></span></button>
                </div>
              </div>
            </div>
          </div>
        </div>`);
}

function renderCard(card) {
    $(`#${card["idList"]} > .list-cards`).append(`
        <div id="${card["id"]}" class="card" data-card-desc="CARD DESCRIPTION" data-card-name="CARD NAME" data-list-id="LIST ID" data-card-id="CARD ID">
          <div class="card-body">
            <!-- CARD NAME GOES HERE -->
          </div>
        </div>
        `);


}
