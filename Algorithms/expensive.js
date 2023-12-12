const livros = require("./livros");

let maisCaro = 0;

for (let atual = 0; atual < livros.length; atual++) {
    if (livros[atual].preco > livros[maisCaro].preco) {
        maisCaro = atual;
    }
}

console.log(`O livro mais caro é ${livros[maisCaro].titulo} e seu preco é ${livros[maisCaro].preco}`);