const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

//This is where we define the logic for what needs to happen when the event "sum" is triggered
eventEmitter.on("sum", (num1, num2) => {
  console.log(
    `The sum event has occured and the sum of the inputs is: ${num1 + num2}`
  );
});

module.exports = eventEmitter;
