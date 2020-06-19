// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, gitHubUser){
        super(name, id, email);
        this.school = "UCLA"
    }
    getRole(){
        return "Intern"
    }
    getSchool(){
        return "UCLA"
    }
}

module.exports = Intern