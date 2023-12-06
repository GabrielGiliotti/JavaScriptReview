// conversao explicita
const num1 = 456;
const num2 = "456";

// String()
// Number()  --> nao pode conter letras

console.log(num1 + Number(num2));

console.log(num1 + Number("789a")); // --> NaM

// conversao implicita


console.log(num1 === num2);
console.log(num1 == num2); // converteu o int 456 em string e realizou a comparacao (implicitamente)

console.log(num1 + num2); // converte implicitamente e concatena as strings

