import chalk from 'chalk';
import fs from 'fs';
import getFile from './index.js';

const args = process.argv;

function printResult(result) {
    console.log(chalk.yellow('Links list:'), result);
}

async function processText(args) {
    const path = args[2];

    if(fs.lstatSync(path).isFile()) {
        const result = await getFile(args[2]);
        printResult(result);
    }
    else if (fs.lstatSync(path).isDirectory()) {
        const files = await fs.promises.readdir(path);
        files.forEach(async (fileName) => {
            const list = await getFile(`${path}/${fileName}`);
            printResult(list);
        })
    }
}

processText(args);