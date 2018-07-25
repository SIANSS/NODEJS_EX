var http = require('http');
var filesys = require('fs');

filesys.writeFile('head.html', 'you have got head', function (err){

  if (err) throw err;
  console.log('File Created');
});

filesys.writeFile('tail.html', 'you have got tail', function (err){
  if(err) throw err;
  console.log('File Created');
})
