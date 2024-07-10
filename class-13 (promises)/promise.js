const coinTossPromise = new Promise(function(resolve , reject){
    setTimeout(function() {
        // simulate a coin toss delay
        const isHeads = Math.random() > 0.5;
        if (isHeads) {
          resolve("Heads is the output");
        } else {
          reject("Tails - Coin toss resulted in tails, considered as a fail for this example.");
        }
      }, 1000); // simulate a 1-second coin toss
})





// then and catch - the method works when a promises resolves

coinTossPromise.then(function(result){
    console.log(result)
})

coinTossPromise.catch(function(err){
    console.log(err)
})








