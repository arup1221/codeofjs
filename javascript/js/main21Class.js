//Factory Function    --- not supported of all kind of browsers
// function pizzaFactory(pizzaSize){
//     const crust = "original";
//     const size = pizzaSize;
//     return{
//         bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
//     };
// }

// const myPizza = pizzaFactory("small");
// myPizza.bake();

//javascript classes
class Pizza {

    // public field
    crust= "original";
    #sauce = "traditional"; // # is the indication of private field
    #size;
    constructor(pizzaSize){  
        this.size = pizzaSize;
        // this.crust = "Original"; 
    }
    getCrust(){           //method
        return this.crust;
        // return this._crust;
    }
    setCrust(pizzaCrust){  //method
        this.crust = pizzaCrust;
        // this._crust = pizzaCrust; // the underscore are indicates to others that intended to private 
    }
    hereYouGo(){
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
    }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.getCrust());
console.log(myPizza.sauce);

// the private field (#) can not access outside the closing tag



// class SpecialtyPizza extends Pizza {
//     constructor(pizzaSize){
//         super(pizzaSize);
//         this.type = "The Works";
//     }
//     slice(){     //method
//         console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
//     }
// }

// const mySpecialty = new SpecialtyPizza("medium");
// mySpecialty.slice();


