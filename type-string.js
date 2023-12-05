const text1 = "Hello World";
const text2 = 'Hello World 2';

const citacao = 'tal pessoa disse "Ola"';

console.log(citacao);

const citacao2 = "tal pessoa disse 'Ola' 2";

console.log(citacao2);

// Concatenacao

console.log(text1 + " " + text2);

// template string ou template literal

const a = 2;
const b = 3;

const literal = `a soma de a + b é ${a + b}`;

console.log(literal);

// utilizacao UTF (Unicode Transformation Format)

// java script usa por padrao UTF-16

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// comparacao de texto e tipo

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === input); // false
console.log(cidade === inputMinusculo); // true

console.log(cidade.length);

// Camel case - variaveis e funcoes
// inicio minuscula e proxima palavra maiuscula

let textStyle = "#000000"; 
var userName = "Name";

// Snake Case 
// todas as letras minusculas e espaco com _

let my_time = 90;
var my_money = .42;

// kebab case
// guarda-chuva , quero-quero
// Não pode ser usada no javaScript

// PascalCase
// Similar CamelCase, porem iniciando com maiuscula - Utilizado como padrão no .NET

let MultipleChoices = 7;
var MyHero = "Foo Fighters";
