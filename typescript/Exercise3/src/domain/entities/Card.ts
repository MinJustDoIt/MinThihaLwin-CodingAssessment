import type { Suit } from '../enums/Rank';
import type { Rank } from '../enums/Suit';

export class Card {
  // Immutable properties: A card cannot change its suit or rank once created
  constructor(
    public readonly suit: Suit,
    public readonly rank: Rank,
  ) {}
}
