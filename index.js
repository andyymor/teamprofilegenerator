const inqurier = require('inquirer');
const path= require('path');
const fs= require('fs');

const Manager= require('./lib/Manager');
const Intern= require('./lib/Intern');
const Engineer= require('./lib/Engineer');

const output_directory= path.resolve(__dirname,'dist');
const output_path= path.join(output_directory,"index.html")
const render = require('./source/template.js');
var teamMembers= [];
//functions
 var addManager = () => {

};

var addEngineer = () => {

};

var addIntern = () => {

};
//to add a new memeber
var createTeam = () => {

};
//renders whole team
var buildTeam = () => {
if(!fs.existsSync(output_directory)){
    fs.mkdirSync(output_directory);
}
fs.writeFileSync(output_path,render(teamMembers),'utf-8');
};