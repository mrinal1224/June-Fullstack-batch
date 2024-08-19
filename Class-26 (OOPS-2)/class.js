class Pizza {

  static totalPizzasMade = 0
   #toppings
   #size
   #crust

  constructor(toppings, size, crust) {
    this.#toppings = toppings;
    this.#size = size;
    this.#crust = crust;
    Pizza.totalPizzasMade++

  }

  describe() {
    console.log(
      `This Pizza has ${this.#toppings} with ${this.#crust} crust and a ${this.#size} Size`
    );
  }
 static calculateNumberOfPizzas(){
      console.log(`Total Pizza Made : ${Pizza.totalPizzasMade}`)
    }
}




class StuffedPizza extends Pizza{
    constructor(toppings , size , crust , stuffing){
        super(toppings , size , crust)
        this.stuffing = stuffing
    }
}

const Pizza1 = new Pizza("cheese", "medium", "thin");

const Pizza2 = new StuffedPizza('tomato' , 'large' , 'thick' , 'cheese and garlic')

const Pizza3 = new StuffedPizza('tomato' , 'large' , 'thick' , 'cheese and garlic')

console.log(Pizza3)
console.log(Pizza2.size)














