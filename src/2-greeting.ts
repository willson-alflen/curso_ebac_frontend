/*
 * função de saudação + função prompt
 */

function greeting(name: string): string {
  return "Olá " + name;
}

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite seu nome: ", (userName) => {
  const mensagemSaudacao = greeting(userName);
  console.log(mensagemSaudacao);
  rl.close();
});
