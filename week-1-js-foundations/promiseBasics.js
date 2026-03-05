// Promise Practice - Landon Linn - 3/5/2026

// ============ PROMISE ============
// const promise = new Promise((resolve, reject) => {
//     const sum = 5 + 5;
//     if (sum === 10) {
//         resolve('Resolved!')
//     } else {
//         reject('Rejected')
//     }
// });

// promise
//     .then(response => console.log(response))
//     .catch(error => console.log(error))
//     .finally(() => {
//         console.log("Done!")
//     })

// ------------------------------------------------------------
// Joke API
const JokeApi = 'https://v2.jokeapi.dev/joke/Programming?type=twopart';
// ------------------------------------------------------------

// ============ FETCH VERSION ============

function fetchJoke(){
    return fetch(JokeApi)
    // Get Response Status with response parsing
    .then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
    })
    // Use the Data retrieved - Data Handler (Everything app does with data happens here)
    .then(async ({ setup, delivery }) => {
        // Display Joke
        console.log(setup);

        // Loading Animations
        const consoleLoading = setInterval(() => {
            console.log(".")
        }, 800)  

        // Delivery after 3 Seconds
        await new Promise(resolve =>setTimeout(resolve, 3000))
        clearInterval(consoleLoading);
        console.log(delivery);
            
    })
    // Error Handler
    .catch(err => console.error('Error:', err))
}

// ============ ASYNC/AWAIT VERSION ============

async function awaitJoke(){
    try{
        // Check Response Status
        const response = await fetch(JokeApi)
        if(!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)

        // Once response is good, use data
        const {setup, delivery} = await response.json();
        // Display Joke
        console.log(setup);

        // Loading Animations
        const consoleLoading = setInterval(() => {
            console.log(".")
        }, 800)  

        // Delivery after 3 Seconds
        setTimeout(() => {
            clearInterval(consoleLoading);
            console.log(delivery);
        }, 3000)  
        
    }   
    catch(error){
        console.error("Error:", error);
    }
}

// Get Jokes
async function runJokes(){
    await fetchJoke();
    console.log('\n');
    await awaitJoke();
}

runJokes();