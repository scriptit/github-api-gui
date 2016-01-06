'use strict';

var fs = require('fs');
var express = require('express');
var browserify = require('browserify-middleware');
var babelify = require('babelify');
var request = require('then-request');
var envify = require('envify');
var uglifyify = require('uglifyify');

var app = express();

app.get('/', function (req, res, next) {
  var tag = Date.now();
  res.send('<meta charset="utf-8"/><title>GAPIGUI</title><link href="/static/' + tag + '/index.css" rel="stylesheet"><div id="container" class="container"></div><script src="https://www.promisejs.org/polyfills/promise-7.0.4.min.js"></script><script src="/static/' + tag + '/index.js"></script><!--last updated ' + (new Date()).toISOString() + '-->');
});

app.get('/static/:tag/index.js', browserify(__dirname + '/index.js', {
  transform: process.env.NODE_ENV === 'production' ? [
    [envify, {global: true}],
    [uglifyify, {global: true}],
    babelify.configure({
      optional: [
        /*'minification.deadCodeElimination',
        'minification.constantFolding',
        'minification.memberExpressionLiterals',
        'minification.propertyLiterals',
        'minification.removeConsole',
        'minification.removeDebugger',*/

        'optimisation.react.inlineElements',
        'optimisation.react.constantElements',
        'utility.inlineEnvironmentVariables'
      ]
    })
  ] : [
    babelify.configure({})
  ],
  minify: false
}));
var bootstrap = request('get', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css').getBody('utf8');
app.get('/static/:tag/index.css', function (req, res, next) {
  res.type('css');
  bootstrap.done(function (body) {
    res.send(
      body + '\n\n' +
      fs.readFileSync(__dirname + '/components/rc-switch.css', 'utf8') + '\n\n' +
      fs.readFileSync(__dirname + '/components/object-inspector/index.css', 'utf8')
    );
  }, next);
});

module.exports = app.listen(3000);
console.log('listening on http://localhost:3000');
