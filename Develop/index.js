// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require(".generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What's your project's title?",
    },
    {
        type: "editor",
        name: "Description",
        message: "Describe your project.",
    },
    {
        type: "input",
        name: "Installation",
        message: "What command should be used to install your app?",
    },
    {
        type: "editor",
        name: "Usage"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
