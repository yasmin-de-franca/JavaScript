// utilizar os operadores lógicos pra executar algumas expressões de forma mais "elegante"

//variavel n = 0 e quero que o valor seja 10

// let n = 0
// if (!n) {
//     n=10
// }

let n = 0 
n = n || 10

console.log(n)

let isValid = true

// if (isValid) {
//     console.log("é válido")
// }

isValid && console.log("é válido")
isValid || console.log("não é válido")