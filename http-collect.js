const http = require("http");

const [, , url] = process.argv;

http
  .get(url, (res) => {
    res.setEncoding("utf8");
    let rawData = "";
    res.on("data", (chunk) => {
      rawData += chunk;
    });
    res.on("end", () => {
      console.log(rawData.length);
      console.log(rawData);
    });
  })
  .on("error", (e) => {
    console.error(e);
  });
