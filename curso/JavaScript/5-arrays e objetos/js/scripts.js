// 1 - Arrays
const lista = [1, 2, 3, 4, 5]
console.log(lista);
console.log(typeof lista);

const itens = ["Pedro", true, 2, 4.12,[]];
console.log(itens);
console.log(typeof itens);

// 2 - Mais sobre arrays
const arr = ["primeiro item", "segundo item","terceiro item","quarto item"]
console.log(arr[2]);

// 3 - propriedades
const number = [5, 3, 7]
console.log(number.length);
console.log(number["length"]);

const myName = "Pedro";
console.log(myName.length);

// 4 - métodos
const otherNumbers = [1, 2, 3];
const allNumbers = number.concat(otherNumbers);
console.log(allNumbers);

const text = "Algum texto";
console.log(text.toUpperCase());
console.log(typeof text.toUpperCase);
console.log(text.indexOf("g"));

// 5 - object literals
const person = {
    name: "Pedro", 
    age: 31,
    job: "Programador"
};
console.log(person);
console.log(person.name);
console.log(person.name.length);
console.log(typeof person);

// 6 - criando e deletando propriedades
const car = {
    engine: 1.0,
    brand: "VW",
    model: "Nivus",
    km: 20000
};
console.log(car);

car.doors = (4);
console.log(car);

delete car.km;
console.log(car);

// 7 - mais sobre objetos
const obj = {
    a: "teste", 
    b: true,
};
console.log(obj instanceof Object);

const obj2 = {
    c: []
}
Object.assign(obj2, obj);
console.log(obj2);
console.log(obj);

// 8 - conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));

// 9 - Mutação
const a={
    name: "Pedro",
};

const b = a;
console.log(a);
console.log(b);

console.log(a===b);

a.age=31;
console.log(b);

// 10 - Loops em arrays
const users = ["Matheus", "Joao", "Pedro", "Miguel"]

for (let i = 0; i < users.length; i++){
    console.log(`Listando o usuário: ${users[i]}`);
}

// 11 - push e pop
const array = ["a", "b", "c"];
array.push("d");
console.log(array);
console.log(array.lenght);

// 12 - shift e unshift
const letters = ["a", "b", "c"]
const letter = letters.shift( );
console.log(letter);
console.log(letters);

letters.unshift("p", "q", "e");
letters.unshift("z");

console.log(letters);

// 13 - indexOf e LastIndexOf
const myElements = ["Morango", "maça", "Abacate"];
console.log(myElements.indexOf("Maça"));
console.log(myElements[1]);

// 14- Slice
const testSlice = ["a", "b", "c", "d", "e", "f"]
const subArray = testSlice.slice(2,4);

console.log(subArray);
console.log(testSlice);
 
// 15 - forEach
const nums = ["1", "2", "3", "4", "5"] ;
nums.forEach ((numero) =>{
    console.log(`O número é ${numero}`);
});

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "JavaScript"},
    {title: "Terceiro post", category: "Python"}
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

// 16 -  includes
const brands = ["BMW", "VW", "Fiat"]
console.log(brands.includes("Fiat"))
console.log(brands.includes("Renaut"))

if(brands.includes("BMW")){
    console.log("Há carros da marca BMW!");
}
if(brands.includes("VW")){
    console.log("Há carros da marca VW!");
}

// 17 - reverse
const reverseTest = [1, 2, 3, 4, 5]

reverseTest.reverse();
console.log(reverseTest);

// 18 - trim
const trimTest = "   Testando \n   ";

console.log(trimTest);
console.log(trimTest.trim());

console.log(trimTest.length)
console.log(trimTest.trim().trim);

// 19 - padStart
const testePadStart = "1";

const newNumber = testePadStart.padStart(5, "0");

console.log(testePadStart);
console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");
console.log(testePadEnd);

// 20 - split

const frase = "O rato roeu a roupa do rei de Roma"

const arrayDaFrase = frase.split(" ");
console.log(arrayDaFrase);

// 21 - join
const fraseDenovo = arrayDaFrase.join(" ");
console.log(fraseDenovo);
const itensParaComprar = ["Mouse", "Teclado", "Monitor"];
const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}`;

console.log(fraseDeCompra);

// 22 - repeat
const palavra = "Testando ";
console.log(palavra.repeat(5));

// 23 - Rest Operator
const somaInfinita = (...args) => {
    let total = 0
    for(let i = 0; i < args.length; i++){
        total += args[i];
    }
    return total;
};
console.log(somaInfinita(1, 2, 3));
console.log(somaInfinita(1, 20, 34, 3424, 128812, 12723, 12, 23, 5));

// 24 - for...of
const somaInfinita2 = (...args) => {
    let total = 0
    for(num of args){
        total +=num
    }
    return total;
};
console.log(somaInfinita2(1, 2, 4))
console.log(somaInfinita(5, 6, 1, 23))

// 25 - Destructuring em objetos

const userDetails = {
    firstName: "Matheus",
    lastName: "Silva",
    job: "Programador"
}

const {firstName, lastName, job} = userDetails

console.log(firstName, lastName, job);
console.log(firstName, lastName, job);

// 26 -  destructuring com arrays
const myList = ["Aviao", "submarino", "carro"]

const[veiculoA, veiculoB, veiculoC] = myList;
console.log(veiculoA, veiculoB, veiculoC);

// 27 - JSON

const myJson = '{"name": "Pedro", "age": 31, "skills": ["PHP", "JavaScript", "Python"]}'; 
console.log(myJson)
