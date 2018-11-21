/* ===== Functions ==== */

// A function is a group of instructions that performs a particular task.

// function sayHello() {
//     console.log("Hello!")
// }

// console.log("Start of program");
// sayHello();
// console.log("End of program");

//Declaring a Function

//Creating a function is called declaration:

/* ===

// Declaring a function called myFunction
function myFunction() {
    //function actions
}

=== */
var name = prompt("What is your name");
var  age =  prompt("How old are you");
function greetingsUsers(){
    console.log("hola " + name, "y yo soy " + age)
}

console.log("Start of program");
greetingsUsers();
console.log("End of program");

/* =============================================*/
function sayHello() {
    return "Hello";
}

console.log("Start of program");
let result = sayHello();
console.log(result);
console.log("End of program")

//Declare myFunction
function myFunction(){
    //Calculating return value
    // ...
    return returnValue;
}

// Get return value from myFunction
var value = myFunction();
//...

