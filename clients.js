const clientList = require("./clients.json");

const findObject = (list, key, value) => list.find(o => o[key].includes(value));

console.log(findObject(clientList, "nome", "Kirby"));
console.log(findObject(clientList, "telefone", "90945673092"));


const filterObjects = (list) => list.filter(item => item.endereco.apartamento && 
                                                   !item.endereco.hasOwnProperty("complemento"));

console.log("Objetos com complemento incompleto:");
console.log(filterObjects(clientList));

console.log("Objetos ordenados por nome: ");

const sortObjects = (list, property) => {
    let result = list.sort((a,b) => {
        if(a[property] < b[property]) return -1;
        else if(a[property] > b[property]) return 1;
        else return 0;
    });
    return result;
}

console.log(sortObjects(clientList, "nome"));