const Intern = require('../lib/Intern');

describe('Engineer', () => {
    it('should return the name of the intern', () => {
        const name = new Intern('Abdale', 5, 'cabdale989@gmail.com', 'KU')
        expect(name.getName()).toEqual('Abdale');
    })

    it('should return the id of the intern', () => {
        const id = new Intern('Abdale', 5, 'cabdale989@gmail.com', 'KU')
        expect(id.getId()).toEqual(5);
    })

    it('should return the email of the intern', () => {
        const email = new Intern('Abdale', 5, 'cabdale989@gmail.com', 'KU')
        expect(email.getEmail()).toEqual('cabdale989@gmail.com')
    })

    it('should return the school of the intern', () => {
        const school = new Intern('Abdale', 5, 'cabdale989@gmail.com', 'KU')
        expect(school.getSchool()).toEqual('KU')
    })
})