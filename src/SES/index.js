/* Getting Started with AWS SES v1 using node js. This part shows how to send email using SES */


// Load the AWS SDK for Node.js
const AWS = require("aws-sdk");

const ses = new AWS.SES({apiVersion: "2010-12-01"});
var params = {
  "Destination": {
    BccAddresses: [
      'STRING_VALUE',
      /* more items */
    ],
    CcAddresses: [
      'STRING_VALUE',
      /* more items */
    ],
    ToAddresses: [
      'STRING_VALUE',
      /* more items */
    ]
  },
  Message: {
    Body: {
      Html: {
        Data: 'STRING_VALUE',
        Charset: 'STRING_VALUE'
      },
      Text: {
        Data: 'STRING_VALUE',
        Charset: 'STRING_VALUE'
      }
    },
    Subject: {
      Data: 'STRING_VALUE',
      Charset: 'STRING_VALUE'
    }
  },
  Source: 'STRING_VALUE',
  ConfigurationSetName: 'STRING_VALUE',
  ReplyToAddresses: [
    'STRING_VALUE',
    /* more items */
  ],
  ReturnPath: 'STRING_VALUE',
  ReturnPathArn: 'STRING_VALUE',
  SourceArn: 'STRING_VALUE',
  Tags: [
    {
      Name: 'STRING_VALUE',
      Value: 'STRING_VALUE'
    },
    /* more items */
  ]
};
ses.sendEmail(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});