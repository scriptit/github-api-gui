'use strict';

var fs = require('fs');
var Repository = require('github-stream');
var MarkdownIt = require('markdown-it');

var md = new MarkdownIt();
var stream = new Repository('github', 'developer.github.com', {auth: 'bd88d0e5c39f1f3ca1a6f99cae7aed6e4c17b105'});

var allMethods = [];
function processFile(src) {
  var ast = md.parse(src, {});
  var methods = [/*{action: 'PUT/POST/GET etc.', path: '/gists', level: Number} */];
  var inHeading = false, headingLevel = null;
  var inParameters = false, parametersLevel = null;
  var inTable = false, currentTable = null;
  ast.forEach(processNode);
  function processNode(node) {
    if (inTable) {
      currentTable.push(node);
      if (node.type === 'table_close') {
        if (inParameters) {
          var params = processTable(currentTable);
          methods.forEach(function (method) {
            params.forEach(function (param) {
              method.params.push(param);
            });
          });
        }
        inTable = false;
        currentTable = null;
      }
      return;
    }
    switch (node.type) {
      case 'code_block':
        var match = /^([A-Z]+) (\/[^ ]+)$/.exec(node.content.trim());
        if (match) {
          var method = {
            action: match[1],
            path: match[2],
            level: headingLevel,
            params: []
          };
          methods.push(method);
          allMethods.push(method);
        }
        break;
      case 'heading_open':
        inHeading = true;
        headingLevel = +(node.tag.substr(1));
        if (headingLevel <= parametersLevel) {
          inParameters = false;
          parametersLevel = null;
        }
        methods = methods.filter(function (method) {
          return method.level < headingLevel;
        });
        break;
      case 'heading_close':
        inHeading = false;
        break;
      case 'text':
        if (inHeading && node.content === 'Parameters') {
          inParameters = true;
          parametersLevel = headingLevel;
        }
        break;
      case 'table_open':
        inTable = true;
        currentTable = [node];
        break;
      case 'inline':
        node.children.forEach(processNode);
        break;
    }
  }
}
function processTable(nodes) {
  var inHead = false, inBody = false;
  var currentRow = null, currentCell;
  var head = [], body = [];
  nodes.forEach(function (node) {
    switch (node.type) {
      case 'table_open':
      case 'table_close':
        break;
      case 'thead_open':
        inHead = true;
        break;
      case 'thead_close':
        inHead = false;
        break;
      case 'tbody_open':
        inBody = true;
        break;
      case 'tbody_close':
        inBody = false;
        break;
      case 'tr_open':
        currentRow = [];
        break;
      case 'tr_close':
        if (inHead) head.push(currentRow);
        if (inBody) body.push(currentRow);
        currentRow = null;
        break;
      case 'th_open':
      case 'td_open':
        break;
      case 'th_close':
      case 'td_close':
        if (typeof currentCell === 'string') {
          currentRow.push(currentCell);
        } else {
          currentRow.push('');
        }
        break;
      case 'inline':
        if (node.children.length === 1 && node.children[0].type === 'code_inline') {
          currentCell = node.children[0].content;
        } else if (currentRow.length === 1 && inBody) { // is a complex parameter type
          switch (node.content) {
            case '`array` of `string`s':
            case '`array` of `strings`':
              currentCell = 'array<string>';
              break;
            case '`array` of `object`s':
              currentCell = 'array<object>';
              break;
            case '`integer` or `string`':
              currentCell = 'integer || string';
              break;
            default:
              throw new Error('Unexpected type: ' + node.content);
          }
        } else {
          currentCell = md.render(node.content.replace(/\<br *\/\>/gi, '\n'));
        }
        break;
      default:
        console.dir(node, {depth: 10, colors: true});
    }
  });
  return body.map(function (row) {
    return {name: row[0], type: row[1].toLowerCase(), description: row[2]};
  });
}

stream.on('data', function (update) {
  if (update.type === 'File' && update.path.indexOf('/content/v3/') === 0 && /\.md$/.test(update.path)) {
    processFile(update.body.toString('utf8'));
  }
});

stream.waitUntilReady().done(function () {
  var api = {};
  allMethods.map(function (method) {
    return method.action;
  }).sort().forEach(function (action) {
    if (!api[action]) api[action] = {};
  });
  allMethods.sort(function (a, b) {
    return a.path < b.path ? -1 : 1;
  }).forEach(function (method) {
    api[method.action][method.path] = method.params;
  });
  fs.writeFileSync(__dirname + '/api.js', 'module.exports = ' + JSON.stringify(api, null, '  '));
  //console.dir(api, {colors: true, depth: 10});
  stream.dispose();
});
