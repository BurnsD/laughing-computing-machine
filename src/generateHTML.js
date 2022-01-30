// Function for Generating HTML
const generatePage = function (employees) {
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
                <p class="school"> School: ${intern.school}</p>
            </div>
        </div>
        </div>
        `
    }
    // Engineer
    const genereateEngineer = function (engineer) {
        return `
        <div>
        <div>
            <div class="header">
                <h3 class="name">${engineer.name}</h3>
                <h4 class="role">Engineer</h4>
            </div>
            <div class="body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github"> GitHub: <a href="https://github.com/${engineer.github}"></a> ${engineer.github}</p>
            </div>
        </div>
        </div>
        `
    }
    // Manager
    const genereateManager = function (manager) {
        return `
        <div>
        <div>
            <div class="header">
                <h3 class="name">${manager.name}</h3>
                <h4 class="role">Manager</h4>
            </div>
            <div class="body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="officeNum"> Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
        </div>
        `
    }
    // Push to Roles to Page
    const newPage = [];
    newPage.push(
        employees.filter(employee => employee.getRole() === 'Intern')
        .map(intern => genereateIntern(intern))
        .join(' ')
    )


    // Return

}