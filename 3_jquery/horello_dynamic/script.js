"use strict";

// YOUR JAVASCRIPT CODE GOES HERE
$(window).on('load', function(){

    //ADD LIST
    $('.add-list').on('click', function(event){
        $('.add-list-form-wrapper').removeClass('collapse');
    });

    $('.add-list-cancel').on('click', function(event){
        $('.addd').addClass('collapse');
    });


    $('.add-list-save').on('click', function(event){
        let title = $('.add-list-form-wrapper').children().children('input').val();

        $('.list-container:nth-child(1)').before(`<div class="list-container">
          <div class="list">
            <div class="list-header">
              <span class="list-title">${title}</span>
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
        </div>`);
        $(this).children('input').val('');
        $('.add-list-form-wrapper').addClass('collapse');

    });

    //ADD CARD
    $('.board').on('click','.add-card', function(event){
        $(this).siblings('.add-card-form-wrapper').removeClass('collapse');
    });

    $('.board').on('click','.add-card-cancel', function(event){
        $(this).parent().parent().addClass('collapse');
    });

    $('.board').on('click','.add-card-save', function(event){
        let title = $(this).siblings('input').val();
        $(this).parent().parent().parent().siblings('.list-cards').append(`<div class="card">
          <span class="card-more">
            <span class="glyphicon glyphicon-align-left"></span>
          </span>
          <div class="card-body">${title}</div>
        </div>`);
        $(this).parent().parent().addClass('collapse');
        $(this).siblings('input').val('');
    });

    //EDIT CARD
    var cardBeingEdited = null;

    $('.board').on('click', '.card', function(event){
        cardBeingEdited = this;
        $('#card-edit').modal();
        let text = $(this).children('.card-body').text();
        $('#card-edit-body').val(text);
    });

    $('.card-edit-save').on('click', function(event) {
        $(cardBeingEdited).children('.card-body').text($('#card-edit-body').val());
        $('#card-edit').modal('toggle');
    });

    //SORTABLE
    $('.list-cards').sortable({
        connectWith:".list-cards"
    }).disableSelection();


});