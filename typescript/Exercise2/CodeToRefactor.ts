// Define constraints for magic numnbers
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_YEAR = 365; // For simplicity, ignoring leap years
const MS_IN_SECOND = 1000;

const MS_IN_YEAR =
  DAYS_IN_YEAR *
  HOURS_IN_DAY *
  MINUTES_IN_HOUR *
  SECONDS_IN_MINUTE *
  MS_IN_SECOND;

const MIN_AGE_FOR_RANDOM = 18;
const MAX_AGE_FOR_RANDOM = 85;
const MAX_MARRIED_NAME_LENGTH = 255;
const UNDER_16_AGE_YEARS = 15;

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
