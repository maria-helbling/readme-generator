// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
