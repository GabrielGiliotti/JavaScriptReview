
// ideal ser const para que o valor da variavel soma nao seja substituido no
// decorrer do codigo

// soma(3,4)  --> ReferenceErro

const soma = function (num1 = 0, num2 = 0) {
    return num1 + num2;
}

console.log(soma(1, 2));

// Expressoes de funcoes nao pode ser executadas antes de sua declaracao
// funcionam como variaveis

// Hoisting (levantar): quando o javaScript percorre o codigo (ocorre internamente) e sobe todas as
//                      functions e vars declaradas no codigo, permitindo a chamada antes das 
//                      declarações. Expression-funtions, const e let não apresentam esse comportamento

