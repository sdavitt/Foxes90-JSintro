/* 
-- JavaScript and the DOM --
There are a lot of options for JavaScript and HTML DOM interactions
We won't cover them all today
We can use JavaScript to select, modify, add, hide, remove elements from our HTML page
And because we're doing this through JavaScript (which happens client-side aka on the user's browser)
None of this causes a page refresh
*/

// the entire HTML page is represented as a JavaScript object accessible by default any time we're running our JS through a browser
console.log(document);

// there are a variety of ways that I can access different tags in my HTML
// .getElement_____() ById, sByTagName, sByClassName
// the getElement methods accept a JS string representing the name of the HTML tag, ID, or Class
//console.log(document.getElementById('header1')); // returns an HTMLElement object
//console.log(document.getElementsByClassName('headertext')[0]); // returns an array-like object
console.log(document.getElementsByTagName('h1')); // returns an array-like object

// querySelector() is another option
// the querySelector accepts a CSS-selector-like string
    // #header1 -> the ID header1
    // .headertext -> the classname headertext
    // h1 -> the tag h1
// selecting the header1 ID with the query selector:
let header1 = document.querySelector('#header1');

// querySelector() returns just the first matching element
// querySelectorAll() returns an array-like of all the elements matching the query

// we can utilize the JS variable to modify the HTML element
// modify the text of our header 3 seconds after the JS file loads
setTimeout(()=>{header1.innerHTML = 'Hello, students of the Foxes90 cohort!';}, 3000)
// then 3 more seconds later hide it
setTimeout(()=>{header1.hidden = true}, 6000);
// then 1 second later bring it back
setTimeout(()=>{header1.hidden = false}, 7000);

// Event Listeners
// event listeners are methods of HTML elements that accept callback functions as input
// when a predefined 'event' happens, the callback function is run
// onClick is a very common event listener
header1.addEventListener('click', ()=>{console.log('You clicked the header.')});
header1.addEventListener('mouseover', ()=>{console.log('Your mouse is on the header.')});

// lets design an event listener such that whenever our button is pressed, the color and styling of our text changes
// selecting the button
// setting up CSS
// selecting the header
// modifying the header's attributes such that our different css gets applied
let hmodbutton = document.querySelector('#hbtn')

// design our callback function
let changeHeader = () => {
    // select the tag we want to change
    let h1 = document.getElementById('header1');
    if (h1.className === 'htext') {
        h1.className = 'htext2';
    } else if (h1.className === 'htext2'){
        h1.className = 'htext3';
    } else {
        h1.className = 'htext';
    }
}

// add an event listener and apply the callback
hmodbutton.addEventListener('click', changeHeader);

// we can use JS to create and add new elements to our HTML
let new_button = document.createElement('button');
new_button.innerHTML = 'Im alive!';
new_button.className = 'btn';
// once an element is created with document.createElement()
// it is not automatically added to the HTML page
// the simplest way to add a new element to the page is with append
document.body.append(new_button);

new_button.addEventListener('mouseover', ()=>{
    let new_text = document.createElement('p');
    new_text.innerHTML = 'The Colugo is a creepy looking animal from South America.';
    document.body.append(new_text);
})

// how we can accept user input through a form in JS
// we want to design an eventListener for our form submission
// the form submission event listener actually listens for and records any input given to the form
let form = document.getElementById('nameForm');
form.addEventListener('submit', (event) => {
    // stop the page refresh
    event.preventDefault();
    console.log(event);
    // access my form data
    /* less preferred method: use the querySelector
    let fnameq = document.querySelector('#fname').value
    let lnameq = document.querySelector('#lname').value
    console.log(`form data grabbed with query selector: ${fnameq} ${lnameq}`);
    */
    // the preferred method: get the data already present in the event object
    let fname = event.path[0][0].value;
    let lname = event.path[0][1].value;
    console.log(`form data grabbed from the event: ${fname} ${lname}`);
    // reset the form
    form.reset();
    // use the form data!
    let new_html = document.createElement('h3');
    new_html.innerHTML = fname + ' ' + lname
    new_html.className = 'htext2 formname'
    form.after(new_html);
});
