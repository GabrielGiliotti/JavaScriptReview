#!/usr/bin/env node

import chalk from 'chalk';
import fs from 'fs';
import getFile from './index.js';
import validatedList from './http-validation.js';

const args = process.argv;

async function printResult(valid, result, identifier = '') {

    if(valid) {
        console.log(chalk.yellow('Valid links list:'), 
        chalk.black.bgGreen(identifier),
        await validatedList(result));
    } else {
        console.log(chalk.yellow('Links list:'), 
        chalk.black.bgGreen(identifier),
        result);
    }
}

async function processText(args) {

    let path;
    let valid;

    if(args.length === 3) {
        path = args[2];
    }
    else if(args.length === 4) {
        path = args[3];
        valid = args[2];
    }

    try {
        fs.lstatSync(path);
    }
    catch (error) {
        if(error.code === "ENOENT") {
            console.log("Not found");
            return;
        }
    }

    if(fs.lstatSync(path).isFile()) {
        const result = await getFile(path);
        await printResult(valid, result);
    }
    else if (fs.lstatSync(path).isDirectory()) {
        const files = await fs.promises.readdir(path);
        files.forEach(async (fileName) => {
            const list = await getFile(`${path}/${fileName}`);
            await printResult(valid, list, fileName);
        })
    }
}

processText(args);