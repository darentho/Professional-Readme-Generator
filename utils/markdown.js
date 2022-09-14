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

function markdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## 🗃️ Description  ${data.description}

  ## Table of Content
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Contributing](#contributing)
- ${renderLicenseLink(data.license)}
- [Test](#test)
- [Questions](#questions)

  ## 💽 Installation ${data.installation}

  ## ⚒️ Dependencies ${data.dependencies}

  ## 🦮 Usage ${data.usage}

  ## 🤝 Contributing ${data.contributing}

  ## 💳 Name ${data.name}

  ## 📧 Email ${data.email}

  ## 🔐 ${renderLicenseSection(data.license)}

  ## 🧪 Test ${data.test}

  ## ❓ Questions

If there's any questions you'd like to shoot my way, Email me at: ${data.email} 
  
Find me on GitHub: [${data.username}](https://github.com/${data.username})
  
  `;
}

module.exports = markdown;
