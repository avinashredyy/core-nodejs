//001-Module-ImportExport: Importing functions/variables from importExport.js
// const importExport = require("./001-Module-ImportExport/importExport");
// console.log(`Sum is: ${importExport.sum(1, 2)}`);
// console.log(`Value of Pi is: ${importExport.piValue}`);

//002-Event-Emitter: Example of how to create and trigger an event using EventEmitter
const eventEmitter = require("./002-Event-Emitters/eventEmitter");
//This is how we trigger an event called "sum" which is defined above
eventEmitter.emit("sum", 1, 2);
