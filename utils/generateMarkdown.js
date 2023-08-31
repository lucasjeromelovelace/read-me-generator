// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license!=='None')
  return ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-blue.svg)`;
  return``
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license!=='None')
  return `- [License](#license)`
  return ``
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license!=='None')
  return `## License\nThis project is licensed under the ${license} license `
  return ``
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usuage)
  - [Test](#test)
  - [Contributing](#contributing)
  ${renderLicenseLink(data.license)}
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ##Usuage
  ${data.usuage}

  ## Test
  ${data.test}

  ## Contributing
  ${data.contributing}

  ${renderLicenseSection(data.license)}

  ## Questions
  If you have any questions, you can email me ${data.email}
  If you want to see more of my work ${data.Github}

`;
}

module.exports = generateMarkdown;
