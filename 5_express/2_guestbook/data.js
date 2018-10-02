"use strict";

// This module allows you to save data using JSON files.
var fs = require('fs');
var jsonfile = require('jsonfile');
var file = 'data.json';

module.exports = {
  read: function() {
    if (!fs.existsSync(file)) {
      return [
      {
        title: 'Eggs',
        body: 'Somebody has been eating my eggs! I have to label them.',
        author: 'Darwish',
        date: '6/13/2016',
      },
      {
        title: 'First post',
        body: 'This is the first post in the guest book',
        author: 'Moose',
        date: '1/20/2016',
      }
      ];
    }
    return jsonfile.readFileSync(file);
  },
  save: function(data) {
    if (! data) {
      throw new Error("Data is missing, can't save.");
    }
    if (! Array.isArray(data)) {
      throw new Error("Data must be an array.");
    }
    jsonfile.writeFileSync(file, data);
  }
};
