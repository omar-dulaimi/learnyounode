const http = require("http");
const fs = require("fs");
const [, , port, filePath] = process.argv;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  fs.createReadStream(filePath, { encoding: "utf-8" }).pipe(res);
});
server.listen(port);
