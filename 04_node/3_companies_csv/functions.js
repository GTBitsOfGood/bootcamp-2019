module.exports = {

  // Find the largest investment. In this case, we are not looking for at the sum of
  // all investments made on a company, but the largest investment made an one point
  // in time. Return the amount of the largest investment, according to the
  // "originalInvestment" field.
  singleLargestInvestment: function(arr) {
    // Fields to be parsed: "originalInvestment"
  },

  // Find the average of all the original investments for all companies.
  // This is equal to the sum of all the original investments divided by the number
  // of investments.
  // Return a Number.
  averageOfOriginalInvestments: function(arr) {
    // Fields to be parsed: "originalInvestment"
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
  totalOriginalInvestmentForCompanies: function(arr) {
    // Fields to be parsed: "company", "originalInvestment"
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
  totalOriginalInvestmentsByInvestors: function(arr) {
    // Fields to be parsed: "investorId", "originalInvestment"
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
  },

  // Find out which company was invested the most in using the originalInvestment.
  // Return a company ID.
  mostInvestedCompany: function(arr) {
    // Fields to be parsed: "company", "originalInvestment"
  }

}