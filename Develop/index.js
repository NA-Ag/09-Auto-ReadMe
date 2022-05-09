// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "username", 
        message: "Username?",
        default: "Na-Ag"
    },
    {
        type: "input",
        name: "title",
        message: "Input Project Title"
    }, 
    {
        type: "input",
        name: "description",
        message: "Input a description for your project"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project",
        choices: ["MIT", "APACHE 2.0", "GPL v3", "EPL 1.0", "None"]
    }, {
        type: "input",
        name: "installation",
        message: "Briefly explain how to install your project so others may use it",
    },
    {
        type: "input",
        name: "tests",
        message: "Briefly explain how to run tests",
    },
    {
        type: "input",
        name: "usage",
        message: "Briefly explain intended use"
    },
    {
        type: "input",
        name: "contributing",
        message: "User contibution guidelines go here",
        default: "Contributor: Na-Ag"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>    
    err ? console.log(err) : console.log('Successfully created README.md')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const dataForReadme = genMarkdown(data);
        writeToFile("README.md", dataForReadme);
    });
}

// Function call to initialize app
init();
