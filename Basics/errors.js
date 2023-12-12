// const variable; // erro de inicializacao na constante : faltou atribuir um valor qualquer
                   // :1 indicado no terminal indica a linha em que o erro ocorre 
                   // Erro na sintaxe
                   
//const variable = 0;  // erro: parenteses faltante apos lista de argumentos 
//console.log(variable // console.log() tem como parametro um lista de argumentos
                       // Erro de sintaxe

// console.log(varNaoDclarada); // variavel nao foi definida: faltando declarar a variavel utilizada
                                // Erro de referencia
                            
// at Object.<anonymous> (C:\Users\gabri\Desktop\JavaScriptReview\errors.js:7:13)
// indica o path do arquivo que contem o erro (errors.js), a linha (7) e o caracter (13)

// at Module._compile (node:internal/modules/cjs/loader:1376:14)
// at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
// at Module.load (node:internal/modules/cjs/loader:1207:32)
// at Module._load (node:internal/modules/cjs/loader:1023:12)
// at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
// at node:internal/main/run_main_module:28:49

// os dados restantes sao a StackTrace: outros arquivos internos que geraram erro devido
// ao erro inicialmente declarado/cometido 



// Tipos de erro no JavaScript

// RangeError: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. 
// Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, 
// mas recebe -1.

// ReferenceError: Normalmente ocorre quando o código tenta acessar algo que não existe, como uma 
// variável que não foi definida; muitas vezes é causado por erros de digitação ou confusão nos nomes 
// utilizados, mas também pode indicar um erro no programa.

// SyntaxError: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue 
// executá-lo. Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, por 
// exemplo, operadores ou sinais gráficos com elementos a menos, como esquecer de fechar chaves ou 
// colchetes.

// TypeError: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string 
// de texto, mas recebeu outro, como um número, booleano ou null.