// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern{
    constructor(school){
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