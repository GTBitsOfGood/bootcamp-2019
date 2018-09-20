var app = require("../app");
const csvFilePath = 'investments1.csv';
var investmentCalc = require("../functions");

describe("Exercise 2: Parsing CSV: ", function () {
  it("app.fileReader('investments1.csv') -> array of objects containing data", function() {
    expect(app.fileReader('investments1.csv')).toEqual([ { id: '1',
      investorId: '1',
      company: '9',
      originalInvestment: '1100000',
      valueToday: '1000000' },
      { id: '2',
        investorId: '1',
        company: '1',
        originalInvestment: '200000',
        valueToday: '190000' },
      { id: '3',
        investorId: '5',
        company: '10',
        originalInvestment: '234000',
        valueToday: '300000' },
      { id: '4',
        investorId: '4',
        company: '6',
        originalInvestment: '20000',
        valueToday: '30000' },
      { id: '5',
        investorId: '5',
        company: '10',
        originalInvestment: '60000',
        valueToday: '50000' },
      { id: '6',
        investorId: '2',
        company: '3',
        originalInvestment: '356000',
        valueToday: '300000' },
      { id: '7',
        investorId: '3',
        company: '2',
        originalInvestment: '1000000',
        valueToday: '2500000' },
      { id: '8',
        investorId: '3',
        company: '7',
        originalInvestment: '10000',
        valueToday: '60000' },
      { id: '9',
        investorId: '3',
        company: '1',
        originalInvestment: '345000',
        valueToday: '700000' },
      { id: '10',
        investorId: '2',
        company: '6',
        originalInvestment: '234000',
        valueToday: '563000' },
      { id: '11',
        investorId: '10',
        company: '8',
        originalInvestment: '32000',
        valueToday: '15000' },
      { id: '12',
        investorId: '9',
        company: '3',
        originalInvestment: '500000',
        valueToday: '250000' },
      { id: '13',
        investorId: '8',
        company: '2',
        originalInvestment: '24000',
        valueToday: '12000' },
      { id: '14',
        investorId: '7',
        company: '4',
        originalInvestment: '75000',
        valueToday: '100000' },
      { id: '15',
        investorId: '6',
        company: '4',
        originalInvestment: '54000',
        valueToday: '94000' },
      { id: '16',
        investorId: '6',
        company: '1',
        originalInvestment: '50000',
        valueToday: '60000' },
      { id: '17',
        investorId: '9',
        company: '8',
        originalInvestment: '54000',
        valueToday: '78000' },
      { id: '18',
        investorId: '10',
        company: '5',
        originalInvestment: '10000',
        valueToday: '100000' } ]
    );
  });

  it("app.parser([{id: '1', investorId: '1', company: '9', originalInvestment: '1100000', valueToday: '1000000' }]) -> [{id: '1', investorId: '1', company: '9',originalInvestment: 1100000, valueToday: 1000000}]", function() {
    expect(app.parser([{id: '1', investorId: '1', company: '9', originalInvestment: '1100000', valueToday: '1000000' }]) ).toEqual([{id: '1', investorId: '1', company: '9',originalInvestment: 1100000, valueToday: 1000000}]);
  });
});

describe("Exercise 3: Functions: ", function () {

  it("Should convert each investment's originalInvestment and valueToday to numbers", function () {
    var data = app.fileReader(csvFilePath);
    var parsedData = app.parser(data);
    parsedData.forEach(function(investment){
      expect(isNaN(investment.originalInvestment)).toBe(false);
      expect(isNaN(investment.valueToday)).toBe(false);
    })
  });

  it("Find the companyId that has the single largest amount of money invested", function () {
    var data = app.fileReader(csvFilePath);
    var parsedData = app.parser(data);
    var data  = investmentCalc.singleLargestInvestment(parsedData)
    expect(data).toBe(1100000);
  });

  it("Find the average of all original investments", function () {
    var data = app.fileReader(csvFilePath);
    var parsedData = app.parser(data);
    var data  = investmentCalc.averageOfOriginalInvestments(parsedData)
    expect(data).toBe(242111.11111111112);
  });

  it("Get an object containing CompanyIds as keys and the total that was originally invested", function () {
    var data = app.fileReader(csvFilePath);
    var parsedData = app.parser(data);
    var data  = investmentCalc.totalOriginalInvestmentForCompanies(parsedData)
    expect(data).toEqual(
      {
        1: 595000,
        2: 1024000,
        3: 856000,
        4: 129000,
        5: 10000,
        6: 254000,
        7: 10000,
        8: 86000,
        9: 1100000,
        10: 294000
      }
    );
  });

  it("Get an object containing investorIds as keys and the total they originally invested", function () {
    var data = app.fileReader(csvFilePath);
    var parsedData = app.parser(data);
    var data  = investmentCalc.totalOriginalInvestmentsByInvestors(parsedData)
    expect(data).toEqual(
      {
        1: 1300000,
        2: 590000,
        3 : 1355000,
        4 : 20000,
        5 : 294000,
        6 : 104000,
        7 : 75000,
        8 : 24000,
        9 : 554000,
        10 : 42000
      }
    );
  });

  it("Get an object containing investorIds as keys and the total of their value now", function () {
    var data = app.fileReader(csvFilePath);
    var parsedData = app.parser(data);
    var data  = investmentCalc.totalCurrentValueOfInvestors(parsedData)
    expect(data).toEqual(
      {
        1 : 1190000,
        2 : 863000,
        3 : 3260000,
        4 : 30000,
        5 : 350000,
        6 : 154000,
        7 : 100000,
        8 : 12000,
        9 : 328000,
        10 : 115000
      }
    );
  });

  it("Get the investorId with the highest earning ratio from Current/Original value", function () {
    var data = app.fileReader(csvFilePath);
    var parsedData = app.parser(data);
    var data  = investmentCalc.bestInvestorByValueIncrease(parsedData)
    expect(data).toEqual('10')
  });

  it("Get an object containing the id of the companyId that has the most amount invested in", function () {
    var data = app.fileReader(csvFilePath);
    var parsedData = app.parser(data);
    var data  = investmentCalc.mostInvestedCompany(parsedData)
    expect(data).toEqual('9')
  });

});
