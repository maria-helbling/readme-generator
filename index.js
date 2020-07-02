const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');
// array of questions for user
const questions = [{type:'input', message: 'testing testing', name: 'test'},{type: 'input', message: 'another test', name:'test2'}

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err):console.log('Your file has been created!') 
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(response => {
        const jsonFile = generateMarkdown(response);
        writeToFile('README2.md', response)
    });
}

// function call to initialize program
init();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// TODO:THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README