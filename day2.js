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

console.log('\n\nInheritance');
/* 
JavaScript Inheritance
the same concept as Python inheritance
when one object inherits from another object - all of the attributes and methods of the parent object are automatically transferred to the child object
*/

// one class based object can extend another class based object
class Bird extends AnimalC{
    constructor(name, species, latin, color, paws=4, wings){
        super(name, species, latin, color, paws);
        this.wings = wings;
        this.annoying = true;
    }

    someMethod(){
        console.log('Dee is a bird. ha.');
    }
}

let dee = new Bird('Deandra Reynolds', 'Ostrich', 'Ostrich ostrich', 'Black and white', 2); 
// What happens if I provide no values for the input parameters of the object constructor function?

dee.printInfo();
dee.someMethod();

console.log('\n\nCallbacks:');
/* JavaScript Callbacks
    Simply put: a callback is a function that is to be executed after another function
        has finished its execution
    
    More complex definition: In JS, functions are objects. Because of this, functions are designed to accept other functions as input,
        or return other functions, or return another function while passing a third function as a argument to the second function.

    Functions that are passed other functions are parameters are called 'higher-order functions'
        and any function passed as input to another function is a 'callback function'.

    Why is this necessary? Why is the structure different than Python?
        - while a callback function is possible in python (map, filter, customer decorators, etc.)
        it is not as commonly used as we don't rely on callbacks to control our order of execution

    JavaScript does not inherently execute in a linear single-thread manner
    Aka the computer does not just read the code from top down stopping to do any work that needs to be done along the way.
    In JS, the computer will continue to read the code and simply pass any tasks that need to run to the 'Event Loop'
        - the JS event loop is responsible for processing functions, API calls, anything that may happen outside of the main thread of execution
    Unlike Python (and OOP languages like Java), JavaScript is an event-driven language. Intead of waiting for a response to an initial action before moving on,
    JS will continue to listen for new events/actions while it processes other actions in the background.
    This can lead to order of execution issues. Aka 'event loop flipping'
*/
// f1 takes ~3 seconds to run
let f1 = () => {
    // simulate an artificial delay using setTimeout
    setTimeout(()=>{console.log('f1 finished execution');}, 3000);
}

// f2 takes ~0 seconds to run
let f2 = (val) => {
    console.log(`f2 finished execution`);
}

// expected order of operations gets flipped
//f1();
//f2();

/*
one potential solution to event loop flipping/event loop execution order issues is callbacks
We can tell a function that it should run another function after it's own execution or that it should 'wait' for another function to run
before continuing with it's own process
*/

let attendClass = (subject, callback) => {
    // this example will only work as I'm going to use a browser interaction
    //alert(`Attending ${subject} class!`); // causes an alert to pop up in the browser
    callback();
}

let endClass = () => {
    console.log('Class is over.');
}

// pass endClass as an argument to attendClass
// and endClass will become part of the execution process for attendClass
//attendClass('JavaScript', endClass);

/* 
This introduces the problem of callback hell
Callback hell is when you have a massive chain of functions which are all callbacks to other functions and it becomes hard to keep track of the order
in which any operations are occuring
    function1( () => {
        function2( ()=> {
            function3( ()=>{
                function4( ()=>{
                    'ugh'
                })
            })
        })
    })
*/

// Let's look at more examples of simple callback usage
/* map(), filter(), reduce() all accept callback functions as input */

// map() - the role of map is to execute a callback function on each item within an array
let myFunc = player => {return `${player} plays for Manchester City in the EPL.`};
// array.map(<my_func>) -> returns a new array of the returned values from the callback function
let players = ['Kevin De Bruyne', 'Rodri Hernandez', 'Ederson Moraes', 'Ilkay Gundogan', 'Phil Foden', 'Julian Alvarez']
let p2 = players.map(myFunc);
console.log(p2);

// array.filter(<my_func>) -> add original values to a new array if they satisfy the filter's callback (which should return a boolean value)
let p3 = players.filter(name => {return name.includes('F')});
console.log(p3);

// array.reduce(<a_func>) -> 'boil down' an array to a single value
let prices = [3.99, 4.99, 5.99, 123, 4, 42.4, 439];
let total = prices.reduce((max, v) => {return max > v ? max : v});
// this setup of .reduce() is doing a sum
console.log(total);

// Promises introduce the ability to set up an asynchronous process that runs alongside the main event loop entirely separately
// A Promise is a specific type of object which has an initial value/status of 'pending'
// that promise can either resolve or reject which leads to specific functionality happening only once the promise has resolved or rejected

// A simple implementation of a promise to answer 'is a number even or odd'?
    // we'll define a function that returns a Promise object

let isEvenNumber = num => {
    return new Promise((resolve, reject) => {
        if (num%2==0){
            resolve(num);
        } else {
            reject(num);
        }
    })
}

// when I call a function returning a promise I want chain two other method calls off the back
// .then() method represents resolving the Promise
// .catch() method represents rejecting the Promise
isEvenNumber(222).then((result) => {console.log(`Even Number: ${result}`)}).catch((result) => {console.log(`Not an even number. How odd.`)});

// Another, more modern approach to Promises -> the async-await syntax
// we can define a function specifically as an async function
// aka one that should happen/should be processed outside of the main event loop
// this asychronous function can then wait for the results/execution of other functions
// thereby maintaining proper ordering of events

// an example of when async/await may be valuable:
// some long modification or retrieval process (like an api call)
// we'll look at 2 seconds of addition
let increaseValueSlowly = (base, increase) => {
    return new Promise((resolve)=>{ setTimeout(() => {resolve(base+increase)}, 2000)});
};

// adding the async keyword to make this an asychronous function
let increaseSalary = async (salary, raise) => {
    // await keyword to wait until the promise is resolved
    let new_salary = await increaseValueSlowly(salary, raise);
    console.log('line 292 executing:', new_salary);
}

increaseSalary(40, 2);