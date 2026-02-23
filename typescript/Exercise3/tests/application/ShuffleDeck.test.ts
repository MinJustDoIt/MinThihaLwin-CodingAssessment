import { ShuffleDeck } from '../../src/application/use-cases/ShuffleDeck';
import { Deck } from '../../src/domain/entities/Deck';

describe('ShuffleDeck Use Case', () => {
  it('should shuffle the deck deterministically using a mocked randomizer', () => {
    const deck = new Deck();
    const originalFirstCard = deck.cards[0];

    // WE inject a predicatable "random" function to guarantee test consistency
    const mockRandomizer = () => 0;
    const shuffleUseCase = new ShuffleDeck(mockRandomizer);

    const shuffledDeck = shuffleUseCase.execute(deck);

    // If shuffled correctly with 0 the first card should have moved
    console.log('Original first card:', originalFirstCard);
    console.log('Shuffled first card:', shuffledDeck.cards[0]);
    expect(shuffledDeck.cards[0]).not.toEqual(originalFirstCard);
    expect(shuffledDeck.cards.length).toBe(52); // Ensure no cards are lost during shuffle
  });
});
