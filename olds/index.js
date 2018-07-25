var http = require('http');
// var Fullname = require('./mymodule.js');
// var url = require('url');
var filesystem = require('fs');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'})
  // res.write(req.url);
  var q = url.parse(req.url, true).query;
  var txt = q.firstname + " " + q.lastname;
  res.end(txt);
}).listen(8080);
