// console.log("hey ninja");
//
// //setTimeout(function() {
// //  console.log("3 seconds have passed");
// //}, 3000);
//
// var time = 0;
// var timer = setInterval(function() {
//   time += 2
//   console.log(time + " seconds have passed");
//   if (time > 5){
//     clearInterval(timer);
//   }
// }, 2000);
//
// console.log(__dirname);
// console.log(__filename);
//
// //FUNCTIONs
// //normal function statement
// function sayHi(){
//   console.log('hi');
// }
//
// sayHi();
//
// //function expression
// var sayBye = function(){
//   console.log('bye');
// };
//
// //sayBye();
//
// function callFunction(fun){
//   fun();
// }
//
// callFunction(sayBye);
//
// var stuff =  require('./stuff');
// console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
// console.log(stuff.adder(5,6));
// console.log(stuff.adder(stuff.pi,5));

var fs = require('fs');
 
fs.readFile('readMe.txt', 'utf8', function(err, data){
  fs.writeFile('writeMe.txt', data);
}); //~sync~ blocks flow of code till file is completely read
//fs.writeFileSync('writeMe.txt', readMe);
