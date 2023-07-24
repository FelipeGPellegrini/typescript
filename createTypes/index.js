"use strict";
// 1 - generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData("testando generic"));
console.log(showData(true));
console.log(showData(["Oi"]));
// 2 - constraint em generic
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" };
console.log(showProductName(myObj));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "White" };
const myPen = { name: "Caneta BIC", wheels: false, engine: false, color: "Blue" };
console.log(myCar);
console.log(myPen);
// 4 - type parameters 
function getSomeKey(obj, key) {
    return `A chave está presente no objeto e tem valor de ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "32GB"
};
console.log(getSomeKey(server, "hd"));
