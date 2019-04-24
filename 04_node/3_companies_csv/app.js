"use strict";

const fs = require('fs');
const path = require('path');
const csvjson = require('csvjson');

// Write a function that takes the path of a CSV file, reads its contents and
// returns them as as an array of JavaScript objects.
//
// You will need to use:
//  - csvjson.toObject(): https://www.npmjs.com/package/csvjson
//  - fs.readFileSync(): https://nodejs.org/api/fs.html#fs_fs_readfilesync_file_options
//
//
// ex. fileReader('investments1.csv') ->
//   [ { id: '1',
//      investorId: '1',
//      company: '9',
//      originalInvestment: '1100000',
//      valueToday: '1000000' },
//    { id: '2',
//      investorId: '1',
//      company: '1',
//      originalInvestment: '200000',
//      valueToday: '190000' },
//    { id: '3',
//      investorId: '5',
//      company: '10',
//      originalInvestment: '234000',
//      valueToday: '300000' },
//      ...
//    ]

function fileReader(csvFilePath){
    let data = fs.readFileSync('./investments1.csv', "utf8");
    let jdata = csvjson.toObject(data, {
        delimiter : ',', // optional
    });
    return jdata;

}
fileReader('./investments1.csv');

// Write a function that takes an array of investment objects and replaces
// the "originalInvestment", "valueToday" fields in each object with numbers
// instead of strings. Return this new/modified array.
//
// You will need to use: parseInt()
// ex. parser([{id: '1', investorId: '1', company: '9',
//              originalInvestment: '1100000',
//              valueToday: '1000000' }]) ->
//   [{id: '1', investorId: '1', company: '9',
//     originalInvestment: 1100000, // Note conversion from string to number
//     valueToday: 1000000}] // Note conversion from string to number

function parser(arr){
    for (item in arr) {
        item['valueToday'] = parseInt(item['valueToday']);
        item['originalInvestment'] = parseInt(item['originalInvestment']);
    }

  // YOUR CODE HERE
}

module.exports = {
  fileReader: fileReader,
  parser: parser
};
