var myhttpmodule = require('http');

myhttpmodule.createServer(function (req, res){
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end('Welcome to Uki. i am Dimosian');
}).listen(8080);
