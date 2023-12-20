import chalk from 'chalk';
import getFile from './index.js';

const path = process.argv;

async function processText(path) {
    const result = await getFile(path[2]);
    console.log(chalk.yellow('Links list:'), result);
}

processText(path);