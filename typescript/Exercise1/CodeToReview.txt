namespace Review 
{
    export class People {
        private static Under16: Date = new Date(Date.now() - (15 * 365 * 24 * 60 * 60 * 1000));
        public Name: string;
        public DOB: Date;

        constructor(name: string);
        constructor(name: string, dob: Date);
        constructor(name: string, dob?: Date) {
            if (dob === undefined) {
                this.Name = name;
                this.DOB = People.Under16;
            } else {
                this.Name = name;
                this.DOB = dob;
            }
        }
    }

    export class BirthingUnit 
    {
        // MaxItemsToRetrieve
        private _people: People[];

        constructor() {
            this._people = [];
        }

        // GetPeoples
        // @param j
        // @returns Array<object>
        public GetPeople(i: number): People[] 
        {
            for (let j = 0; j < i; j++) {
                try 
                {
                    // Creates a dandon Name
                    let name: string = "";
                    let random = Math.random();
                    if (Math.floor(Math.random() * 1) == 0) {
                        name = "Bob";
                    } 
                    else { name = "Betty"; }
                    // Adds new people to the list
                    this._people.push(new People(name, new Date(Date.now() - (Math.floor(Math.random() * (85 - 18) + 18) * 356 * 24 * 60 * 60 * 1000))));
                }
                catch (e) {
                    // Dont think this should ever happen
                    throw new Error("Something failed in user creation");
                }
            }
            return this._people;
        }

        private GetBobs(olderThan30: boolean): People[] {
            return olderThan30 ? this._people.filter(x => x.Name == "Bob" && x.DOB >= new Date(Date.now() - (30 * 356 * 24 * 60 * 60 * 1000))) : this._people.filter(x => x.Name == "Bob");
        }

        public GetMarried(p: People, lastName: string): string 
        {
            if (lastName.includes("test"))
                return p.Name;
            if ((p.Name.length + lastName).length > 255) {
                (p.Name + " " + lastName).substring(0, 255);
            }

            return p.Name + " " + lastName;
        }
    }
}