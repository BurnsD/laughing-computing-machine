// Link with Employee File
const Employee = require('./Employee');

// Manager 
class Manager extends Employee {
    constructor (name, id, email, officeNumber){
    super(name, id, email)
    this.officeNumber = officeNumber;
    }
    // Office Number
    getOfficeNumber() {
        return this.officeNumber
    }
    // Returns Role Type as Manager
    getRole() {
        return 'Manager'
    }
};
// Exports
module.exports = Manager;