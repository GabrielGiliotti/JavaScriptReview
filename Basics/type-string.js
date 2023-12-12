const text1 = "Hello World";
const text2 = 'Hello World 2';

const citacao = 'tal pessoa disse "Ola"';

console.log(citacao);

const citacao2 = "tal pessoa disse 'Ola' 2";

console.log(citacao2);

// Concatenacao

console.log(text1 + " " + text2);

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

// template string ou template literal

const a = 2;
const b = 3;

const literal = `a soma de a + b é ${a + b}`;

console.log(literal);

const client = "John";
const clientAge = 21;
const beer = "beer";
const juice = "juice";
const output = `${client} said: "Please, give me some ${clientAge >= 18 ? beer : juice}"`;

console.log(output);

// algumas funcoes nativas uteis

// length
const string1 = "My String String";
console.log(string1.length);

// charAt
console.log(string1.charAt(7));

// indexOf - retorna a primeira ocorrencia
console.log(string1.indexOf("S"));

// toUpperCase e toLowerCase
console.log(string1.toUpperCase());
console.log(string1.toLowerCase());

// substring - end nao é incluido no resultado - sempre colocar um indice para frente 
console.log(string1.substring(10, 13));

// slice - mais utilizada em arrays
//         end nao é incluido no resultado - sempre colocar um indice para frente 
console.log(string1.slice(0,9));

// replace - substitui a primeira ocorrencia apenas
console.log(string1.replace("String", "hero"));

// concat
console.log(string1.replace("String ", "").concat(" concat"));

// split
const string2 = "NodeJs;.Net Core;Angular;ReactJs;C#;Docker;Git"
console.log(string2.split(";"));

// trim
const string3 = "  My Hero - Foo Fighters  ";
console.log(string3.trim());

// variacoes de trim
console.log(string3.trimEnd());
console.log(string3.trimStart());