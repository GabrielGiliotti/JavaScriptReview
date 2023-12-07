function soma(a = 0, b = 0) {
    return a + b;
}

console.log(soma(2,3));
console.log(soma(soma(soma(3,4), 2), 1));

function multiplicate(num1 = 1, num2 = 1) {
    return num1 * num2
}

console.log(multiplicate(soma(2,3), soma(4,5)));

console.log(multiplicate(soma(2,3))); // NaN --> multiplication with undefined if a default value is 
                                      //         not defined


function concat(nome, idade) {
    return `My name is ${nome} and I'm ${idade} years old`
}

console.log(concat("Jack", 27));

// Boa pratica - nao criar muitos parametros - evitar muitos argumentos em functions
// parâmetros - momento em que a função é definida
// argumentos - dados que utilizamos para executar a função 

function comParametro(param) {
    console.log(param)
}
comParametro() // retorna undefined