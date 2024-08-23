// let arrNum = [1 ,2 ,4 ,8 ,9, 12 , 14, 17]

// let evenArray= arrNum.filter(function(num){
//     return num%2==0 
//     // 1 -> false
//     // 2 - true
//     // 4 - true
//     // 8- true
//     //9 - false
// })

// console.log(evenArray)


// Polyfill for Filter

Array.prototype.myFilter = function(callback){
    let resultantArray = []

     for(let i=0 ; i<this.length ; i++ ){
        if(callback(this[i])){
            resultantArray.push(this[i])
        }
     }

    return resultantArray
}

let numbers = [1 , 2 ,3 , 5 , 7 , 9, 10]

let oddNums = numbers.myFilter(function(num){
  return num%2!=0
}) 

let evenNums = numbers.myFilter(function(num){
    return num%2==0
  }) 

console.log(oddNums)
console.log(evenNums)


