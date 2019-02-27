// Modify anything you like. Remember the content of the program is not important.
// This is just an example to help you practice reading and writing from and to files.
const fs = require('fs');
let stat = 0;
let first = true;

if(process.argv[2] === '-s' || process.argv[2] === '--stats' ) {
    if(first) {
      first = false;
      date1 = new Date();
    }
    stat++;
    fs.writeFileSync('log.txt', stat);
} else {
    const d8 = "ran at:" + new Date();
    fs.writeFileSync('log.txt', d8);
}
