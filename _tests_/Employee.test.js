const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Employee = require('../lib/Employee');

// Create Employee Object
test('create employee object', () => {
    const employee = new Employee()

    expect(typeof(employee)).toBe('object');
});

// Make function to retrieve name and add to object
test('add name to employee object.', () => {
    const newName = "Name here";
    const employeeObject = new Employee(newName);
    expect(employeeObject.getName()).toBe(newName);
});

// Make function to retrieve employee ID
test('add id to employee object.', () => {
    const newID = 001;
    const employeeObject = new Employee("Name here", newID);
    expect(employeeObject.getID()).toBe(newID)
});

// Make function to retrieve E-mail
test('add email to employee object.', () => {
    const newEmail = "Test@notreal.com"
    const employeeObject = new Employee("Name here", newEmail);
    expect(employeeObject.getEmail()).toBe(newEmail)
});

// Make function that returns Employee Object
test('Test role.', () => {
    const returnRole = "Employee";
    const employeeObject = new Employee("Name here", "001", "Test@notreal.com");
    expect(employeeObject.getRole()).toBe(returnRole);
});