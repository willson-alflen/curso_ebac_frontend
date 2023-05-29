/*
 * EXTRA - mensagem de saudação personalizada
 */

import * as emoji from "node-emoji";

function saudacao(
  nome: string,
  personalizado: boolean = false,
  emojiCode: string = ""
): string {
  let saudacao = "";

  if (personalizado) {
    saudacao = `Olá, ${nome}! Bem-vindo(a) ao nosso sistema!`;
  } else {
    saudacao = `Olá, ${nome}! Como posso ajudar?`;
  }

  if (emojiCode !== "") {
    const emojiSymbol = emoji.get(emojiCode);
    saudacao += ` ${emojiSymbol}`;
  }

  return saudacao;
}

console.log(saudacao("João"));
console.log(saudacao("Maria", true));
console.log(saudacao("Pedro", false, "wave"));
