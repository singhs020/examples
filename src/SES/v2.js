/* Getting Started with AWS SES v1 using node js. This part shows how to send email using SES */


// Load the AWS SDK for Node.js
const AWS = require("aws-sdk");

const ses = new AWS.SESV2({apiVersion: "2019-09-27"});
var params = {};
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
