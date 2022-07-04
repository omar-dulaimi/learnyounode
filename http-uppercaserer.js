const http = require("http");
const map = require("through2-map");
const [, , port] = process.argv;

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    req
      .pipe(
        map((chunk) => {
          return chunk.toString().toUpperCase();
        })
      )
      .pipe(res);
  }
});
server.listen(port);
