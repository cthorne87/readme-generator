// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license === "none"){
      return "";
    }
    else if (license === "MIT") {
      return `![MIT License](https://img.shields.io/badge/license-MIT-blue)`;
    }
    else if (license === "Community"){
      return `![Community License](https://img.shields.io/badge/license-Community-blue)`
    }
    else if (license === "Apache") {
      return `![Apache License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    }
    else if (license === "LGPLv3") {
      return `![LGPLv3 License](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`;
    }
    else if (license === "GPLv2") {
      return `![GPLv2 License](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "none"){
    return "";
  }
  else if (license === "MIT") {
    return `[MIT](https://opensource.org/licenses/MIT)`;
  }
  else if (license === "Community"){
    return `[Community](https://en.wikipedia.org/wiki/Educational_Community_License)`
  }
  else if (license === "Apache") {
    return `[Apache](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (license === "LGPLv3") {
    return `[LGPLv3](https://www.gnu.org/licenses/lgpl-3.0)`;
  }
  else if (license === "GPLv2") {
    return `[GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "none"){
    return "";
  }
  else {
    return "Licensing information can be found here:"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
${data.description}  
---
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)
---
### Installation

Run the following command to install:

${data.installation}  
---
### Usage

Use the following command to run:

${data.usage}  

---
### Contribution

${data.contribution}
---
### Tests

To run tests, run the following command:

${data.tests}  
---
### Questions
For questions or feedback:

https://www.github.com/${data.username}

${data.email}
---
### License
${renderLicenseBadge(data.license)}


${renderLicenseSection(data.license)}


${renderLicenseLink(data.license)}

---
  `;
}

module.exports = generateMarkdown;
