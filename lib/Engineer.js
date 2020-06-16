// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer{
    constructor(github){
        this.github = "GitHubUser"
    }
    getRole(){
        return "Engineer"
    }
    getGithub(){
        return "GitHubUser"
    }
}

module.exports = Engineer