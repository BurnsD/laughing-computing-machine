const { test, expect } = require('@jest/globals');
const { number } = require('yargs');
const Manager = require('../lib/Manager');

// Make Function to retrieve Office Number
test('creates Manager', () => {
    const manager = new Manager('Name here', "001", 'Test@notreal.com', 1)

    expect(manager.officeNumber).toEqual(expect.any(number))
});

// Make function that returns role as Manager
test('Test Role', () => {
    const manager = new Manager('Name here', "001", 'Test@notreal.com');

    expect(manager.getRole()).toEqual("Manager");
});