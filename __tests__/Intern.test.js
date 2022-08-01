// link to Intern.js
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Jaden', 7, 'jaden@doe.com', 'UNC-Chapel Hill');

    expect(intern.name).toBe('Jaden');
    expect(intern.id).toBe(7);
    expect(intern.email).toBe('jaden@doe.com');
    expect(intern.school).toBe('UNC-Chapel Hill');
});

test('creates intern methods', () => {
    const intern = new Intern('Jaden', 7, 'jaden@doe.com', 'UNC-Chapel Hill');

    expect(intern.getName()).toBe('Jaden');
    expect(intern.getId()).toBe('7'); // no longer number in template literal
    expect(intern.getEmail()).toBe('jaden@doe.com');
    expect(intern.getSchool()).toBe('UNC-Chapel Hill');
    expect(intern.getRole()).toBe('Intern');
});