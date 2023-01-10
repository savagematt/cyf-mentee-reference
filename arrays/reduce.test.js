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
        species: "cat",
        name: "Nyan",
        toys: [
            "fluffy mouse"
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

describe("reduce()", () => {
    test("How many toys of each type are owned by cats?", () => {

        const actual = animals
            // Select only cats
            .filter(animal => animal.species === "cat")

            // Extract all toys owned by cats into a single array of strings
            // ["fluffy mouse", "ball of string", "fluffy mouse"]
            .flatMap(animal => animal.toys)

            // Keep a running total of each toy name
            .reduce((toyCounts, nextToy) => {
                    // This function will be called once for each item:
                    // {}, "fluffy mouse"
                    //    -> {"fluffy mouse":1}
                    // {"fluffy mouse":1} , "ball of string"
                    //    -> {"fluffy mouse":1, "ball of string", 1}
                    // {"fluffy mouse":1, "ball of string", 1}  , "fluffy mouse"
                    //    -> {"fluffy mouse":2, "ball of string", 1}
                    const previousCount = toyCounts[nextToy] || 0;
                    toyCounts[nextToy] = previousCount + 1
                    return toyCounts;
                },
                {});

        const expected = {
            "fluffy mouse": 2,
            "ball of string": 1,
        }

        expect(actual).toEqual(expected)
    })
})