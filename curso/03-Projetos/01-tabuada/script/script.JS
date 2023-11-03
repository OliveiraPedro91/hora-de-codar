// seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form")// cria uma variavel para a div ID Multiplicator-form
const numberInput = document.querySelector("#number") //Cria uma variavel para a div ID number
const multiplicationInput = document.querySelector("#multiplicator") // Cria uma variavel para a div ID multiplicator

const multiplicationTable = document.querySelector("#multiplication-operation") // cria a variavel para a tabela a partir da ID Multiplication-operation

// funções
const criateTable = (number ,multiplicatorNumber) => { // Função que cria a tabela dos número selecionado e o multiplicador.
    multiplicationTable.innerHTML = ""; // Função para zerar o código html dento da div

    for(i = 1; i <= multiplicatorNumber; i++){
        const result = number * i;
        console.log(result);
    }
};

// eventos
multiplicationForm.addEventListener("submit", (e) => { //Criação dos eventos abaixo com a Arrow Function
   
    e.preventDefault() // Função para o botão submit não recarregar a página.
    
    const multiplicationNumber = +numberInput.value; // criação da variavel que vai receber a informação da caixa de input de número da multiplicação.
    const multiplicatorNumber = +multiplicationInput.value; //criação da variavel que vai receber a informação da caixa de imput de número do multiplicador, a segunda caixa.

    if(!multiplicationNumber || !multiplicatorNumber) return;// Essa condição é para não retornar nada caso uma das duas variaveis não recebam número nenhum.

    //console.log(multiplicationNumber, multiplicatorNumber) // mostra no console o valor das duas váriaveis recém criadas para as duas imputs dos dois números da tabuada.
})