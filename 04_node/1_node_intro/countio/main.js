// Modify anything you like. Remember the content of the program is not important.
// This is just an example to help you practice reading and writing from and to files.

if(process.argv[2] === '-s' || process.argv[2] === '--stats' ) {
    console.log("stats requested");
} else {
    console.log("ran at:" + new Date());
}
let fs = require('fs')
fs.writeFileSync('./log.txt', 'HELLO ADDING THIS SHIT WEEEEEEEEEEEE')
console.log(fs.readFileSync('./log.txt', 'utf8'))
    fs.writeFileSync('./log.txt', 'overwrite fam')