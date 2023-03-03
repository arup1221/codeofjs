//javascript

class Pizza {
    constructor(pizzaType,pizzaSize){
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "Original";
        this.toppings = [];
    }
    // get pizzaCrust(){
    //     return this.crust;
    // }
    // set pizzaCrust(pizzaCrust){ 
    //     this.crust = pizzaCrust;
    // }
    getCrust(){ //method
        return this.crust;
    }
    setCrust(pizzaCrust){  //method
        this.crust = pizzaCrust;
    }

    getToppings(toppings){
        return this.toppings;
    }
    setToppings(toppings){
        this.toppings.push(toppings);
    }


    bake(){   //method
        console.log(`Baking a ${this.size} size ${this.crust} ${this.type} crust pizza.`);
    }
    
}

const myPizza = new Pizza("pasta", "regular"); //pizza object
// myPizza.type = "supreme"; // don't use this to directly access this
myPizza.setCrust("thin");
myPizza.bake();
myPizza.setToppings("sausage");
myPizza.setToppings("olives");
console.log(myPizza.getToppings());
console.log(myPizza.getCrust());

