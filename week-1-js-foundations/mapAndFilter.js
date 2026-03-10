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

// Get Elements
const allFilter = document.getElementById("all");
const electronicsFilter = document.getElementById("electronics");
const sportsFilter = document.getElementById("sports");
const kitchenFilter = document.getElementById("kitchen");
// Products Container
const productsContainer = document.getElementById("productsContainer");

// Filter

// Display Products on Start
displayProducts("");

// Event Listener
allFilter.addEventListener("click", () => displayProducts(""));
electronicsFilter.addEventListener("click", () => displayProducts("electronics"));
sportsFilter.addEventListener("click", () => displayProducts("sports"));
kitchenFilter.addEventListener("click", () => displayProducts("kitchen"));

function displayProducts(filter){
    // Reset Display
    productsContainer.innerHTML = "";

    // Filter Products
    const filtered = filter === "" ? products : products.filter(product => product.category === filter);
    
    filtered.forEach((product) => {
        const productItem = document.createElement("li");
        productItem.textContent = product.name;
        productsContainer.append(productItem);
    })
}


