import { Review } from "./CodeToRefactor";

describe("People - constructor", () => {
  it("should create a person with only a name", () => {
    const person = new Review.People("Alice");
    expect(person.Name).toBe("Alice");
  });

  it("should create a person with name and DOB", () => {
    const dob = new Date("1990-01-01");
    const person = new Review.People("Bob", dob);
    expect(person.Name).toBe("Bob");
    expect(person.DOB).toEqual(dob);
  });
});

// This test should FAIL because the current code always generate "Bob" (bug: Math.floor(Math.random() * 1) === 0 is always true)
describe('BirthingUnit - GetPeople', () => {
    let birthingUnit: Review.BirthingUnit;

    beforeEach(() => {
        birthingUnit = new Review.BirthingUnit();
    });

    it('should generate people with either "Bob" or "Betty" names', () => {
        const people = birthingUnit.GetPeople(50);
        const names = people.map(p => p.Name);
        const hasMultipleNames = new Set(names).size > 1;
        expect(hasMultipleNames).toBe(true);
        names.forEach(name => {
            expect(['Bob', 'Betty']).toContain(name);
        });
    });

    // This test should FAIL because the current code uses 356 days instead of 365, causing incorrect age calculations.
    it('should create people with realistic ages (18-85 years old', () => {
        const people = birthingUnit.GetPeople(50);
        const now = Date.now();

        people.forEach(person => {
            const ageInMs = now - person.DOB.getTime();
            const ageInYears = ageInMs / (365 * 24 * 60 * 60 * 1000);

            expect(ageInYears).toBeGreaterThanOrEqual(18);
            expect(ageInYears).toBeLessThanOrEqual(85);
        })
    });
});
