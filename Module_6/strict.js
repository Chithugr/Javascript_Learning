'use strict'

//Using function--------------{}
console.log(this)

//Using function---------------Undefined
function dispaly(){
    console.log(this)
}

dispaly()

//using object+Function---------------Object itself
let myObj={
    name:"Chai",
    age:23,
    myObj1: function(){
        console.log(this)
    }
}
myObj.myObj1()

//using object+Function+Function----------Undefined
let myObj2={
    name:"Chai",
    age:23,
    myObj3: function(){
        function myObj4(){
            console.log(this)
        }
        myObj4()

    }
}
myObj2.myObj3()

