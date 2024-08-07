const counterValue = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset-button");

incrementBtn.addEventListener("click", () => {
  let newValue = Number(counterValue.textContent) + Number(changeByInput.value);
  counterValue.textContent = newValue;
});

decrementBtn.addEventListener("click", () => {
  let newValue = Number(counterValue.textContent) - Number(changeByInput.value);
  counterValue.textContent = newValue < 0 ? 0 : newValue;
});

resetBtn.addEventListener("click", () => {
  counterValue.textContent = 0;
});
