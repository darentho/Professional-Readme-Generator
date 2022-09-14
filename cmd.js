//Required Modules-------------------------------
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const markdown = require();

inquirer.createPromptModule([
  {
    type: "input",
    message: "What's your project's title?",
    name: "title",
  },
  {
    type: "input",
    message: "What's your project description?",
    name: "description",
  },
  {
    type: "input",
    message: "Installation Requirements?",
    name: "installation",
  },
  {
    type: "input",
    message: "What Dependencies are required?",
    name: "dependencies",
  },
  {
    type: "input",
    message: "How can we use the app?",
    name: "usage",
  },
  {
    type: "input",
    message: "What's your full name?",
    name: "name",
  },
  {
    type: "input",
    message: "What's your email?",
    name: "email",
  },
  {
    type: "list",
    message: "Choose your license for your project.",
    name: "license",
    choices: ["Apache", "BSD3", "LGPL", "MIT", "MPL", "ISC", "None"],
  },
  {
    type: "input",
    message: "Explain how users can contribute to your project (Optional).",
    name: "contributing",
  },
  {
    type: "input",
    message: "Provide tests for project, and explain how to test (Optional).",
    name: "test",
  },
  {
    type: "input",
    message: "Enter your GitHub username: ",
    name: "username",
  },
]);
