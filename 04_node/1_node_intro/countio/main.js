// Modify anything you like. Remember the content of the program is not important.
// This is just an example to help you practice reading and writing from and to files.
let fs = require('fs');
let readMe = fs.readFileSync('log.txt', 'utf8');
let firstLine = readMe.substring(0, readMe.indexOf("\n"));
let count = (readMe.match(/\n/g)||[]).length;
if (process.argv.indexOf('-s')!=-1 || process.argv.indexOf('--stats')!=-1) {
    console.log("Program has been run " + count + " times.");
    console.log("The first time main.js was run was " + firstLine);
} else {
    console.log("ran at:" + new Date());
    fs.writeFileSync('log.txt', readMe + "\n" + new Date());
}

/*
if(process.argv[2] === '-s' || process.argv[2] === '--stats' ) {
    console.log("stats requested");
} else {
    console.log("ran at:" + new Date());
}
*/
    