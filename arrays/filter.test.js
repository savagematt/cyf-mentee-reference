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

describe("filter()", () => {
    test("Predicate functions like isACat() return a boolean (true|false)", ()=>{

        const animalThatMatchesPredicate = {name:"A cat", species:"cat"};

        expect(isACat(animalThatMatchesPredicate))
            .toEqual(true);

        const animalThatDoesNotMatchPredicate = {name:"A dog", species:"dog"};

        expect(isACat(animalThatDoesNotMatchPredicate))
            .toEqual(false);
    })

    test("Returns a new array with only the items that matched the predicate function", () => {

        const actual = animals.filter(isACat);

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
                const itemIsACat = isACat(nextItem);

                if (itemIsACat) {
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