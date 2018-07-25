var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res){
  //create a variable
  var pasr = url.parse(req.url, true).query;
  var filename = pasr.filename;

  fs.readFile(pasr.filename, function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  })
}).listen(8080);
