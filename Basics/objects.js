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

const client = {
    name: "Jack",
    age: 31,
    email: "jack@hotmail.com",
    phones: ["+5519912345678", "+5519987654321"],
    balance: 200,
    paymentFunc: function (value) {
        if(value > this.balance) {
            console.log("Insufficiente founds !");
        } 
        else {
            this.balance -= value;
            console.log(`Payment made. New balance: ${this.balance}`); 
        }
    }
}

console.log(client.phones);

// podemos aninhar objetos 

client.addresses = [{
    place: "Av Joseph Climber, 167",
    city: "Araras",
    state: "São Paulo",
    zipCode: "13900-000",
    country: "Brasil"    
}]

console.log(client);
console.log(client.addresses[0].city);
console.log(client["addresses"][0]["state"]);

client.addresses.push({
    place: "Av Joseph Ladder, 171",
    city: "Ouro Branco",
    state: "Minas Gerais",
    zipCode: "13910-000",
    country: "Brasil"
});

console.log(client.addresses.filter(x => x.state == "Minas Gerais"));

client.paymentFunc(250);
client.paymentFunc(110);

// objeto literal - chave valor dentro de {}
// realizar uma atribuicao a um objeto literal cria apenas uma nova referencia a 
// uma mesma posicao de memoria

// Podemos utilizar Object.create() para criar um objeto diferente (outra posicao de memoria)
// a partir de um objeto ja cria

const client2 = Object.create(client);

client2.name = "Jack Sparrow";
client2.paymentFunc(20);

console.log(client.name);
console.log(client2.name);

// para a novar versao do node, objetos iguais nao sao printados duas vezes
// para verificar o objeto copia devemos acessar campo a campo

const client3 = {
    name: "Joe",
    age: 30,
    email: "joe@hotmail.com",
    phones: ["+5519912345678", "+5519987654321"],
    balance: 500,
    paymentFunc: function (value) {
        if(value > this.balance) {
            console.log("Insufficiente founds !");
        } 
        else {
            this.balance -= value;
            console.log(`Payment made. New balance: ${this.balance}`); 
        }
    }
}

client3.addresses = [{
    place: "Av Joseph Washington, 190",
    city: "Rio Claro",
    state: "São Paulo",
    zipCode: "13900-000",
    country: "Brasil"    
}]

for (let key in client3) 
{
    let type = typeof client3[key];

    if(type !== 'object' && type !== 'function')
        console.log(client3[key]);
}


const objectKeys = Object.keys(client3);
const objectValues = Object.values(client3);

if(!objectKeys.includes("addresses")) {
    console.error("É necessario ter um endereco cadastrado");
}

const client4 = {
    name: "Satoru",
    age: 32,
    email: "satoru@hotmail.com",
    phones: ["+5519912345678", "+5519987654321"],
    balance: 500,
    addresses: [{
        place: "Av Luiz Washington, 200",
        city: "Rio Pardo",
        state: "São Paulo",
        zipCode: "13900-000",
        country: "Brasil"    
    }]
}

const callClient = (n1, n2) => {
    console.log(`Try 1: Calling to ${n1}`);
    console.log(`Try 2: Calling to ${n2}`);
}

// podemos utilizar o spread operator para passar valores de um array como parametro
callClient(...client4.phones);

// podemos utilizar o spread operator tambem para copiar campos de um objeto para outro
const order = {
    recipient: client4.name,
    ...client4.addresses[0]
}

console.log(order);

// caso o spread operator seja usada em objetos que tenham chaves/propriedades com o mesmo nome, o 
// JavaScript vai sobrescrever o valor destas propriedades à medida que encontra novos valores com o 
// mesmo nome de chave

// pegando atribuindo parte de um array para uma variavel generica com spread operator
const [num1, num2, ...valores] = [1, 2, 3, 4, 5];

console.log(num1, num2, valores);

// podemos atribuir campos de um objeto a atributos quando esses aparesentam o mesmo nome/chave
// Destructuring !!!

const { name, age } = client4;
console.log(name, age); // printa o valor de name dentro do objeto client4

// podemos tbm utilizar essa estrutura em funcoes

const logg = ({ name, age }) => console.log(name, age);
logg(client4);