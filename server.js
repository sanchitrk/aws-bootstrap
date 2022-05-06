// noinspection HttpUrlsUsage

const { hostname } = require("os");
const http = require("http");

const message = `Hello World from ${hostname()}\n`;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(message);
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname()}:${port}/`);
});
