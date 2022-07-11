function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Manager(name, age, managed) {
    Person.apply(this, [name, age]);
    this.managed = managed.forEach(element => {
         managed = element.name
         console.log(managed);
         console.log(element.name);
    });
}

function Developer(name, age, skillset) {
    Person.call(this, name, age)
    this.skillset = skillset;
}

Developer.prototype.greet = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old 
I know ${this.skillset},${this}`);
}

Manager.prototype.greet = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old 
I managed ${this.managed}, ${this}`);
}

Developer.prototype.__proto__ = Person.prototype

let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);
let gates = new Manager('Bill Gates', 43, [maria, pesho]);

maria.greet();
pesho.greet();
gates.greet();
