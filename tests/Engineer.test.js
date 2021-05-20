const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should return the name of the Engineer', () => {
        const name = new Engineer('Abdale', 5, 'cabdale989@gmail.com', 'Abdale88')
        expect(name.getName()).toEqual('Abdale');
    })

    it('should return the id of the Engineer', () => {
        const id = new Engineer('Abdale', 5, 'cabdale989@gmail.com', 'Abdale88')
        expect(id.getId()).toEqual(5);
    })

    it('should return the email of the Engineer', () => {
        const email = new Engineer('Abdale', 5, 'cabdale989@gmail.com', 'Abdale88')
        expect(email.getEmail()).toEqual('cabdale989@gmail.com')
    })

    it('should return the github of the Engineer', () => {
        const github = new Engineer('Abdale', 5, 'cabdale989@gmail.com', 'Abdale88')
        expect(github.getGithub()).toEqual('Abdale88')
    })
})