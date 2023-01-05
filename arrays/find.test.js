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

function isACat(animal) {
    return animal.species === "cat";
}
function isADonkey(animal) {
    return animal.species === "donkey";
}

describe("find()", () => {
    test("Returns a the first item that matches the predicate function", () => {

        const actual = animals.find(isACat);

        const expected = expect.objectContaining(            {
                name: "Matt",
                species: "cat"
            }
        );

        expect(actual)
            .toEqual(expected);
    })
    test("Returns undefined if no items match the predicate function", () => {

        const actual = animals.find(isADonkey);

        expect(actual)
            .toEqual(undefined);
    })
})