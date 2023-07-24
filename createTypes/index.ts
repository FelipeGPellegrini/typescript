// 1 - generics

function showData<T>(arg: T): string {
  return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData("testando generic"))
console.log(showData(true))
console.log(showData(["Oi"]))


// 2 - constraint em generic
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`
}

const myObj = { name: "Porta", cor: "Branca" }

console.log(showProductName(myObj))

// 3 - generics com interface
interface MyObject<T, U, Q> {
  name: string
  wheels: T
  engine: U
  color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Car = { name: "Fusca", wheels: 4, engine: 1.0, color: "White" }
const myPen: Pen = { name: "Caneta BIC", wheels: false, engine: false, color: "Blue" }

console.log(myCar)
console.log(myPen)

// 4 - type parameters 
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave está presente no objeto e tem valor de ${obj[key]}`
}

const server = {
  hd: "2TB",
  ram: "32GB"
}

console.log(getSomeKey(server, "hd"))