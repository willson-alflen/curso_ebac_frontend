const form = document.querySelector(".needs-validation");

form.addEventListener("submit", (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
    swal(
      "Desculpe!",
      "Você precisa preencher os campos corretamente.",
      "error"
    );
  } else {
    alert("Formulário enviado com sucesso!")
    swal("Parabéns!", "Sua inscrição foi concluída com sucesso.", "success");
  }
  form.classList.add("was-validated");
});
