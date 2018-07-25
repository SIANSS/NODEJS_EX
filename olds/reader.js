var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
  var filename = url.parse(req.url, true).query;


  fs.readFile("'"+filename.filer+"'", function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);
