// var a='Hello'

// //for loop

// for(var i=0;i<10;i++){
//     console.log(a)

// }

// you have an array and you have to square Each element of that array 

var num=[2,3,4,5,6,7,8]

// var firstSquare=num[0]*num[0]

// var squaredArr=[firstSquare]

// var secondSquare=num[1]*num[1]

// squaredArr.push(secondSquare)

// console.log(squaredArr)
var squaredArr=[]
for (var i=0 ; i<num.length; i++)

{
    squaredArr.push(num[i]*num[i])
}

console.log(squaredArr)