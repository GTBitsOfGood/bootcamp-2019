// Modify anything you like. Remember the content of the program is not important.
// This is just an example to help you practice reading and writing from and to files.
let fs = require('fs');
if (process.argv[2] === '-s' || process.argv[2] === '--stats') {
    console.log("stats requested");
    let current = fs.readFileSync('log.txt', 'utf8');
    let curArray = current.split("\n");
    if (curArray.length < 2) {
        console.log('The program has not been ran.');
    } else {
        console.log('the program has been ran ' + (curArray.length - 1) + ' times.');
        console.log('first ran: ' + curArray[1]);
        console.log('last ran: ' + curArray[curArray.length - 1]);
    }
} else {
    console.log("ran at:" + new Date());
    let data = fs.readFileSync('log.txt', 'utf8') + "\nran at:" + new Date();
    fs.writeFileSync('log.txt', data);
}
