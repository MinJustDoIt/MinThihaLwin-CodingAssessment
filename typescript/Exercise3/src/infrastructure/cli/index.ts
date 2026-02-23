import { ShuffleDeck } from '../../application/use-cases/ShuffleDeck';
import { Deck } from '../../domain/entities/Deck';

console.log('--- Card Game Engine Started ---');

// 1. Initialize the Domain Entity
const deck = new Deck();
console.log(`\nCreated a new deck with ${deck.cards.length} cards.`);
console.log(`Top card before shuffle: ${deck.cards[0]?.toString()}`);

// 2. Initialize the Application Use Case (No mock injected, so it uses real Math.random!)
const shuffler = new ShuffleDeck();
const shuffledDeck = shuffler.execute(deck);

console.log('\n--- Shuffling ---');
console.log(`Top card AFTER shuffle: ${shuffledDeck.cards[0]?.toString()}`);
console.log(`Second card AFTER shuffle: ${shuffledDeck.cards[1]?.toString()}`);
