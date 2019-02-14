"use strict";
/* eslint-env jasmine */

const jsonfile = require('jsonfile');
const fs = require('fs');
const child_process = require('child_process');

const file = 'data.json';

describe("addressBookCLI tests", function() {
  let origData;
  beforeEach(function() {
    // Save and reset data before running test
    if (fs.existsSync(file)) {
      origData = jsonfile.readFileSync(file);
    } else {
      origData = [];
    }
    jsonfile.writeFileSync(file, []);
  });

  afterEach(function() {
    // restore original data after running test
    jsonfile.writeFileSync(file, origData);
  });

  describe("Displaying Contacts", function() {

    it("displays all contacts in the correct format when contacts exist", function(){
      jsonfile.writeFileSync(file, [
        {
          "name": "Moose",
          "number": 123
        },
        {
          "name": "Ricky",
          "number": 456
        }
      ]);
      const stdout = runAndCleanStdout('node addressBook.js display');
      expect(stdout.length).toBe(3);

      const moose = stdout[1].split(/[ ]+/)
      const ricky = stdout[2].split(/[ ]+/)
      expect(moose[0]).toEqual('Moose')
      expect(ricky[0]).toEqual('Ricky')
      expect(moose[1]).toEqual('123')
      expect(ricky[1]).toEqual('456')


    })

    it('displays the correct headers', function() {
      jsonfile.writeFileSync(file, [
        {
          "name": "Moose",
          "number": 123
        },
        {
          "name": "Ricky",
          "number": -1
        }
      ]);
      const stdout = runAndCleanStdout('node addressBook.js display');
      const header = stdout[0].trim().split(/[ ]+/)
      expect(header[0]).toEqual("CONTACT_NAME")
      expect(header[1]).toEqual("PHONE_NUMBER")
    })

    it("displays '-None-' for the number field when contact does not have a phone number", function(){
      jsonfile.writeFileSync(file, [
        {
          "name": "Moose",
          "number": 123
        },
        {
          "name": "Ricky",
          "number": -1
        }
      ]);
      const stdout = runAndCleanStdout('node addressBook.js display');
      const moose = stdout[1].split(/[ ]+/)
      const ricky = stdout[2].split(/[ ]+/)
      expect(moose[0]).toEqual('Moose')
      expect(ricky[0]).toEqual('Ricky')
      expect(moose[1]).toEqual('123')
      expect(ricky[1]).toEqual('-None-')
    })
  })
  describe("Adding Contacts", function() {
    it("Adds contacts when a name and valid number(or no number) is provided", function() {
      child_process.execSync('node addressBook.js add Pam 516');
      child_process.execSync('node addressBook.js add Frankie 123');
      child_process.execSync('node addressBook.js add Bob');
      const data = jsonfile.readFileSync(file)
      expect(data.length).toBe(3)
      expect(data[0]).toEqual({"name": "Pam", "number": 516})
      expect(data[1]).toEqual({"name": "Frankie", "number": 123})
      expect(data[2]).toEqual({"name": "Bob", "number": -1})
    });

    it("Does not add contact when name or number is invalid", function() {
      child_process.execSync('node addressBook.js add Pam 516');
      child_process.execSync('node addressBook.js add Frankie a123');
      child_process.execSync('node addressBook.js add 123 123');
      child_process.execSync('node addressBook.js add abc123 123');
      const data = jsonfile.readFileSync(file)
      expect(data.length).toBe(1)
      expect(data[0]).toEqual({"name": "Pam", "number": 516})
      // expect(data[1]).toEqual({"name": "Frankie", "number": 123})
      // expect(data[2]).toEqual({"name": "Bob", "number": -1})
    });

    it("Does not add contacts when no name is provided", function() {
      child_process.execSync('node addressBook.js add 516');
      child_process.execSync('node addressBook.js add');
      child_process.execSync('node addressBook.js add Frankie 123');
      child_process.execSync('node addressBook.js add Bob');
      const data = jsonfile.readFileSync(file)
      expect(data.length).toBe(2)
      expect(data[0]).toEqual({"name": "Frankie", "number": 123})
      expect(data[1]).toEqual({"name": "Bob", "number": -1})
    });
  });

  describe("Updating Contacts", function() {
    beforeEach(function() {
      //resets data before all tests
      jsonfile.writeFileSync(file, [
        {
          "name": "Moose",
          "number": 123
        },
        {
          "name": "Ricky",
          "number": 456
        },
        {
          "name": "Graham",
          "number": 789
        }
      ]);
    });

    it("Updates the contact's number when only number argument is passed", function() {
      child_process.execSync('node addressBook.js update Moose 999');
      const data = jsonfile.readFileSync(file)
      expect(data.length).toBe(3)
      expect(data[0]).toEqual({"name": "Moose", "number": 999})

    });

    it("Updates the contact's name when only name argument is passed", function() {
      child_process.execSync('node addressBook.js update Moose Moooose');
      const data = jsonfile.readFileSync(file)
      expect(data.length).toBe(3)
      expect(data[0]).toEqual({"name": "Moooose", "number": 123})
    });

    it("Does not make any changes when contact does not exist", function() {
      child_process.execSync('node addressBook.js update Pam 516');
      const data = jsonfile.readFileSync(file)
      expect(data.length).toBe(3)
      expect(data[0]).toEqual({"name": "Moose", "number": 123})
      expect(data[1]).toEqual({"name": "Ricky", "number": 456})
      expect(data[2]).toEqual({"name": "Graham", "number": 789})
    });

    it("Console logs a message when contact does not exist", function() {
      const stdout = runAndCleanStdout('node addressBook.js update Pam 516');
      expect(stdout.length).toBe(1);
      expect(stdout[0]).toEqual("No contact found");
    });



  })


  describe("Deleting Contacts", function() {
    beforeEach(function() {
      //resets data before all tests
      jsonfile.writeFileSync(file, [
        {
          "name": "Moose",
          "number": 123
        },
        {
          "name": "Ricky",
          "number": 456
        },
        {
          "name": "Graham",
          "number": 789
        }
      ]);
    });

    it("Deletes the contact when it exists", function() {
      child_process.execSync('node addressBook.js delete Moose');
      const data = jsonfile.readFileSync(file)
      expect(data.length).toBe(2)
      expect(data[0]).toEqual({"name": "Ricky", "number": 456})
      expect(data[1]).toEqual({"name": "Graham", "number": 789})

    });

    it("Does not make any changes when contact does not exist", function() {
      child_process.execSync('node addressBook.js delete Pam');
      const data = jsonfile.readFileSync(file)
      expect(data.length).toBe(3)
      expect(data[0]).toEqual({"name": "Moose", "number": 123})
      expect(data[1]).toEqual({"name": "Ricky", "number": 456})
      expect(data[2]).toEqual({"name": "Graham", "number": 789})
    });

    it("Does not make any changes when no contact was specified", function() {
      child_process.execSync('node addressBook.js delete');
      const data = jsonfile.readFileSync(file)
      expect(data.length).toBe(3)
      expect(data[0]).toEqual({"name": "Moose", "number": 123})
      expect(data[1]).toEqual({"name": "Ricky", "number": 456})
      expect(data[2]).toEqual({"name": "Graham", "number": 789})
    });

    it("Console logs a message when contact does not exist", function() {
      const stdout = runAndCleanStdout('node addressBook.js delete Pam');
      expect(stdout.length).toBe(1);
      expect(stdout[0]).toEqual("No contact found");
    });
  });
});

function runAndCleanStdout(cmd){
  let stdout = child_process.execSync(cmd, {encoding:'utf-8'});
  stdout = stdout.split(/\r\n|\r|\n/);
  stdout.splice(-1, 1);
  return stdout;
}

function generateTasks(){
  child_process.execSync('node addressBook.js add Pam 123');
  child_process.execSync('node addressBook.js add Frankie 123');
  // child_process.execSync('node addressBook.js add Call the internet guy -p 3');
}
