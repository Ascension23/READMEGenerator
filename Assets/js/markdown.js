function generateReadMe(data) {
`   # ${data.title}

    ## Description
    ${data.description}

    ## Table of contents
    *[Description] (#description)
    *[Installation](#installation)
    *[Usage](#usage)
    *[License](#license)
    *[Contributions](#contributions)
    *[Testing](#testing)
    *[Contact Info] (#contactInfo)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    ${data.license}

    ## Contributions
    ${data.contributions}

    ## Testing
    ${data.tests}

    ## Contact Info
    My GitHub Profile is https://github.com/${data.username}
    <br>
    <br>
    My email address is ${data.email}
`;
}


module.export = generateReadMe