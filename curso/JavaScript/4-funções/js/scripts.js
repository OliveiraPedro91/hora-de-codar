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