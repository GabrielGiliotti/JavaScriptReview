const books = require("./books");

let cheaper = lowerValue(books, 0);

function lowerValue (arr, ini) {

    let cheaper = ini;

    for(let current = ini; current < arr.length; current++) {
        if(arr[current].preco < arr[cheaper].preco) {
            cheaper = current;
        } 
    }

    return cheaper;
} 

console.log(`O livro mais barato é ${books[cheaper].titulo} e seu preco é ${books[cheaper].preco}`);

module.exports = lowerValue;