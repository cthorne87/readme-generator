// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require(".generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What's your project's title?",
    },
    {
        type: "editor",
        name: "description",
        message: "Describe your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be used to install your app?",
    },
    {
        type: "editor",
        name: "usage",
        message: "How do you run your application?"
    },
    {
        type: "input",
        name: "contribution",
        message: "How can a developer contribute to your repo?",
    },
    {
        type: "input",
        name: "test",
        message: "What command should be used to run tests?",
        default: "npm run test",
    },
    {
        type: "list",
        name: "license",
        message: "What license does your application use?",
        choices: ["MIT", "Apache", "LGPLv3", "GPLv2", "none"]
    },
    {
        type: "input",
        name: "credits",
        message: "Who should get credit for this project?",
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
