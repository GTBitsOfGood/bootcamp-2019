"use strict";

window.momentum = window.momentum || {};

// Quotes

momentum.QuoteCtrl = function() {
  this.apiUrl = "http://quotes.rest/qod.json";
};

momentum.QuoteCtrl.prototype = {
  fetchQuote: function(cb) {
    $.ajax({
      url: this.apiUrl,
      method: "GET",
      success: cb
    });
  }
};
