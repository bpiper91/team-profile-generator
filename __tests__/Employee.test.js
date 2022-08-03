// link to Employee.js
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Jane', '2', 'jane@doe.com');

    expect(employee.name).toBe('Jane');
    expect(employee.id).toBe('2');
    expect(employee.email).toBe('jane@doe.com');
});

test('returns name, id, email, and role', () => {
    const employee = new Employee('John', '5', 'john@doe.com');

    expect(employee.getName()).toBe('John');
    expect(employee.getId()).toBe('5');
    expect(employee.getEmail()).toBe('john@doe.com');
    expect(employee.getRole()).toBe('Employee');
});