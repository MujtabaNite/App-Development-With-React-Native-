var clothes = []
clothes.push("T-shirt");
clothes.push("Jeans");
clothes.push("Jacket");
clothes.push("Sweater");
clothes.push("Shorts");



clothes.pop();

clothes.push("Socks");

console.log(clothes.at(2))
console.log(clothes[2])

var favcar = {}

favcar.color = "Red";
favcar.convertible = true;

console.log(favcar)

var car = {};

car.color = "red";

//add a method to the car object so that it can be called as car.turnkey()
car.turnKey = function() { 
  console.log('engine running'); 
}
