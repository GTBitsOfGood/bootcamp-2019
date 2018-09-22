// This is where you will write all your CODE
// for the Horello AJAX (DAY 4) exercise.

$(document).ready(function() {
  setEventListeners();
  render();
});

function createList(listName) {
  $.ajax('https://api.trello.com/1'+ "/lists/",{
    method: "POST",
    data:{
      key:"c9b42afc3c3dcf17dc1e7fccc748dd70",
      token:"322f36bb48a58269798a557d260a9bbcb1a16c1966bd0350197d1c0199dd8648",
      name: listName,
      idBoard:"5ba649498193d16c1e58608c",
      pos:"bottom"


    },
  success: function(data){
    console.log("Successfully updated")
    render();
  }
})
}

function createCard(name, listId) {
  $.ajax('https://api.trello.com/1'+ "/cards/",
  {
    method: "POST",
    data:{
      key:"c9b42afc3c3dcf17dc1e7fccc748dd70",
      token:"322f36bb48a58269798a557d260a9bbcb1a16c1966bd0350197d1c0199dd8648",
      idList:listId,
      name:name,
      
    },
    success: function(data)
    {
      console.log("Successfully created new card " + name)
      render();
    }
  })
}

function updateCard(title, desc, cardId) {
  $.ajax('https://api.trello.com/1'+ "/cards/" + cardId, 
  {
    method: "PUT",
    data:{
      key: "c9b42afc3c3dcf17dc1e7fccc748dd70",
      token:"322f36bb48a58269798a557d260a9bbcb1a16c1966bd0350197d1c0199dd8648",
      name:title,
      desc:desc,
      id:cardId
      
    },
    success: function(data)
    {
      console.log("Updated Card " + cardId)
      render();
    }
  })};

function render() {
  $.ajax('https://api.Trello.com/1/boards/5ba649498193d16c1e58608c', {
  data: {
    key: "c9b42afc3c3dcf17dc1e7fccc748dd70",
    token: "322f36bb48a58269798a557d260a9bbcb1a16c1966bd0350197d1c0199dd8648",
    cards: 'all',
    lists: 'all'
  },
  success: function(data) { renderBoard(data) }
});
}

function renderBoard(board) {
  $('#boardAnchor').empty()
  $('#boardAnchor').append(`<div id ="${boardId}" class ="board"</div>`)
  board.lists.forEach(element =>{renderList(element)})
  board.cards.forEach(element => {renderCard(element)})
}

function renderList(list) {
/* let wrapper = $("<div></div>")
  wrapper.append(`<div class="list-container">
  <div class="list" data-list-id="${list.id}" id="${list.id}">
    <div class="list-header">
      <span class="list-title">test123</span>
    </div>
    <div class="list-cards"></div>
    <div class="list-footer">
      <button class="add-card" addcardid="${list.id}">Add a card...</button>
      <div class="collapse add-card-form-wrapper" id="addCardForm${list.id}">
        <div class="well add-card-form">
          <input type="text" class="form-control" placeholder="Card title" id="addCardTitle${list.id}" />
          <button type="button" class="btn btn-default add-card-save" id="addCardBtn${list.id}">Save</button>
          <button type="button" class="btn btn-default add-card-cancel"><span class="glyphicon glyphicon-remove" id="addCardCancelBtn${list.id}"></span></button>
        </div>
      </div>
    </div>
  </div>
</div>`)  */
let wrapper = $('<div class ="board"></div>');
let listContainer = $('<div class="list-container"></div>');
let listWrapper = $(
  '<div class="list" data-list-id="' +
    list.id +
    '" id="' +
    list.id +
    '"></div>'
);
let listHeader = $('<div class="list-header"></div>');
let listBody = $('<div class="list-cards"></div>');
let listFooter = $('<div class="list-footer"></div>');

wrapper.append(listContainer);
listContainer.append(listWrapper);
listWrapper.append(listHeader);
listWrapper.append(listBody);
listWrapper.append(listFooter);
listHeader.append($('<span class="list-title"></span>').text(list.name));
listFooter.append(
  $(
    '<button class="add-card" addCardId="' +
      list.id +
      '">Add a card...</button>'
  )
);
listFooter.append(
  $(
    '<div class="collapse add-card-form-wrapper" id="addCardForm' +
      list.id +
      '">\
<div class="well add-card-form">\
<input type="text" class="form-control" placeholder="Card title" id="addCardTitle' +
      list.id +
      '">\
<button type="button" class="btn btn-default add-card-save" id="addCardBtn' +
      list.id +
      '">Save</button>\
<button type="button" class="btn btn-default add-card-cancel"><span class="glyphicon glyphicon-remove" id="addCardCancelBtn' +
      list.id +
      '"></span></button>\
</div>\
</div>\
'
  )
);

$("#" + list.idBoard).append(wrapper.html());
}

function renderCard(card) {
  let wrapper = $('<div></div>')
  let cardWrapper = $(`<div id= "${card.id}" class = "card" data-card-desc = "${card.desc}"
  data-card-name="${card.name}" data-list-id="${card.idList}" data-card-id="${card.id}"></div`)
  let cardmore = $('<span class = "card-more"></span>')
  if(card.closed){
    return;
  }
  if (card.desc) {
    cardmore.append($('<span class="glyphicon glyphicon-align-left"></span>'));
  }
  let cardBody = $(`<div class ="card-body"></div>`)
  wrapper.append(cardWrapper)
  cardWrapper.append(cardmore)
  cardWrapper.append(cardBody)
  cardWrapper.append(cardmore)
  cardBody.append($("<p></p>").text(card.name))

  $("#" + card.idList)
  .find(".list-cards")
  .append(wrapper.html())

}

