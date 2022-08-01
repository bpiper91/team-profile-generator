// link to Employee.js
const Employee = require('../lib/Employee');

// link to Engineer.js
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Jim', 3, 'jim@doe.com', 'jimd87');

    expect(engineer.name).toBe('Jim');
    expect(engineer.id).toBe(3);
    expect(engineer.email).toBe('jim@doe.com');
    expect(engineer.github).toBe('jimd87');
});