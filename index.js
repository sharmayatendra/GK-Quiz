var readlineSync = require("readline-sync");
var score = 0;
const chalk = require("chalk");
var userName = readlineSync.question(chalk.red("What is your Name? "));
console.log(chalk.blue("Welcome!! "+ userName));
console.log(chalk.red("It's a Quiz based upon some known facts!! "));


function play (question,answer){
  var userAnswer = readlineSync.question(question);
  if( userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("Great,Right Answer! "));
    score = score + 1;
  }else
  {
    console.log(chalk.red("Wrong Answer! "));
  }
    console.log("Current score: " + chalk.red(score));
    console.log(chalk.yellow("--------"));
}

var arr = [{
  question: "In which year India won ICC T-20 World Cup? ",
  answer: "2007"
},{
  question: "In which State GoldenTemple is situated? ",
  answer: "Punjab"
},{
  question: "What is the Brand Name of Sedan car Amaze? ",
  answer: "Honda"
},{
  question: "What is the capital of Portugal? ",
  answer: "Lisbon"
},{
  question: "Japanese currency name? ",
  answer: "Yen"
},{
  question: "National sports of India? ",
  answer: "Hockey"
},{
  question: "Full Form of NCR",
  answer: "National Capital Region"
}];

for (var i=0; i<arr.length; i++){
    var currentQuestion =arr[i];
    play(currentQuestion.question,currentQuestion.answer);
}
console.log(chalk.blue("You Scored: "+ score));
// var finalScore = score;
var highScore =[{
  name: "Yatendra",
  score: "7"
}]

for (var i=0; i<highScore.length; i++){
if(score>=highScore[i].score){
  console.log(chalk.green("You beat high score "));
}else{
  console.log(chalk.red("You didn't beat highscore "));
}
}
console.log(chalk.yellow("Highscore: "));
console.log(chalk.red("Yatendra: 7"));
console.log(chalk.green("Send me the screenshot of your score so that i can  update highscore!!"));
