//Functions for License -----------------------------------------------------------
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return ``;
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license)`;
  }
  return ``;
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
      This application is covered by the ${license} license.`;
  }
  return ``;
}

function renderNotes(noteDetails) {
  return `## Notes 
  ${noteDetails}`;
}

function myMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## ๐๏ธ Description  
  ${data.description}

  ## Table of Content
- [Installation](#Installation)
- [Dependencies](#Dependencies)
- [Usage](#Usage)
- [Contributing](#Contributing)
- ${renderLicenseLink(data.license)}
- [Test](#Test)
- [Notes](#Notes)
- [Questions](#Questions)

  ## Installation 
  ๐ฝ ${data.installation}

  ## Dependencies 
  โ๏ธ ${data.dependencies}

  ## Usage 
  ๐ฆฎ ${data.usage}

  ## Contributing 
  ๐ค ${data.contributing}

  ## Name 
  ๐ณ ${data.name}

  ## Email 
  ๐ง ${data.email}

  ## ${renderLicenseSection(data.license)}

  ## Test 
  ๐งช ${data.test}

  ${renderNotes(data.noteDetails)}

  ## โ Questions

If there's any questions you'd like to shoot my way, Email me at: ${data.email} 
  
Find me on GitHub: [${data.username}](https://github.com/${data.username})
  
  `;
}

module.exports = myMarkdown;
