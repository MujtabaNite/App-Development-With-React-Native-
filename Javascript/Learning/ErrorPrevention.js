function addTwoNums(a,b)
{
    // try{
    // console.log(a+b)
    // }catch(err){
    //     console.log(err.name)
    //     console.log(err.message)
    //     console.log(err.stack)
    // }

    if(typeof a !== "number" || typeof b !== "number")
        throw new TypeError("Both arguments must be numbers")

    console.log(a+b)
    
    
}

addTwoNums(1,3)
addTwoNums("1",3)

