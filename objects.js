const person = {
    name: "Gustavo",
    age: 27,
    doc: "123.456.789-10",
    email: "gustaf@gmail.com"
}

console.log(`Hello, my name is ${person.name} and I'm ${person.age} years old.`);
console.log(`My doc starts with ${person.doc.substring(0,3)}... and my email is ${person.email}`);

// outra forma de acessar properties de um objeto
// utilizado em casos onde sabemos as chaves mas nao conhecemos os objetos

const person2 = {
    name: "Caren",
    age: 25,
    doc: "456.378.789-12",
    email: "caren@gmail.com"
}

const keys = ["name", "age", "doc", "email", "height"];

keys.forEach((key) => {
    console.log(`The key is ${key} and your value is ${person2[key]}`);
});

const person3 = {
    name: "Cage",
    job: "Software Engineer"
}

person3.phone = "+5519912345678";
person3.name = "Cage Smith";

console.log(person3);

// eh possivel adicionar e reatribuir campos de um objeto mesmo sendo uma const
// Continua valendo que a reatribuicao do objeto todo NAO pode ser feita (const)

// Para removermos um atributo do objeto podemos utilizar o delete que retorna true ou false
// para a execucao da delecao

const deletedProp1 = delete person3.job;
const deletedProp2 = delete person3["phone"];

// se tentarmos remover um atributo que nao existe, o delete retorna true 
// ou seja o campo ja nao existia antes, entao sua remocao continua sendo verdade

const deletedProp3 = delete person3.age; // retorna true

console.log(deletedProp1, deletedProp2, deletedProp3);
console.log(person3);
