var readlineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log;

var q1 = {
  q :"Where do I live",
  ans : "Bangalore"
}
var q2 = {
  q : "My fav superhero",
  ans : "Dhruv"
}

var questions = [q1,q2];
var score = 0;
function compute(no){
  log(chalk.blue(no.q));
  answer = readlineSync.question("Your answer : ");
  if(answer === no.ans){
    log(chalk.bold.green("Correct!!"))
    score += 1;
  }
  else{
    log(chalk.bold.red("Wrong :("));
  }
  log(chalk.bgYellow("Score : "+score));
}
for(var i = 0; i < questions.length; i++){
    compute(questions[i]);
}
log(chalk.bold.bgGreen("*******************************"));
log(chalk.bold.bgGreen("You scored total "+score+" points"));