// Para iniciar projeto Node
// npm init              ou
// yarn init

// Para instalar pacotes
// npm install <nome do pacote>    ou 
// yarn add <nome do pacote>


// ####### Exemplos uso Chalk #######
// encadear métodos para colorir texto, cor de fundo e texto em negrito
// console.log(chalk.blue.bgWhite.bold('Alura'));

// receber múltiplos argumentos
// console.log(chalk.blue('curso', 'de', 'Node.js'));
// métodos aninhados

// console.log(chalk.red('vermelho', chalk.underline.bgBlue('azul')));
// uso de template strings e placeholders

// console.log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);


// Funcao sincrona
// function returnFile(path) {
//     const encoding = 'utf-8';
//     fs.readFile(path, encoding, (error, text) => {
        
//         if(error) 
//             exceptionHandler(error);

//         console.log(chalk.green(text));
//     });
// }

import fs from 'fs';
import chalk from 'chalk';  // equivalente a const chalk = require('chalk');

function exceptionHandler(error) {
    throw new Error(chalk.red(error.code, 'Error trying to access specified file.'));
}

function returnFile(path) {
    const encoding = 'utf-8';
    
    fs.promises.readFile(path, encoding)
    .then((text) => {
        console.log(chalk.green(text));
    })
    .catch(exceptionHandler);
}

// relative path
returnFile('./files/texto.md');

function promessa(bool) {
    const x = bool;
    return new Promise((resolve, reject) => {
      if (!x) {
        reject(new Error("falha na promessa"));
      }
      resolve("sucesso na promessa");
    });
   }
   
   function exibeResposta(textoResult) {
    console.log(textoResult);
   }
   
   promessa(true)
    .then((texto) => exibeResposta(texto))
   // sucesso na promessa