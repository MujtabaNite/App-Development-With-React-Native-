// Dishes Data
const dishData = [
    { name: "Italian pasta", price: 9.55 },
    { name: "Rice with veggies", price: 8.65 },
    { name: "Chicken with potatoes", price: 15.55 },
    { name: "Vegetarian Pizza", price: 6.45 },
];

// Tax Value 
const tax = 1.20;

// Task 1: Implement getPrices()
function getPrices(taxBoolean) {
    let finalPrice = 0
    for (const iterator of dishData) {
        if (taxBoolean === true) {
            finalPrice = iterator.price * tax
        }
        else if (taxBoolean === false) {
            finalPrice = iterator.price
        }
        else {
            console.log("You need to pass a boolean to the getPrices call!")
            return
        }

        console.log (`Dish: ${iterator.name} Price: $${finalPrice}`)
    }


}

// Task 2: Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    let discount = 0
   
    if (typeof (guests) == 'number' && guests > 0 && guests < 30) {
        if (guests < 5) {
            discount = 5
        }
        else {
            discount = 10
        }
        getPrices(taxBoolean)
        console.log(`Discount is: $${discount}`)

    }
    else{
        console.log("The Second argument must be a number between 0 and 30 ")
    }

    
}


getDiscount(true, 2);
getDiscount(false, 10);
getDiscount()