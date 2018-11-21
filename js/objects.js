//What's an object

//Think about objects in the non - programming sense, like a pen. A pen can have different ink colors,  be manufactured by different people, have different tip, and many other properties.

//Similarly, an object in programming is an entity that has properties. Each property defines a characteristics of the object. A propertty defines a charateristics of the object. A property can be information associated with the object (the color of the pen) or action (the pen's ability to write).

// What does this have to do with code

// object - oriented programming (OOP for short) is a way to write programs using objects, and the objects make up your program

//OOP changes the way, a program



//javascript and objects

//Like many other languages, Javascipt involves programmming objects, so we can say it's an object-oritented language. It provides a number of predefined objects while also letting you create your own.

//Creating an object
//Here is the javascript representation of a blue Bic ballpiont pen.

// let pen ={
//     type: "ballpoint",
//     color: "blue",
//     brand: "Bic"
// };

/* ====

Create a new project in javascript by setting its properties within a pair of curly braces: {
...    
}

=== */

//Getting a value

//After creating the object, you can access the value of tits properties using dot notation such as myObject.myProperty.

// console.log(pen.type);//will be "ballpoint"
// console.log(pen.color);//will be "blue"
// console.log(pen.brand);//will be "Bic"

//Since you now know how to access properties, you can start combining them with other elements, like strings as part of a sentence.
//Create a sentence using concactenation

// console.log("I am using " +pen.type, "pen which is " +pen.color, "and it is a " +pen.brand, )

/* ===
Let 's create a cake in javascript that has several properties:

 flavors, like vanilla, chocolate, etc.

 price in madibas

 layers (1,2,3.. .10 ? !)
 ===*/

//  let cake = {
//      type: "anniversary cake",
//      flavour: "red velvet, chocolate, ice cream, and vanilla",
//      price: "free.99",
//      layers: "5 layers",
//      toppings: "maynards, sour worms, biscuits, genoshe and fondat",
//      occasion: "Birthday"
//  }

//  console.log( "Ms Gallow, I have a " +cake.type, "that comes in " +cake.flavour, "which has max " +cake.layers, "with these toppings " +cake.toppings, "at the best price of " +cake.price,  )

// //  the cake was to pricey
//  cake.price = "R250"

//  console.log( "Ms Gallow, I have a " +cake.type, "that comes in " +cake.flavour, "which has max " +cake.layers, "with these toppings " +cake.toppings, "at the best price of " +cake.price, )

//  Methods on objects

//we had to write lengthy console.log statements each time to show the cake description. There's a cleaner way to accomplish this.

//Adding a method to an object

//Describe a cake

// function describe(cake) {
//     var description = "The " + cake.occasion + " cake has a " + cake.flavour + " flavor," + cake.layers + "layers, and costs " + cake.price + "."; return description; 
// }

// console.log(describe(cake))

//The function describe() takes an object as a parameter. We pass it the cake, and it accesses that objects's properties and prints them out in that sentence.

//Now for an alternative approach: creating a describe property that houses a method.
let cake = {
    type: "anniversary cake",
    flavour: "red velvet",
    price: "R300",
    layers: "5",
    occasion: "Birthday",

//Describe the cake
describe: function () {
    var description = "The " + this.occasion + " cake has a " + this.flavour + " flavor," + this.layers + " layers, and costs " + this.price + "."; return description; 
 }

};

console.log(cake.describe());

//The cake is actually for a wedding!
cake.occasion = "wedding";

//Now our object has a new property availible to it describe. The value of this property is function that returns text description of the cake.

//A property whose value is a function is called a method.

/* ===

Remeber the parenthesis, even if empty, when calling a method!

=== */

