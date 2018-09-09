describe("Part 1: Invalid expressions throw an exception", function() {
  it("util.calc('') -> Error, empty expression", function() {
    expect(function() { util.calc('')  }).toThrow();
  });
  it("util.calc('1 2') -> Error, missing operator", function() {
    expect(function() { util.calc('1 2')  }).toThrow();
  });
  it("util.calc('-') -> Error, no numbers", function() {
    expect(function() { util.calc('-')  }).toThrow();
  });
  it("util.calc('1 2 +') -> Error, operator at the wrong spot", function() {
    expect(function() { util.calc('1 2 +')  }).toThrow();
  });
  it("util.calc('+ 1 -18') -> Error, operator at the wrong spot", function() {
    expect(function() { util.calc('+ 1 -18')  }).toThrow();
  });
  it("util.calc('1 + 55 -2') -> Error, too many numbers", function() {
    expect(function() { util.calc('1 + 55 -2')  }).toThrow();
  });
  it("util.calc('29 + + 1') -> Error, too many operators", function() {
    expect(function() { util.calc('29 + + 1')  }).toThrow();
  });
  it("util.calc('29 + 1 +') -> Error, too many operators", function() {
    expect(function() { util.calc('29 + 1 +')  }).toThrow();
  });
});

describe("Part 2: Support addition and subtraction", function() {
  it("util.calc('1') -> 1", function() {
    expect(util.calc('1') ).toBe(1);
  });
  it("util.calc('-12') -> -12", function() {
    expect(util.calc('-12') ).toBe(-12);
  });
  it("util.calc('3 + 2') -> 5", function() {
    expect(util.calc('3 + 2')).toEqual(5);
  });
  it("util.calc('3 + 8 + 2 + 1') -> 14", function() {
    expect(util.calc('3 + 8 + 2 + 1')).toEqual(14);
  });
  it("util.calc('2 - 1 + 5 + 6') -> 12", function() {
    expect(util.calc('2 - 1 + 5 + 6')).toEqual(12);
  });
  it("util.calc('-1 + 3 - 2 + 5') -> 5", function() {
    expect(util.calc('-1 + 3 - 2 + 5')).toEqual(5);
  });
});

describe("Part 3. Support multiplication and division", function() {
  it("util.calc('1 * 3 / 5 + 2') -> 2.6", function() {
    expect(util.calc('1 * 3 / 5 + 2')).toEqual(2.6);
  });
  it("util.calc('1 + 3 / 2 - 5') -> -2.5", function() {
    expect(util.calc('1 + 3 / 2 - 5')).toEqual(-2.5);
  });
  it("util.calc('5 * 6 + 8 / 9 * 4.5') -> 34", function() {
    expect(util.calc('5 * 6 + 8 / 9 * 4.5')).toEqual(34);
  });
  it("util.calc('1 / 0 + 1 * 0') -> Infinity", function() {
    expect(util.calc('1 / 0 + 1 * 0')).toEqual(Infinity);
  });
  it("util.calc('1 / 0 * 0 + 1') -> NaN", function() {
    expect(util.calc('1 / 0 * 0 + 1')).toEqual(NaN);
  });
})

describe("Bonus: implement sqrt", function() {
  it("util.calc('sqrt 4') -> 2, same as Math.sqrt(4)", function() {
    expect(util.calc('sqrt 4') ).toBe(2);
  });
  it("util.calc('sqrt 4 - 3') -> -1", function() {
    expect(util.calc('sqrt 4 - 3') ).toBe(-1);
  });
  it("util.calc('-1 * sqrt 4 - 3') -> -5", function() {
    expect(util.calc('-1 * sqrt 4 - 3') ).toBe(-5);
  });
  it("util.calc('sqrt 9 - 3 * 10') -> -27", function() {
    expect(util.calc('sqrt 9 - 3 * 10') ).toBe(-27);
  });
  it("util.calc('10 * sqrt 81') -> 90", function() {
    expect(util.calc('10 * sqrt 81') ).toBe(90);
  });
});
