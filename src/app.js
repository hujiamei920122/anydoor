const http = require('http');
const conf = require('./config/defaultConfig');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('contentType', 'text/plain');
  res.end('hello world');
});

server.listen(conf.port, conf.hostname, () => {
  const addr = `http://${conf.hostname}:${conf.port}`;
  console.log(addr);
})