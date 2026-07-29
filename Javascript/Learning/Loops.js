for (var i = 1; i<=5; i++){
    console.log(i);
}
console.log("Counting Completed")


for (var i = 5; i>=1; i--){
    console.log(i);
}
console.log("Counting Completed")


var i = 1
while(i<=5){
    console.log(i)
    i += 1
}
console.log("Counting Completed")

var i = 1
while(i<=5){
    console.log(i++)
}


var i = 2020
while(i>= 2015){
    console.log(i--)
}
console.log("Counting Completed")

for (var i = 1; i<=5; i++){
    if( i == 1){
        console.log("Gold Medal")
    }
    else if( i == 2){
        console.log("Silver Medal")
    }
    else if( i == 3){
        console.log("Bronze Medal")
    }
    else{
        console.log(i)
    }
}

for (var i = 1; i<=5; i++){
    switch(i){
        case 1:
            console.log("Gold Medal")
            break;
        case 2:
            console.log("Silver Medal")
            break;
        case 3:
            console.log("Bronze Medal")
            break;
        default:
            console.log(i)
    }

}
