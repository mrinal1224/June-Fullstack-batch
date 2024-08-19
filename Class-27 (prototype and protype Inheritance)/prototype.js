Car.prototype.displayInfo = function () {
  console.log(
    `This is a ${this.name} manufactured in ${this.year} and the color is ${this.color}`
  );
};

function Car(Name, Year, Color) {
  this.name = Name;
  this.year = Year;
  this.color = Color;

  
}

let car1 = new Car("Mustang", 2021, "Red");
let car2 = new Car("Bentley", 2023, "Gray");

console.log(car1);
console.log(car2);

car1.displayInfo();
car2.displayInfo();
