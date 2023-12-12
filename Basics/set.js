const nameList = ["Isabela", "Isabela", "Julia", "Roger", "Roger", "Roger", "Derick"];

// Set nao permite repeticao de itens

const newList = [...new Set(nameList)];

console.log(newList);

// Outra forma de remover itens duplicados
// indexOf retorna o indice da Primeira ocorrencia, logo a expressao impede duplicacoes
const newArray = nameList.filter((n,i) => nameList.indexOf(n) === i);
console.log(newArray);