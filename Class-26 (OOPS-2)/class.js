class Pizza {
  constructor(toppings, size, crust) {
    this.toppings = toppings;
    this.size = size;
    this.crust = crust;
  }

  describe() {
    console.log(
      `This Pizza has ${this.toppings} with ${this.crust} crust and a ${this.size} Size`
    );
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

console.log(Pizza1);

console.log(Pizza2)





