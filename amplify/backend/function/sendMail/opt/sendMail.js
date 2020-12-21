const AWS = require('aws-sdk');

const SES_CONFIG = {
  accessKeyId: 'ACCESS_KEY',
  secretAccessKey: 'SECRET_KEY',
  region: 'eu-west-1',
};

const AWS_SES = new AWS.SES(SES_CONFIG);

const MAIL_CONFIG = {
  mailFrom: 'MAIL_FROM',
}

let sendEmail = (recipientEmail) => {
  let params = {
    Source: MAIL_CONFIG.mailFrom,
    Destination: {
      ToAddresses: [
        MAIL_CONFIG.mailFrom,
      ],
    },
    ReplyToAddresses: [],
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: recipientEmail.html,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: recipientEmail.subject,
      },
    },
  };
  return AWS_SES.sendEmail(params).promise();
};

module.exports = sendEmail;
