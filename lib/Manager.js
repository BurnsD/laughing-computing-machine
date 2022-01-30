// Link with Employee File
const Employee = require('./Employee');

// Manager 
class Manager extends Employee {
    constructor (name, id, email, officeNumber){
    super(name, id, email)
    // Office Number
    this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager'
    }
};
// Exports
module.exports = Manager;