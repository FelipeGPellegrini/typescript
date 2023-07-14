"use strict";
// 1 - verificar impar ou par
function verifyIfIsEven(n) {
    if (n % 2 === 0) {
        return "É par";
    }
    return "É ímpar";
}
console.log(verifyIfIsEven(2));
console.log(verifyIfIsEven(1));
// 2 - fatorial
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log(calcularFatorial(5));
console.log(calcularFatorial(9));
// 3 - criar pessoas com informações
class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}
// Criar uma instância da classe Pessoa
const pessoa1 = new Pessoa("João", 30, "Engenheiro");
// Exibir as propriedades da pessoa1
console.log("Nome:", pessoa1.nome);
console.log("Idade:", pessoa1.idade);
console.log("Profissão:", pessoa1.profissao);
// Implementar uma função que receba um array de números como parâmetro e retorne o maior valor presente no array.
function orderNumbers(numb) {
    numb.sort(function (a, b) {
        return b - a;
    });
    console.log("Esse é o maior número: " + numb[0]);
}
orderNumbers([10, 60, 85, 30, 1000]);
