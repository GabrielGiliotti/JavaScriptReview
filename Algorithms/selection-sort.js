const livros = require("./livros");
const lowerValue = require("./cheaper");
const swap = require("./swap");

for(let atual = 0; atual < livros.length-1; atual++) {
    let menor = lowerValue(livros, atual);
    swap(livros, menor);
}

console.log(livros);

// complexidade
// melhor caso: O(n^2) --> Array ja ordenado - percorre todos os dados ja ordenados e verifica a condicao
// caso medio: O(n^2) --> Alguns itens estao desordenados - realiza a ordenacao
// pior caso: O(n^2) --> Todos os itens desordenados - realiza a ordenacao

// Aqui nao importa se o array esta ordenado ou nao, sempre sera a mesma complexidade