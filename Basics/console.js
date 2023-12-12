// console: utilizado para apresentar informacoes no console do Node ou do Navegador

let myVar = true;
console.log(10);
console.log("text");
console.log(myVar);

// existem outras opcoes --> tratamento de erros
// pode receber uma lista de erros
console.error("erro de teste", "erro 2"); 

// para logar um erro, precisamos instanciar um novo tipo Error passando a msg desejada

console.log(new Error("erro de teste"), new Error("erro 2"));

// outros tipos de outputs de log

// console.error() para exibir mensagens de erro;
// console.table() para visualizar de forma mais organizada informações tabulares;

// console.time() e console.timeEnd() para temporizar período que uma operação de código 
//                                    leva para ser iniciada e concluída;

// console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde 
//                 o código executado passou durante a execução.

// mais infos: https://nodejs.org/api/console.html