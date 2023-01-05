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

function onlyCats(animal) {
    return animal.species === "cat";
}

describe("filter()", () => {
    test("Returns a new array with only the items that matched the predicate function", () => {

        const actual = animals.filter(onlyCats);

        const expected = expect.arrayContaining([
            {
                name: "Matt",
                species: "cat"
            },
            {
                name: "Nyan",
                species: "cat"
            },
        ]);

        expect(actual).toEqual(expected);
    })

    test("Can also be implemented using reduce()", () => {

        const actual = animals.reduce(

            (result, nextItem) => {
                const isACat = onlyCats(nextItem);
                if (isACat) {
                    result.push(nextItem);
                }
                return result;
            },
            []);

        const expected = expect.arrayContaining([
            {
                name: "Matt",
                species: "cat"
            },
            {
                name: "Nyan",
                species: "cat"
            },
        ]);
        expect(actual).toEqual(expected);
    })

})