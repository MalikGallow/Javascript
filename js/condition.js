// what's a condition?

// Suppose we want to write a program that makes a user enter a number and then display a message
// if the number is PromiseRejectionEvent. Here is the corresponding algorithm

/* ===== Enter
if the number is positve
Display Message ======*/

// The message should display only if the number is positive: this means it 's subject to a condition.

// The if Statement

// var number = Number(prompt("Enter a number:"));
// if (number > 0) {
//     console.log(number + " is positive")
// }

// Basic syntax

// if (condition) {
//      //Statements excecuted when the condition is true
//}

// The pair of opening and closing braces defines what is called a block of code associated with an if statement. This statement represents a test. It can result in the following: "If the condition is true, then execute the instructions contained in the code block."

//The condition is always placed in parentheses after the if.

//Conditions

//A condition is an expression that evaluates whether something is true or false. When the value of the condition is true, we say that the condition is satisfied.

//We have already studied number and strings, two types of data in Javascript. Booleans are another type. This type has two possible values: true or false.

//Any expression producing a boolean value(either true or false) can be used as a condition in an if statement. If the value of this expression is true, the code block associated with it is executed.

//Booleans Expressions can be created using the mcomparison operators

//Alternative Condition

// var age = Number(prompt("Enter your age:"));
// if (age <= 12) {
//     console.log(age + " you are null & void")
// }

// var number = Number(prompt("Enter a number:"))
// if (number > 0) {
//     console.log(number + " is positive");
// } else{
//     console.log(number + " is negative or zero");
// }

// nesting condition

//You can go next - level and display a specific message if entered number is zero. Use else if for a second conditional. See this example, which has a positive test case, negative test case, and a last resort of the number being zero:

// var number = Number(prompt("Enter a number:"));
// if (number > 0) {
//     console.log(number + " is positive");
// } else if (number < 0) {
//     console.log(number + "is negative");
// } else {
//     console.log(number + " is zero");
// }

//Lets build a program that helps people/community/students that helps people you decide what to wear based on the weather using the if, else ,else if statements, and it is cloudy,windy,sunny,rainy,snowy

var condition = (prompt("What is the weather conditions:"))
if (condition === "windy") {
    console.log("wear a jacket");
} else if (condition === "sunny") {
    console.log("wear flip floppes, shorts and no sweater")
} else if (condition === "snowy") {
    console.log ("stay inside and enjoy some hot chocolate")
} else if (condition === "rainy") {
    console.log("bring an umbrella")
} else {
    console.log("not valid or null an void")
}