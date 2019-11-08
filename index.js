// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');

const credentials={
    id:"AKIAXIB6BRACSZAPQCTT",
    secret:"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"
}

// Set region
AWS.config.update({region: 'us-east-1'});
AWS.config.accessKeyId=credentials.id;
AWS.config.secretAccessKey=credentials.secret;

// Create publish parameters
let params = {
  Message: 'Aloha', /* required */
  PhoneNumber: '+5519981858526',
};

// Create promise and SNS service object
var publishTextPromise = new AWS.SNS().publish(params).promise();




function sendSMS() {
    // Handle promise's fulfilled/rejected states
    publishTextPromise.then(function (data) {
        console.log("MessageID is " + data.MessageId);
    }).catch(function (err) {
        console.error(err, err.stack);
    });
}

sendSMS(params);