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


    function manager() {
        const managerQues = [
            {
    
                type: "input",
                message: "What is the manager's name?",
                name: "name",
            },
            {
                type: "input",
                message: "what is the manager's id?",
                name: "id",
            },
    
            {
                type: "input",
                message: "What is the manager's email?",
                name: "email",
            },
    
            {
                type: "input",
                message: "What is the manager's office number?",
                name: "officeNumber",
            },
        ]
        return managerQues;
    }
    
    function engineer() {
        const engineerQues = [
            {
    
                type: "input",
                message: "What is the engineer's name?",
                name: "name",
            },
            {
                type: "input",
                message: "what is the engineer's id?",
                name: "id",
            },
    
            {
                type: "input",
                message: "What is the engineer's email?",
                name: "email",
            },
    
            {
                type: "input",
                message: "What is the engineer's github user name?",
                name: "github",
            },
        ]
        return engineerQues;
    }
    
    function intern() {
        const engineerQues = [
            {
    
                type: "input",
                message: "What is the intern's name?",
                name: "name",
            },
            {
                type: "input",
                message: "what is the intern's id?",
                name: "id",
            },
    
            {
                type: "input",
                message: "What is the intern's email?",
                name: "email",
            },
    
            {
                type: "input",
                message: "What school did the intern came from?",
                name: "school",
            },
        ]
        return engineerQues;
    }
    
    
    function htmlManager(){
       
    return `
    <div class="p-3 mb-2 bg-info text-white card">
    <div class="p-3 mb-2 bg-dark text-white card-block">
        <h4 class="p-3 mb-2 bg-info text-white card-title">Manager</h4>
        <p class="card-text">
             Manager Name: ${arrManager[0].name}
        </p>
        <p class="card-text">
             ID: ${arrManager[0].id}
        </p>
        <p class="card-text">
             <a href="mailto:${arrManager[0].email}">Email</a>
        </p>
        <p class="card-text">
            Office Number: ${arrManager[0].officeNumber}
        </p>
    
        <p class="card-text">
            <small class="text-muted">
                Last updated 3 mins ago
            </small>
        </p>
    </div>
    </div>
    `
    }
    






