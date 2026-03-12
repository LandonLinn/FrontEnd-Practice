// Destructure Array Simple
//Switch Colors

let color1 = "red";
let color2 = "blue";

[color1, color2] = [color2, color1];

console.log(color1, color2);


// JOKES API
const JokeApi = 'https://v2.jokeapi.dev/joke/Programming?type=twopart';

fetch(JokeApi)
    .then(response => {
        if(!response.ok) throw new Error("Bad response");
        return response.json()
    })
    .then(({setup, delivery}) => {
        console.log(setup, delivery)
    })
    .catch((err) => console.log(err));