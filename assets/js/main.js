$(document).ready(() => {
  $("form").on("submit", (e) => {
    e.preventDefault();

    // pega o valor do input
    let novaTarefa = $("#nova-tarefa").val();

    // cria novo item da lista
    $("ol").append(
      '<li id="item-da-lista">' +
        '<div class="descricao-da-tarefa">' +
        novaTarefa +
        "</div>" +
        '<div class="icons">' +
        '<i class="fa-solid fa-check"></i>' +
        '<i class="fa-solid fa-xmark"></i>' +
        "</div>" +
        "</li>"
    );
    $("#nova-tarefa").val("");
  });

  // marca a tarefa como concluída
  $("ol").on("click", ".fa-check", function () {
    $(this).parent("div").siblings().toggleClass("checked");
  });

  $("ol").on("dblclick", ".descricao-da-tarefa", function () {
    $(this).toggleClass("checked");
  });

  // remove a tarefa selecionada
  $("ol").on("click", ".fa-xmark", function () {
    $(this).parent("div").parent("li").fadeOut(200);
  });

  // reorganiza cada item da lista
  $("#lista-de-tarefas").sortable();
});
