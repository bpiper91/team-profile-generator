// link to Employee.js
const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, idNum, email, school) {
    super(name, idNum, email);

    this.school = school;
  };

  getSchool() {
    return `${this.school}`;
  };

  getRole() {
    return `${this.constructor.name}`;
  };
};

module.exports = Intern;