const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  accessKeyId: "********RPMEY",
  secretAccessKey: "***********/90obG01aJ1nl1eu"
});

const fileName = 'function-lambda.zip';

const uploadFile = () => {
  fs.readFile(fileName, (err, data) => {
     if (err) throw err;
     const params = {
         Bucket: 'hello-function-lambda-bucket', // pass your bucket name
         Key: 'function-lambda', // file will be saved as testBucket/contacts.csv
         Body: JSON.stringify(data, null, 2)
     };
     s3.upload(params, function(s3Err, data) {
         if (s3Err) throw s3Err
         console.log(`File uploaded successfully at ${data.Location}`)
     });
  });
};

uploadFile();