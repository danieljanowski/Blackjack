const assert = require("assert");
const suit = require("../models/suit");
const rank = require("../models/rank");
const Card = require("../models/Card");

describe("Card", function () {
  let card1;

  beforeEach(function () {
    card1 = new Card(suit.DIAMONDS, rank.JACK);
  });

  it("card can get suit", function () {
    const actual = card1.suit;
    assert.strictEqual(actual, suit.DIAMONDS);
  });

  it("card can get rank", function () {
    const actual = card1.rank;
    assert.strictEqual(actual, rank.JACK);
    assert.strictEqual(actual.name, "JACK");
    assert.strictEqual(actual.value, 10);
  });
});
