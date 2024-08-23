// let nums = [1, 2, 3, 4, 5, 6];

// let sum = nums.reduce(function(acc , num){
//      acc = acc+num
//      return acc
//      // 0+1 = 1
//      // 1+2 = 3
//      // 3+3 = 6
//      // 6+4 = 10
//      // 10+5 = 15
//      // 15+6 = 21
// } , 0)

// console.log(sum)

// Array Reduce Polyfill

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  let firstIndex = 0;

  if (arguments.length === 1) {
    accumulator = this[0];
    firstIndex = 1;
  }

  for (let i = firstIndex; i < this.length; i++) {
    accumulator = cb(accumulator, this[i]);
  }

  return accumulator;
};

let arr2 = [1, 2, 3, 4];

let totalSum = arr2.myReduce(function (acc, num) {
  return acc + num;
});

console.log(totalSum);
