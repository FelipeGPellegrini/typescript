// 1 - arrays

let numbers: number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers[2])

const nomes: string[] = ["Felipe", "João"]

nomes.push("Luiz")

// 2 - outra sintaxe array

const nums: Array<number> = [100, 200]

nums.push(300)

console.log(nums)

console.log(nums[0])

// 3 - any

const arr1: any = [1, "teste", true, [], { nome: "felipe" }]

arr1.push([1, 2, 3])

console.log(arr1)

// 4 - tipos de parametros 

function soma(a: number, b: number) {
  console.log(a + b)
}

soma(4, 5);

// 5 - retorno de função

function greeting(name: string): string {
  return `Olá, ${name}`

}

console.log(greeting("Felipe"))

// 6 - função anonima

setTimeout(function () {
  const sallary: number = 1000

  // console.log(parseFloat(sallary))

  // console.log(sallary)

}, 2000)

// 7 - tipos de objeto

function passCordinates(coord: { x: number, y: number }) {
  console.log("X coordinates " + coord.x)
  console.log("Y coordinates " + coord.y)
}

const objCoord = { x: 329, y: 84.2 }

passCordinates(objCoord)

const pessoaObj: { nome: string, surname: string } = { nome: "Felipe", surname: "Pellegrini" }