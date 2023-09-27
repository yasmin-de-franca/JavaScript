// and (&&), or (||), not (!)

/* TABELA VERDADE
Exp A      Exp B   AND(&&)
true  -e-  true    true
true  -e-  false   false
false -e-  true    false
false -e-  false   false

Exp A       Exp B   OR(||)
true  -ou-  true    true
true  -ou-  false   true
false -ou-  true    true
false -ou-  false   false

Exp A   NOT A (!A)
true    false
false   true
*/

/* ORDEM DE PRECEDÊNCIA DOS OPERADORES
Aritiméticos    ()
                ^ **
                * /
                %
                + -

Relacionais     ==
Comparação      !=
                <
                >
                <=
                >=

Lógicos         &&
                ||
                !

*/

/*
Para uma pessoa viajar para o exterior:
-precsa ser maior de 18 anos
OU
- acompanhado com os pais
E
- ter comprado a passagem
*/

let idade = 21;
let paisPresentes = false;
let comprouPassagem = true;
//const podeViajar = idade >= 18 || paisPresentes === true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouPassagem;

console.log(`Pode viajar: ${podeViajar}`);