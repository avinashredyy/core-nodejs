//Readline module is used in order to take input from the command line
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let answer = num1 + num2;

//.question() is an inbuilt method of ReadLine module to ask a question in the CLI
rl.question(`What is the sum of ${num1} + ${num2} \n`, (userInput) => {
  if (userInput.trim() == answer) {
    //.close() is an inbuilt method of ReadLine module to close the connection
    rl.close();
  } else {
    //.setPrompt() is an inbuilt method of ReadLine module to just prompt a string on the CLI
    rl.setPrompt(`Wrong answer. Please try again! \n`);
    //.prompt() is an inbuilt method of ReadLine module to prompt the .question() on the CLI again
    rl.prompt();
    //"line" is an eventemiiter which is triggered when .prompt() executes
    rl.on("line", (userInput) => {
      if (userInput.trim() == answer) {
        rl.close();
      } else {
        rl.setPrompt(`Wrong answer. Please try again! \n`);
        rl.prompt();
      }
    });
  }
});

//this event emitter executes when rl.close() is called
rl.on("close", () => {
  console.log(`Correct answer!!!`);
});

module.exports = rl;
