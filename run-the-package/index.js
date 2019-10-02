const cal = require('ardhi-calculator');

console.log("2 - (4 of type string) = ");
console.log(cal.minus(2,'4'));
console.log("(4 of type string) + (4 of type string) = ");
console.log(cal.plus('4','4'));
console.log("240 * 0.25 = ");
console.log(cal.times(240,0.25));
console.log("4 - 0.002");
console.log(cal.divide(4.0,002));

console.log("\ninput two number to be operated");

let questions = [
  "whats your 1st number?",
  "whats your 2nd number?"
];

let answers = []

function ask(questionNumber) {
  process.stdout.write('\n' + questions[questionNumber]);
  process.stdout.write(" > "); //same as console.log without new line
}

process.stdin.on('data', (data) => {
  console.log("ini data" + data)
  let dataString = data.toString().trim();
  if(dataString[0] == '\'' || dataString[0] == '\"') {
    console.log('masuk')
    answers.push( dataString.slice(1,data.length-2) );
  } else {
    answers.push( Number(data));
  }

  if(answers.length < questions.length) {
    ask(answers.length);
  } else {
    console.log("" + answers[0] + " (" + typeof answers[0] + ")" + " - " + answers[1] + " (" + typeof answers[1] + ")" + " = " + cal.minus(answers[0],answers[1]));
    console.log("" + answers[0] + " (" + typeof answers[0] + ")" + " + " + answers[1] + " (" + typeof answers[1] + ")" + " = " + cal.plus(answers[0],answers[1]));
    console.log("" + answers[0] + " (" + typeof answers[0] + ")" + " * " + answers[1] + " (" + typeof answers[1] + ")" + " = " + cal.times(answers[0],answers[1]));
    console.log("" + answers[0] + " (" + typeof answers[0] + ")" + " / " + answers[1] + " (" + typeof answers[1] + ")" + " = " + cal.divide(answers[0],answers[1]));
    console.log(cal.plus(3,'4'));
    process.exit();
  }
})

ask(0);
