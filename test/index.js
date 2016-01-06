'use strict';

process.env.NODE_ENV = 'production';

var test = require('testit');
var request = require('then-request');

test('fetching URLs', function () {
  var server = require('../server');
  test('/', function () {
    return request('GET', 'http://localhost:3000').getBody('utf8');
  });
  test('/static/test/index.js', function () {
    return request('GET', 'http://localhost:3000/static/test/index.js').getBody('utf8').then(function (src) {
      // check the result is syntactically valid
      Function('', src);
    });
  });
  test('/static/test/index.css', function () {
    return request('GET', 'http://localhost:3000/static/test/index.css').getBody('utf8');
  });
  test('close server', function () {
    server.close();
  });
});