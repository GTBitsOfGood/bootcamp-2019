// Modify anything you like. Remember the content of the program is not important.
// This is just an example to help you practice reading and writing from and to files.
let fs = require('fs');

if(process.argv[2] === '-s' || process.argv[2] === '--stats' ) {
    console.log(fs.readFileSync('./log.txt').toString().split('\n').length - 1);
} else {
    fs.appendFile('log.txt', new Date() + '\n', () => console.log('updated'));
    console.log("ran at:" + new Date());
}
