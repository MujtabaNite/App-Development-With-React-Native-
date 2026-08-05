const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate
console.log(fruitsAndBerries); // outputs a single array


const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = {...flying, ...car};
console.log(flyingCar); // {wings: 2, wheels: 4}


let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);


const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']


const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1};

car1.speed = 201;

console.log(car1.speed, car2.speed);

// Part 1: Separate Array Elements
const topSixRestaurants = ["Chick-fil-A",
    "In-N-Out",
    "Chipotle",
    "McDonald's",
    "Taco Bell",
    "KFC"
];

const [first,second,third,...remaining] = topSixRestaurants

console.log(`First restaurant: ${first}`);
console.log(`Second restaurant: ${second}`);
console.log(`Third restaurant: ${third}`);
console.log(`Remaining restaurants: ${remaining}`);



// Part 2: Handle Unknown Function Arguments
function unknownArgs(...args) {
    for (arg of args) {
        console.log(arg)
    }
}

unknownArgs(1, 2, 3, 4, 5);
unknownArgs("a", "b", "c");



// Part 3: Merge Arrays
const favoriteBaseballTeams = [
    "Yankees",
    "Mets",
    "Dodgers",
    "Giants",
    "Red Sox",
    "Cubs"
];
const favoriteFootballTeams = [
    "Patriots",
    "Giants",
    "Jets",
    "Eagles",
    "Steelers",
    "Cowboys"
];


const combine = [...favoriteBaseballTeams,...favoriteFootballTeams]

console.log(combine)
