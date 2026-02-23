import { ShuffleDeck } from '../../src/application/use-cases/ShuffleDeck';
import { Deck } from '../../src/domain/entities/Deck';

describe('ShuffleDeck Use Case', () => {
  it('should shuffle the deck deterministically using a mocked randomizer', () => {
    const deck = new Deck();
    const originalFirstCard = deck.cards[0];

    // WE inject a predicatable "random" function to guarantee test consistency
    const mockRandomizer = () => 0.99;
    const shuffleUseCase = new ShuffleDeck(mockRandomizer);

    const shuffledDeck = shuffleUseCase.execute(deck);

    // If shuffled correctly with 0.99 the first card should have moved
    expect(shuffledDeck.cards[0]).not.toEqual(originalFirstCard);
    expect(shuffledDeck.cards.length).toBe(52); // Ensure no cards are lost during shuffle
  });
});
