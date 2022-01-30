// Link with Employee File
const Employee = require('./Employee');

// Engineer
class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email)
        this.github = github;
    }
    // GitHub
    getGitHub() {
        return this.github
    }
    // Returns Role Type as Engineer
    getRole(){
        return 'Engineer'
    }
};
// Export
module.exports = Engineer;