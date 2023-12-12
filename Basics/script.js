// var - veio inicialmente no javaScript

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);

var area;

// var pode ser utilizada antes da sua declaração
// javaScript primeiro carrega todas as declarações var pra depois executar o código

// let - a partir da versao de 2015
// sanar problemas nao previsiveis que "var" permitia que acontecesse

let forma = "retangulo";
let altura2 = 5;
let comprimento2 = 7;

let area2;

if(forma === "retangulo") 
    area2 = altura2 * comprimento2;
else
    area2 = (altura2 * comprimento2)/2

console.log(area2);

// importante: variaveis declaradas com let estao disponiveis apenas dentro do escopo onde foram criadas
// enquanto que variaveis declaradas com var ficam em um contexto global

// variaveis let e var - aulas anteriores

let b = 1;
b += 3;

console.log(b);

var x = 12;
x += b;

console.log(x);

// const - nao permite que o valor da variavel seja alterado apos declaracao

const forma2 = 'triangulo';

const altura3 = 5;
const comprimento3 = 7;

let area3;

if(forma2 === 'quadrado') 
{
    area3 = altura3 * comprimento3;
}
else 
{
    area3 = (altura3 * comprimento3) / 2;
}

console.log(area3)

// null
// undefined

let minhaVar;
let varNull = null;

console.log(typeof minhaVar);
console.log(typeof varNull); // null eh um objeto - erro na criacao

let num = 3;
let text = "vs code";

console.log(typeof num);
console.log(typeof text);
