// Function for Generating HTML
const generatePage = function (team) {
    // Intern 
    const genereateIntern = function (intern) {
        return `
        <div>
        <div>
            <div class="header">
                <h3 class="name">${intern.name}</h3>
                <h4 class="role">Intern</h4>
            </div>
            <div class="body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school"> SChool: ${intern.school}}</p>
            </div>
        </div>
        </div>
        `
    }
    // Engineer
    const genereateEngineer = function (engineer) {
        return `
        
        
        `
    }
    // Manager
    const genereateManager = function (manager) {
        return `
        
        
        `
    }
    // Push to Roles to Page

    // Return

}