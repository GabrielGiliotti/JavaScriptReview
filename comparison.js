const num = 5;
const text = "5";

// corversao implicita para string - 5 é igual a 5 
console.log(num == text);

// 5 é igual a 5 - porem os types sao diferentes
console.log(num === text);

// Boas praticas:
// 1 - utilizar 3 iguais
// 2 - fazer conversoes Explicitas, utilizando Number(), String(), etc

// Outros tipos de operadores

// ||: Operador “ou”, retorna true caso uma condição seja válida;
// &&: Operador “e”, retorna true somente se todas as condições forem válidas;
// != e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma 
// forma que == e === retornam true ou false.

// mais infos: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators

// Operador ternario : funciona como um if

let minAge = 17;
              // condition    // case true     // case false
let cliente = minAge === 18 ? "cliente apto" : "cliente nao apto";

console.log(cliente);

