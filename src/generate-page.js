// link to class files
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// generate employee cards
const employeeCards = team => {

};

// <div class="col-12 col-sm-6 col-md-4">
// <div class="employee card">
// <div class="card-header">
//     <h3>${name}</h3>
//     <h4>${role}</h4>
// </div>
// <ul class="list-group list-group-flush">
//     <li class="list-group-item">ID: ${id}</li>
//     <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
//     <li class="list-group-item">GitHub: <a href="https://github.com/${github}">${github}</a></li>
// </ul>
// </div>
// </div>


// create the HTML page for export
generateHTML = teamData => {
    // create team array
    let team = [];

    // create manager object and add to team array
    const manager = new Manager(teamData.name, teamData.id, teamData.email, teamData.office);
    team.push(manager);

    // create subordinate objects
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


    // create HTML output    
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main class="container">
            <div class="row">
                ${employeeCards(team)}
            </div>
        </main>
    </body>

    </html>
    `;
};

module.exports = generateHTML;