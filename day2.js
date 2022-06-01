// JavaScript Objects!

/*
JavaScript is not traditionally an object-oriented programming language
It is possible to write object-oriented javascript code
There are two main types of object - the two are related but are slightly different to create
1. the object - aka the equivalent to a python dictionary & JSON data
2. Object prototypes - the equivalent to a python object class
    - essentially making a class-based object although in JS that can be done with a class or a function
*/

// simple object
// just like a python dictionary except the keys (if strings) don't need to be in quotation marks
let animal = {name: 'Fennec Fox', latin: 'Vulpes zerda', habitat: 'desert'}

console.log(animal, typeof animal);

//accessing properties of the object (what would be keys/attributes in python)
// can be done in two ways, both of which are familiar to us in python
// bracket notation (like accessing a value at a key in a dictionary)
let x = animal['name'];
console.log(x);
let a_var = 'latin';
console.log(animal[a_var]);

// dot notation
// just like accessing the attribute of a Python object
console.log(animal.name);
console.log(animal.latin);

// accessing a value that does not exist does not produce an error - just has value undefined
console.log(animal.somepropthataintreal);

// adding a property can be done with either notation and is just like defining a variable (same as python)
animal.ears = 'very large';
animal['paws'] = 4;
console.log(animal);

// deleting a property is also nearly identical to python
// delete keyword
delete animal['paws'];
console.log(animal);

// a more complex JS object
console.log('\n\n');
// just like a python dictionary, the values of properties in a JS object do not have to be single values
    // they can be arrays, they can be other objects, they can be functions

let animals = {
    foxes: {
        'Fennec Fox': {
            habitat: 'desert',
            food: ['scorpions', 'mealworms', 'small rodents']
        }},
    whales: ['Blue Whale', 'Humpback Whale', 'Right Whale', 'Narwhal', 'Killer Whale'],
    humans: 'Homo sapiens'
};

console.log(animals);

// just like in python, we can access the inner layers of our nested object by utilizing operation chaining
// access 'scorpions' from the food of the Fennec Fox
console.log(animals['foxes']['Fennec Fox']['food'][0]);
// using dot notation where possible
console.log(animals.foxes['Fennec Fox'].food[0]);

console.log('\n\nLooping:');
/*
Looping with JS objects
very similar to looping through a python dictionary and often easier than looping through a JS array
*/

// just like a python for in loop:
for (property in animals){
    // inside of the loop we must use bracket notation
    console.log(property, animals[property]);
}

// we have JS equivalents to python's dict.keys() and dict.values()
// Object.keys(<your_object>)
// Object.values(<your_object>)
// returns an array of either the properties (keys) or values in your object
console.log(Object.keys(animal));
console.log(Object.values(animal));

// looping through an object's values:
let vals = Object.values(animal);
for (let i = 0; i < vals.length; i++){
    console.log(vals[i]);
}

console.log('\n\nCustom Object Prototypes:');
/* Custom Object Prototypes - the JS equivalent of the Python class-based object */

// JavaScript Class-based object
// this in JS is the same as self in python
class AnimalC {
    constructor(name, species, latin, color, paws=4){
        this.name = name;
        this.species = species;
        this.latin = latin;
        this.color = color;
        this.paws = paws;
    }

    // method for this object
    printInfo(){
        console.log(`${this.name} is a ${this.color} ${this.species}. ${this.species} has a latin name ${this.latin}.`)
    }
}

// if I want to use my object setup/class
// I must instantiate an instance of that object
// let <var_name> = new <object_name>(<parameters>);
let fox = new AnimalC('Dave', 'Fennec Fox', 'Vulpes zerda', 'sand');
console.log(typeof fox);
fox.printInfo();

// alternative way to write a JS object: a function based object
function Animal(name, species, latin, color, paws=4){
    this.name = name;
    this.species = species;
    this.latin = latin;
    this.color = color;
    this.paws = paws;

    this.printInfo = () => {
        console.log(`${this.name} is a ${this.color} ${this.species}. ${this.species} has a latin name ${this.latin}.`);
    }
}

let another_fox = new Animal('Dave', 'Fennec Fox', 'Vulpes zerda', 'sand');
console.log(typeof another_fox);
another_fox.printInfo();