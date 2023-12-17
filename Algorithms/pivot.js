const listaLivros = require("./livros");

function findMinors(arr, pivot) {
    let menores = 0;

    for(let atual = 0; atual < arr.length; atual++) {
        let itemAtual = arr[atual];

        if(itemAtual.preco < pivot.preco) {
            menores++;
        }
    }
    replace(arr, arr.indexOf(pivot), menores);

    return arr;
}

function replace(arr, from, to) {
    const elem1 = arr[from];
    const elem2 = arr[to];

    arr[from] = elem2;
    arr[to] = elem1;
}

function pivotDivide(arr) {
    let pivot = arr[Math.floor(arr.length/2)];
    findMinors(arr, pivot);
    let valoresMenores = 0;

    for(let analisando = 0; analisando < arr.length; analisando++) {
        let atual = arr[analisando];

        if(atual.preco <= pivot.preco && atual !== pivot) {
            replace(arr, analisando, valoresMenores);
            valoresMenores++;
        }
    }

    return arr;
}

//console.log(pivotDivide(listaLivros));

module.exports = replace;