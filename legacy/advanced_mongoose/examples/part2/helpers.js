// YOU DO NOT NEED TO WORRY ABOUT THIS CODE
"use strict";

module.exports = {
  // Specify helpers which are only registered on this instance.
  helpers: {
    extname: '.hbs',
    formatDate: function (date) {
      date = new Date(date);
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var year = date.getFullYear();
      return month + "/" + day + "/" + year;
    },
    baseOne: function (num) {
      return num+1;
    }
  }
};
