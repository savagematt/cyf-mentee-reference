const animals = [
    {
        species: "cat",
        name: "Matt",
    },
    {
        species: "parrot",
        name: "Miguel"
    },
    {
        species: "rabbit",
        name: "Zaw"
    },
    {
        species: "rabbit",
        name: "Greg"
    },
    {
        species: "cat",
        name: "Nyan"
    }
];

function fullName(animal) {
    return animal.name + " the " + animal.species;
}

describe("map()", () => {

    test("Mapping functions take one type of value (e.g. an animal) and return another (e.g. a string)",()=>{

        const animal = {name:"Bob",species:"cat"};

        const actualString = fullName(animal);

        const expectedString = "Bob the cat";

        expect(actualString)
            .toEqual(expectedString)
    });

    test("Returns an array containing the result of applying a function to each item in the source array", () => {

        const actual = animals.map(fullName);

        const expected = expect.arrayContaining([
            "Matt the cat",
            "Miguel the parrot",
            "Zaw the rabbit",
            "Greg the rabbit",
            "Nyan the cat",
        ]);

        expect(actual).toEqual(expected);
    });

    test("Can also be implemented using reduce()", () => {

        const actual = animals.reduce(
            (result, nextItem) => {
                const fullNameOfAnimal = fullName(nextItem);
                result.push(fullNameOfAnimal);
                return result;
            },
            []);

        const expected = expect.arrayContaining([
            "Matt the cat",
            "Miguel the parrot",
            "Zaw the rabbit",
            "Greg the rabbit",
            "Nyan the cat",
        ]);

        expect(actual).toEqual(expected);
    });
});