import {
  UNDER_16_AGE_YEARS,
  MS_IN_YEAR,
  MAX_AGE_FOR_RANDOM,
  MIN_AGE_FOR_RANDOM,
  MAX_MARRIED_NAME_LENGTH,
} from "./shared/constants";

// Renamed People to Person to better reflect that it represents a single individual, and to follow common naming conventions for classes.
export class Person {
  // Use constant for Under16 calculation
  private static Under16: Date = new Date(
    Date.now() - UNDER_16_AGE_YEARS * MS_IN_YEAR,
  );
  public Name: string;
  public DOB: Date;

  /** 
      I simplified the constructor by using a default parameter for dob, which eliminates the need for an if-else statement. 
      If dob is not provided, it will default to Person.Under16, ensuring that the code is cleaner and easier to read.
    */
  constructor(name: string, dob: Date = Person.Under16) {
    this.Name = name;
    this.DOB = dob;
  }
}

export class BirthingUnit {
  // MaxItemsToRetrieve
  private _people: Person[];

  constructor() {
    this._people = [];
  }

  private createRandomPerson(): Person {
    const name = Math.floor(Math.random() * 2) === 0 ? "Bob" : "Betty";
    const age = Math.floor(
      Math.random() * (MAX_AGE_FOR_RANDOM - MIN_AGE_FOR_RANDOM) +
        MIN_AGE_FOR_RANDOM,
    );
    const dob = new Date(Date.now() - age * MS_IN_YEAR);
    return new Person(name, dob);
  }

  /**
   ** GetPeoples
   ** @param i number of people to generate
   ** @returns Array<Person>
   ** Renamed the method to getPeople to follow common naming conventions for methods,
   ** and to better reflect that it returns an array of Person objects.
   */
  public getPeople(i: number): Person[] {
    for (let j = 0; j < i; j++) {
      // This abstracts the logic for creating a random person into a separate method, which makes the code cleaner and easier to maintain.
      this._people.push(this.createRandomPerson());
    }

    return this._people;
  }

  // Renamed GetMarried to getMarried to follow common naming conventions for methods, and to better reflect that it returns a string representing the married name.
  public getMarried(p: Person, lastName: string): string {
    if (lastName.includes("test")) return p.Name;

    // Use template literals for string concatenation, which is more readable and easier to maintain.
    const fullName = `${p.Name} ${lastName}`;

    // Use constant for max married name length
    if (fullName.length > MAX_MARRIED_NAME_LENGTH) {
      return fullName.substring(0, MAX_MARRIED_NAME_LENGTH);
    }

    return fullName;
  }
}

/**
 * The original code had several issues, including the use of magic numbers, lack of constants for important values, and a constructor that could be simplified.
 * The refactored code addresses these issues by defining constants for magic numbers, simplifying the constructor with default parameters, and improving method names for better readability and maintainability.
 * The tests provided in the CodeToRefactor.test.ts file should now pass successfully, as the refactored code has been designed to meet the expected behavior outlined in the tests.
 * Overall, the refactored code is cleaner, more maintainable, and adheres to best practices in TypeScript development.
 *
 * Tools introduced in the refactor:
 **The original project provided the core compilation and testing stack (typescript, jest, ts-node). To ensure high code quality and enforce the naming conventions highlighted in my initial code review, I introduced the following tools to the package.json:
 *** ESLint Ecosystem (eslint, @eslint/js, typescript-eslint): Implemented the modern ESLint flat config (eslint.config.mts) to enforce TypeScript best practices, catch unused variables, and ensure consistent camelCase naming conventions.
 *** eslint-plugin-jest & globals: Added to support linting specifically within the testing environment without throwing false-positive errors on global Jest variables (like describe or it).
 *** jiti: Added to support runtime TypeScript configuration loading for the modern ESLint setup.
 *** NPM Script: Added "lint": "eslint" to easily execute the linter.
 */
