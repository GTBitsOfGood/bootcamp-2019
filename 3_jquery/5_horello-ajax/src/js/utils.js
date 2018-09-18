// This function attaches the required click
// handlers/event listeners to the .board class
// in order to make Horello reactive
function setEventListeners() {
  $('.board').on('click', '.add-list', function(e) {
    $('#addList').collapse('toggle');
  });

  $('.board').on('shown.bs.collapse', '#addList', function (e) {
    $('#addListText').focus();
  });

  $('.board').on('click', '#addListSave', function(e) {
    var listName = $('#addListText').val();
    // validate input
    if (!listName) {
      alert("Please enter a list name");
      return;
    }
    createList(listName);
    $('#addListText').val('');
    $('#addList').collapse('toggle');
  });

  $('.board').on('click', '#addListCancel', function(e) {
    $('#addList').collapse('hide');
  });

  $('#cardEdit').on('show.bs.modal', function (e) {
    console.log("BAMS")
    var button = $(e.relatedTarget);
    var cardId = button.data('card-id');
    var listId = button.data('list-id');
    $('#modalText').val($('#'+cardId).data('cardName'));
    $('#modalBody').val($('#'+cardId).data('cardDesc'));
    $('#modalSave').data('list-id', listId);
    $('#modalSave').data('card-id', cardId);
  });

  $('#modalSave').click(function (e) {
    var title = $('#modalText').val();
    var desc = $('#modalBody').val();
    if (!title) {
      alert('Please enter a title');
      return;
    }

    var cardId = $(e.currentTarget).data('card-id');

    updateCard(title, desc, cardId);
    $('#cardEdit').modal('hide');
  });


  $('.board').on('click', '.add-card', function(e) {
    e.stopPropagation();

    $(this).siblings('.add-card-form-wrapper').removeClass('collapse');
  });

  $('.board').on('click', '.add-card-save', function(e) {
    e.stopPropagation();

    var cardBody = $(this).siblings('input').val();
    var id = $(this).closest('.list').data('listId');

    if (!cardBody) {
      alert('Please enter a card title');
      return;
    }

    createCard(cardBody, id);
  });

  $('.board').on('click', '.add-card-cancel', function(e) {
    e.stopPropagation();

    $(this).siblings('input').val('');
    $(this).closest('.add-card-form-wrapper').addClass('collapse');
  });

  $('.board').on('click', '.card', function (e) {
    e.stopPropagation();
    $('#cardEdit').modal('toggle', $(this));
  });
}
