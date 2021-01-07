const http = require("http");

//Creating a server for path '/'
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World!");
    res.end();
  } else {
    res.write("Not the root path");
    res.end();
  }
});

//Listening to requests on port 3000
server.listen("3000");

module.exports = server;
