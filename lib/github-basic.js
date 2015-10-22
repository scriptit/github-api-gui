var Client = require('github-basic/lib/client');

module.exports = function (options) {
  return new Client(options, require('then-request'), function wrap(fn) {
    try {
      return fn.call(this);
    } catch (ex) {
      return Promise.reject(ex);
    }
  }, function when(promise, cb, eb) {
    return Promise.resolve(promise).then(cb.bind(this), eb && eb.bind(this));
  }, function all(promises) {
    return Promise.all(promises);
  });
};
