// var mailsys = require('nodemailer');
//
// // http.createSever(function (req, res){
// //   res.writeHead(200, {'Content Type': 'text/html'});
// //
// // }).listen(8080);
//
// var transporter = mailsys.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'acsian7@gmail.com',
//     pass: 'sicar1996'
//   }
// });
//
// var mailOptions = {
//   from : 'acsian7@gmail.com',
//   to : 'acsian7@gmail.com',
//   subject: 'Nodemailer Test Run',
//   text: 'That was Easy!'
// };
//
// transporter.sendMail(mailOptions, function (error, info){
//   if(error){
//     console.log(error);
//   }
//   else{
//     console.log('Email sent'+ info.response);
//   }
// });


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'acsian7@gmail.com',
    pass: 'sicar1996'
  }
});

var mailOptions = {
  from: 'acsian7@gmail.com',
  to: 'acsian7@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
