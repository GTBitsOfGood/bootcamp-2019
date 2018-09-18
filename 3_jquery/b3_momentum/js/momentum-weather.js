"use strict";

window.momentum = window.momentum || {};

// Weather

momentum.WeatherCtrl = function() {
  this.apiKey = "fb4df014999b07367bc204e36149f403";
  this.apiUrl =
    "http://api.openweathermap.org/data/2.5/weather?q=Philadelphia&APPID=" +
    this.apiKey;
};

momentum.WeatherCtrl.prototype = {
  fetchWeather: function(cb) {
    $.ajax({
      url: this.apiUrl,
      method: "GET",
      success: cb
    });
  }
};
