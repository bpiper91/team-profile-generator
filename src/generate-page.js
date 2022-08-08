// link to class files
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// generate employee cards
const employeeCards = teamArr => {
    // create array for concatenating string
    let stringArr = [];

    for (i = 0; i < teamArr.length; i++) {
        let htmlString = generateCard(teamArr[i]);

        // add generated HTML card to string array
        stringArr.push(htmlString);
    };

    return stringArr.join('');
};

const roleInfo = employee => {
    if (employee.getRole() === 'Manager') {
        // if the employee is a manager, show office number
        return `Office number: ${employee.getOffice()}`;
    } else if (employee.getRole() === 'Engineer') {
        // if the employee is an engineer, show github link
        return `GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`;
    } else {
        // if the employee is an intern, show school
        return `School: ${employee.getSchool()}`;
    };
};

const generateCard = employee => {
    return `
    <div class="col-12 col-sm-6 col-md-4">
        <div class="employee card">
            <div class="card-header">
                <h2>${employee.getName()}</h2>
                <h3>${employee.getRole()}</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li class="list-group-item">${roleInfo(employee)}</li>
            </ul>
        </div>
    </div> `
};

// create the HTML page for export
generateHTML = teamData => {
    // create team array
    let team = [];

    // create manager object and add to team array
    const manager = new Manager(teamData.name, teamData.id, teamData.email, teamData.office);
    team.push(manager);

    // create subordinate objects
    if (teamData.subordinates) {
        // create array of engineers
        engineerList = teamData.subordinates.filter(object => {
            if (object.github) {
                return true;
            } else {
                return false;
            };
        });
        // create objects for each engineer and push to team array
        engineerList.map(object => {
            const engineer = new Engineer(object.name, object.id, object.email, object.github)
            team.push(engineer);
        });
        // create array of interns
        internList = teamData.subordinates.filter(object => {
            if (object.school) {
                return true;
            } else {
                return false;
            };
        });
        // create objects for each intern
        internList.map(object => {
            const intern = new Intern(object.name, object.id, object.email, object.school)
            team.push(intern);
        });
    };

    // create HTML output    
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main class="container">
            <div class="row">${employeeCards(team)}
            </div>
        </main>
    </body>

    </html>
    `;
};

module.exports = generateHTML;