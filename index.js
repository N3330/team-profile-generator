const inquirer = require('inquirer');

const mainMenu = () => {
    inquirer.prompt({
        type: "list",
        name: "emptype",
        message: "What type of employee would you like to create?",
        choices: ["Engineer", "Intern", "Manager", "Done"]
    }).then (answer =>{
        console.log(answer);
        if (answer.emptype === "Engineer") {
            console.log("Ask Engineer Questions");
        } else if (answer.emptype === "Intern") {
            console.log("Ask Intern Questions");
        } else if (answer.emptype === "Manager") {
           console.log("Ask Manager Questions"); 
        } else {process.exit()}
    })
}

// ask engineer function
// ask manager function
// ask intern fuction
mainMenu();