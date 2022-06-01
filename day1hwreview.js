//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","Dog"];

 function findWords(str, names){
    // 1. loop through each word in an array
    // 2. check whether or not a word is in the string
    // array index loop format: for (let <some_variable>=<initial_value>; <conditional to end the loop> some_variable < array.length; <step/incrementation>){}
    for (let i = 0; i<names.length; i++){
        if (str.includes(names[i])){
            return 'Matched dog_name'
        }
    }
    return 'No Matches'
 }

 // call the function
 // console.log(findWords(dog_string, dog_names));

 // a slightly more complex version:
    // if a name matches -> console log 'Matched: <the_name>'
    // if NONE of the names match -> console log no matches
let findWordsTwo = (str, names) => {
    let match = false;
    for (let i = 0; i < names.length; i++){
        if (str.includes(names[i])){
            // we have a match -> console log the name that matched
            // utilize the JS version of an f-string: back ticks with ${} for variables
            console.log(`Matched dog_name ${names[i]}`);
            match = true;
        }
    }
    // ternary operator
    // <conditional> ? <code to run if conditional was true> : <code to run if conditional was false>
    !match ? console.log('no_matches') : null;
}

// findWordsTwo(dog_string, dog_names);



//============Exercise #2 ============//
/* Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Change the value at every even index in an array to "even index" utilizing the splice function

// loop through each even index of the array and splice
// we want to at each even index splice removing one element and adding "even index" once

let people = ['Shoha', 'Brandon', 'Chris', 'Lucas', 'Terrell', 'Ryan'];

let friends = ['Dylan', 'Sam', 'Brian', 'Derek', 'Kevin', 'Tatyana'];

let replaceEvens = (arr) => {
    // loop through our even indexes
    for (let i = 0; i < arr.length; i+=2){
        // let's use splice just for the sake of using splice
        // array.splice(<index to splice at>, <number of values to remove>, <zero, one, or many values to add in starting at the specified index>)
        arr.splice(i, 1, 'even index');

        // can be solved without splice - just redefine the value at array index i
        // arr[i] = 'even index';
    }
}

replaceEvens(people);
replaceEvens(friends);

console.log(people);
console.log(friends);