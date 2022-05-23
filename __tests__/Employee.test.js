const Employee = require('../lib/Employee');

//new employee
test('creates an employee object', () => {
    const employee = new Employee('Diana');
});

//ID
test('set id with constructor', () => {
    const testValue = 100;
    const e = new Employee('Diana', testValue);
    expect(e.id).toBe(testValue);
});


//Email
test('set email with constructor', () => {
    const testValue = 'employee@workemail.com';
    const e = new Employee('Diana', 1, testValue);
    expect(e.email).toBe(testValue);
});


//Gets role to ensure "Employee"
test('getRole() return Employee', () => {
    const testValue = 'Employee';
    const e = new Employee('Jason', 1, 'employee@workemail.com');
    expect(e.getRole()).toBe(testValue);
});

