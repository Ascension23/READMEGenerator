const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?',   
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?', 
    },
    {
        type: 'input',
        message: 'Give a description of what your project does',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What are your installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What are your usage guidelines?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What liscense are you using?',
        choices: ["apache-2.0", "artistic-2.0", "bsd-3-clause", "bsd-3-clause-clear", "ecl-2.0", "gpl-3.0", "MIT", "ms-pl", "osl-3.0", "Unlicense"]
    },
    {
        type: 'input',
        message: 'What are your contributing guidelines?',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'What tests do you have?',
        name: 'tests',
    }
  ])
  .then((data) => {
   
    let readmeTemplate =`# ${data.title}
    `

    fs.writeFile("README.MD", readmeTemplate, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

