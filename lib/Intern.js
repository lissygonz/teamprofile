const Employee = require('./Employee');

class Intern extends Employee{

    //Intern Constructor
    constructor(name, id, email, school) {
        super(name, id, email);
    }

    getSchool() {
        return this.school;
        }

        getRole() {
            return 'Intern';
        }
}

module.exports = Intern;