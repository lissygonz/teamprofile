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


    //prompts user to create a manager when app starts
    function addManager() g{
        console.log("Let's start building your team's profile!");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What's the manager's name?",
                validate: answer => {
                    if (answer != ""){
                        return true;
                    }
                    return "Please enter the team's manager's name to continue";
                }
            },
            {
                type: "input",
                name:"managerId",
                message:"What's the manager's ID?",
                validate: answer => {
                    if (answer !== ""){
                        return true;
                    }
                    return "Please enter a valid Manager's ID to continue";
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
                    return "Email must be provided to continue.";
                }

            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What's the manager's office number? (format: 1111111111)",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if(pass){
                        return true;
                    }
                    return "Please enter a correct phone number to continue";
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArr.push(manager);
            idArr.push(answers.managerId);
            addTeam();
        });
    }
}
