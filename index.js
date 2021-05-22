const inquirer = require('inquirer')
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');



const arrManager = [];
const arrEngineer = [];
const arrIntern = [];


const userChoices = [
    {
        type: "list",
        message: "Who do you want to add?",
        name: "choices",
        choices: ["Engineer", "Intern", "Exit"],
    },
]

function writeToFile(htmlData) {
fs.writeFile("index.html", htmlData, (err) =>
err ? console.error(err) : console.log("Success"),

);
}

function prompts() {
    inquirer.prompt(manager()).then(answers => {

        const {name, id, email, officeNumber} = answers;
        const manager = new Manager(name, id, email, officeNumber);
        arrManager.push(manager);
    
        function recursiveFunc() {
            
            inquirer.prompt(userChoices).then(answers => {
                
                
                if (answers.choices === "Engineer") {
                    inquirer.prompt(engineer()).then(answers => {
                        

                        const {name, id, email, github} = answers;
                        const engineer = new Engineer(name, id, email, github);
                        arrEngineer.push(engineer);
                        recursiveFunc()
                    });
                }
                if (answers.choices === "Intern") {
                    inquirer.prompt(intern()).then(internAnswers => {
                        // myFunc(internAnswers)
                        const {name, id, email, school} = internAnswers;
                        const intern = new Intern(name, id, email, school);

                        arrIntern.push(intern);

                        recursiveFunc()
                    });
                }
                if (answers.choices === "Exit"){
                    // fs.writeFile('README.md', teamMembers, (err) =>{
                        //     err ? console.error(err) : console.log('success')
                        // })     
                
                        
                        createMarkup();
                    

                    } 
                })
            }
            recursiveFunc();
        })
    }
    
    prompts();






