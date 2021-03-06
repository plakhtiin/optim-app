/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT *//*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const sendMail = require('/opt/sendMail');
// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  next();
});

/****************************
 * Example post method *
 ****************************/

app.post('/api/feedback', function(req, res) {
  const { name, contactType, phone, email, message } = req.body;
  let contactLine = '';
  if (contactType === 'email') {
    contactLine = `<p>Email: <a href="mailto:${email}">${email}</a></p>`;
  } else if (contactType === 'phone') {
    contactLine = `<p>Телефон: <a href="tel:${phone}">${phone}</a></p>`;
  }
  const html = `
  <p>Имя клиента: ${name}</p>
  ${contactLine}
  <p>Сообщение: ${message.split("\n").join("<br/>")}</p>`;

  const mailOptions = {
    subject: 'Связаться с клиентом',
    html,
  };

  return sendEmail(res, mailOptions);
});

app.listen(3000, function() {
  console.log('App started');
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;

function sendEmail(res, mailOptions) {
  return sendMail(mailOptions)
    .then(info => {
      res.headers = {
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods,Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
      };
      res.statusCode = 200;
      res.json({ success: 'post call succeed!' });
      console.log('Email sent: ' + info.response);
    })
    .catch(error => {
      res.statusCode = 400;
      res.json({ error: 'post call succeed!', msg: error });
      console.log('error:', error);
    });
}
