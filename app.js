var express = require('express');
var path = require("path");
var app = express();

var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://phahle.koketso@gmail.com:200306351@smtp.gmail.com');

app.set("views", path.resolve(__dirname, "views"));
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

app.get('/default', function(req, res){
  res.render('pages/index');
});

app.get('/our_story', function(req, res){
  res.render('pages/our_story');
});

app.get('/register', function(req, res){
  res.render('pages/register');
});

app.get('/gallery', function(req, res){
  res.render('pages/gallery');
});

app.get('/accomodation', function(req, res){
  res.render('pages/accomodation');
});

app.get('/directions', function(req, res){
  res.render('pages/directions');
});

app.get('/contact', function(req, res)
{
  res.render('pages/contact');

      var mailOptions = {
          from: req.query.from, // sender address
          to: 'phahle.koketso@gmail.com', // list of receivers
          subject: req.query.subject, // Subject line
          text: req.query.text, // plaintext body
          html: '<b>'+ req.query.text + '</b>' // html body
       };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
     });
    // setup e-mail data with unicode symbols
  

});

//app.use(requestTime);
app.listen(3000);
