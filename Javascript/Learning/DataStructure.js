const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
})


const nums = [0,10,20,30,40,50];
const result = nums.filter( function(num) {
    return num > 20;
});
console.log(result);


[0,10,20,30,40,50].map( function(num) {
    return num / 10
})


const resulT = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    resulT.push(key, drone[key])
})
console.log(resulT)


let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

bestBoxers.get(1); // 'The Champion'



const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);