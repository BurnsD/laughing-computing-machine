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

// Path
const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const OUTPUTpath = path.join(OUTPUT_DIR, 'list.html');

// Employee Array
const employeeArray = [];
/*
const addTeamMember = () => {
    inquirer
        .prompt([{
          type: 'list',
          message: 'What role does this person take?',
          name: 'action',
          choices: ['Intern', 'Engineer', 'Manager',]
        }
    ]).then(choice => {
        switch (choice.employeeType) {
            case 'Intern':
                addIntern();
                break;
            case 'Engineer':
                addEngineer();
                break;
            case 'Manager':
                addManager();
            default:
                writeFile()
        }
    })
}
*/
    // Intern
    const addIntern = () => {
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
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(
            answers.internName,
            answers.id, 
            answers.email, 
            answers.school)
        employeeArray.push(intern);
        addTeamMember();
    })
}
    // End Of Intern

        // Engineer
    const addEngineer = () => {
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
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(
            answers.engineerName,
            answers.id, 
            answers.email, 
            answers.github)
        employeeArray.push(engineer);
        addTeamMember();
    })
}
    //End of Engineer

        
        // Manager
    const addManager = () => {
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
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(
            answers.engineerName,
            answers.id, 
            answers.email, 
            answers.officeNumber)
        employeeArray.push(manager);
        addTeamMember();
    })
}
    // End of Manager
    const addTeamMember = () => {
        inquirer.prompt([
        {
            type: 'list',
            message: 'What role does this person take?',
            name: 'employeeType',
            choices: ['Intern', 'Engineer', 'Manager', 'Done']
        }
    ]).then(choice => {
        switch (choice.employeeType) {
            case 'Intern':
                addIntern();
                break;
            case 'Engineer':
                addEngineer();
                break;
            case 'Manager':
                addManager();
            default:
                writeFile()
        }
    })
}
    
    // Generates HTML using fs
const writeFile = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    } else {
        fs.writeFileSync(OUTPUTpath, generateHTML(employeeArray), 'utf-8');
    }
}; 
    

addTeamMember();
