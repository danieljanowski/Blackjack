const assert = require('assert');
const Deck = require('../models/deck');
const Suit = require('../models/suit');
const Rank = require('../models/rank');
const Card = require('../models/card');

describe('Deck', () => {
  let deck1;

  beforeEach(() => {
    deck1 = new Deck();
  });

  it('deck has cards', () => {
    deck1.populateCards();
    const actual = deck1.countCards();
    assert.strictEqual(actual, 4 * 13);
    const actualFirstCard = deck1.firstCard();
    const expectedFirstCard = new Card(Suit.HEARTS, Rank.TWO);
    assert.strictEqual(actualFirstCard.rank, expectedFirstCard.rank.name);
  });

  it('deck can be shuffled', () => {
    deck1.populateCards();
    const actualFirstCard = deck1.firstCard();
    deck1.shuffleCards();
    const actualFirstCardAfter = deck1.firstCard();
    assert.notDeepStrictEqual(actualFirstCard, actualFirstCardAfter);
  });

  it('deck is able to deal the card', () => {
    deck1.populateCards();
    deck1.shuffleCards();
    const actual = deck1.countCards();
    assert.strictEqual(actual, 4 * 13);
    const FirstCard = deck1.firstCard();
    const dealtFirstCard = deck1.dealCard();
    assert.strictEqual(FirstCard, dealtFirstCard);
    const actual2 = deck1.countCards();
    assert.strictEqual(actual2, 4 * 13 - 1);
  });
});
