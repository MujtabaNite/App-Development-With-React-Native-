let {PI} = Math;
console.log(PI);


console.log(PI === Math.PI)


PI = 1

console.log(PI===Math.PI)

const products = [
    ["Laptop", 1000],
    ["Phone", 500],
    ["Tablet", 700]
];
// Destructure the second product's name and price from the array
const [secondProductName,secondProductPrice] = products[1]

console.log(`Second product: ${secondProductName}`);
console.log(`Second product price: ${secondProductPrice}`);


const review = {
    title: "Amazing Product",
    description: "This product exceeded my expectations.",
    author: "John Doe",
    timePosted: "2024-11-24"
};

// Destructure the author, title, and timePosted properties from the review object

const {author,timePosted,title} = review
console.log(`${author} posted a review titled, ${title} at ${timePosted}.`);
