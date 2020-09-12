function generateMarkdown(data) {
  return `
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

# ${data.title}

## Description 

${data.description}

## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

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
}

module.exports = generateMarkdown;
