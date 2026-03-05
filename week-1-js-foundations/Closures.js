// Closure Practice - Landon Linn - 3/4/2026

function makeCounter(){
    let counter = 0
    return function increment()  {
        return counter++;
    }
}

let count = makeCounter();
count();
count();
count();
console.log(count());

// ------------------------------------------

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();