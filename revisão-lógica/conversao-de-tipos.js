/*n1 = parseInt(n1);*/

let n1 = "oi";
// n1 = parseFloat(n1);
//n1 = Number(n1);

let n2 = 2;
n2 = 15;
n2 = n2.toString(17);

console.log(n2, typeof n2);

console.log(n1 + n2, typeof n1, typeof n2, n1);

//o próprio JS faz uma conversão quando solicita-se a multiplicação de um numero com uma string
//quando utiliza o sinal + acaba acontecendo uam concatenação, e não um aadição.
//calculos matemáticos faze-se a conversão para números com parseFloat, parseInt, Number()
//parseInt e parseFloat só consegue converter se o primeiro caractere for um número
//Se tentar utilizar caractere não numérico, Number() retorna NaN
// decimais 0 -9, hexadecimais 0 - f 
