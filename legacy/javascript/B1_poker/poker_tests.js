"use strict";

describe("rankPokerHand()", function() {
  it("rankPokerHand(['5H', '5C', '6S', '7S', 'KD'], ['2C', '3S', '8S', '8D', '10D']) -> 2, Pair of 8 vs Pair of 5", function() {
    expect(rankPokerHand(['5H', '5C', '6S', '7S', 'KD'], ['2C', '3S', '8S', '8D', '10D'])).toBe(2);
  });
  it("rankPokerHand(['5D', '8C', '9S', 'JS', 'AC'], ['2C', '5C', '7D', '8S', 'QH']) -> 1, High card Ace vs High card Queen", function() {
    expect(rankPokerHand(['5D', '8C', '9S', 'JS', 'AC'], ['2C', '5C', '7D', '8S', 'QH'])).toBe(1);
  });
  it("rankPokerHand(['2D', '9C', 'AS', 'AH', 'AC'], ['3D', '6D', '7D', '10D', 'QD']) -> 2, 3 aces vs Diamond flush", function() {
    expect(rankPokerHand(['2D', '9C', 'AS', 'AH', 'AC'], ['3D', '6D', '7D', '10D', 'QD'])).toBe(2);
  });
  it("rankPokerHand(['4D', '6S', '9H', 'QH', 'QC'] ['3D', '6D', '7H', 'QD', 'QS']) -> 1, Pair of Q with high 9, Pair of Q with high 7", function() {
    expect(rankPokerHand(['4D', '6S', '9H', 'QH', 'QC'], ['3D', '6D', '7H', 'QD', 'QS'])).toBe(1);
  });
  it("rankPokerHand(['2H', '2D', '4C', '4D', '4S'], ['3C', '3D', '3S', '9S', '9D']) -> 1, Full house with 3 4s, Full house with 3 3s", function() {
    expect(rankPokerHand(['2H', '2D', '4C', '4D', '4S'], ['3C', '3D', '3S', '9S', '9D'])).toBe(1);
  });
});

describe("Straight flush", function() {
  it("rankPokerHand(['KD', 'AD', '10D', 'JD', 'QD'], ['10S', 'KS', 'QS', 'JS', '9S']) -> 1, ace over king", function() {
    expect(rankPokerHand(['KD', 'AD', '10D', 'JD', 'QD'], ['10S', 'KS', 'QS', 'JS', '9S']) ).toBe(1);
  });
  it("rankPokerHand(['KD', 'AD', '10S', 'JD', 'QD'], ['10S', 'KS', 'QS', 'JS', '9S']) -> 2, only 2 has straight flush", function() {
    expect(rankPokerHand(['KD', 'AD', '10S', 'JD', 'QD'], ['10S', 'KS', 'QS', 'JS', '9S']) ).toBe(2);
  });
});

describe("Pair", function() {
  it("rankPokerHand(['KD', 'AS', '3H', '4H', '8H'], ['AD', 'AS', '9C', '4C', '8C']) -> 2, 2 has pair", function() {
    expect(rankPokerHand(['KD', 'AS', '3H', '4H', '8H'], ['AD', 'AS', '9C', '4C', '8C']) ).toBe(2);
  });
  it("rankPokerHand(['AD', 'AS', '3H', '4H', '8H'], ['KD', 'KS', '3C', '4C', '8C']) -> 1, 1 has higher pair", function() {
    expect(rankPokerHand(['AD', 'AS', '3H', '4H', '8H'], ['KD', 'KS', '3C', '4C', '8C']) ).toBe(1);
  });
  it("rankPokerHand(['AD', 'AS', '3H', '4H', '8H'], ['AD', 'AS', '9C', '4C', '8C']) -> 2, 9 kicker", function() {
    expect(rankPokerHand(['AD', 'AS', '3H', '4H', '8H'], ['AD', 'AS', '9C', '4C', '8C']) ).toBe(2);
  });
});

describe("Flush", function() {
  it("rankPokerHand(['KD', '2D', '10D', 'JD', 'QD'], ['2S', 'KS', 'QS', 'AS', '9S']) -> 2, flush, ace over king", function() {
    expect(rankPokerHand(['KD', '2D', '10D', 'JD', 'QD'], ['2S', 'KS', 'QS', 'AS', '9S']) ).toBe(2);
  });
  it("rankPokerHand(['KD', '2D', '10D', 'JD', 'QD'], ['2H', 'KS', 'AS', 'AS', '9S']) -> 1, 1 has flush", function() {
    expect(rankPokerHand(['KD', '2D', '10D', 'JD', 'QD'], ['2H', 'KS', 'AS', 'AS', '9S']) ).toBe(1);
  });
});

describe("Straight", function() {
  it("rankPokerHand(['KC', 'AD', '10D', 'JD', 'QD'], ['10S', 'KH', 'QS', 'JS', '9S']) -> 1, ace over king", function() {
    expect(rankPokerHand(['KC', 'AD', '10D', 'JD', 'QD'], ['10S', 'KH', 'QS', 'JS', '9S']) ).toBe(1);
  });
  it("rankPokerHand(['KD', '2D', '10S', 'JD', 'QC'], ['10S', 'KH', 'QS', 'JS', '9S']) -> 2, only 2 has straight", function() {
    expect(rankPokerHand(['KD', '2D', '10S', 'JD', 'QC'], ['10S', 'KH', 'QS', 'JS', '9S']) ).toBe(2);
  });
});

