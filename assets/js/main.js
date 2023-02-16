const form = document.querySelector(".needs-validation");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    swal(
      "Desculpe!",
      "Você precisa preencher os campos corretamente.",
      "error"
    );
  } else {
    swal("Parabéns!", "Sua inscrição foi concluída com sucesso.", "success");
  }
  form.classList.add("was-validated");
});
