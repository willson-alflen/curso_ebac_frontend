const form = document.getElementById("form-validacao");
const numberA = document.querySelector("#number-A");
const numberB = document.getElementById("number-B");

function checkNumbers(a, b) {
  if (b > a) {
    alert("O formulário é válido");
  } else {
    alert("O formulário não é válido");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkNumbers(numberA.value, numberB.value);
});
