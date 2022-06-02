console.log('Hello, foxes!');

// Build out a system such that we can take form data from our page and make an api request based on that form data

// Create an event listener for a form submission event that then takes the info from that from
// and passes that info into a function that makes an API call
// then take the result of the API call and create new HTML to place on the page

// function to actually make the api call
let getPokemon = async name => {
    try {
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        return response.data
    } catch {
        return name
    }
}

// function to utilize the data from the api call
let loadPokemon = async name => {
    let data = await getPokemon(name);
    if (typeof data === 'object') {
        console.log(data);
        console.log(data.name);
        let new_card = `<div class="card m-2" style="width: 18rem;">
    <img src="${data.sprites.front_shiny}" class="card-img-top" alt="${data.name}">
    <div class="card-body">
      <h5 class="card-title">${data.name.toUpperCase()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${data.types[0].type.name}</li>
    </ul>
    </div>`;
        // select the location where I want to add this (content row in this case)
        document.getElementById('contentr').insertAdjacentHTML('beforeend', new_card);
    } else {
        // show our error message
        errors.innerHTML = `${name} is not a Pokemon.`;
        errors.hidden = false;
    }
}

// tie our api call process to an event
let form = document.getElementById('pform');
let errors = document.getElementById('errors');

form.addEventListener('submit', event => {
    event.preventDefault();
    let pokemon_name = event.path[0][0].value;
    loadPokemon(pokemon_name);
    errors.hidden = true;
    form.reset();
});




