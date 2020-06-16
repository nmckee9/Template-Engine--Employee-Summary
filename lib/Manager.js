// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager{
    constructor(officeNumber){
        this.officeNumber = 100
    }
    getRole(){
        return "Manager"
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager