// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');

const credentials={
    id:"AKIAXIB6BRACSG6VSUPU",
    secret:"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"
}

// Set region
AWS.config.update({region: 'us-east-1'});
AWS.config.accessKeyId=credentials.id;
AWS.config.secretAccessKey=credentials.secret;

// Create publish parameters
let params = {
  Message: 'teste de mensagem', /* required */
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