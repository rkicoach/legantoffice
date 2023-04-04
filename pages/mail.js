import React from 'react';
//var nodemailer = require('nodemailer');

/*  var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ankitprofessional07@gmail.com',
    pass: 'Chetu@123'
  }
});

var mailOptions = {
  from: 'ankitprofessional07@gmail.com',
  to: 'shashikantu@chetu.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); */

var Mailto = require('react-mailto');
var Mail = React.createClass({
  render: function () {
    return (
      <Mailto email="shashikantu@chetu.com" obfuscate={true}>
        Email me!
      </Mailto>
    );
  }
});
export default Mail;
