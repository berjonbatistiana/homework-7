function generateMarkdown(data) {
  return `
${data.badges.map(badge =>{
  return `![](${badge})`;
}).join(' ')}

# ${data.title}

## Description 

${data.description}

## Table of Contents (Optional)

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

## Questions

${data.questions}
`;
};

module.exports = generateMarkdown;
