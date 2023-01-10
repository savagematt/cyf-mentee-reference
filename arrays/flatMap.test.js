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

    test("Flatmap functions like getAnimalToys() take a value and return an array", () => {

        const animal = {
            name: "Bob", species: "cat",
            toys: ["toy 1", "toy 2"]
        };

        const actualArray = getAnimalToys(animal);

        const expectedArray = ["toy 1", "toy 2"];

        expect(actualArray)
            .toEqual(expectedArray);
    })

    test("flatMap() takes a function that returns a new array for each item, and puts all of those arrays in to one", () => {

        const actual = animals.flatMap(getAnimalToys);

        const expected = expect.arrayContaining([
            "fluffy mouse",
            "ball of string",
            "cuttlefish",
            "mirror",
        ]);

        expect(actual).toEqual(expected);
    })

    test("[advanced] Can also be implemented using reduce()", () => {

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