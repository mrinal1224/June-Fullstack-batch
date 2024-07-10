// const cleanRoom = function(){
//     return new Promise(function(resolve , reject){
//         resolve('Cleaned The room')
//     })
// }


// const removeGarbage = function(){
//     return new Promise(function(resolve , reject){
//         resolve('Garbage Removed')
//     })
// }


// const winIceCream = function(){
//     return new Promise(function(resolve , reject){
//         resolve('Got My Ice Cream')
//     })
// }

// cleanRoom().then(function(result){
//     console.log(result)
//     return removeGarbage()
// }).then(function(result){
//     console.log(result)
//     return winIceCream()
// }).then(function(result){
//     console.log(result)
// }) // Promise Chaining


let cleanRoom = function() {
    return new Promise(function(resolve, reject) {
      // 50% chance of success
      if (Math.random() < 0.8) {
        resolve('Cleaned The Room');
      } else {
          // 50% chance of failure
        reject('Failed to clean the room');
      }
    });
  };
  
  let removeGarbage = function(message) {
    return new Promise(function(resolve, reject) {
      // 50% chance of success
      if (Math.random() < 0.8) {
        resolve(message + ' then removed Garbage');
      } else {
          // 50% chance of failure
        reject('Failed to remove garbage');
      }
    });
  };
  
  let winIcecream = function(message) {
      return new Promise(function(resolve, reject) {
      resolve(message + ' then won Icecream');
    });
  };


  cleanRoom().then(function(result){
    console.log(result);
    return removeGarbage(result);
  }).then(function(result){
    console.log(result);
    return winIcecream(result);
  }).then(function(result){
    console.log('finished ' + result);
  }).catch(function(error){
    console.error(error); // This will catch any error that occurs in the chain basically the reject parts in this example.
  });




