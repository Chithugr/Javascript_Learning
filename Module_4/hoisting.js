console.log(a)
greet()

var a='hi'

function greet(){
    console.log('Hello from JS')
}
let age=18 
function checkAge(data) {
    if (age === 18) {
    console.log(`You are an adult! ${age}`);
    } else if (age == 20) {
    console.log("You are still an adult.");
    } else {
    console.log(`Hmm.. You don't have an age I guess`);
    }
}
checkAge({ age: 18 });

   function Add(){
    console.log(answer)
    var answer = 2
};
Add()

function fn(){
    return 4+5;
   }
fn(3,7);
