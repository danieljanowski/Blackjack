const assert = require('assert');
const Suit = require('../models/suit');
const Rank = require('../models/rank');
const Card = require('../models/card');

describe('Card', () => {
  let card1;

  beforeEach(() => {
    card1 = new Card(Suit.DIAMONDS, Rank.JACK);
  });

  it('card can get suit', () => {
    const actual = card1.suit;
    assert.strictEqual(actual, Suit.DIAMONDS);
  });

  it('card can get rank', () => {
    const actual = card1.rank;
    assert.strictEqual(actual, Rank.JACK);
    assert.strictEqual(actual.name, 'JACK');
    assert.strictEqual(actual.value, 10);
  });
});
