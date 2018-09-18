"use strict";

window.momentum = window.momentum || {};

// Core - time, image

momentum.Core = function() {
  this.timeStr = "";
  this.quoteStr = "";
  this.weatherStr = 64;

  this.timeEl = $(".time");
  this.quoteEl = $(".quote");
  this.weatherEl = $(".weather");

  // weather controller
  this.weatherCtrl = new momentum.WeatherCtrl();

  // quote controller
  this.quoteCtrl = new momentum.QuoteCtrl();
};

momentum.Core.prototype = {
  setTime: function() {
    var newTime = new Date();
    this.timeStr = newTime.getHours() + ":" + newTime.getMinutes();
  },
  setQuote: function(quoteData) {
    this.quoteStr = quoteData.contents.quotes[0].quote;
    this.quoteEl.text(this.quoteStr);
  },
  setWeather: function(weatherData) {
    this.weatherStr = Math.floor(weatherData.main.temp * (9 / 5) - 459.67);
  },
  updateTime: function() {
    this.setTime();
  },
  updateWeather: function() {
    this.weatherCtrl.fetchWeather(this.setWeather.bind(this));
  },
  updateQuote: function() {
    this.quoteCtrl.fetchQuote(this.setQuote.bind(this));
  },
  start: function() {
    this.setTime();
    this.updateWeather();
    this.updateQuote();
  },
  render: function() {
    this.timeEl.text(this.timeStr);
    this.quoteEl.text(this.quote);
    this.weatherEl.text(this.weatherStr);
  }
};
