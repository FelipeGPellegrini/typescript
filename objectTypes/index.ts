// 1 - tipo de objeto para função com interface
interface Product {
  name: string
  price: number
  isAvailable: true
}

function showProductDetails(product: Product) {
  console.log(`O nome do produto é: ${product.name} e seu preço é R$${product.price}`)
  if (product.isAvailable) {
    console.log("O produto está disponível")
  }
}

const shirt: Product = {
  name: "Camisa",
  price: 19.99,
  isAvailable: true
}

showProductDetails(shirt)
showProductDetails({ name: "Tênis", price: 129.90, isAvailable: true })

// 2 - propriedade opcional em interface

interface User {
  email: string,
  role?: string
}

function showUserDetails(user: User) {
  console.log(`O usuário tem o e-mail: ${user.email}`)

  if (user.role) {
    console.log(`A função do usuário é: ${user.role}`)
  }
}

const u1: User = { email: "lipegomespellegrini@gmail.com", role: "Admin" }
const u2: User = { email: "flppellegrini@gmail.com" }

showUserDetails(u1)
showUserDetails(u2)

// 3 - readonly (valores q n mudam, apenas para leitura)
interface Car {
  brand: string
  readonly wheels: number
}

const fusca: Car = {
  brand: "VW",
  wheels: 4
}

console.log(fusca)

// 4 - Index signatures
interface CoordObject {
  [index: string]: number
}

let coords: CoordObject = {
  x: 150
}

coords.y = 15

console.log(coords)

// 5 - extending interfaces

interface Human {
  name: string
  age: number
}

interface SuperHuman extends Human {
  superpowers: string[]
}

const Felipe: Human = {
  name: "Felipe",
  age: 18
}

console.log(Felipe)

const goku: SuperHuman = {
  name: "Goku",
  age: 50,
  superpowers: ["Kamehameha", "Genki Dama"]

}

console.log(goku)

// 6 - intersection types

interface Character {
  name: string
}

interface Gun {
  type: string
  caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12
}

console.log(arnold)

console.log(arnold.caliber)

// 7 - readonly array

let myArray: ReadonlyArray<string> = ["Maça", "Laranja", "Banana"]

// 8 - tuplas 
type fiveNumbers = [number, number, number, number, number]

const MyNumberArray: fiveNumbers = [1, 2, 3, 4, 5]

// 9 - tuplas com reandonly

function showNumbers(numbers: readonly [number, number]) {
  console.log(numbers[0])
  console.log(numbers[1])
}

showNumbers([1, 2])