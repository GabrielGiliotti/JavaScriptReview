let input = null;
let input2;

console.log(input); // null
console.log(input2); // undefined

// Null é retornado em casos de atribuição errada 
// Undefined é quando nada foi atribuido
// funções que não apresentam "return" na verdade retornam undefined

console.log(null == undefined); // true
console.log(null === undefined); // false

// == verifica o valor, no caso null e undefined são um mesmo valor - nulo
// === verifica alem do valor, o tipo da variavel, logo null e undefined são tipos diferentes