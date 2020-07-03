// array of questions for user
const questions = [
    {
        type:'input', 
        message: 'What is your project TITLE?', 
        name: 'title',
    },
    {
        type:'input', 
        message: 'Please DESCRIBE your project.', 
        name:'description',
        default: 'See further project details below.'
    },
    {
        type:'input', 
        message: 'Please provide INSTALLATION instructions.', 
        name:'installation',
        default: 'There are no project specific installation instructions to provide.'
    },
    {
        type:'input', 
        message: 'Please describe the USE CASE for your project.', 
        name:'usage'
    },
    {
        type:'input', 
        message: 'Please describe how to CONTRIBUTE to this project.', 
        name:'contributing',
        default: `To contribute to this application, create a pull request. Here are the steps needed for doing that:

* Fork the repo
* Create a feature branch (git checkout -b NAME-HERE)
* Commit your new feature (git commit -m 'Add some feature')
* Push your branch (git push)
* Create a new Pull Request
        
Following a code review, your feature will be merged.`
    },
    {
        type:'input', 
        message: 'Please provide TEST information.', 
        name:'tests',
        default: 'There are no project specific tests provided.'
    },
    {
        type:'list', 
        message: 'Please choose a LICENSE option.', 
        choices:['MIT', 'GPLv2','Apache', 'GPLv3', 'BSD3' ],
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

module.exports = {
    questions
}