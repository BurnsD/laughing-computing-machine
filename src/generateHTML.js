// Function for Generating HTML
const generatePage = function (employees) {
    // Manager
    const generateManager = function (manager) {
        return `
        <div>
        <div class="em-card">
            <div class="header-em">
                <h3 class="em-name">${manager.name}</h3>
                <h4 class="role">Manager</h4>
            </div>
            <div class="body-em">
                <p class="id card-info">ID: ${manager.id}</p>
                <p class="email card-info">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="officeNum card-info"> Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
        </div>
        `
    }
    // Engineer
    const generateEngineer = function (engineer) {
        return `
        <div>
        <div class="em-card">
            <div class="header-em">
                <h3 class="em-name">${engineer.name}</h3>
                <h4 class="role">Engineer</h4>
            </div>
            <div class="body-em">
                <p class="id card-info">ID: ${engineer.id}</p>
                <p class="email card-info">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github card-info"> GitHub: <a href="https://github.com/${engineer.github}"></a> ${engineer.github}</p>
            </div>
        </div>
        </div>
        `
    }
    // Intern 
    const generateIntern = function (intern) {
        return `
        <div>
        <div class="em-card">
            <div class="header-em">
                <h3 class="em-name">${intern.name}</h3>
                <h4 class="role">Intern</h4>
            </div>
            <div class="body-em">
                <p class="id card-info">ID: ${intern.id}</p>
                <p class="email card-info">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school card-info"> School: ${intern.school}</p>
            </div>
        </div>
        </div>
        `
    }
    // Push to Roles to Page
    const newPage = [];
    newPage.push(
        employees.filter(employee => employee.getRole() === 'Manager')
        .map(manager => generateManager(manager))
        .join(' ')
    )
    newPage.push(
        employees.filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
        .join(' ')
    )
    newPage.push(
        employees.filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateIntern(intern))
        .join(' ')
    )
    // Return
    return newPage.join('')
}
// Export Employee information to Index
module.exports = employees => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="header-contianer">
        <div class="row">
            <div class="header">
                <h1 class="my-team">My Team</h1>
            </div>
        </div>
    </div>
    <div class="main-contianer">
        <div class="row">
            <div class="content-area">
            ${generatePage(employees)}
            </div> 
        </div>
    </div>
</body>
</html>  
    `
}