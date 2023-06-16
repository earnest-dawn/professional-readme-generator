// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 badge = `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
 if (license === "None") {
  return "";
 } else {
     return badge; 
 }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  }else{
    return `\n* [License](#license)\n`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License

${license};
---

🏆
`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# <Your-Project-Title>

## Description

- What was my motivation?
- Why did i build this project?
- What problem does it solve?
- What did i learn?

## Table of Contents (Optional)


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage



To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    md
    ![alt text](assets/images/screenshot.png)
    

## Credits


## License


---

🏆
## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features


## How to Contribute



## Tests

`;
}

module.exports = generateMarkdown;
