const { readFileSync } = require("fs");

const filePath = process.argv[2];
const buffer = readFileSync(filePath);
const contents = buffer.toString();
const linesCount = contents.split("\n").length - 1;
console.log(linesCount);