describe("Full House", function() {
  it("rankPokerHand(['2S', '2D', '2C', 'AH', 'AS'], ['4D', 'AS', '4S', '5S', '5S']) -> 1, full house over 2 pair", function() {
    expect(rankPokerHand(['2S', '2D', '2C', 'AH', 'AS'], ['4D', 'AS', '4S', '5S', '5S']) ).toBe(1);
  });
  it("rankPokerHand(['2S', '2D', '2C', 'AH', 'AS'], ['4D', '4S', '4S', '5S', '5S']) -> 2, 4 over 2", function() {
    expect(rankPokerHand(['2S', '2D', '2C', 'AH', 'AS'], ['4D', '4S', '4S', '5S', '5S']) ).toBe(2);
  });
  it("rankPokerHand(['2S', '2D', '2C', 'AH', 'AS'], ['2D', '2S', '2S', '5S', '5S']) -> 1, ace over 5", function() {
    expect(rankPokerHand(['2S', '2D', '2C', 'AH', 'AS'], ['2D', '2S', '2S', '5S', '5S']) ).toBe(1);
  });
});

describe("Three of a Kind", function() {
  it("rankPokerHand(['KD', 'AS', 'AH', '4H', '8H'], ['AD', 'AS', '9C', 'AC', '8C']) -> 2, 2 has three of a kind", function() {
    expect(rankPokerHand(['KD', 'AS', 'AH', '4H', '8H'], ['AD', 'AS', '9C', 'AC', '8C']) ).toBe(2);
  });
  it("rankPokerHand(['AD', 'AS', 'AH', '4H', '8H'], ['KD', 'KS', 'KC', '4C', '8C']) -> 1, 1 has higher three of a kind", function() {
    expect(rankPokerHand(['AD', 'AS', 'AH', '4H', '8H'], ['KD', 'KS', 'KC', '4C', '8C']) ).toBe(1);
  });
  it("rankPokerHand(['AD', 'AS', '3H', 'AH', '8H'], ['AD', 'AS', '9C', '4C', 'AC']) -> 2, 9 kicker", function() {
    expect(rankPokerHand(['AD', 'AS', '3H', 'AH', '8H'], ['AD', 'AS', '9C', '4C', 'AC']) ).toBe(2);
  });
});

describe("Four of a Kind", function() {
  it("rankPokerHand(['KD', 'KS', 'AH', 'KH', '8H'], ['2D', '2S', '9C', '2C', '2C']) -> 2, 2 has four of a kind", function() {
    expect(rankPokerHand(['KD', 'KS', 'AH', 'KH', '8H'], ['2D', '2S', '9C', '2C', '2C']) ).toBe(2);
  });
  it("rankPokerHand(['KD', 'KS', 'KH', 'KH', '8H'], ['2D', '2S', '9C', '2C', '2C']) -> 1, 1 has higher 4 of a kind", function() {
    expect(rankPokerHand(['KD', 'KS', 'KH', 'KH', '8H'], ['2D', '2S', '9C', '2C', '2C']) ).toBe(1);
  });
  it("rankPokerHand(['KD', 'KS', 'KH', 'KH', '8H'], ['KD', 'KS', '9C', 'KC', 'KC']) -> 2, same four of a kind 9 kicker", function() {
    expect(rankPokerHand(['KD', 'KS', 'KH', 'KH', '8H'], ['KD', 'KS', '9C', 'KC', 'KC']) ).toBe(2);
  });
});

describe("Two Pair", function() {
  it("rankPokerHand(['2D', '2S', '4H', 'KH', '8H'], ['3D', '3S', '4C', '4C', '2C']) -> 2, 2 has two pair", function() {
    expect(rankPokerHand(['2D', '2S', '4H', 'KH', '8H'], ['3D', '3S', '4C', '4C', '2C']) ).toBe(2);
  });
  it("rankPokerHand(['2D', '2S', '4H', '8H', '8H'], ['3D', '3S', '4C', '4C', '2C']) -> 1, 1 has higher two pair", function() {
    expect(rankPokerHand(['2D', '2S', '4H', '8H', '8H'], ['3D', '3S', '4C', '4C', '2C']) ).toBe(1);
  });
  it("rankPokerHand(['2D', '2S', '4H', '8H', '8H'], ['2D', '2S', '8C', '9C', '8C']) -> 2, same two pairs, 1 has higher card", function() {
    expect(rankPokerHand(['2D', '2S', '4H', '8H', '8H'], ['2D', '2S', '8C', '9C', '8C']) ).toBe(2);
  });
});


describe("High Card", function() {
  it("rankPokerHand(['KD', 'AD', '10S', 'JD', 'QD'], ['10C', 'KS', 'QS', 'JS', '9S']) -> 1, A over K", function() {
    expect(rankPokerHand(['KD', 'AD', '10S', 'JD', 'QD'], ['10C', 'KS', 'QS', 'JS', '9S']) ).toBe(1);
  });
  it("rankPokerHand(['KD', 'AS', '3H', '4H', '8H'], ['QD', 'AS', '9C', '4C', '8C']) -> 1, K over Q", function() {
    expect(rankPokerHand(['KD', 'AS', '3H', '4H', '8H'], ['QD', 'AS', '9C', '4C', '8C']) ).toBe(1);
  });
  it("rankPokerHand(['KD', 'AS', '3H', '4H', '8H'], ['QD', 'AS', 'KC', '4C', '8C']) -> 2, Q over 8", function() {
    expect(rankPokerHand(['KD', 'AS', '3H', '4H', '8H'], ['QD', 'AS', '9C', 'KC', '8C']) ).toBe(2);
  });
});
