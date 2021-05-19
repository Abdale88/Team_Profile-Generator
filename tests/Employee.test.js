const fs = require('fs');
const Employee = require('../lib/Employee');

it("it should return name, id, and email", () =>{
    const employee = new Employee ('James', 4, 'cabdale989@gmail.com');
    expect(employee.getName()).toEqual('James');
})
it("it should return name, id, and email", () =>{
    const employee = new Employee ('James', 4, 'cabdale989@gmail.com');
    expect(employee.getId()).toEqual(4);
 
})
it("it should return name, id, and email", () =>{
    const employee = new Employee ('James', 4, 'cabdale989@gmail.com');
    expect(employee.getEmail()).toEqual('cabdale989@gmail.com');
})