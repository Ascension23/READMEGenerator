const { Module } = require("module");
let badgeID;
function createBadge(data) {

    switch (data.license)
    {
        case "apache-2.0":
            badgeID = "apache-2.0"
            break;
        case "artistic-2.0":
            badgeID = "artistic-2.0"
            break;
        case "bsd-3-clause":
            badgeID = "bsd-3-clause"
            break;
        case "bsd-3-clause-clear":
            badgeID = "bsd-3-clause-clear"
            break;
        case "ecl-2.0":
            badgeID = "ecl-2.0"
            break;
        case "gpl-3.0":
            badgeId = "gpl-3.0"
            break;
        case "MIT":
            badgeID = "MIT"
            break;
        case "ms-pl":
            badgeID = "ms-pl"
            break;
        case "osl-3.0":
            badgeID = "osl-3.0"
            break;
        case "Unlicense":
            badgeID = "Unlicense"
            break;
    }
    return `https://choosealicense.com/licenses/${badgeID}/`;
}

function generateReadMe(data) {
    var badge = `${data.license}`;
    var newBadge = badge.replace(/-/, "%20");
    return `   
![badge](https://img.shields.io/badge/license-${newBadge}-blue?style=flat-square)

# ${data.title}

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
![badge](https://img.shields.io/badge/license-${newBadge}-blue?style=flat-square)
This application is covered under ${badgeID}.

## Contributions
${data.contributions}

## Testing
${data.tests}

## Contact Info
My GitHub Profile is https://github.com/${data.username}

My email address is ${data.email} for any questions or information.
`;
}


module.exports = {createBadge, generateReadMe}
