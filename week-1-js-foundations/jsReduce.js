// ==== Totaling ====
let cart = [5, 10, 15, 20, 25, 30]

let total = cart.reduce(getTotal, 0);
console.log(`Cart total: $${total.toFixed(2)}`);

function getTotal(accumulator, price){
    return accumulator + price;
}

// ==== Grouping ====
const products = [
    {
        name: "Wireless Noise-Cancelling Headphones",
        category: "electronics",
    },
    {
        name: "Running Shoes",
        category: "sports",
    },
    {
        name: "Stainless Steel Water Bottle",
        category: "kitchen",
    },
    {
        name: "Yoga Mat",
        category: "sports",
    },
    {
        name: "Bluetooth Speaker",
        category: "electronics",
    },
    {
        name: "Coffee Maker",
        category: "kitchen",
    },
    {
        name: "Laptop Stand",
        category: "electronics",
    },
];

let categories = products.reduce(categorize, {}); 

console.log(categories);

function categorize(acc, product){
    //acc["electronics"] = acc["electronics"] - Checks if exists already, if not create an array to store
    acc[product.category] = acc[product.category] || [];

    // Push value into the created array
    acc[product.category].push(product);

    // Return the Object
    return acc;
}


// ==== Transforming ==== 
const words = ["Mabel", "is", "a", "happy", "bulldog"];

let sentence = words.reduce((acc, word) => acc === "" ? word : acc + " " + word, "");

console.log(sentence);