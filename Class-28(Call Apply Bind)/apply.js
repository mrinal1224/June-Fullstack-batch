const person1 = {
    name: "john",
    age: 20,

    printNameAndAge: function (location , favColor) {
        console.log(`My name is ${this.name} and I am ${this.age} years old and i live in ${location} and My favuorite color is ${favColor}`);
      },
  
    
  };
  
  const person2={
      name : 'Mark',
      age : 25
  }
  
  const person3={
      name : 'Adam',
      age : 25
  }

  person1.printNameAndAge.apply(person3 , ['India' , 'Blue'])


  