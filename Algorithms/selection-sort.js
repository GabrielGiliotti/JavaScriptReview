const livros = require("./livros");
const lowerValue = require("./cheaper");

for(let atual = 0; atual < livros.length-1; atual++) {
    let menor = lowerValue(livros, atual);
    
    let livroAtual = livros[atual];
    let menorPreco = livros[menor];

    livros[atual] = menorPreco;
    livros[menor] = livroAtual;
}

console.log(livros);