const fs = require("fs");
const path = require("path");

module.exports = (filePath, extension, cb) => {
  fs.readdir(filePath, (err, files) => {
    if (err) return cb(err);
    const list = files.filter(function (file) {
      return path.extname(file) === "." + extension;
    });
    return cb(null, list);
  });
};
