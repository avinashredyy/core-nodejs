//001-Module-ImportExport: Importing functions/variables from importExport.js
// const importExport = require("./001-Module-ImportExport/importExport");
// console.log(`Sum is: ${importExport.sum(1, 2)}`);
// console.log(`Value of Pi is: ${importExport.piValue}`);

//002-Event-Emitter: Example of how to create and trigger an event using EventEmitter
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

//This is where we define the logic for what needs to happen when the event "sum" is triggered
eventEmitter.on("sum", (num1, num2) => {
  console.log(
    `The sum event has occured and the sum of the inputs is: ${num1 + num2}`
  );
});

//This is how we trigger an event called "sum" which is defined above
eventEmitter.emit("sum", 1, 2);
