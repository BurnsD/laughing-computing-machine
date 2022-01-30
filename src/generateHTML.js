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
    newPage.push(
        employees.filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => genereateEngineer(engineer))
        .join(' ')
    )
    newPage.push(
        employees.filter(employee => employee.getRole() === 'Manager')
        .map(manager => genereateIntern(manager))
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
        
                <div class="">
                    <div class="">
                        <div class="">
                            <h3 class=""></h3>
                            <h4 class="">Intern</h4><i class=""></i>
                        </div>
                        <div class="card-body">
                            <p class="id">ID: </p>
                            <p class="email">Email:<a href="mailto:"></a></p>
                            <p class="school">School: </p>
                        </div>
                    </div>
                </div>


            </div> 
        </div>
    </div>
</body>
</html>  
    `
}