// arrow function soma
const soma = (num1, num2) => {
    return num1 + num2;
}

const multiplicaSomaResult = (num, v1, v2) => {
    return num * soma(v1,v2);
} 

const exibeResult = (n1, n2, n3) => console.log(multiplicaSomaResult(n1,n2,n3));

// exibeResult eh a High-Order-Function dentre as 3 funcoes definidas
// multiplicaSomaResult tem ordem mais alta que function soma
// High-Order-Function permite a composicao de funcoes - previne repeticao de codigo

exibeResult(1,2,3);