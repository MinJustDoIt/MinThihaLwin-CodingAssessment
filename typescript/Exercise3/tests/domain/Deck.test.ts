import { Card } from '../../src/domain/entities/Card';
import { Deck } from '../../src/domain/entities/Deck';
import { Suit } from '../../src/domain/enums/Rank';
import { Rank } from '../../src/domain/enums/Suit';

describe('Card & Deck Domain', () => {
  it('should create a valid card', () => {
    const card = new Card(Suit.Spades, Rank.Ace);
    expect(card.suit).toBe(Suit.Spades);
    expect(card.rank).toBe(Rank.Ace);
  });

  it('should initialize a standard 52-card deck', () => {
    const deck = new Deck();
    // Assumption: A standard deck has exactly 52 unique cards
    expect(deck.cards.length).toBe(52);
  });
});
