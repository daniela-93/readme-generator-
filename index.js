const inquirer = require('inquirer');
const promptUser = () => {
  return inquirer.prompt([

    {
      type: 'input',
      name: 'Title',
      message: 'What is the title for your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)'
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)'
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'What is this app used for?'
    },
    {
      type: 'input',
      name: 'Credits',
      message: 'Please add contributors',
    },
    {
      type: 'input',
      name: 'Features',
      message: 'If your projects has features,Add them here'
     
    },
    {
      type: 'input',
      name: 'License',
      message: 'What license was used for this README? ',
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'Lists for tests of application '
     
    },
    {

 
    }
  ]);
};
promptUser().then(answers => console.log(answers));