const books = require("./books");
const swap = require("./swap");

function insertionSort(arr) {
    for(let current = 0; current < arr.length; current++) {
        let analise = current;
        while(analise > 0 && arr[analise].preco < arr[analise-1].preco) {
            swap(arr, analise);
            analise--;
        }
    }
    return arr;
}

console.log(insertionSort(books));

// complexidade
// melhor caso: O(n) --> O array ja esta ordenado - nao entra no while para fazer o swap
// caso medio: O(n^2) --> Alguns itens fora de ordem - ordena os itens e realiza o swap
// pior caso: O(n^2) --> Array na ordem reversa - necessita ordenar todos os itens

// Aqui se uma certa quantidade de itens ja esta ordenada afeta o desempenho
