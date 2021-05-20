const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('should return name the manager', () =>{
        const name = new Manager('Abdale', 5, 'cabdale989@gmail.com', 78);
        expect(name.getName()).toEqual('Abdale');
    })
    
    it('should return  id for the manager', () =>{
        const id = new Manager('Abdale', 5, 'cabdale989@gmail.com', 78);
        expect(id.getId()).toEqual(5);
    })
    it('should return email for the manager', () =>{
        const email = new Manager('Abdale', 5, 'cabdale989@gmail.com', 78);
        expect(email.getEmail()).toEqual('cabdale989@gmail.com');
    })
    it('should return office number for the manager', () =>{
        const officeNumber = new Manager('Abdale', 5, 'cabdale989@gmail.com', 78);
        expect(officeNumber.getOfficeNumber()).toEqual(78);
    })
})
