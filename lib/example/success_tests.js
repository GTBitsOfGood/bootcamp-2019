var success
if (typeof require != 'undefined') {
  success = require('./success.js');
}

describe("success.returnTrue()", function() {
  it("success.returnTrue() -> returnTrue", function() {
    expect(success.returnTrue()).toBe(true);
  });
})
