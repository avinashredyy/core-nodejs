const fs = require("fs");
const readStream = fs.createReadStream("./example.txt", "utf8");
const writeStream = fs.createWriteStream("./example2.txt");

//Reads data from the given file and writes it to the mentioned file above.
readStream.on("data", (dataChunk) => {
  writeStream.write(dataChunk);
});

//The above code can also be achieved using .pipe()
// readStream.pipe(writeStream);

module.exports = readStream;
