// Link with Employee File
const Employee = require('./Employee');

// Engineer
class Engineer extends Employee {
    constructor (name, id, email, gitHub){
        super(name, id, email)
        this.gitHub = gitHub;
    }
    // GitHub
    getGitHub() {
        return this.gitHub
    }
    // Returns Role Type as Engineer
    getRole(){
        return 'Engineer'
    }
};
// Export
module.exports = Engineer;