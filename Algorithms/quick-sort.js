const bookList = require("./books");
const replace = require("./pivot");


function partition(arr, left, right) {
    let pivot = arr[Math.floor((left + right)/2)];
    let currentLeft = left;
    let currentRight = right;

    while(currentLeft <= currentRight) {
        while(arr[currentLeft].preco < pivot.preco) {
            currentLeft++;
        }

        while(arr[currentRight].preco > pivot.preco){
            currentRight--;
        }

        if(currentLeft <= currentRight) {
            replace(arr, currentLeft, currentRight);
            currentLeft++;
            currentRight--;
        }
    }

    return currentLeft;
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

console.log(quickSort(bookList, 0, bookList.length-1));

module.exports = quickSort;