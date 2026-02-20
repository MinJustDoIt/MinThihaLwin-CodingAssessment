class People {
    static #Under16 = new Date(Date.now() - (15 * 365 * 24 * 60 * 60 * 1000));
    Name;
    DOB;

    constructor(name, dob) 
    {
        if (dob === undefined) {
            this.Name = name;
            this.DOB = People.#Under16;
        } else {
            this.Name = name;
            this.DOB = dob;
        }
    }
}

class BirthingUnit {
    // MaxItemsToRetrieve
    #people;

    constructor() {
        this.#people = [];
    }

    // GetPeoples
    // @param j
    // @returns Array<object>
    GetPeople(i) 
    {
        for (let j = 0; j < i; j++) {
            try 
            {
                // Creates a dandon Name
                let name = "";
                let random = Math.random();
                if (Math.floor(Math.random() * 1) == 0) {
                    name = "Bob";
                }
                else { name = "Betty"; }
                // Adds new people to the list
                this.#people.push(new People(name, new Date(Date.now() - (Math.floor(Math.random() * (85 - 18) + 18) * 356 * 24 * 60 * 60 * 1000))));
            }
            catch (e) 
            {
                // Dont think this should ever happen
                throw new Error("Something failed in user creation");
            }
        }
        return this.#people;
    }

    #GetBobs(olderThan30) {
        return olderThan30 ? this.#people.filter(x => x.Name == "Bob" && x.DOB >= new Date(Date.now() - (30 * 356 * 24 * 60 * 60 * 1000))) : this.#people.filter(x => x.Name == "Bob");
    }

    GetMarried(p, lastName) 
    {
        if (lastName.includes("test"))
            return p.Name;
        if ((p.Name.length + lastName).length > 255) {
            (p.Name + " " + lastName).substring(0, 255);
        }

        return p.Name + " " + lastName;
    }
}

module.exports = { People, BirthingUnit };
