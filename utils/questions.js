const questions = repos => [
    {
        type: 'list',
        name: 'title',
        message: 'What is your project title?',
        choices: repos
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
        name: 'test',
        message: 'How do you test your project?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the guidelines on how to contribute to your project?'
    },
    {
        type: 'list',
        name: 'askScreenshot',
        message: 'Would you like to link a screenshot?',
        choices: ['yes', 'no']
    },
    {
        type: 'input',
        name: 'screenshots',
        message: 'Enter your screenshot link/s (separated by spaces if more than one).',
        when: answers => answers.askScreenshot === 'yes'
    }
];

const askUsername = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?'
    }
]

const askEmail = [

    {
        type: 'input',
        name: 'email',
        message: "No public e-mail was found in your GitHub profile. Please enter an e-mail address."
    },
]

module.exports = {askUsername, questions, askEmail};