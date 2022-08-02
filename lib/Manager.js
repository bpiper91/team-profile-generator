// link to Employee.js
const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, idNum, email, officeNum) {
    super(name, idNum, email);

    this.office = officeNum;
  };

  getRole() {
    return `${this.constructor.name}`;
  };

  getOffice() {
    return `${this.office}`;
  };
};

module.exports = Manager;