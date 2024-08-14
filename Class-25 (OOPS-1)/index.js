// Simple Console log
// console.log(this); // {}

// function test() {
//   console.log(this); // Global Object
// }

// test();

// const obj1 = {
//   name: "Steve",
//   age: 23,
//   fn: function () {
//     console.log(this.name);// 
//   },
// };

// obj1.fn() // object ItSelf

// This keyword inside a  nested function inside an Object

const obj2 = {
    name :'Adam',
    age : 20,

    testFn : function f(){
         function g(){
            console.log(this) // global Object
         }
         g()
    }
}

obj2.testFn()
