
const person1 = {
  name: "john",
  age: 20,

  printNameAndAge: function () {
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
  },
};

const person2={
    name : 'Mark',
    age : 25
}

// call

// The Object from whihc we are going to Borrow the method

person1.printNameAndAge.call(person2)








