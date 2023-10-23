// 1 - Adicionando eventos
const btn = document.querySelector("#my-button")
btn.addEventListener("click", function(){
    console.log("Clicou aqui!")
})

// 2 - removendo elemento
const secondBtn = document.querySelector("#btn")
function imprimirMensagem(){
    console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);
    
const thirdBtn = document.querySelector("#other-btn")
thirdBtn.addEventListener("click", () => {
    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem)
})

// 3 - Argumento do evento
// const myTitle = document.querySelector("#my-title")
// myTitle.addEventListener("click", (event) => {
//     console.log(event)
// })

//4 - propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsiderContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1")
})

btnInsiderContainer.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("Evento 2")
})

// 5 - removendo evento padrão
const a = document.querySelector("a")
a.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("Não alterou a página")
})

// 6 - Eventos de tecla
document.addEventListener("keyup", (e) =>{
    console.log(`Soltou a tecla ${e.key}`);
});

document.addEventListener("keyup", (e) =>{
    console.log(`Soltou a tecla ${e.key}`);
});

