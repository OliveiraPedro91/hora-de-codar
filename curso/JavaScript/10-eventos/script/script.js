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
const myTitle = document.querySelector("#my-title")
myTitle.addEventListener("click", (event) => {
    console.log(event)
})

//4 - 

