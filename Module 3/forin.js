// In JS , for-in loopp allowss you to loop through the properties of an object.
// that statements of code found within the loop body will be executed oncde for each property of the object.

var colors=
{
    primary:'blue',
    secondary:'red',
    tertiary:'white',
}

// syntax
for (color in colors){
    console.log(color+'->'+colors[color])
}

var colorsArray=['Yellow','Green','Orange','Navyblue']

for (color in colorsArray){
    console.log(color+'->'+colorsArray[color])
}

var num = 105;
if( num%5 == 0 )
 console.log("divisible by 5")
else
 console.log("not divisible by 5")