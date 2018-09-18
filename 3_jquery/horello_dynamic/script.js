"use strict";

// YOUR JAVASCRIPT CODE GOES HERE
$('.add-list').on('click', function(event) {
    $('.add-list-form-wrapper').removeClass('collapse')
});

$('.add-list-cancel').on('click', function(event) {
    $('.add-list-form-wrapper').addClass('collapse')
});

$('.add-list-save').on('click', function(event) {
    var title = $('[placeholder="List name"]').val()
    $('.list-container:nth-child(1)').before(`<div class="list-container">
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
        </div>`)
    $('[placeholder="List name"]').val('')
    $('.add-list-form-wrapper').addClass('collapse')
});

$('.board').on('click', '.add-card', function(event) {
  $(this).siblings('.add-card-form-wrapper').removeClass('collapse')
})

$('.board').on('click', '.add-card-cancel', function(event) {
  $(this).parent().parent('.add-card-form-wrapper').addClass('collapse')
})

$('.board').on('click', '.add-card-save',function(event) {
  var name = $(this).siblings('input').val()
  $(this).parent().parent().parent().siblings(".list-cards").append(`<div class="card">
          <span class="card-more">
            <span class="glyphicon glyphicon-align-left"></span>
          </span>
          <div class="card-body">${name}</div>
        </div>`)
  $(this).siblings('input').val('')
  $(this).parent().parent('.add-list-form-wrapper').addClass('collapse')
})

var cardBeingEdited = null;

$('.board').on('click', '.card', function(event) {
  cardBeingEdited = this
  $('#card-edit').modal()
  let text = $(this).children('.card-body').text()
  $('#card-edit-body').val(text)
})

$(".card-edit-save").on('click', function(event) {
  let val = $('#card-edit-body').val()
  $(cardBeingEdited).children('.card-body').text(val)
 $('#card-edit').modal('toggle')
})

$('.list-cards').sortable({
  connectWith:".list-cards"
}).disableSelection()






