// indices comecam em 0

const array = [10, 6.5, 8, 7.5]

array.push(5);

// apenas RE-ATRIBUICAO eh impedida de ser feita em constantes
// no caso, apesar do array ser const, eh possivel edita-lo utilizando metodo do proprio array (push) 

let media = 0;
array.forEach(nota => {
    media += nota; 
})

console.log(media/array.length);

array.pop(); // remove o ultimo elemento (de maior indice) de um array

media = 0;
array.forEach(nota => {
    media += nota; 
})

console.log(media/array.length);

const array1 = [5,6,7];
const array2 = [8,9,0];

const array3 = array1.concat(array2);

console.log(array3)

array3.filter((n, i) => {
    if(n != 0 && n % 3 == 0) console.log(i);
});

const array4 = [{name:"palmeiras", pos: 1}, 
                {name:"corinthians", pos:2}, 
                {name:"santos", pos:3}, 
                {name:"são paulo", pos:4}];

let obj = array4.find(n => {
    if(n.pos == 1) return n;
});

console.log(obj.name);
console.log(array4.findIndex(o => o.name == "santos"));

// lastIndexOf nao funcionou para objetos - apenas tipos primitivos 
const array5 = [1,2,3,4,5,4,3,2,1]
console.log(array5.lastIndexOf(2));

array5.shift()
console.log(array5);

array5.unshift(7,8)

console.log(array5)

const array6 = [1,2,3,4]
console.log(array6.reduce((acc, cur) => acc += cur, 1));

console.log(array6.reverse());

// para ordenar o array de forma crescente - o resultado da subtracao determina para onde o valor
// atual sera movido (esta relacionado ao valor UNICODE de cada item do array)
const array7 = [11,3,2,5,12]
console.log(array7.sort((a,b) => a - b));

const months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 0, 'May');
// Insert element at index 4
console.log(months);
// output: Array ["Jan", "Feb", "March", "April", "May"]


const array8 = [0,1,2,3,4,5,6,7,8,9];

const half1 = array8.slice(0, array8.length/2);
const half2 = array8.slice(array8.length/2);

console.log(half1, half2);

const alunos = ["Joao", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// remover Ana e Caio e inserir Rodrigo

// alunos.push("Rodrigo") 
alunos.splice(1,2, "Rodrigo");

console.log(alunos);

const salaJS = ["Clara", "Isabela", "Gabi"]
const salaPython = ["Bruna", "Manu", "Julia"]

const salasUnificadas = salaJS.concat(salaPython);
console.log(salasUnificadas);

// Um pouco mais avancado
const alunos2 = ["Carlos", "Larissa", "Daniela"];
const medias2 = [8.8, 7.5, 9.6];

const alunosMedias = alunos2.map(function (a,i) {
    return {nome: a, media: medias2[i]};
});

alunosMedias.forEach(a => console.log(a.nome, a.media))

// matriz
const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

const funcionarios = [nomes, idades, faculdade];

console.log(`aluno: ${funcionarios[0][0]}, idade: ${funcionarios[1][0]}, fazendo faculdade: ${funcionarios[2][0] ? "Sim" : "Não"}`)
console.log(`aluno: ${funcionarios[0][2]}, idade: ${funcionarios[1][2]}, fazendo faculdade: ${funcionarios[2][2] ? "Sim" : "Não"}`)
