"use strict";
/*
 * EXTRA - calculadora simples
 */
function calculator(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                return "Não se pode dividir por zero";
            }
            else {
                return a / b;
            }
        default:
            return "Operador inválido";
    }
}
console.log(calculator(5, 3, "+"));
console.log(calculator(5, 3, "-"));
console.log(calculator(5, 3, "*"));
console.log(calculator(5, 3, "/"));
console.log(calculator(5, 0, "/"));
console.log(calculator(5, 3, "%"));
