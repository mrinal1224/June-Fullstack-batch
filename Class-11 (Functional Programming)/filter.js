let arr = [1 ,2 ,4 ,6 ,7 ,9 ,11,12 , 14 ,56,67 ,78]


let evenArray = arr.filter(function(num){
    return num %2 ==0 // true
})

let OddArray = arr.filter(function(num){
    return num %2 !==0 
})

console.log(evenArray)
console.log(OddArray)