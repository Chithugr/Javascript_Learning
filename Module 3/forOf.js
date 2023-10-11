//The for of statement creates a loop iterating over iteratble objects,
//such as arrays and strings. It is used to iterate through the elements in an array or string:
var scores=[60, 90, 80, 75]

for(var score of scores){
    console.log("Score:",score) //prints out each element one by one
}

//Method-entries
var colors=['Yellow','Green','Orange','Navyblue']

for (var [index, color] of colors.entries()){
    console.log(`Color at index ${index}:`,color);   
}

//Strings
var str='Chaithra'

for (var strs of str){
    console.log(strs)
}

let num1=2;
let num2=2;
if(num1==num2)
 console.log("true");
else
 console.log("false");

 
