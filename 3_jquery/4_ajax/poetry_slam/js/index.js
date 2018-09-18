// YOUR CODE HERE
// URL to GET: https://gtbitsofgood.github.io/bootcamp-static/poem.txt
$.ajax({
  url: 'https://horizons-json-cors.s3.amazonaws.com/poem.txt',
})
.done( r => {
  let count = r.split(" ").length
  $("#count").text(count)
})
