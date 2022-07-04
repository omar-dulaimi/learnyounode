const args = process.argv;
const numbers = args.slice(2).map((value) => Number(value));
const result = numbers.reduce((current, result) => {
  return result + current;
}, 0);
console.log(result);
