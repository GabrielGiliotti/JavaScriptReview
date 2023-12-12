const livros = require("./livros");
const lowerValue = require("./cheaper");
const swap = require("./swap");

for(let atual = 0; atual < livros.length-1; atual++) {
    let menor = lowerValue(livros, atual);
    swap(livros, menor);
}

console.log(livros);