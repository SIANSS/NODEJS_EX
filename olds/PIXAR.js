/// Create a File and Read File from URL address if exists


var http = require('http');
var url = require('url');
var fs = require('fs');

fs.appendFile(Texer.txt, 'Hi Theoe Cowboy !', function (err){
  if(err) return "Wrong Filename";
  console.log('Saved!');
})

// http.createServer(function (req, res){
//   fs.readFile('Texas.txt', function(err, data){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   })
// }).listen(8080);

// http.createServer(function (req, res){
//   //create a variable
//   var pasr = url.parse(req.url, true).query;
//   var filename = pasr.chsksum;
//
//   fs.readFile(pasr.chsksum, function(err, data){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   })
// }).listen(8080);
