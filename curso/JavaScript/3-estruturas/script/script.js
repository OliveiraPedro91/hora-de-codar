// 1 - Variaveis
let nome = "Pedro"; 

console.log (nome)

nome = "Pedro Oliveira da Silva"

console.log(nome)

const idade = 31

console.log(idade) //Constante nao tem como trocar o valor

console.log (typeof nome)
console.log (typeof idade)

// 2 - Mais sobre variáveis

let a = 10, 
b = 20, 
c = 30;

console.log(a, b, c);

const nomeCompleto = "Pedro Oliveira da Silva"

console.log(nomeCompleto);
console.log(nomeCompleto);

let _teste = "ok";
let $teste = "ok";

console.log(_teste, $teste);

// - 3 - prompt

//const age = prompt("Digite a sua idade: ");

//console.log(`Você tem ${age} anos.`);

// - 4 - Alert

//alert("Testando");

//const z = 10;

//alert (`O número é ${z}`);

// 5 - Math

console.log(Math.max(5, 2, 1, 10));

console.log(Math.floor(5.14));

// 6 - Console

console.log("teste!");
console.error("Erro!");

console.warn("Aviso!");

// 7 - IF
const m = 10;

if (m > 5){
    console.log("M é maior que 5");
}

const user = "João"

if(user === "João"){
    console.log("O nome dele é João!")
}
if(user === "Maria"){
    console.log("Olá Maria!");
}

console.log(user=== "João", user === "Maria");

// 8 - else
const loggedIn = false

if(loggedIn){
    console.log("Está autenticado!")
} else{
    console.log("Não está autenticado.")
}

const q = 10
const w = 15

if(q > 5 && w > 20){
    console.log("Números mais alto")
} else{
    console.log("Os números mais baixos")
}

// 9 - else if

if(1 > 2){
    console.log("Teste");
} else if(2 > 3){
    console.log("Teste 2");
} else if (5 > 1){
    console.log("Agora sim!");
}
const userName = "Pedro"
const userAge = 31

if(userName === "João"){
    console.log("Bem vindo João!");
} else if(userName === "Pedro" && userAge === 31){
    console.log("Olá Pedro, você tem 31 anos!");
}else{
    console.log("Nenhuma condição aceita!")
}
// 10 - while

let p = 0 

while(p < 5){
    console.log(`Repetindo ${p}`)
    p = p + 1;
}

//Loop infinito
//

// let x = 10 

// while(x > 5){
//     console.log(`Imprimindo ${x}`)
// }
// 11 - do while
let o = 10

do{
    console.log(`Valor de o: ${o}`)
    o--
} while(o > 1);

// 12 - For
for(let t = 0; t < 10; t++){
    console.log("Repetind algo...");
}

let r = 10

for(r; r > 0; r = r - 1){
    console.log(`o r está dininuindo: ${r}`);
}
// 13 - identeção
for(let u = 0; u < 10; u++){
if(u * 2 > 10){
        console.log(`Maior que 10! ${u}`)
    } else{
        if(u/2 === 0){
            console.log("deu 0")
        }
    }
}
// 14 - Break
for(let g = 20; g > 10; g--){
    console.log(`O valor de g é: ${g}`);
    if(g === 15){
        console.log("O g é 15");
        break;
    }
}

for(let idade = 31; idade > 10; idade--){
    console.log(`Sua idade é: ${idade}, você pode entrar`);
    if(idade === 18){
        console.log("Você não pode entrar, você é menor de idade.");
        break;
    }
}
// 15 - continue

for(let s = 1; s < 10; s = s + 1){
    // Operador de resto = %
    if(s % 2 === 0){
        console.log("Número par!");
        continue;
    }
    console.log(s);
}