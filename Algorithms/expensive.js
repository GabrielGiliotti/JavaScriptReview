const books = require("./books");

let expensive = 0;

for (let current = 0; current < books.length; current++) {
    if (books[current].preco > books[expensive].preco) {
        expensive = current;
    }
}

console.log(`O livro mais caro é ${books[expensive].titulo} e seu preco é ${books[expensive].preco}`);