module.exports = {

<<<<<<< HEAD
  // Find the company that has the largest single amount of money invested. In this
  // case, we are not looking for the sum of all investments made on a company. But
  // the largest sum invested by one investor.
  // You should iterate over the array of investments and find out the single largest
  // "original investment" made on a company.
  // Return the amount of the largest investment.
  singleLargestInvestment: function(arr){
    // Fields to be parsed: "originalInvestment", "valueToday"
    let investment = 0;
    arr.forEach((item) => {
      if(item.orignalInvestment > investment) {
        investment = item.orignalInvestment;
      }
    })
=======
  // Find the largest investment. In this case, we are not looking for at the sum of
  // all investments made on a company, but the largest investment made an one point
  // in time. Return the amount of the largest investment, according to the
  // "originalInvestment" field.
  singleLargestInvestment: function(arr) {
    // Fields to be parsed: "originalInvestment"
>>>>>>> 0901d9f38b9a33df1fd894eafe5ad5266ba22263
  },

  // Find the average of all the original investments for all companies.
  // This is equal to the sum of all the original investments divided by the number
  // of investments.
  // Return a Number.
<<<<<<< HEAD
  averageOfOriginalInvestments: function(arr){
    // Fields to be parsed: "originalInvestment", "valueToday"
    let investment = 0;
    let num = 0;
    arr.forEach((item) => {
      investment += item.orignalInvestment;
      num += 1;
    })
    return investment/num;
=======
  averageOfOriginalInvestments: function(arr) {
    // Fields to be parsed: "originalInvestment"
>>>>>>> 0901d9f38b9a33df1fd894eafe5ad5266ba22263
  },

  // Find out how much a company got as the original investments. In this case, you
  // will have to iterate over the companies and find all the investments for each
  // company and add them up to find how much money they started with.
  // Return an object that contains company ids as keys and their total original investment
  // as values. The object's structure should look something like this:
  // {
  //  1: 595000,
  //  2: 1024000,
  //   ...
  // }
<<<<<<< HEAD
  totalOriginalInvestmentForCompanies: function(arr){
    // Fields to be parsed: "originalInvestment", "valueToday"
    let investment = 0;
    let num = 0;
    let list = {};
    arr.forEach((item) => {
      if(item.company in list){
        list[item.company] += item.orignalInvestment;
      } else {
        list[item.company] = item.orignalInvestment;
      }
    })
    return list;
=======
  totalOriginalInvestmentForCompanies: function(arr) {
    // Fields to be parsed: "company", "originalInvestment"
>>>>>>> 0901d9f38b9a33df1fd894eafe5ad5266ba22263
  },

  // Find out how much money an investor spent as  original investments. You will
  // need to iterate through all the investments, find all the investments for each
  // investor and add them up to find how much money someone invested at the beginning.
  // Return an object that contains investor ids as keys and their total original investment
  // as values. The object's structure should look something like this:
  // {
  //  1: 595000,
  //  2: 1024000,
  //   ...
  // }
<<<<<<< HEAD
  totalOriginalInvestmentsByInvestors: function(arr){
    // Fields to be parsed: "originalInvestment", "valueToday"
    let investment = 0;
    let num = 0;
    let list = {};
    arr.forEach((item) => {
      if(item.investorId in list){
        list[item.investorId] += item.orignalInvestment;
      } else {
        list[item.investorId] = item.orignalInvestment;
      }
    })
    return list;
=======
  totalOriginalInvestmentsByInvestors: function(arr) {
    // Fields to be parsed: "investorId", "originalInvestment"
>>>>>>> 0901d9f38b9a33df1fd894eafe5ad5266ba22263
  },

  // This function is similar to the one above, but it returns the value of all
  // the investments an investor has made in terms of their *current* value. To get
  // this value, you need to iterate through all the investments, find all the
  // currentValues for each investor and add them up to find how much money each
  // person has now from their investments.
  // Return an object that contains investor ids as keys and their total todayValue
  // as values. The object's structure should look something like this:
  // {
  //  1: 595000,
  //  2: 1024000,
  //   ...
  // }
    // Fields to be parsed: "investorId", "valueToday"
  totalCurrentValueOfInvestors: function(arr){
    let investment = 0;
    let num = 0;
    let list = {};
    arr.forEach((item) => {
      if(item.investorId in list){
        list[item.investorId] += item.valueToday;
      } else {
        list[item.investorId] = item.valueToday;
      }
    })
    return list;
  },

  // To find out who the best investor is, you need to find out the ratio in which
  // they made money. If they invested 100 and their todayValue is 200, they made
  // 2x their investment. Calculate this for all investors and figure out who the
  // best one is!
  // Note: Remember to use their total of investments and the total of current value:
  // using module.exports.totalOriginalInvestmentsByInvestors and
  // module.exports.totalCurrentValueOfInvestors
  // Return an investor ID;
  bestInvestorByValueIncrease: function(arr) {
    // Fields to be parsed: "originalInvestment", "valueToday"
    let curr = module.exports.totalCurrentValueOfInvestors(arr);
    let old = module.exports.totalOriginalInvestmentsByInvestors(arr);
    let best = 0;
    let bestVal = 0;
    for(var property in curr) {
      if(curr[property]/old[property] > bestVal) {
        bestVal = curr[property]/old[property];
        best = property;
      }
    }
    return best;
  },

  // Find out which company was invested the most in using the originalInvestment.
<<<<<<< HEAD
  // Return a companyId
  mostInvestedCompany: function(arr){
    // Fields to be parsed: "originalInvestment", "valueToday"
    let curr = module.exports.totalOriginalInvestmentForCompanies(arr);
    let bestId = -1;
    let best = 0;
    for(var property in curr) {
      if(curr[property] > best) {
        bestId = property
        best = curr[property];
      }
    }
    return bestId;
=======
  // Return a company ID.
  mostInvestedCompany: function(arr) {
    // Fields to be parsed: "company", "originalInvestment"
>>>>>>> 0901d9f38b9a33df1fd894eafe5ad5266ba22263
  }

}