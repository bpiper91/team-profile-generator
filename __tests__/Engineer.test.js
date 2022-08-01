// link to Engineer.js
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Jim', 3, 'jim@doe.com', 'jimd87');

    expect(engineer.name).toBe('Jim');
    expect(engineer.id).toBe(3);
    expect(engineer.email).toBe('jim@doe.com');
    expect(engineer.github).toBe('jimd87');
});

test('creates engineer methods', () => {
    const engineer = new Engineer('Jim', 3, 'jim@doe.com', 'jimd87');

    expect(engineer.getName()).toBe('Jim');
    expect(engineer.getId()).toBe('3'); // no longer number in template literal
    expect(engineer.getEmail()).toBe('jim@doe.com');
    expect(engineer.getGithub()).toBe('jimd87');
    expect(engineer.getRole()).toBe('Engineer');
});