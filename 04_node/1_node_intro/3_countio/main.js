// Modify anything you like. Remember the content of the program is not important.
// This is just an example to help you practice reading and writing from and to files.
let count = 0;
let lastRan = "never";
if(process.argv[2] === '-s' || process.argv[2] === '--stats' ) {
    console.log("stats requested");
    console.log("Number of times ran " + count);
    console.log("Last time it was ran " + lastRan);
} else {
    lastRan = new Date();
    console.log("ran at:" + lastRan);
    let fs = require('fs');
    fs.readFileSync('log.txt', 'utf8');
    fs.writeFile('log.txt', 'hey', function(err , data){
        if(err){
            console.log(err);
        }
    });
}
    