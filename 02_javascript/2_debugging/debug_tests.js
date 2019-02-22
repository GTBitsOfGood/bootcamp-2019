"use strict";

describe("functionThatReturnsTrue()", function() {
  it("functionThatReturnsTrue() -> true", function() {
    expect(functionThatReturnsTrue()).toBe(true);
  });
});

describe("firstWord()", function() {
  it("firstWord('') -> ''", function() {
    expect(firstWord('') ).toBe('');
  });
  it("firstWord(' ') -> ''", function() {
    expect(firstWord(' ') ).toBe('');
  });
  it("firstWord(' abc') -> ''", function() {
    expect(firstWord(' abc') ).toBe('');
  });
  it("firstWord('abcd') -> 'abcd'", function() {
    expect(firstWord('abcd') ).toBe('abcd');
  });
  it("firstWord('abc d') -> 'abc'", function() {
    expect(firstWord('abc d') ).toBe('abc');
  });
  it("firstWord('abc d  e') -> 'abc'", function() {
    expect(firstWord('abc d  e') ).toBe('abc');
  });
});

