const handler = require("./mymodule");
const [, , path, extension] = process.argv;

handler(path, extension, (err, files) => {
  if (err) {
    console.log(err);
  } else {
    files.forEach((file) => {
      console.log(file);
    });
  }
});
