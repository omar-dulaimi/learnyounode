const http = require("http");

const [, , url1, url2, url3] = process.argv;

const fetchUrl = (url, cb) => {
  http
    .get(url, (res) => {
      res.setEncoding("utf8");
      let rawData = "";
      res.on("data", (chunk) => {
        rawData += chunk;
      });
      res.on("end", () => {
        console.log(rawData);
        if (cb) {
          cb();
        }
      });
    })
    .on("error", (e) => {
      console.error(e);
    });
};

fetchUrl(url1, () => {
  fetchUrl(url2, () => {
    fetchUrl(url3);
  });
});
