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

  ## 🗃️ Description  
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
  💽 ${data.installation}

  ## Dependencies 
  ⚒️ ${data.dependencies}

  ## Usage 
  🦮 ${data.usage}

  ## Contributing 
  🤝 ${data.contributing}

  ## Name 
  💳 ${data.name}

  ## Email 
  📧 ${data.email}

  ## ${renderLicenseSection(data.license)}

  ## Test 
  🧪 ${data.test}

  ${renderNotes(data.noteDetails)}

  ## ❓ Questions

If there's any questions you'd like to shoot my way, Email me at: ${data.email} 
  
Find me on GitHub: [${data.username}](https://github.com/${data.username})
  
  `;
}

module.exports = myMarkdown;
