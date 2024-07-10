const fs = require("fs");

// fs.readFile('f1.txt', cb)

// function cb(err, data) {
//     if(err) {
//         console.log(err)
//     }else {
//         console.log("This is File 1 data -> " + data)
//     }
// }

let promiseReadFile1 = fs.promises.readFile("f1.txt");

function cb1(data) {
  console.log("This is my file data " + data);

  let promiseReadFile2 = fs.promises.readFile("f2.txt");

  return promiseReadFile2;
}

function cb2(data) {
  console.log("This is my file data " + data);

  let promiseReadFile3 = fs.promises.readFile("f3.txt");

  return promiseReadFile3;
}

function cb3(data) {
  console.log("This is my file data " + data);
}

promiseReadFile1.then(cb1).then(cb2).then(cb3);
