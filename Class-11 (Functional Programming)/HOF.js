let myRadiusArray = [2, 3, 4, 5, 8]
// Genric Function

function Calculate(radiusArr , cb){
    let result = []
    for(let i = 0 ; i < radiusArr.length ; i ++ ){
        result.push(cb(radiusArr[i]))
    }
    return result
} // Higher order Function




function circleArea(r){
    return 3.14 * r * r
}

function circleCircumference(r){
    return 2 * Math.PI * r;
}

function circleDiamter(r){
  return 2 * r
}
let diamters = Calculate(myRadiusArray ,circleDiamter)

console.log(myRadiusArray)

console.log(diamters)

// /// Area
// function calculateArea(radiusArr){
//     let result = []
//     for(let i = 0 ; i < radiusArr.length ; i ++ ){
//         result.push()
//     }
//     return result
// }

// let finalAreas = calculateArea(myRadiusArray)
// console.log('This is area array => ', finalAreas)


// function calculateCircumference(radiusArr){
//     let result = []
//     for(let i = 0 ; i < radiusArr.length ; i ++ ){
//         result.push( 2 * Math.PI * radiusArr[i])
//     }
//     return result
// }
// let finalCircumferences = calculateCircumference(myRadiusArray)
// console.log('This is Circumference array =>', finalCircumferences)



// function calculateDiameter(radiusArr){
//     let result = []
//     for(let i = 0 ; i < radiusArr.length ; i ++ ){
//         result.push(radiusArr[i] * 2)
//     }
//     return result
// }
// let finalDiameters = calculateDiameter(myRadiusArray)
// console.log('This is Diameter array =>', finalDiameters)
