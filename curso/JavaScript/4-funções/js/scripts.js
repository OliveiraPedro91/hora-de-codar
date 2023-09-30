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