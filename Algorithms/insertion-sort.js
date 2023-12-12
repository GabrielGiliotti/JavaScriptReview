const livros = require("./livros");

function insertionSort(arr) {
    for(let atual = 0; atual < arr.length; atual++) {
        let analise = atual;
        while(analise > 0 && arr[analise].preco < arr[analise-1].preco) {
            let itemAnalise = arr[analise];
            let itemAnterior = arr[analise-1];

            arr[analise] = itemAnterior;
            arr[analise-1] = itemAnalise;

            analise--;
        }
    }
    return arr;
}

console.log(insertionSort(livros));
