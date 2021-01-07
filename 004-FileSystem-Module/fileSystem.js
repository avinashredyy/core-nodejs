const fs = require("fs");

//We create and write to that file here
fs.writeFile("example.txt", "Example text", "utf8", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`File created.`);
    fs.readFile("example.txt", "utf8", (data, err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  }
});

//We can rename a pre-existing file with .rename()
// fs.rename("example.txt", "newexample.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`Successfully renamed the file!`);
//   }
// });

//We can append data to our existing file with .appendFile()
// fs.appendFile("example.txt", "Appended Data", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`Successfully appended data to file.`);
//   }
// });

//We can delete the file with .unlink()
// fs.unlink("example.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`File deleted.`);
//   }
// });

module.exports = fs;
