const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

inquirer.createPromptModule([
  {
    type: "input",
    message: "What's your project's title?",
    name: "title",
  },
  {
    type: "input",
    message: "What's your project description?",
    name: "project description",
  },
  {
    type: "input",
    message: "Does your project make use of dependencies?",
    name: "installation",
  },
  {
    type: "checkbox",
    message: "What Dependencies are required?",
    name: "dependencies",
    choices: ["inquirer", "express", "nodemon"],
  },
  {
    type: "input",
    message:
      "Provide instructions and examples for use. Include screenshots as needed.",
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
]);
