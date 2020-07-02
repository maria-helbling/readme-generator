const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');
// array of questions for user
const questions = [
    {
        type:'input', 
        message: 'What is your project TITLE?', 
        name: 'title'
    },
    {
        type:'input', 
        message: 'Please DESCRIBE your project.', 
        name:'description'
    },
    {
        type:'input', 
        message: 'Please provide INSTALLATION instructions.', 
        name:'installation'
    },
    {
        type:'input', 
        message: 'Please describe the USE CASE for your project.', 
        name:'usage'
    },
    {
        type:'input', 
        message: 'Please describe how to CONTRIBUTE to this project.', 
        name:'contributing'
    },
    {
        type:'input', 
        message: 'Please provide TEST information.', 
        name:'tests'
    },
    {
        type:'list', 
        message: 'Please choose a LICENSE option.', 
        choices:['MIT', 'GPLv2','Apache', 'GPLv3', 'BSD 3-clause' ],
        name:'license',
        default: 'MIT'
    },
    {
        type:'input', 
        message: 'Enter your gitHub USERNAME?', 
        name:'username'
    },
    {
        type:'input', 
        message: 'Enter your e-mail', 
        name:'email'
    }

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
        const fileString = generateMarkdown(response);
        writeToFile('README2.md', fileString)
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