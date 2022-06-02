//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}

let parseObject = (obj) => {
    for (p in person3) {
        if (typeof person3[p] === 'string') {
            console.log(person3[p]);
        } else if (typeof person3[p][0] === 'string') {
            for (let i = 0; i < person3[p].length; i++) {
                console.log(person3[p][i]);
            }
        } else {
            for (x in person3[p][0]) {
                console.log(person3[p][0][x]);
            }
        }
    }
}

parseObject(person3);



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = () => {console.log(`This is ${this.name}. They are ${this.age} years old.`)}

    this.incrementAge = (v) => {this.age += v}
}

let persona = new Person('Abigail Lemonparty', 1600);

let personb = new Person('Kevin Rammage', 1601);

persona.printInfo();

personb.printInfo();
personb.incrementAge(3);
personb.printInfo();


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let wordLen = (word) => {
    return new Promise((resolve, reject) => {
        if (word.length > 10){
            resolve(word);
        } else {
            reject(word);
        }
    })
}

wordLen('Fennec Fox!')
.then((w) => {
    console.log(`${w} is a big word.`)
}).catch((w) => {
    console.log(`${w} is a small word. Small number?`)
});