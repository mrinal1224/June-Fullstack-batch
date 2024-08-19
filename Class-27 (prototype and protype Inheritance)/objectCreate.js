let carPrototype = {
  displayColor: function () {
    console.log(`${this.color}`);
  },

  displayInfo: function () {
    console.log(
      `This is a ${this.name} manufactured in ${this.year} and the color is ${this.color}`
    );
  },
};

let bookPrototype = {
  displayAuthor: function () {
    console.log(`${this.color}`);
  },

  displayInfo: function () {
    console.log(`This is  ${this.name} written by ${this.author}`);
  },
};

let car1 = Object.create(carPrototype);
car1.name = "Urus";
car1.year = 2023;
car1.color = "Red";

let car2 = Object.create(carPrototype);
car2.name = "Audi";
car1.year = 2021;
car1.color = "White";

let book1 = Object.create(bookPrototype);
book1.name = "Harry Potter";
book1.author = "JK Rowling";

car1.displayInfo();

console.log(car1);
console.log(book1);
