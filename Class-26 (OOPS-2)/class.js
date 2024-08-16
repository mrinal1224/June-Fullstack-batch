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

const Pizza1 = new Pizza("cheese", "medium", "thin");

console.log(Pizza1);

Pizza1.describe()
