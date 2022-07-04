const net = require("net");
const strftime = require("strftime");

const [, , port] = process.argv;

const server = net.createServer((socket) => {
  socket.write(strftime("%Y-%m-%d %H:%M") + "\n");
  socket.end();
});

server.listen(port);
