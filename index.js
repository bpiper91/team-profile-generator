// link to class files
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// load inquirer module for user input
const inquirer = require('inquirer');

// load HTML generator file
const generateHTML = require('./src/generate-page');

// load functions from file-functions.js
const { copyStyle, writeHTML } = require('./src/file-functions');

// questions for inquirer prompts
const managerQuestions = [
    {
        message: "What is the manager's name?",
        type: 'text',
        name: 'name',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name.');
                return false;
            }
        }
    },
    {
        message: "What is the manager's employee ID?",
        type: 'text',
        name: 'id',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter an employee ID.');
                return false;
            }
        }
    },
    {
        message: "What is the manager's email address?",
        type: 'text',
        name: 'email',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter an email address.');
                return false;
            }
        }
    },
    {
        message: "What is the manager's office number?",
        type: 'text',
        name: 'office',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter an office number.');
                return false;
            }
        }
    },
    {
        message: "Would you like to add another team member?",
        type: 'list',
        choices: [
            {
                name: 'Yes, add an engineer',
                value: 'engineer'
            },
            {
                name: 'Yes, add an intern',
                value: 'intern'
            },
            {
                name: 'No, finish building my team',
                value: 'finish'
            }
        ],
        name: 'nextStep',
    },
];

const engineerQuestions = [
    {
        message: "What is the engineer's name?",
        type: 'text',
        name: 'name',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name.');
                return false;
            }
        }
    },
    {
        message: "What is the engineer's employee ID?",
        type: 'text',
        name: 'id',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter an employee ID.');
                return false;
            }
        }
    },
    {
        message: "What is the engineer's email address?",
        type: 'text',
        name: 'email',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter an email address.');
                return false;
            }
        }
    },
    {
        message: "What is the engineer's GitHub username?",
        type: 'text',
        name: 'github',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter an office number.');
                return false;
            }
        }
    },
    {
        message: "Would you like to add another team member?",
        type: 'list',
        choices: [
            {
                name: 'Yes, add an engineer',
                value: 'engineer'
            },
            {
                name: 'Yes, add an intern',
                value: 'intern'
            },
            {
                name: 'No, finish building my team',
                value: 'finish'
            }
        ],
        name: 'nextStep',
    },
];

const internQuestions = [
    {
        message: "What is the intern's name?",
        type: 'text',
        name: 'name',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name.');
                return false;
            }
        }
    },
    {
        message: "What is the intern's employee ID?",
        type: 'text',
        name: 'id',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter an employee ID.');
                return false;
            }
        }
    },
    {
        message: "What is the intern's email address?",
        type: 'text',
        name: 'email',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter an email address.');
                return false;
            }
        }
    },
    {
        message: "What is the intern's school?",
        type: 'text',
        name: 'school',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter an office number.');
                return false;
            }
        }
    },
    {
        message: "Would you like to add another team member?",
        type: 'list',
        choices: [
            {
                name: 'Yes, add an engineer',
                value: 'engineer'
            },
            {
                name: 'Yes, add an intern',
                value: 'intern'
            },
            {
                name: 'No, finish building my team',
                value: 'finish'
            }
        ],
        name: 'nextStep',
    },
];

// start the app by getting manager info from user
const promptManager = () => {
    return inquirer.prompt(managerQuestions)
};

// prompt for additional team members and return team object when finished
const promptNewTeamMember = teamData => {
    // if the team includes only a manager, pass on only manager data
    if (teamData.nextStep === 'finish') {
        console.log(`
        Finishing team...
        `);

        return teamData;
    };

    // if there's no subordinates array, create one
    if (!teamData.subordinates) {
        teamData.subordinates = [];
    };

    console.log(teamData);

    var newEmployee;

    // determine what user is adding
    if (teamData.subordinates.length < 1) {
        // if no subordinates have been added, check choice from manager prompt
        // alert user to what they're adding
        console.log(`
        Adding new ${teamData.nextStep}...
        `);

        newEmployee = teamData.nextStep;
    } else {
        // otherwise, get the choice from the last subordinate added
        // alert user to what they're adding
        console.log(`
        Adding new ${teamData.subordinates[teamData.subordinates.length - 1].nextStep}...
        `);

        // get employee role for next step
        newEmployee = teamData.subordinates[teamData.subordinates.length - 1].nextStep;
    };

    if (newEmployee === 'engineer') {
        // if the new employee is an engineer, prompt for engineer
        return inquirer
            .prompt(engineerQuestions)
            // add the employee data to team data object
            .then(engineerData => {
                teamData.subordinates.push(engineerData);
                return teamData;
            })
            .then(teamData => {
                // get user selection for next step
                console.log(teamData);
                console.log(teamData.subordinates);
                let nextStep = teamData.subordinates[teamData.subordinates.length - 1].nextStep;
        
                if (nextStep === 'finish') {
                    // if user said they were done adding employees, build the team
                    return teamData;
                } else {
                    // otherwise, run again to get the next employee
                    return promptNewTeamMember(teamData);
                };
            })
            .catch(err => {
                console.log(err);
            })
    } else {
        // if the new employee is an intern, prompt for intern
        return inquirer
            .prompt(internQuestions)
            // add intern info to team data object
            .then(internData => {
                teamData.subordinates.push(internData);
                return teamData;
            })
            .then(teamData => {
                console.log(teamData);
                console.log(teamData.subordinates);
                // get user selection for next step
                var nextStep = teamData.subordinates[teamData.subordinates.length - 1].nextStep;
        
                if (nextStep === 'finish') {
                    // if user said they were done adding employees, build the team
                    return teamData;
                } else {
                    // otherwise, run again to get the next employee
                    return promptNewTeamMember(teamData);
                };
            })
            .catch(err => {
                console.log(err);
            });
    };
};

promptManager()
    .then(promptNewTeamMember)
    .then(teamData => {
        return generateHTML(teamData);
    })
    .then(generatedHTML => {
        return writeHTML(generatedHTML);
    })
    .then(writeHTMLResponse => {
        console.log(writeHTMLResponse);
        return copyStyle();
    })
    .then(copyStyleResponse => {
        console.log(copyStyleResponse);
    })
    .catch(err => {
        console.log(err);
    })