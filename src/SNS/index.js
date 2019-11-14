/* Getting Started with AWS SNS using node js. This part shows how to publish content to SNS */


// Load the AWS SDK for Node.js
const AWS = require("aws-sdk");

const sns = new AWS.SNS({apiVersion: "2010-03-31"});
const params = {
  "Message": JSON.stringify({"foo": "bar"}),
  "TopicArn": "ARN FOR TOPIC YOU WANT TO PUBLISH TO"
};

// By using Callback
sns.publish(params, (err, data) => {
  if (err) {
    console.log("There was an Error: ", err);
  } else {
    console.log("Successfully published.", data);
  }
});


// Promise implementation
sns.publish(params).promise()
.then(data => console.log("Successfully published.", data))
.catch(err => console.log("There was an Error: ", err));