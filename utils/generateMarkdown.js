// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Questions](#Questions)

## Installation

\`\`\`
${data.installation}
\`\`\`

## Usage

\`\`\`
${data.usage}
\`\`\`

## Questions

${data.contribution}

Email: ${data.email}
Github: [${data.github}](https://github.com/${data.github}/);
`;
}

module.exports = generateMarkdown;
