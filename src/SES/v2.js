/* Getting Started with AWS SES v2 using node js. This part shows how to send email using SES */


// Load the AWS SDK for Node.js
const AWS = require("aws-sdk");

const ses = new AWS.SESV2({apiVersion: "2019-09-27"});
const data = "Test Data";
const params = {
  "Content": {
    "Raw": {
      "Data": Buffer.from(data) || data
    },
    "Simple": {
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
    "Template": {
      "TemplateArn": "ADD VALUE HERE",
      "TemplateData": "ADD VALUE HERE"
    }
  },
  "Destination": {
    "BccAddresses": [
      "ADD VALUE HERE"
    ],
    "CcAddresses": [
      "ADD VALUE HERE"
    ],
    "ToAddresses": [
      "ADD VALUE HERE"
    ]
  },
  "FromEmailAddress": "ADD VALUE HERE",
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
