module.exports = {

  // Find the company that has the largest single amount of money invested. In this
  // case, we are not looking for the sum of all investments made on a company. But
  // the largest sum invested by one investor.
  // You should iterate over the array of investments and find out the single largest
  // "original investment" made on a company.
  // Return the amount of the largest investment.
  singleLargestInvestment: function(arr){
    let investment = 0;
    arr.forEach((item) => {
      if(item.originalInvestment > investment) {
        investment = item.originalInvestment;
      }
    });
    return investment;
    // Fields to be parsed: "originalInvestment", "valueToday"
  },

  // Find the average of all the original investments for all companies.
  // This is equal to the sum of all the original investments divided by the number
  // of investments.
  // Return a Number.
  averageOfOriginalInvestments: function(arr){
    let investment = 0;
    let numin = 0;
    arr.forEach((item) => {
      investment += item.originalInvestment;
      numin += 1;
    });
    return investment / numin;
    // Fields to be parsed: "originalInvestment", "valueToday"
  },

  // Find out how much a company got as the original investments. In this case, You
  // will have to iterate over the companies and find all the investments for each
  // company and add them up to find how much money they started with.
  // Return an object that contains company ids as keys and their total original investment
  // as values. The object's structure should look something like this:
  // {
  //  1: 595000,
  //  2: 1024000,
  //   ...
  // }
  totalOriginalInvestmentForCompanies: function(arr){
    inobj = {};
    arr.forEach((item) =>{
      if (item.company in inobj) {
        inobj[item.company] += item.originalInvestment;
      } else {
        let temp = item.company;
        inobj[temp] = item.originalInvestment;
        //console.log(item.id);
      }
    });
    //console.log(inobj);
    return inobj;
    // Fields to be parsed: "originalInvestment", "valueToday"
  },

  // Find out how much money an investor spent as  original investments. You will
  // need to iterate through all the investments, find all the investments for each
  // investor and add them up to find how much money someone invested at the beginning.
  // Return an object that contains investor ids as keys and their total original investment
  // as values.  The object's structure should look something like this:
  // {
  //  1: 595000,
  //  2: 1024000,
  //   ...
  // }
  totalOriginalInvestmentsByInvestors: function(arr){
    // Fields to be parsed: "originalInvestment", "valueToday"
    inobj = {};
    arr.forEach((item) =>{
      if (item.investorId in inobj) {
        inobj[item.investorId] += item.originalInvestment;
      } else {
        let temp = item.investorId;
        inobj[temp] = item.originalInvestment;
        //console.log(item.id);
      }
    });
    //console.log(inobj);
    return inobj;
  },

  // This function is similar to the one above, but it returns the current value
  // for each investor. To get this value, you need to iterate through all the investments,
  // find all the currentValues for each investor and add them up to find how much
  // money someone has now from their investment
  // Return an object that contains investor ids as keys and their total todayValue
  // as values. The object's structure should look something like this:
  // {
  //  1: 595000,
  //  2: 1024000,
  //   ...
  // }
    // Fields to be parsed: "originalInvestment", "valueToday"
  totalCurrentValueOfInvestors: function(arr){
    inobj = {};
    arr.forEach((item) =>{
      if (item.investorId in inobj) {
        inobj[item.investorId] += item.valueToday;
      } else {
        let temp = item.investorId;
        inobj[temp] = item.valueToday;
        //console.log(item.id);
      }
    });
    //console.log(inobj);
    return inobj;
  },

  // To find out who the best investor is, you need to find out the ratio in which
  // they made money. If they invested 100 and their todayValue is 200, they made
  // 2x their investment. Calculate this for all investors and figure out who the
  // best one is!
  // Note: Remember to use their total of investments and the total of current value:
  // using totalOriginalInvestmentsByInvestors & totalCurrentValueOfInvestors
  // Return an investorId;
  bestInvestorByValueIncrease: function(arr){
    let bestid = 0;
    let bestratio = 0;
    let currval = module.exports.totalCurrentValueOfInvestors(arr);
    let orgval = module.exports.totalOriginalInvestmentsByInvestors(arr);
    for (var property in currval) {
      if (currval[property] / orgval[property] > bestratio) {
        bestratio = currval[property] / orgval[property];
        bestid = property;
      }
    }
    return bestid;
    // Fields to be parsed: "originalInvestment", "valueToday"
  },

  // Find out which company was invested the most in using the originalInvestment.
  // Return a companyId
  mostInvestedCompany: function(arr){
    // Fields to be parsed: "originalInvestment", "valueToday"
    let calc = module.exports.totalOriginalInvestmentForCompanies(arr);
    let id = -1;
    let maxin = 0;
    for (var property in calc) {
      if (calc[property] > maxin) {
        id = property;
        maxin = calc[property];
      }
    }
    return id;
  }

}
