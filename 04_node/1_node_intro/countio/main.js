// Modify anything you like. Remember the content of the program is not important.
// This is just an example to help you practice reading and writing from and to files.
var fs = require('fs');
fs.writeFileSync('log.txt', 'Hello, my name is Varshita Patakottu');
if(process.argv[2] === '-s' || process.argv[2] === '--stats' ) {
    console.log("stats requested");
} else {
    console.log("ran at:" + new Date());
}
