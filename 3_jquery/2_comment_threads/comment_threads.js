"use strict";

// This file contains JavaScript that will run on your page.
// YOUR CODE HERE

<<<<<<< HEAD:3_jquery/comment_threads/comment_threads.js
$(".post").on('click',function() {
    let name = prompt("Enter you name")
    let comment = prompt("What is your comment")
    $('.comments').append(`<div class="comment">
    <div class="author">"${name}" says:</div>
    <div class="message">${comment}</div>
    <div class="controls">
      <button class="hide-replies btn btn-default">Hide Replies</button>
      <button class="show-replies btn btn-default">Show Replies</button>
      <button class="reply btn btn-default">Reply</button>
    </div>
    <div class="replies"></div>
  </div>`
    )});

    //Reply
    $('.container').on('click','.reply', event =>
    {
        let name = prompt("Enter you name")
        let comment = prompt("What is your comment")
        let commentDiv = $(event.currentTarget).closest('.comment')
        let repliesDiv = commentDiv.children('.replies')
        repliesDiv.append(`<div class="comment">
        <div class="author">"${name}" says:</div>
        <div class="message">${comment}</div>
        <div class="controls">
          <button class="hide-replies btn btn-default">Hide Replies</button>
          <button class="show-replies btn btn-default">Show Replies</button>
          <button class="reply btn btn-default">Reply</button>
        </div>
        <div class="replies"></div>
      </div>`)
    })
    $('.comments').on('click','.hide-replies',event => {
        let commentDiv = $(event.currentTarget).closest('.comment')
        let repliesDiv = commentDiv.children('.replies')
        repliesDiv.hide("slow")
        $('.hide-replies').toggleClass('.show-replies')
    })
    $('.comments').on('click','.show-replies',event => {
        let commentDiv = $(event.currentTarget).closest('.comment')
        let repliesDiv = commentDiv.children('.replies')
        repliesDiv.show("slow")
    })

=======
>>>>>>> 2aa527233bf92ad25bbe3de7f8af3f6211463d78:3_jquery/2_comment_threads/comment_threads.js
