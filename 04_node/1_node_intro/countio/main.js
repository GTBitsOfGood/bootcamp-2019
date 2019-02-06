// Modify anything you like. Remember the content of the program is not important.
// This is just an example to help you practice reading and writing from and to files.
var fs = require('fs');
let readfile = fs.readFileSync('./log.txt','utf8');
if(process.argv[2] === '-s' || process.argv[2] === '--stats' ) {
    console.log(readfile.split('\n').length - 1);
} else {
    let timestamp = (readfile + "\n" + "ran at: " + new Date());
    fs.writeFileSync('./log.txt', timestamp);
}
