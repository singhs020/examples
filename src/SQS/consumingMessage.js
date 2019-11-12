/* Getting Started with AWS SQS using node js. This part shows how to consume message from the SQS */


// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');

const sqs = new AWS.SQS({apiVersion: '2012-11-05'});

const qurl = "ADD YOUR SQS URL HERE";

const params = {
  "QueueUrl": qurl,
  "MaxNumberOfMessages": 1
};

sqs.receiveMessage(params, (err, data) => {
  if (err) {
    console.log(err, err.stack);
  } else {
    if (!Array.isArray(data.Messages) || data.Messages.length === 0) { 
      console.log("There are no messages available for processing."); 
      return;
    }    
    
    const body = JSON.parse(data.Messages[0].Body);
    console.log(body);

    // process the body however you see fit.
    // once the processing of the body is complete, delete the message from the SQS to avoid reprocessing it.

    const delParams = {
      "QueueUrl": qurl,
      "ReceiptHandle": data.Messages[0].ReceiptHandle
    };

    sqs.deleteMessage(delParams, (err, data) => {
      if (err) {
        console.log("There was an error", err);
      } else {
        console.log("Message processed Successfully");
      }
    });
  }
});

// the above message can be implemented using promise as well.