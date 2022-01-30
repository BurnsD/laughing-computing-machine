// Link to generateHTML
const generateHTML = require('./src/generateHTML');

// Role Variables
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// Node Modules
const fs = require('fs'); 
const inquirer = require('inquirer');
const path = require('path');

// Employee Array
const employeeArray = [];

const decideRole = () => {
    inquirer
        .prompt({
          type: 'list',
          message: 'What role does this person take?',
          name: 'action',
          choices: ['Intern', 'Engineer', 'Manager',]
        })
        .then(({ action }) => {
            if (action === 'Intern'){
                console.log("Enter Intern's Information")
                // Questions for Intern Input
                inquirer.prompt ([
                    {
                        type: 'input',
                        name: 'internName',
                        message: 'Intern Name',
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                return 'Please enter a name!';
                            }
                        }
                    }, {
                        type: 'input',
                        name: 'id',
                        message: 'ID Number',
                        validate: idInput => {
                            if (idInput) {
                                return true;
                            } else {
                                return 'Please enter ID!';
                            }
                        }
                    }, {
                        type: 'input',
                        name: 'email',
                        message: 'Email Address',
                        validate: emailInput => {
                            if (emailInput) {
                                return true;
                            } else {
                                return 'Please enter e-mail!';
                            }
                        }
                    }, {
                        type: 'input',
                        name: 'school',
                        message: 'Which school does this intern attend?',
                        validate: schoolInput => {
                            if (schoolInput) {
                                return true;
                            } else {
                                return 'Please enter school name!';
                            }
                        }
                    },
                ]);
            }
        }).then(({ action }) => {
            if (action === 'Engineer'){
                
                console.log("Enter Engineer's Information")
                // Questions for Engineer Input
                inquirer.prompt ([
                    {
                        type: 'input',
                        name: 'engineerName',
                        message: 'Engineers Name',
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                return 'Please enter a name!';
                            }
                        }
                    }, {
                        type: 'input',
                        name: 'id',
                        message: 'ID Number',
                        validate: idInput => {
                            if (idInput) {
                                return true;
                            } else {
                                return 'Please enter ID!';
                            }
                        }
                    }, {
                        type: 'input',
                        name: 'email',
                        message: 'Email Address',
                        validate: emailInput => {
                            if (emailInput) {
                                return true;
                            } else {
                                return 'Please enter e-mail!';
                            }
                        }
                    }, {
                        type: 'input',
                        name: 'github',
                        message: 'Enter GitHub Username.',
                        validate: githubInput => {
                            if (githubInput) {
                                return true;
                            } else {
                                return 'Please enter GitHub Username!';
                            }
                        }
                    },
                ])
            }
        }).then(({ action }) => {
            if (action === 'Manager') {
                console.log("Enter Manager's Information")
                // Questions for Manager Input
                inquirer.prompt ([
                    {
                        type: 'input',
                        name: 'managerName',
                        message: 'Managers Name',
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                return 'Please enter a name!';
                            }
                        }
                    }, {
                        type: 'input',
                        name: 'id',
                        message: 'ID Number',
                        validate: idInput => {
                            if (idInput) {
                                return true;
                            } else {
                                return 'Please enter ID!';
                            }
                        }
                    }, {
                        type: 'input',
                        name: 'email',
                        message: 'Email Address',
                        validate: emailInput => {
                            if (emailInput) {
                                return true;
                            } else {
                                return 'Please enter e-mail!';
                            }
                        }
                    }, {
                        type: 'input',
                        name: 'officeNumber',
                        message: 'Enter Office Number.',
                        validate: numberInput => {
                            if (numberInput) {
                                return true;
                            } else {
                                return 'Please enter an Office Number!';
                            }
                        }
                    },
                ])
            }
        })
}
