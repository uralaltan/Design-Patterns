class Prototype {
    constructor(surname, age) {
        this.surname = surname;
        this.age = age;
    }

    clone() {
        const clone = Object.create(this.__proto__);

        clone.surname = this.surname;
        clone.age = this.age;

        return clone;
    }
}

const example = new Prototype("Ali", 18);
console.log(example.surname);
console.log(example.age);

const exampleCopy = example.clone();
console.log(exampleCopy.surname);
console.log(exampleCopy.age);
