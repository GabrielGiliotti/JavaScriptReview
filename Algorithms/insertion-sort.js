const livros = require("./livros");
const swap = require("./swap");

function insertionSort(arr) {
    for(let atual = 0; atual < arr.length; atual++) {
        let analise = atual;
        while(analise > 0 && arr[analise].preco < arr[analise-1].preco) {
            swap(arr, analise);
            analise--;
        }
    }
    return arr;
}

console.log(insertionSort(livros));
