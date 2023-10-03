//bloco sempre tem que terminar com else{}

let n1 = 10;
let n2 = 8;
let media = (n1 + n2) / 2;
console.log(`media: ${media}`);

if(n1 === 0 || n2 === 0 ) {
    console.log("Reprovado")
} else if(media < 7 ) {
    console.log("Reprovado, mas há como recuperar")
} else {
    console.log("Aprovado")
}
console.log("Saiu do bloco if");



let idade = 16;
let paisPresentes = false;
let comprouPassagem = true;
//const podeViajar = idade >= 18 || paisPresentes === true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouPassagem;

console.log(`Pode viajar: ${podeViajar}`);

/*if(comprouPassagem){
    console.log("Comprou a passagem")
} else {
    console.log("Não comprou a passagem")
}
}*/

if(!comprouPassagem){
    console.log("Não comprou a passagem")
} else {
    if (idade >= 18) {
        console.log("É maior de idade e pode viajar")
    } else {
        console.log("É menor de idade e não pode viajar sozinho")
    }
} 



let EstouComFome = false;
let tenhoDinheiro = true;
let possoComprar = true;

console.log(`Estou com fome? ${EstouComFome}`);
console.log(`Tenho Dinheiro? ${tenhoDinheiro}`);
console.log(`Então posso comprar ou não?`);

if(EstouComFome && possoComprar) {
    console.log("Sim, posso comprar besteira.")
} else if(tenhoDinheiro) {
    console.log("Posso comprar, mas não devo.")
} else {
    console.log("Não dá pra comprar besteira...")
}