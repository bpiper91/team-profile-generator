// link to Employee.js
const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, idNum, email, github) {
    super(name, idNum, email);

    this.github = github;
  };

  getGithub() {
    return `${this.github}`;
  };

  getRole() {
    return `${this.constructor.name}`;
  };
};

module.exports = Engineer;