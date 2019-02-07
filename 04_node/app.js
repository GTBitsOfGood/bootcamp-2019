console.log('hey');
setTimeout(function(){
    console.log('3 seconds have passed');
}, 3000)
var time = 0;
var timer = setInterval(function(){
    time += 2;
    console.log(time + ' seconds have passed');
    if (time > 5) {
        clearInterval(timer);
    }
}, 2000)
console.log(__dirname);
console.log(__filename);

function callFunction(fun) {
    fun();
}

//normal function statement
function sayHi() {
    console.log('hi');
}
sayHi();

//function expression 
var sayBye = function(){
    console.log('bye');
};
sayBye();

callFunction(sayBye);
//trying to call function from count.js
var stuff = require('./stuff');
console.log(stuff.counter(['vy', 'crystal', 'ryu']));
console.log(stuff.adder(5,3));
console.log(stuff.pi);

//reading from files
var fs = require('fs');
var readMe = fs.readFileSync('readMe.txt', 'utf8', function(err, data){
    console.log(data);
    fs.writeFile('writeMe.txt', data);
});
console.log(readMe);

//writing from files
fs.writeFileSync('writeMe.txt', 'readMe');

//asynchronous code that does all the code below while this runs
fs.readFile('readMe.txt', 'utf8', function(err,data){
    //fs.writeFile('writeMe.txt', 'hello');
    console.log(data);
});
console.log('test');

