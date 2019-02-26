// Modify anything you like. Remember the content of the program is not important.
// This is just an example to help you practice reading and writing from and to files.
let counter = 0;
let fs = require('fs')
if(process.argv[2] === '-s' || process.argv[2] === '--stats' ) {
    counter = counter + 1;
    fs.writeFile('log.txt', counter, (err) => {
      if (err) return console.log(err);
    });
} else {
    fs.writeFile('log.txt', new Date(), (err) => {
      if (err) return console.log(err);
    });
  }
