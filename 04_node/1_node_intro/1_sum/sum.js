function getInputAndCalc() {
  const readline = require('readline');
  const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  r1.question("Number 1? ", function(n1) {
    r1.question("Number 2? ", function(n2) {
      console.log(parseInt(n1) + parseInt(n2));
      r1.close();
    });
  });
}

function sum(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += parseInt(nums[i]);
  }
  return sum;
}
if(process.argv.length === 2) {
  getInputAndCalc();
} else {
  console.log(sum(process.argv.slice(2)));
}