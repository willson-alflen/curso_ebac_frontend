/*
 * Utilizando o TypeScript, escreva duas funções: (1) uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles, (2) e uma função de saudação que deverá receber um nome e retornar a concatenação "Olá" + nome;
 */

/*
 * exercício 1
 */

function multiplyNumbers(a: number, b: number): number {
  return a * b;
}

const result = multiplyNumbers(5, 3);
console.log(result);
