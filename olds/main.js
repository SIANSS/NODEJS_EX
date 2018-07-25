var http = require('http');
var sums = require('./custom_module');

http.createServer(function (req, res){
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write("This is the sum of two numbers" + sums.sumNaverage(123, 321));
  res.end();
}).listen(8080);
