const fs = require('fs');
const inquirer = require('inquirer');
const api = require('./utils/api');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'title',
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
    fs.writeFile(__dirname + `/${fileName}`, generateMarkdown(data), err => err? console.log(err): console.log('success'));
}

function init() {

    inquirer.prompt(questions).then(async response => {
        const ghResponse = await api.getUser(response.username);
        const data = ghResponse.data;
        let targetRepo;

        for (repo of data) {
            if (repo.name === response.title) {
                targetRepo = repo;
            }
        }

        const langUrl = targetRepo.languages_url;
        const { data: langData } = await api.getLanguage(langUrl);
        const langs = githubLangBadge(langData ? langData : {});

        const badges = []

        for (lang of langs) {
            badges.push(`https://img.shields.io/badge/${lang.label}-${lang.message}-blue`);
        }

        const mdData = {
            badges: badges,
            title: data.name,
            description: response.desc,
            installation: response.installation,
            usage: response.usage,
            license: data.license? data.license: 'No licenses registered',
            contributing: response.contributing,
            questions: response.questions
        }

        writeToFile('README.md', mdData);

    });

}

function githubLangBadge(langs) {
    let totalBytes = 0;
    const badges = [];
    for (lang in langs) {
        totalBytes += parseInt(langs[lang]);
    }
    for (lang in langs) {
        const badge = {
            label: lang,
            message: (parseInt(langs[lang]) / totalBytes * 100).toFixed(1),
            labelColor: 'blue',
            color: 'grey'
        };
        badges.push(badge);
    }

    return badges;
}
init();
