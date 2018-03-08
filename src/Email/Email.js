var AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
AWS.config.update({
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  },
});
const ses = new AWS.SES({ apiVersion: '2010-12-01' });

export const sendEmail = (name = '', email = '', subject = '', phone = '') => {
  var constructedParams = {
    Destination: {
      ToAddresses: ['PlayfulPetsColumbus@gmail.com'],
    },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `Name: ${name} \nEmail: ${email} \nPhone: ${phone} \nSubject: ${subject}`,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Inquiry from website',
      },
    },
    Source: 'PlayfulPetsColumbus@gmail.com' /* required */,
  };

  const emailPromise = ses.sendEmail(constructedParams).promise();

  return emailPromise
    .then(function(data) {
      return true;
    })
    .catch(function(err) {
      console.error(err, err.stack);
      return false;
    });
};
