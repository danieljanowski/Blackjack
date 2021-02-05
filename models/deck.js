const Card = require('./card.js');
const Suit = require('./suit');
const Rank = require('./rank');

class Deck {
  _cardDeck = [];

  populateCards() {
    for (const cardSuit in Suit) {
      for (const cardRank in Rank) {
        const newCard = new Card(cardSuit, cardRank);
        this._cardDeck.push(newCard);
      }
    }
    // console.log(this._cardDeck);
  }

  firstCard() {
    return this._cardDeck[0];
  }

  shuffleCards() {
    this._cardDeck.sort(() => Math.random() - 0.5);
  }

  countCards() {
    return this._cardDeck.length;
  }
}

module.exports = Deck;
