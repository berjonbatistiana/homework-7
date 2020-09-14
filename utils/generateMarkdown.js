const fs = require('fs');

function generateMarkdown(data) {
  return `

# ${data.title}

  ${data.badges.map(badge => {
    return `![](${badge})`;
  }).join(' ')}


## Description 

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation

${data.installation}


## Usage 

${data.usage}

## License

${data.license}

## Contributing

${data.contributing}

## Tests

${data.test}

## Questions

Questions? Contact me!
![](${data.questions.avatar})
${data.questions.email}
`;
};

function markdownToFile(fileName, data) {
  fs.writeFile(__dirname + `/../${fileName}`, generateMarkdown(data), err => err ? console.log(err) : console.log('success'));
}

module.exports = { generateMarkdown, markdownToFile };
