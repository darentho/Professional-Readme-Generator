function markdown(data) {
  return `# ${data.title}

  ## 🗃️ Description  ${data.description}

  ## Table of Content
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Test](#test)
- [Questions](#questions)

  ## 💽 Installation ${data.installation}

  ## ⚒️ Dependencies ${data.dependencies}

  ## 🦮 Usage ${data.usage}

  ## 🤝 Contributing ${data.contributing}

  ## 💳 Name ${data.name}

  ## 📧 Email ${data.email}

  ## 🔐 License ${data.license}

  ## 🧪 Test ${data.test}

  ## ❓ Questions

If there's any questions you'd like to shoot my way, Email me at: ${data.email} 
  
Find me on GitHub: [${data.username}](https://github.com/${data.username})
  
  `;
}

module.exports = markdown;
