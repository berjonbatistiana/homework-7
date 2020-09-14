const inquirer = require('inquirer');
const api = require('./utils/api');
const { markdownToFile } = require('./utils/generateMarkdown');
const { askUsername, questions, askEmail } = require('./utils/questions');

async function init() {

    let license = 'No registered license.'

    // Ask username
    const usernameResponse = await inquirer.prompt(askUsername)

    // Fetch username from github
    const ghResponseUser = await api.getUser(usernameResponse.username);
    const userData = ghResponseUser.data;

    // Fetch repos from github
    const ghResponseRepo = await api.getUserRepo(usernameResponse.username);
    const data = ghResponseRepo.data;
    const repos = data.map(repo => repo.name);

    // Find target repo
    const response = await inquirer.prompt(questions(repos))
    const targetRepo = // select the repo from the list of repo
        data.find(repo => repo.name === response.title);

    // Check for email
    const userEmail = userData.email? 
        userData.email : 
        (await inquirer.prompt(askEmail)).email;
    
    // Collect languages used and turn them into badges
    const langUrl = targetRepo.languages_url;
    const { data: langData } = await api.getLanguage(langUrl);
    const langs = githubLangBadge(langData ? langData : {});
    const badges = []

    for (lang of langs) {
        badges.push(`https://img.shields.io/badge/${lang.label}-${lang.message}-green`);
    }

    // Collect license if exists and turn it into a badge
    if (targetRepo.license) {
        license = `Licensed under ${targetRepo.license.name}`;
        badges.push(`https://img.shields.io/badge/License-${targetRepo.license.spdx_id}-blue`);
    }

    // Collect the owner avatar and use them for contact info
    const contact = {
        avatar: targetRepo.owner.avatar_url,
        email: userEmail
    }

    // Object to be sent to markdown generator
    const mdData = {
        badges: badges,
        title: response.title,
        description: data.description ? data.description : '',
        installation: response.installation,
        usage: response.usage,
        license: license,
        contributing: response.contributing,
        questions: contact
    }

    markdownToFile('README.md', mdData);

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
init()
