$(document).ready(function () {
  $("#phoneNumber").mask("(00) 00000-0000", {
    placeholder: "(99) 99999-9999",
  });

  $("#cpf").mask("000.000.000-00", {
    reverse: true,
    placeholder: "123.456.789-10",
  });

  $("#cep").mask("00000-000", {
    placeholder: "12345-678",
  });

  $("form").validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
      phoneNumber: {
        required: true,
      },
      cpf: {
        required: true,
      },
    },
    messages: {
      name: "Por favor, preencha este campo corretamente!",
      email: "Por favor, preencha este campo corretamente!",
      phoneNumber: "Por favor, preencha este campo corretamente!",
      cpf: "Por favor, preencha este campo corretamente!",
      endereco: "Por favor, preencha este campo corretamente!",
      cep: "Por favor, preencha este campo corretamente!",
    },
    submitHandler: function (form) {
      swal("Beleza", "Suas informações foram enviadas com sucesso!", "success");
      console.log(form);
    },
    invalidHandler: function (event, validator) {
      let camposIncorretos = validator.numberOfInvalids();
      if (camposIncorretos) {
        swal("Desculpe", "Não foi possível fazer o envio das informações!", "error");
      }
    },
  });
});
