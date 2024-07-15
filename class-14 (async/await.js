function prepareIngredients() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Ingredients prepared");
      resolve();
    }, 10000);
  });
}

function cookDish() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Dish cooked");
      resolve();
    }, 2000);
  });
}

function serveDish() {
  return new Promise(function (resolve , reject) {
    setTimeout(function () {
      reject('Failed to server the Dish');
    }, 500);
  });
}

function cleanUp() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Cleaning up");
      resolve();
    }, 1000);
  });
}

async function executeTasks() {
  try {
    await prepareIngredients(); // 10 sec
    await cookDish(); // 2 sec
    await serveDish(); // 0.5
    await cleanUp(); // 1 sec
  } catch (error) {
    console.log(error);
  }
}

executeTasks();
