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