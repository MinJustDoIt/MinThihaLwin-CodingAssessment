export namespace Review {
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

    // GetPeoples
    // @param j
    // @returns Array<object>
    public GetPeople(i: number): Person[] {
      for (let j = 0; j < i; j++) {
        try {
          // Creates a dandon Name
          let name: string = "";
          let random = Math.random();
          if (Math.floor(Math.random() * 2) == 0) {
            name = "Bob";
          } else {
            name = "Betty";
          }
          // Adds new people to the list
          this._people.push(
            new Person(
              name,
              new Date(
                Date.now() -
                  Math.floor(Math.random() * (85 - 18) + 18) *
                    365 *
                    24 *
                    60 *
                    60 *
                    1000,
              ),
            ),
          );
        } catch (e) {
          // Dont think this should ever happen
          throw new Error("Something failed in user creation");
        }
      }
      return this._people;
    }

    private GetBobs(olderThan30: boolean): Person[] {
      return olderThan30
        ? this._people.filter(
            (x) =>
              x.Name == "Bob" &&
              x.DOB >= new Date(Date.now() - 30 * 356 * 24 * 60 * 60 * 1000),
          )
        : this._people.filter((x) => x.Name == "Bob");
    }

    public GetMarried(p: Person, lastName: string): string {
      if (lastName.includes("test")) return p.Name;
      if ((p.Name.length + lastName).length > 255) {
        return (p.Name + " " + lastName).substring(0, 255);
      }

      return p.Name + " " + lastName;
    }
  }
}
