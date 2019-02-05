// Modify anything you like. Remember the content of the program is not important.
// This is just an example to help you practice reading and writing from and to files.

const fs = require('fs');

if (process.argv[2] === '-s' || process.argv[2] === '--stats' ) {
    let lines = fs.readFileSync('log.txt').toString().split('\n');
    // last line of log.txt should be a blank line
    console.log(`This has been run ${lines.length - 1} times`);
    console.log(`The first time it was run was ${lines[0]}`);
    console.log(`The last time it was run was ${lines[lines.length - 2]}`);
} else {
    let now = new Date();
    fs.appendFile('log.txt', now + '\n', (err) => {
        if (err) return console.log(err);
        console.log('Added current time to log.txt: ' + now)
    });
}
    