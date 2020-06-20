const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const employees = []
const questions = [
    {
        message: "What Role Does the Employee Have on the Team?",
        name: "role",
        type: 'list',
        choices: ["Engineer", "Intern", "Manager"]
    },
    {
        message: "What is the Employee's Name?",
        name: "name",
        type: "input",
    },
    {
        message: "What is the Employee's Email?",
        name: "email",
        type: "input",
    },
    {
        message: "What is the Employee's ID Number?",
        name: "id",
        type: "input",
    },


];
function promptUser() {
    inquirer.prompt({
        message: "What Role Does the Employee Have on the Team?",
        name: "role",
        type: 'list',
        choices: ["Engineer", "Intern", "Manager"]
    })
        .then(answers => {
            if (answers.role === "Intern") {
                addIntern()
            }
            if (answers.role === "Engineer") {
                addEngineer()
            }
            if (answers.role === "Manager") {
                addManager()
            }
        })
}
function addIntern() {
    inquirer.prompt([
        {
            message: "What is the Employee's Name?",
            name: "name",
            type: "input",
        },
        {
            message: "What is the Employee's Email?",
            name: "email",
            type: "input",
        },
        {
            message: "What is the Employee's ID Number?",
            name: "id",
            type: "input",
        },
        {
            message: "What School did the Intern Attend?",
            name: "school",
            type: "input",
        },
        {
            message: "Would You Like to Add Another Employee?",
            name: "nextEmployee",
            type: "confirm",
        }
    ])
        .then(answers => {
            let { name, id, email, school } = answers
            let employee = new Intern(name, id, email, school)
            employees.push(employee)
            if (answers.nextEmployee) {
                promptUser()
            }
            else {
                writeToFile()
            }
        })
}
function addEngineer() {
    inquirer.prompt([
        {
            message: "What is the Employee's Name?",
            name: "name",
            type: "input",
        },
        {
            message: "What is the Employee's Email?",
            name: "email",
            type: "input",
        },
        {
            message: "What is the Employee's ID Number?",
            name: "id",
            type: "input",
        },
        {
            message: "What is the Employee's GitHub Username?",
            name: "username",
            type: "input",
        },
        {
            message: "Would You Like to Add Another Employee?",
            name: "nextEmployee",
            type: "confirm",
        }
    ])
        .then(answers => {
            let { name, id, email, username } = answers
            let employee = new Engineer(name, id, email, username)
            employees.push(employee)
            if (answers.nextEmployee) {
                promptUser()
            }
            else {
                writeToFile()
            }
        })
}
function addManager() {
    inquirer.prompt([
        {
            message: "What is the Employee's Name?",
            name: "name",
            type: "input",
        },
        {
            message: "What is the Employee's Email?",
            name: "email",
            type: "input",
        },
        {
            message: "What is the Employee's ID Number?",
            name: "id",
            type: "input",
        },
        {
            message: "What is the Manager's Office Number",
            name: "officenumb",
            type: "input",
        },
        {
            message: "Would You Like to Add Another Employee?",
            name: "nextEmployee",
            type: "confirm",
        }
    ])
        .then(answers => {
            let { name, id, email, officenumb } = answers
            let employee = new Manager(name, id, email, officenumb)
            employees.push(employee)
            if (answers.nextEmployee) {
                promptUser()
            }
            else {
                writeToFile()
            }
        })
}
promptUser()

function writeToFile() {
    fs.writeFile(outputPath, render(employees), function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("File generated!");
        }
    })
};
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
