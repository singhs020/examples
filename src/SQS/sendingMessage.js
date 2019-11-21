/* Getting Started with AWS SQS using node js. This part shows how to send message to the SQS */


// Load the AWS SDK for Node.js
const AWS = require("aws-sdk");

const sqs = new AWS.SQS({apiVersion: "2012-11-05"});
const params = {
  "MessageBody": JSON.stringify({
    "orderId": "this-is-an-order-id",
    "date": "2020–02–02",
    "shipBy": "2020–02–04",
    "foo": "bar"
  }),
  "QueueUrl": "ADD YOUR QUEUE URL HERE"
};

// By using Callback
sqs.sendMessage(params, (err, data) => {
  if (err) {
    console.log("There was an Error: ", err);
  } else {
    console.log("Successfully added message to queue", data.MessageId);
  }
});


// Promise implementation
sqs.sendMessage(params).promise()
.then(data => console.log("Successfully added message to queue", data.MessageId))
.catch(err => console.log("There was an Error: ", err));