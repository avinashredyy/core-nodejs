//001-Module-ImportExport: Importing functions/variables from importExport.js
// const importExport = require("./001-Module-ImportExport/importExport");
// console.log(`Sum is: ${importExport.sum(1, 2)}`);
// console.log(`Value of Pi is: ${importExport.piValue}`);

//002-Event-Emitter: Example of how to create and trigger an event using EventEmitter
// const eventEmitter = require("./002-Event-Emitters/eventEmitter");
//This is how we trigger an event called "sum" which is defined above
// eventEmitter.emit("sum", 1, 2);

//003-ReadLine-Module: Example of how to take input from CLI, apply logic and provide output
// const rl = require("./003-ReadLine-Module/readLine");

//004-FileSystem-Module: Example of how to create, read, rename, delete and append to a file.
// const fs = require("./004-FileSystem-Module/fileSystem.js");

//005-Streams-Module: Example of how to read a file in streams and write to another file. This helps
//when there is large amounts of data
// const readStream = require("./005-Streams-Module/streamsModule");

//006-HTTP-Module: Examples of how to create a server, serving static files and listening on a port
// const runServer = require("./006-HTTP-Module/httpModule");
const serveStaticFiles = require("./006-HTTP-Module/servingStaticFiles");
