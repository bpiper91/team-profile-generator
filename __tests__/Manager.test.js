// link to Manager.js
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Julia', 1, 'julia@doe.com', 104);

    expect(manager.name).toBe('Julia');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('julia@doe.com');
    expect(manager.office).toBe(104);
});

test('creates manager methods', () => {
    const manager = new Manager('Julia', 1, 'julia@doe.com', 104);

    expect(manager.getName()).toBe('Julia');
    expect(manager.getId()).toBe('1'); // no longer number in template literal
    expect(manager.getEmail()).toBe('julia@doe.com');
    expect(manager.getRole()).toBe('Manager');
});