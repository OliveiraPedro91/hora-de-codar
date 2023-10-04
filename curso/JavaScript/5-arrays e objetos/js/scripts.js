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
