import { Suit } from '../enums/Rank';
import { Rank } from '../enums/Suit';
import { Card } from './Card';

export class Deck {
  // Readonly array to prevent external modification of the deck's cards
  public readonly cards: Card[] = [];

  constructor() {
    this.initializeStandardDeck();
  }

  private initializeStandardDeck(): void {
    const suits = [Suit.Hearts, Suit.Diamonds, Suit.Clubs, Suit.Spades];
    const ranks = [
      Rank.Two,
      Rank.Three,
      Rank.Four,
      Rank.Five,
      Rank.Six,
      Rank.Seven,
      Rank.Eight,
      Rank.Nine,
      Rank.Ten,
      Rank.Jack,
      Rank.Queen,
      Rank.King,
      Rank.Ace,
    ];

    for (const suit of suits) {
      for (const rank of ranks) {
        this.cards.push(new Card(suit, rank));
      }
    }
  }
}
