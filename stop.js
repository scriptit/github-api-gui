'use strict';

process.env.NODE_ENV = 'production';

var url = require('url');
var stop = require('stop');

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

  console.log('success');
});
