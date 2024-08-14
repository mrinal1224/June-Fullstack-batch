'use strict'

// console.log(this) // Window

// function test(){
//     console.log(this) // undefined
// }

// test()

// const obj1 = {
//   name: "Steve",
//   age: 23,
//   fn: function () {
//     console.log(this);// 
//   },
// };

// obj1.fn() // Object Itself


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

obj2.testFn() // undefined





