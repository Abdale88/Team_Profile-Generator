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
    
    
    function htmlEngineer(){
        if(arrEngineer.length > 0){
            let eng = ``
             for(let i = 0; i < arrEngineer.length; i++){
            
              
                eng += `
                <div class="p-3 mb-2 bg-info text-white card">
                <div class="p-3 mb-2 bg-dark text-white card-block">
                    <h4 class="p-3 mb-2 bg-info text-white card-title">Engineer</h4>
                    <p class="card-text">
                         Name: ${arrEngineer[i].name}
                    </p>
                    <p class="card-text">
                         ID: ${arrEngineer[i].id}
                    </p>
                    <p class="card-text">
                         <a href="mailto:${arrEngineer[i].email}">Email</a>
                    </p>
                    <p class="card-text">
                    <a href="https://github.com/${arrEngineer[i].github}">GitHub</a>
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
              return eng;
        }
    }
    
    
    function htmlIntern(){
        if(arrIntern.length > 0){
            let intObj = ``
             for(let i = 0; i < arrIntern.length; i++){
            
              
                intObj += `
                <div class="p-3 mb-2 bg-info text-white card">
                <div class="p-3 mb-2 bg-dark text-white card-block">
                    <h4 class="p-3 mb-2 bg-info text-white card-title">Intern</h4>
                    <p class="card-text">
                         Name: ${arrIntern[i].name}
                    </p>
                    <p class="card-text">
                         ID: ${arrIntern[i].id}
                    </p>
                    <p class="card-text">
                         <a href="mailto:${arrIntern[i].email}">Email</a>
                    </p>
                    <p class="card-text">
                         School: ${arrIntern[i].school}
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
              return intObj;
        }
    }
    
                
    function createMarkup(){
        
        
       const htmlMarkUp = 
        `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content=
                "width=device-width, initial-scale=1,shrink-to-fit=no">
        
            <!-- Bootstrap CSS -->
            <link rel="stylesheet" href=
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                    integrity=
        "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossorigin="anonymous">
                
            <link rel="stylesheet" href=
        "https://use.fontawesome.com/releases/v5.4.1/css/all.css"
                    integrity=
        "sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
                    crossorigin="anonymous">
        
            <title>Team Portfolio Generator</title>
        
        </head>
        
        <body>
        <h1  class="p-3 mb-2  text-green mx-auto" style="width: 200px;">My Team</h2>
    
            <div class="card-deck">
               ${htmlManager()} 
               ${htmlEngineer()}
               ${htmlIntern()}
               
            </div>
        
            <!-- Optional JavaScript -->
            <!-- jQuery first, then Popper.js, then Bootstrap JS -->
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                crossorigin="anonymous">
            </script>
            
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                crossorigin="anonymous">
            </script>
        
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
                integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                crossorigin="anonymous">
            </script>
        </body>
        
        </html>
        
        `
        writeToFile(htmlMarkUp);
    }
    
    manager();







