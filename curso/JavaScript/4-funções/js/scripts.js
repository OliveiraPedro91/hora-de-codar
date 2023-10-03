// 1 - Criando uma função
function minhaFunção(){
    console.log("Testando");
}

minhaFunção();
minhaFunção();

const minhaFuncaoEmVariavel = function () {
    console.log("Função em variável")
}

minhaFuncaoEmVariavel();

function funcaoComParamentro(txt){
    console.log(`Imprimindo ${txt}`);
}

funcaoComParamentro("Imprimindo alguma coisa");
funcaoComParamentro("Outra função");

// 2 - return
const a = 10;
const b = 20;
const c = 30;
const d = 40;
function soma(n1, n2){
    return n1 + n2;
}
const resultado = soma(a , b);

console.log(resultado)
console.log(soma(c, d)); 

//
// const x = 5;
// const z = 10;

// function multiplica(x, y){
//     return x * y;
// }
// const total = multiplica(x , y);
// console.log(total)

// 3 - escopo da função
let y = 10
function testandoEscopo(){
    let y = 20;
    console.log(`Y dentro da função é: ${y}`);
}
testandoEscopo();
console.log(`Y fora da função é: ${y}`);

// 4 - Escopo aninhado
let m = 10
function escopoAninhado(){
    let m = 20;

    if(true){
        let m = 30;

            if(true){
                let m = 40;

            console.log(m);
            }

    console.log(m);
    }
console.log(m);
}
escopoAninhado();
console.log(m);

// 5 - arrow function
const testeArrow = () => {
    console.log(`Esta é uma arrow function`);
}

testeArrow();

const parOuImpar = (n) => {
    if (n % 2 === 0){
        console.log("Par")
        return;
    }
    console.log("Impar");
};

parOuImpar(5)
parOuImpar(10)

// 6 - mais sobre arrow function
const raizQuadrada = (x) => {
    return x * x;
};

console.log(raizQuadrada(3));

const raizQuadrada2 = (x) => x * x

console.log(raizQuadrada2(5));
console.log(raizQuadrada2(12));

const helloWorld = () => console.log("Hello World");
helloWorld();

// 7 - paramentro opcional

const multiplication = function(m,n){
    if(n=== undefined){
        return m * 2
    } else {
        return m * n;
    }
};
console.log(multiplication(5));
console.log(multiplication(2,4));

const greeting = (name) =>{
    if(!name){
        console.log("Olá!");
        return;
    }
    console.log(`Olá ${name}!`);
};

greeting();
greeting("Pedro");

// 8 - valor defaut

const customGreeting = (nome, greet = "Olá") => {
    return `${greet}, ${nome}!`;
};

console.log(customGreeting("Pedro"));
console.log(customGreeting("João", "Bom dia"));

const repeatText = (text, repeat = 2) =>{
    for(let i = 0; i < repeat; i++){
        console.log(text);
    }
};
repeatText("testando");
repeatText("Agora repete 5 vezes", 5);

// 9 - closure
function someFunction(){
    let txt = "Alguma coisa"

    function display(){
        console.log(txt)
    }
    display()
}
someFunction();