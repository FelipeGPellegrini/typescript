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
    var resultado = 1;
    for (var i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log(calcularFatorial(5));
console.log(calcularFatorial(9));
// 3 - criar pessoas com informações
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
    return Pessoa;
}());
// Criar uma instância da classe Pessoa
var pessoa1 = new Pessoa("João", 30, "Engenheiro");
// Exibir as propriedades da pessoa1
console.log("Nome:", pessoa1.nome);
console.log("Idade:", pessoa1.idade);
console.log("Profissão:", pessoa1.profissao);
