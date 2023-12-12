//const livros = require("./livros");

function lowerValue (arr, ini) {

    let maisBarato = ini;

    for(let atual = ini; atual < arr.length; atual++) {
        if(arr[atual].preco < arr[maisBarato].preco) {
            maisBarato = atual;
        } 
    }

    return maisBarato;
} 

module.exports = lowerValue;

//console.log(`O livro mais barato é ${livros[maisBarato].titulo} e seu preco é ${livros[maisBarato].preco}`);