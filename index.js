'use strict';

var name = 'import-inspector-metadata';
var key = typeof Symbol === 'function' ? Symbol(name) : name;

function wrap(promise, metadata) {
  promise[key] = metadata;
  return promise;
}

function inspect(promise) {
  return promise[key];
}

exports.wrap = wrap;
exports.inspect = inspect;
