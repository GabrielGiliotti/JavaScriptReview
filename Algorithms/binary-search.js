const listaLivros = require("./books");
const quickSort = require("./quick-sort");

const sortedList = quickSort(listaLivros, 0, listaLivros.length-1);

function binarySearch(arr, from, to, value) {
    const half = Math.floor((from + to)/2);
    const current = arr[half];

    //console.log(half, from, to);

    if(from >= to && current.preco !== value) return -1;

    if(value === current.preco) {
        return half;
    }

    if(value < current.preco) {
        return binarySearch(arr, from, half-1, value);
    }

    if(value > current.preco) {
        return binarySearch(arr, half+1, to, value);
    }
}

console.log("value 16 index: ", binarySearch(sortedList, 0, sortedList.length, 16));
console.log("value 20 index: ", binarySearch(sortedList, 0, sortedList.length, 20));
console.log("value 22 index: ", binarySearch(sortedList, 0, sortedList.length, 22));
console.log("value 27 index: ", binarySearch(sortedList, 0, sortedList.length, 27));
console.log("value 35 index: ", binarySearch(sortedList, 0, sortedList.length, 35));
console.log("value 40 index: ", binarySearch(sortedList, 0, sortedList.length, 40));
//console.log("value 60 index: ", binarySearch(sortedList, 0, sortedList.length, 60));
