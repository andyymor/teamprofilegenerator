var generateTeam = (team) => {
    var generateManager = (manager) => {
        return `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`
    }
    
    
    var generateIntern = (intern) => {

    }
    
    
    var generateEngineer = (engineer) => {

    }

    const html = []
    html.push(team
        .filter(employee => employee.getRole()=== "Manager") 
        .map(manager => generateManager(manager))
        );

        return html.join('')
        
};
module.exports= (team) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    </head>
    
    <body>
    <!-- HEADER -->
        <div class="container">
    
            <div class="row">
                <div class='col-12'>
                    <h1>MY TEAM</h1>
                </div>
            </div>
        </div>
    
    
    
    <!--WHERE CARDS WILL GO-->
        <div class='container'>
            <div class="employee-cards">
            ${generateTeam(team)}
            </div>
    
    
        </div>
    
    
    </body>
    
    </html>`
}
