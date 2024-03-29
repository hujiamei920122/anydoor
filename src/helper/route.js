const promisify = require('util').promisify;
const fs = require('fs');
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);


module.exports = async function (req, res, filePath) {
  try{
    const stats = await stat(filePath);

    if (stats.isFile()) {
      res.statusCode = 200;
      res.setHeader('contentType', 'text/plain');
      fs.createReadStream(filePath).pipe(res);
    } else if (stats.isDirectory()) {
      const files = await readdir(filePath);
      res.statusCode = 200;
      res.setHeader('contentType', 'text/plain');
      res.end(files.join(','));
    }
  } catch (ex){
    res.statusCode = 404;
    res.setHeader('contentType', 'text/plain');
    res.end(`${filePath} is not a directory or file`);
  }
}