// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "waht is you github name?",
    name: "github",
  },
  {
    type: "input",
    message: "waht is you email?",
    name: "email",
  },
  {
    type: "input",
    message: "waht is you project name?",
    name: "title",
  },
  {
    type: "input",
    message: "waht is you project description?",
    name: "description",
  },
  {
    type: "input",
    message: "waht is you install commands?",
    name: "installation",
  },
  {
    type: "list",
    message: "waht is you license?",
    choices: ["MIT","AACHE 2.0","GPL 3.0","BSD 3"],
    name: "license",
  },
  {
    type: "input",
    message: "waht is you test command?",
    name: "gthub",
  },
  {
    type: "input",
    message: "waht is you usage?",
    name: "usage",
  },
  {
    type: "input",
    message: "how to contribution?",
    name: "contribution",
  },
];

inquirer.prompt(questions).then((answers) => {
    fs.writeFileSync(path.join(__dirname,"README.md"),generateMarkdown(answers))
});