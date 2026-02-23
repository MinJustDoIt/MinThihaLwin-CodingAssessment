import { Deck } from '../../domain/entities/Deck';

export class ShuffleDeck {
  // Dependency Injection: Defaults to Math.random, but allows injecting mocks for testing
  constructor(private readonly randomizer: () => number = Math.random) {}

  public execute(deck: Deck): Deck {
    // Create a shallow copy to maintain immutability of the original deck
    const shuffledCards = [...deck.cards];

    // Fisher-Yates Shuffle Algorithm: 0(n) complexity and in-place shuffling
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(this.randomizer() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j]!, shuffledCards[i]!];
    }

    // Return a new Deck instance with the shuffled cards (requires updating Deck class slightly to accept cards, or just returning the Card array)
    // For simplicity, we will just mutate the copied array and assign it to a new Deck
    const newDeck = new Deck();
    Object.assign(newDeck, { cards: shuffledCards });

    return newDeck;
  }
}
