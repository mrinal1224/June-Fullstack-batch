let arr = [1, 2, 3, 4, 5]

// function squareArrFn(arr){
//     let squareArr = []
//     for(let i = 0 ; i < arr.length ; i ++ ){
//         squareArr.push(arr[i] * arr[i])
//     }
//     return squareArr;
// }

// let squareArrFinal = squareArrFn(arr)
// console.log(squareArrFinal)

// Map method

function calculateSqaure(num){
    return num*num
}

let sqaures = arr.map(calculateSqaure)

console.log(arr)

console.log(sqaures)





