
const AWS = require('aws-sdk');
const uuid = require('uuid');

const bucketName = 'lcloud-427-ag';

var bucketPromise = new AWS.S3({apiVersion: '2006-03-01'}).listObjectsV2({Bucket: bucketName}).promise();


bucketPromise.then(
    function (data) {
        console.log(data.Contents.forEach(file => console.log(file.Key)));
    }
).catch(
    function (err) {
        console.error(err)
    }
);
