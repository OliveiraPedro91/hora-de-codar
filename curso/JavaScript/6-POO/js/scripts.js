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

// 5 - classes básicas
const cachorro = {
    raca: null,
    patas: 4
}

const pastorAlemao= Object.create(cachorro)
pastorAlemao.raca = "Pastor Alemão";
console.log(pastorAlemao);
console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);
bulldog.raca = "Bulldog";
console.log(bulldog);

// 6 - função como classe - função construtora

function criarCachorro(nome, raca){
    const cachorro = Object.create({})
    cachorro.nome = nome
    cachorro.raca = raca
    return cachorro;
}

const bob = criarCachorro("Bob", "Vira lata");
console.log(bob);
const jack = criarCachorro("Jack", "Poodle");
console.log(jack);

// 7 - funções como classe

function Cachorro(nome, raca){
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("Ozzy", "Husky")
console.log(husky);

// 8 - métodos na funcao construtora
//cachorro.prototype.uivar = function(){
//    console.log("Auuuuuuu")
//};
//console.log(Cachorro);
//husky.uivar();

// 9 - classes es6
class CachorroClasse{
    constructor(nome, raca){
        this.nome = nome
        this.raca = raca
    }
}
const jeff = new CachorroClasse("Jeff", "Labrador")
console.log(jeff);

// 10 - mais sobre classes
class Caminhao{
    constructor(eixos, cor){
        this.eixos = eixos;
        this.cor = cor;
    }
    descreverCaminhao(){
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
    }
}

const scania = new Caminhao(6, "Vermelha");
console.log(scania);
scania.descreverCaminhao();
