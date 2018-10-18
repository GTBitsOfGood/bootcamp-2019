window.game = game || {};

$(document).on("submit", "form", function(e){
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: $(location).attr('href'),
    data: { /* YOUR CODE HERE */ },
    cache: false,
    success: function(game){
      // YOUR CODE HERE
    }
  });
  return false;
});

window.addEventListener("load", getData, false);

function getData(){
  // YOUR CODE HERE
}


function play(game){
  // YOUR CODE HERE
}

function showCard(card) {
  var html="";
  switch(card.suit) {
    case "hearts": suit_text = "&hearts;"; break;
    case "diamonds": suit_text = "&diams;"; break;
    case "spades": suit_text = "&spades;"; break;
    case "clubs": suit_text = "&clubs;"; break;
  }
  html = "<div class='card " + card.suit + "'>\
            <div class='card-value'>" + card.symbol + "</div>\
            <div class='suit'>" + suit_text + "</div>\
            <div class='main-number'>"+card.symbol +"</div>\
            <div class='invert card-value'>"+card.symbol+"</div>\
            <div class='invert suit'>"+suit_text+"</div>\
          </div>";
  return html;
}

function hit() {
  // YOUR CODE HERE
}

function stand() {
  // YOUR CODE HERE
}
