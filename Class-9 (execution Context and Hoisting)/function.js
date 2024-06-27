// Functions

// Syntax of a function
// function serveBeverage(quantity, drink){
//   console.log('I want ' + quantity  + ' ' + drink)
// } 

// // Function invokation
// serveBeverage(3 , "coffee")

// Function as Expressions ( functions as first class citizens)

// function sayHi(){}{
//     console.log("HI")
// }

// sayHi()

const sayHi = function(){
    console.log('hi')
}

const serveBeverage = function(quantity , drink){
    console.log('I want ' + quantity  + ' ' + drink)
}


sayHi()
serveBeverage(3 , 'tea')


