const Employee = require('./Employee');

class Engineer extends Employee {
    //Engineer Constructor

    constructor(name, id, github) {
    super(name, id, email);
    this.github = github;
    }

    
getGitHub() {
    return this.github;
}

getRole() {
    return 'Engineer';
}

}

module.exports = Engineer;