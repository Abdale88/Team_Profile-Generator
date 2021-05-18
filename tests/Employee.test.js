const fs = require('fs');
const Employee = require('../lib/Employee');

it("it should return name, id, and email", () =>{
    const employee = new Employee ('Abdale', 4, 'cabdale989@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.Email).toEqual(expect.any(String));
})