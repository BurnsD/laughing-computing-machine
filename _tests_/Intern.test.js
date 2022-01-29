const { test, expect } = require('@jest/globals');
const { exp } = require('prelude-ls');
const Intern = require('../lib/Intern');

// Make function to retrieve school 
test('Retrieves School name', () => {
    const school = 'school name'
    const employeeObject = new Intern('Name here', 001, 'Test@notreal.com', school);

    expect(employeeObject.getSchool()).toBe(school)
});

// Make function that returns role as Intern
test('Test Role', () => {
    const returnRole = 'Intern'
    const employeeObject = new Intern('Name here', 001, 'Test@notreal.com', school)

    expect(employeeObject.getRole()).toBe(returnRole)
});