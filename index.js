const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'projTitle',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'projDesc',
        message: 'What is the project\'s description?'
    },

];

function writeToFile(fileName, data) {
}

function init() {




}

init();
