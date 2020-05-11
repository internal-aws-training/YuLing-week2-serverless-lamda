const AWS = require('aws-sdk');
const s3 = new AWS.S3();
s3.getObject(params, function (err, data)
{
  if (err)
  {
    console.log(err, err.stack); // an error occurred
    return null
  }
  else
  {
    console.log(data);           // successful response
    return data
  }
});
exports.handler = async function (event, context)
{
  var params = { Bucket: 'yuling-s3-01', Key: 'hello.txt' }
  var s3file = s3.getObject(params)

  return s3file
}
