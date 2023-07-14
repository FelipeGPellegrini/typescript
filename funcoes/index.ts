// 1 - void

function withoutReturn(): void {
  console.log("Está função n tem retorno!")

}

withoutReturn()

// 2 - callback como argumento
function greeting(name: string): string {
  return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName: string) {
  console.log("Preparando a função")

  const greet = f(userName)

  console.log(greet)
}

preGreeting(greeting, "Felipe")

// 3 - generic function

function firstElement<T>(arr: T[]): T {
  return arr[0]

}

console.log(firstElement([1, 2, 3]))
console.log(firstElement(["a", "b", "c"]))

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2
  }
}

const newObject = mergeObjects({ name: "Felipe" }, { age: 18, job: "Programmer" })

console.log(newObject)