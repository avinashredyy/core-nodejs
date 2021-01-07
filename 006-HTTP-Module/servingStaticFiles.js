const http = require("http");
const fs = require("fs");

//This is how we can create a server and serve static HTML files to the client
// http
//   .createServer((req, res) => {
//     const readStream = fs.createReadStream("./static/index.html");
//     res.writeHead(200, { "content-type": "text/html" });
//     readStream.pipe(res);
//   })
//   .listen(3000);

//This is how we can create a server and serve static JSON files to the client
http
  .createServer((req, res) => {
    const readStream = fs.createReadStream("./static/example.json");
    res.writeHead(200, { "content-type": "application/json" });
    readStream.pipe(res);
  })
  .listen(3000);

module.exports = http;
