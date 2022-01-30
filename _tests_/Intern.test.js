const { test, expect } = require('@jest/globals');
const { exp } = require('prelude-ls');
const Intern = require('../lib/Intern');

// Make function to retrieve school 
test('Retrieves School name', () => {
    const intern = new Intern('Name here', "001", 'Test@notreal.com', 'school');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Make function that returns role as Intern
test('Test Role', () => {
    const intern = new Intern('Name here', "001", 'Test@notreal.com', 'school');

    expect(intern.getRole()).toBe('Intern')
});