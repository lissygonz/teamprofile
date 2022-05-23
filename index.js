// the Dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');

//Constructors
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const DIST_DIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(DIST_DIR, 'index.html');

const render = require('./src/page-template');
const { format } = require('path');
const { ADDRGETNETWORKPARAMS } = require('dns');

//creates arrays for team and id as place holders

const teamArr =[];
const idArr=[];

//Starts app
function initApp() {

    // Prompt user to create a manager when application starts
    function addManager() {
        console.log("Start building your team profile");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What's manager's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the team's manager's name.";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What's the manager's ID?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a valid Manager's ID.";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What's the manager's email?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Email address can't be empty.";
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What's the manager's office number? (format: 111111111)",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a correct phone number.";
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArr.push(manager);
            idArr.push(answers.managerId);
            addTeam();
        });
    }

    // addTeam function after finish with addManager
    function addTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "What would you like to add next?",
                choices: [
                    "Engineer",
                    "Intern",
                    "End application"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    generateHTML();
            }
        });
    }

    //adds Engineer
    function addEngineer() {
        inquirer.prompt ([
            {
                type: "input",
                name: "engineerName",
                message: "What's the engineer's name?",
                validate: answer => {
                    if (answer != "") {
                        return true;
                    }
                    return"Engineer's name is required to continue";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What's the engineer's email",
                validate: answer =>{
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a Engineer's ID to continue";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                vaildate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Email address is needed to continue"
                }
            },
            {
                type: "input",
                name:"engineerGithub",
                message: "What's the engineer's GitHub username";
                validate: answer => {
                    if (answer !== ""){
                        return true;
                    }
                    return "Please enter the engineer's GitHub username to continue";
                }
            }

        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArr.push(engineer);
            idArr.push(answers.engineerId);
            addTeam();
        });
    }

    //Add an Intern

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What's the intern's name?",
                validate: answer => {
                    if (answer !== ""){
                        return true;
                    }
                    return "Please enter Intern's name to continue";
                }
            },
            {
                type: "input",
                name: "internId",
                message:"What's the intern's id?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter Intern's ID to continue";
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "What's the intern's school?",
                vaildate: answer => {
                    if (anser !== "") {
                        return true;
                    }
                    return "Please entere a school to continue"
                }
                
            }
        ]).then(answers =>{
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        });
        
    }

    function generateHTML(){
        //create a dist directory for index.html
        if(!fs.existsSync(DIST_DIR)){
            fs.mkdirSync(DIST_DIR)
        }
        console.log("Generating Team Profile...");
        fs.writeFileSync(outputPath, render(teamArr), "utf-8");
    }
    addManager();
}
initApp();