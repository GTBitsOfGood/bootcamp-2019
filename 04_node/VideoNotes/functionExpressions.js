//normal function statement
function sayHi() {
  console.log('hi');
}

sayHi();

//anonymous function expression
const sayBye = function(){
  console.log('bye');
};



function callFunction(fun){
  fun();
}

callFunction(sayBye);
