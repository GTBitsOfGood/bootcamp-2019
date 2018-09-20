// YOUR CODE HERE
// URL to GET: http://horizons-json-cors.s3.amazonaws.com/poem.txt
$.get('http://horizons-json-cors.s3.amazonaws.com/poem.txt', poem => {
	$("#count").html(poem.split(" ").length)
})
