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
        name: 'desc',
        message: 'What is the project\'s description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use your project?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How to contribute to your project?'
    }
];

function writeToFile(fileName, data) {
}

function init() {

    inquirer.prompt(questions).then(response => {
        console.log(response);
    });

}

init();
