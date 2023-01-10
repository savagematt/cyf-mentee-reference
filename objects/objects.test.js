describe("Objects", () => {
    test('Objects are just a bag of items ("fields") with names', () => {

        const myObject = {};

        // You can set fields on an object like this:
        myObject["name"] = "Zaw";

        // Or like this:
        myObject.job = "Software Developer"

        // However you set the fields, you can get the value back out like this:
        expect(myObject["name"])
            .toEqual("Zaw")

        expect(myObject["job"])
            .toEqual("Software Developer")

        // Or like this:
        expect(myObject.name)
            .toEqual("Zaw")

        expect(myObject.job)
            .toEqual("Software Developer")
    });

    test('Objects can be created with classes and "new"', () => {
        class Person {
            constructor(name) {
                this.name = name;
            }

            sayName() {
                return "My name is " + this.name;
            }
        }

        const zaw = new Person("Zaw");

        expect(zaw.sayName())
            .toEqual("My name is Zaw")
    });

    test('[advanced] In older versions of Javascript you had to use prototypes of you wanted to use "new"' +
        '(but you only need to understand this if you are looking at old code)', () => {

        function Person(name) {
            this.name = name;
        }
        Person.prototype.sayName = function () {
            return "My name is " + this.name
        };

        const zaw = new Person("Zaw");

        expect(zaw.sayName())
            .toEqual("My name is Zaw")
    });
})