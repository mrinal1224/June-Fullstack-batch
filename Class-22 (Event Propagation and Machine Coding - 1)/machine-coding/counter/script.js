const counterValue = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset-button");
const container = document.getElementById("container");
const changeByInput = document.getElementById("changeBy");

container.addEventListener("click", (event) => {
  const element = event.target.getAttribute("id");

  if (element === "increment") {
    let newValue =
      Number(counterValue.textContent) + Number(changeByInput.value);
    counterValue.textContent = newValue;
  } else if (element === "decrement") {
    let newValue =
      Number(counterValue.textContent) - Number(changeByInput.value);
    counterValue.textContent = newValue < 0 ? 0 : newValue;
  } else if (element === "reset-button") {
    counterValue.textContent = 0;
  }
});

// incrementBtn.addEventListener("click", () => {
//   let newValue = Number(counterValue.textContent) + Number(changeByInput.value);
//   counterValue.textContent = newValue;
// });

// decrementBtn.addEventListener("click", () => {
//   let newValue = Number(counterValue.textContent) - Number(changeByInput.value);
//   counterValue.textContent = newValue < 0 ? 0 : newValue;
// });

// resetBtn.addEventListener("click", () => {
//   counterValue.textContent = 0;
// });
