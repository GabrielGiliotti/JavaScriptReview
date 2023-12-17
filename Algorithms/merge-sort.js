const bookList = require("./books");

function sort(l1, l2) {
    let finalList = [];
    let posAtualL1 = 0;
    let posAtualL2 = 0;

    while(posAtualL1 < l1.length && posAtualL2 < l2.length) {
        let itemAtualL1 = l1[posAtualL1];
        let itemAtualL2 = l2[posAtualL2];

        if(itemAtualL1.preco < itemAtualL2.preco) {
            finalList.push(itemAtualL1);
            posAtualL1++;
        }
        else 
        {
            finalList.push(itemAtualL2);
            posAtualL2++;
        }
    }

    return finalList.concat(posAtualL1 < l1.length ? l1.slice(posAtualL1) : l2.slice(posAtualL2));
}

function mergeSort(arr, nivel = 0) {
    
    console.log(`Nivel: ${nivel}`);
    console.log(arr);

    if(arr.length > 1) {
        const half = Math.floor(arr.length / 2);
        const half1 = mergeSort(arr.slice(0, half), nivel+1);
        const half2 = mergeSort(arr.slice(half, arr.length), nivel+1);
        arr = sort(half1, half2);
    }

    return arr;
}

console.log(mergeSort(bookList));