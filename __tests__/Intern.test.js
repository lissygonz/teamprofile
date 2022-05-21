const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('create an intern object', () => {
    const intern = new Intern('Khloe')
});

test('set school with constructor', () => {
    const testValue = 'Spelman';
    const e = new Intern('Khloe', 1, 'intern@workemail.com', testValue);
    expect(e.school).toBe(testValue);
});

test('get school with getSchool method', () => {
    const testValue = 'Spelman';
    const e = new Intern('Khloe', 1, 'intern@workemail.com', testValue);
    expect(e.getSchool()).toBe(testValue);
});

test('getRole return Intern', () =>{
    const testValue = 'Intern';
    const e = new Intern('Khloe', 1, 'intern@workemail.com'. testValue);
    expect(e.getRole()).toBe(testValue);
});