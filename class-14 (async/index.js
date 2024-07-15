function prepareIngredients(callback) {
  setTimeout(function () {
    console.log("Ingredients prepared");
    callback();
  }, 20000);
}

function cookDish(callback) {
  setTimeout(function () {
    console.log("Dish cooked");
    callback();
  }, 10000);
}

function serveDish(callback) {
  setTimeout(function () {
    console.log("Dish served");
    callback();
  }, 5000);
}

function cleanUp() {
  setTimeout(function () {
    console.log("Cleaning up");
    callback()
  }, 5000);
}


function giveFeedback(callback) {
    setTimeout(function() {
      console.log("Feedback given");
    }, 500);
  }



prepareIngredients(function(){
    cookDish(function(){
        serveDish(function(){
            cleanUp(function(){
                giveFeedback()
            })
        })
    })
})
