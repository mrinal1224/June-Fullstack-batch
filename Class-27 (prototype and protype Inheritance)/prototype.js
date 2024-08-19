Car.prototype.displayInfo = function () {
  console.log(
    `This is a ${this.name} manufactured in ${this.year} and the color is ${this.color}`
  );
};


// Car.prototype.__proto__.displayColor= function(){
//     console.log(`Color of the Car is ${this.color}`)
// }


// let book = {
//     name : 'The Great gatsby',
//     publishedYear : 2001,
// }

// console.log(book)

// book.displayColor()

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

car1.ShowYOM()


console.log(car1.hasOwnProperty('color'))
// car1.displayColor()
// car2.displayColor()
