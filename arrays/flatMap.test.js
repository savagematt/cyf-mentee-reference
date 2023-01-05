const animals = [
    {
        species: "cat",
        name: "Matt",
        toys: [
            "fluffy mouse",
            "ball of string",
        ]
    },
    {
        species: "parrot",
        name: "Miguel",
        toys: [
            "cuttlefish",
            "mirror",
        ]
    },
    {
        species: "rabbit",
        name: "Zaw",
        toys: []
    }
];

function getAnimalToys(animal) {
    return animal.toys;
}

describe("flatMap()", () => {
    test("Takes a function that returns a new array for each item, and puts all of those arrays in to one", () => {

        const actual = animals.flatMap(getAnimalToys);

        const expected = expect.arrayContaining([
            "fluffy mouse",
            "ball of string",
            "cuttlefish",
            "mirror",
        ]);

        expect(actual).toEqual(expected);
    })

    test("Can also be implemented using reduce()", () => {
        const actual = animals.reduce(
            (result, nextItem) => {
                result.push(...nextItem.toys)
                return result;
            },
            []);

        const expected = expect.arrayContaining([
            "fluffy mouse",
            "ball of string",
            "cuttlefish",
            "mirror",
        ]);

        expect(actual).toEqual(expected);
    })

})