/* MINIFICAÇÃO DO CÓDIGO USANDO UGLIFY-JS*/
const { exec } = require("child_process");

// Caminho do arquivo JavaScript original
const inputFilePath = "src/scripts/main.js";

// Caminho do arquivo JavaScript minificado de saída
const outputFilePath = "dist/scripts/main.min.js";

// Comando para executar o Babel e o UglifyJS
const command = `npx babel ${inputFilePath} --presets=@babel/preset-env | npx uglifyjs -o ${outputFilePath}`;

// Executar o comando no terminal
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro durante a minificação: ${error}`);
    return;
  }
});

/* CHAMADA PARA A API */
document.addEventListener("DOMContentLoaded", function () {
  const avatar = document.getElementById("avatar");
  const name = document.getElementById("name");
  const username = document.getElementById("username");
  const numberOfRepos = document.getElementById("numberOfRepos");
  const numberOfFollowers = document.getElementById("numberOfFollowers");
  const numberOfFollowings = document.getElementById("numberOfFollowings");
  const profileUrl = document.getElementById("profileUrl");

  fetch("https://api.github.com/users/willson-alflen")
    .then(function (res) {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then(function (json) {
      avatar.src = json.avatar_url;
      name.innerText = json.name;
      username.innerText = json.login;
      numberOfRepos.innerText = json.public_repos;
      numberOfFollowers.innerText = json.followers;
      numberOfFollowings.innerText = json.following;
      profileUrl.href = json.html_url;
    })
    .catch(function (error) {
      // Trata o erro da requisição
      console.log("Ocorreu um erro na requisição:", error);
      // Exibe uma mensagem de erro ao usuário usando o SweetAlert
      swal({
        title: "Erro",
        text: "Ocorreu um erro na requisição. Por favor, tente novamente mais tarde.",
        icon: "error",
        button: "OK",
      });
    });
});
