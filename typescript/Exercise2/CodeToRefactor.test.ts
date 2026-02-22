import { Review } from "./CodeToRefactor";

describe("People - constructor", () => {
  it("should create a person with only a name", () => {
    const person = new Review.People("Alice");
    expect(person.Name).toBe("Alice");
  });
});
