import { People } from "./CodeToRefactor";

describe("People - constructor", () => {
    it("should create a person with only a name", () => {
        const person = new People('Alice');
        expect(person.Name).toBe('Alice');
    })
});