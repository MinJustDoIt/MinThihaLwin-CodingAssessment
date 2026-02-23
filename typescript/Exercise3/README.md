# Exercise 3: Greenfield Card Game Core

## 1) Initial To-Do List & Reasoning

To tackle this greenfield project safely, the work prioritized a strict testing environment and a decoupled architecture. Because the constraints explicitly state that the UI and detailed game rules are unknown, the main objective is to avoid over-engineering while delivering a robust, highly testable core domain.

### Development Environment Setup

- **TypeScript + Node.js**
	- Chosen for strong static typing.
	- A card domain benefits from strict enums (`Suit`, `Rank`) to prevent invalid states.
- **Jest**
	- Required to support the Test-Driven Development (TDD) workflow.
- **ESLint + Prettier**
	- Added from day one to enforce consistent style and catch issues early (for example: unused variables and implicit `any`).

### Scaffold / Structure (Clean Architecture)

The solution is organized using Clean Architecture to isolate core game logic from external frameworks:

- `src/domain/`
	- Pure entities (`Card`, `Deck`) and domain constructs.
	- No framework or library dependencies.
- `src/application/`
	- Business use cases (for example, `ShuffleDeck`).
- `src/infrastructure/`
	- Delivery mechanisms and adapters.
	- Currently includes a CLI adapter, while remaining ready for a future React/Next.js UI without domain changes.

### Delivery Pipeline (CI/CD & DevOps)

- **GitHub Actions** (`ci.yml`)
	- Triggers on pushes and pull requests.
	- Runs:
		- `npm ci`
		- `tsc --noEmit`
		- `npm run verify` (linting + formatting + tests)

**Reasoning:**
These checks automate quality gates so code cannot be merged if it breaks the TDD safety net or violates project style standards.

---

## 2) Scaffolding the Solution (Hand-off Readiness)

The foundational structure is fully scaffolded. A future teammate can immediately begin building a UI or implementing game-specific rules (such as Poker or Blackjack) without rewriting core logic.

### Ready for Hand-off

- **Domain Entities**
	- Strictly typed `Card` and `Deck` classes.
	- `Deck` initializes a standard 52-card set reliably.
- **Application Use Cases**
	- `ShuffleDeck` use case randomizes deck order predictably and safely.
- **Test Suite**
	- Jest tests validate domain behavior and shuffle logic.
- **CLI Demo**
	- `src/infrastructure/cli/index.ts` demonstrates how outer layers invoke the core application.

---

## 3) Architecture Decision Record (ADR)

### ADR 001 — Deck Shuffling Algorithm and Randomness Dependency Injection

- **Date:** 2026-02-24
- **Status:** Accepted

### Context

The application requires shuffling a standard 52-card deck for play against an intelligent opponent. Shuffle fairness and unpredictability are critical for game integrity. At the same time, randomness is difficult to test and can create flaky CI outcomes if not designed carefully.

### Alternatives Considered

1. **Naive sort-based shuffle** (`array.sort(() => Math.random() - 0.5)`)
	 - **Rejected** because it is mathematically biased.
	 - JavaScript sorting algorithms are not intended to produce uniform random permutations.
	 - This can lead to non-uniform card-position frequency, which may provide exploitable patterns.

2. **External utility library** (for example, `lodash.shuffle`)
	 - **Rejected** to keep the core lightweight and dependency-free.
	 - Adds unnecessary coupling for a single operation.

### Decision

Use a manual **Fisher-Yates (Knuth) Shuffle** implementation in `ShuffleDeck`.

- Time complexity: $O(n)$
- Provides an unbiased, uniform permutation when paired with a suitable random source.

The random source is injected:

`constructor(private readonly randomizer: () => number = Math.random)`

This dependency injection keeps the use case deterministic under test and flexible in production.

### Outcomes, Learnings, and Surprises

- Hardcoding `Math.random()` makes shuffle tests non-deterministic and brittle.
- Injecting a randomizer (for example, `() => 0`) makes behavior predictable for tests.
- Deterministic tests allow strict assertions without flaky CI.
- This also future-proofs the design: infrastructure can later swap `Math.random()` for a stronger source (for example, cryptographically secure randomness) without changing domain/application logic.

