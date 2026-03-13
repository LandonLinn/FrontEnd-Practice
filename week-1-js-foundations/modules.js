// Joke API
const JokeApi = 'https://v2.jokeapi.dev/joke/Programming?type=twopart';


// Export Joke API
export function fetchJoke(){
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