//imperative way of writing code

const a=4 
const aSquare=a*a

let isEven;

if(aSquare%2===0){
    isEven=true
}

else{
    isEven=false
}
console.log(isEven)

//Declarion way of writing code

const checkForSquare=(x)=>( x*x%2===0 ? true:false)

console.log(checkForSquare(4))
