// let arr = [1 , 2,3, 4,5]

// let sqauredNum = arr.map(function(num){
//     return num*num
// })

// console.log(sqauredNum)
// console.log(arr)

// Polyfill for Map

Array.prototype.myMap = function(callback){
   let resultantArr = []

   for(let i=0 ; i<this.length ; i++){
      resultantArr.push(callback(this[i]))
   }

   return resultantArr

   // [1 ,4 , 9 , 16 , 25 ]
   // [cubes for arrNum2]
   // 
}

let arrNum = [1 ,2 ,3 ,4 ,5]
let arrNum2 = [6 ,6 ,4 ,8 ,9]
let arrNum3 = [4,6,7,8,9]


let squareArr = arrNum.myMap(function(num){
    return num*num
}) // this-> arrNum

let cubeArr = arrNum2.myMap(function(num){
    return num*num*num
}) // this-> arrNum2

let numArr = arrNum3.myMap(function(num){
    return num
})// this-> arrNum3

console.log(squareArr)
console.log(cubeArr)
console.log(numArr)













