const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const path = require('path');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);
const htmlGenerator = require('./source/htmlgenerator')
teamArray = [];

const mainMenu = () => {
    inquirer.prompt({
        type: "list",
        name: "emptype",
        message: "What type of employee would you like to create?",
        choices: ["Engineer", "Intern", "Manager", "Done"]
    }).then(answer => {
        console.log(answer);
        if (answer.emptype === "Engineer") {
            askEngineer();
        } else if (answer.emptype === "Intern") {
            askIntern();
        } else if (answer.emptype === "Manager") {
            askManager();
        } else {  
          writeFile(path.join(__dirname, "/dist/team.html"), htmlGenerator(teamArray))
          
        }
    })
}

const askEngineer = () => {
    inquirer.prompt ([
    
        {
          type: "input",
          name: "name",
          message: "What is the engineer's name?"
        },
    
        {
          type: "input",
          name: "employeeId",
          message: "What is the engineer's employee ID number?"
        },
    
        {
          type: "input",
          name: "email",
          message: "What is the engineer's email address?"
        },
    
        {
          type: "input",
          name: "github",
          message: "What is the engineer's Github username?"
        }
    
      ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.github);
        teamArray.push(engineer);
        mainMenu();
      });
    
};

const askManager = () => {
    inquirer.prompt ([
    
        {
          type: "input",
          name: "name",
          message: "What is the manager's name?"
        },
    
        {
          type: "input",
          name: "employeeId",
          message: "What is the manager's employee ID number?"
        },
    
        {
          type: "input",
          name: "email",
          message: "What is the manager's email address?"
        },
    
        {
          type: "input",
          name: "officeNumber",
          message: "What is the manager's office number?"
        }
    
      ]).then(answers => {
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamArray.push(manager);
        mainMenu();
      });
    
};

const askIntern = () => {
    inquirer.prompt ([
    
        {
          type: "input",
          name: "name",
          message: "What is the intern's name?"
        },
    
        {
          type: "input",
          name: "employeeId",
          message: "What is the intern's employee ID number?"
        },
    
        {
          type: "input",
          name: "email",
          message: "What is the intern's email address?"
        },
    
        {
          type: "input",
          name: "school",
          message: "What is the intern's school name?"
        }
    
      ]).then(answers => {
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        teamArray.push(intern);
        mainMenu();
      });
    
};



mainMenu();