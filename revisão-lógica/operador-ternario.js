let idade = 26;
let paisPresentes = false;
let comprouPassagem = true;
//const podeViajar = idade >= 18 || paisPresentes === true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouPassagem;

console.log(`Pode viajar: ${podeViajar}`);

// let msgMaiorIdade = ""
// if (idade >=18) {
//     msgMaiorIdade = "É maior de idade"
// } else {
//     msgMaiorIdade = "É menor de 18 anos"
// }

//quando existe a necessidade de uma variável ser atribuidada a valores diferentes, pode-se fazer a simplificação utilizando do Operador Ternário:

let msgMaiorIdade = (idade >= 18) ? "É maior de idade" : "É menor de 18 anos"

if(!comprouPassagem){
    console.log("Não comprou a passagem")
} else {
    console.log(msgMaiorIdade)
} 