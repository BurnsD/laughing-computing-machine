// Test Passed!

const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

// Make Function to retrieve GitHub 
test('Retrieves GitHub username' , () => {
    const testGH = "username"
    const employeeObject = new Engineer('Name here', "001", 'Test@notreal.com', testGH);
    expect(employeeObject.getGitHub()).toBe(testGH)
});

// Make function that returns role as Engineer
test('Test Role.', () => {
    const returnRole = "Engineer";
    const employeeObject = new Engineer('Name here', "001", 'Test@notreal.com', "testGH");
    expect(employeeObject.getRole()).toBe(returnRole)
});