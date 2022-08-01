// create Employee object
class Employee {
    constructor( name, idNum, email ) {
        this.name = name;
        this.id = idNum;
        this.email = email;
    };

    getName() {
        return `${this.name}`;
    };

    getId() {
        return `${this.id}`;
    };

    getEmail() {
        return `${this.email}`;
    };

    getRole() {
        return `${this.constructor.name}`;
    };
};

module.exports = Employee;