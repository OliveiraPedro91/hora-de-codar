// seleção de elementos

const multiplicacao = document.querySelector("#formulario-input")
const numero = document.querySelector("#numero")
let multiplicador = 10;

// funçoes

const criarTabela = (numero, multiplicador) => {
    resultado.innerHTML = "";
    for (i = 1; i <= multiplicador; i++){
        const total = numero * i;

        const tabela = `
            <div class="linha">
                <div class="operacao">${numero} x ${i}</div>
                <div class="resultado"> ${total} </div>
            </div>
        `;
    }


}