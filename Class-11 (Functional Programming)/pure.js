

// function sum(a, b ){
//   return a+b 
// }

// console.log(sum(2, 3 , 4));
// console.log(sum(2, 3 , 4)); 
// console.log(sum(2, 3 , 4)); 
// console.log(sum(2, 3 , 4)); 

function addToArray (arr, value){
  let result = [...arr]
  result.push(value)
  return result;
};

const myArray = [1, 2, 3 , 4];
const newArray = addToArray(myArray, 7); //[1,2,3,4,7]

console.log(myArray); 
console.log(newArray); //[1,2,3,4,7]

//H.W



