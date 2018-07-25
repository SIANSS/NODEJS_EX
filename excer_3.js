var http = require('http');
var filesys = require('fs');

// filesys.writeFile('ukinode.txt', 'It is a full scholarship based Accelerator program for Coding in Jaffna, Sri Lanka targeting students who has completed Advanced Level examinations and don’t have access to university education or any other form of vocational education.', function (err) {
//   if (err) throw err;
//   console.log('File Created');
// });

// filesys.appendFile('ukinode.txt', 'It is aimed to provide the necessary training to enter Computer Software industry or to start an IT startup. This is a joint initiative by Yarl IT Hub and SERVE Foundation. Yarl IT Hub has been functioning for the last five years as a not for profit social enterprise focusing on technology entrepreneurship in northern Sri Lanka and SERVE Foundation is a four year old foundation focusing on using technology to uplift secondary education standards in rural schools in northern Sri Lanka.', function (err){
//   if(err) throw err;
//   console.log('Paragraph Added');
// })

// filesys.rename('ukinode.txt', 'ukinodejsexercise1.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });

filesys.unlink('ukinodejsexercise1.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
})

http.createServer(function (req, res) {
  filesys.readFile('ukinodejsexercise1.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);
