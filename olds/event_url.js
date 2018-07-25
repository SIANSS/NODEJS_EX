var http = require('http');
var fs = require('fs');
var url = require('url');
var events = require('events');
var eemiter = new events.EventEmitter();

http.createServer(function (req, res){
  var newfit = url.parse(req.url(), true).query;
  var animalhandler = function(){
    console.log("i "+ newfit + " when i see you");
  }

  eemiter.on(newfit, animalhandler);
  eemiter.emit(newfit)
}).listen(8080);
