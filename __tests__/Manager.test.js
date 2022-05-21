const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager')


//Manager
test('creates a manager object', () => {
    const manager = new Manager('Jose')
});

//OfficeNumber
test('set office number with constructor', () => {
    const testValue = 100;
    const e = new Manager('Jose', 1, 'manager@workemail.com', testValue);
    expect(e.officeNumber).toBe(testValue);
});


//OfficeNumber method
test('get office Number with getOfficeNumber method', () => {
    const testValue = 100;
    const e = new Manager('Jose', 1, 'manager@workemail.com', testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

//getRole manager
test('getRole return Manager', () => {
    const testValue = 'Manager';
    const e = new Manager('Jose', 1, 'manager@workemail.com', 100);
    expect(e.getRole()).toBe(testValue);
});