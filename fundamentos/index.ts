// 1- number

let x: number = 10

console.log(x)

x = 16

console.log(typeof x)

const y: number = 15.462678
console.log(typeof y)

console.log(y)

console.log(y.toPrecision(3))

// 2- string

const firstName: string = "Felipe"

console.log(firstName.toLocaleUpperCase())

let fullName: string

const lastName: string = "Pellegrini"

fullName = firstName + " " + lastName

console.log(fullName)

console.log(typeof fullName)

// 3- boolean

let a: boolean = false

console.log(a)

console.log(typeof a)

// 4 - annotation e inference 

const ann: string = "Testee"

let inf: string = "Teste"
