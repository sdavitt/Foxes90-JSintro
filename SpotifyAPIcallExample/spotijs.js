// Before I make any API call to retrieve data, I need a bearer token
// I get a Bearer token by making an Authorization request

// function for our authorization request
const getAuth = async () => {
    const clientID = null;
    const clientSecret = null;
    const encodedString = btoa(clientID + ':' + clientSecret);
    const response = await fetch('https://accounts.spotify.com/api/token',
        {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${encodedString}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials'
        }
    );
    let token = await response.json();
    console.log(token);
    return token.access_token
}

const loadToken = async () => {
    const token = await getAuth();
    console.log(token);
    return token
}

const getSong = async () => {
    const token = await loadToken();
    let data = await fetch(`https://api.spotify.com/v1/search?type=track&q=track:anemone+artist:slenderbodies&limit=1`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    data = await data.json();
    console.log(data);
    // once I have a preview url
    console.log(data.tracks.items[0].preview_url);
    // use that preview url to create a new HTML Audio object
    let audioobj = new Audio(data.tracks.items[0].preview_url);
    audioobj.play();
}

let playbutton = document.querySelector('#pbtn')
playbutton.addEventListener('click', ()=> {getSong();});