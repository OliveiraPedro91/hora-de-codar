// 1 - strict
"use strict";

//opa = "teste";
const opa = "teste";

// 2 - consoloe.log
let a = 1
let b = 2
    if(a==1){
        a=b+2;
    }
console.log(a);

for(let i = 0; i < b; i++){
    a = a + 2;
    console.log(a);
}

// 3 - debugger
//debugger;
// 4 - tratamento de dados
function checkNumber(n){
    const result = Number(n);

    if (Number.isNaN(result)){
        console.log("Valor Incorreto!");
        return;
    }

    console.log("Valor correto!");
    return result;
}
checkNumber(5);
checkNumber("10");
checkNumber({});
checkNumber("teste");

// 5 - exceptions
let x = 10

//if (x !=11){
    //throw new Error("O valor de x não pode ser diferente de 11!");
//}
// 6 - Try catch
try {
    const soma = x + y
}catch(error){
    console.log(`Erro no programa: ${error}`)
}
