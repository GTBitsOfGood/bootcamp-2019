// YOUR CODE HERE

// $.get( "https://gtbitsofgood.github.io/bootcamp-static/poem.txt", function( data ) {
//   console.log('inside')
// });

var numWords = 0;
console.log("test")
$.ajax({url:"https://gtbitsofgood.github.io/bootcamp-static/poem.txt", type: "GET"}).done(function(result) {
    let words = result.split(' ');
    console.log(words);
    numWords = words.length;

    $('#count').text(`${numWords}`);
});



