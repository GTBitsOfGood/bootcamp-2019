"use strict";

var fs = require('fs');
var path = require('path');
var csvjson = require('csvjson');

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

function fileReader(csvFilePath) {
    let fileArray = fs.readFileSync("investments1.csv", 'utf8').split('\r\n');
    for (let x = 0; x < fileArray.length; x++) {
        if (fileArray[x].length == 0) {
            fileArray.splice(x, 1);
        } else {
            let testA = fileArray[x].split(',');
            let company = {};
            if (x == 0) {
                var heading = [];
                heading = testA;
            }
            if (x > 0) {
                for (let y = 0; y < 5; y++) {
                    let tag = heading[y];
                    company[tag] = testA[y];
                    fileArray[x] = company;
                }
            }
        }
    }
    fileArray.splice(0, 1);
    return fileArray;
}

// Write a function that takes an array of investment objects and replaces
// the "originalInvestment", "valueToday" fields in each object with numbers
// instead of strings.
//
// You will need to use: parseInt()
// ex. parser([{id: '1', investorId: '1', company: '9',
//              originalInvestment: '1100000',
//              valueToday: '1000000' }]) ->
//   [{id: '1', investorId: '1', company: '9',
//     originalInvestment: 1100000, // Note conversion from string to number
//     valueToday: 1000000}] // Note conversion from string to number
function parser(arr) {
    let newArr = arr;
    newArr.forEach(function(item, index){
        newArr[index].originalInvestment = parseInt(newArr[index].originalInvestment);
        newArr[index].valueToday = parseInt(newArr[index].valueToday);
    });
    return newArr;
}

module.exports = {
    fileReader: fileReader,
    parser: parser
}
