// nomes que consigo armazenar valores
// var, let ou const
// var -> ES5 - cross-browser (vários/todos navegadores)
// let e const -> ES2015 - algns navegadores
// codigos novos em antigos -> babeljs.io

//va permite declarar a mesma variável masi de uma vez, o que pode gerar problema na execução do código

let teste = "minha string" //let não permite declarar a mesma variável mais de uma vez e é possível reatribuir o valor. É possél tambem declarar uma variável e só depois atribuir um valor á ela.
//let teste = 10;
teste = 10;

//const teste2 = 10; //com constante não é possível reatribuir o valor e têm de-se atribuir valor imediatamente

let teste2 = 10;

let teste3

console.log(teste2);

teste3 = 20;
console.log(teste3);

const teste4 = "constante -> eu sou imutável";
console.log(teste4);
