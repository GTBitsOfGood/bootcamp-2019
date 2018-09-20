module.exports = {

  // Find the company that has the largest single amount of money invested. In this
  // case, we are not looking for the sum of all investments made on a company. But
  // the largest sum invested by one investor.
  // You should iterate over the array of investments and find out the single largest
  // "original investment" made on a company.
  // Return the entire investment object, not just the amount.
  singleLargestInvestment: function(arr){
    return arr.reduce(function(accumulator, investment){
      if (investment.originalInvestment > accumulator){
        return investment.originalInvestment
      }
      return accumulator
    }, 0)
  },

// Find the average of all the original investments for all companies.
// This is equal to the sum of all the original investments divided by the number
// of investments.
// Return a Number.
  averageOfOriginalInvestments: function(arr){
    var sum = arr.reduce(function(accumulator, investment){
      return accumulator + investment.originalInvestment;
    }, 0)
    return sum/arr.length;
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
    var investmentAmounts = {};
    arr.forEach(function(investment) {
      if (investmentAmounts[investment.company] === undefined){
        investmentAmounts[investment.company] = 0;
      }
      investmentAmounts[investment.company] += investment.originalInvestment
    });
    return investmentAmounts;
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
    var investorAmounts = {};
    arr.forEach(function(investment) {
      if (investorAmounts[investment.investorId] === undefined){
        investorAmounts[investment.investorId] = 0;
      }
      investorAmounts[investment.investorId] += investment.originalInvestment
    });
    return investorAmounts;
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
  totalCurrentValueOfInvestors: function(arr, investorId){
    var investorCurrentValues = {};
    arr.forEach(function(investment) {
      if (investorCurrentValues[investment.investorId] === undefined){
        investorCurrentValues[investment.investorId] = 0;
      }
      investorCurrentValues[investment.investorId] += investment.valueToday
    });
    return investorCurrentValues;
  },

  // To find out who the best investor is, you need to find out the ratio in which
  // they made money. If they invested 100 and their todayValue is 200, they made
  // 2x their investment. Calculate this for all investors and figure out who the
  // best one is!
  // Note: Remember to use their total of investments and the total of current value:
  // using totalOriginalInvestmentsByInvestors & totalCurrentValueOfInvestors
  // Return an investorID;
  bestInvestorByValueIncrease: function(arr){
    var investmentRatios = {}
    var totalInvestmentByInvestors = this.totalOriginalInvestmentsByInvestors(arr)
    var totalCurrentValueOfInvestors = this.totalCurrentValueOfInvestors(arr)
    for (var investor in totalInvestmentByInvestors) {
      if (totalInvestmentByInvestors.hasOwnProperty(investor)) {
        investmentRatios[investor]=totalCurrentValueOfInvestors[investor]/totalInvestmentByInvestors[investor];
      }
    }
    var bestInvestor=0;
    var bestInvestmentRatio=0;
    for (var investor in investmentRatios) {
      if (investmentRatios.hasOwnProperty(investor)) {
        if (investmentRatios[investor]>bestInvestmentRatio){
          bestInvestmentRatio=investmentRatios[investor];
          bestInvestor=investor;
        }
      }
    }
    return bestInvestor;
  },

// Find out which company was invested the most in using the originalInvestment.
// Return a companyId
  mostInvestedCompany: function(arr){
    var companyCurrentValues = {};
    arr.forEach(function(investment) {
      if (companyCurrentValues[investment.company] === undefined){
        companyCurrentValues[investment.company] = 0;
      }
      companyCurrentValues[investment.company] += investment.originalInvestment
    });

    var mostInvestedCompanyId=0;
    var mostInvestedCompanyAmount=0;
    for (var companyId in companyCurrentValues) {
      if (companyCurrentValues.hasOwnProperty(companyId)) {
        if (companyCurrentValues[companyId]>mostInvestedCompanyAmount){
          mostInvestedCompanyAmount=companyCurrentValues[companyId];
          mostInvestedCompanyId=companyId;
        }
      }
    }
    return mostInvestedCompanyId;
  }

}
