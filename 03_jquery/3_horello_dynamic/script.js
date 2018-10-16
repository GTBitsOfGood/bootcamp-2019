"use strict";

// YOUR JAVASCRIPT CODE GOES HERE
$('.add-list-container').on('click','.add-list', event => {
    console.log(event.currentTarget)
    //$('.add-list-form-wrapper').removeClass('collapse')
    let wrapper = $(event.currentTarget).next('.add-list-form-wrapper')
    wrapper.removeClass('collapse')
})
 $('.add-list-container').on('click','.add-list-cancel', event => {
    let wrapper = $(event.currentTarget).closest('.add-list-form-wrapper')
    wrapper.addClass('collapse')
})
$('.add-list-container').on('click','.add-list-save', event => {
   let input = $(event.currentTarget).closest('.add-list-form-wrapper').find('input').val()
   console.log(input)
   //Fix this line here 
   console.log(event.currentTarget)
   $(event.currentTarget).prev('.list-container').before(`<div class="list-container">
     <div class="list">
       <div class="list-header">
         <span class="list-title">${input}</span>
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
})


