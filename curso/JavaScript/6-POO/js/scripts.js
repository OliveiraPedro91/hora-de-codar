// 1 - Métodos
//const animal = {
 //   nome: "bob"
 //   latir: function(){
 //       console.log("au au")
 //   }
//};

//console.log(animal.nome);
//animal.latir();

// 2 - Aprofundando em métodos
const pessoa = {
    nome: "Pedro",
    getNome: function(){
        return this.nome;
    },
    setNome: function(novoNome){
        this.nome = novoNome;
    },
};
console.log(pessoa.nome);
console.log(pessoa.getNome());
pessoa.setNome("Joaquin");
console.log(pessoa.getNome());

// 3 - prototype
const text = "asd"

console.log(Object.getPrototypeOf(text));

// 4 - Mais sobre prototypes
const myObject ={
    a: "b"
};

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject)=== Object.prototype);

const mySecondObject = Object.create(myObject);
console.log(mySecondObject);
console.log(mySecondObject.a);
console.log(Object.getPrototypeOf(mySecondObject)===myObject);

// 
