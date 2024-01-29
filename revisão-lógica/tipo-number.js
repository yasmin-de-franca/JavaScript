let minhaVar = "minha string";
let idade = 18
let msg = "eu possuo " + idade + " anos"; //concatenação
let msg2 = `eu possuo ${idade} anos`; //mais simples e moderno. Pouca chance de erro

console.log(typeof msg, typeof idade, typeof minhaVar);

const n1 = 10
const n2 = 1.5
console.log(`o tipo n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`o tipo n2 é ${typeof n2} e seu valor é ${n2}`);

console.log(msg);