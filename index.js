// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const README = ({
  title,
  Description,
  TableofContents,
  Installation,
  Usage,
  License,
  Contributing,
  Tests,
  Question,
}) =>
  `## title
${title}
## Description
${Description}
## TableofContents
${TableofContents}
## Installation
${Installation}

## Usage
${Usage}
## License
${License}
## Contributing
${Contributing}
## Tests
${Tests}
## Questions
${Question}
`;
const md = require("./utils/generateMarkdown");

inquirer
  .prompt([
    { type: "input", name: "title", message: "what is your title?" },

    {
      type: "input",
      name: "Description",
      message: "what is your Description?",
    },

    {
      type: "input",
      name: "TableofContents",
      message: "what are your TableofContents?",
    },

    {
      type: "input",
      name: "Installation",
      message: "what is your Installation?",
    },

    { type: "input", name: "Usage", message: "what is your Usage?" },

    {
      type: "list",
      name: "License",
      message: "what is your License?",
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },

    {
      type: "input",
      name: "Contributing",
      message: "what is your Contributing?",
    },

    { type: "input",
     name: "Tests",
      message: "what is your Tests?" },

    { type: "input",
     name: "Question",
      message: "what is your Question?"
     },

    { type: "input", name: "gitHub", message: "what is your Github Username?" },
  ])
  .then((answers) => {
    const anser = README(answers);

    fs.writeFile("README.md",md(anser) , (err) =>
      err ? console.log(err) : console.log("Generating README...")
    );
  });
// TODO: Create an array of questions for user input
