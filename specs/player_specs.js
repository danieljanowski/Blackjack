const assert = require('assert');
const Player = require('../models/player');

describe('Player', () => {
  let player1;

  beforeEach(() => {
    player1 = new Player('Daniel');
  });

  it('player has name', () => {
    const actual = player1.name;
    assert.strictEqual(actual, 'Daniel');
  });
});
