import { Suit } from '../enums/Rank';
import { Rank } from '../enums/Suit';

export class Card {
  // Immutable properties: A card cannot change its suit or rank once created
  constructor(
    public readonly suit: Suit,
    public readonly rank: Rank,
  ) {}

  public toString(): string {
    return `${Rank[this.rank]} of ${Suit[this.suit]}`;
  }
}
