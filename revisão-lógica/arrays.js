//arrays é um espaço na memória onde são armazenados conjunto de dados
//array é também um objeto
//sintaxe formal
const arr = new Array()
const arr2 = new Array(true, "Yasmin", 18, "Casada", new Array(13, 1, 2024))
arr[0] = "Abacate"
arr[1] = 50
console.log(arr)
console.log(arr2[4][arr2[4].length - 1])

//sintaxe literal(mais utilizada)
const arr3 = ["Abacate", "verde", ["800g"], true]
arr3[4] = "a"
arr3[arr3.length] = "b"
arr3.push("push")
arr3.push("c", "d", "e")

console.log(arr3)
console.log(arr3[2])
console.log(arr3[2][0])
let n = 6
console.log(arr3[n])