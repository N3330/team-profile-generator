const buildManagerCard = (manager) => {
    return `
    <div class="card" style="width: 17rem;">
    <h2 class="card-title bg-success">Manager</h2>
    <ul class="list-group list-group-flush">
  <li class="list-group-item">Name:${manager.getName()}</li>
  <li class="list-group-item">ID:${manager.getId()}</li>
  <li class="list-group-item">Email:<span id="email"><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></span></li>
  <li class="list-group-item">Office Number:${manager.getOfficeNumber()}</li>
</ul>


    </div>`
}
const buildEngineerCard = (engineer) => {
    return `
    <li>${engineer.getName()}</li>`
}
const buildInternCard = (intern) => {
    return `
    <li>${intern.getName()}</li>`
}
const insertTeam = (team) => {
    html = []
    html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => buildManagerCard(manager)).join(''));
    html.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => buildEngineerCard(engineer)).join(''));
    html.push(team.filter(employee => employee.getRole() === "Intern").map(intern => buildInternCard(intern)).join(''));
    return html.join("");
}
const generateTeam = (team) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <title>New Biz Team</title>
</head>
<body>
<header>
<h1 class="text-center">New Biz Team</h1>
</header>
<div class="container d-flex justify-content-around">
  ${insertTeam(team)}  
  </div>
</body>
</html>`
};


module.exports = generateTeam;