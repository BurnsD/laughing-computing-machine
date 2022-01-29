const { test, expect } = require('@jest/globals');
const { number } = require('yargs');
const Manager = require('../lib/Manager');

// Make Function to retrieve Office Number
test('Retrieve Office Number', () => {
    const Manager = new Manager('Name here', 001, 'Test@notreal.com', 1)

    const officeNumber = "1"
    const employeeObject = new Manager('Name here', 001, 'Test@notreal.com', officeNumber);
    expect(employeeObject.officeNumber).toEqual(expect.any(number))
});

// Make function that returns role as Manager
test('Test Role', () => {
    const manager = new Manager('Name here', 001, 'Test@notreal.com');

    expect(manager.getRole()).toEqual("Manager");
})