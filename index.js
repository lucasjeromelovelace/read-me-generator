// TODO: Include packages needed for this application
const fs=require('fs')
const inquirer=require('inquirer')
// TODO: Create an array of questions for user input
const generateMarkdown=require('./utils/generateMarkdown')
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',

    },
    {
        type: 'input',
        message: 'Provide a short description about your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide installtion instructions for your project.',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Provide usuage instructions for your project.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide testing instructions for your project.',
        name: 'test',

    },
    {
        type: 'input',
        message: 'Provide instructions for contribution to your project.',
        name: 'contributing',
    },
    {
        type: 'list',
        message: 'What licenses does your project use?',
        name: 'license',
        choices: [
            'MIT', 'Apache2.0', 'BSD3', 'Creative Commons', 'None'
        ]
    },
    {
        type: 'input',
        message: 'Provide your email address.',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Provide your Github username.',
        name: 'Github',
    }
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers=>{
        fs.writeFile('readme.md',generateMarkdown(answers), (err)=>{
            if (err)
            console.log (err)
            console.log ('success')
        })
    })
 }

// Function call to initialize app
init();
