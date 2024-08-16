// let Pizza1 = {
//   toppings : ['cheese' , 'tomatoes' , 'corn'],
//   size : 'small' ,
//   crust : 'thin' 
// }


// let Pizza2 = {
//     toppings : ['cheese' , 'onion' , 'jalapenos'],
//     size : 'medium' ,
//     crust : 'thick' 
//   }

// Constructor Function

function Pizza(Toppings , Size , Crust){
  this.toppings = Toppings
  this.size = Size
  this.crust = Crust
}

let Pizza1 = new Pizza(['cheese' , 'tomatoe' , 'corn'] , 'Medium' , 'Thin')

let Pizza2 = new Pizza(['onion' , 'mayo' , 'capsicum'] , 'Small' , 'Thick')


console.log(Pizza1)
console.log(Pizza2)





