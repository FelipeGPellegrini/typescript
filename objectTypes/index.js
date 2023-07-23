"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é: ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponível");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Tênis", price: 129.90, isAvailable: true });
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const u1 = { email: "lipegomespellegrini@gmail.com", role: "Admin" };
const u2 = { email: "flppellegrini@gmail.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 150
};
coords.y = 15;
console.log(coords);
const Felipe = {
    name: "Felipe",
    age: 18
};
console.log(Felipe);
const goku = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"]
};
console.log(goku);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
// 7 - readonly array
let myArray = ["Maça", "Laranja", "Banana"];
const MyNumberArray = [1, 2, 3, 4, 5];
// 9 - tuplas com reandonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
