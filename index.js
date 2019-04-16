
const AWS = require('aws-sdk');
const uuid = require('uuid');
const fs = require('fs');

const bucketName = 'lcloud-427-ag';

var listPromise = new AWS.S3({apiVersion: '2006-03-01'}).listObjectsV2({Bucket: bucketName}).promise();


listPromise.then(
    function (data) {
        console.log(data.Contents.forEach(file => console.log(file.Key)));
    }
).catch(
    function (err) {
        console.error(err)
    }
);

var readStream = fs.readFile('myfile.txt', function (err, data) {

    var base64data = new Buffer.from(data);

    var uploadPromise = new AWS.S3({apiVersion: '2006-03-01'}).upload({Bucket: bucketName, Key: 'data.txt', Body: base64data}).promise();

    uploadPromise.then(
        function (data) {
            console.log(data);
        }
    ).catch(
        function (err) {
            console.error(err);
        }
    );
});

