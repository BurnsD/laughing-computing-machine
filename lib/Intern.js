// Link with Employee File
const Employee = require('./Employee');

// Intern
class Intern extends Employee {
    constructor (name, id, email, school){
        super(name, id, email)
        this.school = school;
    }
    // School
    getSchool() {
        return this.school
    }
    // Returns Role type as Intern
    getRole() {
        return 'Intern'
    }
};
// Export
module.exports = Intern;