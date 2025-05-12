type Person = {
    name: string;
    age: number;
    gender: string;
};

const people: Person[] = [
    {name: "Rokhsana", age: 16, gender: "female"},
    {name: "Afsana", age: 36, gender: "female"},
    {name: "Rokib", age: 26, gender: "male"},
    {name: "Khanna", age: 46, gender: "male"},
]

function getNonFemaleNames(persons: Person[]): string[] {
    return persons
    .filter((person) => person.gender !== "female")
    .map((person) => person.name)

}

const result = getNonFemaleNames(people);
console.log(result)