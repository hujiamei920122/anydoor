const http = require('http');
const path = require('path');
const router = require('./helper/route');
const conf = require('./config/defaultConfig');

const server = http.createServer((req, res) => {
  const filePath = path.join(conf.root, req.url);
  router(req, res, filePath);
});

server.listen(conf.port, conf.hostname, () => {
  const addr = `http://${conf.hostname}:${conf.port}`;
  console.log(addr);
})