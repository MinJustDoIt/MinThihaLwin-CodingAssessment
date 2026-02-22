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
  })
});
