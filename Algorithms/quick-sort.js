const listaLivros = require("./livros");
const replace = require("./pivot");


function partition(arr, left, right) {
    let pivot = arr[Math.floor((left + right)/2)];
    let atualLeft = left;
    let atualRight = right;

    while(atualLeft <= atualRight) {
        while(arr[atualLeft].preco < pivot.preco) {
            atualLeft++;
        }

        while(arr[atualRight].preco > pivot.preco){
            atualRight--;
        }

        if(atualLeft <= atualRight) {
            replace(arr, atualLeft, atualRight);
            atualLeft++;
            atualRight--;
        }
    }

    return atualLeft;
}

function quickSort(arr, left, right) {
    //console.log("Array: ", arr);
    //console.log("Left, Right: ", left, right);

    if(arr.length > 1) {
        let atualIndex = partition(arr, left, right);

        if(left < atualIndex-1) {
            quickSort(arr, left, atualIndex-1);
        }

        if(atualIndex < right) {
            quickSort(arr, atualIndex, right);
        }
    }

    return arr;
}

//console.log(quickSort(listaLivros, 0, listaLivros.length-1));

module.exports = quickSort;