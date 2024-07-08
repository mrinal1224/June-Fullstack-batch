const fileSystem = require('fs')


console.log('Before')


const data1 = fileSystem.readFileSync('f1.txt')
const data2 = fileSystem.readFileSync('f2.txt')

console.log("data from the file1 ->  "+ data1)
console.log("data from the file2 ->  "+ data2)

console.log("After")

