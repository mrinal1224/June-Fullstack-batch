let arr = [1 ,2,3,4,5]

// Calculate Sum of all element in the Array
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum+arr[i];
}

console.log(sum);

// Reduce

let sumReduce = arr.reduce(function(acc , num){
  acc = acc+num
  return acc
}, 0)

console.log(sumReduce)


const cart = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 },
    { name: 'Headphones', price: 200 },
  ];

  const totalCost = cart.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0);

  console.log(totalCost)

  // Find , some , every
  


