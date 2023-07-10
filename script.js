const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");
let errorTimeout;
let resultTimeout;

function updateResults() {
  // alert("Hello"); // Debugging

  if (inputEl.value <= 0 || isNaN(inputEl.value)) {
    errorEl.innerHTML = "Please enter a valid number!";
    clearTimeout(errorTimeout);
    errorTimeout = setTimeout(() => {
      errorEl.innerHTML = "";
      inputEl.value = "";
    }, 2000);
  } else {
    resultEl.innerText = (+inputEl.value / 2.2).toFixed(2) + " kg";
    clearTimeout(resultTimeout);
    resultTimeout = setTimeout(() => {
        resultEl.innerText = "";
        inputEl.value = "";
    }, 2000);
  }
}

inputEl.addEventListener("input", updateResults);

// setTimeout function clears the error message after 2 seconds
