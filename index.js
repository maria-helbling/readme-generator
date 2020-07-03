const inquirer = require('inquirer');
const fs = require('fs')
const util = require('util')
const generateMarkdown = require('./utils/generateMarkdown');
const questionFile = require('./utils/questionFail')

const writeFileAsync = util.promisify(fs.writeFile) 
// function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, err => err ? console.log(err):console.log('Your file has been created!'))
// }

// function to initialize program
function init() {
    inquirer.prompt(questionFile.questions)
    .then(response => generateMarkdown(response))
    .then( str => writeFileAsync(`README.md`,str))
    .catch(err => err)
}

// function call to initialize program
init();
