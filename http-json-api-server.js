const http = require("http");
const url = require("url");
const [, , port] = process.argv;

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    const parsedUrl = url.parse(req.url, true);
    const { iso } = parsedUrl.query;
    const date = new Date(iso);
    res.writeHead(200, { "Content-Type": "application/json" });
    if (parsedUrl.pathname === "/api/parsetime") {
      return res.end(
        JSON.stringify({
          hour: date.getHours(),
          minute: date.getMinutes(),
          second: date.getSeconds(),
        })
      );
    } else if (parsedUrl.pathname === "/api/unixtime") {
      return res.end(
        JSON.stringify({
          unixtime: +date,
        })
      );
    }
  }
  return res.end("Unsupported");
});
server.listen(port);
