// Employee 
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }
    // Returns Name from Input
    getName() {
        return this.name;
    }
    // Returns ID from Input
    getid() {
        return this.id;
    }
    // Returns Email from Input
    getEmail() {
        return this.email;
    }
    // Returns Role type as employee
    getRole() {
        return 'Employee';
    }
};
// Export
module.exports = Employee;