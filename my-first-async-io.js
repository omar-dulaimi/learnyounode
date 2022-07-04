const { readFile } = require("fs");

const filePath = process.argv[2];
readFile(filePath, (err, buffer) => {
  if (err) {
    console.log(err.message);
  } else {
    const contents = buffer.toString();
    const linesCount = contents.split("\n").length - 1;
    console.log(linesCount);
  }
});
