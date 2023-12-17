const books = require("./books");
const lowerValue = require("./cheaper");
const swap = require("./swap");

for(let current = 0; current < books.length-1; current++) {
    let smaller = lowerValue(books, current);
    swap(books, smaller);
}

console.log(books);

// complexidade
// melhor caso: O(n^2) --> Array ja ordenado - percorre todos os dados ja ordenados e verifica a condicao
// caso medio: O(n^2) --> Alguns itens estao desordenados - realiza a ordenacao
// pior caso: O(n^2) --> Todos os itens desordenados - realiza a ordenacao

// Aqui nao importa se o array esta ordenado ou nao, sempre sera a mesma complexidade