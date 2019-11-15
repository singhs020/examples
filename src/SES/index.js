/* Getting Started with AWS SES v1 using node js. This part shows how to send email using SES */


// Load the AWS SDK for Node.js
const AWS = require("aws-sdk");

const ses = new AWS.SES({apiVersion: "2010-12-01"});
var params = {
  "Destination": {
    "BccAddresses": [
      "ADD VALUE HERE",
    ],
    "CcAddresses": [
      "ADD VALUE HERE",
    ],
    "ToAddresses": [
      "ADD VALUE HERE",
    ]
  },
  "Message": {
    "Body": {
      "Html": {
        "Data": "ADD VALUE HERE",
        "Charset": "ADD VALUE HERE"
      },
      "Text": {
        "Data": "ADD VALUE HERE",
        "Charset": "ADD VALUE HERE"
      }
    },
    "Subject": {
      "Data": "ADD VALUE HERE",
      "Charset": "ADD VALUE HERE"
    }
  },
  "Source": "ADD VALUE HERE",
  "ReplyToAddresses": [
    "ADD VALUE HERE"
  ]
};
ses.sendEmail(params, function(err, data) {
  if (err) {
    console.log("There was an erorr", err);
  }
  else {
    console.log("Mail Sent", data);
  }
});

// using promise
ses.sendEmail(params).promise()
.then(data => console.log(data))
.catch(err => console.log(err));
