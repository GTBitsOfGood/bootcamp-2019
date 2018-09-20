// YOUR CODE HERE
// URL to GET: http://horizons-json-cors.s3.amazonaws.com/poem.txt
$.get('https://gtbitsofgood.github.io/bootcamp-static/poem.txt', function(response) {
	let words = response.split(" ").length;
	console.log(response);
	$('#count').text(words);
})

