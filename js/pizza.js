//Using objects and prototypes create 3 pizzas vegetarian,halaal and meaty

var Pizza ={

    init: function(type, base, layers, toppings, price,){
        this.type = type;
        this.base = base;
        this.layers = layers;
        this.toppings = toppings;
        this.price = price; 
    },

    // description
    describe: function(){
      var description = "The " + this.type + " pizza has a " + this.base + " base and includes " + this.layers + " layers with these toppings " + this.toppings + " at this price " + this.price + ".";; 
      return description; 
    }
   
};

var vegetarian = Object.create(Pizza)
vegetarian.init("vegetarian", "thick", 4, "mozarella,gouda,olives,pineapple and avocado", "R100");

var halaal = Object.create(Pizza);
halaal.init("halaal", "thin,thick", 2, "saucey chicken, tikka chicken, succulent beef and polony", "R200");

var meaty = Object.create(Pizza)
meaty.init ("meaty", "sausage filled", 10, "chicken,steak,beef and bacon", "R900");

console.log(vegetarian.describe());
console.log(halaal.describe());
console.log(meaty.describe());


