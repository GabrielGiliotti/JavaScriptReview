import chalk from 'chalk';
import fs from 'fs';
import getFile from './index.js';

const args = process.argv;

function printResult(result, identifier = '') {
    console.log(chalk.yellow('Links list:'), 
    chalk.black.bgGreen(identifier),
    result);
}

async function processText(args) {
    const path = args[2];

    try {
        fs.lstatSync(path);
    }
    catch (error) {
        if(error.code === "ENOENT") {
            console.log("File not found");
            return;
        }
    }

    if(fs.lstatSync(path).isFile()) {
        const result = await getFile(args[2]);
        printResult(result);
    }
    else if (fs.lstatSync(path).isDirectory()) {
        const files = await fs.promises.readdir(path);
        files.forEach(async (fileName) => {
            const list = await getFile(`${path}/${fileName}`);
            printResult(list, fileName);
        })
    }
}

processText(args);