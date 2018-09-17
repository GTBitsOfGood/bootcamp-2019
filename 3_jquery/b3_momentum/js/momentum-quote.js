"use strict";

window.momentum = window.momentum || {};

// Quotes

momentum.QuoteCtrl = function() {
  this.apiUrl = "http://quotes.rest/qod.json";
};

momentum.QuoteCtrl.prototype = {
	// `fetchQuote(cb<Function>)` method
	// This function should fetch the quote of the day from the quotes API by performing an AJAX call. It should pass the given cb (callback) function to the success property of the call.
	// 
	// hint. look into $.ajax here: http://api.jquery.com/jquery.ajax/
	// hint. read through the documentation for the TheySaidSo API.
  fetchQuote: function(cb) {
		// YOUR CODE HERE
  }
};
