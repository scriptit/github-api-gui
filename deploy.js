'use strict';

process.env.NODE_ENV = 'production';

var url = require('url');
var stop = require('stop');
var s3 = require('s3');

var server = require('./server.js');

stop.getWebsiteStream('http://localhost:3000', {
  filter: function (currentURL) {
    return url.parse(currentURL).hostname === 'localhost' && !/glyphicons/.test(currentURL);
  },
  parallel: 1
})
.syphon(stop.addFavicon())
.syphon(stop.minifyJS({silent: false, warnings: false}))
.syphon(stop.minifyCSS({
  deadCode: false, // our app is too dynamic to be able to list all the things that we have
  silent: false
}))
.syphon(stop.addManifest('/app.manifest', {addLinks: true}))
.syphon(stop.log())
.syphon(stop.checkStatusCodes([200]))
.syphon(stop.writeFileSystem(__dirname + '/out'))
.wait().done(function () {
  server.close();
  console.log('done building website');
  var client = s3.createClient({
    s3Options: {
      accessKeyId: process.env.S3_KEY,
      secretAccessKey: process.env.S3_SECRET,
      region: process.env.S3_REGION
    },
  });
  var uploader = client.uploadDir({
    localDir: __dirname + '/out',
    deleteRemoved: false,
    s3Params: {
      Bucket: process.env.S3_BUCKET,
      Prefix: ''
    }
  });
  uploader.on('error', function(err) {
    console.error('unable to sync:', err.stack);
  });
  uploader.on('end', function() {
    console.log("done uploading website");
  });
});
