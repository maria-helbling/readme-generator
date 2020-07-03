const badges = {
  MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
  GPLv2: '![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)',
  Apache: '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
  GPLv3: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
  BSD3: '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${badges[data.license]}
## Description
  
${data.description}
  
## Table of Contents
  
* [Description](#description)
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
  
The application is released under the ${data.license} license.
  
## Contributing
  
${data.contributing}
  
## Tests
  
${data.tests}
  
## Questions
  
Link to author's [gitHub profile](https://github.com/${data.username}).
  
In case of further questions, e-mail: ${data.email}
`;
}

module.exports = generateMarkdown;
