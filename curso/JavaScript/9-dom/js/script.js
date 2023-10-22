// 1 - Movendo-se pelo DOM
console.log(document.body);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);

// 2 - selecionando por tag
const listItens = document.getElementsByTagName("li")

console.log(listItens)

// 3 - selecionando por Id
const title = document.getElementById ("title")
console.log(title)

// 4 - selecionando por Class
const products = document.getElementsByClassName("Produtc")
console.log(products)

// 5 - selecionando os elementos por CSS

const productsQuery = document.querySelectorAll(".product")
console.log(productsQuery)

const mainContainer = document.querySelector("#main-container")
console.log(mainContainer)
