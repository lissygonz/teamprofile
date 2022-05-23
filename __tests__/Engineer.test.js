const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');


//Engineer
test('creates an engineer object', () => {
    const engineer = new Engineer('Samuel');
});


//Github
test('set github accoint with constructor', () => {
const testValue = 'GitHubAccount';
const e = new Engineer('Samuel', 1 , 'engineer@workemail.com', testValue);
expect(e.getGitHub()).toBe(testValue);
});

//getRole
test('getRole value to be Engineer', () => {
    const testValue = "Engineer";
    const e = new Engineer('Samuel', 1, 'engineer@workemail.com', testValue);
    expect(e.getRole()).toBe(testValue);
});